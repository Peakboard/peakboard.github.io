---
layout: article
title: Funktionsbaustein für SAP Reports
menu_title: Funktionsbaustein für SAP Reports
description: Funktionsbaustein für SAP Reports
lang: de
weight: 1110
ref: dat-1110
redirect_from:
  - /data_sources/SAP/11-de-sap-reports.html
---

Für die Verwendung von SAP-Reports in Peakboard musst du einen kundeneigenen Funktionsbaustein im SAP-System installieren.
Falls du das nicht selber machen kannst, bitte Sie einen Kollegen aus deiner SAP-Basis-Abteilung, dir zu helfen. Lege zunächst eine Funktionsgruppe (z.B. mit dem Namen ZXTRACT) an, um den Baustein anzulegen. Lege dann einen neuen Funktionsbaustein an. Der Name sollte Z_XTRACT_IS_REMOTE_REPORT sein, kann bei Bedarf aber auch geändert werden. Definiere den Baustein in seinen Attributen als remotefähig und lege die Import-, Export- und Tabellenparameter so an, wie in den nachfolgenden Screenshots gezeigt.

![Function Builder Import](/assets/images/data-sources/sap/report-custom-function-01.png)

![Function Builder Export](/assets/images/data-sources/sap/report-custom-function-02.png)

![Function Builder Tables](/assets/images/data-sources/sap/report-custom-function-03.png)

Den Quellcode kopierst du per Strg+C und Strg+V aus dieser [Textdatei](https://peakboard.com/download/dokumente/Z_XTRACT_IS_REMOTE_REPORT.txt). in den Code-Editor (Reiter Source Code). Sichere den Baustein und aktiviere ihn. Nun ist er für die Benutzung bereit.
Im Code sind die einzelnen Schritte (Programmausführung, Spoolabruf, Job-Überwachung, usw.) entsprechend dokumentiert. So kannst du bei Interesse leicht herausfinden, wie der ABAP Code funktioniert.

## SAP Standard Datentyp TAB512

Anstatt den SAP Standard Datentyp TAB512 für den LIST_OUTPUT Tabellen-Parameter zu verwenden, kannst du einen eigenen Z-Datentyp erstellen. Das ist notwendig, sofern die Ausgabelänge einer Report-Zeile mehr als 512 Zeichen beträgt. Die maximal mögliche Länge beträgt 1023 Zeichen.

![TAB512](/assets/images/data-sources/sap/sap-reports-tab512.png)