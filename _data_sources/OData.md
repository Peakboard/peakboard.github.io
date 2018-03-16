---
layout: article
title: OData	
menu_title: OData
description: Informatinon about OData in Peakboard
lang: en
ref: dat-7
---

This page explains the individual features when accessing OData data sources from Peakboard. Under the following link you will find a tutorial on how external data sources are generally configured and linked to peakboard elements:

 

[https://help.peakboard.com/en/getting-started-with-external-data-sources-using-the-example-of-an-xml-data-source/](https://help.peakboard.com/en/getting-started-with-external-data-sources-using-the-example-of-an-xml-data-source/)

 

If you don’t have a URL to an OData data source at hand, but just want to try it out once, please use the following sample URL. It points to the AdventureWorks database. This is a sample database from Microsoft. Different entity sets are included, such as a product catalog or sales figures.

 

[http://services.odata.org/AdventureWorksV3/AdventureWorks.svc](http://services.odata.org/AdventureWorksV3/AdventureWorks.svc)

 

OData is a standardized data exchange format. The example URL refers to a small database whose entity sets you can load into the Combobox by clicking Load after entering the URL. If the OData request requires authentication, click the small button with the three dots. Then you can enter your user name and password.

 
![image_1](/assets/images/Data_Sources/OData/OData01.png)


 

If you have chosen an entity set, the columns and their data type are automatically displayed for information in the table below. As usual, you can specify the time interval after which the source is refreshed and the maximum number of rows retrieved. If you do not want to retrieve all data from the source, you can define an OData filter in the corresponding text field. If you don’t know exactly how an OData filter works, you will find a good introduction here

 

![image_1](/assets/images/Data_Sources/OData/OData02.png)


 

With the help of the Preview button, a test request is sent to the server and the data is prepared according to the specifications.

 

![image_1](/assets/images/Data_Sources/OData/OData03.png)


