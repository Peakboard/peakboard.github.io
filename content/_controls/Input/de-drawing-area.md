---
layout: article
title: Zeichenfläche
menu_title: Zeichenfläche
description: Information über Peakboard Designer Zeichenfläche Control.
lang: de
weight: 790
ref: con-790
redirect_from:
  - /controls/de-drawing-area.html
---

Die Zeichenfläche (Drawing Area) ist ein interaktives Control, das es dem Nutzer ermöglicht, direkt auf der Visualisierung zu zeichnen. Sie eignet sich besonders für handschriftliche Notizen, Markierungen, Skizzen oder Freigabe-Unterschriften.
Du findest die Zeichenfläche im Peakboard Designer in der Gruppe Interaktiv (1). Ziehe das Control einfach per Drag-and-drop in den Designer oder setze es mit einem Doppelklick auf deine Arbeitsfläche.

![image_1](/assets/images/Controls/Drawing-Area/Drawing-Area-Menu.png)

## Konfiguration und Eigenschaften

### 1 Aussehen

In den Eigenschaften auf der rechten Seite kannst du das Aussehen der Zeichenfläche und des Pinsels anpassen:

1. Farbe (Color): Wähle die Standardfarbe des Pinsels aus (1).
2. Stärke (Thickness): Lege die Standardstärke des Pinsels fest (2).
3. Toolbar: Über die vier Icons kannst du festlegen, welche Optionen dem Nutzer in der Toolbar zur Verfügung stehen: Farbauswahl, Stärkeauswahl, Aktivierungsbutton und Löschen-Button (3).
4. Aktiv (Active): Wenn aktiviert, kann der Nutzer auf der Fläche zeichnen. Wenn deaktiviert, werden Berührungen an darunterliegende Elemente wie Buttons durchgereicht (4).
5. Auf Gerät speichern (Save on device): Die Zeichnung wird persistent auf der Peakboard Box gespeichert und beim nächsten Start der Visualisierung wiederhergestellt (5).

### 2 Hintergrund

* Hintergrund (Background): Wähle die Hintergrundfarbe der Zeichenfläche.
* Schatten (Shadow): Lege einen Schattenwert für das Control fest.

![image_2](/assets/images/Controls/Drawing-Area/Drawing-Area-Properties.png)

## Scripting

Die Zeichenfläche bietet verschiedene Eigenschaften und Funktionen für das Scripting:

1. Aktiv (Active): Lese oder setze den Aktivierungsstatus der Zeichenfläche (1).
2. Farbauswahl anzeigen (Show color selection): Steuere die Sichtbarkeit der Farbauswahl in der Toolbar (2).
3. Stärkeauswahl anzeigen (Show thickness selection): Steuere die Sichtbarkeit der Stärkeauswahl in der Toolbar (3).
4. Aktivierungsbutton anzeigen (Show activation button): Steuere die Sichtbarkeit des Aktivierungsbuttons in der Toolbar (4).
5. Löschen-Button anzeigen (Show clear button): Steuere die Sichtbarkeit des Löschen-Buttons in der Toolbar (5).
6. Stärke (Thickness): Lese oder setze die aktuelle Pinselstärke (6).
7. Farbe (Color): Lese oder setze die aktuelle Pinselfarbe (7).
* Leeren (Clear): Lösche alle Zeichnungen von der Fläche.

![image_3](/assets/images/Controls/Drawing-Area/Drawing-Area-Snippets.png)
