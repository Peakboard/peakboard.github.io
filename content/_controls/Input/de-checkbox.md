---
layout: article
title: Checkbox
menu_title: Checkbox
description: Information über Peakboard Designer Checkbox Control.
lang: de
weight: 750
ref: con-750
redirect_from:
  - /controls/de-checkbox.html
---

Mit dem Checkbox-Control kannst du einfache Ja/Nein-Entscheidungen oder Mehrfachauswahlen in deiner Visualisierung abbilden. Die Checkbox dient zur Bestätigung von Bedingungen oder zur Filterung von Daten in einer Liste.
Du findest die Checkbox im Peakboard Designer in der Gruppe Interaktiv (1). Ziehe das Icon einfach per Drag-and-drop auf deine Arbeitsfläche.
 
![image1](/assets/images/Controls/Check-Box/checkbox01.png)
 
## Konfiguration und Eigenschaften
### 1 Allgemein und Datenbindung
In diesem Bereich definierst du die grundlegende Funktionsweise:
•	Datenquelle: Hier nimmst du die Datenverknüpfung vor (1). Du kannst die Checkbox direkt an eine Variable vom Typ Boolean binden. Wenn ein Nutzer die Checkbox aktiviert oder deaktiviert, wird der Status (true oder false) sofort in die verknüpfte Variable zurückgeschrieben.
 
![image2](/assets/images/Controls/Check-Box/checkbox02.png)
 
###2 Aussehen und Beschriftung
Sobald du die Checkbox im Designer ausgewählt hast, kannst du in den Eigenschaften auf der rechten Seite alle spezifischen Einstellungen vornehmen. Unter anderem kannst Du hier den visuellen Look gestalten:
•	Initialer Zustand (Daten): Du kannst festlegen, ob die Checkbox beim Start der Visualisierung standardmäßig aktiviert oder deaktiviert sein soll. Hier verknüpfst Du die Checkbox mit einer Variablen (1).
•	Label (Daten): Hier kannst du den Text hinterlegen, der neben der Checkbox angezeigt werden soll (z. B. „Ich akzeptiere die Bedingungen“) (2).
•	Schriftart & Farbe (Aussehen): Passe die Schriftart und die Farbe des Labels sowie die Farbe des Hakens und des Rahmens an dein Dashboard-Design an (3).
•	In Skripten verwenden (Logik): Gib dem Control einen eindeutigen Namen (4), um es später im Scripting einfach identifizieren zu können (5). 
 
 ![image3](/assets/images/Controls/Check-Box/checkbox03.png)
 
## Scripting
Die Checkbox bietet dir die Möglichkeit, auf Zustandsänderungen direkt mit Logik zu reagieren. In den Eigenschaften findest du unter dem Reiter Logik drei spezifische Events:
1.	Checked Event: Dieses Skript wird ausgeführt, sobald der Haken gesetzt wird.
2.	Unchecked Event: Dieses Skript wird ausgeführt, wenn der Haken entfernt wird.
3.	Umgeschaltet: Dieses Skript wird ausgeführt, sobald sich der Zustand der Box verändert.

#### Beispiel: Status im Log ausgeben
Möchtest du prüfen, ob eine Eingabe erfolgt ist, kannst du dies im Scripting über die Building Blocks lösen. Verknüpfe hierzu die Checkbox (1b) mit der fixen booleschen Variable (1a). 
![image4](/assets/images/Controls/Check-Box/checkbox04.png)
 
Öffne im Designer den Script-Editor auf der rechten unteren Seite unter **Logik** und "**Umgeschaltet**". 
Wähle unter der Blockkategorie **Basics** und **Logik** den Blockcode "**Wenn-Dann-Anweisung**" mit einem Doppelklick aus oder ziehe ihn auf die Editor-Oberfläche.

Wähle den Blockcode " **Variable abrufen** " unter der Kategorie **Variablen** und setze Sie in das erste freie Feld im **Wenn-Dann-Block** (1). Überprüfe, ob die korrekte Variable aktiv ist.
Scrolle runter zu **Logik** und wähle **Boolean**. Ziehe diesen auf das Nachbarfeld im **Wenn-Dann-Block** (2). Für den Fall, dass die Variable nicht aktiviert und der Schalter inaktiv sein sollte, wähle "**False**".

Wähle unter der Kategorie **Funktionen** und **Peakboard Box** den Blockcode "**Ins Log schreiben**" und setzte diesen in die nächste Zeile im **Wenn-Dann-Block** (3). Trage " **Checkbox aktiviert**" oder etwas ähnliches in das grüne Textfeld ein.
Nun kannst Du den letzten Schritt wiederholen und den Blockcode noch einmal auswählen, oder klicke mit der rechten Maustaste auf den Code "**schreibe ins Log**" und wähle **Duplizieren**.
Setze diesen Blockcode auf die Höhe bei "**sonst**" und bearbeite den Inhalt dieses Blockcodes auf "**Checkbox nicht aktiviert**" (4).

Speichere das Skript unter "**Speichern und Schließen**" (5) ab.

![image5](/assets/images/Controls/Check-Box/checkbox05.png)

Starte die Vorschau und überprüfe im **Log** (1), ob der Rückgabewert je nach Status des Kippschalters korrekt zurückgegeben wird. Klicke zum interagieren auf den Schalter:
![image6](/assets/images/Controls/Check-Box/checkbox06.png)

**In diesem Video** wird nochmal verdeutlicht, wie das Skript für dieses Beispiel aufgebaut und auf erfolgreiche Funktion geprüft wird:
![image_gif6](/assets/images/Controls/Check-Box/checkbox07-mp4.gif)
