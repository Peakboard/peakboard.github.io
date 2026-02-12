---
layout: article
title: Tabelle  
menu_title: Tabelle
description: Information über Peakboard Designer Table Grid Control.
lang: de
weight: 210
ref: con-210
redirect_from:
  - /controls/04-de-table-grid.html
  - /controls/de-table-grid.html
---

Das Tabellen-Control ist ein interaktives Element, das es ermöglicht, strukturierte Daten in einer klassischen Spalten- und Zeilenansicht darzustellen. Es ist das ideale Werkzeug für die Anzeige von Inventarlisten, Produktionsplänen oder Kennzahlen aus Datenbanken (SQL, SAP, Excel), bei denen Übersichtlichkeit und Vergleichbarkeit im Vordergrund stehen.
Du findest das Tabellen-Control im Peakboard Designer in der Gruppe Lists & Tiles (1).

![image_1](/assets/images/Controls/Table-Grid/tablegrid_01.png)

# Konfiguration und Eigenschaften
## 1 Verknüpfung und Spaltenmanagement
### 1.1 Datenquelle
Die Tabelle benötigt eine Datenquelle, um ihre Optionen und Inhalte anzuzeigen. Füge dazu eine Datenquelle im Designer Explorer auf der linken Seite ein, hier zum Beispiel eine Excelliste mit Namen.

![image_2](/assets/images/Controls/Table-Grid/tablegrid_02.png)

Die Tabelle wird fast immer dynamisch gespeist. Ziehe das Icon per Drag-and-drop auf deine Arbeitsfläche, oder klicke zweimal auf das Icon, um die Datenquelle, die du bereits in den Designer unter „Daten“ eingefügt hast, mit dem Control zu verknüpfen (1).

![image_3](/assets/images/Controls/Table-Grid/tablegrid_03.png)

### 1.2	Spalten-Manager
Unter „Daten“ in den Eigenschaften auf der rechten Seite kannst du festlegen, welche Spalten deiner Datenquelle angezeigt werden sollen (1). Du kannst Spalten umbenennen, ausblenden oder ihre Reihenfolge ändern.
*   Tabellenspalten bearbeiten: Innerhalb der Tabelle kannst du die Spalten-Überschrift, die Spaltenbreite, -ausrichtung, das Inhaltsformat und die Schriftart definieren, um Informationen visuell aufzubereiten. Die Reihenfolge der Spalten kannst Du per Drag-and-drop verändern (2). 

![image_4](/assets/images/Controls/Table-Grid/tablegrid_04.png)

## 2 Eigenschaften und Bedingte Formatierung
In den Attributen auf der rechten Seite steuerst du das visuelle Verhalten:
*  Allgemeines: Definiere die Maße der Tabelle. Hier kannst du ihr ebenfalls ein Titel bzw. eine Überschrift vergeben.

### Aussehen
1. Hintergrund, Schatten & Eckenradius (Aussehen): Gestalte die Hintergrundfarbe der Tabelle, stelle die Schattenstärke ein, die die Tabelle auf das Design wirft, und passe die Ecken der Tabelle an (1).
2. Kontur (Aussehen): Passe die optische Darstellung der Striche in der Tabelle an, indem Du die Rand-, horizontalen und vertikalen Linien aktivierst sowie die Linienfarbe und Linienstärke bestimmst (2).
3. Tabellenkopfzeile (Aussehen)(: Lege fest, ob die Spaltenüberschriften zu sehen sein sollen und stelle die Hintergrundfarbe und Schriftart der Kopfzeile ein (3).
4. Tabellenkörper (Aussehen): Lege fest, welche Farbe und Schriftart die Zeilen bzw. die Zelle beinhalten soll und bestimme die Zahl an maximal angezeigten Zeilen (4).

### Logik
5. In Skripten verwenden (Logik): Gib dem Control einen eindeutigen Namen, um es später im Scripting einfach identifizieren zu können (5).
6. Bedingte Formatierung (Logik): Erstelle Regeln, um Zellen oder ganze Zeilen basierend auf Werten einzufärben (z. B. Hintergrundfarbe „Rot“, wenn ein Wert einen Schwellenwert unterschreitet) (6).

![image_5](/assets/images/Controls/Table-Grid/tablegrid_05.png)

## Scripting
Die Tabelle ermöglicht es, auf Nutzerinteraktionen wie das Auswählen einer Zeile zu reagieren.
### Beispiel: Zeilendaten bei Klick auslesen
Häufig soll beim Klick auf eine Zeile ein Detailwert in eine Variable geschrieben oder ein Log-Eintrag erstellt werden. Hier lassen wir durch einen Klick auf einen Zeileninhalt die ausgewählte Zeilennummer in das Log schreiben.
Schritte im Script-Editor:
1.	Öffne den Script-Editor unter Logik -> Cell Clicked oder Selection Changed.
2.	Nutze den Block „Ins Log schreiben“ (1).
3.	Greife auf den „get row“-Block zu (2).
4.	Kombiniere dies mit dem Block „Ins Log schreiben“ (3).
5.	Speichere das Skript unter “Speichern und Schließen” ab (4).

![image_6](/assets/images/Controls/Table-Grid/tablegrid_06.png)

Starte die Vorschau und überprüfe im Log (1), ob der Rückgabewert je nach ausgewählter Zeile der Tabelle korrekt zurückgegeben wird. Wähle verschiedene Zeilen aus, um das Log zu erweitern.

![image_7](/assets/images/Controls/Table-Grid/tablegrid_07.png)
