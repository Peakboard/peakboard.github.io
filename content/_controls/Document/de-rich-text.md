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