---
layout: article
title: Ressourcen
menu_title: Ressourcen
description: Ressourcen
lang: de
weight: 100
ref: resources-100
redirect_from:
  - /misc/de-ressourcen.html
  - /misc/01-de-ressourcen.html
---

Die Ressourcen sind neben den Screens und Data Sources die dritte Säule einer Peakboard-Visualisierung.
Eine Ressource kann alles Mögliche sein, was an Zusatzmaterial für eine Visualisierung benötigt wird: *Bilder, Schriftarten, Datendateien (z.B. Excel)*. 
Im einfachsten Fall wird die jeweilige Ressource direkt, statisch im Peakboard Projekt hinterlegt. 
Eine Ressource kann aber auch dynamisch sein und zum Beispiel über eine **URL** abgerufen werden, in einem **Cloud-Speicher** liegen (Dropbox, Google Drive, OneDrive) oder auf einem **freigegebenen Laufwerk** innerhalb desselben Netzes (Netzwerk-Ressource). 
Alle diese Optionen werden in diesem Artikel erklärt, in der Reihenfolge, wie sie im Menü erscheinen (siehe folgender Screenshot).

![Ressourcen-Übersicht](/assets/images/misc/Ressources/resources_de.png)

## Lokale Ressource
Eine **Lokale Ressource** ist einfach nur eine statische Datei: Eine Excel-Datei, ein Bild etc., das direkt vom Dateisystem in den *Explorer* eingefügt wird, dort dann statisch vorliegt und nicht mehr verändert wird.

## Netzwerk-Ressource
Mit der Peakboard Box kann direkt über einen Domänen-User auf freigegebene Netzwerk-Dateien zugegriffen werden.

## Web-Ressource
Die **Web-Ressource** ist denkbar einfach erklärt: Hinterlege einfach die gewünschte URL (1), bei Bedarf mit einer Authentifizierung (2), falls die Ressource eine explizite Authentifizierung erfordert.

![Web-Ressource](/assets/images/misc/Ressources/web-resource_de.png)

## Cloud-Ressource: Dropbox, OneDrive, Google Drive, Sharepoint
Um eine Ressource aus einem Cloudspeicher zu laden, musst du Peakboard erlauben, auf deinen Cloudspeicher zuzugreifen. Ein entsprechendes Fenster öffnet sich. Bitte beachte: Deine Zugangsdaten zu deinem Cloudspeicher werden NICHT im Peakboard Designer oder auf der Peakboard Box gespeichert, sondern lediglich ein Zugriffstoken. Wenn du diese Erlaubnis rückgängig machen willst, gehe einfach in die Einstellungen deines Cloudspeicher-Accounts. Dort ist der Zugriff gelistet und kann gelöscht werden. Das ist ein übliches Verfahren, um Drittanbietern Zugriff auf einen Cloudspeicher zu ermöglichen.

Die folgenden Screenshots zeigen exemplarisch die Anmeldung bei Google Drive und danach die Dateiauswahl. Im Peakboard Designer wird eine Kopie der Datei abgelegt für den Preview. Im Echtlauf (auf der Peakboard Box) wird die Datei aber aus dem Cloudspeicher erneuert. Der Content ist also nicht statisch, sondern dynamisch mit der Originaldatei verbunden.
![Google Drive Login](/assets/images/misc/Ressources/drive-login_01.png)
![Google Drive Login](/assets/images/misc/Ressources/drive-login_02.png)
![Google Drive Login](/assets/images/misc/Ressources/drive-login_03_de.png)
![Dateiübersicht](/assets/images/misc/Ressources/file-overview_de.png)

## Ressourcen-Ordner
Wenn die Anzahl der Ressourceneinträge steigt, macht es Sinn, Ressourcen in Verzeichnissen zu organisieren. Du kannst die Dateien einfach per Drag and Drop in ein Unterverzeichnis ablegen.

![Ressourcen-Ordner](/assets/images/misc/Ressources/resource-folder_de.png)
