---
layout: article
title: General Properties
menu_title: General Properties
description: Information about Peakboard Designer General Properties.
lang: en
weight: 0
ref: con-0
redirect_from:
 - /controls/01-en-general-properties.html
 - /controls/en-general-properties.html
---

All controls have properties. These include special properties that only apply to the respective control, but also general properties that occur with almost every control or at least with many controls. To avoid having to explain all properties again and again on every help page, the properties that appear on more than one control are summarized in the following article. The properties area is divided into several sections.

### Control positioning

You can use the positioning tools to automatically scale the controls and fill a specific area.

{% include styled_table.html %}
| **Property** | **Description** |
|-----------------|------------------|
| Fill top left | Fills the top left area of the workspace with the control. |
| Fill top | Fills the top half of the workspace with the control. |
| Fill top right | Fills the top right area of the workspace with the control. |
| Fill bottom left | Fills the bottom left area of the workspace with the control. |
| Fill bottom | Fills the bottom half of the workspace with the control. |
| Fill bottom right | Fills the bottom right area of the workspace with the control. |
| Fill left | Fills the left half of the workspace with the control. |
| Fill right | Fills the right half of the workspace with the control. |
| Fill screen | Fills the entire workspace with the control. |
| Center control | Centers the selected control in the workspace. |

If the Shift key is held down, a margin is automatically added on all sides.

### Control layout

If several controls are selected at the same time, the alignment options for the selected controls appear.

{% include styled_table.html %}
| **Property** | **Description** |
|-----------------|------------------|
| Align left | Aligns the selected controls to the left edge of the control that is furthest to the left on the workspace. |
| Align centered | Aligns the selected controls to their common vertical axis. |
| Align right | Aligns the selected controls to the right edge of the control that is furthest to the right on the workspace. |
| Align top | Aligns the selected controls to the top edge of the control that is furthest up on the workspace. |
| Align center | Aligns the selected controls to their common horizontal axis. |
| Align bottom | Aligns the selected controls to the bottom edge of the control that is furthest down on the workspace. |
| Make horizontal spacing equal | If more than two controls are selected, you can use this property to make the horizontal spacing between the controls the same size. |
| Make vertical spacing equal | If more than two controls are selected, you can use this property to make the vertical spacing between the controls the same size. |
| Remove horizontal spacing | If more than two controls are selected, you can use this property to remove the horizontal spacing between the controls. |
| Remove vertical spacing | If more than two controls are selected, you can use this property to remove the vertical spacing between the controls. |

### General

In this section you will find properties that most controls share.

{% include styled_table.html %}
| **Property** | **Description** |
|-----------------|------------------|
| Width | The width of the control in pixels. |
| Height | The height of the control in pixels. |
| Left | The distance of the control to the left edge of the workspace in pixels. |
| Top | The distance of the control to the top edge of the workspace in pixels. |
| Show/Hide control | Shows or hides the control on the workspace. |
| Fix/Unfix control | Locks the control to the workspace and thus disables the option to move the control or unlocks it. |
| Padding | Defines an inner spacing for the frame of the control in pixels. |
| Title and subtitle | Adds a title and/or subtitle to the control without having to use a separate text field. |

### Data

This area is not available for all controls and can vary significantly between the different controls. In most cases, values can be manually entered here or data sources can be linked to the control.

### Appearance

In this area, you can use various properties to influence the appearance of the control. The available properties differ depending on the selected control. Background colors, outlines, shadows, fonts and many other properties can often be adjusted.

### Logic

In this area you will find properties that have to do with [Scripting](/scripting/en-script-engine.html).

{% include styled_table.html %}
| **Property** | **Description** |
|-----------------|------------------|
| Is activated | Activates or deactivates the control in the application. You can control and change this property using a script. |
| Used in scripts | If you activate this property, further properties are available. |
| Control name | A unique name for the control (without special characters) to access it from scripts. You only need to assign a name if the control is actually used from scripts. |
| Conditional formatting | The [conditional formatting](/controls/Basics/en-cf.html) allows you to change different properties of a control based on a defined event without having to resort to complex scripts. |
| Events | These properties can be used to call up a dialog containing one or more scripts that are called up when events occur for the selected control. |
