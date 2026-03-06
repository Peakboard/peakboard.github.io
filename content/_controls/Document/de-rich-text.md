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

![image_1](/assets/images/Controls/Rich-Text/richtext_01.png)

# Konfiguration und Datenanbindung
## 1 Datenquelle und Auswahl
Ein Rich-Text-Control kann flexibel mit Inhalten gefüllt werden. Ist das Control auf der Arbeitsfläche gesetzt, öffnet sich automatisch der Konfigurationsdialog. Hier kann nun die Datenquelle in das Control eingefügt werden.
* Ressource auswählen: In diesem Fenster kann aus den vom Designer bereits hinzugefügten Dokument-Ressourcen gewählt werden (1a). Die Ressource kann mit "Erste Ressource hinzufügen" aus dem lokalen Speicherort eingefügt, oder mit "Ressource hinzufügen" der Speicherort des Dokuments gewählt und dem Designer hinzugefügt werden (1b).
* Dynamische Verknüpfung (Daten): Unter "Daten" und "Ressource/Pfad" kann das Dokument aus den hinzugefügten Ressourcen gewählt werden (2a). Der Inhalt kann unter "Dateiname" auch an eine Datenquelle angebunden werden (2b).
* Nachladeintervall (Daten): Lege fest, nach wie vielen Sekunden die Webseite automatisch neu geladen werden soll. Dies ist besonders nützlich für Live-Dashboards oder News-Ticker (3).

![image_2](/assets/images/Controls/Rich-Text/richtext_02.png)

## 2 Aussehen und Steuerung
In den Eigenschaften auf der rechten Seite kannst du das Verhalten und die Darstellung präzise steuern:
1. Control-Positionierung (Allgemeines): Lege die Ausrichtung des Elements auf der Arbeitsfläche fest. Mit den ersten acht Symbolen kann das Control schnell an Ecken oder Seitenmitten platziert werden, während das neunte Symbol die gesamte verfügbare Fläche füllt. Das letzte Icon zentriert das Element mittig, wobei die Größe vorab über die manuellen Eingabefelder definiert werden kann. (1)
2. Abstand (Allgemeines): Über die Felder Breite, Höhe, Links und Oben kannst du das Rich-Text-Feld präzise positionieren. Darunter definierst du einen inneren Abstand (Padding) für den Text innerhalb seines Rahmens. In diesem Bereich kann ebenfalls ein Titel vergeben werden, der über dem Control erscheint (2).
3. In Skripten verwenden (Logik): Gib dem Control einen eindeutigen Namen, um den Inhalt später per Skript dynamisch zu überschreiben (3).
4. Bedingte Formatierung (Logik): Nutze die bedingte Formatierung, um beispielsweise die Hintergrundfarbe des gesamten Controls bei bestimmten Statusänderungen zu wechseln (4).

![image_3](/assets/images/Controls/Rich-Text/richtext_03.png)
