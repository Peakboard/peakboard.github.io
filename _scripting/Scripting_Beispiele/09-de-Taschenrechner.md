---
layout: article
title: Taschenrechner Skript Beispiel
menu_title: Taschenrechner Skript Beispiel
description: Taschenrechner Skript Beispiel
lang: de
ref: scr-09
---
In diesem Skripting Beispiel wird die aufbau eines sehr Simplen Taschenrechners erklärt, welcher addieren und subtrahieren kann.


![image_1](/assets/images/scripting/Scripting_Beispiele/Taschenrechner.png)

Dabei werden die Zahlen zum rechnen jeweils in das rechte und linke Textfeld eingetragen.
Über den Button welcher momentan auf "+" steht kann die rechenart bestimmt werden:

```lua
if screens['Screen1'].PlusMinus.text == '+' then 
	screens['Screen1'].PlusMinus.text = '-'
else
	screens['Screen1'].PlusMinus.text = '+'
end

```

Dafür wird überprüft, welcher Text monentan in dem Button (welcher PlusMinus heißt) steht. Wenn der Text '+' lautet dann wird er auf '-' gesetzt.
Wenn der Text nicht '+' ist muss er '-' sein, deshalb wird er dann ohne zu überprüfen auf '+' gesetzt.

Über den Button "Click me" wird die berechnung gestartet:

```lua 
local result = 0 
--Check the text in the plus minus button
	
if screens['Screen1'].PlusMinus.text == '+' then 
	result = tonumber(screens['Screen1'].Left.text) + tonumber(screens['Screen1'].Right.text) 
else
	result = tonumber(screens['Screen1'].Left.text) - tonumber(screens['Screen1'].Right.text)
end

-- Show the result in a dialog 
screens['Screen1'].showdialog('Result', result)	

```

Dafür wird zuerst eine locale variable für das ergebnis erstellt `local result`. danach wird anhand des Texts in dem PlusMinus Button betsimmt, ob die zahlen in den beiden Textfeldern addiert oder subtrahiert werden sollen.
Das ergebnis dieser berechnung im Skript wird dann in die locale variable 'result' geschrieben und zuletzt über `screens['Screen1'].showdialog('Result', result)` Als Pop-Up Benachrichtigung auf dem Bildschirm angezeigt


Dieses Beispiel findet sich im Peakboard Designer unter Templates -> Scripting, oder kann über diesen [Link](https://github.com/Peakboard/CoolStuff/raw/master/Scripts/Calculator/Calculator.pbmx) heruntergeladen werden.
