---
layout: article
title: Fehlerbehandlung in Skripten
menu_title: Fehlerbehandlung in Skripten
description: Beschreibt, wie Fehler in Skripten gehandhabt werden können.
lang: de
weight: 171
ref: scr-171
redirect_from:
---

Die Fehlerbehandlung in Peakboard-Skripten erfolgt über den `Try catch`-Block, der im Skript-Editor unter `Errorhandling` zu finden ist. Ein `Try catch`-Block besteht aus mehreren Teilen: 
- dem `Try`-Teil, in dem der Code ausgeführt wird, und die Rückgabevariablen (Fehlermeldung, Fehlertyp und Fehlercode) definiert werden
- dem `Do`-Teil, in dem der Hauptcode ausgeführt wird
- dem `Else`-Teil, in dem der Fehler behandelt wird.

Der `Try catch`-Block wird wie folgt verwendet:

![Fehlerbehandlung in Peakboard Skript](/assets/images/scripting/Scripting_Beispiele/error-handling/en-script-try-catch.png)

Wenn die Fehlerbehandlung im Skript benötigt wird, wird diese wie folgt implementiert:

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