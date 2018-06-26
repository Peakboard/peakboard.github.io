---
layout: article
title: Azure SQL
menu_title: Azure SQL
description: Information über Azure SQL Daten in Peakboard
lang: de
ref: dat-12
---

Diese Seite erklärt die einzelnen Features beim Zugriff auf eine Azure-SQL-Datenquelle von Peakboard aus. Unter dem folgenden Link finden Sie ein Tutorial, wie generell externe Datenquellen konfiguriert und an Peakboard-Elemente gekoppelt werden:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)

Die Azure-SQL-Datenquelle ist dazu da, um SQL-Server Instanzen mit Peakboard zu verbinden, die auf Azure laufen. Bitte beachten Sie: Von Peakboard aus werden die Anfragen auf die Datenbank nicht direkt gestellt, sondern über einen Service, der unter peakboard.io erreichbar ist. Weder die Nutzdaten noch die Zugangsdaten werden von dem peakboard.io-Service gespeichert. Die Kommunikation ist über die komplette Strecke hinweg verschlüsselt.

Die Azure-SQL-Quelle braucht einen eindeutigen Namen. Für den Zugang zur Datenbank müssen Sie den Server-Namen, Username und Passwort sowie den Namen der Datenbank eingeben. Alle Angaben sind im Azure-Portal abzurufen. Sie können dann entweder im entsprechenden Textfeld ein SQL-Kommando eingeben oder in der Combobox darüber eine Tabelle oder View auswählen (so wie hier im Beispiel). Wichtiger Hinweis: Am besten legen Sie für die Daten eine View an, die die Daten schon so aufbereitet und aggregiert, wie sie später angezeigt werden sollen. Das spart viel Nacharbeit bei der Gestaltung der Visualisierung.

![Add Azure SQL Data](/assets/images/data-sources/azure/add-azure-sql-data.png)

Ein Klick auf den Load Columns Button erzeugt die Metadaten und listet sie auf. Überprüfen Sie Ihre Angaben mit dem Aufruf des Previews.

![Azure SQL Settings](/assets/images/data-sources/azure/azure-sql-settings.png)

![Azure Preview](/assets/images/data-sources/azure/azure-preview.png)
