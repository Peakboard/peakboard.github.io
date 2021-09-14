---
layout: article
title: Ports und Netzwerktraffic
menu_title: Ports und Netzwerktraffic
description: Ports und Netzwerktraffic
lang: de
weight: 2000
ref: admin-2000
redirect_from:
  - /administration/20-de-ports-und-netzwerk-traffic.html
---

Die Peakboard Box kommuniziert bekannterweise ja mit allen möglichen Vorsystemen. Darüber hinaus werden auch Kommunikationskanäle zur Administration der Box benötigt. In der folgenden Tabelle sind die Ports zusammengetragen, die für die einzelnen Kanäle genutzt werden. Es kommt natürlich immer auf den Einzelfall an, welche Ports für die jeweilige Kundenanforderung genutzt werden.

### Zwingend erforderliche Ports:

{% include styled_table.html %}
{: .w-full }
| 40404       | Kommunikationskanal zwischen Peakboard Designer und Peakboard Box |
| 40405       | Kommunikationskanal zwischen Peakboard Designer und Peakboard Box |

### Ports für bestimmte Datenquellen:

{% include styled_table.html %}
{: .w-full }
| 32XX / 33XX | Port für SAP-Kommunikation, XX ist die Systemnummer des SAP-Systems |
| 1433        |	Port für den SQL Server |
| 80          |	Standardport für generische API-Abfragen gängiger Internetdienste |
| 102         |	Siemens S7 |
| 4840        |	Standardport für OPC UA |

### Ports für Peakboard Edge und Peakboard Hub:

{% include styled_table.html %}
{: .w-full }
| 40406       |	Peakboard Edge |
| 40408       |	Kommunikationskanal für Peakboard Hub |
| 40409       |	Kommunikationskanal für Peakboard Hub |