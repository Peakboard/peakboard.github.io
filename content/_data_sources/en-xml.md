---
layout: article
title: XML
menu_title: XML
description: Information about XML Data in Peakboard
lang: en
weight: 2800
ref: dat-2800
redirect_from:
  - /data_sources/08-en-xml.html
---

This article explains the handling of the data source for data in XML format. You can find the exact specification and further information about XML [for example in this Wikipedia article](https://de.wikipedia.org/wiki/Extensible_Markup_Language).

For a nice example of XML data, see [this XML file](http://mysafeinfo.com/api/data?list=presidents&format=xml).
It contains a sample dataset about the first 5 US presidents.

Open the Peakboard Designer, create a new project, and click the [...] button under Data on the left side of the explorer, or alternatively right click on it.
Then select XML (1) as data source under [Add data source].

![Add XML data source](/assets/images/data-sources/xml/en_xml-01.png)

In the mask for the configuration of the XML data source you first assign a unique name (1) for the data source (e.g. XMLtest).
As [Source type] (2) you select [URL] and then copy and paste the URL from your browser (3).
The following source systems are currently available here:

* **URL**
* **Local network**
* **File**
* **OneDrive**
* **SharePoint**

In this case, you do not need authentication and therefore select the type [None] (4) under [Authentication Type].
For authentication, the XML data source currently supports the following types:

* **None**
* **Basic**
* **Bearer**
* **OAuth**

In the [Request] section (5) you can select the desired method if necessary and use the [Edit Request Header or Body] button to adjust the header and body (only for PUT or POST requests) to your requirements.

In the area [Specify Details] you define the path by clicking on the [...] button next to the text field (6).

![XML dialog](/assets/images/data-sources/xml/en_xml-02.png)

To do this, Peakboard analyzes the structure of the XML file and displays the tree of XML elements.
Depending on which element you have selected, all attributes that are at or below the selected element are displayed below.
Certain elements you will not need later.
Here you can remove the checkmark, then they do not appear in the further process.
Especially with very complex XML files it is advisable to leave out all elements you don't need.

![XML path dialog](/assets/images/data-sources/xml/en_xml-03.png)

With a click on OK you transfer all values into the main mask. You can check the correct configuration by clicking on [Load data]. In the preview you can check the plausibility of the data and change the data type if necessary (1).

![Check data](/assets/images/data-sources/xml/en_xml-04.png)
