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

Für komplexe Lua-Skripte liefert der Peakboard Designer einen eigenen Skript-Editor.
In der nachfolgenden Abbildung siehst du am Beispiel eines Timer-Skripts, wie der Skript-Editor aussieht, allerdings ist der Aufbau für alle Peakboard Skript-Typen nahezu identisch.

![Skript-Editor](/assets/images/scripting/editor/de_script-editor-01.png)

Wenn du den Skript-Editor öffnest, kannst du dich entscheiden, ob du im [Building Block Mode](/scripting/de-building-blocks.html) arbeiten willst, oder in den klassischen textbasierten Editor wechseln willst (1).

Oberhalb der Arbeitsfläche (2) findest du jeweils einen Button zum [auskommentieren] (3) sowie einen zum [entkommentieren] (4).

Über den Lupen-Button (5) oder über die Tastenkombination [Strg+F] gelangst du zu [Suchen] und [Ersetzen].

<div class="box-tip" markdown="1">
**Tipp:**

Weitere hilfreiche Tastenkombinationen findest du am Ende dieses Artikels.
</div>

![Skript-Editor](/assets/images/scripting/editor/de_script-editor-02.png)

Der Skript-Baum (6) soll das Arbeiten mit Skripten erleichtern. Hierzu findest du dort bereits vordefinierte Funktionen und Beispiele, die du einfach per Doppelklick an der Stelle des Cursors einsetzen kannst. Er enthält neben den zuvor von dir im Peakboard Designer angelegten Elementen des Explorers wie zum Beispiel [Daten], [Dataflows], [Variablen], [Reload Flows], [Ressources] und [Controls]/[Screens] auch [Timer Skripte], [Logik & Schleifen], [Mathematik] und viele weitere Funktionen, sowie unter anderem alle Verbindungen aus deinem aktuellen Projekt unter [In externem System veröffentlichen].

Mithilfe der Ordner auf der linken Seite des Skript-Editors (7) navigierst du durch deine bisher angelegten Skripte im aktuellen Projekt, ohne den Editor dabei verlassen zu müssen. Skripte aus Dataflows sind dort nicht aufgeführt.

Nachdem du ein Skript in der Arbeitsfläche des Skript-Editors eingegeben hast, kannst du über den Button [Validieren] (8) prüfen, ob es korrekt ist.
In der Fehlerliste (9) werden fehlende oder falsche Elemente aufgeführt.

### Hilfreiche Tastenkombinationen

{% include styled_table.html %}
{: .w-full }
| STRG + F						| Öffnet das Suchdialogfenster				|
| STRG + Leertaste				| Öffnet die Intellisense					|
| STRG + Pfeiltasten			| Springt durch den Text					|
| STRG + Shift + Pfeiltasten	| Markiert komplette Textabschnitte			|
| STRG + Pos1/Ende				| Springt an den Anfang/Ende des Textes		|
| STRG +Shift + Pos1/Ende		| Markiert den Text bis zum Anfang/Ende		|
| ALT + Up/Down					| Verschieben einer Schriftzeile			|
| ALT + Mausauswahl				| Auswahl des Cursors in mehreren Zeilen	|
| Tab							| Autovervollständigung						|
