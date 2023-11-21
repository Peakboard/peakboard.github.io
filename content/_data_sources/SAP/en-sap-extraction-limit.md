---
layout: article
title: Reading SAP Tables with Many Columns
menu_title: Reading SAP Tables with Many Columns
description: Reading SAP Tables with Many Columns
lang: en
weight: 2440
ref: dat-2440
---

Here you will find instructions for the manual installation of the function module Z_XTRACT_IS_TABLE.

### Step 1 - Create module

Start transaction SE37 and create a new module called Z_XTRACT_IS_TABLE. You can store it in an existing function group or create a new function group for it. The same applies to the development class.

On the Attributes tab, set the execution type to remote callable.

![Z-Custom-Function-01](/assets/images/data-sources/sap/Z-Custom-Function-01.png)

### Step 2 - Import parameters

Define the import parameters as shown in the following screenshot.

![Z-Custom-Function-02](/assets/images/data-sources/sap/Z-Custom-Function-02.png)

### Step 3 - Table parameters

Define the table parameters as shown in the following screenshot.

![Z-Custom-Function-03](/assets/images/data-sources/sap/Z-Custom-Function-03.png)

### Step 4 - Exceptions

Define the exceptions as shown in the following screenshot.

![Z-Custom-Function-04](/assets/images/data-sources/sap/Z-Custom-Function-04.png)

### Step 5 - Code

You can find the ABAP code in the file Z_XTRACT_IS_TABLE.txt which can be downloaded [here](https://peakboard.com/download/dokumente/Z_XTRACT_IS_TABLE.txt). You can copy the code into the source code editor simply by pressing Ctrl+C and Ctrl+V.

Save and activate the module.

Alternatively, you can install the function module using the transport request thtrans.zip, which is delivered with the system. This is located in the ABAP subfolder of the installation folder.
