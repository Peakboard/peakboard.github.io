---
layout: article
lang: en
ref: tut-8
---

# Data Sources: Static Data

Usually, the term “data source” means that data is retrieved from any previous system, be it a database, an ERP system or simply from the web with the help of a generic source such as JSon or XML. In Peakboard, static data is also referred to as a “data source”, which is characterized by the fact that the data does not originate from another location, but is stored locally in the Package. There are two main reasons why you need these static data sources:

 

1.Static data sources are used as a kind of “global variable” for various sophisticated scripting tasks. Different scripts can exchange information by writing to or reading from data sources.

2.Static data sources are used as containers to send push messages from the outside to the Peakboard-Box. For example, you could build a static table for error messages. A machine that falls into an error state pushes the error information into this static container. All connected controls then react automatically. An example of this can be found at [here.]()
 

To create a static data source, proceed as for all other data sources. Simply select “Add General Data” in the Designer. A static data source can be either a value (Single) or a table. The following screenshot shows the maintenance of a single value. The data types String, Number and Boolean are supported.

 



 

Static data sources of type List are tables. The columns must first be defined here. The following example shows a table with two columns: Code and Message, each of type String.

 



 

Once the columns have been defined, the table can be filled with data. The following example shows how to add new entries to the table:

 

