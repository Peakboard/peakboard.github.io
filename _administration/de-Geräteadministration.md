---
layout: article
title: Geräteadministration
menu_title: Geräteadministration
description: Geräteadministration des Peakboard-Designer
lang: de
ref: admin-02
---

Die Peakboard-Box nutzt Windows 10 IoT als Betriebssystem. Das ist eine abgespeckte Variante von Windows 10, die speziell für ein Einsatz auf kleinen Geräten oder IoT-Devices konzipiert ist.

Klassische Administrationsarbeiten können zum größten Teil über das Webinterface von Windows 10 IoT erledigt werden. Sie erreichen es über das Netzwerk mit einem normalen Browser unter der Adresse http://<MeinPeakboard>:8080. User-Name lautet initial Administrator das Passwort liegt der Verpackung der Peakboard-Box bei. Das Kennwort kann nicht zurück gesetzt werden und sollte daher unter keinen Umständen verloren gehen.

Typische Tätigkeiten in der Adminoberfläche sind:

* Ändern des Device-Namens / Admin-Kennworts
* Einrichten des WLANS
* Monitoren der Systemressourcen wie Speicher oder CPU-Auslastung

Das sind Standardaufgaben, die in dem Admin-Portal eigentlich selbsterklärend sind und deshalb hier nicht nochmal im Detail erläutert werden. Werfen Sie bitte bei weiterführenden Fragen auch einen Blick in die offizielle Doku unter [https://docs.microsoft.com/en-us/windows/iot-core/manage-your-device/DevicePortal](https://docs.microsoft.com/en-us/windows/iot-core/manage-your-device/DevicePortal). Der folgende Screenshot zeigt beispielhaft das Einrichten des WLAN:

![image_1](/assets/images/admin/install/MiscAdministration01.png)

Teile der Adminaufgaben (z.B. Devicename) können auch direkt vom Designer im Peakboard-Manager-Dialog erledigt werden. Erwähnenswert an dieser Stelle ist noch die Peakboard-Runtime-App. Wenn Sie im Device-Portal auf Apps Manager klicken, sehen Sie die aktuelle Version der Peakboard-Runtime-App. Das Updaten der Runtime auf eine neue Version sollte auch direkt im Peakboard-Manager im Designer erfolgen. Ein manuelles Updaten ist zwar möglich, sollte aber unter keinen Umständen ohne Rücksprache mit dem Support von Hand im Portal gemacht werden.

![image_1](/assets/images/admin/install/MiscAdministration02.png)
