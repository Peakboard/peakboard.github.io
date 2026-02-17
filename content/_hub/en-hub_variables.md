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

Peakboard Hub variables are used to exchange individual values between the Peakboard Hub and Peakboard Boxes.
Unlike [Peakboard Hub lists](/hub/Lists/en-hub_new-list.html), only single values can be transferred, but using variables is particularly easy.
Changes are immediately distributed via MQTT without relying on a loading interval.

![Create variable](/assets/images/hub/de_hub_variable-create.gif)

### Create variable

1. **Open variables section:** Navigate to the [Variables] menu item in the left sidebar. If no variables exist yet, an [Add Variable] button appears.
2. **Add new variable:** Click the [Add Variable] button to open the creation dialog.

### Configure variable

3. **Set identifier:** Enter a name in the [Identifier] field (e.g. "ShiftDuration").
4. **Select data type:** Choose one of the three available data types:
   - **string:** Text values
   - **number:** Numeric values
   - **bool:** Boolean values (true/false)
5. **Add constraints (optional):** For numeric variables you can activate the [Add constraints] option and define the following values:
   - **Min value:** Minimum allowed value
   - **Max value:** Maximum allowed value
   - **Tick size:** Step size for changes
6. **Save variable:** Click the [Add] button to create the variable.

### Edit variable

7. **Adjust value:** The variable appears after creation in the [Shared variables] section. Click on the value field to change the current value.
8. **Confirm changes:** Confirm changes with the checkmark symbol or discard them with the X symbol.

Successfully created variables enable data exchange between multiple Peakboard Boxes. Values are automatically synchronized across all connected systems.

### Linking with list values

Peakboard Hub variables can be linked with values of individual cells in Peakboard Hub lists.
Changes to the variable or the cell value affect the respective linked instance.
For more information, see the article [Link list cell to variable](/hub/Lists/en-hub_list-bind-variable.html).
