---
layout: article
title: Diashow
menu_title: Diashow
description: Information über Peakboard Designer Diashow Control.
lang: de
weight: 330
ref: con-330
redirect_from:
  - /controls/de-photoframe.html
---

Das Diashow-Control ist darauf spezialisiert, eine Abfolge von Bildern in deiner Visualisierung darzustellen. Im Gegensatz zum einfachen Bild-Control, das nur eine einzelne Datei anzeigt, kann die Diashow dynamische Bildlisten verarbeiten und diese automatisch abspielen. Dies ist ideal für die Anzeige von Produktbildern oder Markenlogos.
Du findest die Diashow im Peakboard Designer in der Gruppe Medien & Dokumente (1). Ziehe das Icon per Drag-and-drop in deinen Designer oder platziere es mit einem Doppelklick auf deine Arbeitsfläche.

![Image_1](/assets/images/Controls/photoframe/photoframe_01.png)

# Konfiguration und Eigenschaften
## 1 Datenquelle und Auswahl
Eine Diashow benötigt eine Quelle, aus der er die Bilddaten beziehen kann. Klicke das Control doppelt an, um den Konfigurationsdialog zu öffnen:
* Ressource / Pfad (Daten): Wähle hier die Bilder aus deinen lokalen Ressourcen aus (1).
* Dynamische Verknüpfung (Daten): Du kannst den Pfad auch an eine Datenquelle binden. Wenn die Datenquelle eine Liste von Pfaden zurückgibt, zeigt die Diashow diese nacheinander an.
* Die Quelle kann auch unter "Daten" in den Eigenschaften auf der rechten Seite hinzugefügt werden (2).

![Image_2](/assets/images/Controls/photoframe/photoframe_02.png)

## 2 Aussehen und Steuerung
In den Eigenschaften auf der rechten Seite kannst du das Verhalten der Diashow und die optische Darstellung präzise steuern:
1. Control-Positionierung (Allgemeines): Lege die Ausrichtung des Controls auf der Arbeitsfläche fest. Mit den ersten acht Symbolen kann das Control schnell an Ecken oder Seitenmitten platziert werden, während das neunte Symbol die gesamte verfügbare Fläche füllt. Das letzte Icon zentriert das Element mittig, wobei die Größe vorab über die manuellen Eingabefelder definiert werden kann. (1)
2. Abstand (Allgemeines): Über die Felder Breite, Höhe, Links und Oben kannst du die Diashow präzise positionieren. Darunter definierst du einen inneren Abstand (Padding) und einen Titel für die Bilder innerhalb des Rahmens. (2)
3. Nachladeintervall (Daten): Bestimme, nach wie vielen Sekunden das nächste Bild angezeigt werden soll (3).
4. In Skripten verwenden (Logik): Gib dem Control einen eindeutigen Namen, um es später im Scripting (anderer Controls) einfach identifizieren zu können (4).

![Image_3](/assets/images/Controls/photoframe/photoframe_03.png)
