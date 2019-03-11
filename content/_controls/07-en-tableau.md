---
layout: article
title: Tableau
menu_title: Tableau
description: Information about Peakboard Designer Tableau Control.
lang: en
ref: con-07
---

You can use the Tableau View Control element to display tableau views on the Peakboard. The Tabelau View is located on a tableau server and is also rendered there. Peakboard serves as a display.

![image_1](/assets/images/Controls/Tableau/ControlsTableau01.png)

In order for Peakboard to gain access to the Tableau Server, you must set the IP address of Peakboard on the server as “Trusted”:

1. On the Tableau Server, start the Tableau console window as administrator. The console window can be found in **C: \Program Files\Tableau\Tableau Server\9.2\bin**

2. Execute the following commands:

```
tab admin stop
tabadmin set wgserver. trusted_hosts “<IP address of Peakboard >”
tabadmin config
tab admin start
```

More information can be found at: [http://onlinehelp.tableau.com/current/server/en-us/trusted_auth.htm](http://onlinehelp.tableau.com/current/server/en-us/trusted_auth.htm)
In the Tableau View Control, the following options must be filled in the properties window:

**Server:** IP address of the tableau server

**Username:** Name of the user on the tableau server

**Workbook:** Name of the tableau workbook containing the view.

**View:** The name of the view you want to display on the Peakboard


The following two pictures show an original tableau dashboard on the tableau server and the representation on a Peakboard panel.

![image_1](/assets/images/Controls/Tableau/ControlsTableau02.png)

![image_1](/assets/images/Controls/Tableau/ControlsTableau03.png)
