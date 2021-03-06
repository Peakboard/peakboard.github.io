---
layout: article
title: Filter Data
menu_title: Filter Data
description: Filter Data
lang: en
weight: 3000
ref: flow-3000
redirect_from:
  - /dataflows/30-en-filter-data.html
---

### Filter
The Dataflow step "Filter" is a powerful tool for deleting unneeded data according to a certain logic. For example, if you receive warehouse transaction data from a source system for two storage locations, but want to look at both areas separately (for example, with a key figure for one area and the other separately), you would typically create two data flows and delete the data for the other area using a filter right at the beginning. This turns a mixed data source into two separate data sources.

The logic works with a Lua expression like in the *Create Colum* step. Only the return value changes. If the expression returns *false*, the line is deleted, if it returns *true*, it remains in the resultset. The following example shows how to delete all rows that contain the value "N/A" in the *City* column.

![Filter Column](/assets/images/dataflows/dataflows-filter01.png)

### Filter By Date/Time Columns 
Data in a dataflow can also be filtered using a previously created [time data source] (https://help.peakboard.com/data_sources/en-date-and-time.html).
For this, the time format of the data source must be identical to the comparison time from the dataflow.

![Filter Column](/assets/images/dataflows/dataflows-filter02.png)