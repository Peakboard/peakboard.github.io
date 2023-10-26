---
layout: article
title: Eine Peakboard Box zur Domäne hinzufügen inklusive Autostart
menu_title: Peakboard Box zur Domäne hinzufügen + Autostart
description: Eine Peakboard Box zur Domäne hinzufügen inklusive Autostart
lang: de
weight: 252
ref: admin-252
redirect_from:
 - /administration/de-domain-with-powershell.html
---

### Vorbereitungen - Peakboard Box

Um deine Peakboard Box zur Domäne hinzuzufügen muss diese [an einen Bildschirm angeschlossen](/get_started/de-peakboard-box.html) und betriebsbereit sein.
Die Peakboard Box, die zur Domäne hinzugefügt werden soll, muss mindestens Softwareversion 3.5 haben.
Um später Eingaben machen zu können musst du eine Tastatur und eine Maus anschließen.

<div class="box-warning" markdown="1">**Hinweis**

Das Remote Desktop Protocol (RDP) ist auf den Peakboard Boxen standardmäßig deaktiviert.
</div>

### Vorbereitungen - User in der Domäne anlegen

* Der Domänen-Nutzer, der für Autologin und Autostart genutzt werden soll, sollte keine Adminrechte besitzen.
* Der Domänen-Nutzer, der die Peakboard Box administrieren soll, muss im Active Directory der Domäne der Sicherheitsgruppe `PeakboardAdmins` (1) als Mitglied hinzugefügt werden und Domänen-Administrator (2) sein.

![Sicherheitsgruppe](/assets/images/admin/domain/de_domain-09.png)
![Sicherheitsgruppe](/assets/images/admin/domain/de_domain-10.png)

### Peakboard Box Domänenintegration

1. Beginne die Anbindung auf der Oberffläche der Peakboard Box mit den zuvor verbundenen Eingabegeräten. Drücke das Tastenkürzel [Strg + i]. Dadurch öffnet sich in der Visualisierung das Debug Panel.
   ![Debug Panel öffnen](/assets/images/admin/domain/de_domain-01.png)

2. Als nächstes benutzt du das Tastenkürzel [Strg + 7] um das Login-Fenster für die Domäne zu öffnen. Gib dort die aktuellen Zugangsdaten ein (pbadmin + Passwort) und bestätige mit [OK]. Das Passwort wurde per E-Mail an den Empfänger der Bestellung gesendet. Eventuell hast du es bereits geändert, dann nutze das geänderte Passwort.
   ![Login Fenster öffnen](/assets/images/admin/domain/de_domain-02.png)

3. Im nächsten Login-Fenster trägst du nun deine Domänen-Daten und die Login-Daten des Admin-Nutzers den du in den Vorbereitungen erstellt hast ein und bestätigst mit [OK].
   Es erfolgt ein Neustart.
   ![Domänen Daten eintragen](/assets/images/admin/domain/de_domain-03.png)

4. Es öffnet sich der Windows Login-Dialog. Logge dich nun mit dem Domänen-Nutzer ein, der für den Autologin genutzt werden soll. Dieser sollte wie bereits erwähnt keine Adminrechte besitzen.

   <div class="box-warning" markdown="1">**Achtung**

   Folgende Nutzernamen dürfen für die Automatische Nutzeranmeldung nicht verwendet werden: `Peakboard`, `PBadmin`
   </div>

5. Nach dem Login wird automatisch die Eingabeaufforderung geöffnet. Starte aus der Eingabeaufforderung heraus eine Powershell mit dem Befehl `powershell`.
   ![Powershell starten](/assets/images/admin/domain/de_domain-04.png)

6. Fordere mit dem Befehl `Start-Process powershell -Verb runAs` administrative Rechte für die Powershell an. Es öffnet sich ein Anmeldefenster, bei dem du dich mit dem Admin-Nutzer aus Schritt 3, den du in den Vorbereitungen erstellt hast, authentifizieren musst.
   ![Adminrechte für Powershell](/assets/images/admin/domain/de_domain-05.png)

7. Erlaube mit dem Befehl `Set-ExecutionPolicy Bypass -Scope Process` temporär das Ausführen eines Powershell Skripts. Bestätige dazu nach der Eingabe mit [Y].
   ![Temporäre Erlaubnis für Powershell Skript](/assets/images/admin/domain/de_domain-06.png)

8. Starte das Set_Autostart Skript mit dem Befehl `& 'C:\Program Files\Peakboard\ManagementService\OutputFiles\Set_Autostart.ps1'`

9. Trage hier nun die Daten des Domänen-Nutzers ein, der für den Autostart genutzt werden soll. Hier musst du den Nutzer aus Schritt 4 nutzen!
   ![Autostart Nutzer eintragen](/assets/images/admin/domain/de_domain-07.png)

10. Es erfolgt ein Neustart und der automatische Login und Start der Peakboard Runtime. Deine Peakboard Box ist nun mit der Domäne verbunden.

### Die Peakboard Box mit dem Peakboard Designer verbinden

Um deine Peakboard Box zu administrieren musst du diese im Peakboard Designer mit den Zugangsdaten des Domänen-Administrators, also dem Nutzer aus Schritt 3 und 6 hinzufügen.

![Peakboard Box hinzufügen](/assets/images/admin/domain/de_domain-08.png)
