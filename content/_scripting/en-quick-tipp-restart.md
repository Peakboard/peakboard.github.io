---
layout: article
title: Quick tip - scheduled restart
menu_title: Quick tip - scheduled restart
description: Restart the Peakboard Box at a scheduled time
lang: en
weight: 907
ref: scr-907
redirect_from:
---

In order to restart your Peakboard Box automatically at certain times, you first have to create a time data source via [Add data source] and then [Time] (1).

![Time datasource](/assets/images/scripting/quicktipps/en_restart_01.png)

In the next step you add a timer script (2).

![Timer script](/assets/images/scripting/quicktipps/en_restart_02.png)

In the script editor that opens, select [OnSchedule] (3) for the mode and then click on the [Settings] button (4) to specify on which days of the week and at which times the script should be executed. In this example the script will be executed daily on workdays at 11 pm.

![Script editor](/assets/images/scripting/quicktipps/en_restart_03.png)

After clicking [OK], add the function [Restart Peakboard Box] (5) from the [Functions/Peakboard Box] area.
With [Save & close] (6) you leave the script editor and have successfully set up the planned restart.

![Script editor](/assets/images/scripting/quicktipps/en_restart_04.png)

This short example can be freely and creatively adapted to your own needs.
Just adjust the respective parameters.