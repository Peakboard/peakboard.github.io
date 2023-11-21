---
layout: article
title: Excel
menu_title: Excel
description: Informationen über Excel-Daten in Peakboard
lang: de
weight: 600
ref: dat-600
redirect_from:
  - /excel/
  - /data_sources/13-de-excel.html
  - /data_sources/de-excel.html
---

Diese Seite erklärt dir die einzelnen Features beim Zugriff auf eine Excel-Datenquelle von Peakboard.
Unter dem folgenden Link findest du ein Tutorial, wie generell externe Datenquellen konfiguriert und an Peakboard-Elemente gekoppelt werden:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)

Um die Datenquelle hinzuzufügen, mache einen Rechtsklick auf [Daten] oder klicke alternativ auf den [...]-Button und wähle dann [Datenquelle hinzufügen] und [Excel] (1).

 ![Datenquelle hinzufügen](/assets/images/data-sources/excel/de_excel-01.png)

Gib der Datenquelle einen Namen (1) und wähle den Quelltyp (2) deiner Excel-Datei aus.
Folgende Quelltypen werden unterstützt:

* **URL**
* **Lokales Netzwerk** - Die Datei kann direkt von einem Netzlaufwerk unter Eingabe eines Domänen-User und Passwort eingebunden werden. Achte hierbei darauf, dass die UNC-Laufwerkspfade verwendet werden müssen.
* **Datei** – Die Excel-Datei wird dem Projekt als Ressource hinzugefügt und ist Teil der .pbmx-Datei
* **OneDrive** – Microsoft OneDrive (sowohl das kostenfreie Angebot, als auch als Teil von Office 365)
* **SharePoint**

<div class="box-tip" markdown="1">
**Wichtig**
Excel-Dateien, die du als **Datei** anlegst, enthalten lediglich den Datensatz, der beim Hinzufügen der Datei zu den Ressourcen aktuell war. Um Echtzeitdaten anzuzeigen, solltest du eine der anderen Möglichkeiten wählen!
</div>

Für die Anbindung an OneDrive oder Sharepoint musst du dich zuerst über den Autorisierungs-Button anmelden.
Wähle dann über den [...]-Button (3) die gewünschte Excel-Datei aus.
Über das Nachladeintervall (4) kannst du die Zeit in Sekunden eintragen, in der die Datenquelle prüfen soll ob neue Daten vorhanden sind.
Um das gewünschte Arbeitsblatt auszuwählen musst du die Daten inital laden. Klicke hierzu auf den entsprechenden Lade-Button (5).
Jetzt kannst du über das [Arbeitsblatt] Drop-down (6) das gewünschte Arbeitsblatt auswählen.
Standardmäßig stehen die Daten im jeweiligen Arbeitsblatt einfach ab der ersten Zelle oben links und [Alle auswählen] (7) ist markiert. Sollte das bei dir nicht so sein, kannst du einen [Bereich] (8) eingeben, in dem Peakboard nach den Daten suchen soll (z.B. von Zelle B2 bis H23, dann wäre hier B2:H23 einzutragen).
[Spaltennamen in der ersten Zeile] bedeutet, dass die erste Zeile der Excel-Datei für die Benennung der Spalten verwendet wird.
Ansonsten werden generische Spaltenüberschriften gebildet (Column0, Column1, etc.).
[Zeilen und Spalten tauschen] ermöglicht es dir, die Excel-Daten mit nur einem Klick zu transponieren.

Klicke auf [Daten laden] (9), um die eine Vorschau der Daten anzeigen zu lassen.

![Excel Dialog](/assets/images/data-sources/excel/de_excel-02.png)

Standardmäßig werden alle Daten aus Excel mit dem Datentyp [String] geladen.
Im Vorschau-Fenster kannst du diesen Datentyp ändern (1).

![Datentyp ändern](/assets/images/data-sources/excel/de_excel-03.png)
