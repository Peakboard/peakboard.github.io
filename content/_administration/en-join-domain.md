---
layout: article
title: Add a Peakboard Box to the domain including autostart
menu_title: Add Peakboard Box to domain + autostart
description: Add a Peakboard Box to the domain including autostart
lang: en
weight: 252
ref: admin-252
redirect_from:
 - /administration/en-domain-with-powershell.html
---

### Preparations - Peakboard Boxes

To add your Peakboard Box to the domain, it must be [connected to a screen](/get_started/en-peakboard-box.html) and operational.
The Peakboard Box to be added to the domain must have at least software version 3.5.
In order to be able to make inputs later you must connect a keyboard and a mouse.

<div class="box-warning" markdown="1">**Note**.

The Remote Desktop Protocol (RDP) is disabled by default on Peakboard Boxes.
</div>

### Preparations - Create users in the domain

* The domain user that will be used for autologin and autostart should not have admin rights.
* The domain user who is going to administrate the Peakboard Box must be added as a member of the security group `PeakboardAdmins` (1) in the Active Directory of the domain and be a domain administrator (2).

![Security group](/assets/images/admin/domain/en_domain-09.png)
![Security group](/assets/images/admin/domain/en_domain-10.png)

### Peakboard Box domain integration

1. Start the connection in the Peakboard Box interface with the previously connected input devices. Press the keyboard shortcut [Ctrl + i]. This will open the Debug Panel in the visualization.
   ![Open debug panel](/assets/images/admin/domain/en_domain-01.png)

2. Next, use the keyboard shortcut [Ctrl + 7] to open the login window for the domain. Enter the current login data (pbadmin + password) and confirm with [OK]. The password has been sent by e-mail to the recipient of the order. Maybe you have already changed it, then use the changed password.
   ![Open login window](/assets/images/admin/domain/en_domain-02.png)

3. In the next login window enter your domain data and the login data of the admin user you created in the preparations and confirm with [OK].
   A restart will follow.
   [Enter domain data](/assets/images/admin/domain/en_domain-03.png)

4. The Windows login dialog opens. Now log in with the domain user that should be used for the autologin. As already mentioned, this user should not have admin rights.

   <div class="box-warning" markdown="1">**Caution**.

   The following usernames must not be used for the autologin: `Peakboard`, `PBadmin`.
   </div>

5. After login, the command prompt will be opened automatically. Run a powershell from the command prompt with the command `powershell`.
   ![Start powershell](/assets/images/admin/domain/en_domain-04.png)

6. Request administrative rights for the Powershell with the command `start-process powershell -Verb runAs`. A login window will open where you have to authenticate with the admin user from step 3 that you created in the preparations.
   ! [Admin rights for powershell](/assets/images/admin/domain/en_domain-05.png)

7. Temporarily allow the execution of a powershell script with the command `Set-ExecutionPolicy Bypass -Scope Process`. To do this, confirm with [Y] after entering the command.
   ![Temporary permission for powershell script](/assets/images/admin/domain/en_domain-06.png)

8. Start the Set_Autostart script with the command `& 'C:\Program Files\Peakboard\ManagementService\OutputFiles\Set_Autostart.ps1'`

9. Now enter the domain user data, which should be used for the autostart. You have to use the user from step 4!
   ![Enter autostart user](/assets/images/admin/domain/en_domain-07.png)

10. A reboot and the automatic login and start of the Peakboard runtime will take place. Your Peakboard Box is now connected to the domain.

### Connecting the Peakboard Box to the Peakboard Designer

To administer your Peakboard Box you have to add it in the Peakboard Designer with the credentials of the domain administrator, i.e. the user from steps 3 and 6.

![Add Peakboard Box](/assets/images/admin/domain/en_domain-08.png)
