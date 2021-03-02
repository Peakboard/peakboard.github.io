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

Oberhalb des Skript-Baums (1) findest du jeweils einen Button zum [comment out / auskommentieren] sowie einen zum [uncomment / entkommentieren]. 

Über die Lupe oder über die Tastenkombination [Strg+F] gelangst du zu [find / suche] und [replace / ersetzen] 

Der [Skript-Baum](/scripting/de-script-tree.html) (2) enthält neben den zuvor im Peakboard Designer angelegten Elementen des Explorers ([Data], [Variable], [Dataflows], [Screens] und [Ressources]) auch [Timer], [Types], [Runtime] sowie einige der am häufigsten verwendeten Funktionen. 
Zuletzt findest du hier auch deine zuvor angelegten und [geteilten Verbindungen (Shared Connections)](/misc/de-shared-connection.html).

Mithilfe der Ordner links (3) navigierst du durch die [verschiedenen Skripte](/scripting/de-script-types.html), ohne den Editor dabei verlassen zu müssen.

Nachdem du das Skript in der Mitte des Skript-Editors eingegeben hast (4), kannst du über [Validate / Validieren] prüfen, ob es korrekt ist (5). 

Sollte dein Skript nicht korrekt funktionieren, so kannst du es mit dem Debugger (6) debuggen.