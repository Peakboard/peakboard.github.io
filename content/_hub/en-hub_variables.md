---

layout: article  
product: hub  
title: Variables  
menu_title: Variables  
description: Peakboard Hub - Variables  
lang: en  
weight: 700  
ref: hub-700  
redirect_from:  

---

Peakboard Hub variables are used to exchange individual values between the Peakboard Hub and Peakboard Boxes. Unlike [Peakboard Hub Lists](/hub/Listen/en-hub_new-list.html), only single values can be transferred, but using variables is even easier than integrating [Peakboard Hub Lists](/hub/Listen/en-hub_new-list.html), and changes are immediately distributed via MQTT without relying on a loading interval.

## Peakboard Variables in Peakboard Hub

You can find the section for Peakboard Hub variables under the **[Variables]** menu item. This window provides an overview of all variables for the current user group.

![Peakboard Variables](/assets/images/hub/en_hub_variables-01.png)

In this view, you can also work with the variables. New variables can be created via the **"Add Variable"** button, requiring a data type and an identifier. Additionally, a search bar allows filtering of variables by their identifier, which can be particularly helpful when managing a large number of variables.

### Variable Overview

![Peakboard Variable Card](/assets/images/hub/en_hub_variables-02.png)

All variables created by a user in the current group are displayed in individual cards, each comprising three lines.

- **First Line:** Shows the symbol for the data type (e.g., for 'String'), the identifier of the variable, and a three-dot menu at the end. This menu allows variables to be deleted or connections to be removed.
- **Second Line:** Displays the current value of the variable. Clicking on the value enables editing.
- **Third Line:** Shows the time of the last value change.

## Variables in Peakboard Designer

To use Peakboard Hub variables in the Peakboard Designer and later in the Peakboard Runtime, a variable must be created within an application.

![Variables in Designer](/assets/images/hub/en_hub_variables-03.png)

The dialog shown in the screenshot above can be accessed via the **Peakboard Hub Tab** in the variable dialog. Here, a Peakboard Designer variable can be linked to a Hub variable. In the dropdown menu in the middle of the dialog, you can select a Peakboard Hub variable. All variables belonging to the user group and the Peakboard Hub instance currently connected to the Designer are displayed, provided the data type is compatible.

**Note:** To ensure smooth operation, the [Hub connected to the Peakboard Designer](/hub/en-hub_connectpbdesigner.html) and the user group should match those of the application.

Additionally, the dialog allows you to dissolve a connection with the 'trash' button or add a new variable to the Peakboard Hub via the 'plus' button.

## Linking with List Values

Peakboard Hub variables can be linked with values of individual cells in Peakboard Hub Lists. This means that changes to the variable or the cell value also update the linked instance.

![Variables in Designer](/assets/images/hub/en_hub_variables-04.png)

To link a variable, open a list and select a cell. Use the **"Bind to variable"** button in the menu above the list to establish a connection. If the cell is already linked, a chain icon appears, and the **"Unbind"** button allows you to remove the link.

A variable can be linked with exactly one cell, and a cell with exactly one variable.
