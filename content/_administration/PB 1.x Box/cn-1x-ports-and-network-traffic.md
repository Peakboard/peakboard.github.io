---
layout: article
title: 端口和网络流量
menu_title: 端口和网络流量
description: 端口和网络流量
lang: cn
weight: 2000
ref: pb1-admin-2000
redirect_from:
  - /administration/20-cn-ports-and-network-traffic.html
---


众所周知，Peakboard Box与所有可能的源系统进行通信。此外，Box的管理需要通信渠道。下表列出了用于各个渠道的端口。当然，这也取决于个别情况，哪些端口用于相应的客户要求。

| **端口** | **描述** |
|-------------|-------------|
| 8080 | Windows 10 IoT Core的Device Portal（通常不需要，仅在极少数情况下需要） |
| 40404 | Peakboard Designer和Box之间的通信渠道（通常用于管理目的） |
| 40405 | Peakboard Designer和Box之间的通信渠道（通常用于管理目的） |
32XX / 33XX | SAP通信端口，XX是SAP系统的系统编号（如果使用） |
| 1433 | SQL Server的端口（如果使用） |
| 80 | 用于常见Internet服务的通用API查询的标准端口 |
| 102 | 西门子S7 |
| 4840 | OPC UA的标准端口 |
