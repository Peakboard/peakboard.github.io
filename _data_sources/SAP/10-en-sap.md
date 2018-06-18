---
layout: article
title: SAP
menu_title: SAP
description: Information about SAP Data in Peakboard
lang: en
ref: dat-10
---
This page explains the individual features when accessing an SAP data source from Peakboard. Under the following link you will find a tutorial on how external data sources are generally configured and linked to Peakboard-Elements:

[Getting Started with External Data Sources Using the Example of an XML Data Source](/tutorials/03-en-xml-data.html)

The connection to SAP can be implemented in various ways. Which of these is best for your case depends on several factors that are explained below:

**Direct RFC**

:	In the case of Direct RFC, the box communicates directly with an SAP application server. Without middleware and without the need to configure biggerthings on SAP. This is usually the best access option for almost all customers.

**SAP Gateway**

:	The SAP Gateway is a module within SAP that can be accessed using transaction code SEGW. There, RFC function modules are usually provided as an OData  service. You can find an introduction to SAP Gateway either via Google or [here](https://blogs.sap.com/2013/01/24/a-simple-overview-on-sap-netweaver-gateway/). To connect to a gateway service using Peakboard, you need at leastthe URL of the service and the name of the entity set. Please note that a big disadvantage of this access method is the development effort that might be necessary on the gateway side.

**Peakboard-Bridge**

:	In the first generation of Peakboard, the bridge was needed to communicate with SAP. Since the second generation (approx. May 2017) this feature is obsolete and should no longer be used.

## Access via “Direct RFC”
To connect the data source to SAP, the fields Client, User Name, Password, and Language (with the usual SAP language code) must be filled in. The tab page ‘Direct RFC’ must also be activated. On this tab page, enter the SAP application server and the system number.

![image_1](/assets/images/Data_Sources/SAP/SAP01.png)

The actual access to SAP is formulated using an XQL statement. So that you do not have to enter the XQL statement completely manually, you can insert a pattern using the template button. The following screenshot shows an instruction for a simple SAP table. Further information and examples of XQL can be found on another page.

![image_1](/assets/images/Data_Sources/SAP/SAP02.png)

The next steps are the Load button to load the columns or metadata and the Preview button to check the plausibility of the data.

![image_1](/assets/images/Data_Sources/SAP/SAP03.png)

![image_1](/assets/images/Data_Sources/SAP/SAP04.png)

## Access via SAP Gateway

Access is based on a gateway service that returns a list of all users currently logged in. The following screenshot shows the service in the draft view of transaction SEGW:

![image_1](/assets/images/Data_Sources/SAP/SAP05.png)

The newly created data source requires a unique name and user name and password of the SAP system. In the SAP Gateway tab page, enter the URL of the gateway service. Then click on the small button with the three dots to load all entity sets into the selection dialog available under this service URL.

![image_1](/assets/images/Data_Sources/SAP/SAP06.png)

As soon as you have chosen an entity, confirm with OK. Now the columns and their data types are loaded and displayed. This concludes the configuration. Check the data for plausibility by looking at it in the Preview window.

![image_1](/assets/images/Data_Sources/SAP/SAP08.png)

![image_1](/assets/images/Data_Sources/SAP/SAP09.png)
