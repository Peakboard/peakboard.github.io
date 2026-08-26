---
layout: article
title: Network share files
menu_title: Network share files
description: Read the contents of a network folder into Peakboard as a table of files.
lang: en
weight: 1650
ref: dat-1650
---

The Network share files data source does not read the *content* of a file — it reads the *folder itself*. You get one row per file, with its path, its name and the time it was last modified. That makes it easy to build things a dashboard usually cannot show: the newest drawing for a work station, how many test reports arrived today, or whether the shift protocol from last night exists at all.

### Setting up the data source

Add a new data source in the explorer and choose [Network share files]. The dialog asks for the following:

* **Data source name:** the name the list will have in your project.
* **Folder path:** the UNC path of the folder on the network drive, for example `\\Server\Folder`.
* **Username** and **Password:** a user with access rights to that folder, given as `Domain\User`. Leave both empty if the folder is accessible without separate credentials.
* **Max rows:** the upper limit of rows to read. The default is 1000 — useful, because a folder can contain far more files than a dashboard should ever load.
* **Check subfolders:** also walks the folders below the given path instead of only its top level.
* **Include folders:** lists the folders themselves as rows, not just the files.

Click the reload icon above the preview to load the data and check that the path and the credentials are correct before you confirm with [OK].

### The columns you get

| Column | Content |
|---|---|
| `Path` | the full path of the file |
| `Name` | the file name, without the path |
| `LastModified` | when the file was last changed |
| `IsFolder` | only present when [Include folders] is enabled: whether the row is a folder |

`LastModified` arrives as text. If you want to sort or filter by it, or calculate an age from it, convert it in a [dataflow](/dataflows/en-getting-started.html) first.

### Typical uses

* Bind the list to a Table to show the documents belonging to a work station, sorted by [LastModified] so the newest is on top.
* Use a dataflow to limit the rows to a single day and show the count as a KPI — how many reports were delivered today.
* Combine [Path] with an [Image](/controls/Media/en-image.html) or [PDF](/controls/Document/en-pdf.html) control to display the newest drawing from the folder directly on the dashboard.

<div class="box-tip" markdown="1">
**Tip:**

The Peakboard Box needs access to the network share as well, not just your computer. Credentials that work in the Peakboard Designer because you happen to be logged into the domain will not necessarily work on the device — that is what the username and password fields are for.
</div>
