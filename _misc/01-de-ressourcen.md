---
layout: article
title: Ressourcen
menu_title: Ressourcen
description: Ressourcen
lang: de
ref: misc-001
---

Die Ressourcen sind neben den Screens und Data Sources die dritte Säule einer Peakboard-Visualisierung. Eine Ressource kann alles mögliche sein, was an Zusatzmaterial für eine Visualisierung benötigt wird: Bilder, Schriftarten, Scripte, Datendateien (z.B. Excel). Im einfachsten Fall wird die jeweilige Ressource direkt, statisch im Peakboard Package hinterlegt. Eine Ressource kann aber auch dynamisch sein und zum Beispiel über eine URL abgerufen werden, in einem Cloud-Speicher liegen (Dropbox, Google Drive, OneDrive) oder auf einem freigegeben Laufwerk innerhalb des selben Netzes (Bridge Resource). Alle diese Optionen werden in diesem Artikel erklärt, in der Reihenfolge, wie sie im Menü erscheinen (siehe folgender Screenshot).

![image_1](/assets/images/misc/Ressources/Resources_01.png)

## Script

Der Menupunkt Add Script fügt eine neue, leere Scriptdatei hinzu. Sie kann dann manuell im Lua-Editor beschrieben werden. Üblicherweise nutzt man diese Technik, um dort allgemeine Funktionen abzulegen, die von vielen anderen LUA-Scripten erreichbar sind.

## Local Resource

Local Resource ist einfach nur eine statische Datei: Ein Script, eine Excel-Datei, ein Bild etc., das direkt von der Dateisystem in das Package eingefügt wird und dann dort statisch vorliegt und nicht mehr verändert wird.

## Bridge Resource

Die Peakboard Bridge ist ein kleiner, ressourcen-schonender Windows-Service, der üblicherweise auf einem Windows-Server installiert ist. Wenn man eine Ressource erstellen möchte, die nicht statisch ist, sondern sich laufend von einem freigegebenen Netzlaufwerk erneuert, ist die Bridge-Resource die richtige Wahl. Die Peakboard-Box greift auf die Bridge, und die wiederum auf die im Netzwerk freigegebene Datei. Warum greift die Box nicht einfach direkt auf die Datei zu? Die Antwort ist einfach: Aus Sicherheitsgründen. Üblicherweise ist die Box nicht Teil der Domäne und hat somit keinen Zugriff auf ein Netzlaufwerk. Der Bridge-Service aber schon, weil er im AD-User-Kontext auf das Netzlaufwerk greift, unter dem der Bridge-Windows-Service läuft.

Der folgende Screenshot zeigt die Konfigurationsmaske für eine Bridge-Resource. Man muss lediglich den Pfad zur gewünschten Datei (in diesem Fall eine Excel-Datei auf einem freigegeben Laufwerk) und die URL des Bridge-Servers angeben. Wenn der Bridge-Server unter dem Standardport 2501 läuft, kann die Port-Angabe auch weggelassen werden.

![image_1](/assets/images/misc/Ressources/Resources_02.png)

## Web Resource

Die Web Resource ist denkbar einfach erklärt: Hinterlegen Sie einfach die gewünschte URL, bei Bedarf mit einer Authentifizierung, falls sich die Resource eine explizite Authentifizierung erfordert.

![image_1](/assets/images/misc/Ressources/Resources_03.png)


## Cloud Resource: Dropbox, OneDrive, Google Drive

Um eine Ressource aus einem Cloudspeicher zu laden, müssen Sie erst Peakboard erlauben, auf Ihren Cloudspeicher zuzugreifen. Ein entsprechendes Fenster öffnet sich. Bitte beachten: Ihre Zugangsdaten zu Ihrem Cloudspeicher werden NICHT im Designer oder auf der Peakboard-Box gespeichert, sondern lediglich ein Zugriffstoken. Wenn Sie diese Erlaubnis rückgängig machen wollen, gehen Sie einfach in die Settings Ihres Cloudspeicher-Accounts. Dort ist der Zugriff gelistet und kann gelöscht werden. Das ist ein übliches Verfahren, um Drittanbietern Zugriff auf einen Cloudspeicher zu ermöglichen.

Die folgenden Screenshots zeigen exemplarisch die Anmeldung bei Dropbox und danach die Dateiauswahl. Im Designer wird eine Kopie der Datei abgelegt für den Preview. Im Echtlauf (auf der Peakboard-Box) wird die Datei aber aus dem Cloudspeicher erneuert. Der Content ist also nicht statisch, sondern dynamisch mit der Originaldatei verbunden.
![image_1](/assets/images/misc/Ressources/Resources_04.png)
![image_1](/assets/images/misc/Ressources/Resources_05.png)

## Resource Folder

Wenn die Anzahl der Ressourceneinträge steigt, macht es Sinn, Ressourcen in Verzeichnissen zu organisieren. Sie können die Dateien einfach per Drag and Drop in ein Unterverzeichnis ablegen.

![image_1](/assets/images/misc/Ressources/Resources_06.png)
