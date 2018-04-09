---
layout: article
title: Eigene Schriftarten verwenden
menu_title: Eigene Schriftarten verwenden
description: Eigene Schriftarten verwenden
lang: de
ref: misc-05
---
Peakboard unterstützt standardmäßig eine ganze Reihe von vorgefertigten Windows-Schriftarten; für Textboxen, Tabellen und überall, wo eben Text für die Visualisierung verwendet wird.

Für den Fall, dass die Standard-Schriftarten nicht ausreichen, lassen sich neue Schriften einem Paket hinzufügen. Sie benötigen dazu die Schrift als True-Type-Font-Datei mit der Endung .ttf. Die Datei muss unbedingt exakt dem logischen Namen der Schrift entsprechen, damit sie von Peakboard korrekt verarbeitet werden kann. Sie können den korrekten Namen herausfinden, wenn Sie im Explorer auf die Datei doppelklicken. Der Name wird dann oben angezeigt.

![image_1](/assets/images/misc/custom-fonts/miscfonts01.png)

Wenn die ttf-Datei dem Paket als Ressource hinzugefügt wurde, steht sie in der Font-Auswahl zur Verfügung und kann verwendet werden. Während des Deployment-Vorgangs wird die ttf-Datei mit dem Paket auf die Peakboard-Box transportiert. Es sind also keine weiteren Aktionen nötig.

![image_1](/assets/images/misc/custom-fonts/miscfonts02.png)

Links

Unter folgenden Links finden Sie eine Übersicht der Google Webfonts:

[https://fonts.google.com/](https://fonts.google.com/)

Die passenden ttf-Dateien können Sie hier herunterladen:

[https://github.com/google/fonts](https://github.com/google/fonts)

Die ttf-Dateien sind im Verzeichnis ofl.
