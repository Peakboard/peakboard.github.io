---
layout: article
title: Screen Switching
menu_title: Screen Switching
description: Screen Switching inside an Application
lang: de
weight: 120
ref: scr-120
redirect_from:
---
You  can switch between different screens  within  your  application. This is  particularly  useful  when  you  want  to  display  or  manipulate different data.
To  create  the switch, you  need a function  that  controls  the switch based on a button press.
When  creating  the  function, it is  important  to  create a new  parameter  of type "Number" under "Parameters."
Within  this  function, you  create an If-Else statement. Use your  created  parameter  as  the  condition and compare it to a number  that  represents  the  desired screen.


```lua
    if  ButtonNumber == 1 then
	    runtime.showscreen('Screen1')
    elseif  ButtonNumber == 2 then
        runtime.showscreen('Screen2')
	elseif  ButtonNumber == 3 then
        runtime.showscreen('Screen3')    
    end
```

![If_screenchange](/assets/images/scripting/Scripting_Beispiele/screenchanging/en_if_screenchange.png)

Finally, create a button  that  calls  the  switching  function. Pass the  number  of  the  desired screen as a parameter.

    Navigation(2)

![Button_screenchange](/assets/images/scripting/Scripting_Beispiele/screenchanging/en_button_screenchange.png)