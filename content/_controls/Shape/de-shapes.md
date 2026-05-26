---
layout: article
title: Formen
menu_title: Formen
description: Formen-Controls (Rechteck, Linie, Ellipse, Dreieck, Pentagon, Hexagon, Oktagon) im Peakboard Designer.
lang: de
weight: 400
ref: con-400
redirect_from:
  - /controls/de-shapes.html
---

Mit den Formen-Controls platzierst du grafische Grundelemente wie Rechtecke, Linien oder Polygone auf deiner Oberfläche. Sie eignen sich, um Bereiche optisch zu gliedern, Hintergrundflächen zu erzeugen, Trennlinien zu setzen oder als Container für interaktive Elemente zu dienen. Wie jedes andere Control ziehst du eine Form per Drag-and-Drop aus dem Control-Bereich auf die Zeichenfläche. Alle gemeinsamen Eigenschaften wie Position, Größe und bedingte Formatierung findest du im Artikel [Allgemeine Eigenschaften](/controls/de-allgemeine-eigenschaften.html).

## Formen im Control-Bereich

Die Formen liegen in der Gruppe [Basics]. Das Rechteck ist direkt sichtbar; alle anderen Formen erreichst du über das [...]-Menü neben dem Rechteck.

![Formen im Control-Bereich](/assets/images/Controls/Shapes/toolbox-shapes.png)

Zur Auswahl stehen sieben Formen: Rechteck, Linie, Ellipse, Dreieck, Pentagon, Hexagon und Oktagon.

## Die einzelnen Formen

### Rechteck

Das Rechteck ist die vielseitigste Form. Über die Eigenschaft [Corner radius] kannst du seine Ecken individuell oder gemeinsam abrunden und so vom scharfkantigen Rechteck zur Pille verformen. Hintergrundfarbe, Rahmen und Schatten lassen sich frei kombinieren.

![Rechteck](/assets/images/Controls/Shapes/rectangle.png)

### Linie

Die Linie ist eine einzelne horizontale Strecke, die du in Länge, Stärke und Farbe anpassen kannst. Sie eignet sich gut als visueller Trenner zwischen Inhaltsbereichen.

![Linie](/assets/images/Controls/Shapes/line.png)

### Ellipse

Die Ellipse erzeugt einen ovalen Bereich. Bei identischer Breite und Höhe wird daraus ein Kreis.

![Ellipse](/assets/images/Controls/Shapes/ellipse.png)

### Dreieck

Das Dreieck wird als gleichschenkliges Dreieck mit der Spitze nach oben gezeichnet. Über die Größenwerte streckst du es in beide Richtungen.

![Dreieck](/assets/images/Controls/Shapes/triangle.png)

### Pentagon

Das Pentagon ist ein regelmäßiges Fünfeck und eignet sich für stilisierte Markierungen oder Status-Symbole.

![Pentagon](/assets/images/Controls/Shapes/pentagon.png)

### Hexagon

Das Hexagon ist ein regelmäßiges Sechseck. Es wird gerne für Wabenraster oder Prozessdarstellungen verwendet.

![Hexagon](/assets/images/Controls/Shapes/hexagon.png)

### Oktagon

Das Oktagon ist ein regelmäßiges Achteck und erinnert optisch an ein Stoppschild.

![Oktagon](/assets/images/Controls/Shapes/octagon.png)

## Eigenschaften und Interaktivität

Im Eigenschaftenbereich rechts findest du für jede Form die Abschnitte [General], [Appearance] und [Logic]. Unter [Appearance] stellst du Hintergrundfarbe, Schatten und – wo passend – Rahmenfarbe sowie Rahmenstärke ein. Nur beim Rechteck steht zusätzlich [Corner radius] zur Verfügung.

Unter [Logic] hinterlegst du bei Bedarf ein **Tapped-Event**: Das Skript wird dann ausgeführt, sobald der Benutzer die Form auf einem Touchscreen oder per Klick antippt. So lassen sich Formen als Buttons, Hotspots oder Filterflächen nutzen, ohne dass du ein zusätzliches Button-Control benötigst. Über [Conditional formatting] kannst du Hintergrund, Rahmen und Sichtbarkeit zusätzlich an den Zustand einer Datenquelle koppeln.
