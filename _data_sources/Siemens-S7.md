---
layout: article
title: Siemens S7
menu_title: Siemens S7
description: Informatinon about Siemens S7 Data in Peakboard
lang: en
ref: dat-21
---

In general, there are several ways to process machine data in Peakboard, e. g. via a cloud-based IoT hub (such as Azure or Google) or an MQTT server. The Siemens S7 data source enables the Peakboard-Box to be connected directly to an S7 controller. In case the control network is separated from the “normal” business network in the respective environment, the box can have a second LAN connection via USB, which is connected to the business network on one side (e. g. for SAP access) and to the S7 control network on the other side.

Please make sure that the S7 is configured in such a way that external access to the variables to be visualized with Peakboard is possible. There are various settings that could prohibit this (for example, for security reasons).

The following screenshot shows the raw view of a data block from the point of view of the S7 programmer. Relevant for us are the two variables TempIst (one temperature) and ZaehlerLS (a continuous counter).

 
![image_1](/assets/images/Data_Sources/Siemens_S7/DatenquellenS701.png)


To connect Peakboard to the S7, create a corresponding data source. Enter a mandatory name, IP address, slot and rack. Models 1200,1500,200,300 and 400 are currently supported when specifying the S7 CPU. The Sampling Interval value is the number of milliseconds that elapse between two data retrievals. You can use Max Items to specify the number of values that are to be contained in the table later. The most recent variable value always comes first in the table. It only makes sense to enter a value greater than 1 if you want to access the values before (!) the current call later in a script.

An entry must be made manually for each variable to be retrieved. A variable is defined by an arbitrary name, a data location (type), a data block number (if the data location is a data block), an offset and a data type. Please enter these values very carefully. If only one single specification is incorrect, this can lead to abstruse values, because the byte stream of the S7 is then misinterpreted.

The screenshot shows the two variable temperatures and counters as shown in the screenshot.

 


![image_1](/assets/images/Data_Sources/Siemens_S7/DatenquellenS702.png)
 
![image_1](/assets/images/Data_Sources/Siemens_S7/DatenquellenS703.png)



 

A click on Preview connects to the S7 and retrieves the variables. In the following figure a temperature of 27 degrees and a counter of 42 were determined.

 

![image_1](/assets/images/Data_Sources/Siemens_S7/DatenquellenS704.png)


 

The data source can now be reused in Peakboard as usual, e. g. by binding or with the help of a script. Please pay attention to this: The refresh event of the data source is only fired if at least one variable has changed. If all variables remain the same, NO event is triggered.

