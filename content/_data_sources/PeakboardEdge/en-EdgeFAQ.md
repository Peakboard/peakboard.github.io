---
layout: article
title: Problems with Peakboard Edge
menu_title: Problems with Peakboard Edge
description: Information about problems with Peakboard Edge
lang: en
weight: 2740
ref: dat-2740
redirect_from:
---

### Connection problems (PB Box ↔︎ PB Edge)
**Has the connection already worked and has it broken off without further ado?**  A restart of the PB Edege and the PB Box can help.

**Couldn't establish a connection between PB Box and PB Edge or restarting both devices didn't help?**  Check if both devices (PB Box and PB Edge) are connected to the same network. A network administrator can help best. If none is available, you can alternatively test if a connection between the Designer and the PB Box, and the Designer and PB Edge is possible. If this is not the case, the problem can be solved with the faulty connection.


### Connection problems (Connection tester / Preview ↔︎ PB Edge)
If the connection preview ↔︎ PB Edge fails, use the connection tester in the designer.

If the connection tester ↔︎ PB Edge fails:

* Note Edge ID

* Use the key combination "Win + R" to open the Windows "Run" dialog

* type "cmd" and press enter to open a command line window

* enter the command "ping <Edge ID>" in the command line, where <Edge ID> is preceded by the previously noted Edge ID

If the connection is possible (the ping is answered), please contact Peakboard Support. 

If the connection is not possible, the Peakboard Edge is either in another network or it is blocked by internal network rules. In the latter case, only a company IT administrator can help.