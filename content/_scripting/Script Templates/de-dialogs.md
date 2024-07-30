---
layout: article
title: Dialoge und Anzeigen
menu_title: Dialoge und Anzeigen
description: Dialoge und Anzeigen
lang: de
weight: 161
ref: scr-161
redirect_from:
---

Innerhalb der Applikation stehen folgende Dialoge und Anzeigen zur Verfügung:

1. Mitteilung 
2. Fehler
3. Pop-Up mit OK und Abbrechen
4. Pop-Up mit eigenen Antworten

Zudem ist es möglich, Elemente innerhalb der Applikation ein- und auszublenden.

### Mitteilungen

Eine einfache Mitteilung lässt sich mit folgendem Code erzeugen:

![Message](/assets/images/scripting/Scripting_Beispiele/dialogs/en-script-message.png)

```lua
runtime.shownotification('Dies ist eine Mitteilung mit einer Dauer von 5 Sekunden.', notifieroptions.formessages(5000))
```

### Fehlermeldungen

Für eine Fehlermeldung ist der Code wie folgt anzupassen:

![Error_message](/assets/images/scripting/Scripting_Beispiele/dialogs/en-script-error-message.png)

```lua
runtime.shownotification('Dies ist eine Fehlermeldung mit einer Dauer von 10 Sekunden.', notifieroptions.forerrormessages(10000))
```

### Standard Pop-Up

Ein Standard Pop-Up lässt sich über folgende Zeile Code erzeugen:

![Pop_up](/assets/images/scripting/Scripting_Beispiele/dialogs/en-script-pop-up.png)

```lua
runtime.showdialog('Einfacher Pop-Up Header', 'Einfacher Pop-Up Text.')
```

### Individuelles Pop-Up

Bei einem individuellen Pop-Up ist es nötig, im Vorfeld zwei eigene Funktionen zu definieren, welche dann anhand der Auswahl innerhalb des Pop-Ups getriggert werden.

Der Code für dieses Pop-Up lautet:

![Custom_pop_up](/assets/images/scripting/Scripting_Beispiele/dialogs/en-script-custom-pop-up.png)

```lua
runtime.showdialog('Pop-Up mit eigenen Antworten Header', 'Pop-Up mit eigenen Antworten Text. Sie können eigene Funktionen an die untenstehenden Buttons anhängen und deren Text ändern.', 'Ich stimme zu', 'Ich lehne ab', AgreeFunction, DisagreeFunction)
```

### Sichtbarkeit von Elementen steuern

Zur Steuerung der Sichtbarkeit verschiedener Elemente innerhalb der Applikation kann folgender Code verwendet werden:

![Visible](/assets/images/scripting/Scripting_Beispiele/dialogs/en-script-visible.png)

```lua
if screens['Screen1'].groups['Group2'].visible then
   screens['Screen1'].groups['Group2'].hide()
else
   screens['Screen1'].groups['Group2'].show()
end
```