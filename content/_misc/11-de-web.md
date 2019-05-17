---
layout: article
title: Daten Web-Push
menu_title: Daten Web-Push
description: Wie können Variablen und Listen mittels Web-Push gesetzt werden.
lang: de
weight: 1100
ref: misc-1100
---

Variablen und Listen können außerhalb des Designers und der Box über die Peakboard App oder Web Zugriff gesetzt bzw. verändert werden.
Hierbei werden, die für den Zugriff freigegebenen Variablen und Listen über die [Peakboard API](/misc/07-de-API.html) angesprochen.
Damit dies möglich ist, muss bei den gewünschten Elementen der Haken für den Push via API gesetzt werden.
Sollen diese Änderungen auch nach einem Neustart der Box oder der Visualisierung verfügbar sein, so muss zusätzlich der Haken für das Speichern auf der Box gesetzt werden.

![image1](/assets/images/instant_boards/web/img0.png)

Der Zugriff erfolgt beim Web-Push über die URL http://MeineBox:40404. 
Für den Login werden die mit der Box ausgelieferten Anmeldedaten benötigt.

Nachfolgender Screenshot illustriert den Startbildschirm nach einer erfolgreichen Anmeldung.
(1) zeigt dabei einen Screenshot der aktiven Visualisierung. Über die beiden Controlls kann der Screenshot manuell aktualisiert bzw. in einem neuen Fenster geöffnet werden.
(2) ermöglicht es die auf der Box gespeicherten Visualisierungen zu starten oder zu stoppen. Auch kann die entsprechende .pbmx-File heruntergeladen oder von der Box gelöscht werden.
(3) enthält die in der aktiven Visualisierung verfügbaren Variablen und Listen, welche für den Zugriff berechtigt sind. In diesem Fall die aus vorangegangen Screenshot bekannte Liste "Visitors".

![image1](/assets/images/instant_boards/web/img1.png)

Mit dem Update-Button können bei Variablen die aktuellen Einträge manuell abgefragt werden.
Über die Edit-Funktion können neue Einträge an den Variablen und Listen vorgenommen werden, bzw. alte gelöscht oder überschrieben werden.
Nachfolgender Screenshot zeigt den initialen Zustand an.
Über den + Button wird der Liste ein neuer Eintrag hinzugefügt.

![image1](/assets/images/instant_boards/web/img2.png)

Nachdem der neue Besucher eingetragen wurde, wird der Datensatz über Update an die Box übermittelt.
Der aktualisierte Screenshot zeigt, dass die Liste erfolgreich angepasst wurde.

![image1](/assets/images/instant_boards/web/img3.png)

