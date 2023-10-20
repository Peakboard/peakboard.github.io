---
layout: article
title: Eine Peakboard Box zur Domäne hinzufügen inklusive Autostart
menu_title: Peakboard Box zur Domäne hinzufügen + Autostart
description: Eine Peakboard Box zur Domäne hinzufügen inklusive Autostart
lang: de
weight: 252
ref: admin-252
draft: true

---

Um deine Peakboard Box zur Domäne hinzuzufügen muss diese [an einen Bildschirm angeschlossen](/get_started/de-peakboard-box.html) und betriebsbereit sein.

1. Beginne die Anbindung mit dem Tastenkürzel [Strg + I]. Dadurch öffnet sich in der Visualisierung das Debug Panel.
   ![Debug Panel öffnen](/assets/images/admin/domain/de_domain-01.png)

2. Als nächstes benutzt du das Tastenkürzel [Strg + 7] um das Login-Fenster für die Domäne zu öffnen. Gib dort die aktuellen Zugangsdaten ein (pbadmin + Passwort) und bestätige mit [OK].
   ![Login Fenster öffnen](/assets/images/admin/domain/de_domain-02.png)

3. Im nächsten Login-Fenster trägst du nun deine Domänen-Daten ein und bestätigst mit [OK].
   Es erfolgt ein Neustart.
   ![Domänen Daten eintragen](/assets/images/admin/domain/de_domain-03.png)

4. Logge dich nun mit dem Domänen-Nutzer ein, der für den Autologin genutzt werden soll.

   <div class="box-warning" markdown="1">**Achtung**
   Folgende Nutzernamen dürfen für die Automatische Nutzeranmeldung nicht verwendet werden: `Peakboard`, `PBadmin`
   </div>

5. Starte aus der Eingabeaufforderung heraus eine Powershell mit dem Befehl `powershell`.
   ![Powershell starten](/assets/images/admin/domain/de_domain-04.png)

6. Fordere mit dem Befehl `Start-Process powershell -Verb runAs` administrative Rechte für die Powershell an. Hier musst du dich nun mit einem Domänen-Nutzer authetifizieren der administrative Rechte besitzt.
   ![Adminrechte für Powershell](/assets/images/admin/domain/de_domain-05.png)

7. Erlaube mit dem Befehl `Set-ExecutionPolicy Bypass -Scope Process` temporär das Ausführen eines Powershell Skripts. Bestätige dazu nach der Eingabe mit [Y].
   ![Temporäre Erlaubnis für Powershell Skript](/assets/images/admin/domain/de_domain-06.png)

8. Starte das Set_Autostart Skript mit dem Befehl `& 'C:\Program Files\Peakboard\ManagementService\OutputFiles\Set_Autostart.ps1'`

9. Trage hier nun die Daten des Domänen-Nutzers ein, der für den Autostart genutzt werden soll.
   ![Autostart Nutzer eintragen](/assets/images/admin/domain/de_domain-07.png)

10. Es erfolgt ein Neustart und der automatische Login und Start der Peakboard Runtime

Um deine Box zu administrieren musst du diese im Peakboard Designer mit den Zugangsdaten des Domänen-Administrators hinzufügen.

![Peakboard Box hinzufügen](/assets/images/admin/domain/de_domain-08.png)
