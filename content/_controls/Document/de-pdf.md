---
layout: article
title: PDF
menu_title: PDF
description: Information über Peakboard Designer PDF Viewer Control.
lang: de
weight: 510
ref: con-510
redirect_from:
  - /controls/de-pdf.html
---

Das PDF Viewer-Control ermöglicht es dir, PDF-Dokumente wie Schichtpläne, Berichte oder technische Zeichnungen direkt in deine Visualisierung einzubinden. Es unterstützt mehrseitige Dokumente und bietet spezifische Funktionen, um dynamisch durch die Seiten zu navigieren oder Dokumente zur Laufzeit auszutauschen.
Du findest den PDF Viewer im Peakboard Designer in der Gruppe Medien & Dokumente (1). Ziehe das Icon per Drag-and-drop in deinen Designer oder platziere es mit einem Doppelklick auf deine Arbeitsfläche.

![image_1](/assets/images/Controls/PDF/PDF_01.png)
 
# Konfiguration und Eigenschaften
## 1 Datenquelle und PDF-Auswahl
Ein PDF Viewer kann auf unterschiedliche Weise mit Inhalten gefüllt werden. Klicke das Control doppelt an, um den Konfigurationsdialog zu öffnen:
* Ressource Hinzufügen: Wähle eine PDF-Datei aus deinen lokalen Ressourcen oder anderen Speicherorten aus, die fest in der Anwendung gespeichert ist (1).
* Dynamische Verknüpfung (Datenbindung): Verknüpfe das Control mit einer Datenquelle oder einer Variablen, die einen Pfad oder eine URL zum PDF enthält. Das Dokument wird dann zur Laufzeit automatisch geladen (2).

![image_2](/assets/images/Controls/PDF/PDF_02.png)

## 2 Aussehen und Steuerung
In den Eigenschaften auf der rechten Seite kannst du das Verhalten und die Darstellung präzise steuern:
1. Control-Positionierung (Allgemeines): Lege die Ausrichtung des Elements auf der Arbeitsfläche fest. Mit den ersten acht Symbolen kann das Control schnell an Ecken oder Seitenmitten platziert werden, während das neunte Symbol die gesamte verfügbare Fläche füllt. Das letzte Icon zentriert das Element mittig (1).
2. Allgemeines: Über die Felder Breite, Höhe, Links und Oben kannst du die Größe der PDF über die manuellen Eingabefelder präzise definieren. Darunter definierst du einen inneren Abstand (Padding) für das Dokument innerhalb seines Rahmens und es kann ebenfalls ein Titel vergeben werden, der über dem Control erscheint (2).
3. Seite (Daten): Hier kannst du festlegen, welche Seite des Dokuments beim Start der Visualisierung standardmäßig angezeigt werden soll (3).
4. In Skripten verwenden (Logik): Gib dem Control einen eindeutigen Namen, um es später per Skript zu steuern (z. B. für den Seitenwechsel) (4).
5. Bedingte Formatierung (Logik): Nutze die bedingte Formatierung, um beispielsweise die Sichtbarkeit des Controls basierend auf bestimmten Ereignissen zu steuern.

![image_3](/assets/images/Controls/PDF/PDF_03.png)

# Scripting
Der PDF Viewer bietet spezifische Befehle, um durch die Seiten eines Dokuments zu blättern.
## Beispiel Eins: PDF-Seiten automatisch wechseln
In diesem ersten Beispiel nutzen wir ein Timer-Skript, um in der Vorschau bzw. in der Runtime einen automatischen Seitenwechsel zu erzeugen. Vergib deinem PDF-Control dazu vorerst eine „In Skripten verwenden“-Bezeichnung. Füge dann der Visualisierung ein neues Timer-Skript hinzu, dass Du auf der linken Seite im Designer findest (1).
 
![image_4](/assets/images/Controls/PDF/PDF_04.png)
 
### Schritte im Skript-Editor:
1.	Wähle den „Wenn-dann“-Block aus dem Bereich „Basics“ unter „Logik“ (1).
2.	Wähle unter der „Seite“-Kategorie deines PDF-Controls den Block „Wert abrufen“ (get value) und setze ihn in das erste freie Feld (2a).
3.	Wähle unter der „Seitenanzahl“-Kategorie deines PDF-Controls den Block „Wert abrufen“ (get value) und setze ihn in das Nachbarfeld im Editor (2b).
4.	Wähle unter der „Seite“-Kategorie deines PDF-Controls den Block „Wert setzen“ (set value) und setze ihn an die „führe aus“-Stelle des Blocks (3).
5.	Wähle unter der Kategorie deines PDF-Controls den Block „Nächste Seite zeigen“ (show next page) (4).
6.	Unter „Intervall“ im oberen Bereich dieses Fensters kann das Zeitintervall zum Seitenwechsel in Millisekunden eingestellt werden (5).

![image_5](/assets/images/Controls/PDF/PDF_05.png)

Um ebenfalls sicherzugehen, dass die Visualisierung beim Start immer mit der ersten Seite beginnt, erstellen wir ein Skript "Bei Bildschirmaktivierung", dass ebenfalls auf der linken Seite im Designer erstellt wird.
Dazu einfach den Building Block „Wert setzen“ (set page of) unter der „Seite“-Kategorie deines PDF Viewers wählen und in den Editor ziehen.

![image_6](/assets/images/Controls/PDF/PDF_06.png)

![image_7](/assets/images/Controls/PDF/PDF_07.png)

Starte die Vorschau und überprüfe, ob die Seiten korrekt gewechselt werden und ob das gewählte Intervall in etwa stimmt.

## Beispiel Zwei: PDF-Seiten per Buttons wechseln
### ! Wichtig: Entweder ein Timerskript, oder ein Buttonskript, mit einem aktiven Timerskript lässt sich das Buttonskript nicht problemlos steuern. Das "Bildschirmaktivierung"-Skript kann beibehalten werden.
In diesem Beispiel nutzen wir zwei Buttons („Vor“ und „Zurück“), um manuell durch ein PDF-Handbuch zu blättern.

### Schritte im Script-Editor:
1.	Setze zwei Button-Controls unter „Interaktiv“ oder zwei Icons aus „Basics“ auf die Arbeitsfläche im Designer.
2.	Aktiviere „In Skripten verwenden“ für das PDF-Control.
3.	Öffne den Script-Editor des „Vor“-Buttons unter Tapped.
4.	Wähle unter der Kategorie deines PDF-Controls den Block „Nächste Seite anzeigen“ (shownextpage).
5.	Wiederhole den Vorgang für den „Zurück“-Button mit dem Block „Vorherige Seite anzeigen“ (showpreviouspage).
6.	Füge optional den Block „Ins Log schreiben“ sowie unter der „Seite“-Kategorie deines PDF-Controls den Block „Wert abrufen“ hinzu, um den Seitenwechsel zu protokollieren.
Starte die Vorschau, teste die Buttons und überprüfe im Log (zweites Icon von links), ob der Rückgabewert nach dem Auslösen korrekt zurückgegeben wird.

In diesem Video wird noch einmal das erste Beispiel verdeutlicht, wie das Skript für dieses Beispiel aufgebaut und auf erfolgreiche Funktion geprüft wird:

![image_8gif](/assets/images/Controls/PDF/pdf_08_gif.gif)

In diesem Video wird das zweite Beispiel veranschaulicht, wie die Buttons in den Designer eingefügt, mit Skripten beschrieben und auf erfolgreiche Funktion geprüft werden:

![image_9gif](/assets/images/Controls/PDF/pdf_09_gif.gif)
