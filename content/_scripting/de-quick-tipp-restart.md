---
layout: article
title: Quick Tipp - Geplanter Neustart
menu_title: Quick Tipp - Geplanter Neustart
description: Die Peakboard Box zu einer geplanten Uhrzeit neu starten
lang: de
weight: 850
ref: scr-850
redirect_from:
---

Damit du deine Peakboard Box automatisch zu bestimmten Uhrzeiten neu starten lassen kannst, musst du zunächst eine Zeit-Datenquelle über [Datenquelle hinzufügen] und anschließend [Zeit] (1) anlegen.

![Zeit-Datenquelle](/assets/images/scripting/quicktipps/de_restart_01.png)

Im nächsten Schritt fügst du ein Timer-Skript hinzu (2).

![Timer-Skript](/assets/images/scripting/quicktipps/de_restart_02.png)

Im sich öffnenden Skript-Editor wählst du jetzt bei Modus [OnSchedule] (3) aus und legst dann nach einem Klick auf den [Settings]-Button (4) fest, an welchen Wochentagen und zu welchen Uhrzeiten das Skript ausgeführt werden soll. In diesem Beispiel wird das Skript an Wochentagen täglich um 23 Uhr ausgeführt.

![Skript-Editor](/assets/images/scripting/quicktipps/de_restart_03.png)

Nach einem Klick auf [OK] fügst du nun noch die Funktion [Peakboard Box neu starten] (5) aus dem Bereich [Funktionen/Peakboard Box] hinzu.
Mit [Speichern & Schließen] (6) verlässt du den Skript-Editor und hast den geplanten Neustart erfolgreich eingerichtet.

![Skript-Editor](/assets/images/scripting/quicktipps/de_restart_04.png)

Dieses Kurzbeispiel kann frei und kreativ auf deine eigenen Bedürfnisse angepasst werden.
Passe dazu einfach die jeweiligen Parameter an.