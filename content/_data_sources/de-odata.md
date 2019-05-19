---
layout: article
title: OData
menu_title: OData
description: Information über OData in Peakboard
lang: de
weight: 700
ref: dat-700
redirect_from:
  - /data_sources/07-de-odata.html
---
Diese Seite erklärt die einzelnen Features beim Zugriff auf OData-Datenquellen von Peakboard aus. Unter dem folgenden Link finden Sie ein Tutorial, wie generell externe Datenquellen konfiguriert und an Peakboard-Elemente gekoppelt werden:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)

Falls Sie keine URL zu einer OData-Datenquelle zur Hand haben, sondern die Sache einfach nur einmal ausprobieren wollen, nehmen Sie bitte die folgende Beispiel-URL. Sie zeigt auf die AdventureWorks-Datenbank. Das ist eine Beispieldatenbank von Microsoft. Es sind verschiedene Entity Sets enthalten, z.B. ein Produktkatalog oder Verkaufszahlen.

[http://services.odata.org/AdventureWorksV3/AdventureWorks.svc](http://services.odata.org/AdventureWorksV3/AdventureWorks.svc)

OData ist ein standardisiertes Datenaustauschformat. Die Beispiel-URL verweist auf eine kleine Datenbank, deren Entity Sets Sie in die Combobox laden können, indem Sie auf Load klicken, nachdem Sie die URL eingeben haben. Für den Fall, dass die OData-Anfrage eine Authentifizierung erfordert, klicken Sie auf den kleinen Knopf mit den drei Punkten. Dann können User Name und Passwort eingegeben werden.


![Odata Data Dialog](/assets/images/data-sources/odata/odata-data-dialog.png)

Wenn Sie sich für ein gewünschtes Entity Set entschieden haben, werden automatisch die Spalten und deren Datentyp zur Info in der Tabelle darunter eingeblendet. Wie üblich kann das Zeitintervall angegeben werden, nach dessen Ablauf die Quelle aufgefrischt wird, sowie die maximale Anzahl an Zeilen, die abgerufen wird. Für den Fall, dass nicht alle Daten der Quelle abgerufen werden sollen, lässt sich im entsprechenden Textfeld ein OData-Filter hinterlegen. Falls Sie nicht genau wissen, wie ein OData-Filter funktioniert, finden Sie [hier](https://www.odata.org/getting-started/basic-tutorial/#queryData). eine gute Einführung.

![Odata Entity Properties](/assets/images/data-sources/odata/entity-properties.png)

Mit Hilfe des Preview-Buttons wird eine Testanfrage an den Server gesendet und die Daten entsprechend den Angaben aufbereitet.

![Odata Preview Dialog](/assets/images/data-sources/odata/odata-preview-dialog.png)
