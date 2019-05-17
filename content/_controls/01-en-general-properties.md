---
layout: article
title: General Properties
menu_title: General Properties
description: Information about Peakboard Designer General Properties.
lang: en
weight: 100
ref: con-100
---

All Controls that are available in the Toolbox at the top right have properties. These include, on the one hand, special properties that only apply to the Control in question, but also general properties that can be found in almost every Control, or at least in many Controls. To avoid having to explain all properties again and again on every help page, the properties that appear for more than one Control are summarized in the following list

| **Property**   | **Description** |
|------------|-------------|
| Name       | Is a unique name for the control (without special characters) to access from scripts. Only if the control is actually used by scripts, a name must be assigned. |
| Height     | Is the height in pixels.|
| Margin     | Cannot be changed directly, but represents the position of the control onthe board (x, y-coordinate) |
| Visible    | Is a boolean value that sets the visibility. It is usually set from scripts to make a control visible / invisible after a certain logic.|
| Width      | Is the width in pixels.	|
| Events     | This property can be used to call a dialog containing one or more scripts that are called when events of the control occur.	|
| Font       | Represents a font from the font manager. Some controls have multiple font properties, such as the Table Grid: One for the header, and one for the rest.	|
| Background | Is the color of the background.
| Foreground | Is the color of the foreground (what exactly is the "foreground" depends on the control). |
