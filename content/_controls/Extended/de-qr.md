---
layout: article
title: QR Code
menu_title: QR Code
description: Information über Peakboard Designer QR Code Control.
lang: de
weight: 800
ref: con-800
redirect_from:
  - /controls/de-qr.html
---

Das QR Code Control ermöglicht es, QR-Codes schnell und einfach in eine Visualisierung zu integrieren.
Du findest das QR Code Control im Peakboard Designer in der Gruppe "Andere" (1). Ziehe das Icon per Drag-and-drop in deinen Designer oder platziere es mit einem Doppelklick auf deine Arbeitsfläche.

![image_1](/assets/images/Controls/QR-Code/qrcode_01.png)

# Konfiguration und Eigenschaften
## 1 Datenquelle und Kontoverknüpfung
Ein QR-Code Control kann auf unterschiedliche Weise mit Inhalten gefüllt werden. Klicke das Control doppelt an, um den Konfigurationsdialog zu öffnen:
* Statische Ressource: Füge einen URL-Link aus deinem Browser ein (z. B. "https//www.peakboard.com") (1).
* Dynamische Verknüpfung (Datenbindung): Verknüpfe das Control mit einer Datenquelle oder einer Variablen, die einen Pfad oder eine URL enthält. Der Code wird zur Laufzeit automatisch aktualisiert (2).
* Anstelle des Konfigurationsdialogs kann auch das Eingabefeld bei Daten unter den Eigenschaften genutzt werden, um eine URL, eine Datenquelle oder eine Variable mit dem Control zu verknüpfen (3).

![image_2](/assets/images/Controls/QR-Code/qrcode_02.png)

## 2 Aussehen und Steuerung
In den Eigenschaften auf der rechten Seite kannst du das Verhalten und die Darstellung präzise steuern:
1. Control-Positionierung (Allgemeines): Lege die Ausrichtung des Controls auf der Arbeitsfläche fest. Mit den ersten acht Symbolen kann das Control schnell an Ecken oder Seitenmitten platziert werden, während das neunte Symbol die gesamte verfügbare Fläche füllt. Das letzte Icon zentriert das Element mittig (1).
2. Allgemeines: Über die Felder Breite, Höhe, Links und Oben kannst du die Größe des Controls über die manuellen Eingabefelder präzise definieren. Darunter definierst du einen inneren Abstand (Padding) für das Dokument innerhalb seines Rahmens und es kann ebenfalls ein Titel vergeben werden, der über dem Control erscheint (2).
3. QR Code (Aussehen): Wähle die Farbe des Controls und den Typ, ob das Control als QR-Code oder als "Code 128"-Barcode angezeigt werden soll (3).
4. In Skripten verwenden (Logik): Gib dem Control einen eindeutigen Namen, um es später per Skript zu steuern (4).
4. Bedingte Formatierung (Logik): Nutze die bedingte Formatierung, um beispielsweise die Sichtbarkeit des Controls basierend auf bestimmten Ereignissen zu steuern (5).

![image_3](/assets/images/Controls/QR-Code/qrcode_03.png)

## Hinweis
Soll der angezeigte QR Code in einer aktiven Visuaisierung mittels Skript geändert werden, dann muss das QR Code Control zunächst einen Namen bekommen um es in einem Skript ansprechen zu können. 
Im Skriptausschnitt heißt das QR Code Control einfach nur 'QR'.


Starte die Vorschau und überprüfe, ob der Code richtig ausgelesen werden kann.