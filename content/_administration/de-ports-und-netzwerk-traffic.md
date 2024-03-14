---
layout: article
title: Ports und Netzwerktraffic
menu_title: Ports und Netzwerktraffic
description: Übersicht über die verwendeten Ports und den Netzwerktraffic
lang: de
weight: 2000
ref: admin-2000
redirect_from:
  - /administration/20-de-ports-und-netzwerk-traffic.html
---

Die Peakboard Box kommuniziert mit den verschiedensten Vorsystemen.
Darüber hinaus werden auch Kommunikationskanäle zur Administration der Peakboard Box benötigt.
In der folgenden Tabelle sind die Ports zusammengetragen, die für die einzelnen Kanäle genutzt werden.
Welche Ports genau genutzt werden, hängt dabei natürlich vom Einzelfall ab.

### Zwingend erforderliche Ports

{% include styled_table.html %}
{: .w-full }
| 40404       | Kommunikationskanal zwischen Peakboard Designer und Peakboard Box / Peakboard BYOD |
| 40405       | Kommunikationskanal zwischen Peakboard Designer und Peakboard Box / Peakboard BYOD |

### Ports für bestimmte Datenquellen

{% include styled_table.html %}
{: .w-full }
| 32XX / 33XX | Port für SAP-Kommunikation, XX ist die Systemnummer des SAP-Systems |
| 1433        |	Port für den SQL Server |
| 80          |	Standardport für generische API-Abfragen gängiger Internetdienste |
| 102         |	Siemens S7 |
| 4840        |	Standardport für OPC UA |

### Ports für Peakboard Hub on premise und Peakboard Hub online

{% include styled_table.html %}
{: .w-full }
| 40408       |	Kommunikationskanal für Peakboard Hub on premise |
| 40409       |	Kommunikationskanal für Peakboard Hub on premise |
| 5671 (TLS/SSL)       |	Kommunikationskanal für Peakboard Hub online per AMQP Verbindung (Azure Service Bus) |

### Ports für Peakboard Edge

{% include styled_table.html %}
{: .w-full }
| 40404       |	Peakboard Edge Management |
| 40406       |	Peakboard Edge Datenverbindung |

### Optionale Ports

{% include styled_table.html %}
{: .w-full }
| 5985–5986   |	PowerShell Remote Zugriff |