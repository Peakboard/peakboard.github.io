---
layout: article
title: Skript-Editor
menu_title: Skript-Editor
description: Information über den Peakboard-Skript-Editor
lang: de
weight: 110
ref: scr-110
redirect_from:
---

Für komplexe Lua-Skripte liefert der Peakboard Designer einen eigenen Skript-Editor. Die folgende Abbildung zeigt ihn am Beispiel eines Timer-Skripts, der Aufbau ist aber bei jedem Peakboard-Skripttyp derselbe.

![Skript-Editor](/assets/images/scripting/editor/en_script-editor-2026.png)

**Alle Skripte des Projekts (1).** Die Leiste links listet die Skripttypen des aktuellen Projekts auf – [Timer], [Functions], [Global events], [On screen activation], [After data reload] und [For controls]. Hier wechselst du zwischen deinen Skripten, ohne den Editor zu verlassen. Skripte, die zu Dataflows gehören, sind dort nicht aufgeführt.

**Mehrere Skripte gleichzeitig (2).** Skripte öffnen sich als Tabs, du kannst also mehrere gleichzeitig offen haben und zwischen ihnen springen. Ein Sternchen hinter dem Namen bedeutet, dass es ungespeicherte Änderungen gibt; das x schließt den Tab.

**Die Einstellungen des Skripts (3).** Über der Arbeitsfläche stehen die Eigenschaften des gerade geöffneten Skripts. Welche das sind, hängt vom Skripttyp ab – ein Timer wie in der Abbildung hat einen Namen, einen Modus, ein Intervall in Millisekunden und eine Checkbox dafür, ob er überhaupt aktiv ist.

**Die Arbeitsfläche (4).** Hier wird das Skript geschrieben. Die Lua-Syntax wird hervorgehoben, und Fehler werden direkt unterhalb der Arbeitsfläche mit Zeilenangabe gemeldet – ein Skript, das sich nicht parsen lässt, sagt dir das also, bevor du es überhaupt ausführst.

**Kommentieren und suchen (5).** [Comment Lines] und [Uncomment Lines] wirken auf die markierten Zeilen. Die Lupe oder [Strg+F] öffnet Suchen und Ersetzen.

**Zwei Arten zu schreiben (6).** Mit dem Umschalter wechselst du zwischen [Script] – dem hier gezeigten textbasierten Editor – und [Blocks], dem visuellen [Building Blocks](/scripting/de-building-blocks.html)-Editor. Dasselbe Skript lässt sich in beiden Ansichten betrachten.

**Alles, was du einfügen kannst (7).** Der Bereich rechts enthält, was dein Skript ansprechen kann: die Datenquellen, Dataflows und Variablen des Projekts unter [DATA], die Controls deiner Bildschirme unter [CONTROLS], fertige Funktionen unter [FUNCTIONS] – darunter alle Verbindungen des Projekts unter [Publish to external system] – und die Sprachgrundlagen unter [BASICS], von [Logic & Loops] über [Math], [Text], [Date] und [JSON] bis [Error handling]. Ein Doppelklick fügt ein Element an der Cursorposition ein. Statt zu scrollen, kannst du den Bereich mit [Strg+B] durchsuchen.

Ist das Skript geschrieben, führt [Test script] es gegen die Vorschaudaten aus. Was du mit `peakboard.log('...')` protokollierst, erscheint dort ebenso wie weitere Rückgabewerte.

<div class="box-tip" markdown="1">
**Hinweis:**

Weitere hilfreiche Tastenkombinationen findest du am Ende dieses Artikels.
</div>

### Hilfreiche Tastenkombinationen

{% include styled_table.html %}
{: .w-full }
| STRG + B						| Durchsucht den Elementbereich				|
| STRG + F						| Öffnet das Suchdialogfenster				|
| STRG + Leertaste				| Öffnet die Intellisense					|
| STRG + Pfeiltasten			| Springt durch den Text					|
| STRG + Shift + Pfeiltasten	| Markiert komplette Textabschnitte			|
| STRG + Pos1/Ende				| Springt an den Anfang/Ende des Textes		|
| STRG +Shift + Pos1/Ende		| Markiert den Text bis zum Anfang/Ende		|
| ALT + Up/Down					| Verschieben einer Schriftzeile			|
| ALT + Mausauswahl				| Auswahl des Cursors in mehreren Zeilen	|
| Tab							| Autovervollständigung						|
