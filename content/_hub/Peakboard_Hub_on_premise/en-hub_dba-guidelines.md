---
layout: article
product: hub
title: Guidelines for database administrators
menu_title: DBA guidelines
description: Peakboard Hub on premise - which changes database administrators may make on the Peakboard Hub database, and what to watch out for
lang: en
weight: 108
ref: hub-108
redirect_from:
---

This article is written for the database administrator (DBA) who looks after the SQL Server database of a Peakboard Hub on premise. It describes the changes you are explicitly **allowed to make on your own**, without contacting Peakboard, and the behavior you should be aware of before you make them.

The Peakboard Hub stores the content of its lists in two dedicated database schemas:

{% include styled_table.html %}
{: .w-full }
| Schema | Content |
|---|---|
| `variablelist` | The tables of the [Peakboard Hub Lists](/hub/Lists/en-hub_lists-overview.html) |
| `flowlist` | The output lists written by Hub Flows |

The Peakboard Hub creates and maintains these tables itself — it adds and removes columns, and it adjusts the column lengths automatically as the data grows.

<div class="box-warning" markdown="1"> **Note**: If anything in this article conflicts with an instruction from Peakboard Support, please follow Support.
</div>

## Creating indexes on variablelist and flowlist

<div class="box-tip" markdown="1"> **Permitted**: You may create, alter and drop your own indexes on the tables in the `variablelist` and `flowlist` schemas. The Peakboard Hub does not require any specific index beyond the tables' primary keys, and it will not remove or modify indexes you have created.
</div>

### These tables may be write-heavy

List tables are not read-mostly reporting tables. Peakboard Boxes, the Peakboard Designer, Hub Flows and the Public API may write to them continuously, and a common pattern is a **full overwrite** of a list (the table is emptied and re-inserted in one transaction). Individual lists can receive very high write volumes, depending on how they are used.

<div class="box-warning" markdown="1"> **Indexes slow down writes and can block data from being inserted.** Please add indexes deliberately: only where a measured need exists, keep them as narrow as possible, and validate the effect under realistic write load rather than on an idle system.
</div>

### Indexes limit how far a text column can grow

Text columns in list tables are created as bounded `NVARCHAR(n)` and are widened automatically by the Peakboard Hub when a longer value arrives (255 → 850 → 1500 → 4000 → `NVARCHAR(MAX)`). SQL Server restricts how wide a column that participates in an index may become, so an index you create places a **ceiling** on that column:

{% include styled_table.html %}
{: .w-full }
| Column in your index | Maximum length | Reason |
|---|---|---|
| Key column | 850 characters | SQL Server limits index keys to 1,700 bytes (850 `nchar`). |
| `INCLUDE` column | 4,000 characters | A column referenced by an index cannot be converted to `NVARCHAR(MAX)`. |
| Not indexed | unlimited (`NVARCHAR(MAX)`) | No index dependency, so the column can grow without limit. |

If a value arrives that is longer than this ceiling, the Peakboard Hub **rejects that write and logs a message naming the column and the index**. It never silently drops or alters your index, and it never truncates stored data. The write simply fails until either the index is removed or a shorter value is used.

<div class="box-tip" markdown="1"> **Recommendation**: Prefer indexing numeric, boolean or short text columns. Be careful when indexing a text column whose content length is not under your control — if the application later needs to store a longer value there, your index will block it.
</div>

### Size a text column down before you index it

The ceiling above is only half of the story. SQL Server allows a column that an index references to be made **wider**, but never **narrower**. Creating an index therefore also **pins the column at whatever length it has at that moment**, for as long as the index exists. The Peakboard Hub can then no longer size it down — neither with the [Size down] button in the **Edit list permissions** dialog nor with the automatic pass that runs after a Peakboard Hub update.

<div class="box-warning" markdown="1"> **Order matters — indexing too early locks in the old width.** Lists created before Peakboard Hub 1.26 have unlimited (`NVARCHAR(MAX)`) text columns, and the update to 1.26 sizes them down once to the smallest length that fits their data. If you index such a column *before* that has happened, it stays unlimited (or at 4,000 characters) permanently — which is the very shape the index was meant to avoid. Worse, SQL Server accepts a key column wider than 850 characters only with a warning: any value longer than 850 characters later fails to insert.
</div>

Recommended order when you want to index a text column:

1. Let the Peakboard Hub update finish. When the pass is complete, the Peakboard Hub logs `Existing list columns sized down: … column(s) across … table(s)`.
2. Check the column's current length. It is shown in the **Length** column of the **Edit list permissions** dialog (**Users** > user group > **Lists** tab > click the list), or you can query it directly:
   ```sql
   SELECT name, max_length / 2 FROM sys.columns WHERE object_id = OBJECT_ID('variablelist.<table>')
   ```
   A result of `0` means unlimited (`NVARCHAR(MAX)`, where `max_length` is `-1`).
3. If the column is still wider than the data needs, click [Size down] next to it in the **Edit list permissions** dialog.
4. Create your index.

To size down a column that is *already* indexed, drop the index, size the column down, then recreate the index. Until you do, the Peakboard Hub skips that column on every sizing pass and logs a warning naming the index — this is expected, not an error. The Peakboard Hub never drops or recreates an index you created in order to resize a column.

### If a user deletes an indexed column

A Peakboard Hub user can delete a column of a list. If that column is covered by one of your indexes, the Peakboard Hub warns the user in the **Delete indexed columns** dialog that a database index exists and asks for explicit confirmation. Only if the user confirms is the index dropped together with the column. Please keep this in mind when you rely on an index you created.

## Instant File Initialization

<div class="box-tip" markdown="1"> **Permitted — at your own risk**: You may enable Instant File Initialization (IFI) for the SQL Server instance that hosts the Peakboard Hub database. It is enabled by granting the **Perform Volume Maintenance Tasks** Windows privilege to the SQL Server service account (or via the corresponding option in SQL Server Setup). This is a server-side setting and requires no change on the Peakboard side.
</div>

Without IFI, SQL Server fills newly allocated data-file space with zeros before it can be used. Every autogrow event therefore stalls until the new space has been written. Because the list tables of the Peakboard Hub grow with the data your Peakboard Boxes and Hub Flows write, these stalls can appear as latency spikes or blocking-like pauses under load. With IFI enabled, data-file growth is effectively instantaneous.

Please note:

* IFI applies to **data files only**. Transaction log files are always zero-initialized, regardless of this setting.
* Because released pages are no longer overwritten with zeros, someone with direct file-level access to the data files could in principle read remnants of previously deleted data. This is the reason the decision — and the risk assessment — remains with you as the database administrator.
* Enabling IFI does not replace sensible autogrow settings. Please also review the autogrow increments of the Peakboard Hub database.
