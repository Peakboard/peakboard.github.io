---
layout: article
title: Erkennen von Tabelleninteraktionen
menu_title: Erkennen von Tabelleninteraktionen
description: Skript zum Erkennen von Tabelleninteraktionen
lang: de
weight: 162
ref: scr-162
redirect_from:
---

Das Tabellen-Element bietet zwei Events, mit denen auf Interaktionen reagiert werden kann: 
- `DataRowLoaded` 
- `CellTapped` 

Diese Events ermöglichen es, dynamische und interaktive Tabellen zu erstellen.

## DataRowLoaded-Event
Das `DataRowLoaded`-Event wird ausgelöst, wenn eine neue Zeile in die Tabelle geladen oder eingefügt wird. Dieses Event eignet sich hervorragend, um Aktionen während des Ladevorgangs der Tabelle auszuführen, wie beispielsweise das Einfärben von Zeilen basierend auf bestimmten Kriterien.

Um ein `DataRowLoaded`-Event zu nutzen, wähle zunächst das Tabellen-Element aus, für das das Event hinzugefügt werden soll. Im Control Panel auf der rechten Seite des Peakboard Designers findest du in der Logik-Sektion die Möglichkeit, das `DataRowLoaded`-Event hinzuzufügen.

![DataRowLoaded-Event hinzufügen](/assets/images/scripting/Scripting_Beispiele/table-interaction/en-add-data-row-loaded-event.png)

Nach dem Hinzufügen des Events öffnet sich ein neues Fenster, in dem du das Skript einfügen kannst, das beim Auslösen des Events ausgeführt wird.

Im Skript kannst du auf die Daten der aktuell geladenen Zeile zugreifen und verschiedene Aktionen ausführen, indem du die folgenden Building Blocks verwendest:

![Zugriff auf Daten der Zeile](/assets/images/scripting/Scripting_Beispiele/table-interaction/en-script-access-event-data.png)

```lua
-- Zeilenindex
local _ = e.index

-- Wert der Zelle in der Spalte 'Id'
local _ = e.datarow["Id"]

-- Wert der Zelle in der Spalte mit dem Index 0
local _ = table.getcelltext(e, 0)

-- Setzen des Textes in der Zelle in der Spalte mit dem Index 0
table.setcelltext(e, 0, '')

-- Färben des Texts in der gesamten Zeile mit der Farbe '#ff0000'
table.colorrowtext(e, brushes.fromhex('#ff0000'))

-- Färben des Hintergrunds der gesamten Zeile mit der Farbe '#ff0000'
table.colorrow(e, brushes.fromhex('#ff0000'))
```

Das folgende Skript färbt jede Zeile grün ein, die in der Spalte `IsChecked` den Wert `True` hat. Zusätzlich wird ein Zähler erhöht, der die Anzahl der grün eingefärbten Zeilen zählt.

![Einfärben der geladenen DataRow](/assets/images/scripting/Scripting_Beispiele/table-interaction/en-script-color-loaded-row.png)

```lua
if e.datarow["IsChecked"] then
   table.colorrow(e, brushes.fromhex('#FFC6FF00'))
   table.colorrowtext(e, brushes.fromhex('#FF000000'))
   data.CheckedItemsAmount = data.CheckedItemsAmount + 1
else
   table.colorrow(e, brushes.fromhex('#FFFF6E40'))
end
```

## CellTapped-Event
Das `CellTapped`-Event wird ausgelöst, wenn eine Zelle in einer Tabelle angeklickt wird. Mit diesem Event kannst du auf Klicks reagieren und beispielsweise eine Detailansicht öffnen oder eine mit der Zelle verknüpfte Aktion ausführen.

Um ein `CellTapped`-Event zu nutzen, wähle zunächst das Tabellen-Element aus, für das das Event hinzugefügt werden soll. Im Control Panel auf der rechten Seite des Peakboard Designers kannst du in der Logik-Sektion das `CellTapped`-Event hinzufügen.

![CellTapped-Event hinzufügen](/assets/images/scripting/Scripting_Beispiele/table-interaction/en-add-cell-tapped-event.png)

Nach dem Hinzufügen des Events öffnet sich ein neues Fenster, in dem du das Skript einfügen kannst, das beim Auslösen des Events ausgeführt wird.

Im Skript kannst du auf die Daten der angeklickten Zelle zugreifen und verschiedene Aktionen ausführen:

```lua
-- Zeilenindex
screens['Screen1'].RowIndexText.text = string.tostring(e.row)

-- Spaltenindex
screens['Screen1'].CellIndexText.text = string.tostring(e.column)

-- Wert der Zelle
screens['Screen1'].DataValueText.text = data.Demo_List[e.row][e.column]
```