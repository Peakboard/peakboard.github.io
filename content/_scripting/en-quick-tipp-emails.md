---
layout: article
title: Quick tip - e-mail notification
menu_title: Quick tip - e-mail notification
description: Set up e-mail notifications for events
lang: en
weight: 800
ref: scr-800
redirect_from:
---

The following script example shows you how to send an automated e-mail when an event occurs.

```
if data.Machine1Error == true then
   mail.send('info@peakboard.com','Machine 1 has an error!','Please check this as soon as possible!!!')
end
```

or

```
if data.Machine1Error == true then
   mail.sendwithscreenshot('info@peakboard.com','Machine 1 has an error!','Please check the attached screenshot to find out what the error is.')
end
```

For the IF condition, a corresponding data source must be available.
As a refreshed event, you have to check in the data source if the condition is true.
Then you can send an email with a given text using mail.send('[mailTo]','[Subject]','[Body]') 
or with mail.sendwithscreenshot('[mailTo]','[Subject]','[Body]') to send an email with an additional screenshot of the visualization attached.

This short example can be freely and creatively adapted to your own needs.
For example, exceeding a defined threshold value can also act as a triggering condition.
Simply adjust the respective parameters according to your needs.