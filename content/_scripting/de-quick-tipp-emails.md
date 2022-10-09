---
layout: article
title: Quick Tipp - E-Mail Benachrichtigung
menu_title: Quick Tipp - E-Mail Benachrichtigung
description: E-Mail-Benachrichtigungen bei Ereignissen einrichten
lang: de
weight: 800
ref: scr-800
redirect_from:
---

Das folgende Skriptbeispiel zeigt dir, wie du beim Eintreten eines Ereignisses automatisiert eine E-Mail versenden kannst.

```
if data.Machine1Error == true then
   mail.send('info@peakboard.com','Maschine 1 hat eine Störung!','Bitte überprüfe das so schnell wie möglich!!!')
end
```

oder

```
if data.Machine1Error == true then
   mail.sendwithscreenshot('info@peakboard.com','Maschine 1 hat eine Störung!','Bitte prüfe den beigefügten Screenshot, um den Fehler zu finden.')
end
```

Für die IF Bedingung muss eine entsprechende Datenquelle vorhanden sein.
Als Refreshed Event musst du in der Datenquelle prüfen, ob die Bedingung zutrifft.
Dann kannst du per mail.send('[mailTo]','[Subject]','[Body]') eine E-Mail mit vorgegebenen Text versenden 
oder mit mail.sendwithscreenshot('[mailTo]','[Subject]','[Body]') eine E-Mail mit zusätzlich angehängtem Screenshot der Visualisierung versenden.

Dieses Kurzbeispiel kann frei und kreativ auf deine eigenen Bedürfnisse angepasst werden.
Als auslösende Bedingung kann beispielsweise auch das Überschreiten eines definierten Schwellenwerts fungieren.
Passe dazu einfach die jeweiligen Parameter nach deinen Bedürfnissen an.