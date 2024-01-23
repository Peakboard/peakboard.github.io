---
layout: article
title: Cloud resources
menu_title: Cloud resources
description: Cloud resources
lang: en
weight: 500
ref: resources-500
redirect_from:
---

To load a resource from a cloud storage, you must allow Peakboard access to your cloud storage.
In contrast to the [local resource](/resources/en-resources-local.html), a cloud resource is not statically but dynamically linked to the original file.

The following cloud storage providers are currently supported

* Dropbox
* Google Drive
* OneDrive
* SharePoint

### Add a SharePoint cloud resource

Right-click on [Resources], select [Add cloud resource] and then select the desired cloud storage provider (1).

![Add cloud resource](/assets/images/resources/en_resources-cloud-01.png)

A window opens to set up the authorization. Here you must authenticate yourself with your provider's access data.

<div class="box-warning" markdown="1">
**Important note**

Your access data to your cloud storage is NOT stored in the Peakboard Designer or on the Peakboard Boxes, but only an access token. If you want to revoke this permission, simply go to the settings of your cloud storage account. The access is listed there and can be deleted. This is a common procedure for granting third-party providers access to cloud storage.
</div>

![Authorize access](/assets/images/resources/en_resources-cloud-02.png)

After the login process, you will be taken to the file selection. In this window, select the desired file from the file structure (1) and define the reload interval (2) at which the file is updated.

![Select file](/assets/images/resources/en_resources-cloud-03.png)

The resource is now displayed in the Explorer.
You can right-click the cloud resource to edit (1), copy (2), delete (3) or display where you are currently using the resource in your project (4).

![Manage cloud resource](/assets/images/resources/en_resources-cloud-04.png)
