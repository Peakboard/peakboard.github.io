---
layout: article
title: Nachbearbeiten von Tabellen-Daten
menu_title: Nachbearbeiten von Tabellen-Daten
description: Nachbearbeiten von Tabellen-Daten
lang: de
ref: scr-03
---
Der überwiegende Teil der Peakboard-Kunden nutzt irgendeine Art von Datenanbindung an ihre Boards und in den allermeisten Fällen sind die Daten tabellarisch. Oft kommt es allerdings vor, dass die Rohdaten nicht der Form genügen, mit denen man sie direkt an visuelle Elemente binden kann. Dieser Artikel erklärt die gängigsten Use Cases um Daten per Script in die richtige Form zu bringen. Selbst wenn Sie kein Programmierer sind, sollten Sie sich von den Scripten hier nicht abschrecken lassen. Sie sind kaum komplizierter als eine anspruchsvolle Excel-Formel. Bewegen sich also durchaus auf einem Niveau, mit dem auch ein engagierter Power User klar kommen sollte. Generell gilt aber ein Grundsatz: Machen Sie so viel möglich an Filterung, Aggregation und anderer Logik bereits in der Datenquelle – sei es nun eine Datenbank, SAP oder ein anderes Vorsystem. Je besser die Daten aus dem Vorsystem herauskommen, desto einfacher ist die Aufbereitung. Das Aufbereiten per Script ist also immer nur die zweitbeste Lösung zu sehen.

Die Datenbasis für die folgenden Beispiele ist hier eine Abfrage, die Lieferpositionen eines Lagers enthält. Die Nachbereitung dieser Rohdaten erfolgt dann im Refresh-Event der Datasource. Der folgende Screenshot zeigt, wie man eine Schleife über die Rohdaten laufen lässt, die pro Zeile die lokale Variable counter um eins erhöht und dann am Ende den Wert von counter in eine Textbox auf dem Screen zu schreiben.

Sie brauchen das While-Konstrukt im übrigen nicht von Hand tippen. Klappen Sie einfach links den Objekt/Statement-Baum auf, navigieren Sie zu der Datenquelle und doppelklicken Sie auf das gewünschte Statement.

![image_1](/assets/images/scripting/table/scriptingtabellen01.png)

Hier nochmal das Script in seiner Rohfassung:

```lua
local counter = 0

for index, item in pairs(Data.tapos) do
 counter = counter + 1
end

Screens[0].MyCounterBox.Text = counter

```
Für den Fall, dass Sie einfach nur die Zeilen zählen wollen, wäre das auch einfacher gegangen, und zwar mit der Count-Eigenschaft der Datenquelle:


`Screens[0].MyCounterBox.Text = Data.tapos.Count`

Das Schleifenkonstukt von oben eignet sich als eher für komplexere Statement, die noch mit Bedingungen verknüpft sind. Das nächste Statement zählt die Zeilen nur, wenn eine Spalte (Queue) einen bestimmten Wert hat:

```lua
for index, item in pairs(Data.tapos) do
 if item.Queue == 'KLEIN' then
   AnzahlTaPosWaKlein = AnzahlTaPosWaKlein + 1
 end
end
```
