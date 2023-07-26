---
layout: article
title: Peakboard Script Tree
menu_title: Peakboard Script Tree
description: Informatinon about the Peakboard Script Tree
lang: en
weight: 900
ref: scr-900
redirect_from:
---

The script tree is intended to facilitate working with scripts. There you will find predefined functions and examples, which can be used by double-clicking on the cursor.

![image01](/assets/images/scripting/tree/tree01.png)

## Data

Here you can find all data sources created in the Explorer as well as the characteristic functions.

For example, a time data source contains functions such as "Format" or "Lua Date". Via "Format" the date can be changed analogous to the format function of a control, as described [here](/data_sources/de-datum-und-uhrzeit.html).

## Variable

Here you can find all variables and lists created in the Explorer, as well as their characteristic functions. 

For example, for a variable of type Number the corresponding "to String" function.

## Dataflows

Here you can find all dataflows created in the Explorer as well as the characteristic functions.

For example, the previously [aggregated column of a dataflow](/dataflows/en-aggregate-data.html) can be called here.

## Screens

Here you can find all controls created on the screen that have a control name, as well as the functions characteristic of the control.

## Resources

Here you will find all resources created in the Explorer, as well as their characteristic functions

## Timer (Timer script only)

Here you will find relevant functions for the timer

## Types

Here you can find functions for visibility or coloring of controls.

## Runtime
Functions for the Peakboard Runtime.

## Functions

Standard functions included in the script editor. With the help of the script Global Functions you can create your own functions at any time.

#### Peakboard
Enables output to the log of the Peakboard Runtime using peakboard.log(), for example.

#### Control
Includes a simplified function to make a control visible or invisible.

#### Date
Here you can find common functions to work with a date or time. However, these functions do NOT replace the time data source. Rather, they extend the range of preconfigured functions for time manipulation. 

#### String
These functions are mostly used when it comes to filtering certain text values within a [Dataflow](/dataflows/en-filter-data.html).

#### Math
Contains some functions for handling numbers. For example, the "To number" function can be used to convert a number from the String datatype to the Number datatype.

#### SQL
The functions listed here are mainly used for writing to SQL. 

#### SAP
The functions listed here are mainly used for writing to SAP. 

#### Mail
Here you will find preconfigured functions for sending e-mails via the Peakboard.

#### Brush
Function to color something using a hex code. 