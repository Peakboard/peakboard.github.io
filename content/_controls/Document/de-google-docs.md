---
layout: article
title: Google Docs  
menu_title: Google Docs
description: Information über Peakboard Designer Google Docs Control.
lang: de
weight: 520
ref: con-520
redirect_from:
  - /controls/05-de-google-docs.html
  - /controls/de-google-docs.html
---

Das Google Docs Control ermöglicht es, Google Docs Dokumenten in die Visualisierung einzubinden. Dabei werden alle drei Arten von Dokumenten unterstützt: Docs (normale Dokumente wie man sie aus MS Word kennt), Slides (so wie aus MS PowerPoint) und Spreadsheet (so wie aus MS Excel).
Du findest das Google Docs Control im Peakboard Designer in der Gruppe Medien & Dokumente (1). Ziehe das Icon per Drag-and-drop in deinen Designer oder platziere es mit einem Doppelklick auf deine Arbeitsfläche.

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs_01.png)

# Konfiguration und Eigenschaften
## 1 Datenquelle und Kontoverknüpfung
Wir wollen das folgende Beispieldokument einbinden, dazu ist nicht nötig, es in irgendeiner Form freizugeben. Erlaube Peakboard nur, lesend auf Google Drive zuzugreifen. Damit ist die Authentifizierung sichergestellt.

![image_2](/assets/images/Controls/Google-Docs/ControlsGoogleDocs01.png)

Klicke auf den Button "Autorisieren"(1), um den Autorisierungsdialog zu öffnen, auf dem Sie ihre Google-Zugangsdaten eingeben müssen. Achtung! Es handelt sich hierbei um eine Google-Website. Du gibst also nicht deinen User-Namen und dein Passwort an Peakboard, sondern Du authentifizierst dich lediglich bei Google und erlaubst den Zugriff. Google gibt dann an Peakboard nur einen Autorisierungstoken zurück (eine kryptische Zeichenfolge). Du kannst diese Autorisierung jederzeit in deinem Google-Konto widerrufen. Es funktioniert genau nach demselben Prinzip, wie wenn Du anderen Drittanbieter-Apps den Zugriff erlaubst.
Mit Hilfe des Eingabefeld "Dokument" (2) öffnet sich ein Auswahl-Dialog, der die Ordnerstruktur des Google Drive Kontos wiedergibt. So lässt sich das gewünschte Dokument selektieren und in den Hauptdialog übernehmen.

![image_3](/assets/images/Controls/Google-Docs/ControlsGoogleDocs_02.png)

## 2 Aussehen und Steuerung
In den Eigenschaften auf der rechten Seite kannst du das Verhalten und die Darstellung präzise steuern:
1. Control-Positionierung (Allgemeines): Lege die Ausrichtung des Elements auf der Arbeitsfläche fest. Mit den ersten acht Symbolen kann das Control schnell an Ecken oder Seitenmitten platziert werden, während das neunte Symbol die gesamte verfügbare Fläche füllt. Das letzte Icon zentriert das Element mittig (1).
2. Allgemeines: Über die Felder Breite, Höhe, Links und Oben kannst du die Größe der PDF über die manuellen Eingabefelder präzise definieren. Darunter definierst du einen inneren Abstand (Padding) für das Dokument innerhalb seines Rahmens und es kann ebenfalls ein Titel vergeben werden, der über dem Control erscheint (2).
3. In Skripten verwenden (Logik): Gib dem Control einen eindeutigen Namen, um es später per Skript zu steuern.
4. Bedingte Formatierung (Logik): Nutze die bedingte Formatierung, um beispielsweise die Sichtbarkeit des Controls basierend auf bestimmten Ereignissen zu steuern.

Der Vorschau-Button ruft das Dokument von Google ab und zeigt es im unteren Bereich des Dialogs an.
Und genauso sollte es aussehen, wenn es zur Laufzeit in der Vorschau oder direkt auf der Peakboard Box läuft.

![image_4](/assets/images/Controls/Google-Docs/ControlsGoogleDocs_03.png)

## Hinweise

Wenn Sie Slides von Google nutzen, werden diese Folien an die Größe des Peakboard-Controls angepasst. Bei Docs und Spreadsheets ist das nicht der Fall. Hier wird die pixelgenaue Größe in das Peakboard-Control eingepasst. Wenn das Control nicht groß genug ist, sind Teile des Inhalts nicht sichtbar.
