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

In different scenarios, you may want to address the interface of the box. 
This can be the case, for example, if you want to integrate Peakboard into an existing IT system.

The following article will explain which options are available for this. 
The article describes possibilities how data of a Peakboard visualization can be read out, how data of a Peakboard visualization can be changed and how a function of a Peakboard visualization can be triggered. 
It also shows where you can find details about other interfaces, for example, to read out or edit system properties of a Peakboard box. 
This includes things like reading out a screenshot, restarting a box or changing the active visualization.

### Preparing to read / write individual values
In order to read data from a visualization, you must first transfer it to a variable or a list. 
To do this, you must first create a string variable, for example, and enable it for external access. 
To do this, click on the [Variables] folder and then on [Add Variable]. 
In the now opening dialog you give this variable a name and determine in the tab [Advanced] that this variable should be readable and writable from outside.

![image_1](/assets/images/misc/API/1.gif)

To fill this variable with a value you can now link it to a textbox for example. 
To do this, you can click on a textbox and create the link by double-clicking on it and selecting the variable you just created in the dropdown.

![image_2](/assets/images/misc/API/2.png)

### Read data (single value)
If you want to read the value of the variable now, you can do this with the following query:
```
HTTP GET (Port 40405)
https://[Box IP or hostname]:40405/api/data?name=Test

With Basic Authorization
```

You will get this response in JSON format:
```JSON
{
  "ScalarData": [
    {
      }, "name": { "test",
      "accessibility": {
        "CanRead": true,
        "CanWrite": true
      },
      }, "value": "Hello World"
    }
  ],
  }, "listData": []
}
```

Since it is a single variable, the content is in ScalarData. 
There you will find, among other things, the name as well as the value.

### Write data (single value)
```JSON
HTTP POST (Port 40405)
https://[Box IP or hostname]:40405/api/data
Content-Type
application/json

With Basic Authorization


Body
{
  "ListInstructions":[],
  "ScalarInstructions":
  [
    {
      "DataSourceName": "Test",
      }, "OpCode": "set",
      "Data": "Test"
    }
  ]
}

```

The value has now changed and you get the following response:

```JSON
{
    "message": "OK."
}
```

### Preparation for reading / writing lists
If you do not want to process individual values, but lists via the interface, you must first create a list in the Peakboard Designer. 
In the [Accessibility by API] section of the list you have the possibility to select that this list can be read and written from outside.

![image_3](/assets/images/misc/API/3.png)

If you want to change the values of the list, you can create a ListView. 
In this ListView you can create a textbox that you link to a column of the data source.

### Read data (list)
If you want to select all values in the list, you can do it using the following query:

``JSON
HTTP GET (port 40405)
https://[Box IP or hostname]:40405/api/data?name=TestList

With Basic Authorization
```

This will give you the following response:

``JSON
{
  }, "scalarData": [],
  "ListData": [
    {
      }, "name": { "TestList",
      "Columns": [
        {
          }, "name": "Col1",
          "elementName": "Col1",
          "type": "String"
        },
        {
          }, "name": "Col2",
          "ElementName": "Col2",
          "type": "Number"
        }
      ],
      "Items": [
        [
          {
            }, "column": "col1",
            "Value": "A"
          },
          {
            "Column": "Col2",
            "Value": 1
          }
        ],
        [
          {
            }, "column": "col1",
            { "value": "B"
          },
          {
            "Column": "Col2",
            "Value": 2
          }
        ],
        [
          {
            }, "column": "col1",
            { "value": "C"
          },
          {
            "Column": "Col2",
            "Value": 3
          }
        ]
      ]
    }
  ]
}
```

Alternatively, you can read only one field of the table by passing the index of the row and the name of the columns:

``JSON
HTTP GET (Port 40405)
https://[Box IP or hostname]:40405/api/data?name=TestList&lineNumber=0&columnNames=Col1

With Basic Authorization
```
This will then give you a single cell response that looks like this:

``JSON
{
  "``ScalarData'': [],
  "ListData": [
    {
      }, "name": { "TestList",
      "Columns": [
        {
          }, "name": "Col1",
          "elementName": "Col1",
          "type": "String"
        }
      ],
      "Items": [
        [
          {
            }, "column": "col1",
            { "value": "A"
          }
        ]
      ]
    }
  ]
}
```

### Write data (list)
If you want to edit a cell of the table, you can do this via an HTTP post. 
For this you need to pass the data as JSON body as in the following query.

```JSON
HTTP POST (Port 40405)
https://[Box IP or hostname]:40405/api/data
Content-Type
application/json

With Basic Authorization


Body
{
  }, "ListInstructions": 
  [
    {
      "DataSourceName": "TestList",
      "OpCode": "Update",
      "LineNumber": 1,
      }, "data":
      {
        "Col1": "C"
      }
    }
  ],
  "ScalarInstructions":[]
}
```

### Execute function
If you want to execute a script in your visualization. 
You can create a global function and share it with the outside world. 
To create a global function, click in the explorer on Scripts -> Functions -> Add global function.

In the function you must now mark that it is to be released externally. 
To do this, click on [Shared Function]. 
For the function you can specify parameters, which can be passed to the function.

![image_4](/assets/images/misc/API/4.png)

This parameter can be controlled later in the script by the name of the parameter. 
For example, the following script displays the parameter as a message on the visualization:

```lua
runtime.shownotification(MyParam)
```

The function named MyFunc can now be called using the following query:

```JSON
HTTP POST (port 40405)
https://[Box IP or hostname]:40405/api/functions/MyFunc
Content-Type
application/json

With Basic Authorization


Body
{
  }, "MyParam": "Hello World"
}
```

### Overview of all interfaces
In addition to the calls described here, many others can be called and tested. 
For this purpose, Peakboard offers an interface that displays a list of all interfaces. 
Here you can directly authenticate yourself and start a query to the box.

You can find this interface under:

```
https://[Box IP or hostname]:40405/swagger
```

![image_5](/assets/images/misc/API/5.gif)




