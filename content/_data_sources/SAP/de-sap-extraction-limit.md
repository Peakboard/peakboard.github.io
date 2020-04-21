---
layout: article
title: SAP Tabellen mit vielen Spalten auslesen
menu_title: SAP Tabellen mit vielen Spalten auslesen
description: SAP Tabellen mit vielen Spalten auslesen
lang: de
weight: 1140
ref: dat-1140
---

Hier finden Sie die Anleitung zur manuellen Installation des Funktionsbausteins Z_XTRACT_IS_TABLE.

### Schritt 1 – Baustein anlegen

Starten Sie die Transaktion SE37 und legen Sie einen neuen Baustein namens Z_XTRACT_IS_TABLE an. Sie können ihn in eine bestehende Funktionsgruppe ablegen oder eine neue Funktionsgruppe dafür anlegen. Dasselbe gilt für die Entwicklungsklasse.


Im Reiter Attribute stellen sie die Ausführungsart auf remote aufrufbar.

![Z-Custom-Function-01](/assets/images/data-sources/sap/Z-Custom-Function-01.png)

### Schritt 2 – Import-Parameter

Definieren Sie die Import-Parameter wie im folgenden Screenshot gezeigt.

![Z-Custom-Function-02](/assets/images/data-sources/sap/Z-Custom-Function-02.png)

### Schritt 3 – Tabellen-Parameter

Definieren Sie die Tabellenparameter wie im folgenden Screenshot gezeigt.

![Z-Custom-Function-03](/assets/images/data-sources/sap/Z-Custom-Function-03.png)

### Schritt 4 – Exceptions

Definieren Sie die Ausnahmen (Exceptions) wie im folgenden Screenshot gezeigt.

![Z-Custom-Function-04](/assets/images/data-sources/sap/Z-Custom-Function-04.png)

### Schritt 5 - Code

Den ABAP-Code finden Sie in der Datei Z_XTRACT_IS_TABLE.txt im Installationsverzeichnis. Sie können den Code einfach per Strg+C und Strg+V in den Quellcode-Editor übernehmen.

Speichern und Aktivieren Sie den Baustein.

Alternativ können Sie den Funktionsbaustein mit Hilfe des mitgelieferten Transportauftrags thtrans.zip installieren, den Sie im Unterordner ABAP des Installationsordners finden. 