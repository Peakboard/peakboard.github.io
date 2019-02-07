---
layout: article
title: Visualisierung mit einem Presenter schalten
menu_title: Visualisierung mit einem Presenter schalten
description: Visualisierung mit einem Presenter schalten
lang: de
ref: misc-08
---

In einigen Fällen, beispielsweise der Darstellung von Informationen am Shopfloor, reicht ein einzelnes Dashboard nicht aus. 
Abhilfe hierfür schafft das Anlegen mehrere Screens in einer Visualisierung.
Diese werden analog zu ihrer Anordnung automatisch durchlaufen. Unter Bildschirmdauer wird das Zeitintervall für einen Wechsel des jeweiligen Screens angegeben.
Hierbei ist der Eintrag 0 gleichbedeutend einer unendlichen Anzeigedauer. Es erfolgt demnach kein automatischer Screenwechsel.

![Bildschirmdauer](/assets/images/misc/presenter/screenduration.png)

Um ähnlich wie in einer Präsentation durch die angelegten Screens zu schalten, kann ein handelsüblicher Presenter verwendet werden. Der USB-Dongle wird dazu einfach in den USB-Slot der Peakboard-Box gesteckt.
Anschließend wird in der Visualisierung ein globales Skript mit nachfolgendem Inhalt angelegt. 

```
-- Change Screen with Presenter
-- Presenter Button Page Down
if vkeys.pagedown == e.key then
-- Show Previous Screen
	runtime.showpreviousscreen()
-- Presenter Button Page UP
elseif vkeys.pageup == e.key then
-- Show Next Screen
	runtime.shownextscreen()
end
```

Als Alternative zu einem Presenter kann auch Maus und/oder Tastatur verwendet werden.

Ein entsprechendes Beispiel findet sich ebenfalls in den Scripting Templates unter der Bezeichnung "Key Inputs".