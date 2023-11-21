---
layout: article
title: Writing to an SAP function module
menu_title: Writing to an SAP function module
description: Writing to an SAP function module
lang: en
weight: 2450
ref: dat-2450
---

In SAP, any function module of the SAP system can be called via Peakboard. It is important that this function module is remote-enabled. With Peakboard, the function module (Z_Function_Module) can be called and export parameters can be transferred. These can then be processed further within the function module on the SAP side.

First, you create an SAP data source in the Peakboard Designer (YourSAPDatasource). This can be used both to display data from the SAP system and to write data back.

The export parameter can come from different data sources, for example, a variable created in the Peakboard (PeakboardVariable).

```lua
local con = data.YourSAPDatasource.getconnection()
-- Connect to SAP system
con.open()
-- Execute XtractQL statements 
local res = sap.execute(con, "EXECUTE FUNCTION 'Z_Function_Module' EXPORTS YourColumn = '" .. data.PeakboardVariable ... "'")
-- Disconnect from SAP system
con.close()
```

|YourSAPDatasource |= Name of the created SAP connection
|Z_Function_Module |= Function module that is configured for writing to SAP
|YourColumn |= Column of the function module into which the data is to be written|
|PeakboardVariable |= Variable created in the Peakboard, which contains the value to be written|
