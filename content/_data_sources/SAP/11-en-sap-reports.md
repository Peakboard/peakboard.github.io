---
layout: article
title: Installing Function Modules for SAP Reports
menu_title: Installing Function Modules for SAP Reports
description: Installing Function Modules for SAP Reports Tutorial
lang: en
ref: dat-11
---

To use SAP reports in Peakboard, it is necessary to install a customer-specific function module in the SAP system.
If you cannot do this yourself, ask a colleague from your SAP Basis department to help you. First create a function group (for example, with the name EXTRACT) to create the module. Then create a new function module. The name should be Z_XTRACT_IS_REMOTE_REPORT, but can also be changed if necessary. Define the module in its attributes as remote-capable and create the import, export and table parameters as shown in the following screenshots.

![Function Builder Import](/assets/images/data-sources/sap/report-custom-function-01.png)

![Function Builder Export](/assets/images/data-sources/sap/report-custom-function-02.png)

![Function Builder Tables](/assets/images/data-sources/sap/report-custom-function-03.png)

Please copy the source code by Ctrl+C and Ctrl+V from this [text file](https://peakboard.com/download/dokumente/Z_XTRACT_IS_REMOTE_REPORT.txt) into the code editor (Source Code tab). Save the module and activate it. Now it is ready for use.
The individual steps (program execution, spool retrieval, job monitoring, and so on) are documented in the code accordingly. This makes it easy for the inclined reader to find out how the ABAP code works.
