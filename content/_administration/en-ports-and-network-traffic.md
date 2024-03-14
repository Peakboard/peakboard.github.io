---
layout: article
title: Ports and Network Traffic
menu_title: Ports and Network Traffic
description: Ports and Network Traffic Overview
lang: en
weight: 2000
ref: admin-2000
redirect_from:
  - /administration/20-en-ports-and-network-traffic.html
---

The Peakboard Box communicates with various source systems.
In addition, communication channels are also required for the administration of the Peakboard Box.
The following table lists the ports that are used for the individual channels.
Which ports are used exactly, depends of course on the individual case.

### Mandatory ports

{% include styled_table.html %}
{: .w-full }
| 40404       | Communication channel between Peakboard Designer and Peakboard Box / Peakboard BYOD |
| 40405       | Communication channel between Peakboard Designer and Peakboard Box / Peakboard BYOD |

### Ports for specific data sources

{% include styled_table.html %}
{: .w-full }
| 32XX / 33XX | Port for SAP communication, XX is the system number of the SAP system. |
| 1433        |	Port for SQL server |
| 80          |	Standard port for generic API queries of common Internet services |
| 102         |	Siemens S7 |
| 4840        |	Standard port for OPC UA |

### Ports for Peakboard Hub on premise and Peakboard Hub online

{% include styled_table.html %}
{: .w-full }
| 40408       |	Communication channel for Peakboard Hub on premise |
| 40409       |	Communication channel for Peakboard Hub on premise |
| 5671 (TLS/SSL)       |	Communication channel for Peakboard Hub online via AMQP connection (Azure Service Bus) |

### Ports für Peakboard Edge

{% include styled_table.html %}
{: .w-full }
| 40404       |	Peakboard Edge management |
| 40406       |	Peakboard Edge data connection |

### Optional ports

{% include styled_table.html %}
{: .w-full }
| 5985–5986   |	PowerShell remote access |
