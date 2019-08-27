---
layout: article
title: Dynamic Queries
menu_title: Dynamic Queries
description: Dynamic Queries
lang: en
weight: 600
ref: misc-600
redirect_from:
  - /scripting/07-en-dynamic-queries.html
---
Queries against a data source often have to be designed dynamically, depending on a certain context. Example: An end-user enters a date via a text field and the data source is to send the request to the host system so that it meets the user’s requirements. To do this, a dynamic SQL statement is created that contains the desired date of the end user. This article shows the standard procedure for designing such a dynamic query.

The central element is a slider. The end user can set the number of data records to be retrieved in SAP using the slider. Each time the controller is operated, the data request is based on this. The following picture shows the design. In addition to the slider, we require a scalar data element (named Rowcount), the SAP source and a table to display the data from the SAP source.

![image_1](/assets/images/misc/queries/misc_dynamische_Abfrage_01.png)

The slider provides a ValueChanged event that is called every time the value of the slider changes. We store a simple script that writes the value of the controller to the static variable RowCount and then triggers a reload of the SAP source. Here the script and a screenshot:

```lua
data.RowCount = screen.Slider.value
data.MAKT.reloadasync()
```

![image_1](/assets/images/misc/queries/misc_dynamische_Abfrage_02.png)

The last mosaic tile is now the actual dynamisation. The following screenshot shows the SAP source in the design view. However, the XQL statement contains a placeholder, which in turn draws the value from the global RowCount variable at the decisive point. The placeholder works on the principle of #[MyVariable]#. The following is the XQL statement and a screenshot

`SELECT TOP #[RowCount]# * FROM MAKT;`

![image_1](/assets/images/misc/queries/misc_dynamische_Abfrage_03.png)
