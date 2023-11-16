---
layout: article
title: OData
menu_title: OData
description: Information über OData in Peakboard
lang: de
weight: 1700
ref: dat-1700
redirect_from:
  - /data_sources/07-de-odata.html
---

Diese Seite erklärt dir die einzelnen Features beim Zugriff auf OData-Datenquellen von Peakboard aus. Unter dem folgenden Link findest du ein Tutorial, wie du generell externe Datenquellen konfigurierst und an Peakboard-Elemente koppelst:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)

Füge eine neue OData Datenquelle hinzu über einen Rechtsklick auf [Daten], dann [Datenquelle hinzufügen] und [OData] (1).

![OData hinzufügen](/assets/images/data-sources/odata/de_odata-01.png)

Falls du keine URL zu einer OData-Datenquelle zur Hand hast, sondern die Sache einfach nur einmal ausprobieren willst, verwende bitte die folgende Beispiel-URL. Sie zeigt auf die AdventureWorks-Datenbank. Das ist eine Beispieldatenbank von Microsoft. Es sind verschiedene Entitätensets enthalten, z.B. ein Produktkatalog oder Verkaufszahlen.

[http://services.odata.org/AdventureWorksV3/AdventureWorks.svc](http://services.odata.org/AdventureWorksV3/AdventureWorks.svc)

![OData Dialog](/assets/images/data-sources/odata/de_odata-02.png)

OData ist ein standardisiertes Datenaustauschformat. Die Beispiel-URL verweist auf eine kleine Datenbank, deren Entitätensets du in die Combobox (1) laden kannst, indem du auf [Laden] (2) klickst, nachdem du die URL (3) eingeben hast. Für den Fall, dass die OData-Anfrage eine Authentifizierung erfordert, kannst du diese mit dem entsprechenden Drop-down (4) auswählen und eingeben. Gib der Datenquelle einen passenden Namen.

Wenn du dich für ein Entitätenset entschieden hast, werden automatisch die verfügbaren Entitätseigenschaften (5) zur Auswahl angezeigt. Für den Fall, dass du nicht alle Daten der Quelle abrufen möchtest, kannst du im entsprechenden Textfeld (6) einen OData-Filter hinterlegen. Falls du nicht genau weißt, wie ein OData-Filter funktioniert, findest du [auf odata.org](https://www.odata.org/getting-started/basic-tutorial/#queryData) eine gute Einführung.

Mit einem Klick auf [Daten laden] (7) wird eine Testanfrage an den Server gesendet und die Daten entsprechend den Angaben aufbereitet.

![OData Vorschau](/assets/images/data-sources/odata/de_odata-03.png)
