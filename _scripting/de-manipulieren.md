---
layout: article
title: Tabellendaten Manipulieren
menu_title: Tabellendaten Manipulieren
description: Tabellendaten Manipulieren
lang: en
ref: scr-4
---
Beim Peakboard-Scripting werden sehr oft tabellenartige Objekte genutzt. Das können entweder Daten aus einer Datenquelle sein oder aus einer tabellenartigen Variable. Im folgenden sind alle Standardaktivitäten aufgelistet, die man mit Tabellen machen kann, um die Daten zu manipulieren. In den Beispielen wird eine statische Tabelle mit Kundendaten verwendet:

![image_1](/assets/images/scripting/table-2/ScriptingTabellendatenManipulieren.png)

## Daten ändern
Das folgende Beispiel zeigt eine Schleife, die über die Daten läuft und bei Bedarf einen Wert korrigiert, wenn ein bestimmte Bedingung erfüllt ist:

```lua
for i = 0, Data.myKunden.Count - 1 do

if Data.myKunden[i].KundenNr == "4712" then
 Data.myKunden[i].KundenName = "Wohlfarth"
 end

end
```
## Daten hinzufügen

Das typische Pattern beim Hinzufügen eines Datensatzes ist zunächst eine neue Zeile anzulegen, dann diese Zeile mit Daten zu befüllen, um sie dann der Tabelle hinzufügen:

```lua
local item = Data.myKunden.newRow()
item.KundenNr = "4755"
item.KundenName = "Bächle"
Data.myKunden.add(item)
```
## Daten löschen

Das Löschen von Daten nach einem bestimmten Kriterium ist leider etwas tricky. Man kann nicht über die Ergebnismenge loopen und Zeilen im Verlauf des Loops löschen. Das würde dem Schleifenzeiger seine Objekte praktisch unter dem Hintern wegziehen wie wenn man den Ast absägt, auf dem man sitzt. Daher werden zunächst in einer Schleife alle zu löschenden Zeilen identifiziert und in eine temporäre Tabelle namens ItemsToRemove abgelegt. Im zweiten Schritt wird über die temporäre Tabelle geloopt und dann gelöscht.

```lua
local j = 0
 local itemsToRemove = {}

for i = 0, Data.myKunden.Count - 1 do
 local item = Data.myKunden[i]

  if item.KundenNr == "4755" then
    itemsToRemove[j] = item
   j = j + 1
   end
end

for n = 0, j - 1 do
 Data.myKunden.remove(itemsToRemove[n])
end
```
