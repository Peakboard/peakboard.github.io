---
layout: article
title: Error Handling in Scripts
menu_title: Error Handling in Scripts
description: Describes how to handle errors in scripts.
lang: en
weight: 171
ref: scr-171
redirect_from:
---

Error handling in Peakboard scripts is managed using the `Try catch` block, found under `Errorhandling` in the script editor. A `Try catch` block consists of several parts:
- the `Try` section, where the code is executed and the return variables (error message, error type, and error code) are defined
- the `Do` section where the main code is executed
- the `Else` section where the error is handled.

The `Try catch` block is used as follows:

![Error Handling in Peakboard Script](/assets/images/scripting/Scripting_Beispiele/error-handling/en-script-try-catch.png)

When error handling is needed in a script, it is implemented as follows:

```lua
local errmsg = ''
local errtype = ''
local errcode = ''

if trycatchfn(function()
      peakboard.log('Execution started')
   end,
   function(e)
      errmsg = e.message
      errtype = e.type
      errcode = e.code
   end)
 then
   peakboard.log('Execution successfully completed')
else
   peakboard.log('Execution failed: ' .. errmsg)
end
```