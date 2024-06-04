---
layout: article
title: In externen Systemen veröffentlichen
menu_title: In externen Systemen veröffentlichen
description: Information über das Schreiben in externe Systeme
lang: de
weight: 121
ref: scr-121
redirect_from:
---

Peakboard bietet dir innerhalb der [Building Blocks](/scripting/de-building-blocks.html) die Möglichkeit, Daten ohne tiefere Programmierkenntnisse in externe Systeme zu schreiben. Voraussetzung dafür ist eine bestehende Verbindung zum gewünschten Ziel-System. Wie du die entsprechende Verbindung herstellst, kannst du [in den Artikeln zu den jeweiligen Datenquellen](/data_sources/) nachlesen. Die Umsetzung ist für alle Building Blocks vergleichbar.

### Übersicht über die vorgefertigten Building Blocks

* **E-Mail:** Eine E-Mail mit oder ohne Bildschirmfoto und mit Betreff und Inhalt über den Peakboard Server versenden
* **HTTP:** GET, POST, PUT, DELETE oder PATCH Anfragen per HTTP Request versenden
* **MQTT:** Eine Standard- oder Retain-Message mit Topic und Nachricht veröffentlichen
* **OPC UA:** Eine Variable setzen
* **Modbus:** Einen einzelnen Coil oder ein Register schreiben
* **Rockwell:** Einen Tag für ein bestimmtes Programm schreiben
* **Beckhoff TwinCAT 3:** Für ein bestimmtes Programm eine Variable lesen oder setzen
* **Externe Peakboard Boxen:** In geteilten Variablenlisten Werte setzen, Zeilen hinzufügen oder entfernen, in geteilten Variablen verschiedene Werte setzen und in geteilten Funktionen Remote Funktionen ausführen
* **Peakboard Hub:** Werte setzen, Zeilen und Listen hinzufügen, Zeilen löschen, Alarme senden, die Verbindung prüfen und Hub URL und Gruppenschlüssel festlegen
* **Peakboard Edge:** Ausgabeports festlegen oder einen Sound abspielen
* **Siemens S7:** Datenblöcke, Speicher, Eingänge oder Ausgänge setzen
* **SQL:** Mit Non-Querys Daten aktualisieren, einfügen oder löschen, Stored Procedures oder eine SQL-Abfrage ausführen

### Ausführung am Beispiel Peakboard Hub

Um in das entsprechende System schreiben zu können, muss eine passende Datenquelle verbunden sein. Im vorliegenden Beispiel wurde eine Peakboard Hub Liste [QualityDataHUB] (1) hinzugefügt. Diese enthält die Spalten [Day], [State] und [Line]. Um Daten in die Peakboard Hub Liste zu schreiben, wurde die Funktion [WriteToHub] (2) angelegt.

![Peakboard Hub Liste](/assets/images/scripting/publish/de_publish-01.png)

Die Funktion wird ausgeführt, wenn einer der interaktiven Buttons der Anwendung betätigt wird. Dann wird der entsprechende Status in die Liste geschrieben. Skripte, die Daten in einem externen System veröffentlichen, können je nach Anwendungsfall an vielen verschiedenen Stellen zum Einsatz kommen.

Beim Hinzufügen der Funktion gelangst du in den Skript-Editor. Dort kannst du den passenden Building Block zur Arbeitsfläche hinzufügen. Bei fast allen Building Blocks wählst du zuerst aus, welche der vorhandenen Verbindungen du nutzen möchtest (1).

![Building Block hinzufügen](/assets/images/scripting/publish/de_publish-02.png)

Dann gibst du die Werte, die in das externe System veröffentlicht werden sollen, entweder händisch oder über weitere Building Blocks ein.

![Building Block hinzufügen](/assets/images/scripting/publish/de_publish-03.png)

Damit ist die Funktion einsatzbereit und beim Betätigen der Buttons wird der entsprechende Status als neue Zeile in die Peakboard Hub Liste geschrieben.
