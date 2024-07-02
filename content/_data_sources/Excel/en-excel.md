---
layout: article
title: Excel
menu_title: Excel
description: Information about Excel Data in Peakboard
lang: en
weight: 600
ref: dat-600
redirect_from:
  - /en/datasources-excel/
  - /data_sources/13-en-excel.html
  - /data_sources/en-excel.html
---

To add an Excel data source, do the following:
1. In the **Explorer** pane, click on the **Add Data Source** button.
2. Select **Excel**.

![Add data source](/assets/images/data-sources/excel/en_excel-01.png)

Set up your new data source:

1) Give your data source a name.

2) Specify when you want your data source to update its data.

3) Set the source of the Excel file.
  * **URL**
  * **Local network** - Mount the file directly from a network drive by entering a domain user and password. Note that the UNC drive paths must be used.
  * **File** - The chosen file is added to the project as a resource and is included in the PBMX file.
  * **OneDrive** - Works with both the free and Microsoft 365 versions.
  * **SharePoint**

<div class="box-tip" markdown="1">
**Important**.
Any Excel files you create as **File** will only contain the record that was current when the file was added to the resources. To display real-time data, you should choose one of the other options!
</div>

4) Load the worksheets and select the one you want to use. By default, the data source uses the entire worksheet. To change this, deselect **Select all**, and enter a range of cells.

* **Column names in first row** - Use the first row in the Excel file to name the columns. Otherwise, generic column headings are used (Column0, Column1, etc.).
* **Switch rows and columns** - This lets you transpose the Excel data with just one click.

5) Click on "Load data" to preview the data.

![Excel Dialog](/assets/images/data-sources/excel/en_excel-02.png)


To change the data type of a column, right click the column and select "Change column data type." You can only do this if you have already saved your data source.

![Change data type](/assets/images/data-sources/excel/en_excel-03.png)