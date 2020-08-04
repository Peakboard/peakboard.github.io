---
layout: article
title: Peakboard API
menu_title: Peakboard API
description: Peakboard API
lang: en
weight: 700
ref: misc-700
redirect_from:
  - /misc/07-en-API.html
---

There are a number of use cases where it may be necessary to send information from outside to a Peakbard box. 
Depending on the Use Case, the information is not requested from the box by the source system as with data sources, but is actively pushed from the external system to the box. 
A second Use Case could be that the external system wants to request data from the box, for example, a variable that counts a process or similar.
Both processes, i.e. reading and writing data, can be easily represented with the JSon-based REST-API.
The basis are scalar [variables or lists](https://help.peakboard.com/scripting/en-variables.html), where the attribute **Can Push Data via API** is set.
In general the calls are password protected. 
So the caller has to authenticate himself with his classic Base64-encoded credentials.

## Read data

The call to read data is as follows:

http://NameOfBox:40404/api/runtime/data?name=NameOfDataArtefact

The call must be made as http-Get command. Here is an example of a scalar variable:
```
{
  "ScalarData": [
    {
      "Name": "MyString",
      "Value": "My String"
    }
  ],
  "ListData": []
}
```

For a list, the columns of the table and the benefits are given in a corresponding JSon representation. The following example shows a table with three columns and the first two rows:

```
{
  "ScalarData": [],
  "ListData": [
    {
      "Name": "MyList",
      "Columns": [
        {
          "Name": "Name",
          "ElementName": "Name",
          "Type": "String"
        },
        {
          "Name": "Revenue."
          "ElementName": "Revenue",
          "Type": "Number"
        },
        {
          "Name": "Paid",
          "ElementName": "Paid",
          "Type": "Boolean"
        }
      ],
      "Items": [
        [
          {
            "Column": "Name."
            "Value": "Mark"
          },
          {
            "Column": "Revenue",
            "Value": 123.15
          },
          {
            "Column": "Paid",
            "Value": false
          }
        ],
        [
          {
            "Column": "Name."
            "Value": "Paul"
          },
          {
            "Column": "Revenue",
            "Value": 56.56
		  }
	}
}
```

## Write data

To write data, an http post command is sent under the same URL without specifying the data element name in the URL. The data element is defined via the JSon content and is similar to the Get-Repsonse from the read operation. To set the value of a variable zo an additional operation code (OpCode) must be specified. It defines the action to be executed with respect to the variable. In this case "Set".

```
{
	"ListInstructions": [],
	"ScalarInstructions":
	[
		{
			"DataSourceName": "MyString",
			"OpCode": "Set",
			"Data": "My little white rabbit"
		}
	]
}
```

[api-01.png](/assets/images/misc/api/)

In addition to setting variables, there are also the following operation codes:

* **Add**, multiplies the existing value
* **Subtract**, subtracts the existing value
* **Multiply**, multiply the existing value
* **Divide**, divides the existing value
**Power**, pose the existing value
**Append**, add a string at the end

The description of lists is shown in the following example. 
Note that a line number is only necessary in certain cases, depending on the operation.

```
{
	"ListInstructions":
	[
		{
			"DataSourceName": "MyList",
			"OpCode": "Append."
			"LineNumber": 65535,
			"Data": {
				
				"Name": "Katrin",
				"Revenue": 100,
				"Paid": false,
			}
		},
	],
	"ScalarInstructions": []
}
```

The following operations are possible to manipulate a table object:

* **Append** appends the line to the end of the table
* **Remove** deletes the line at the specified **LineNumber**
* **Insert** inserts the line at the position indicated by **LineNumber**.
* **Set** replaces the complete table with the sent data
* **Clear** empty the complete table