---
layout: article
title: Willkommensbildschirm
menu_title: Willkommensbildschirm
description: Plug&Play Lösung für einen Willkommensbildschirm
lang: de
ref: instant_boards-01
---

In dieser Plug & Play Lösung, welche [hier](https://github.com/Peakboard/CoolStuff/tree/master/Business/Welcome%20with%20APP) heruntergeladen werden kann, bietet eine Möglichkeit, einen Willkommensbildschirm ohne großen Aufwand zu implementieren.

Datengrundlage hierfür bildet eine variable Liste, welche vom Nutzer befüllt werden kann (1).
Für jeden Eintrag in der Liste wird mit Hilfe des [ListView-Controls](/controls/10-de-list-view.html) ein entsprechender Eintrag visualisiert(2).
Das Beispiel-Firmenlogo kann wie bekannt einfach ausgetauscht werden (3).
Das Datum (4) sowie die beiden Web-Widgets (5) für die analoge Uhr sowie die Wetteranzeige liefern zusätzliche Informationen.
Nachfolgender Screenshot illustriert die Kernelemente dieses Instant Boards.

![image_live](\assets\images\instant_boards\welcome\designer1.png)

Mit Hilfe eines Uhrzeitabgleichs werden diejenigen Einträge hervorgehoben, welche die eingestellte Bedingung erfüllen.
In diesem Beispiel zeigt ein stilisiertes Männchen an, ob jemand im gewählten Zeitraum zu Besuch ist.


Neue Einträge können hierbei auf folgende Arten erfolgen:

Nutzen der Peakboard Mobil App für iOS und Android, welche im Google oder Apple Store geladen werden kann. 
Weitere Informationen zu unserer App finden sich [hier](/instant_boards/02-de-app.html).

Zugriff über den Webbrowser. Weitere Informationen zur Eingabe von Variablen oder Listen über den Browser finden sich [hier](/instant_boards/03-de-web.html).

Nachfolgender Screenshot zeigt die Visualisierung mit drei Beispielsdatensätzen.
![image_live](\assets\images\instant_boards\welcome\live.png)