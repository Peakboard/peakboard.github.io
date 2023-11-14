---
layout: article
title: Quick tip - Dynamic SharePoint download
menu_title: Quick tip - Dynamic SharePoint download
description: How to use a SharePoint document library to store technical drawings and download them dynamically to Peakboard
lang: en
weight: 600
ref: resources-600
redirect_from:
---

In factories with manual/semi-manual production or in quality management, screens are used frequently to for example display technical drawings. Other applications include step-by-step instructions, quality control instructions or other documents. PDF is often the standard format for these types of documents.

In this article, you will learn how to use a SharePoint document library to save PDFs, download them in the Peakboard Designer and display them dynamically in a visualization.

### The SharePoint document library

The following screenshot shows a standard document library in a typical Office 365 environment. Within the library, there is a subdirectory called **Current** that contains all current documents. The old documents are stored in **Archive**.

Let's assume the company manufactures three different products called P01 to P03. For each product there is a technical drawing whose PDF file is named accordingly. The x.pdf file contains only a red cross and is used as a placeholder when no useful data is displayed.

![SharePoint document library](/assets/images/resources/en_resources-sharepoint-01.png)

### Linking the Peakboard project with SharePoint

Right-click on [Resources], select [Add cloud resource] and then [SharePoint] (1).

![Add resource](/assets/images/resources/en_resources-sharepoint-02.png)

Authenticate yourself with your Office 365 account in the dialog that has opened. The account requires sufficient permissions to access the desired files in the document library.

![Office 365 Login](/assets/images/resources/en_resources-sharepoint-03.png)

The file selection dialog opens.
Select the file x.pdf (1) as a placeholder file for the project.

![File selection](/assets/images/resources/en_resources-sharepoint-04.png)

Drag and drop the PDF resource onto the workspace to create a PDF control.
Then activate the checkbox [Used in scripting] (1) in the attributes and give the control a name (2).

![Insert resource](/assets/images/resources/en_resources-sharepoint-05.png)

### Setting up the data structure for dynamic loading

A factory worker should be able to dynamically select the files with the various technical drawings from a list of document numbers. To do this, create a list with these numbers. To do this, right-click on [Variables] and select [Add list] (1).

![Create list](/assets/images/resources/en_resources-sharepoint-06.png)

Give the list a name (1) and create a column with the data type [String] (2). Then create a corresponding row for each product (3).

![Configure list](/assets/images/resources/en_resources-sharepoint-07.png)

Next, drag a Drop down control onto the workspace.
You will find the Drop down control in the [Interactive] area (1). Place this Drop down above the PDF control.
To allow the user to select the product number, bind the list variable to the Drop down control in the attributes (2).

[Link with Drop down](/assets/images/resources/en_resources-sharepoint-08.png)

Then activate the checkbox [Used in scripting] (1) in the attributes and give the Drop down control a name (2) so it can be used in the next step.

![Correct naming](/assets/images/resources/en_resources-sharepoint-09.png)

### The script for dynamic loading

To enable dynamic selection, create a Selection Changed Event script (1) for the Drop down Control by clicking on the corresponding icon.

![Create script](/assets/images/resources/en_resources-sharepoint-10.png)

With the first three lines, you create the file path of the desired PDF file relative to the root directory of your document library using the value selected in the Drop down list. In this case, for example, `/Current/` + `P01` + `.pdf`.
To do this, first create a [Local variable] of data type string under [BASICS].

For the first line, you then add a building block with the directory **/Current/** to the [Building Block](/scripting/en-building-blocks.html) [Set] of this variable.

The second line consists of the [Building Block](/scripting/en-building-blocks.html) [Append] of the variable in combination with the [Building Block](/scripting/en-building-blocks.html) [Get value] of the Drop down control under [CONTROLS], [Screen name], [Control name] and [Selected value].

For the third line, use the [Building Block](/scripting/en-building-blocks.html) [Append] of the variable again and combine it with the file extension **.pdf**

With the last line, you set the source of the PDF control to the newly created file path. This triggers an update and allows the PDF control to download and display the document from SharePoint.

To do this, drag the [Building Block](/scripting/en-building-blocks.html) [Set value] of the PDF control from the [CONTROLS], [Screen name], [Control name] and [Source] area below to the existing Building Blocks and combine it with the [Building Block](/scripting/en-building-blocks.html) [Get] of the local variable created at the beginning.

![Script for dynamic loading](/assets/images/resources/en_resources-sharepoint-11.png)

After you have saved the script, you can start the preview and test your visualization.
Each time the value in the Drop down list is changed, the reload process is triggered and the PDF file changes. In this case, we have a fixed list of products. In the real use case, the list of products could be dynamically retrieved from an ERP system such as SAP.

![Result](/assets/images/resources/en_resources-sharepoint-12.gif)
