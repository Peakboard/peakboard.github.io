---
layout: article
title: Adding a certificate to the certificate management
menu_title: Adding a certificate to the certificate management
description: Adding a certificate to the certificate management
lang: en
weight: 900
ref: admin-900
redirect_from:
  - /administration/09-en-certificats.html
  - /administration/en-certificats.html
---
The certificate management contains all certificates of a visualization and allows you to manage them. 
This also includes the certificates for [OPC UA](/data_sources/OPCUA/en-opc-ua.html) or [MQTT](/data_sources/en-mqtt-broker.html).

Open the dialog under [Settings] and [Manage Certificates] in the Peakboard Designer.
![Manage Certificates](/assets/images/admin/certificates/managecert1.png)

You can also load certificates into the Windows certificate store on the Peakboard Box. 
Select [Peakboard Box] (4) in the dropdown menu. 
Then you can import certificates in the common certificate or certificate archive formats. 
The import always takes place within the currently selected category. 
The individual categories (3) correspond to subfolders from the Windows "local machine" certificate store.

![Manage Certificates Dialog](/assets/images/admin/certificates/managecert2.png)

For the categories (3) the following applies:
* TrustedPeople - certificates that can be trusted (mostly .cer, .crt, .der,.. files, but can also be .pfx and .p12).
* Rejected - certificates that should be rejected

<div class="box-warning" markdown="1"> **Hint:**
All certificates of the type Peakboard Box are uploaded to the respective folder in the Windows certificate store of the Peakboard Box when a visualization is started and removed again when the visualization is stopped.
</div>

<div class="box-tip" markdown="1"> **Attention!**
The MQTT and OPC UA certificates are included in the visualization as a file and are used directly by the respective data source.
</div>