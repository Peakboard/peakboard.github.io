---
layout: article
title: Hinzufügen eines Zertifikats
menu_title: Hinzufügen eines Zertifikats
description: Hinzufügen eines Zertifikats
lang: de
ref: admin-09
---

Als erstes muss das Zertifikat als Datei auf dem Dateisystem vorliegen.

Am einfachsten speichern kann man es zum Beispiel aus Chrome heraus.

Dort auf die https-Seite gehen; Strg+Umschalt+I und da im Reiter „Security“ das Zertifikat anzeigen lassen.

Von dort aus kann man im Tab „Details“ in eine Datei speichern. `DER ( * .cer )` ist für diesen Fall ausreichend.

![image_1](/assets/images/admin/certificates/cert_01.png)

Die exportierte Datei nun auf das Gerät kopieren.

Dafür im Windows-Explorer auf die Admin-Freigabe \\<ip>\c$ zugreifen und z.B. in dem Ordner c:\users\public\ ablegen.

Benutzername und Passwort des Administrators eingeben.

![image_1](/assets/images/admin/certificates/cert_02.png)

Dann via PowerShell mit dem Gerät verbinden.

Lokal eine PowerShell als Administrator ausführen

* net start WinRM
* Set-Item WSMan:\localhost\Client\TrustedHosts -Value <ip-adresse>
* Enter-PSSession -ComputerName <ip-adresse> -Credential localhost\administrator

Wenn die Verbindung steht, das Zertifikat in den Zertifikatspeicher importieren:

* $cert = „c:\users\public\demo.cer“
* Import-Certificate -FilePath $cert -CertStoreLocation Cert:\LocalMachine\Root

![image_1](/assets/images/admin/certificates/cert_03.png)

Nun sollte das Zertifikat beim Aufruf automatisch als vertrauenswürdig eingestuft werden.

Voraussetzung ist allerdings, dass es ansonsten ein korrekt ausgestelltes Zertifikat ist, d.h. es darf nicht mehr mit SHA-1 erstellt worden sein und der Hostname des Servers aus der URL, muss mit dem Namen im Zertifikat übereinstimmen.
