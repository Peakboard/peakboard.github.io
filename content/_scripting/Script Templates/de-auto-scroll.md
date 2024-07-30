---
layout: article
title: Autoscroll in Listen
menu_title: Autoscroll in Listen
description: Beschreibt, wie das automatische Scrollen in Listen aktiviert wird.
lang: de
weight: 158
ref: scr-158
redirect_from:
---

Beim Anzeigen von langen Listen ist es häufig nützlich, diese automatisch zu scrollen, um alle Einträge anzuzeigen. Dies kann über die Verwendung eines `Reload`-Skripts, einigen Variablen und der `Filter`-Funktion in einem Dataflow realisiert werden.

## Anlegen eines Dataflows
Ein Dataflow wird verwendet, um die Daten zu filtern und die Anzeige der Liste zu steuern. Dazu wird ein neuer Dataflow angelegt, der die Daten aus der Datenquelle nutzt und so manipuliert, dass nur die gewünschten Daten angezeigt werden.

In dem Dataflow wird dann ein periodisches Reload eingestellt, das die Daten in regelmäßigen Abständen neu lädt und so die Liste aktualisiert.

![Periodisches Reload Intervall](/assets/images/scripting/Scripting_Beispiele/list-auto-scroll/en-periodic-reload-flow.png)

Die hier eingestellte Zahl bestimmt später, wie schnell die Seite sich automatisch scrollt bzw. wie lange es dauert, bis neue Daten angezeigt werden.

## Anlegen der Hilfsvariablen
Um den automatischen Scrollvorgang zu steuern, werden einige Hilfsvariablen benötigt. Diese werden im Package Explorer unter `Variablen` angelegt.

Es werden folgende Variablen benötigt:
- `CurrentIndex` - speichert den aktuellen Index der Liste
- `RangeSize` - speichert die Anzahl der Elemente, die gleichzeitig angezeigt werden
- `ScrollRange` - speichert, wie viele Elemente weit die Liste pro Scrollvorgang gescrollt wird

Alle Variablen werden als `Number` angelegt. In unserem Beispiel wird `CurrentIndex` auf 0 gesetzt, `RangeSize` auf 10 und `ScrollRange` auf 3.

## Filtern mit dem Dataflow
Um die Liste zu filtern und nur die gewünschten Elemente anzuzeigen, wird ein Dataflow-Step verwendet. Der Dataflow-Step wird so eingestellt, dass nur die Elemente angezeigt werden, die im aktuellen Scrollbereich liegen.

Um einen Dataflow-Step anzulegen, muss zunächst der Dataflow geöffnet werden. Hierzu wird per Doppelklick auf den Dataflow im Package Explorer der Dataflow-Editor geöffnet.

Dort kann jetzt per Klick auf das `+`-Symbol ein neuer Dataflow-Step hinzugefügt werden.

![Dataflow Step erstellen](/assets/images/scripting/Scripting_Beispiele/list-auto-scroll/en-edit-dataflow.png)

Nach dem Klick öffnet sich ein neues Fenster, in dem die Art des Dataflow-Steps ausgewählt werden kann. Hier wird `Filter` ausgewählt.

![Filter auswählen](/assets/images/scripting/Scripting_Beispiele/list-auto-scroll/en-add-data-step.png)

Um den Filter zu konfigurieren, wird im nächsten Schritt zunächst der `Scriptmodus` aktiviert. Hier kann dann das Skript eingefügt werden, das die Elemente filtert.

![In Skriptmodus wechseln](/assets/images/scripting/Scripting_Beispiele/list-auto-scroll/en-use-script-editor.png)

Das Skript, das die Elemente filtert, sieht dann wie folgt aus:

```lua
return (index < (data.CurrentIndex + data.RangeSize) and index >= data.CurrentIndex)
```

Das Skript filtert die Elemente so, dass nur die Elemente angezeigt werden, die im Bereich `CurrentIndex` bis `CurrentIndex + RangeSize` liegen. In unserem Beispiel werden also nur die Elemente angezeigt, deren Index zwischen 0 und 10 liegt.

## Anlegen eines Reload-Skripts
Ein Reload-Skript wird immer dann ausgeführt, wenn sich Daten einer Datenquelle oder eines Dataflows ändern. In unserem Fall wird das Reload-Skript verwendet, um die Variablen so anzupassen, dass ein neuer Bereich der Liste angezeigt wird.

Ein Reload-Skript wird im Package Explorer unter `Skripte` -> `After Data Reload` angelegt.

![Reload-Skript anlegen](/assets/images/scripting/Scripting_Beispiele/list-auto-scroll/en-after-data-reload.png)

In dem Dialog, der sich nach einem Klick auf `Add` öffnet, kann dann ausgewählt werden, welcher Dataflow das Reload-Skript auslösen soll. In unserem Fall wird der Dataflow ausgewählt, der die Liste filtert.

Ab jetzt wird jedes Mal, wenn der Dataflow die Liste filtert, das Reload-Skript ausgeführt.

Das Skript, das dann die Variablen anpasst, funktioniert wie folgt:

1. Es wird geprüft, ob bereits das Ende des Listenbereichs erreicht wurde. Wenn ja, wird der Index auf 0 zurückgesetzt.
2. Ansonsten wird der Index um den Wert von `ScrollRange` erhöht.

Mit Building Blocks sieht das Skript in unserem Beispiel so aus:

![Reload-Skript](/assets/images/scripting/Scripting_Beispiele/list-auto-scroll/en-script-reload.png)

Das zugehörige Lua Skript wie folgt:

```lua
local lastview = false

lastview = false
if data.CurrentIndex + data.RangeSize > data.DataList.count then
   data.CurrentIndex = data.CurrentIndex + (data.DataList.count - data.CurrentIndex)
   lastview = true
else
   data.CurrentIndex = data.CurrentIndex + data.ScrollRange
end
if lastview == true or data.CurrentIndex == data.DataList.count then
   data.CurrentIndex = 0
end
```