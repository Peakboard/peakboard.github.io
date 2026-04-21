---
layout: article
title: Button
menu_title: Button
description: Information über Peakboard Designer Button Control.
lang: de
weight: 710
ref: con-710
redirect_from:
  - /controls/de-button.html
---

Das Button-Control ist ein interaktives Element deiner Visualisierung. Es dient als primärer Auslöser für nahezu alle Logik-Aktionen innerhalb von Peakboard. Während andere Controls oft nur Daten darstellen, ermöglicht der Button dem Anwender, aktiv in das Geschehen einzugreifen. Sei es durch das Bestätigen von Prozessen, das Navigieren durch Menüs oder das Auslösen komplexer Skripte.
Du findest das Button-Control im Peakboard Designer in der Gruppe Input (1). Ziehe das Icon per Drag-and-drop in deinen Designer oder platziere es mit einem Doppelklick auf deine Arbeitsfläche.

![image_1](/assets/images/Controls/Button/button_01.png)

# Konfiguration und Eigenschaften
## 1 Allgemein und Datenanbindung
Ein Button benötigt eine Beschriftung und ein definiertes Verhalten bei Interaktion.
* Daten/Text (Daten): Hier erhält das Control eine Beschriftung. Dieser Text kann statisch sein oder dynamisch über eine Datenquelle bzw. Variable gesetzt werden (1).
* Icon (Icon): Optional kannst du dem Button ein Icon hinzufügen, um die Funktion visuell zu verdeutlichen (z. B. ein Speicher-Symbol oder ein Pfeil für die Navigation) (2).

![image_2](/assets/images/Controls/Button/button_02.png)

## 2 Aussehen und Steuerung
Sobald du den Button im Designer ausgewählt hast, kannst du in den Eigenschaften auf der rechten Seite alle spezifischen Einstellungen vornehmen. Unter anderem kannst Du hier den visuellen Look des Controls auf der Arbeitsfläche gestalten:
1. Control-Positionierung (Allgemeines): Lege die Ausrichtung des Elements auf der Arbeitsfläche fest. Mit den ersten acht Symbolen kann das Control schnell an Ecken oder Seitenmitten platziert werden, während das neunte Symbol die gesamte verfügbare Fläche füllt. Das letzte Icon zentriert das Element mittig, wobei die Größe vorab über die manuellen Eingabefelder definiert werden kann. (1)2. Abstand (Allgemeines): Nutze die Felder Breite, Höhe, Links und Oben für eine pixelgenaue Platzierung. Das Padding definiert den inneren Abstand des Textes oder Icons zum Button-Rand. (2)
2. Abstand (Allgemeines): Nutze die Felder Breite, Höhe, Links und Oben für eine pixelgenaue Platzierung. Das Padding definiert den inneren Abstand des Textes oder Icons zum Button-Rand. (2)
3. In Skripten verwenden (Logik): Verbiß dem Button einen eindeutigen Namen (z. B. Btn_Submit), um ihn in Skripten anzusprechen oder seinen Status abzufragen (3).
4. Bedingte Formatierung (Logik): Ändere beispielsweise die Farbe des Buttons von Grau auf Grün, sobald alle erforderlichen Eingabefelder korrekt ausgefüllt wurden (4).
5. Tapped Event (Logik): Der Button ist das vielseitigste Control im Peakboard-Designer. Hiermit lassen sich unzählige Abläufe realisieren: Du kannst mit einem Klick zwischen verschiedenen Bildschirmen (Screens) wechseln, Datenquellen manuell zur Aktualisierung zwingen, Werte in Variablen schreiben, durch die Seiten eines PDF-Controls blättern, HTTP-Requests an externe APIs senden, die Sichtbarkeit von Warnmeldungen umschalten, Timer starten oder stoppen sowie komplexe Berechnungen auf Basis von Benutzereingaben ausführen (5).

![image_3](/assets/images/Controls/Button/button_03.png)

Das Tapped Event bzw. das Script öffnet sich durch ein Doppelklick auf das Control.

# Scripting
Die wahre Stärke des Buttons liegt im Skript, das ausgeführt wird, sobald der Anwender den Button bzw. das Icon berührt oder anklickt.

## Beispiel: Multi-Aktion per Button
In diesem Beispiel soll ein Button gleichzeitig einen Wert in den Log schreiben und einen Bildschirmwechsel auslösen.
Dazu fügen wir noch ein Textfeld für die Seitenzahl in die Visualisierung ein, dessen Wert in den Log geschrieben wird. Hierbei ist es wichtig, die "In Skripten verwenden"-Eigenschaft zu aktivieren und dem Textfeld-Control eine Beschreibung zu vergeben, um klarzustellen, welcher Wert gespeichert werden soll.
1. Markiere den Button und öffne im rechten unteren Bereich "Logik" das Event "Tapped".
2. Wähle unter der Kategorie "Anwendung" den Blockcode "Bildschirm wechseln" und setze ihn an den bereits vorhandenen Block im Editor. Um sicherzugehen, dass zum richtigen Screen gewechselt wird, wähle im Dropdown dieses Blockcodes die Funktion "mit Titel" und suche den Screen, zu dem beim Aktivieren des Buttons gewechselt werden soll (1).
3. Um den Seitenwechsel ebenfalls im Log wiederzugeben, setze einen weiteren "Ins Log schreiben"-Blockcode unter den bestehenden Block und ändere den Inhalt des grünen Textfelds zu "Bildschirmseitenwechsel zu (Screen Name)" (2).
4. Speichere das Skript unter "Speichern und Schließen" (3).

![image_4](/assets/images/Controls/Button/button_04.png)

Starte die Vorschau und überprüfe im Log (1), ob die Rückgabewerte korrekt zurückgegeben werden. Klicke zum interagieren auf den Button:

![image_5](/assets/images/Controls/Button/button_05.png)

In diesem Video wird nochmal verdeutlicht, wie das Skript für dieses Beispiel aufgebaut und auf erfolgreiche Funktion geprüft wird:
![image_6](/assets/images/Controls/Button/button_06_gif.gif)
