---
layout: article
title: Ressourcen
menu_title: Ressourcen
description: Ressourcen
lang: de
weight: 100
ref: misc-100
redirect_from:
  - /misc/01-de-ressourcen.html
---

Die Ressourcen sind neben den Screens und Data Sources die dritte Säule einer Peakboard-Visualisierung.
Eine Ressource kann alles Mögliche sein, was an Zusatzmaterial für eine Visualisierung benötigt wird: *Bilder, Schriftarten, Datendateien (z.B. Excel)*. 
Im einfachsten Fall wird die jeweilige Ressource direkt, statisch im Peakboard Package hinterlegt. 
Eine Ressource kann aber auch dynamisch sein und zum Beispiel über eine **URL** abgerufen werden, in einem **Cloud-Speicher** liegen (Dropbox, Google Drive, OneDrive) oder auf einem **freigegeben Laufwerk** innerhalb desselben Netzes (Bridge Resource/ Network Share Resource). 
Alle diese Optionen werden in diesem Artikel erklärt, in der Reihenfolge, wie sie im Menü erscheinen (siehe folgender Screenshot).

![image_1](/assets/images/misc/Ressources/Resources_01.png)

## Local Resource

**Local Resource** ist einfach nur eine statische Datei: Eine Excel-Datei, ein Bild etc., das direkt vom Dateisystem in den *Explorer* eingefügt wird, dort dann statisch vorliegt und nicht mehr verändert wird.

## Bridge Resource
Veraltete Alternative zu Network Share Resource.

## Network Share Resource
Mit [Peakboard 2 Boxen](https://help.peakboard.com/misc/de-pb2.html) kann direkt über einen Domän-User auf freigegebene Netzwerk-Dateien zugegriffen werden.

## Web Resource

Die **Web Resource** ist denkbar einfach erklärt: Hinterlegen Sie einfach die gewünschte URL, bei Bedarf mit einer Authentifizierung, falls sich die Ressource eine explizite Authentifizierung erfordert.

![image_1](/assets/images/misc/Ressources/Resources_03.png)


## Cloud Resource: Dropbox, OneDrive, Google Drive

Um eine Ressource aus einem Cloudspeicher zu laden, müssen Sie erst Peakboard erlauben, auf Ihren Cloudspeicher zuzugreifen. Ein entsprechendes Fenster öffnet sich. Bitte beachten: Ihre Zugangsdaten zu Ihrem Cloudspeicher werden NICHT im Designer oder auf der Peakboard Box gespeichert, sondern lediglich ein Zugriffstoken. Wenn Sie diese Erlaubnis rückgängig machen wollen, gehen Sie einfach in die Settings Ihres Cloudspeicher-Accounts. Dort ist der Zugriff gelistet und kann gelöscht werden. Das ist ein übliches Verfahren, um Drittanbietern Zugriff auf einen Cloudspeicher zu ermöglichen.

Die folgenden Screenshots zeigen exemplarisch die Anmeldung bei Dropbox und danach die Dateiauswahl. Im Designer wird eine Kopie der Datei abgelegt für den Preview. Im Echtlauf (auf der Peakboard Box) wird die Datei aber aus dem Cloudspeicher erneuert. Der Content ist also nicht statisch, sondern dynamisch mit der Originaldatei verbunden.
![image_1](/assets/images/misc/Ressources/Resources_04.png)
![image_1](/assets/images/misc/Ressources/Resources_05.png)

## Resource Folder

Wenn die Anzahl der Ressourceneinträge steigt, macht es Sinn, Ressourcen in Verzeichnissen zu organisieren. Sie können die Dateien einfach per Drag and Drop in ein Unterverzeichnis ablegen.

![image_1](/assets/images/misc/Ressources/Resources_06.png)
