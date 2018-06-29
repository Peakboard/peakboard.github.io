---
layout: datenquellen-article
title: Webpage
menu_title: Webpage
description: Information über Webpage Daten in Peakboard
lang: de
ref: dat-09
---
Diese Seite erklärt die einzelnen Features beim Zugriff auf eine Tabelle, die auf einer Webseite enthalten ist. Unter dem folgenden Link finden Sie ein Tutorial, wie generell externe Datenquellen konfiguriert und an Peakboard-Elemente gekoppelt werden:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)

Falls Sie keine URL zu einer passenden Webseite zur Hand haben, sondern die Sache einfach nur einmal ausprobieren wollen, nehmen Sie bitte die folgende Beispiel-URL. Sie verweist auf eine Wikipedia-Seite mit mehreren Tabellen. Wir interessieren uns in diesem Artikel nur für die erste, große Tabelle mit dem ewigen Medaillenspiegel (Alle Medaillen pro Land kumuliert über alle olympischen Spiele hinweg). Die anderen, kleineren Tabellen – weiter unten auf der Seite – interessieren uns nicht. Sie sollen rausgefiltert werden.

[https://en.wikipedia.org/wiki/All-time_Olympic_Games_medal_table](https://en.wikipedia.org/wiki/All-time_Olympic_Games_medal_table)

Peakboard sucht in der jeweiligen Webseite nach HTML-Tabellen. Das funktioniert besonders gut, wenn das HTML syntaktisch korrekt ist. Sollten Sie sich an einer Webseite versuchen, bei der die Daten nicht korrekt gefunden werden oder unvollständig sind, prüfen Sie den HTML-Syntax.

In der entsprechenden Datenquellen-Maske muss natürlich wieder ein eindeutiger Name vergeben werden und das Wichtigste: Die URL. Ggfs. noch Username und Passwort für den Fall, dass die Webseite eine Authentifizierung verlangt. Alle Tabellen auf der Seite haben entweder einen Namen oder eine Nummer. Es gibt einen Selektionsdialog, der Ihnen hilft, die richtige Tabelle zu identifizieren, falls es auf der Seite mehrere Tabellen gibt. Klicken Sie dazu auf den kleinen Knopf mit den drei Punkten. Alle gefundenen Tabellen werden in der Combo-Box angezeigt. Sie können so ausprobieren, welche die richtige Tabelle ist. Für den Fall, dass die Tabelle keine HTML-Überschriften hat (<th>-Tag), stehen die Überschriften eventuell in der ersten Tabellenzeile. Falls das so ist, aktivieren Sie die die Checkbox. Dann berücksichtigt Peakboard das bei der Datenfindung. Mit OK werden die Angaben in die Hauptmaske übernommen.

![Select Table From Webpage](/assets/images/data-sources/webpage/select-table-from-webpage.png)

Wie üblich werden die Metadaten (Spalten und deren Datentyp) ebenfalls übernommen. Sie können noch die Zeit für das automatische Auffrischen der Datenquelle in Sekunden angeben und bei Bedarf die maximale Anzahl der Zeilen beschränken. Sollte sich die Quelle aus irgendeinem Grund ändern, kann mit Load Columns das Ermitteln der Metadaten von Hand nochmal gestartet werden. Die gepeicherten Metadaten werden dann gelöscht und neu ermittelt.

![Webpage Add Data Dialog](/assets/images/data-sources/webpage/webpage-add-data-dialog.png)

Ein Klick auf Preview öffnet das Datenfenster zur Kontrolle der Eingabe.

![Webpage Preview Data](/assets/images/data-sources/webpage/webpage-preview-data.png)
