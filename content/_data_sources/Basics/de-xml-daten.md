---
layout: article
title: Externe dynamische Datenquellen am Beispiel einer XML-Datenquelle
menu_title: Externe dynamische Datenquellen
description: Lerne, wie Peakboard eine externe XML-Quelle in eine live angebundene Tabelle verwandelt – vom Anlegen der Datenquelle bis zum Gestalten der Spalten.
lang: de
weight: 0
ref: dat-0
image: /assets/images/Tutorial/Overview/Tutorial_External_Data_Source_Small.png
redirect_from:
 - /tutorials/03-de-xml-daten.html
 - /tutorials/de-xml-daten.html
 - /data_sources/de-xml-daten.html
---
Grundsätzlich unterscheidet man bei Peakboard zwischen zwei wesentlichen Konzepten, wie dynamische Inhalte eingebettet werden:

1. Die Daten kommen schon fertig aufbereitet aus der externen Quelle und müssen nur noch in ein Panel eingebunden werden. Das ist zum Beispiel der Fall, wenn du eine externe Webseite komplett oder in Teilen einbindest. Oder auch, wenn du ein BI-Tool wie Power BI, Tableau oder ähnliches nutzt und das Aufbereiten der Daten diesem Tool überlässt. Peakboard fungiert dann als eine Art Anzeigeprogramm, und das jeweilige Vorsystem sorgt für die visuelle Aufbereitung.

2. Die Daten kommen als Rohdaten aus einer externen Quelle. Solche Quellen können zum Beispiel XML, JSON, eine Datenbank oder ein Social-Media-Feed sein. Hier werden nur die reinen Daten transportiert, und die Visualisierung findet direkt in Peakboard statt. Dafür stehen visuelle Controls zur Verfügung, um die Daten ansprechend anzuzeigen, z.B. Charts, Tabellen usw.

Diese Anleitung behandelt ausschließlich die zweite Option. Basis ist eine XML-Datenquelle. Als öffentliches Beispiel nutzen wir einen kleinen CD-Katalog von W3Schools – du kannst ihn gerne im Browser öffnen, um die Struktur zu sehen:

[https://www.w3schools.com/xml/cd_catalog.xml](https://www.w3schools.com/xml/cd_catalog.xml)

## XML-Datenquelle hinzufügen

Öffne den Peakboard Designer. Klicke im Explorer auf den [...]-Button neben [Daten] (oder führe einen Rechtsklick auf [Daten] aus und wähle [Datenquelle hinzufügen]). Tippe im Dialog [Datenquelle hinzufügen] „XML" in das Suchfeld (1), sodass die Liste auf die XML-Kachel (2) gefiltert wird. Öffne sie per Doppelklick.

![XML-Datenquelle hinzufügen](/assets/images/data-sources/xml-data/xml-data-01-add-datasource.png)

## Verbindung konfigurieren

Die Konfigurationsmaske öffnet sich. Links legst du fest, woher die Daten kommen, rechts erhältst du eine Live-Vorschau.

![Die leere Konfigurationsmaske der XML-Datenquelle](/assets/images/data-sources/xml-data/xml-data-02-config.png)

Fülle die Felder aus:

* **Datenquellenname (1)** – vergib einen eindeutigen, sprechenden Namen (z.B. `Departure`).
* **Quelltyp (2)** – wo die XML-Quelle liegt: per **URL**, in einer **Netzwerkfreigabe**, als lokale **Datei**, in **Microsoft 365** oder im **Peakboard Hub**. Für dieses Beispiel bleibt es bei **URL**.
* **Basis-URL (3)** – füge die Adresse des CD-Katalogs von oben ein. Peakboard teilt sie automatisch in Basis-URL und URL-Pfad auf. Ist die Quelle geschützt, kannst du zusätzlich einen **Authentifizierungstyp** festlegen.

![Die XML-Datenquelle mit Name und URL](/assets/images/data-sources/xml-data/xml-data-03-config-filled.png)

## XML-Element auswählen

Da eine Peakboard-Datenquelle immer tabellarisch ist, musst du festlegen, welcher Teil des XML-Baums die Tabelle bildet. Klicke dazu im Bereich [Details angeben] auf den [...]-Button. Peakboard lädt die Quelle und analysiert ihre Struktur.

Wähle im Baum [Elements] (1) das Element, das sich wiederholt und damit die Tabellenzeilen bildet – im Beispiel der Knoten `CD` unterhalb von `CATALOG`. Darunter erscheinen die daraus abgeleiteten Spalten [Columns] (2). Setze nur bei den Spalten einen Haken, die du wirklich brauchst; gerade bei sehr komplexen XML-Dateien lässt du ungenutzte Elemente am besten von Anfang an weg. Bestätige mit [OK].

![Das sich wiederholende XML-Element auswählen](/assets/images/data-sources/xml-data/xml-data-04-select-element.png)

## Vorschau laden

Zurück in der Konfigurationsmaske klickst du auf [Daten laden]. Über das Reload-Icon (1) aktualisierst du die Vorschau jederzeit. Im Bereich [Vorschau] (2) kannst du die Plausibilität der Daten und die erkannten Datentypen prüfen. Mit [OK] legst du die Datenquelle an. Sie erscheint anschließend im Explorer unter [Daten] und lässt sich mit jedem Control verknüpfen.

![Die geladene Vorschau der XML-Daten](/assets/images/data-sources/xml-data/xml-data-05-preview.png)

## Daten in einer Tabelle visualisieren

Als Nächstes erstellst du die Visualisierung. Die Daten sollen einfach in einer Tabelle angezeigt werden. Ziehe die Datenquelle aus dem Explorer auf die Arbeitsfläche und wähle im erscheinenden Menü [Table]. Die Tabelle wird angelegt und ist bereits an die Datenquelle (1) gebunden – sie zeigt sofort alle Spalten mit Live-Daten.

Um aus der Tabelle ein fertiges Dashboard zu machen, verfeinerst du die Spalten über [Edit table columns] (2) und platzierst bzw. dimensionierst das Control über die Positionier-Icons (3). Am schnellsten füllst du den Bildschirm mit dem Icon **Fill screen**.

![Die datengebundene Tabelle auf der Arbeitsfläche](/assets/images/data-sources/xml-data/xml-data-06-table-canvas.png)

## Spalten anpassen

Klicke auf [Edit table columns], um den Spalten-Dialog zu öffnen. Dort sind alle Spalten der Datenquelle gelistet:

* **Caption** – vergib bessere, sprechende Namen für die Spalten, z.B. „Album" statt `TITLE`.
* **Width** – „Fill" streckt eine Spalte; stelle die meisten Spalten auf „Cut", damit sie nur so breit werden wie ihr breitester Wert.
* **Alignment** – lege die horizontale Ausrichtung fest, z.B. „Center" für kurze Werte.

Zusätzlich kannst du je Spalte [Format] und [Specific font] anpassen sowie die Reihenfolge per Drag-and-drop ändern. Bestätige mit [OK].

Zurück auf der Arbeitsfläche kannst du das Aussehen der Tabelle im Bereich [Appearance] feinjustieren (Schriftart für Header und Body, Hintergrundfarbe, Rahmen, Zellenabstand …). Wenn alles passt, klickst du auf [Preview], um die Anwendung zu starten: Die Tabelle wird dynamisch gefüllt und gemäß dem Reload-Intervall der Datenquelle automatisch aktualisiert.
