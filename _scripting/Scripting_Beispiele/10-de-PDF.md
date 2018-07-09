---
layout: article
title: PDF Skript Beispiel
menu_title: PDF Skript Beispiel
description: PDF Skript Beispiel
lang: de
ref: scr-09
---
In diesem Skripting Beispiel wird das Skript für eine PDF Präsentation die automatisch startet erklärt.


![image_1](/assets/images/scripting/Scripting_Beispiele/PDF.png)

Für die PDF Präsentation kann eine Start- und Endseite bestimmt werden zwischen welchen dann die Präsentation Läuft.
Dafür werden zwei Variabeln `StartPage` und `EndPage` als Datenquellen angelegt, in welche dann die jeweiligen Seitenzahlen eingetragen werden können.

Das Skript für die Präsentation ist dann sehr einfach:


```lua
if screens['Screen1'].PDFViewer.page >= data.EndPage then
	screens['Screen1'].PDFViewer.page = data.StartPage
else
	screens['Screen1'].PDFViewer.page = screens['Screen1'].PDFViewer.page + 1
end

screens['Screen1'].Page.text = screens['Screen1'].PDFViewer.page .. ' /  ' .. screens['Screen1'].PDFViewer.pagecount

```

Zuerst wird überprüft, ob die Endseite schon erreicht wurde. Wenn dies der Fall ist, springt die Präsentation automatisch zu der vorher bestimmten Startseite.
Wenn dies nicht der fall ist, wird der aktuellen seite eine seite hinzugefügt.
Abschließend 

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


Dieses Beispiel findet sich im Peakboard Designer unter Templates -> Scripting, oder kann über diesen [Link](https://github.com/Peakboard/CoolStuff/raw/master/Scripts/PDF%20Viewer/PDF%20Viewer.pbmx) heruntergeladen werden.
