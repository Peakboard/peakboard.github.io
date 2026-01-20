---
layout: article
title: Dropdown-Liste
menu_title: Dropdown-Liste
description: Information über Peakboard Designer Dropdown-Liste Control.
lang: de
weight: 770
ref: con-770
redirect_from:
  - /controls/de-dropdown.html
---

Die Dropdown-Liste ist ein interaktives Control, dass es dem Nutzer ermöglicht, einen einzelnen Wert aus einer Liste von Optionen auszuwählen. Es eignet sich besonders gut für lange Listen (z. B. Standortwahl, Maschinennummern, Namen oder Zeiträumen), die bei anderen Controls zu viel Platz einnehmen würden.
Du findest die Dropdown-Liste im Peakboard Designer in der Gruppe Interaktiv (1). Ziehe das Control per Drag-and-drop auf deine Arbeitsfläche, oder klicke zweimal auf das Icon.
![image1](/assets/images/Controls/Dropdown/dropdown01.png)

## Konfiguration und Eigenschaften
### 1 Allgemein und Datenbindung
Die Dropdown-Liste benötigt eine Datenquelle, um ihre Optionen anzuzeigen. Füge dazu eine Datenquelle im Designer Explorer auf der linken Seite ein, hier zum Beispiel eine Excelliste mit Namen.
![image2](/assets/images/Controls/Dropdown/dropdown02.png)

Diese verknüpfst Du entweder durch einen Doppelklick auf das Control, wodurch sich ein Fenster öffnet, dass auf der linken Seite dieselben Inhalte darstellt (1) wie in den Eigenschaften auf der rechten Seite (2).
* Datenquelle (3): Verknüpfe hier die Liste oder Tabelle, die die gesamten Auswahlmöglichkeiten enthält (z. B. eine Excel-Tabelle, eine SQL-Abfrage oder eine statische Liste). Wähle die aus der Datei anzuzeigende Spalte aus.
* Daten / Wert (4): Wähle hier die Zeile aus, deren Text der Nutzer in der Liste sehen soll.

![image3](/assets/images/Controls/Dropdown/dropdown03.png)

In der gewählten Beispieldatei wird nun die erste Zeile der gewählten Spalte der Liste angezeigt. Möchte man den angezeigten Wert nun anpassen, so klickt man auf „Daten / Wert“ und sucht den anzuzeigenden Wert aus (1).

![image4](/assets/images/Controls/Dropdown/dropdown04.png)

### 2 Aussehen und Interaktion
In den Eigenschaften auf der rechten Seite kannst du das Verhalten und Design verfeinern:
1. Text, Hintergrund & Kontur (Aussehen): Passe das Design des Inhalts und der Dropdown-Box an (1)
2. In Skripten verwenden (Logik): Gib dem Control einen eindeutigen Namen, um es später im Scripting einfach identifizieren zu können (2)
3. Selection Changed: Dieses Skript wird immer dann ausgeführt, wenn der Nutzer einen neuen Eintrag auswählt (3).

Die Dropdown-Liste reagiert primär auf eine Änderung der Auswahl. Hast Du dem Control einen eindeutigen Namen zur Verwendung in Skripten gegeben, so kannst Du es im Skript-Editor nutzen. In den Eigenschaften findest du unter Logik das Event:

![image5](/assets/images/Controls/Dropdown/dropdown05.png)

## Scripting
### Beispiel: Gewählten Wert im Log ausgeben
Oft möchte man den gewählten Wert nutzen, um andere Datenquellen zu filtern. In diesem Beispiel schreiben wir den gewählten Namen in das Log.
Schritte im Script-Editor:
1.	Öffne den Script-Editor unter Selection Changed “<|>“
2.	Wähle unter „Funktionen“ und „Peakboard Box“ den Block "Ins Log schreiben". (1)
3.	Um den aktuell gewählten Wert abzugreifen, wähle unter „Controls“ und dem Screen, in der das Control verwendet wird, den Namen, den Du dem Dropdown-Control vergeben hast und unter „Selektierter Wert“ den Block „Wert abrufen“. (2a)
4.	Kombiniere den Block "Ins Log schreiben" mit dem Block aus den Controls (2b)
5.	Speichere das Skript unter “Speichern und Schließen” ab.

![image6](/assets/images/Controls/Dropdown/dropdown06.png) 
 
Starte die Vorschau und überprüfe im Log (1), ob der Rückgabewert je nach ausgewähltem Inhalt des Dropdowns korrekt zurückgegeben wird. Wähle verschiedene Inhalte aus, um den das Log zu erweitern.

![image7](/assets/images/Controls/Dropdown/dropdown07.png)

In diesem Video wird nochmal verdeutlicht, wie das Skript für dieses Beispiel aufgebaut und auf erfolgreiche Funktion geprüft wird:

![image_gif8](/assets/images/Controls/Dropdown/dropdown08-mp4.gif)
