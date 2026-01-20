---
layout: article
title: Schieberegler
menu_title: Schieberegler
description: Information über Peakboard Designer Schieberegler Control.
lang: de
weight: 780
ref: con-780
redirect_from:
  - /controls/de-slider.html
---

Der Schieberegler (Slider) ist ein interaktives Control, das es dem Nutzer ermöglicht, einen numerischen Wert innerhalb eines vordefinierten Bereichs durch Schieben eines Reglers einzustellen. Er eignet sich besonders für die intuitive Steuerung von Sollwerten, Helligkeiten, Schwellenwerten oder Kapazitäten.
Du findest den Slider im Peakboard Designer in der Gruppe Interaktiv (1). Ziehe das Control einfach per Drag-and-drop in den Designer oder setze es mit einem Doppelklick auf deine Arbeitsfläche.

![image_1](/assets/images/Controls/Slider/slider01.png)

## Konfiguration und Eigenschaften
### 1 Allgemein und Datenbindung
Damit der Slider korrekt funktioniert, musst du seinen Arbeitsbereich festlegen. Klicke dazu auf das Control:
* Datenquelle / Variable: Verknüpfe den Slider mit einer Variablen vom Typ Zahl (Number). Jede Bewegung des Reglers schreibt den aktuellen Wert sofort in diese Variable zurück (1)
* Initialer Wert: Lege fest, auf welcher Position der Regler beim Start der Visualisierung stehen soll. Diesen Wert stellst Du idealerweise in der verknüpften Variable ein (2)
* Minimum / Maximum (Daten): Definiere den Start- und Endpunkt der Skala. z. B. 0 bis 10 (3).

![image_2](/assets/images/Controls/Slider/slider02.png)

### 2 Aussehen und Beschriftung
In den Eigenschaften auf der rechten Seite kannst du das Design und die Haptik des Sliders verfeinern:
1. Label (Daten): Vergebe deinem Schieberegler eine individuelle Bezeichnung (1)
2. Schriftart & Orientierung (Aussehen): Wähle die Schriftart der Bezeichnung und zwischen einer horizontalen oder vertikalen Ausrichtung des Reglers (2).
3. Wert-Position & Wert-Schriftart (Wert): Verdeutliche den eingestellten Wert des Reglers in deiner Anzeige und bearbeite die Schriftart des angegebenen Wertes (3).
4. Schieber & Balken (Aussehen): Passe die Farben und Größe des Regler-Knopfes und der Schiene an dein Dashboard-Design an (4).
5. Skalendarstellung (Skala): Wähle, ob und in welcher Farbe und Häufigkeit eine gestrichelte Skala an dem Regler dargestellt werden soll (5).
6. In Skripten verwenden (Logik): Gib dem Control einen eindeutigen Namen, um es später im Scripting identifizieren zu können (6).

![image_3](/assets/images/Controls/Slider/slider03.png)

## Scripting
Der Slider bietet ein spezifisches Event, um auf Änderungen in Echtzeit zu reagieren:
* Wertänderung: Dieses Skript wird jedes Mal ausgeführt, wenn der Schieber bewegt wird und sich der numerische Wert ändert.

### Beispiel: Wert im Log ausgeben
Oft soll ein Schwellenwert überwacht werden. In diesem Beispiel schreiben wir den aktuellen Wert des Sliders in das Log.
#### Schritte im Script-Editor:
1.	Öffne den Script-Editor unter Logik und "Wertänderung".
2.	Wähle unter Funktionen den Block „Ins Log schreiben“ (1).
3.	Lösche den voreingestellten Inhalt, greife über die Kategorie Controls auf deinen Slider zu und wähle den Block „Wert abrufen“ (2).
4.	Kombiniere beide Blöcke, um den Wert live in der Vorschau zu sehen (3).
5.	Speichere das Skript unter “Speichern und Schließen” ab.

![image_4](/assets/images/Controls/Slider/slider04.png)

Starte die Vorschau und überprüfe im Log (1), ob der Rückgabewert je nach ausgewähltem Wert des Schiebereglers korrekt zurückgegeben wird. Wähle verschiedene Inhalte aus, um das Log zu erweitern.

![image_5](/assets/images/Controls/Slider/slider05.png)

### Zweites Beispiel: Wert über Textfeld anpassen
Als Erweiterung kann man in die Anzeigefläche ein Textfeld einfügen, um den Wert des Schiebereglers über dieses Textfeld anzupassen. Füge dazu ein Textfeld an einer beliebigen Stelle in deinem Designer ein, verknüpfe dieses mit einer numerischen Variable (1).

![image_6](/assets/images/Controls/Slider/slider06.png)

Gehe nun in das Skript des Textfelds unter „Tapped“:
1.	Ziehe „Wert setzen“ unter „Wert“ des Schiebereglers Controls in den Skript-Editor (1a), (1b)
2.	Wähle die Variable, die mit der Textfeld verknüpft ist (2) und verbinde die beiden Blöcke.
3.	Wähle unter Funktionen den Block „Ins Log schreiben“ (3) und erneut die Textfeld-Variable und verknüpfe die beiden Blöcke sowie mit dem vorherigen Block (4).
4.	Speichere das Skript unter “Speichern und Schließen” ab

![image_7](/assets/images/Controls/Slider/slider07.png)

Starte die Vorschau und überprüfe den Regler sowie im Log (1), ob der Rückgabewert je nach ausgewähltem Inhalt der Textfeld korrekt angezeigt und zurückgegeben wird. Wähle verschiedene Inhalte aus, um das Log zu erweitern.

![image_8](/assets/images/Controls/Slider/slider08.png)

In diesem Video wird nochmal verdeutlicht, wie das Skript für das erste Beispiel aufgebaut und auf erfolgreiche Funktion geprüft wird:

![image_gif8](/assets/images/Controls/Slider/slider09-mp4.gif)

