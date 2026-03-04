---
layout: article
title: Rich Text
menu_title: Rich Text
description: Information über Peakboard Designer Rich Text Control.
lang: de
weight: 500
ref: con-500
redirect_from:
  - /controls/de-rich-text.html
---

Das Rich-Text-Control ermöglicht es dir, formatierte Texte wie Arbeitsanweisungen, detaillierte Beschreibungen oder formatierte Meldungen direkt in deine Visualisierung einzubinden. Im Gegensatz zum Standard-Text-Control unterstützt es verschiedene Schriftstile, Farben und Ausrichtungen innerhalb eines einzigen Elements und kann sowohl statische als auch dynamische Inhalte verarbeiten.
Du findest das Rich-Text-Control im Peakboard Designer in der Gruppe Medien & Dokumente (1). Ziehe das Icon per Drag-and-drop in deinen Designer oder platziere es mit einem Doppelklick auf deine Arbeitsfläche.

# Konfiguration und Eigenschaften
## 1 Datenquelle und Auswahl
Ein Rich-Text-Control kann flexibel mit Inhalten gefüllt werden. Ist das Control auf der Arbeitsfläche gesetzt, öffnet sich automatisch der Konfigurationsdialog. Hier kann nun die Datenquelle in das Control eingefügt werden.
* Ressource auswählen: In diesem Fenster kann von dem Designer bereits hinzugefügten Dokument-Ressourcen gewählt werden (1). Die Ressource wird mit "Erste Ressource hinzufügen" aus dem lokalen Speicherort (1b) eingefügt, oder mit "Ressource hinzufügen" der Speicherort des Dokuments gewählt und dem Designer hinzugefügt werden (1c)
* Dynamische Verknüpfung (): Verknüpfe das Control mit einer Datenquelle oder einer Variablen, die bereits formatierten Text (z. B. im RTF- oder HTML-Format) enthält. Der Inhalt wird dann zur Laufzeit automatisch aktualisiert.

2 Aussehen und Steuerung
In den Eigenschaften auf der rechten Seite kannst du das Verhalten und die Darstellung präzise steuern:

Control-Positionierung (Allgemeines): Lege die Ausrichtung des Elements auf der Arbeitsfläche fest. Mit den ersten acht Symbolen kann das Control schnell an Ecken oder Seitenmitten platziert werden, während das neunte Symbol die gesamte verfügbare Fläche füllt. Das letzte Icon zentriert das Element mittig, wobei die Größe vorab über die manuellen Eingabefelder definiert werden kann. (1)

Abstand (Allgemeines): Über die Felder Breite, Höhe, Links und Oben kannst du das Rich-Text-Feld präzise positionieren. Darunter definierst du einen inneren Abstand (Padding) für den Text innerhalb seines Rahmens. In diesem Bereich kann ebenfalls ein Titel vergeben werden, der über dem Control erscheint. (2)

Scrollbalken (Aussehen): Aktiviere horizontale oder vertikale Scrollbalken, falls der Text länger ist als die definierte Fläche des Controls.

Nur Lesen (Daten): Bestimme, ob der Text zur Laufzeit nur angezeigt werden soll oder ob (bei entsprechender Eingabemöglichkeit) Änderungen zulässig sind.

In Skripten verwenden (Logik): Gib dem Control einen eindeutigen Namen, um den Inhalt später per Skript dynamisch zu überschreiben (3).

Bedingte Formatierung (Logik): Nutze die bedingte Formatierung, um beispielsweise die Hintergrundfarbe des gesamten Controls bei bestimmten Statusänderungen zu wechseln.

Scripting
Das Rich-Text-Control bietet Befehle, um den angezeigten Text dynamisch zu manipulieren.

Beispiel: Textinhalt per Button aktualisieren
In diesem Beispiel nutzen wir einen Button, um eine vordefinierte Statusmeldung im Rich-Text-Control anzuzeigen.

Schritte im Script-Editor:

Öffne den Script-Editor eines Buttons unter Tapped.

Wähle unter der Kategorie deines Rich-Text-Controls den Block „Wert setzen“ für die Eigenschaft text.

Gib den gewünschten Text ein (du kannst hier auch einfache HTML-Tags zur Formatierung nutzen).