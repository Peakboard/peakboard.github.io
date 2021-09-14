---
layout: article
title: Der Peakboard-Skript-Editor
menu_title: Der Peakboard-Skript-Editor
description: Informatinon über den Peakboard-Skript-Editor
lang: de
weight: 101
ref: scr-101
redirect_from:
---

Für komplexe [Lua-Skripte](/scripting/de-script-engine.html) liefert der Peakboard Designer einen eigenen Skript-Editor. 
In der nachfolgenden Abbildung siehst du am Beispiel eines Timer-Skripts, wie der Skript-Editor aussieht, allerdings ist der Aufbau für alle [Peakboard Skript-Typen](/scripting/de-script-types.html) nahezu identisch. 

![Image01](/assets/images/scripting/editor/Scripting01.png)

Wenn du den Skript-Editor öffnest, kannst du dich entscheiden, ob du im klassischen textbasierten Editor arbeiten willst, oder in den [Building Blocks Mode](/scripting/de-building-blocks.html) wechseln willst (1).

Oberhalb des Skript-Baums (2) findest du jeweils einen Button zum [comment out / auskommentieren] sowie einen zum [uncomment / entkommentieren]. 

Über die Lupe oder über die Tastenkombination [Strg+F] gelangst du zu [find / suche] und [replace / ersetzen]. 

<div class="box-tip" markdown="1">
**Tipp:**

Weitere hilfreiche Tastenkombination findest du am Ende dieses Artikels.
</div>

Der [Skript-Baum](/scripting/de-script-tree.html) (3) enthält neben den zuvor im Peakboard Designer angelegten Elementen des Explorers ([Data], [Variable], [Dataflows], [Screens] und [Ressources]) auch [Timer], [Types], [Runtime] sowie einige der am häufigsten verwendeten Funktionen. 
Zuletzt findest du hier auch deine zuvor angelegten und [geteilten Verbindungen (Shared Connections)](/misc/de-shared-connection.html).

Mithilfe der Ordner links (4) navigierst du durch die [verschiedenen Skripte](/scripting/de-script-types.html), ohne den Editor dabei verlassen zu müssen.

Nachdem du das Skript in der Mitte des Skript-Editors eingegeben hast (5), kannst du über [Validate / Validieren] prüfen, ob es korrekt ist (6). 

Sollte dein Skript nicht korrekt funktionieren, so kannst du es mit dem Debugger (7) debuggen.

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

