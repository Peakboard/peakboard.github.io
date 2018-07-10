---
layout: article
title: PDF Script Beispiel
menu_title: PDF Script Beispiel
description: PDF Script Beispiel
lang: de
ref: scr-10
---
In diesem Scripting Beispiel wird das Script für eine PDF Präsentation die automatisch startet erklärt.


![image_1](/assets/images/scripting/Scripting_Beispiele/PDF.png)

Für die PDF Präsentation kann eine Start- und Endseite bestimmt werden, zwischen welchen dann die Präsentation läuft.
Dafür werden zwei Variablen `StartPage` und `EndPage` als Datenquellen angelegt, in welche die jeweiligen Seitenzahlen eingetragen werden können.

Das Script für die Präsentation ist danach sehr einfach:

```lua
if screens['Screen1'].PDFViewer.page >= data.EndPage then
	screens['Screen1'].PDFViewer.page = data.StartPage
else
	screens['Screen1'].PDFViewer.page = screens['Screen1'].PDFViewer.page + 1
end

screens['Screen1'].Page.text = screens['Screen1'].PDFViewer.page .. ' /  ' .. screens['Screen1'].PDFViewer.pagecount

```

Zuerst wird überprüft, ob die Endseite schon erreicht wurde. Wenn dies der Fall ist, springt die Präsentation automatisch zu der vorher bestimmten Startseite.
Wenn dies nicht der Fall ist, wird der aktuellen Seite eine Seite hinzugefügt.
Abschließend wird die aktuelle Seite noch in ein Textfeld geschrieben. Dafür wird die aktuelle Seitenzahl über `screens['Screen1'].PDFViewer.page` ermittelt und dann noch in Verbindung eines Backslashes die Gesammtseitenzahl angezeigt `screens['Screen1'].PDFViewer.pagecount`.

Dieses Beispiel findet sich im Peakboard Designer unter Templates -> Scripting, oder kann über diesen [Link](https://github.com/Peakboard/CoolStuff/raw/master/Scripts/PDF%20Viewer/PDF%20Viewer.pbmx) heruntergeladen werden.
