---
layout: article
title: Textfeld
menu_title: Textfeld
description: Information über Peakboard Designer Textfeld Control.
lang: de
weight: 700
ref: con-700
redirect_from:
  - /controls/de-textbox.html
---

<div class="box-tip" markdown="1">
**Hinweis**
Zur Darstellung von Werten oder KPIs solltest du immer das [Text Control](/controls/de-text-block.html) verwenden!
</div>

Das Textfeld ermöglicht es dir, im Gegensatz zum [Text Control](/controls/de-text-block.html), auch Texteingaben vorzunehmen.
Um das Textfeld hinzuzufügen ziehe es per Drag-and-drop auf den Arbeitsbereich.

![Textfeld hinzufügen](/assets/images/Controls/Text-Box/de_textbox-01.gif)

### Textfeld-Eigenschaften

Neben dem Bereich [Aussehen] in den Attributen, wo du Eigenschaften wie Schriftart (1), Ausrichtung (2) Hintergrund (3) und Kontur-Eigenschaften (4) anpassen kannst, findest du beim Textfeld im Bereich [Daten] Textefeld-spezifische Eigenschaften.
Du kannst das Textfeld mit einem Klick auf das Verknüpfungs-Symbol (5) mit einer Datenquelle verknüpfen.
Außerdem kannst du einen Eingabetyp (6) aus dem Drop-down-Menü auswählen. Wähle [Text] für normale Texteingaben. Du kannst angeben ob diese mehrzeilig (7) möglich sein sollen und kannst die Daten-Validierung (8) mit einem Klick auf die entsprechende Checkbox aktivieren.

![Textfeld-Attribute](/assets/images/Controls/Text-Box/de_textbox-02.png)

### Daten-Validierung

Um die Daten die in das Textfeld eingegeben werden zu validieren kannst du reguläre Ausdrücke (Regular expressions, kurz: Regex) (1) verwenden.
Mit einem Klick auf den [...]-Button (2) gelangst du zu einigen Beispielausdrücken (3) die du verwenden kannst, wenn in das Feld beisüielsweise eine gültige E-Mail Adresse eingegeben werden soll. Im Internet findest du viele Quellen für weitere und beliebig komplexe reguläre Ausdrücke. Damit der Nutzer des Textfeldes sieht ob seine Eingabe korrekt ist, kannst du eine Farbe für ungültige Eingaben (4) angeben.

![Textfeld-Attribute](/assets/images/Controls/Text-Box/de_textbox-03.png)

Weitere Eingabetypen die du wählen kannst sind [Password] und [Numeric]. Wählst du den Eingabetyp [Password], wird der eingegebene Text in der Visualisierung durch [*] ersetzt. Die Daten-Validierung kannst du hier ebenfalls nutzen. Wählst du den Eingabetyp [Numeric], wird die Daten-Validierung automatisch aktiviert und die Eingabe durch einen regulären Ausdruck auf natürliche Zahlen begrenzt.

### Eingaben weiterverarbeiten

Du kannst die gemachten Eingaben auf verschiedenen Wegen weiterverarbeiten.
In den Attributen findest du dafür im Bereich [Logik] zwei verschiedene Skriptoptionen:

* [Textänderung Event] (1) - hier kannst du einen Skript hinterlegen der ausgeführt wird, wenn eine neue Eingabe gemacht wurde.
* [Tapped Event] (2) - hier kannst du ein Skript hinterlegen, das ausgeführt wird, wenn das Textfeld per Touch oder Mausklick geklickt wird.

Weitere Information wie du Skripte anlegst oder wie der [Skript-Editor](/scripting/de-script-editor.html) funktioniert findest du in der Rubrik Scripting.
Wenn das Control in Skripten verwendet wird kannst du die entsprechende Checkbox aktivieren und dem Control einen Namen (3) geben mit dem du in den Skripten arbeiten kannst.

![Verfügbare Skriptoptionen](/assets/images/Controls/Text-Box/de_textbox-04.png)
