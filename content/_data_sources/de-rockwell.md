---
layout: article
title: Rockwell
menu_title: Rockwell
description: Anbindung einer Rockwell Datenquelle im Peakboard Designer
lang: de
weight: 2575
ref: dat-2575
redirect_from:
---
Rockwell Automation (Allen-Bradley) ist ein amerikanischer Hersteller von speicherprogrammierbaren Steuerungen (SPSen).
Der Peakboard Designer unterstützt alle Rockwell SPSen, die das von Rockwell entwickelte Protokoll Ethernet/IP nutzen und mit tagbasierten Variablenzugriffen arbeiten.
Über die Rockwell Datenquelle können Peakboard Boxen sowohl lesend als auch schreibend mit den Rockwell SPSen kommunizieren.
Viele weitere Informationen zu Rockwell findest du unter [Rockwellautomation.com](https://rockwellautomation.custhelp.com/)

Um die Rockwell Datenquelle anzubinden, wählst du unter [Datenquelle hinzufügen] die Datenquelle [Rockwell] aus (1).

![Rockwell Datenquelle hinzufügen](/assets/images/data-sources/rockwell/de_rockwell-add.png)

Im folgenden Dialog füllst du die Felder im Bereich [Verbindung] (2) mit den benötigten Daten. Neben der IP-Adresse der SPS musst du auch deren Steckplatz (meistens 0) und den SPS Typ angeben.

Im Bereich [Details angeben] (3) kannst du das gewünschte Programm eingeben.
Zum Durchsuchen der verfügbaren Programme klickst du auf die Lupe neben dem Eingabefeld (4), um die Drop-down-Liste zu öffnen.

Im Bereich Tag gibst du dann manuell über den [+] Button die gewünschten Tags ein.
Alternativ kannst du die auf der Rockwell SPS verfügbaren Tags mit einem Klick auf die Weltkugel (5) durchsuchen und aus der Liste (6) auswählen.

![Rockwell Datenquelle konfigurieren](/assets/images/data-sources/rockwell/de_rockwell-config-01.png)

Zur Plausibilitätsprüfung der Daten klickst du auf den Button [Daten laden] (7), um eine Vorschau zu generieren.

Danach bestätigst du die Erstellung der Datenquelle mit einem Klick auf den Button [OK] (8).

![Rockwell Datenquelle konfigurieren](/assets/images/data-sources/rockwell/de_rockwell-config-02.png)