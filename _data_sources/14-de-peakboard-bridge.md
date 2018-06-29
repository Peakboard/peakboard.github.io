---
layout: datenquellen-article
title: Peakboard-Bridge für ODBC und Oracle
menu_title: Peakboard-Bridge für ODBC und Oracle
description: Peakboard-Bridge für ODBC und Oracle
lang: de
ref: dat-14
---
Eine der wichtigsten Konzepte von Peakboard ist, dass die Peakboard-Box als autark anzusehen ist und im Gegensatz zu anderen Visualisierungskonzepten ohne Server oder andere Middleware direkt mit allen verbundenen Vorsystemen kommuniziert. In bestimmten Fällen lässt sich das nicht ganz durchhalten. Im Fall von Oracle und allgemeinen ODBC-Zugriffen braucht Peakboard die so genannte Peakboard-Bridge. Das ist ein schlanker Windows-Service, der üblicherweise mit minimalem Ressourcen-Bedarf auf einem Server installiert wird. Die Peakboard-Box greift dann auf die Bridge zu und diese wiederum auf die Datenbank. Stand Frühjahr 2018 arbeiten wir hart daran, die Bridge als Notwendigkeit in der weiteren Entwicklung abzuschaffen. Bis es soweit ist, wird sie aber noch benötigt.

Details zur Installation der Bridge finden Sie [hier.](/administration/01-de-install.html)

Der folgende Screenshot zeigt die Bridge-Datenquelle. Bei der Adresse muss die URI des Bridge-Server eingegeben werden. Üblicherweise ist das in der Form `tcp://<MeinBridgeServer>:2501`. Der Port muss nur angegeben werden, wenn er vom Defaultwert 2501 abweicht.

In der Auswahlbox Data Source Type geben Sie an, ob der Zugriff direkt auf Oracle oder mit Hilfe eines beliebigen (non-Oracle-)ODBC-Treibers erfolgen soll (z.B. für MySQL, Informix, etc.). Der Connection-String muss entsprechend angepasst werden. Im Screenshot sehen Sie einen typischen Oracle-Connection-String. Falls Sie nicht genau wissen, wie der Connection-String gebildet wird, klicken Sie auf den kleinen Knopf mit den drei Punkten, um eine Eingabehilfe zu erhalten.

Die SQL-Anweisung können Sie beliebig so formulieren, dass sie vom Zielsystem verstanden wird. Führen Sie das Statement mit „Load“ aus, um die Metadaten (Spalten und deren Datentyp) abzurufen. Danach steht die Datenquelle wie üblich zur Verfügung.

![Bridge Data Dialog](/assets/images/data-sources/peakboard-bridge/data-source-bridge.png)
