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

As is well known, the Peakboard Box communicates with all possible upstream systems. In addition, communication channels are also required for the administration of the Peakboard Box. The following table shows the ports that are used for the individual channels. Of course, it always depends on the individual case which ports are used for the respective customer requirement.

### Mandatory ports
{% include styled_table.html %}
{: .w-full }
| 40404       | Communication channel between Peakboard Designer and Peakboard Box |
| 40405       | Communication channel between Peakboard Designer and Peakboard Box |

### Ports for specific data sources
{% include styled_table.html %}
{: .w-full }
| 32XX / 33XX | Port for SAP communication, XX is the system number of the SAP system. |
| 1433        |	Port for SQL Server |
| 80          |	Standard port for generic API queries of common Internet services |
| 102         |	Siemens S7 |
| 4840        |	Standard port for OPC UA |

### Ports for Peakboard Edge and Peakboard Hub
{% include styled_table.html %}
{: .w-full }
| 40406       |	Peakboard Edge |
| 40408       |	Communication channel for Peakboard Hub |
| 40409       |	Communication channel for Peakboard Hub |
