---
layout: article
title: Peakboard Box - Join Domain via Powershell
menu_title: Peakboard Box - Join Domain via Powershell
description: Peakboard Box - Join Domain via Powershell
lang: en
weight: 252
ref: admin-252
draft: true

---

Before you start, save your license via the Peakboard Designer. Open the Peakboard Box Settings, select your desired Peakboard Box (1) and copy the license key (2) in the [General] (3) section.

![Save license](/assets/images/admin/domain/domain-powershell_01_en.png)

<div class="box-warning" markdown="1">
**Important!**

Run PowerShell as administrator to reboot your Peakboard Box.
</div>

Please enter the following commands and confirm each of them with [Enter].

Use this command to open the remote connection setting:

```powershell
net start WinRM
```

Enter the IP address of the Peakboard Box without [&lt;&gt;]. For example -Value 192.168.0.1:

```powershell
Set-Item WSMan:\localhost\Client\TrustedHosts -Value <IP-address of the Peakboard Box>
```

If the following text appears, press [y] to acknowledge it.

```powershell
Use this command to change the TrustedHosts list for the WinRM client. The computers in the TrustedHosts list may not be authenticated. The client may send credentials to these computers.
Are you sure you want to change this list?
[Y] Yes [N] No [H] Stop [?] Help (default is "Y"): 
```

Now connect the Peakboard Box.

```powershell
Enter-PSSession -ComputerName <IP address of the Peakboard Box> -Credential pbadmin
```

Log out the Peakboard user remotely.

```powershell
logoff 1
```

Disable automatic login after startup.

```powershell
$RegistryPath = 'HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon'
Remove-ItemProperty -Path $RegistryPath -Name 'AutoAdminLogon' -Force
Remove-ItemProperty -Path $RegistryPath -Name 'AutoLogonCount' -Force
Remove-ItemProperty -Path $RegistryPath -Name 'AutoLogonSID' -Force
Remove-ItemProperty -Path $RegistryPath -Name 'DefaultPassword' -Force
Remove-ItemProperty -Path $RegistryPath -Name 'DefaultUserName' -Force
```

Add the Peakboard Box to the domain.

```powershell
Add-Computer -DomainName domain.local -Credential domain\<domainadmin-user>
```

After joining the domain, you need to set up an appropriate Active Directory user for the AutoLogon.
To this user you have to add the following file to the autostart: [C:\Program Files\Peakboard\Runtime\Peakboard.Runtime.Wpf]

Now you have to restart the Peakboard Box, by confirming the restart request. Then delete the Peakboard Box in the Peakboard Box Settings from the Peakboard Designer (4).

![Re-add Peakboard Box](/assets/images/admin/domain/domain-powershell_02_en.png)

Finally, you can re-add the Peakboard Box to the Peakboard Designer (5). To do this, use the previously saved license key with the user name [pbadmin]. If this does not work, the user must be activated by a domain administrator with a new password.
