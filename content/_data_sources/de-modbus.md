---
layout: article
title: Modbus
menu_title: Modbus
description: Anbindung einer Modbus Datenquelle im Peakboard Designer
lang: de
weight: 2450
ref: dat-2450
redirect_from:
hide_in_menu: true
---
Bei Modbus handelt es sich um ein offenes Kommuniktationsprotokoll.
Mit Modbus können ein Client wie zum Beispiel Peakboard und mehrere Server verbunden werden.
Der Peakboard Designer nutzt zur Datenübertragung die Betriebsart Modbus/TCP.
Viele weitere Informationen zu Modbus findest du unter [Modbus.org](https://modbus.org)

Um die Modbus Datenquelle anzubinden, wählst du unter [Datenquelle hinzufügen] die Datenquelle [Modbus] aus. (1)

![Modbus Datenquelle hinzufügen](/assets/images/data-sources/modbus/de_modbus-add.png)

Im folgenden Dialog füllst du die Felder im Bereich [Verbindung] mit den entsprechenden Serverdaten (Slave). (2)

Im Bereich [Details angeben] (3) kannst du zwischen vier verschiedenen Lesearten auswählen:
* Spulen lesen
* Einzelne Eingaben lesen
* Halteregister lesen
* Eingaberegister lesen

Hier wählst du auch die Start-Adresse sowie Anzahl der Datenpunkte aus die gelesen werden sollen.
Zur Plausibilitätsprüfung der Daten klickst du auf den Button [Daten Laden], um eine Vorschau zu generieren. (4)

![Modbus Datenquelle konfigurieren](/assets/images/data-sources/modbus/de_modbus-config-01.png)

Danach bestätigst du die Erstellung der Datenquelle mit einem Klick auf den Button [OK]. (5)

![Modbus Datenquelle konfigurieren](/assets/images/data-sources/modbus/de_modbus-config-02.png)