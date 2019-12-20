---
layout: article
title: Webpage
menu_title: Webpage
description: Information über Peakboard Designer Webpage Control.
lang: de
weight: 810
ref: con-810
redirect_from:
  - /controls/08-de-webpage.html
---

Das Webpage-Control hat die einfache Aufgabe, Webseiten anzuzeigen. Es ist praktisch ein frei positionierbarer Browser. Die wichtigste Eigenschaft ist Source. Sie enthält die anzuzeigende URL beginnend mit http oder https. Neben der reinen Seite werden alle anderen enthaltenen Elemente wie CSS-Dateien, Bilder usw. entsprechend nachgeladen. Die Eigenschaft Refresh Time ist die Zeitspanne in Sekunden nach der das Control die Seite auffrischt. Es sei an dieser Stelle erwähnt, dass für das Rendern der Seite die Rendering-Engine von Microsoft Edge verwendet wird, also dem Browser, der mit Windows 10 eingeführt wurde. Je nach Komplexität der Seite muss das beim Design des HTML-Codes beachtet werden.

![Webpage In Peakboard Designer](/assets/images/Controls/Webpage/Screenshot-3.png)

Der folgende Screenshot führt das Panel von oben aus und zeigt wenig überraschend die gewünschte Webseite.

![Webpage on Peakboard](/assets/images/Controls/Webpage/Screenshot-2.png)

Peakboard unterstützt außerdem eine Vielzahl von Webseiten die einen Login benötigen. Dafür befüllen sie im WebBrowser Control die Felder User Name und Password mit Ihren Login Daten. Außerdem müssen Sie die ID’s des Login- und Passwortfeldes sowie die ID des Loginbuttons angeben. Diese finden Sie im Quellcode der Webseite. In aktuellen Versionen von Google Chrome, Internet Explorer, Edge und Firefox können Sie auf die Elemente mit der rechten Maustaste klicken und anschließend Element untersuchen bzw. bei Safari Element Informationen anklicken. Hier sollte sich das Attribut ID befinden, deren Werte Sie im WebPage-Control eingeben müssen.

![Developer Tools Chrome ](/assets/images/Controls/Webpage/WebView2.png)
