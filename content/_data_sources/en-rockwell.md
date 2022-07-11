---
layout: article
title: Rockwell
menu_title: Rockwell
description: Connecting a Rockwell data source in the Peakboard Designer
lang: en
weight: 2575
ref: dat-2575
redirect_from:
hide_in_menu: true
---
Rockwell Automation (Allen-Bradley) is an American manufacturer of programmable logic controllers (PLCs).
Peakboard Designer supports all Rockwell PLCs that use the Ethernet/IP protocol developed by Rockwell.
Through the Rockwell data source, Peakboard boxes can communicate with Rockwell PLCs in both read and write modes.
You can find more information about Rockwell at [Rockwellautomation.com](https://rockwellautomation.custhelp.com/).

To connect the Rockwell data source, select the data source [Rockwell] under [Add data source] (1).

![Add Rockwell data source](/assets/images/data-sources/rockwell/de_rockwell-add.png)

In the following dialog you have to fill the fields in the section [Connection] (2) with the required data. Besides the IP address of the PLC you also have to specify its slot (mostly 0) and the PLC type.

In the area [Specify details] (3) you can enter the desired program.
To browse the available programs click on the magnifying glass next to the input field (4) to open the drop-down list.

In the Tag section you can manually enter the desired tags using the [+] button.
Alternatively, you can browse the available tags on the Rockwell PLC by clicking on the globe (5) and selecting them from the list (6).

![Configure Rockwell data source](/assets/images/data-sources/rockwell/de_rockwell-config-01.png)

To check the plausibility of the data, click on the [Load data] button (7) to generate a preview.

Then confirm the creation of the data source by clicking the [OK] button (8).

![Configure Rockwell data source](/assets/images/data-sources/rockwell/de_rockwell-config-02.png)