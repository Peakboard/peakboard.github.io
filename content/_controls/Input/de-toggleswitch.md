---
layout: article
title: Kippschalter
menu_title: Kippschalter
description: Information über Peakboard Designer Kippschalter Control.
lang: de
weight: 740
ref: con-740
redirect_from:
  - /controls/de-toggleswitch.html
---
Mit dem Kippschalter-Control kannst Du zwischen zwei Zuständen wählen, beispielsweise An/Aus oder Start/Stopp. Er wird primär dazu verwendet, boolesche Werte in einer Datenquelle zu ändern oder interaktive Prozesse in der Visualisierung zu steuern.
Du findest den Kippschalter im Peakboard Designer in der Gruppe Interaktiv (1). Klicke auf die drei Punkte und wähle das Kippschalter-Icon aus. Ziehe das Icon per Drag-and-Drop auf deine Arbeitsfläche.

![image_1](/assets/images/Controls/Toggle-Switch/de-toggleswitch01)

##Konfiguration und Eigenschaften
Sobald du den Kippschalter doppelt anklickst, erscheint der Konfigurationsdialog. 
__(1)__ __Allgemein__ __und__ __Datenbindung__
In diesem Bereich definierst du die Identität des Schalters:
•	__Datenquelle__: Hier nimmst du die Datenverknüpfung vor (1). Du kannst den Schalter direkt an eine Datenquelle binden (z. B. eine Variable vom Typ Boolean). Wenn sich der Zustand des Schalters ändert, wird der Wert sofort in die Variable zurückgeschrieben.
![image_2](/assets/images/Controls/Toggle-Switch/de-toggleswitch02)
Du kannst die Datenquelle auch über die Eigenschaften auf der rechten Seite unter "Daten" mit dem Kippschalter-Control anbinden und verknüpfen.

__(2)__ __Aussehen__ __und__ __Beschriftung__
In den Eigenschaften auf der rechten Seite bearbeitest du die visuelle Gestaltung:
•	__Label__: Hier kannst du dem Kippschalter eine Bezeichnung vergeben
•	__Aussehen__: Definiere die Schriftart, Größe und Position des Textes, Farben für den Hintergrund und den Schieber.
Unter Kontur kannst Du bestimmen, wie rund oder eckig der Schalter erscheinen soll

##Scripting
Um das Control in einem Building-Block-Script zu verwenden, ist es vorerst wichtig, dass der Kippschalter mit einer fixen booleschen Variable verknüpft ist(1) und die Funktion __"__ __In__ __Skripten__ __verwendet__ __"__(2) aktiv ist.
Achte ebenfalls darauf, dass der Initialwert der booleschen Variable mit dem Status des Kippschalters übereinstimmt.
![image_3](/assets/images/Controls/Toggle-Switch/de-toggleswitch03_scripting_voreinstellung)
__Beispiel__: Überprüfen, ob der Kippschalter aktiviert ist
Öffne dazu im Designer den Script-Editor auf der rechten unteren Seite unter __Logik__ und " __Umgeschaltet__ ". Wähle unter der Blockkategorie __Basics__ und __Logik__  den Blockcode " __Wenn-Dann-Anweisung__ " mit einem Doppelklick aus oder ziehe ihn auf die Editor-Oberfläche.
Wähle den Blockcode " __Variable__abrufen__ " unter der Kategorie __Variablen__ und setze Sie in das erste freie Feld im __Wenn-Dann-Block__(1). Überprüfe, ob die korrekte Variable aktiv ist.
Scrolle runter zu __Logik__ und wähle __Boolean__. Ziehe diesen auf das Nachbarfeld im __Wenn-Dann-Block__(2). Sollte die Variable nicht aktiviert und der Schalter inaktiv sein, wähle " __False__ ".
Wähle unter der Kategorie __Funktionen__ und __Peakboard__Box__ den Blockcode " __Ins__Log__schreiben__ " und setzte diesen in die nächste Zeile im __Wenn-Dann-Block__(3). Trage " __Kippschalter_Aktiv__ " oder etwas ähnliches in 
Nun kannst Du den letzten Schritt wiederholen und den Blockcode noch einmal auswählen, oder Du klickst mit der rechten Maustaste auf den Code " __schreibe__ins__Log " und wählst __Duplizieren__.
Setze diesen Blockcode auf die Höhe bei " __sonst__" und bearbeite den Inhalt dieses Blockcodes auf " __Kippschalter__nicht__aktiv__ " (4).
Speichere das Skript unter " __Speichern__und_Schließen__" (5) ab.
![image_4](/assets/images/Controls/Toggle-Switch/de-toggleswitch04-scripting)

Starte die Vorschau und überprüfe im __Log__ (1), ob der Rückgabewert je nach Status des Kippschalters korrekt zurückgegeben wird. Klicke zum interagieren auf den Schalter.
![image_5](/assets/images/Controls/Toggle-Switch/de-toggleswitch05-previewtest)
In diesem Video wird nochmal verdeutlicht, wie das Skript für dieses Beispiel aufgebaut und auf erfolgreiche Funktion geprüft wird:
![image-gif_6](/assets/images/Controls/Toggle-Switch/de-toggleswitch06-scripting-mp4)
