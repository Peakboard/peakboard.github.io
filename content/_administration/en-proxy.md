---
layout: article
title: Setting up a proxy server
menu_title: Setting up a proxy server
description: Setting up a proxy server
lang: en
weight: 400
ref: admin-400
redirect_from:
 - /administration/04-en-internet-setup.html
 - /administration/en-internet-setup.html
---

Whether you want to ensure data security, require access to geo-restricted content, implement company and security guidelines or operate bandwidth management. There are many reasons to use a proxy server.
If you want to use a proxy server for the Internet connection of your Peakboard Box, you can specify this in the Peakboard Box settings in the Peakboard Designer.

To do this, first [add your Peakboard Box to the Peakboard Designer](https://help.peakboard.com/administration/en-adding.html). Then open the Peakboard Box settings (1).

Open [Peakboard Box settings](/assets/images/admin/proxy/en_proxy-01.png)

Select the desired Peakboard Box in the left-hand area (1). In the [Connections] tab (2), you will find the [Proxy server] section at the bottom.
Activate the checkbox (3) to display the options for the proxy settings.
Then enter the address of the proxy server (4) and, if available, the bypass list (5) and specify whether it should be used for local addresses or not (6).

![Proxy settings](/assets/images/admin/proxy/en_proxy-02.png)

### Web-Proxy mit Passwortabfrage

If your organization's web proxy requires a user login and is set up to accept basic authentication (username and password), you will need to save your login credentials before you can use your web proxy.

<div class="box-tip" markdown="1">
Make sure that you have set up your proxy in advance via the Peakboard Designer on your Peakboard Box.
</div>

1. Connect a keyboard and mouse to your Peakboard Box.
2. Press Ctrl + Alt + Del on your keyboard to log out your Peakboard user.
3. Log in with the access data for the PBAdmin user.
4. After logging in you will only see a command line, in this you have to enter "explorer" and confirm with Enter.
5. As soon as you see a complete Windows desktop, press Win + R
6. Enter the following value in the window that opens and confirm with Enter or OK:

```cmd
control /name Microsoft.CredentialManager 
```

![Call MS Credential Manager](/assets/images/admin/proxy/en_proxy-03.png)

7. Select Windows Credentials. (1)
8. Click on Add a generic credential. (2)

![Select Windows Credential](/assets/images/admin/proxy/en_proxy-04.png)

9. Enter the host name or IP address of your web proxy (without port) at Internet or network address.
10. Enter the user name and password.
11. Click on OK.

![Enter credentials](/assets/images/admin/proxy/en_proxy-04.png)

12. restart your Peakboard Box.


### Set up web proxy with password request via PowerShell

If you cannot access your Peakboard Box via keyboard and mouse but your organization allows PowerShell connections to the Peakboard Box, you can also make the setting remotely in this way.

<div class="box-warning" markdown="1">
**Important!

Run PowerShell as administrator to restart your Peakboard Box.
</div>

Enter the following commands and confirm each of them with [Enter].

Use this command to open the remote connection setting:

```powershell
net start WinRM
```

Enter the IP address of the Peakboard Box without [&lt;&gt;]. For example -Value 192.168.0.1:

```powershell
Set-Item WSMan:\localhost\Client\TrustedHosts -Value <IP-Adresse der Peakboard Box>
```

If the following text appears, acknowledge it with [Y].

```powershell
Use this command to change the TrustedHosts list for the WinRM client. The computers in the TrustedHosts list may not be able to be authenticated. The client may be sending credentials to these computers.
Are you sure you want to change this list?
[Y] Yes [N] No [H] Stop [?] Help (default is "Y"):
```

Now connect to the Peakboard Box.

```powershell
Enter-PSSession -ComputerName <IP address of the Peakboard Box> -Credential <Name of the Peakboard Box>\pbadmin
```

Set up the web proxy.

```powershell
$cred = Get-Credential
$user = $cred.UserName
$pass = $cred.GetNetworkCredential().Password
$proxy = "proxy.my.company"

cmdkey /add:$proxy /user:$user /pass:$pass
```

Restart the Peakboard Box.

```powershell
restart-computer <IP address of the Peakboard Box> -force
```