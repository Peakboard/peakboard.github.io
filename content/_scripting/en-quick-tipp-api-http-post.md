---
layout: article
title: Quick tip - Synchronize variables via API functions and HTTP POST on multiple Peakboard Boxes
menu_title: Quick tip - Synchronize variables
description: Quick tip - Synchronize variables via API functions and HTTP POST on multiple Peakboard Boxes
lang: en
weight: 910
ref: scr-910
redirect_from:
---

There are several ways you can synchronize variables with Peakboard so that they are the same on multiple Peakboard Boxes. One example of this is the API sharing of variables and the use of the [Peakboard Box data source](/data_sources/en-peakboard-data-source.html). You can use it to access the variables or lists of another Peakboard Box and query them periodically.

Depending on the use case, this method has the disadvantage that values that change several times during the reload interval may not be recorded. To avoid this, you must select a very short interval, which results in more load.
You also have to create two separate data sources to be able to retrieve variables and lists at the same time.

You can avoid these disadvantages by using an API HTTP POST on the sender side and a function on the receiver Peakboard Box. The prerequisite for use is that all Peakboard Boxes used are in the same network.

## Configuring the sender side

On the sender side, you need one or more [variables and/or lists](/scripting/en-variables.html) that also exist on the receiver side and that are to be synchronized. In the following example, a variable of data type String was used. Create the variable by right-clicking on [Variables] and clicking on [Add variable] (1).

![Add variable](/assets/images/scripting/quicktipps/en_http-post_01.png)

Give the variable a name (1) and select the data type string (2).

![Configure variable](/assets/images/scripting/quicktipps/en_http-post_02.png)

A [text box control](/controls/Input/en-textbox.html) (1) is used to fill the variable. Activate the use in scripts in the attributes (2) and give the control a name (3). In your use case, the variable or list can also be filled in another way.

![Text field control](/assets/images/scripting/quicktipps/en_http-post_03.png)

In this case, you use a script in the tapped event (1) of a [button control](/controls/Input/en-button.html) (2) to send the data.
For your use case, however, you can also use a timer script, for example.

![Button control](/assets/images/scripting/quicktipps/en_http-post_04.png)

The script for the HTTP POST looks like this:

```lua
data.testvariable = screens['Screen1']. Textfeld.text

local creds = http.createbasicauth('username', 'password')
local header = {{name='content-type', value='application/json'}, {name='Authorization', value=creds}}
local body = '{"'Testparameter": "' .. data. Testvariable ..'"}'
http.post('https://192.168.20.2:40405/api/functions/Testfunction', header, body)
```

The first line of the script overwrites the variable with the value entered in the text field control as soon as the button is clicked.

The second line of the script is a basic authentication of the Peakboard Box username and password.
The third line creates a header for the request and contains the content type (application/json), as well as the previously created authentication.
The fourth line creates the body of the request and defines the parameter of the receiver function that is to be overwritten and the variable that is to be used for this.
The last line is the HTTP POST with the IP address and the port of the recipient's Peakboard Box, as well as the function that is used to overwrite the value.

![Tapped event script](/assets/images/scripting/quicktipps/en_http-post_05.png)

## Configuring the receiver side

In another application that is loaded onto the receiver Peakboard Box, you now define the function that overwrites the variable. The prerequisite is that a variable with the same name and data type as on the sender side is also created in this application.

To create the function, expand the [Scripts] area in the Explorer and right-click on the [Functions] folder and then select [Add] (1).

![Add function](/assets/images/scripting/quicktipps/en_http-post_06.png)

In the function settings, give the function the name (1) that you specified in the script on the sender page in the HTTP post. Also activate the [Shared function] checkbox (2).

![Function settings](/assets/images/scripting/quicktipps/en_http-post_07.png)

Then add a parameter (1) and name it the same as the parameter defined in the script on the sender side. Select string as the data type (2). Then confirm the settings of the function with [OK] (3).

![Parameter](/assets/images/scripting/quicktipps/en_http-post_08.png)

The script editor for the function opens automatically. You can also open the script editor at any time by double-clicking on the function in the explorer.

Now use the following script to define that the variable on the receiver peakboard box is overwritten with the parameter from the function.

```lua
data.Testvariable = Testparameter
```

Confirm the creation with [Save & Close].

![Function script](/assets/images/scripting/quicktipps/en_http-post_09.png)

As a final step, drag the variable (1) on the recipient side to the workspace as a text control (2). This way you can later see if everything works.

![Text control](/assets/images/scripting/quicktipps/en_http-post_10.png)

To test this, load both applications onto the corresponding Peakboard Box.
Now you can enter something in the text field (1) of the sender side in the application and confirm by clicking on the button (2).

![Test](/assets/images/scripting/quicktipps/en_http-post_11.png)

This will transfer the input to the receiver side and display it in the text control.

![Result](/assets/images/scripting/quicktipps/de_http-post_12.png)
