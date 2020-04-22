---
layout: article
title: Conditional formatting
menu_title: Conditional Formatting
description: Conditional formatting
lang: en
weight: 101
ref: con-101
redirect_from:
---
![img00](/assets/images/Controls/ConditionalFormatting/img00.png)

Conditional formatting allows you to change different properties of a control based on a defined event without having to resort to complex scripts.

To define a conditional formatting for a control, first drag the desired control, in this case a rectangle, onto the surface (1).
Under the category Appearance you will now find the property "Conditional Formatting" (2).

![img01](/assets/images/Controls/ConditionalFormatting/img01.png)

This consists essentially of four elements.
The text field shows whether and how many rules have been created for this element.
The trash can allows you to delete all rules.
With the help of the copy icon rules can easily be copied and applied to other controls without having to be redefined.
The fourth and last icon in the line opens the rule editor for conditional formatting.

![img02](/assets/images/Controls/ConditionalFormatting/img02.png)

The "New Rule" button is used to create a new rule.
Here you can first enter a name for the rule for easier identification (1).
The rule editor itself is based on a simple if-then concept.
The IF statement defines when the rule should be executed (2), while the THEN statement defines the corresponding action (3).
Depending on the control type, control-specific properties can be changed.
 
 {% include styled_table.html %}
| Text Control | Shapes |
|---------------|---------------|
| text | background |
| subtitles | border color |
| background | border size |
| Shadow Depth | Animation |
| Animation | Width |
| width | height |
| Height | Top |
| Top | Left |
| Left | Visible |
| Visible ||


With the button "Add new rule" further rules can be defined for the control (4).

![img03](/assets/images/Controls/ConditionalFormatting/img03.png)

In order to define a condition in the IF statement, it needs a data source or variable that later triggers the THEN event.
Here, a variable ProdKPI1 (1) of the type Number was created, which, for example, reflects the daily production.
In the example, if a daily production of 100 is reached, the rectangle should be colored green.
First, the AND-Condition button is used to define the desired condition.
To do this, select the variable using the concatenation symbol and then define the operator required to fulfill the condition (equal =, greater >, smaller <, not equal <>).
The third field of the IF statement contains the comparison value.
As here, this can be a permanently defined value or also a variable or value from a data source (2).

If required, further AND or OR conditions can be defined (3).

In the THEN-statement the action is defined, which is to be executed when (2) is fulfilled.
In this case the background should be colored green (4).

With the button "Add formatting" additional actions can be defined, which should be executed when the condition is fulfilled.

![img04](/assets/images/Controls/ConditionalFormatting/img04.png)

In the preview you can see the result of the conditional formatting.
The conditional formatting is only executed in the preview or on the Peakboard Box!
On the drawing area there is no change of the rectangle from white to green!

![img05](/assets/images/Controls/ConditionalFormatting/img05.png)
