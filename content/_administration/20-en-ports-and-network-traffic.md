---
layout: article
title: Ports and Network Traffic
menu_title: Ports and Network Traffic
description: Ports and Network Traffic
lang: en
weight: 2000
ref: admin-20
---

As is well known, the Peakboard Box communicates with all possible source systems. In addition, communication channels are required for the administration of the box. The following table lists the ports that are used for the individual channels. Of course, it always depends on the individual case which ports are used for the respective customer requirement.

| **Port** | **Description** |
|-------------|-------------|
| 8080 | Device Portal of Windows 10 IoT Core (usually not required, or only in rare cases) |
| 40404 | Communication channel between Peakboard Designer and the box (for administration purposes, is usually often used) |
32XX / 33XX | Port for SAP communication, XX is the system number of the SAP system (if used).
| 1433 | Port for SQL Server (if used) |
| 80 | Standard port for generic API queries of common Internet services |
| 102 | Siemens S7 |
| 4840 | Standard port for OPC UA |
