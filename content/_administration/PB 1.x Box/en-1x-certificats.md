---
layout: article
title: Add a certificate
menu_title: Add a certificate
description: Add a certificate
lang: en
weight: 900
ref: pb1-admin-900
redirect_from:
  - /administration/09-en-certificats.html
---

First, the certificate must exist as a file on the file system.

The easiest way to save it is for example from Chrome.



Go to the https page there; Ctrl+Shift+I and then display the certificate in the "Security" tab.

From there you can save to a file in the tab "Details". `DER (*.cer)` is sufficient for this case.

![Zertifikat Details](/assets/images/admin/certificates/zertifikat-details.png)

Copy the exported file to the device.

To do this, access the admin share \\\\<ip\>\c$ in Windows Explorer and store it in the folder c:\users\public\, for example.

Enter the user name and password of the administrator.

![Window Explorer](/assets/images/admin/certificates/windows-explorer.png)

Then connect to the device via PowerShell.

Running a PowerShell locally as an administrator

* net start WinRM
* Set-Item WSMan:\localhost\Client\TrustedHosts -Value \<ip-address\>
* Enter-PSSession -ComputerName \<ip address\> -Credential localhost\administrator

When connected, import the certificate into the certificate store:

* $cert = "c:\users\public\demo.cer"
* Import Certificate -FilePath $cert -CertStoreLocation Cert:\LocalMachine\Root

![PowerShell](/assets/images/admin/certificates/powershell.png)

Now the certificate should automatically be classified as trustworthy when invoked.

However, the prerequisite is that it is otherwise a correctly issued certificate, i.e. it must no longer have been created with SHA-1 and the host name of the server from the URL must match the name in the certificate.
