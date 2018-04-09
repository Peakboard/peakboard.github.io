---
layout: article
title: OData
menu_title: OData
description: Information über OData in Peakboard
lang: de
ref: dat-07
---
Diese Seite erklärt die einzelnen Features beim Zugriff auf OData-Datenquellen von Peakboard aus. Unter dem folgenden Link finden Sie ein Tutorial, wie generell externe Datenquellen konfiguriert und an Peakboard-Elemente gekoppelt werden:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle]()

Falls Sie keine URL zu einer OData-Datenquelle zur Hand haben, sondern die Sache einfach nur einmal ausprobieren wollen, nehmen Sie bitte die folgende Beispiel-URL. Sie zeigt auf die AdventureWorks-Datenbank. Das ist eine Beispieldatenbank von Microsoft. Es sind verschiedene Entity Sets enthalten, z.B. ein Produktkatalog oder Verkaufszahlen.

[http://services.odata.org/AdventureWorksV3/AdventureWorks.svc](http://services.odata.org/AdventureWorksV3/AdventureWorks.svc)

OData ist ein standardisiertes Datenaustauschformat. Die Beispiel-URL verweist auf eine kleine Datenbank, deren Entity Sets Sie in die Combobox laden können, indem Sie auf Load klicken, nachdem Sie die URL eingeben haben. Für den Fall, dass die OData-Anfrage eine Authentifizierung erfordert, klicken Sie auf den kleinen Knopf mit den drei Punkten. Dann können User Name und Passwort eingegeben werden.


![image_1](/assets/images/Data_Sources/OData/OData01.png)

Wenn Sie sich für ein gewünschtes Entity Set entschieden haben, werden automatisch die Spalten und deren Datentyp zur Info in der Tabelle darunter eingeblendet. Wie üblich kann das Zeitintervall angegeben werden, nach dessen Ablauf die Quelle aufgefrischt wird, sowie die maximale Anzahl an Zeilen, die abgerufen wird. Für den Fall, dass nicht alle Daten der Quelle abgerufen werden sollen, lässt sich im entsprechenden Textfeld ein OData-Filter hinterlegen. Falls Sie nicht genau wissen, wie ein OData-Filter funktioniert, finden Sie hier eine gute Einführung.



![image_1](/assets/images/Data_Sources/OData/OData02.png)

Mit Hilfe des Preview-Buttons wird eine Testanfrage an den Server gesendet und die Daten entsprechend den Angaben aufbereitet.

![image_1](/assets/images/Data_Sources/OData/OData03.png)
