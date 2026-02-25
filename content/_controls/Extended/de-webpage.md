---
layout: article
title: Webpage
menu_title: Webpage
description: Information über Peakboard Designer Webpage Control.
lang: de
weight: 810
ref: con-810
redirect_from:
  - /controls/08-de-webpage.html
  - /controls/de-webpage.html
---

Das Webpage-Control ermöglicht ein frei positionierbareren Browser innerhalb deiner Visualisierung. Hiermit können externe Webseiten oder webbasierte Benutzeroberflächen nahtlos integriert werden.
Du findest das Webpage-Control im Peakboard Designer in der Gruppe "Andere" (1). Ziehe das Icon per Drag-and-drop in deinen Designer oder platziere es mit einem Doppelklick auf deine Arbeitsfläche.

![image_1](/assets/images/Controls/Webpage/webpage_01.png)

# Konfiguration und Eigenschaften
## 1 Datenquelle und Auswahl
Um eine Webseite anzuzeigen, gebe die URL bzw. Quelle unter "Daten" in den Eigenschaften auf der rechten Seite ein (1).
* Ansichtsart (Daten): Lege fest, ob die Webseite in der Desktop- oder mobilen Ansicht angezeigt werden soll (2).
* Aktualisierungsintervall (Daten): Lege fest, nach wie vielen Sekunden die Webseite automatisch neu geladen werden soll. Dies ist besonders nützlich für Live-Dashboards oder News-Ticker (3).

![image_2](/assets/images/Controls/Webpage/webpage_02.png)

## 2 Aussehen und Steuerung
In den Eigenschaften auf der rechten Seite kannst du das Verhalten und die Darstellung präzise steuern:
1. Control-Positionierung (Allgemeines): Lege die Ausrichtung des Elements auf der Arbeitsfläche fest. Mit den ersten acht Symbolen kann das Control an Ecken oder Seitenmitten der Arbeitsfläche platziert werden, während das neunte Symbol die gesamte verfügbare Fläche füllt. Das letzte Icon zentriert das Element mittig, wobei die Größe vorab über die manuellen Eingabefelder definiert werden kann. (1)
2. Abstand (Allgemeines): Über die Felder Breite, Höhe, Links und Oben kannst du das Webpage-Fenster präzise positionieren. Darunter definierst du einen inneren Abstand für den Inhalt innerhalb seines Rahmens. In diesem Bereich kann ebenfalls ein Titel vergeben werden, der über dem Control erscheint. (2)
3. Scrollen und Zoomen (Aussehen): Stelle die Erstansicht der Webseite während der Laufzeit mit dem horizontalen Scroll, dem vertikalen Scroll und der Zoomstärke ein. Eine Standard-Desktop-Ansicht hat die Zoomgröße 100 (3).
4. Bedingte Formatierung (Logik): Nutze die bedingte Formatierung, um beispielsweise die Sichtbarkeit des Browsers basierend auf bestimmten Ereignissen zu steuern (4).

![image_3](/assets/images/Controls/Webpage/webpage_03.png)

## 3 Erweiterte Einstellungen
* Autorisieren (Erweitert): Peakboard unterstützt auch Webseiten, die einen passwortgeschützten Zugang erfordern (1).
* JavaScript Injektion (Erweitert): Über dieses Feld wird ein eigener JavaScript-Code injiziert, der nach dem Laden der Webseite automatisch ausgeführt wird. Dies optimiert die Darstellung durch das Ausblenden störender Elemente oder ermöglicht automatisierte Interaktionen für eine angepasste Ansicht (2).
* User Agent: Diese Einstellung legt fest, wie sich das Peakboard-Control gegenüber der Zielwebseite identifiziert (sein „Personalausweis“). Durch das Ändern des Standard-Werts kannst du das Verhalten der Webseite beeinflussen.
* Plattformübergreifende Nutzung erlauben (Erweitert): Diese Einstellung gewährleistet eine einheitliche Darstellung der Web-Inhalte auf verschiedenen Plattformen und Endgeräten. Sie hilft dabei, plattformspezifische Restriktionen zu umgehen, damit komplexe Webseiten oder Dashboards überall korrekt angezeigt werden.

![image_4](/assets/images/Controls/Webpage/webpage_04.png)

Starte die Vorschau, um zu überprüfen, ob die Webseite korrekt dargestellt wird.

![image_5](/assets/images/Controls/Webpage/webpage_05.png)
