---
layout: article
title: Text-Ticker
menu_title: Text-Ticker
description: Information über Peakboard Designer Text-Ticker Control.
lang: de
weight: 860
ref: con-860
redirect_from:
  - /controls/03-de-text-ticker.html
  - /controls/de-text-ticker.html
---

Das Text-Ticker-Control ist darauf spezialisiert, dynamische Lauftexte in die Visualisierung zu integrieren. Ob aktuelle News, Statusmeldungen oder Kennzahlen – der Ticker ermöglicht eine platzsparende Präsentation von Informationen, die sich kontinuierlich durch das Sichtfeld bewegen.
Du findest den Text-Ticker im Peakboard Designer in der Gruppe "Andere" (1). Ziehe das Icon per Drag-and-drop in deinen Designer oder platziere es mit einem Doppelklick auf deine Arbeitsfläche.

![image_1](/assets/images/Controls/Text-Ticker/textticker_01.png)

# Konfiguration und Eigenschaften
## 1 Datenquelle und Auswahl
Der Text-Ticker kann sowohl mit statischen Texten als auch mit dynamischen Datenquellen verknüpft werden. Klicke das Control doppelt an, um den Konfigurationsdialog zu öffnen:
* Text (Wert angeben): Über diese Eigenschaft wird der anzuzeigende Inhalt festgelegt. Du kannst hier einen festen, statischen Text eingeben (1).
* Datenanbindung (Datenquelle): Der Inhalt kann auch an eine Datenquelle angebunden werden (2a). Falls du eine Tabelle als Quelle nutzt, gebe die anzuzeigende Spalte und Zeile an oder wähle "use all rows", um alle Zeilen der gewählten Spalte anzuzeigen. Je nachdem wird die erste Zeile ausgelesen oder jede Zeile fortlaufend aneinandergereiht angezeigt (2b).
* Unter "Daten" und "Daten/Text" in den Eigenschaften kann der statische oder auf eine Datenquelle bezogene Inhalt ebenfalls eingefügt werden.

![image_2](/assets/images/Controls/Text-Ticker/textticker_02.png)

## 2 Aussehen und Steuerung
In den Eigenschaften auf der rechten Seite kannst du das Verhalten und die Darstellung des Tickers präzise steuern:
1. Control-Positionierung (Allgemeines): Lege die Ausrichtung des Elements auf der Arbeitsfläche fest. Mit den ersten acht Symbolen kann das Control schnell an Ecken oder Seitenmitten platziert werden, während das neunte Symbol die gesamte verfügbare Fläche füllt. Das letzte Icon zentriert das Element mittig, wobei die Größe über die manuellen Eingabefelder definiert werden kann. (1)
2. Abstand (Allgemeines): Über die Felder Breite, Höhe, Links und Oben kannst du den Ticker präzise positionieren. Darunter definierst du einen inneren Abstand (Padding) für den Text innerhalb seines Rahmens. In diesem Bereich kann ebenfalls ein Titel vergeben werden, der über dem Control erscheint. (2)
3. Richtung und Ticker-Geschwindigkeit (Daten): Die Eigenschaft "Richtung" definiert die Laufrichtung des Textes, während die Ticker-Geschwindigkeit die Laufgeschwindigkeit des Textes bestimmt (3).
4. In Skripten verwenden (Logik): Gib dem Control einen eindeutigen Namen, um es später per Skript zu steuern (z. B. um den Text dynamisch zu ändern) (4).
5. Bedingte Formatierung (Logik): Nutze die bedingte Formatierung, um beispielsweise die Farbe oder Sichtbarkeit des Tickers basierend auf bestimmten Ereignissen zu steuern (5).

![image_3](/assets/images/Controls/Text-Ticker/textticker_03.png)

## Hinweis
Bitte beachten Sie folgende, generelle Zusatzinfos:

[Allgemeine Eigenschaften](/controls/01-de-allgemeine-eigenschaften.html)

[Verwalten von Schriftformaten mit dem Font Manager](/misc/04-de-fonts.html)

