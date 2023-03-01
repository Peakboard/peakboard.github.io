---
layout: article
title: Quick Tipp - Visualisierung mit einem Presenter schalten
menu_title: Quick Tipp - Visualisierung mit einem Presenter schalten
description: Quick Tipp - Visualisierung mit einem Presenter schalten
lang: de
weight: 900
ref: scr-900
redirect_from:
  - /misc/08-de-presenter.html
  - /misc/de-presenter.html
---

In einigen Fällen, beispielsweise der Darstellung von Informationen am Shopfloor, reicht ein einzelnes Dashboard nicht aus.
Abhilfe hierfür schafft das Anlegen mehrerer Screens in einer Visualisierung.
Diese werden analog zu ihrer Anordnung automatisch durchlaufen. Unter Bildschirmdauer wird das Zeitintervall, beispielsweise 30 Sekunden für einen Wechsel des jeweiligen Screens angegeben.
Hierbei ist der Eintrag 0 gleichbedeutend einer unendlichen Anzeigedauer. Es erfolgt demnach kein automatischer Screenwechsel.

![Bildschirmdauer](/assets/images/misc/Presenter/screenduration.png)

Um ähnlich wie in einer Präsentation durch die angelegten Screens zu schalten, kann ein handelsüblicher Presenter verwendet werden. Der USB-Dongle wird dazu einfach in den USB-Slot der Peakboard Box gesteckt.
Anschließend wird mit Hilfe des Designers in der Visualisierung ein globales Event erstellt.

![Skript auswahl](/assets/images/misc/Presenter/img2.png)

Über Rechtsklick erscheint ein Menü mit verfügbaren Events. Hier wird das KeyPressed Event ausgewählt und anschließend ein Skript mit nachfolgendem Inhalt angelegt.

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
