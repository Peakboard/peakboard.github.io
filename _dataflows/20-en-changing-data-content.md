---
layout: article
title: Changing Data Content
menu_title: Changing Data Content
description: Changing Data Content
lang: en
ref: flow-20
---
This section describes the steps to manipulate the content of columns.

## Lowercase Column - Convert content to lowercase letters

This step converts all uppercase letters of a data cell into lowercase letters.

![Lowercase Column](/assets/images/dataflows/dataflows-lowercase01.png)

## Uppercase Column - Convert content to uppercase letters

This step converts all lowercase letters of a data cell into uppercase letters.

![Uppercase Column](/assets/images/dataflows/dataflows-uppercase01.png)

## Replace Column Text - Replace Text

This step converts all occurrences of a certain text into another text. This also works with an empty string. In the following example, all empty columns are replaced by "N/A".

![Replace Column](/assets/images/dataflows/dataflows-replace-text01.png)

## Set Number Format

This step is used to assign numbers stored as strings to a different format. The same format technology is used as we already use for text fields or table grids. More information can be found[here](https://help.peakboard.com/misc/03-en-formating-values.html). Please note: It makes no sense to format purely numeric fields (data type Number) here. This is best done directly during output (e.g. in the respective text field).

![Replace Column](/assets/images/dataflows/dataflows-set-number-format01.png)

## Set Date/Time Format

This step is used to convert date values to another format. The same format technology is used as we already use for text fields or table grids. More information can be found[here](https://help.peakboard.com/misc/03-en-formating-values.html). 

![Replace Column](/assets/images/dataflows/dataflows-set-date-format01.png)

## Update Column - Change data

This step is used to change data according to a certain logic. The desired logic is set with a Lua expression as for "Create Column". The following example shows the manipulation of the Material column. As soon as "4711" is contained as value, the content is set to "N/A". The logic can become arbitrarily complicated. Other columns can of course be part of the logic in the same way as other data sources or variables. 

![Replace Column](/assets/images/dataflows/dataflows-update-column01.png)