---
layout: article
title: Hinzufügen eines Zertifikats
menu_title: Hinzufügen eines Zertifikats
description: Hinzufügen eines Zertifikats
lang: de
weight: 900
ref: admin-900
redirect_from:
  - /administration/09-de-zertifikats.html
---

Als erstes muss das Zertifikat als Datei auf dem Dateisystem vorliegen.

Am einfachsten speichern kann man es zum Beispiel aus Chrome heraus.

Dort auf die HTTPS-Webseite gehen; Strg+Umschalt+I und dort im Reiter "Security" das Zertifikat anzeigen lassen.

Von dort aus kann man im Tab "Details" in eine Datei speichern. `DER (*.cer)` ist für diesen Fall ausreichend.

![Zertifikat Details](/assets/images/admin/certificates/zertifikat-details2.png)

Die exportierte Datei nun auf die Peakboard-Box kopieren.

Dafür im Windows-Explorer auf die Freigabe \\\<ip-adresse-peakboard-box>\Share zugreifen und dort ablegen.  
Statt der IP-Adresse kann natürlich auch der Hostname der Box verwendet werden.

Benutzername und Passwort des PBAdmin eingeben.

![Window Explorer](/assets/images/admin/certificates/windows-explorer.png)

Dann via PowerShell mit der Peakboard-Box verbinden.

Lokal eine PowerShell als Administrator ausführen

* net start WinRM
* Set-Item WSMan:\localhost\Client\TrustedHosts -Value \<ip-adresse\>
* Enter-PSSession -ComputerName \<ip-adresse\> -Credential pbadmin

Wenn die Verbindung steht, das Zertifikat in den Zertifikatspeicher importieren:

* $cert = "c:\users\public\demo.cer"
* Import-Certificate -FilePath $cert -CertStoreLocation Cert:\LocalMachine\Root

![PowerShell](/assets/images/admin/certificates/powershell.png)

Nun sollte das Zertifikat beim Aufruf automatisch als vertrauenswürdig eingestuft werden.

Voraussetzung ist allerdings, dass es ansonsten ein korrekt ausgestelltes Zertifikat ist, d.h. es darf nicht mehr mit SHA-1 erstellt worden sein und der Hostname des Servers aus der URL, muss mit dem Namen im Zertifikat übereinstimmen.