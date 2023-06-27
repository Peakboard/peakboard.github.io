---
layout: article
title: Manipulate column data
menu_title: Manipulate column data
description: Manipulate column data
lang: en
weight: 2000
ref: flow-2000
redirect_from:
  - /dataflows/20-en-changing-data-content.html
  - /dataflows/en-changing-data-content.html
---
## Update column

With this step you modify the data of a column using a logic defined in a script.

![Update column](/assets/images/dataflows/dataflows_update-column.gif)

## Replace column text

With this step you replace certain characters of a column with others, similar to a search and replace function. This step also works with an empty string. Requirement for this step is the column type string.

![Replace column text](/assets/images/dataflows/dataflows_replace-column-text.gif)

## Set format for number (as string)

With this step you assign a specific format to numeric values in a column with the data type [string].
Requirement for this step is a column with the data type string that contains numeric values. Please note: It makes no sense to format purely numeric fields (data type number) with this step. It is better to use the attributes directly in the output, for example in the respective text field.

![Set format for number](/assets/images/dataflows/dataflows_set-format-for-number.gif)

## Set date/time format (as string)

With this step you convert date and time values of a column to another format. Requirement for this step are columns with the data type string that contain time/date values.

![Set date/time format](/assets/images/dataflows/dataflows_set-date-format.gif)

## Uppercase column text

With this step you convert all lowercase letters of a column to uppercase. Requirement for this step are columns with the data type string.

![Uppercase column text](/assets/images/dataflows/dataflows_uppercase-lowercase.gif)

## Lowercase column text

With this step you convert all uppercase letters of a column to lowercase. Requirement for this step are columns with the data type string.

![Lowercase column text](/assets/images/dataflows/dataflows_uppercase-lowercase.gif)
