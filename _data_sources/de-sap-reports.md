---
layout: article
title: Funktionsbaustein für SAP Reports installieren
menu_title: Funktionsbaustein für SAP Reports installieren
description: Funktionsbaustein für SAP Reports installieren
lang: de
ref: dat-011
---

Für die Verwendung von SAP-Reports in Peakboard ist es notwendig einen kundeneigenen Funktionsbaustein im SAP-System zu installieren.
Falls Sie dies nicht selber machen können, bitten Sie einen Kollegen aus Ihrer SAP-Basis-Abteilung, Ihnen zu helfen. Legen Sie zunächst eine Funktionsgruppe (z.B. mit dem Namen ZXTRACT) an, um den Baustein anzulegen. Legen Sie dann einen neuen Funktionsbaustein an. Der Name sollte Z_XTRACT_IS_REMOTE_REPORT sein, kann bei Bedarf aber auch geändert werden. Definieren Sie den Baustein in seinen Attributen als remotefähig und legen Sie die Import-, Export- und Tabellenparameter so an, wie in den nachfolgenden Screenshots gezeigt.

![image_1](/assets/images/Data_Sources/SAP/Report-CustomFunction-01.png)

![image_1](/assets/images/Data_Sources/SAP/Report-CustomFunction-02.png)

![image_1](/assets/images/Data_Sources/SAP/Report-CustomFunction-03.png)

Den Quellcode kopieren Sie bitte per Strg+C und Strg+V aus dieser [Textdatei](https://peakboard.com/download/dokumente/Z_XTRACT_IS_REMOTE_REPORT.txt). in den Code-Editor (Reiter Source Code). Sichern Sie den Baustein und aktivieren Sie ihn. Nun ist er für die Benutzung bereit.
Im Code sind die einzelnen Schritte (Programmausführung, Spoolabruf, Job-Überwachung usw…) entsprechend dokumentiert. So kann der geneigte Leser leicht herausfinden, wie der ABAP Code funktioniert.
