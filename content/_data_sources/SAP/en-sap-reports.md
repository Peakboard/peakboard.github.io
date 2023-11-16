---
layout: article
title: Function Modules for SAP Reports
menu_title: Function Modules for SAP Reports
description: Function Modules for SAP Reports
lang: en
weight: 2410
ref: dat-2410
redirect_from:
  - /data_sources/SAP/11-en-sap-reports.html
---

To use SAP reports in Peakboard, it is necessary to install a customer-specific function module in the SAP system.
If you cannot do this yourself, ask a colleague from your SAP Basis department to help you. First create a function group (for example, with the name EXTRACT) to create the module. Then create a new function module. The name should be Z_XTRACT_IS_REMOTE_REPORT, but can also be changed if necessary. Define the module in its attributes as remote-capable and create the import, export and table parameters as shown in the following screenshots.

![Function Builder Import](/assets/images/data-sources/sap/report-custom-function-01.png)

![Function Builder Export](/assets/images/data-sources/sap/report-custom-function-02.png)

![Function Builder Tables](/assets/images/data-sources/sap/report-custom-function-03.png)

Copy the source code by Ctrl+C and Ctrl+V from this [text file](https://peakboard.com/download/dokumente/Z_XTRACT_IS_REMOTE_REPORT.txt) into the code editor (Source Code tab). Save the module and activate it. Now it is ready for use.
The individual steps (program execution, spool retrieval, job monitoring, and so on) are documented in the code accordingly. This way, if you are interested, you can easily find out how the ABAP code works.

## SAP Standard Data Type TAB512

Instead of using the SAP standard data type TAB512 for the LIST_OUTPUT table parameter, you can create your own Z data type.
This is necessary if the output length of a report line is longer than 512 characters. The maximum possible length is 1023 characters.

![TAB512](/assets/images/data-sources/sap/sap-reports-tab512.png)
