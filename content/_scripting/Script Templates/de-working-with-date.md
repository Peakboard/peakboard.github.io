---
layout: article
title: Zeit-, Datumsberechnungen
menu_title: Zeit-, Datumsberechnungen
description: Zeit und Datum berechnen und manipulieren.
lang: de
weight: 156
ref: scr-156
redirect_from:
---

Es stehen verschiedene Möglichkeiten der Manipulation bereit.

Um mit dem aktuellen Datum/Zeit arbeiten zu können, muss grundsätzlich eine Datenquelle vom Typ Zeit angelegt werden. Innerhalb von Peakboard werden Zeiten/Daten als String gehandhabt, weshalb grundsätzlich eine Konvertierung via Skript erfolgen muss.

## Zeit- / Datum berechnen

Wenn beispielsweise 7 Tage vom aktuellen Datum abgezogen werden sollen, muss das aktuelle Datum in einer Variablen, zum Beispiel ```ManipulatedTime```, zwischengespeichert und anschließend in ein Datumsformat konvertiert werden. Danach wird über die Datum-Addieren-Funktion ```–7``` addiert. Um eine lesbare Anzeige zu erhalten, wird das Ergebnis noch in einen formatierten String konvertiert.

Im Folgenden die Umsetzung mit den Peakboard Building Blocks.

![Substract_Date](/assets/images/scripting/Scripting_Beispiele/working-with-date/en-script-substract-date.png)

Sowie mit normalem Lua Skript.

```lua
local parsedDate = date.parse(data.ManipulatedTime, 'yyyyMMddHHmmss')
local adjustedDate = date.addday(parsedDate, -7)
data.ManipulatedTime = date.tostring(adjustedDate, 'yyyyMMddHHmmss')
```

## Zeit- / Datumsunterschiede berechnen

Bei der Berechnung einer Zeitdifferenz ist ein ähnliches Vorgehen von Nöten. Über die Subtraktionsfunktion wird die aktuelle Zeit von der Zielzeit abgezogen. Als Ergebnis wird die Differenz in Sekunden ausgegeben. Um ein anderes Intervall zu erhalten, muss das Ergebnis zum Beispiel durch 60 geteilt werden, um eine Differenz in Minuten zu erhalten. Dies ist im folgenden Screenshot mit Hilfe der Peakboard Building Blocks zu sehen.

![Date_diff](/assets/images/scripting/Scripting_Beispiele/working-with-date/en-script-date-diff.png)

Analog dazu wird im folgenden Skript der Datumsstring aus der Variablen ```ManipulatedTime``` in ein Datum umgewandelt. Anschließend wird die Differenz zum aktuellen Datum aus der Datenquelle ```Source_TimeCurrent``` berechnet und das Ergebnis in ganze  Tage umgerechnet.

```lua
local parsedDate = date.parse(data.ManipulatedTime, 'yyyyMMddHHmmss')
local dateDifference = date.difference(parsedDate, data.Source_TimeCurrent.getluadate())
data.TimeDifference = math.floor(((dateDifference / 60) / 60) / 24)
```