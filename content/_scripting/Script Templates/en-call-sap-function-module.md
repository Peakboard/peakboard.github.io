---
layout: article
title: Calling an SAP Function Module
menu_title: Calling an SAP Function Module
description: Describes how to call SAP function modules via script.
lang: en
weight: 170
ref: scr-170
redirect_from:
---

With Peakboard, you can directly call SAP function modules via script, enabling seamless integration and utilization of SAP data within Peakboard applications.

## Step 1: Create an SAP Data Source
<div class="box-tip" markdown="1">
**Hint:**

If a shared SAP connection already exists, this step can be skipped, and the existing connection can be used.
</div>

To establish a connection to SAP, first create an SAP data source in the Peakboard Designer. Enter the required SAP credentials, including the app server host, system number, client, username, and password.

![Create SAP Data Source](/assets/images/scripting/Scripting_Beispiele/sap/en-create-sap-datasource.png)

In the [XQL](https://help.peakboard.com/data_sources/SAP/de-xql.html) statement, define a function module, to complete the creation of the datasource as well as the corresponding shared connection. In this example, the following XQL statement is used:

```abap
EXECUTE FUNCTION 'Z_GET_LINES_BY_PLANT'
  EXPORTS
    I_WERKS = '1000'
  TABLES
    T_LINES INTO RESULTSET
```

Alternatively, a very simple module can be used here, such as:

```abap
SELECT TOP 10 * FROM MAKT;
```

## Step 2: Call the Function Module in a Script
After creating the data source and defining the function module, you can call it in a script. First, find the connection ID of the data source. This can be copied in the Designer by right-clicking the SAP data source and selecting `Copy Connection`.

![Find Data Source Connection ID](/assets/images/scripting/Scripting_Beispiele/sap/copy-connection-id.png)

Alternatively, in the Script Editor on the right side under `Functions` -> `Publish to external system`, you can select a shared SAP connection, which will automatically insert the appropriate ID.

## Step 3: Script to Execute the Function Module
Drag and drop a button onto the designer and double-click it to open. Then, add the following script to call the function module:

```lua
local success, result = trycatch(function()
	local con = connections.getfromid('LmkrZjRqMtBrFRA2hohxcfs6rwQ=')
	return con.execute([[
		EXECUTE FUNCTION 'Z_GET_LINES_BY_PLANT'
  			EXPORTS
    			I_WERKS = '1000'
  			TABLES
    			T_LINES INTO RESULTSET
	]])
end)

if success then
   peakboard.log('Number of items: ' .. result.count)
   peakboard.log('LINE column of first item: ' .. result[0].LINE)
   peakboard.log('TARGET column of first item: ' .. result[0].TARGET)
else
   peakboard.log(result.message)
   peakboard.log(result.type)
end
```

This script calls the function module `Z_GET_LINES_BY_PLANT` and outputs the number of returned rows as well as the values of the `LINE` and `TARGET` columns of the first row. The result of the function module is stored in the `result` variable, which contains an array of the returned rows.

To handle errors, the entire call is wrapped in a `trycatch` block. If an error occurs, `success` is set to `false` and the error message is stored in the `message` property of the `result` object. More information on error handling is available [here](https://help.peakboard.com/scripting/Script%20Templates/en-error-handling.html).