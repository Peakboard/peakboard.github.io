---
layout: article
title: Add a certificate
menu_title: Add a certificate
description: Add a certificate
lang: en
weight: 900
ref: admin-900
redirect_from:
  - /administration/09-en-certificats.html
  - /administration/en-certificats.html
---
The certificate management contains all certificates of a visualization and enables their management. 
This also includes the certificates for [OPC UA](/data_sources/OPCUA/en-opc-ua.html) or [MQTT](/data_sources/en-mqtt-broker.html).

The dialog can be opened as shown in the first screenshot via the main window [Manage Certificates] under the [Settings] in the Peakboard Designer.
![Manage Certificates](/assets/images/admin/certificates/managecert1.png)

In addition to the management, it is also possible to load certificates into the Windows certificate store on the Peakboard Box. 
To do this, the lowest option [Peakboard Box] must be selected in the dropdown (4). 
Then certificates (in the common certificate and certificate archive formats) can be imported. 
The import always takes place in the currently selected category. 
The individual categories (3) correspond to subfolders from the Windows "local machine" certificate store.

![Manage Certificates Dialog](/assets/images/admin/certificates/managecert2.png)

For the categories (3) applies:
* TrustedPeople - certificates that should be trusted (mostly .cer, .crt, .der,.. files, but can also be .pfx and .p12).
* Rejected - certificates that should be rejected

<div class="box-warning" markdown="1">
All certificates of the Peakboard Box type are then loaded into the respective folder in the Windows certificate store of the Peakboard Box when a visualization is started and removed again when the visualization is stopped.
</div>

<div class="box-tip" markdown="1">
The MQTT and OPC UA certificates are included as a file in the visualization and are used directly by the respective data source without going through the Windows certificate store.
</div>