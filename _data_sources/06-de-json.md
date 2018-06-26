---
layout: article
title: JSON
menu_title: JSON
description: Information über JSON Daten in Peakboard
lang: de
ref: dat-06
---
Diese Seite erklärt die einzelnen Features beim Zugriff auf JSON-Datenquellen von Peakboard aus. Unter dem folgenden Link finden Sie ein Tutorial, wie generell externe Datenquellen konfiguriert und an Peakboard-Elemente gekoppelt werden:


[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)

Falls Sie keine URL zu einer JSon-Datenquelle zur Hand haben, sondern die Sache einfach nur einmal ausprobieren wollen, nehmen Sie bitte die folgende Beispiel-URL:



[http://mysafeinfo.com/api/data?list=presidents&format=json](http://mysafeinfo.com/api/data?list=presidents&format=json)


JSON ist ein hierarchisches Format. Da Peakboard-Datenquellen aber immer tabellarisch sind, muss unter Umständen ein Ausschnitt aus dem JSON-File gewählt werden. Es ist möglich, innerhalb der JSon-Quelle entweder auf ein Array zu verweisen oder ein komplexes Objekt. Im Fall eines Arrays hat die Zieltabelle in Peakboard beliebig viele, im Fall des Objekt genau eine Zeile mit allen Elementen des Objekts als Spalten. Um die JSon-Datenquelle zu konfigurieren, geben Sie ihr einen Namen und geben Sie die URL zur Quelle an (z.B. die URL von oben). Wenn Sie nur einen Teil des JSon-Inhalts nutzen wollen, formulieren Sie im JPath-Textfeld eine JPath-Anweisung, die auf das Start-Element zeigt. Eine leere JPath nimmt das Wurzelelement als Start. User- und Password-Felder müssen ausgefüllt werden, falls die Quelle eine Authentifizierung erfordert.

Um die Metadaten innerhalb von Peakboard bekannt zu machen, klicken Sie auf Load Columns. Die Tabelle mit den Zielspalten wird dann anhand der Angaben entsprechend gefüllt. Das Feld Max Items begrenzt die Anzahl der Zeilen auf einen bestimmten Wert. Reload Interval gibt die Anzahl der Sekunden an, nach der die Datenquelle aufgefrischt werden soll. Passen Sie diese Werte entsprechend an wie es zu Ihrem Anwendungsfall passt.

![JSON Add Data Dialojso](/assets/images/data-sources/json/json-add-data-dialog.png)

Ein Klick auf Preview zeigt die Rohdaten tabellarisch. Hier können die Angaben nochmal überprüft werden.

![JSON Preview Data](/assets/images/data-sources/json/json-preview-data.png)
