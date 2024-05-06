---
layout: article
title: SAP Error Messages
menu_title: SAP Error Messages
description: SAP Error Messages
lang: en
weight: 2430
ref: dat-2430
---

<div class="box-warning" markdown="1">
**Important!**

You have to make the settings on your own computer (to use the preview function) **and** on the Peakboard Boxes.
</div>

You may encounter one of the following errors when connecting to SAP:

## ERROR service '?' unknown or service sapms unknown

The problem is that sapdp* (e.g. sapdp00 3200/tcp) entries are missing in the file services in the folder C:\Windows\System32\drivers\etc\services.

To resolve the problem, you must append the following line to the services file. nn is the instance number of the SAP system (e.g. 00 or 99).

`sapms<SID> 36<nn>/tcp`

If your SID is ECC, for example, the line looks like the following:

`sapmsECC 3600/tcp`

For System ID (SID) ECC and instance number 12 set:

`sapmsECC 3612/tcp`

<div class="box-warning" markdown="1">
**Important!**

When inserting into this file, you must ensure that the last entry is always terminated with a return. On some platforms, this can lead to problems as the last entry may not be recognized.
</div>

<div class="box-warning" markdown="1">
**Warning!**

The service file should not be given a suffix. The name should remain services and not become e.g. services.txt.
</div>

After editing the file, you may need to restart the Peakboard Designer.

[SAP note 52959](https://launchpad.support.sap.com/#/notes/52959)

## Editing the service file on the Peakboard Boxes

The following instructions explain how to make the entries in the service file on the Peakboard Boxes.

* Run a local powershell as administrator and enter the following commands:

```
net start WinRM
Set-Item WSMan:\localhost\Client\TrustedHosts -Value <ip-adresse>
Enter-PSSession -ComputerName <ip-adresse> -Credential pbadmin
```

* Move the service file to the Peakboard Box share drive

```
Move-Item -Path C:\Windows\System32\drivers\etc\services -Destination C:\Share
```

* Open the share drive of the Peakboard Box in the file browser

```
\\[name of the Peakboard Boxes, e.g. PB1234]\share
```

* Add entries to the Service file as described above and save the file
* Move the service file back to the original location

```
Move-Item -Path C:\Share\services -Destination C:\Windows\System32\drivers\etc
```
