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

Um komplexe [Lua-Skripte](/scripting/de-script-engine.html) zu erstellen, ist ein Editor notwendig. Der Designer liefert hierzu einen eigenen Skript-Editor. 

Nachfolgende Abbildung illustriert diesen Editor am Beispiel eines Timer-Skripts.

Der Aufbau ist hierbei für die Skripte [Timer](/scripting/de-script-types.html), [Globale Funktion](/scripting/de-script-types.html), [Globale Events](/scripting/de-script-types.html),[Bei Bildschirmaktivierung](/scripting/de-script-types.html), [Bei Datenaktualisierung](/scripting/de-script-types.html) oder [Für Controls](/scripting/de-script-types.html) nahezu identisch.

![Image01](/assets/images/scripting/editor/Scripting01.png)

Oberhalb des Skript-Baums auf der rechten Seite (1) findet sich jeweils ein Button zum Aus- sowie einer zum Kommentieren.

Die Lupe symbolisiert als dritter Button die Suche bzw. die Suchen und Ersetzen-Funktion, welche auch über die Tastenkombination Strg+f aufgerufen werden kann.

Der Skript-Baum (2) enthält neben den Elementen des Explorers die Elemente Timer, Types, Runtime sowie einige der am häufigsten verwendeten Funktionen. Eine detaillierte Übersicht findet sich [hier](/scripting/de-script-tree.html).

Der Baum auf der linken Seite (3) ermöglicht es durch die verschiedenen Skripte zu navigieren, ohne den Editor dabei verlassen zu müssen. Eine detaillierte Übersicht der jeweiligen Skripte findet sich [hier](/scripting/de-script-types.html).

Im mittleren Bereich (4) erfolgt die Eingabe des Skriptes.

Mit Hilfe der Validierungsfunktion (5) kann das angelegte Skript auf seine Korrektheit geprüft werden.