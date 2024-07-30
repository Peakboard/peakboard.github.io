---
layout: article
title: Skript zum Erkennen von Tastatureingaben
menu_title: Skript zum Erkennen von Tastatureingaben
description: Beschreibt, wie Tastatureingaben auf der Peakboard Box mit einem Skript erkannt werden können.
lang: de
weight: 155
ref: scr-155
redirect_from:
---

# Skript für das Erkennen von Tastatureingaben

Tastatureingaben auf der Peakboard Box können mit einem Skript erkannt werden. Dazu wird ein Event angelegt, welches bei jeder Tastatureingabe ausgelöst wird. Das Event wird mit einer Funktion verknüpft, die dann entscheidet, welche Aktion bei bestimmten Eingaben ausgeführt werden soll.

## Tastatureingaben erkennen
Es gibt zwei Arten von Tastatureingaben-Events, die auf der Peakboard Box erkannt werden können: 
- `KeyPressed` 
- `KeyInput`

Der Unterschied zwischen den beiden Events besteht darin, dass `KeyPressed` bei jeder Tastatureingabe ausgelöst wird, während `KeyInput` nur ausgelöst wird, wenn ein Input durch ein `Enter`-Zeichen abgeschlossen wird.

Für die Erkennung von Tastatureingaben eignet sich das `KeyPressed`-Event besser, da es bei jeder Tastatureingabe ausgelöst wird und somit eine Echtzeit-Erkennung der Eingaben ermöglicht.

Geht es hingegen um die Eingabe von Texten oder Zahlen, die durch ein `Enter`-Zeichen abgeschlossen werden, eignet sich das `KeyInput`-Event besser, da es nur bei einem abgeschlossenen Input ausgelöst wird.

## Event anlegen
Um ein `KeyPressed`- oder `KeyInput`-Event anzulegen, wird im Package-Explorer unter Skripte ein neues globales Event hinzugefügt. Dazu wird über einen Rechtsklick ein Kontextmenü geöffnet und ein `KeyPressed`- oder `KeyInput`-Event ausgewählt.

![Key-Event anlegen](/assets/images/scripting/Scripting_Beispiele/key-input/en-add-key-pressed.png)

Nachdem das Event angelegt wurde, kann das Skript definiert werden, welches startet, sobald eine Tastatureingabe getätigt wird.

## Umgang mit KeyPressed-Events

### Key-Code auslesen
Über den Parameter `e` des Events kann auf die gedrückte Taste zugegriffen werden. Mit `e.key` wird die gedrückte Taste als `Key`-Code zurückgegeben.

```lua
e.key
```

Wichtig ist, dass dieser Key-Code noch nicht dem Buchstabenwert der Taste entspricht, sondern einem numerischen Wert, der die Taste repräsentiert.

### Key-Code in Buchstaben umwandeln
Um den Buchstabenwert der Taste zu erhalten, kann die Funktion `keytostring` verwendet werden. Diese Funktion wandelt den numerischen Key-Code in den entsprechenden Buchstabenwert um.

```lua
keytostring(e.key)
```

### Auf Tastatureingaben reagieren
Nachdem der Key-Code in einen Buchstabenwert umgewandelt wurde, kann auf die Eingabe reagiert werden. Dazu kann eine `if`-Abfrage verwendet werden, die prüft, ob die gedrückte Taste einem bestimmten Wert entspricht.

Hier ein Beispiel, das einen Buzzer abspielt, falls die Taste `A` gedrückt wurde:
```lua
if keytostring(e.key) == 'A' then
   runtime.playsound('buzzer')
end
```

### Modifier-Tasten erkennen
Neben den normalen Tasten können auch die Modifier-Tasten wie `Shift`, `Control` oder `Alt` erkannt werden. Dazu kann die Funktion `modifiertostring` verwendet werden, die die gedrückten Modifier-Tasten als String zurückgibt.

Hier ein Beispiel, das prüft, ob die `Shift`-, `Control`- oder `Alt`-Taste gedrückt wurde und die Hintergrundfarbe eines Steuerelements entsprechend ändert:

```lua
if string.contains(modifiertostring(e.modifier), 'Shift') then
   screens['Screen1'].ShiftBg.background = brushes.fromhex('#FFFFC400')
else
   screens['Screen1'].ShiftBg.background = brushes.fromhex('#FF2A6473')
end

if string.contains(modifiertostring(e.modifier), 'Control') then
   screens['Screen1'].CtrlBg.background = brushes.fromhex('#FFFFC400')
else
   screens['Screen1'].CtrlBg.background = brushes.fromhex('#FF2A6473')
end

if string.contains(modifiertostring(e.modifier), 'Alt') then
   screens['Screen1'].AltBg.background = brushes.fromhex('#FFFFC400')
else
   screens['Screen1'].AltBg.background = brushes.fromhex('#FF2A6473')
end
```

## Umgang mit KeyInput-Events
Im Gegensatz zu `KeyPressed`-Events wird bei `KeyInput`-Events der gesamte Text, der durch die Tastatureingabe entstanden ist, übergeben. Dieser Text kann dann weiterverarbeitet werden.

Der Building Block `Get text` kann verwendet werden, um den Text aus dem Event auszulesen.
![Input Text auslesen](/assets/images/scripting/Scripting_Beispiele/key-input/en-get-key-input-text.png)

Im Skript kann der Text aus dem Event über den Parameter `e` ausgelesen werden:
```lua
e.text
```

### Auf Tastatureingaben reagieren
Nachdem der Text aus dem Event ausgelesen wurde, kann auf die Eingabe reagiert werden. Dazu kann eine `if`-Abfrage verwendet werden, die prüft, ob der eingegebene Text einem bestimmten Wert entspricht.

Hier ein Beispiel, das prüft, ob der eingegebene Text `Hello` ist:
```lua
if string.contains(e.text, 'Hello') then
   runtime.playsound('buzzer')
end
```