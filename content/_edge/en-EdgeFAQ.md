---
layout: article
product: edge
title: Problems with Peakboard Edge
menu_title: Problems with Peakboard Edge
description: Information about problems with Peakboard Edge
lang: en
weight: 2740
ref: dat-2740
redirect_from:
  - /data_sources/PeakboardEdge/en-EdgeFAQ.html
---

### Connection problems (Peakboard Box ↔︎ Peakboard Edge)

#### Has the connection already worked and has it broken off without further ado?

A restart of the Peakboard Edge and the Peakboard Box can help.

#### Couldn't establish a connection between the Peakboard Box and the Peakboard Edge or restarting both devices didn't help?

Check if both devices (Peakboard Box and Peakboard Edge) are connected to the same network. A network administrator can help you the best. If none is available, you can alternatively test if a connection between the Peakboard Designer and the Peakboard Box, and the Peakboard Designer and Peakboard Edge is possible. If this is not the case, the problem can be solved with the faulty connection.

### Connection problems (Connection tester / Preview ↔︎ Peakboard Edge)

If the connection preview ↔︎ Peakboard Edge fails, use the connection tester in the Peakboard Designer.

If the connection tester ↔︎ Peakboard Edge fails:

* Note the Peakboard Edge ID
* Use the key combination [Win + R] to open the Windows [Run] dialog
* Type [cmd] and press enter to open a command line window
* Enter the command [ping <Edge ID>] in the command line, where <Edge ID> is preceded by the previously noted Peakboard Edge ID
If the connection is possible (the ping is answered), please contact Peakboard Support.

If the connection is not possible, the Peakboard Edge is either in another network or it is blocked by internal network rules. In the latter case, only a company IT administrator can help you.
