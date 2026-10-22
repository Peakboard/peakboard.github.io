---
layout: article
product: hub
title: Leitfaden für Datenbankadministratoren
menu_title: DBA-Leitfaden
description: Peakboard Hub on premise - welche Änderungen Datenbankadministratoren an der Datenbank des Peakboard Hub vornehmen dürfen und worauf sie dabei achten müssen
lang: de
weight: 108
ref: hub-108
redirect_from:
---

Dieser Artikel richtet sich an den Datenbankadministrator (DBA), der die SQL-Server-Datenbank eines Peakboard Hub on premise betreut. Er beschreibt die Änderungen, die du **ausdrücklich selbst vornehmen darfst**, ohne Peakboard zu kontaktieren, und das Verhalten, das du vorher kennen solltest.

Der Peakboard Hub speichert den Inhalt seiner Listen in zwei eigenen Datenbankschemas:

{% include styled_table.html %}
{: .w-full }
| Schema | Inhalt |
|---|---|
| `variablelist` | Die Tabellen der [Peakboard Hub Listen](/hub/Listen/de-hub_lists-overview.html) |
| `flowlist` | Die Ausgabelisten, die Hub Flows schreiben |

Der Peakboard Hub legt diese Tabellen selbst an und pflegt sie: Er fügt Spalten hinzu, entfernt sie und passt die Spaltenlängen automatisch an, wenn die Daten wachsen.

<div class="box-warning" markdown="1"> **Beachte**: Widerspricht etwas in diesem Artikel einer Anweisung des Peakboard Supports, so folge bitte dem Support.
</div>

## Indizes auf variablelist und flowlist anlegen

