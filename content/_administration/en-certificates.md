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

The certificate management contains all certificates of an application and allows you to manage them. This also includes the certificates for [OPC UA](/data_sources/OPCUA/en-opc-ua.html) or [MQTT](/data_sources/en-mqtt-broker.html).

## Manage certificates

Open the dialog in the Peakboard Designer by clicking on the project settings (1) in the menu bar and on the menu item [Certificates] (2).

![Manage certificates](/assets/images/admin/certificates/en_certificates-01.png)

In the [Manage certificates] dialog, you can filter the existing certificates. In the left-hand area (1), select the area of use for which certificates are to be displayed. In the upper area (2) you can select and deselect which certificate categories should be displayed. You can use the Action column to move certificates to another certificate store category or delete them completely using the drop-down menu (3).

![Manage certificates dialog](/assets/images/admin/certificates/en_certificates-02.png)

## Import certificates

To import a certificate, click on the [Import] button (1) at the bottom left. Another dialog opens in which you can select the path of a certificate (2), specify its intended use (3) and select the appropriate certificate store (4). The selectable categories correspond to subfolders from the Windows local machine certificate store. You can import certificates in the common certificate and certificate archive formats.

![Import certificates](/assets/images/admin/certificates/en_certificates-03.png)

The following applies to the certificate store categories:

* TrustedPeople - Certificates that should be trusted (usually .cer, .crt, .der,... files, but can also be .pfx and .p12)
* Disallowed - Certificates that should be rejected

<div class="box-tip" markdown="1"> **Hint:**
All certificates of the Peakboard Box type are loaded into the respective folder in the Windows certificate store of the Peakboard Box when an application is started and are removed again when the application is stopped.
</div>

<div class="box-warning" markdown="1"> **Attention!
The MQTT and OPC UA certificates are included with the application as a file and are used directly by the respective data source.
</div>
