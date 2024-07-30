---
layout: article
title: Seite im PDF Control wechseln
menu_title: Seite im PDF Control wechseln
description: Beschreibt, wie die Seite im PDF-Control geändert werden kann
lang: de
weight: 157
ref: scr-157
redirect_from:
---

Wird ein PDF-Viewer in Peakboard verwendet, kann mithilfe eines Skripts die Seite des PDF-Dokuments gewechselt werden. Dies kann dabei entweder automatisch nach dem Ablauf eines Zeitintervalls oder durch manuelles Auslösen per Button oder Event erfolgen.

## Manueller Seitenwechsel
Ein manueller Seitenwechsel kann durch das Auslösen eines Events oder durch das Drücken eines Buttons erfolgen. Um den Seitenwechsel per Knopfdruck zu realisieren, wird ein Button im Designer platziert und ein `Click`-Event angelegt, das beim Klicken auf den Button ausgelöst wird. Das Skript, das beim Event ausgeführt wird, wechselt dann die Seite des PDF-Dokuments.

Der Seitenwechsel wird über die `shownextpage`-Methode des PDF-Viewers realisiert. Bei der Erstellung des Skripts mit Building Blocks, kann der `Show Next Page`-Block verwendet werden, der sich unter `Screens` -> `PDF Control` -> `Show Next Page` befindet.

![Seitenwechsel bei Button-Klick](/assets/images/scripting/Scripting_Beispiele/pdf-page-change/en-script-show-next-page.png)

Das Skript zum Wechseln der Seite des PDF-Dokuments sieht dann wie folgt aus:

```lua
-- Seitenwechsel bei Button-Klick
screens['Screen1'].PDF_Control.shownextpage()
```

Soll in der PDF-Datei zur vorherigen Seite gewechselt werden, kann die Methode `showpreviouspage` bzw. der entsprechende Building Block verwendet werden.

```lua
-- Seitenwechsel zur vorherigen Seite bei Button-Klick
screens['Screen1'].PDF_Control.showpreviouspage()
```

## Manueller Seitenwechsel mit Limitierung
Wird keine Limitierung der Seitenzahlen eingebaut, wird beim Aufruf der `shownextpage`-Methode, wenn die letzte Seite erreicht ist, wieder die erste Seite des PDF-Dokuments angezeigt. Soll dies verhindert werden, wird die aktuelle Seitenzahl in einer Variable gespeichert und beim Erreichen der letzten Seite keine weitere Seite angezeigt.

Eine Lösung hierfür sieht wie folgt aus:

![Limitierung der Seiten](/assets/images/scripting/Scripting_Beispiele/pdf-page-change/en-script-show-next-page-with-limit.png)

Wird der Skript-Modus verwendet, kann dieses Skript verwendet werden:

```lua
if data.CurrentPageNumber > 1 then
   data.CurrentPageNumber = data.CurrentPageNumber - 1
   screens['Screen1'].PDF_Control.showpreviouspage()
end
```

## Automatischer Seitenwechsel
Ähnlich wie der manuelle Seitenwechsel mit Limitierung, wird ein automatischer Seitenwechsel auch mit einer Variable realisiert, die die aktuelle Seitenzahl speichert. Der Unterschied besteht darin, dass der Seitenwechsel automatisch nach einem festgelegten Zeitintervall erfolgt.

Zusätzlich wird eine Boolean-Variable `AutomaticChange` verwendet, die bestimmt, ob der automatische Seitenwechsel aktiviert ist oder nicht.

### Anlegen eines Timers
Um den automatischen Seitenwechsel zu realisieren, wird ein Timer angelegt, der in regelmäßigen Abständen die Methode `shownextpage` des PDF-Viewers aufruft und die aktuelle Seitennummer erhöht. Um einen Timer anzulegen, wird im Package-Explorer unter `Skripte` -> `Timer` ein neuer Timer hinzugefügt. Dazu wird über einen Rechtsklick ein Kontextmenü geöffnet und `Add` ausgewählt.

![Neuen Timer anlegen](/assets/images/scripting/Scripting_Beispiele/pdf-page-change/en-create-new-timer.png)

Nachdem der Timer angelegt wurde, kann das Skript definiert werden, das beim Ablauf des Timers ausgeführt wird. Das Skript erhöht die aktuelle Seitenzahl und wechselt die Seite des PDF-Dokuments.

![Timer-Skript](/assets/images/scripting/Scripting_Beispiele/pdf-page-change/en-script-automatic-page-change.png)

Das Skript zum automatischen Seitenwechsel sieht dann wie folgt aus:

```lua
if data.AutomaticChange == true then
   if data.CurrentPageNumber >= data.PagesCount then
      data.CurrentPageNumber = 1
   else
      data.CurrentPageNumber = data.CurrentPageNumber + 1
   end
   screens['Screen1'].PDF_Control.page = data.CurrentPageNumber
end
```

### Starten und Stoppen des Timers
Um den Timer zu starten und zu stoppen, wird ein Toggle Switch auf die Designer-Oberfläche gezogen und ein `IsActive`-Event angelegt, das beim Betätigen des Toggles ausgelöst wird. Das Skript, das beim Event ausgeführt wird, setzt die Boolean-Variable `AutomaticChange` auf `true` oder `false`, um den automatischen Seitenwechsel zu aktivieren oder zu deaktivieren.

![Starten und Stoppen des Timers](/assets/images/scripting/Scripting_Beispiele/pdf-page-change/en-automatic-change-toggle.png)