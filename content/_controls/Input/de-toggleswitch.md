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
Mit dem Kippschalter-Control kannst Du zwischen zwei Zuständen wählen, beispielsweise **An/Aus** oder **Start/Stopp**. Das Control wird primär dazu verwendet, boolesche Werte in einer Datenquelle zu ändern oder interaktive Prozesse in der Visualisierung zu steuern.
Du findest den Kippschalter im Peakboard Designer in der Gruppe Interaktiv (1). Klicke auf die drei Punkte und wähle das Kippschalter-Icon aus. Ziehe das Icon per Drag-and-Drop auf deine Arbeitsfläche.

![image_1](/assets/images/Controls/Toggle-Switch/toggleswitch01.png)

## Konfiguration und Eigenschaften
Sobald du den Kippschalter doppelt anklickst, erscheint der Konfigurationsdialog. 
### 1 Allgemein und Datenbindung
In diesem Bereich definierst du die Identität des Schalters:

•	**Datenquelle**: Hier nimmst du die Datenverknüpfung vor (1). Du kannst den Schalter direkt an eine Datenquelle binden (z. B. eine Variable vom Typ Boolean). Wenn sich der Zustand des Schalters ändert, wird der Wert sofort in die Variable zurückgeschrieben.

![image_2](/assets/images/Controls/Toggle-Switch/toggleswitch02.png)

### 2 Aussehen und Beschriftung

In den Eigenschaften auf der rechten Seite bearbeitest du die visuelle Gestaltung:

•	**Label**: Hier kannst du dem Kippschalter eine Bezeichnung vergeben.

•	**Aussehen**: Definiere die Schriftart, Größe und Position des Textes, Farben für den Hintergrund und den Schieber.

Unter Kontur kannst Du bestimmen, wie rund oder eckig der Schalter erscheinen soll.

## Scripting
Um das Control in einem Building-Block-Script zu verwenden, ist es vorerst wichtig, dass der Kippschalter mit einer fixen booleschen Variable verknüpft ist (1). 
Es kann dazu hilfreich sein, die Funktion "**In Skripten verwendet**" (2) zu aktivieren.

![image_3](/assets/images/Controls/Toggle-Switch/toggleswitch03.png)

#### Beispiel: Überprüfen, ob der Kippschalter aktiviert ist
Öffne dazu im Designer den Script-Editor auf der rechten unteren Seite unter **Logik** und "**Umgeschaltet**". 
Wähle unter der Blockkategorie **Basics** und **Logik** den Blockcode "**Wenn-Dann-Anweisung**" mit einem Doppelklick aus oder ziehe ihn auf die Editor-Oberfläche.

Wähle den Blockcode " **Variable abrufen** " unter der Kategorie **Variablen** und setze Sie in das erste freie Feld im **Wenn-Dann-Block** (1). Überprüfe, ob die korrekte Variable aktiv ist.
Scrolle runter zu **Logik** und wähle **Boolean**. Ziehe diesen auf das Nachbarfeld im **Wenn-Dann-Block** (2). Für den Fall, dass die Variable nicht aktiviert und der Schalter inaktiv sein sollte, wähle "**False**".

Wähle unter der Kategorie **Funktionen** und **Peakboard Box** den Blockcode "**Ins Log schreiben**" und setzte diesen in die nächste Zeile im **Wenn-Dann-Block** (3). Trage " **Kippschalter Aktiv**" oder etwas ähnliches in das grüne Textfeld ein.
Nun kannst Du den letzten Schritt wiederholen und den Blockcode noch einmal auswählen, oder Du klickst mit der rechten Maustaste auf den Code "**schreibe ins Log**" und wählst **Duplizieren**.
Setze diesen Blockcode auf die Höhe bei "**sonst**" und bearbeite den Inhalt dieses Blockcodes auf "**Kippschalter nicht aktiv**" (4).

Speichere das Skript unter "**Speichern und Schließen**" (5) ab.

![image_4](/assets/images/Controls/Toggle-Switch/toggleswitch04.png)

Starte die Vorschau und überprüfe im **Log** (1), ob der Rückgabewert je nach Status des Kippschalters korrekt zurückgegeben wird. Klicke zum interagieren auf den Schalter:
![image_5](/assets/images/Controls/Toggle-Switch/toggleswitch05.png)

**In diesem Video** wird nochmal verdeutlicht, wie das Skript für dieses Beispiel aufgebaut und auf erfolgreiche Funktion geprüft wird:
![image-gif_6](/assets/images/Controls/Toggle-Switch/toggleswitch06-mp4.gif)

