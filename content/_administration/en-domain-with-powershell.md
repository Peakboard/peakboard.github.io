---
layout: article
title: Add a Peakboard Box to the domain including autostart
menu_title: Add Peakboard Box to domain + autostart
description: Add a Peakboard Box to the domain including autostart
lang: en
weight: 252
ref: admin-252

---

To add your Peakboard Box to the domain it must be [connected to a screen](/get_started/en-peakboard-box.html) and operational.

Other requirements for the procedure described below:

* The Peakboard Box to be added to the domain must have at least software version 3.5.
* The domain user who will administrate the Peakboard Box must be added as a member of the `PeakboardAdmins` security group in the domain's Active Directory and be a domain administrator.
* The domain user to be used for autologin and autostart should not have admin rights.

![Security Group](/assets/images/admin/domain/en_domain-09.png)
![Security group](/assets/images/admin/domain/en_domain-10.png)

1. Start the connection with the keyboard shortcut [Ctrl + I]. This will open the debug panel in the visualization.
   ![Open debug panel](/assets/images/admin/domain/en_domain-01.png)

2. Next, use the keyboard shortcut [Ctrl + 7] to open the login window for the domain. Enter the current login data (pbadmin + password) and confirm with [OK].
   ![Open login window](/assets/images/admin/domain/en_domain-02.png)

3. In the next login window, enter your domain data and the login data of the admin user and confirm with [OK].
   A restart is performed.
   ![Enter domain data](/assets/images/admin/domain/en_domain-03.png)

4. Now log in with the domain user that should be used for the autologin. As already mentioned, this user should not have admin rights.

   <div class="box-warning" markdown="1">**Caution**.
   The following usernames must not be used for the autologin: `Peakboard`, `PBadmin`.
   </div>

5. From the command prompt, start a powershell with the command `powershell`.
   ![Start powershell](/assets/images/admin/domain/en_domain-04.png)

6. Request administrative rights for the powershell with the command `start-process powershell -Verb runAs`. You have to authenticate yourself with a domain user that has administrative rights, i.e. the user from step 3.
   ![Admin rights for powershell](/assets/images/admin/domain/en_domain-05.png)

7. Use the command `Set-ExecutionPolicy Bypass -Scope Process` to temporarily allow the execution of a powershell script. To do this, confirm with [Y] after entering the command.
   ![Temporary permission for Powershell script](/assets/images/admin/domain/en_domain-06.png)

8. Start the Set_Autostart script with the command `& 'C:\Program Files\Peakboard\ManagementService\OutputFiles\Set_Autostart.ps1'`

9. Now enter the data of the domain user which should be used for the autostart. Here you have to use the user from step 4!
   ![Enter autostart user](/assets/images/admin/domain/en_domain-07.png)

10. A reboot and the automatic login and start of the Peakboard Runtime will take place.

To administer your Peakboard Box you have to add it in the Peakboard Designer with the credentials of the domain administrator, i.e. the user from steps 3 and 6.

![Add Peakboard Box](/assets/images/admin/domain/en_domain-08.png)
