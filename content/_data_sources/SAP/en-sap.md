---
layout: article
title: SAP
menu_title: SAP
description: Information about SAP Data in Peakboard
lang: en
weight: 2400
ref: dat-2400
redirect_from:
  - /data_sources/SAP/10-en-sap.html
---

The connection to SAP is established via Direct RFC.
Here the Peakboard box communicates directly with an SAP application server.
Without middleware and without the need to configure major things on SAP.

<div class="box-tip" markdown="1">**Note**

Connection via SAP Gateway is no longer recommended and is not supported by the Peakboard Designer by default.
All data relevant for Peakboard can be most easily connected via Direct RFC.
</div>

To connect the SAP data source, select the [SAP] data source under [Add Data Source]. (1)

![Add SAP Data](/assets/images/data-sources/sap/en_SAP-add.png)

In the following dialog you can choose between a Single Application Server and Load Balancing.
The corresponding fields in the [Connection] area must be filled in with the SAP logon data of an RFC user. (2) This can be a normal dialog user, or a service user. For security reasons, SAP recommends the use of a service user where the password does not expire. If no user of this type exists, it must be created in advance.

The actual access to SAP is formulated via an XQL statement.
To avoid having to enter the XQL statement completely by hand, you can insert a template via the [Template] button . (3)
The screenshot shows a instruction for a simple SAP table. More information and examples about XQL can be found in the section [SAP with XQL](/data_sources/SAP/en-xql.html).

To check the plausibility of the data, click on the [Load Data] button to generate a preview. (4)

![Configure SAP data](/assets/images/data-sources/sap/en_SAP-config-01.png)

Then confirm the creation of the data source by clicking on the [OK] button. (5)

![Configure SAP data](/assets/images/data-sources/sap/en_SAP-config-02.png)
