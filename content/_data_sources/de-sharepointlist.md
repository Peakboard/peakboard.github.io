---
layout: article
title: Sharepoint-Liste
menu_title: Sharepoint-Liste
description: Information über die Sharepoint-Listen Datenquelle in Peakboard
lang: de
weight: 1650
ref: dat-1650
redirect_from:
---

Diese Seite erklärt die einzelnen Features beim Zugriff auf eine Sharepoint-Liste. 
Unter dem folgenden Link finden Sie ein Tutorial, wie generell externe Datenquellen konfiguriert und an Peakboard-Elemente gekoppelt werden:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)

Die Sharepoint-Datenquelle lässt sich sowohl mit Listen aus On-Premise als auch mit Cloud-Installationen wie Office 365 koppeln. 
Geben Sie unter **Sharepoint Site** die Site-URL ein und unter **List** den technischen Namen der Liste.
**EMail** und **Password** sind die üblichen Zugangsdaten. 
Bei **Sharepoint Installation** braucht Peakboard noch einen Hinweis, ob es sich um eine On-Premise oder Online-Installation handelt.
**Load Data** zeigt Preview-Daten und ermittelt die Metadaten für die Spalten. 
Bitte beachten Sie, dass neben den reinen Nutzdaten auch etliche Metadaspalten mit übermittelt werden, z.B. das Datum des letzten Zugriffs, der Name des Erstellers und viele mehr. 
Je nach Anwendungsfall können diese zusatzspalten nützlich sein.
Wenn die Metadaten ermittelt sind, steht die Datenquelle zur Nutzung zur Verfügung.

![Sharepoint-Liste](/assets/images/data-sources/sharepointlist/sharepoint.png)

