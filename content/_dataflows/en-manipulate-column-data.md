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

The category **Manipulate column data** in the dataflow step selection holds every step that reshapes the values inside a column: recalculate them with a script, replace parts of the text, format numbers and date values or convert text to upper or lower case. To learn how to create a dataflow and add steps in general, see the [first steps with dataflows](/dataflows/en-getting-started.html).

## Update column

With this step you modify the values of a column using a logic defined in a script. In the [Column] field (1) pick the column you want to update. In the script editor (2) you define the logic – use `item.ColumnName` to reference the values of the other columns in the same row, and the returned value must match the data type of the selected column. With the [Test script] button (3) you check the validity of the script. With the [Script]/[Blocks] toggle (4) you can switch to the visual Building Blocks editor if you prefer.

![Update column](/assets/images/dataflows/manipulate-column-data/manipulate-column-data-01-update-column.png)

## Replace column text

With this step you replace certain characters of a column with others, similar to a search-and-replace function. Pick the [String column] (1), enter the text to replace in [Old text part] (2) and the new text in [New text part] (3). This step also works with an empty string. A requirement for this step is a column with the data type string.

![Replace column text](/assets/images/dataflows/manipulate-column-data/manipulate-column-data-02-replace-column-text.png)

## Set format for number (as string)

With this step you assign a specific format to numeric values in a column. Pick the [String column] (1) and choose the format in the [Format] field (2), for example [Currency]. With the [...] button (3) you open the advanced format editor for a custom format. A requirement for this step is a column with the data type string that contains numeric values. Please note: It makes no sense to format purely numeric fields (data type number) with this step. It is better to use the attributes directly in the output, for example in the respective text field.

![Set format for number](/assets/images/dataflows/manipulate-column-data/manipulate-column-data-03-set-format-number.png)

## Set date/time format (as string)

With this step you convert the date and time values of a column to another format. Pick the [String column] (1) and choose the wanted date or time format in the [Format] field (2). With the [...] button (3) you open the advanced format editor. A requirement for this step is a column with the data type string that contains time or date values.

![Set date/time format](/assets/images/dataflows/manipulate-column-data/manipulate-column-data-04-set-format-date.png)

## Set text to UPPERCASE or lowercase

With this step you convert the content of a column entirely to upper or lower case. Pick the [String column] (1) and use the [UPPER and lowercase] selector (2) to choose whether the text is converted to [UPPERCASE] or [lowercase]. A requirement for this step is a column with the data type string.

![Set text UPPERCASE or lowercase](/assets/images/dataflows/manipulate-column-data/manipulate-column-data-05-uppercase-lowercase.png)
