---
layout: article
title: Access to Peakboard via Peakboard Designer no longer possible after Windows Update
menu_title: Access to Peakboard via Peakboard Designer no longer possible after Windows Update
description: Access to Peakboard via Peakboard Designer no longer possible after Windows Update
lang: en
weight: 1500
ref: admin-1500
redirect_from:
  - /administration/15-en-Access-after-Update.html
---

The Windows IoT Core Update from 1803 to 1809 blocks the connection via the Peakboard Designer and access to the device portal.
## Script File
This workaround is necessary to enable access again. The PowerShell script required for this can be downloaded [here](https://peakboard.com/download/fixes/Peakboard-WinUpdate-Repair.zip) and then executed.

**Alternatively, the following commands can also be executed manually:**

## Manual Input
First, a connection to the box must be established via PowerShell.
Start Windows Remote Administration Service on the client PC.

```
net start WinRM
```

Add the IP address of the Peakboard box as a trusted host:

```
Set-Item WSMan:\localhost\Client\TrustedHosts -Value <ip>
```

Start the PowerShell session to the box:

```
Enter-PSSession -ComputerName <ip/hostname> -Credential localhost\administrator
```

Then enter this command into Powershell and confirm:

```
netsh advfirewall firewall add rule name="Deviceportal" dir=in action=allow protocol=TCP localport=8080
```

Now the access via the Peakboard Designer should work again and the device portal should be accessible again.
