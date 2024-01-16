---
layout: article
title: Quick Tipp - Call remote function via building block
menu_title: Quick Tipp - Call remote function
description: Quick Tipp - Call remote function via building block
lang: en
weight: 912
ref: scr-912
redirect_from:
---

The building block [Call remote function] is intended to execute a function of a specific Peakboard Box application remotely from another Peakboard Box application.

A potential use case for this building block would be to change the current screen of an application that is intended as an overview for a factory floor, for example to display a shift schedule, the current weekly menu for the cafeteria or similar information.
In this case, the function is to be controlled from the individual workstations on the factory floor using the Peakboard Boxes there.

### Creating the function on the Peakboard Box with the overview application

The prerequisite for using the example function is the presence of several screens (1) in your application.
First create the function that will later execute the screen change. To do this, right-click on [Functions] in the [Scripts] section of the Explorer in the Peakboard Designer and select [Add] (2).

![Add function](/assets/images/scripting/quicktipps/en_functions-bb-01.png)

Give the function a name (1) and activate the [Shared function] checkbox (2). All other settings are not required in this case. Depending on the application, you can make further adjustments here. Confirm the dialog with [OK] (3) to access the script editor.

![Function dialog](/assets/images/scripting/quicktipps/en_functions-bb-02.png)

Here you select the building block [Change screen] (1) in the [Visualization] area in the main area [FUNCTIONS]. Select the option [next] (2) in the drop-down of the Building Block. When this script is executed, the application switches to the next screen. Confirm the creation of the function with [Save & close] (3).

![Function script](/assets/images/scripting/quicktipps/en_functions-bb-03.png)

### Creating the trigger in the workplace application

A possible trigger for remote access to the function just created can be a button control, for example.
Drag the button control (1) in the workplace application onto the workspace and design it with the attributes to match your existing application.
In the [Logic] area, open the script editor for the tapped event (2).

![Add button control](/assets/images/scripting/quicktipps/en_functions-bb-04.png)

Now add the [Call remote function] building block under [External functions] from the [Publish to external systems] section in the main [FUNCTIONS] area. The prerequisite for correct use is that the Peakboard Boxes in question are connected to the Peakboard Designer and the corresponding applications are active.
In the first drop-down of the building block (1), select the Peakboard Box on which the application with the created function is located. In the second drop-down (2), the available functions are loaded by clicking on the loading symbol. Select the function created in the first step. Confirm the creation with [Save & close] (3).

![Configure tapped event](/assets/images/scripting/quicktipps/en_functions-bb-05.png)

If the application with the screen change function is now active on the first Peakboard Box and the tapped event is triggered in the application of the second Peakboard Box by clicking on the button control, the function is executed and the screen is changed on the first Peakboard Box.

The principle of this building block can be adapted accordingly for many other, even more complex use cases.
