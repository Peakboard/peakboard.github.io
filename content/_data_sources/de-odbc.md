---
layout: article
title: ODBC
menu_title: ODBC
description: Information über ODBC Datenquellen in Peakboard
lang: de
weight: 1400
ref: dat-1400
redirect_from:
---

Diese Seite erklärt die einzelnen Features beim Zugriff auf eine beliebige ODBC-Datenquelle. 
Unter dem folgenden Link finden Sie ein Tutorial, wie generell externe Datenquellen konfiguriert und an Peakboard-Elemente gekoppelt werden:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)

Bevor Sie die ODBC-Datenquelle verwenden, müssen Sie den ODBC-Treiber der gewünschten Datenbank sowohl auf Ihrem lokalen Rechner als auch auf der Peakboard-Box installieren. 
Für die Installtion auf der Box bietet es sich an, sich entweder mit einer USB-Maus und einer USB-Tastatur direkt an die Box zu setzen, so als ob man die Treiber-Software auf einem normalen Rechner installieren würde oder remote per Powershell.
Sollte der ODBC-Zugriff von sehr vielen Boxen aus erfolgen, macht es Sinn in Erwägung zu ziehen, lieber eine [Extension](https://help.peakboard.com/data_sources/Extension/de-Extension.html) für die gewünschte Datenbank zu entwickeln. 
Das kann im Einzelfall schneller gehen, als den ODBC-Treiber auf vielen Boxen auszurollen.

Um per ODBC Zugriff auf die Datenbank zu erlangen, muss der Connection String ausformuliert werden.
Dieser kann sehr unterschiedlich aussehen. 
Im Beispiel des Screenshots sind alle Zugangsdetails in einer lokalen DSN hinterlegt. 
Das macht den Connection String sehr einfach, erfordert aber, die DSN auch auf der Box zu pflegen.
Das SQL Statement muss entsprechend der Datenbank formuliert werden. 
Der Button **Load Data** zeigt Testdaten an und lädt die Spalten in die Tabelle. 
Ab jetzt kann die Datenquelle gegulär verwendet werden.

![odbc.png](/assets/images/data-sources/odbc/odbc.png)