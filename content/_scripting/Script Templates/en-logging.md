---
layout: article
title: Writing to the Log File
menu_title: Writing to the Log File
description: Writing to the Log File
lang: en
weight: 164
ref: scr-164
redirect_from:
---

<div class="box-tip" markdown="1">
**Hint:**

In the preview or on Peakboard Boxes, the log overview can be accessed with `Ctrl + L`.
</div>

When developing new applications, it can sometimes be very helpful to write data to the log. The following code can be used for this:

![Log](/assets/images/scripting/Scripting_Beispiele/logging/en-script-log.png)

```Lua
    peakboard.log(data.Text)
```