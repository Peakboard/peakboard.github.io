---
layout: article
title: Zeilenanzahl begrenzen
menu_title: Zeilenanzahl begrenzen
description: Zeilenanzahl begrenzen
lang: de
weight: 6000
ref: flow-6000
---
Es gibt drei unterschiedliche Schritte, um die Anzahl der Zeilen zu begrenzen:

* *Take Top* nimmt nur die ersten Zeilen in der aktuellen Sortierung der Tabelle
* *Take Last* nimmt nur die letzten Zeilen in der aktuellen Sortierung der Tabelle
* *Take Range* schneidet unter Angabe des Start- und End-Index einen Teil der Gesamtzeilen heraus

Achtung!! Wenn Sie beispielsweise aus einer Tabelle von Artikeln und Umsatzdaten die drei umsatzstärksten Artikel filtern wollen, müssen Sie VOR dem Zeilenbegrenzungsschritt die korrekte Sortierung anwenden. Ansonsten werden mit großer Wahrscheinlichkeit irgendwelche, aber wohl nicht die gewünschten drei Zeilen gezogen.


![Take Data](/assets/images/dataflows/dataflows-take01.png)

![Take Data](/assets/images/dataflows/dataflows-take02.png)

![Take Data](/assets/images/dataflows/dataflows-take03.png)