<div class="box-tip" markdown="1"> **Erlaubt**: Du darfst auf den Tabellen der Schemas `variablelist` und `flowlist` eigene Indizes anlegen, ändern und löschen. Der Peakboard Hub benötigt außer den Primärschlüsseln der Tabellen keinen bestimmten Index und verändert keine Indizes, die du angelegt hast. Er entfernt sie aber, wenn ein Nutzer die zugehörige Spalte oder Liste löscht (siehe [Wenn ein Nutzer eine indizierte Spalte löscht](#wenn-ein-nutzer-eine-indizierte-spalte-löscht)).
</div>

### Diese Tabellen können sehr schreiblastig sein

Listentabellen sind keine Reporting-Tabellen, die überwiegend gelesen werden. Peakboard Boxen, der Peakboard Designer, Hub Flows und die Public API können laufend in sie schreiben. Ein häufiges Muster ist das **vollständige Überschreiben** einer Liste (die Tabelle wird in einer Transaktion geleert und neu befüllt). Je nach Nutzung können einzelne Listen sehr hohe Schreibvolumen haben.

### Indizes begrenzen, wie weit eine Textspalte wachsen kann

Textspalten in Listentabellen werden als begrenztes `NVARCHAR(n)` angelegt und vom Peakboard Hub automatisch verbreitert, sobald ein längerer Wert ankommt (255 → 850 → 1500 → 4000 → `NVARCHAR(MAX)`). SQL Server schränkt ein, wie breit eine Spalte werden darf, die Teil eines Index ist. Ein Index, den du anlegst, setzt dieser Spalte daher eine **Obergrenze**:

{% include styled_table.html %}
{: .w-full }
| Spalte in deinem Index | Maximale Länge | Grund |
|---|---|---|
| Schlüsselspalte | 850 Zeichen | SQL Server begrenzt Indexschlüssel auf 1.700 Byte (850 `nchar`). |
| `INCLUDE`-Spalte | 4.000 Zeichen | Eine Spalte, auf die ein Index verweist, kann nicht in `NVARCHAR(MAX)` umgewandelt werden. |
| Nicht indiziert | unbegrenzt (`NVARCHAR(MAX)`) | Keine Abhängigkeit von einem Index, die Spalte kann also unbegrenzt wachsen. |

Kommt ein Wert an, der länger als diese Obergrenze ist, **lehnt der Peakboard Hub diesen Schreibvorgang ab und schreibt eine Meldung mit dem Namen der Spalte und des Index ins Log**. Er löscht oder verändert deinen Index nie stillschweigend und kürzt niemals gespeicherte Daten. Der Schreibvorgang schlägt einfach fehl, bis entweder der Index entfernt oder ein kürzerer Wert verwendet wird.

<div class="box-tip" markdown="1"> **Empfehlung**: Indiziere bevorzugt numerische, boolesche oder kurze Textspalten. Sei vorsichtig bei Textspalten, deren Inhaltslänge du nicht selbst in der Hand hast: Muss die Anwendung dort später einen längeren Wert speichern, blockiert dein Index ihn.
</div>

### Textspalten vor dem Indizieren verkleinern

Die Obergrenze oben ist nur die halbe Wahrheit. SQL Server erlaubt es, eine Spalte, auf die ein Index verweist, **breiter** zu machen, aber niemals **schmaler**. Ein Index **fixiert die Spalte deshalb auf der Länge, die sie im Moment seiner Anlage hat**, solange er besteht. Der Peakboard Hub kann sie dann nicht mehr verkleinern – weder über den Button [Size down] im Dialog **Edit list permissions** noch über den automatischen Durchlauf nach einem Update des Peakboard Hub.

<div class="box-warning" markdown="1"> **Die Reihenfolge zählt – wer zu früh indiziert, schreibt die alte Breite fest.** Listen, die vor Peakboard Hub Version 2.3.0.0 angelegt wurden, haben unbegrenzte Textspalten (`NVARCHAR(MAX)`). Das Update auf Version 2.3.0.0 verkleinert sie einmalig auf die kleinste Länge, in die ihre Daten passen. Indizierst du eine solche Spalte, *bevor* das geschehen ist, bleibt sie dauerhaft unbegrenzt (oder bei 4.000 Zeichen) – also genau in der Form, die der Index eigentlich vermeiden sollte. Schlimmer noch: Eine Schlüsselspalte, die breiter als 850 Zeichen ist, akzeptiert SQL Server nur mit einer Warnung, und jeder spätere Wert mit mehr als 850 Zeichen lässt sich nicht mehr einfügen.
</div>

Empfohlene Reihenfolge, wenn du eine Textspalte indizieren möchtest:

1. Lass das Update des Peakboard Hub vollständig durchlaufen. Ist der Durchlauf abgeschlossen, schreibt der Peakboard Hub `Existing list columns sized down: … column(s) across … table(s)` ins Log.
2. Prüfe die aktuelle Länge der Spalte. Sie wird in der Spalte **Length** des Dialogs **Edit list permissions** angezeigt (**Users** > Nutzergruppe > Reiter **Lists** > Liste anklicken), oder du fragst sie direkt ab:
   ```sql
   SELECT name, max_length / 2 FROM sys.columns WHERE object_id = OBJECT_ID('variablelist.<table>')
   ```
   Ein Ergebnis von `0` bedeutet unbegrenzt (`NVARCHAR(MAX)`, dort ist `max_length` gleich `-1`).
3. Ist die Spalte noch breiter, als die Daten es erfordern, klicke im Dialog **Edit list permissions** daneben auf [Size down].
4. Lege deinen Index an.

Um eine Spalte zu verkleinern, die *bereits* indiziert ist, löschst du den Index, verkleinerst die Spalte und legst den Index danach neu an. Solange du das nicht tust, überspringt der Peakboard Hub diese Spalte bei jedem Verkleinerungsdurchlauf und schreibt eine Warnung mit dem Namen des Index ins Log – das ist erwartetes Verhalten, kein Fehler. Der Peakboard Hub löscht einen von dir angelegten Index nie, um eine Spalte in der Größe zu ändern, und legt ihn auch nicht neu an.

### Wenn ein Nutzer eine indizierte Spalte löscht

Ein Nutzer des Peakboard Hub kann eine Spalte einer Liste löschen. Ist diese Spalte Teil eines deiner Indizes, warnt der Peakboard Hub den Nutzer im Dialog **Delete indexed columns**, dass ein Datenbankindex existiert, und verlangt eine ausdrückliche Bestätigung. Nur wenn der Nutzer bestätigt, wird der Index zusammen mit der Spalte gelöscht. Behalte das im Hinterkopf, wenn du dich auf einen selbst angelegten Index verlässt.

## Instant File Initialization

<div class="box-tip" markdown="1"> **Erlaubt – auf eigenes Risiko**: Du darfst Instant File Initialization (IFI) für die SQL-Server-Instanz aktivieren, auf der die Datenbank des Peakboard Hub liegt. Du aktivierst sie, indem du dem Dienstkonto des SQL Servers das Windows-Recht **Perform Volume Maintenance Tasks** („Durchführen von Volumewartungsaufgaben") gewährst (oder über die entsprechende Option im SQL Server Setup). Das ist eine serverseitige Einstellung, auf Seiten von Peakboard ist keine Änderung nötig.
</div>

Ohne IFI füllt SQL Server neu zugewiesenen Platz in den Datendateien mit Nullen, bevor er genutzt werden kann. Jedes automatische Vergrößern (Autogrow) hält deshalb an, bis der neue Platz geschrieben ist. Da die Listentabellen des Peakboard Hub mit den Daten wachsen, die deine Peakboard Boxen und Hub Flows schreiben, können sich diese Pausen unter Last als Latenzspitzen oder blockierungsähnliche Aussetzer zeigen. Mit IFI wächst die Datendatei praktisch sofort.

Bitte beachte:

* IFI gilt **nur für Datendateien**. Transaktionsprotokolldateien werden unabhängig von dieser Einstellung immer mit Nullen initialisiert.
* Da freigegebene Seiten nicht mehr mit Nullen überschrieben werden, könnte jemand mit direktem Zugriff auf die Datendateien grundsätzlich Reste bereits gelöschter Daten lesen. Deshalb liegt die Entscheidung – und die Risikobewertung – bei dir als Datenbankadministrator.
* IFI ersetzt keine sinnvollen Autogrow-Einstellungen. Prüfe bitte auch die Vergrößerungsschritte der Datenbank des Peakboard Hub.
