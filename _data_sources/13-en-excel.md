---
layout: article
title: Excel
menu_title: Excel
description: Information about Excel Data in Peakboard
lang: en
ref: dat-13
redirect_from:
  - /en/datasources-excel/
---
This page explains the individual features when accessing an Excel data source from Peakboard. Under the following link you will find a tutorial on how external data sources are generally configured and linked to Peakboard elements:

[Getting Started with External Data Sources Using the Example of an XML Data Source](/tutorials/03-en-xml-data.html)

After you click Add Excel Data, a window opens. In this dialog box, you must enter a name and select a storage location (e. g. Dropbox). The following locations are currently supported:

*    **File** – The Excel file was previously added to the Peakboard-Package as a resource and is part of the package
*    **Dropbox**
*    **GoogleDrive**
*    **OneDrive** – Microsoft OneDrive (both the free offer, and as part of Office 365)
*    **NetworkShareFile** – The file is dragged over the Peakboard-Bridge from a network drive. More information about the Peakboard bridge can be found [here.](/administration/01-en-install.html)
*    **NetworkShareFileDirect** – The file is pulled directly from a network drive. Attention! This only works if the network drize has no security restrictions and is configured for anonymous access.

Then log in to the cloud provider using the Authorize button and select a file using the… button – if you have selected a cloud provider as the source.
Under Worksheet, select the required worksheet from the list. “Column names in 1st row” means that the column headers are directly in the table cells. Otherwise, generic column headings are created (Column1, Column2, and so on). By default, the data in the respective worksheet is simply displayed from the first cell on the top left (Select All). If this is not the case, you can enter a range in the Range field in which Peakboard should search for the data (e. g. from cell B2 to H23, then B2: H23 would have to be entered here).

 ![Add Excel Data Dialog](/assets/images/data-sources/excel/add-excel-data.png)
