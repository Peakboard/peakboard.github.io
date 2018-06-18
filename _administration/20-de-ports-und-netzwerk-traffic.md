---
layout: article
title: Ports und Netzwerktraffic
menu_title: Ports und Netzwerktraffic
description: Ports und Netzwerktraffic
lang: de
ref: admin-20
---

Die Peakboard-Box kommuniziert bekannterweise ja mit allen möglichen Vorsystemen. Darüber hinaus werden auch Kommunikationskanäle zur Administration der Box benötigt. In der folgenden Tabelle sind die Ports zusammengetragen, die für die einzelnen Kanäle genutzt werden. Es kommt natürlich immer auf den Einzelfall an, welche Ports für die jeweilige Kundenanforderung genutzt werden.

| **Port**   | **Beschreibung** |
|-------------|-------------|
| 8080        | Device Portal von Windows 10 IoT Core (wird in der Regel nicht, oder nur in seltenen Fällen benötigt) |
| 40404       | Kommunikationskanal zwischen Peakboard- Designer und der Box (für Administrationszwecke, wird in Regel oft verwendet) |
| 32XX / 33XX | Port für SAP-Kommunikation, XX ist die Systemnummer des SAP-Systems (wenn verwendet)|
| 1433        |	Port für den SQL Server (wenn verwendet) |
| 80          |	Standardport für generische API-Abfragen gängiger Internetdienste |
| 102         |	Siemens S7 |
| 4840        |	Standardport für OPC UA |


