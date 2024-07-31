---
layout: article
title: Wisch-Gesten
menu_title: Wisch-Gesten
description: Beschreibt das Verwenden von Wisch-Gesten auf der Peakboard Box.
lang: de
weight: 167
ref: scr-167
redirect_from:
---

Die Erkennung und Nutzung von Wisch-Gesten auf der Peakboard Box eröffnet neue Möglichkeiten der Interaktion. Ein eigens angelegtes Event wird bei jeder Wisch-Geste ausgelöst, wobei ein hinterlegtes Skript die auszuführende Aktion definiert.

Wisch-Gesten können in alle Richtungen erkannt werden: `Left`, `Right`, `Up` und `Down`. Die Geste wird durch die Richtung definiert, in die der Finger bewegt wird.

## Event anlegen
Um ein Wisch-Gesten-Event anzulegen, füge im Package-Explorer unter Skripte ein neues globales Event hinzu. Öffne dazu per Rechtsklick ein Kontextmenü und wähle ein `Swipe up`, `Swipe down`, `Swipe left` oder `Swipe right`-Event aus.

![Swipe-Event anlegen](/assets/images/scripting/Scripting_Beispiele/swipe-events/en-add-swipe-event.png)

Nach dem Anlegen des Events kann das zugehörige Skript definiert werden, das bei einer Wisch-Geste ausgeführt wird.

## Anwendungsbeispiel für Wisch-Gesten
Ein praktisches Beispiel für die Nutzung von Wisch-Gesten ist die Navigation zwischen verschiedenen Screens. Durch Wischen kann nahtlos von einem Screen zum anderen gewechselt werden. Weitere Informationen zur Navigation zwischen Screens per Skript findest du [hier](https://help.peakboard.com/scripting/Script%20Templates/de_bildschirmwechsel.html).