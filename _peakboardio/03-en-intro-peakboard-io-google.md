---
layout: peakboardio
title: Google Analytics Reports
menu_title: Google Analytics Reports
description: Google Analytics Reports
lang: en
ref: io-03
---

A Peakboard.io account is mandatory for creating Google Analytics Reports. The GA report is defined in the [Peakboard.io portal](/peakboardio/01-en-intro-peakboard-io.html) and then embedded in the designer using the corresponding control.

In the Peakboard.io portal go to “GA Charts”in the menu. If you have not yet linked your account to the Google Account, please click on the appropriate button (see next screenshot). The Google login screen will open, in which you must enter your credentials. It is a classic OAuth2 authentication that allows Peakboard to access your Google Analytics data. You can revoke this permission at any time in your Google profile. After successful linking, any number of reports can be created. The link only needs to be made once and then remains.

![image_1](/assets/images/peakboard-io/google/Controls_GA_01.png)


After successful linking, a number of input fields are now available on the left-hand side to build both the data basis and the design of the GA report. Depending on the GA account, the property and the view must be selected. What exactly this means depends on the GA account. Please don’t forget to name the object correctly and add a short description text.

![image_1](/assets/images/peakboard-io/google/Controls_GA_02.png)

In the further process, start and end date and other attributes must be selected. The required metric and dimension are mandatory fields. Sorting, filtering and segmentation are voluntary. Please note that Google Analytics offers countless possibilities. Therefore, the correct setting of these attributes is not trivial and requires deeper expertise. Please also see Google’s documentation for more details on dimensions, metrics and other attributes.

![image_1](/assets/images/peakboard-io/google/Controls_GA_03.png)

In the last part only details of the visualization have to be specified. The title of the chart, its type and size. Click on Run Query to execute the query with the selected attributes. You will then see a preview of the chart. Finally, save your report like any other Peakboard.io object.

![image_1](/assets/images/peakboard-io/google/Controls_GA_04.png)

The Peakboard Designer has its own control for these GA reports. After entering the API key and user name as usual, select the corresponding chart object from the selection list. There’s nothing more to do.

![image_1](/assets/images/peakboard-io/google/Controls_GA_05.png)
