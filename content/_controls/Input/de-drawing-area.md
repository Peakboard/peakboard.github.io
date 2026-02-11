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

Die Zeichenfläche (Drawing Area) ist ein interaktives Control, das es dem Nutzer ermöglicht, direkt auf der Visualisierung mit dem Finger oder einem Stift zu zeichnen. Sie eignet sich besonders für Anwendungsfälle wie:

* **Digitale Unterschriften** für Dokumentenfreigaben, Bestellbestätigungen oder Lieferscheine
* **Qualitätsprüfungen** bei denen Prüfer Mängel direkt auf einem Bild markieren
* **Audit-Anwendungen** zur Dokumentation von Kontrollen mit Unterschrift
* **Skizzen und Notizen** für spontane Anmerkungen auf dem Dashboard

![image_1](/assets/images/Controls/Drawing-Area/Drawing-Area-Menu.png)

Du findest die Zeichenfläche im Peakboard Designer in der Gruppe Interaktiv (1). Ziehe das Control einfach per Drag-and-drop in den Designer oder setze es mit einem Doppelklick auf deine Arbeitsfläche.

## Konfiguration und Eigenschaften

![image_2](/assets/images/Controls/Drawing-Area/Drawing-Area-Properties.png)

### 1 Aussehen

In den Eigenschaften auf der rechten Seite kannst du das Aussehen der Zeichenfläche und des Pinsels anpassen:

1. Farbe (Color): Wähle die Standardfarbe des Pinsels aus. Der Nutzer kann diese Farbe zur Laufzeit über die Toolbar ändern, sofern die Farbauswahl aktiviert ist (1).
2. Stärke (Thickness): Lege die Standardstärke des Pinsels fest. Auch diese kann der Nutzer bei Bedarf über die Toolbar anpassen (2).
3. Toolbar: Über die vier Icons kannst du festlegen, welche Optionen dem Nutzer in der Toolbar zur Verfügung stehen: Farbauswahl, Stärkeauswahl, Aktivierungsbutton und Löschen-Button (3). So kannst du beispielsweise für eine einfache Unterschriften-Anwendung alle Optionen ausblenden und nur den Löschen-Button anzeigen.
4. Aktiv (Active): Wenn aktiviert, kann der Nutzer auf der Fläche zeichnen. Wenn deaktiviert, werden Berührungen an darunterliegende Elemente wie Buttons durchgereicht (4). Diese Option ist nützlich, wenn die Zeichenfläche über anderen interaktiven Elementen liegt und du das Zeichnen per Skript ein- und ausschalten möchtest.
5. Auf Gerät speichern (Save on device): Die Zeichnung wird persistent auf der Peakboard Box gespeichert und beim nächsten Start der Visualisierung wiederhergestellt (5). Deaktiviere diese Option, wenn die Zeichenfläche nach jedem Neustart leer sein soll.

### 2 Hintergrund

* Hintergrund (Background): Wähle die Hintergrundfarbe der Zeichenfläche. Für Unterschriften eignet sich ein weißer oder transparenter Hintergrund.
* Schatten (Shadow): Lege einen Schattenwert für das Control fest, um es optisch vom Rest der Oberfläche abzuheben.

## Zeichnungen speichern und weiterverarbeiten

Die Zeichenfläche lässt sich mit den Building Blocks kombinieren, um Zeichnungen oder Unterschriften zu speichern und weiterzuverarbeiten. Typische Ziele sind:

* **Peakboard Hub**: Speichere Unterschriften als Bilddateien in einem Hub-Ordner, z.B. mit Zeitstempel und Auftragsnummer im Dateinamen
* **SharePoint**: Lade Zeichnungen direkt in eine SharePoint-Bibliothek hoch
* **E-Mail**: Versende die Zeichnung als Anhang per E-Mail
* **Externe Systeme**: Übertrage die Zeichnung als Base64-kodierten String an externe APIs

Nutze dazu die Screenshot-Funktionen der Building Blocks in Kombination mit einer Gruppe, die nur die Zeichenfläche enthält.

## Scripting

![image_3](/assets/images/Controls/Drawing-Area/Drawing-Area-Snippets.png)

Die Zeichenfläche bietet verschiedene Eigenschaften und Funktionen für das Scripting:

1. Aktiv (Active): Lese oder setze den Aktivierungsstatus der Zeichenfläche (1). Damit kannst du das Zeichnen per Skript aktivieren, z.B. nachdem ein Nutzer einen Button gedrückt hat.
2. Farbauswahl anzeigen (Show color selection): Steuere die Sichtbarkeit der Farbauswahl in der Toolbar (2).
3. Stärkeauswahl anzeigen (Show thickness selection): Steuere die Sichtbarkeit der Stärkeauswahl in der Toolbar (3).
4. Aktivierungsbutton anzeigen (Show activation button): Steuere die Sichtbarkeit des Aktivierungsbuttons in der Toolbar (4).
5. Löschen-Button anzeigen (Show clear button): Steuere die Sichtbarkeit des Löschen-Buttons in der Toolbar (5).
6. Stärke (Thickness): Lese oder setze die aktuelle Pinselstärke (6).
7. Farbe (Color): Lese oder setze die aktuelle Pinselfarbe (7).
8. Leeren (Clear): Lösche alle Zeichnungen von der Fläche. Diese Funktion ist besonders nützlich nach dem Speichern einer Unterschrift, um die Fläche für die nächste Eingabe vorzubereiten.
