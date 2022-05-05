---
layout: article
title: Forcam Force als Datenquelle für Peakboard
menu_title: Forcam Force als Datenquelle für Peakboard
description: Wie funktioniert die Anbindung an Forcam Force als Datenquelle für Peakboard
lang: de
weight: 11200
ref: misc-11200
redirect_from:

---

## Forcam als Datenquelle für Peakboard nutzen.

Bei der Anbindung von Forcam wird die Force Bridge API, eine sogenannte REST API verwendet. 
Über diese können Calls getätigt werden, welche bestimmte Informationen zurückgeben.
Eine Dokumentation der Force Bridge API findest du [hier.](https://forcebridge.io/)

Im Swagger Tool der API kannst du die einzelnen Calls der REST API erkunden. 
Den Zugriff hierauf erhältst du dabei von Forcam selbst.



![image_1](/assets/images/misc/Forcam/Forcam1.png)



Hast du im Swagger Tool die gewünschte Abfrage gefunden, kannst du die Request URL kopieren und diese im Peakboard Designer nutzen.

Dafür legst du im Peakboard Designer eine neue [JSON Datenquelle](/data_sources/de-json.html) an.



![image_1](/assets/images/misc/Forcam/Forcam2.png)



Gib der Datenquelle einen Namen und ein Reload Intervall.
Bei [Quelltyp] muss [URL] ausgewählt werden und ins Feld [Basis Url] fügst du die im Swagger Tool kopierte Request URL ein. 

Nach dem Einfügen der URL wird diese automatisch in die Basis URL und den URL-Pfad für die spezifische Abfrage aufgeteilt. 
So kannst du die Basis URL in mehreren JSON Datenquellen als existierende Verbindung nutzen.

Um auf die REST API von Forcam zugreifen zu können, benötigst du eine OAuth Authentifizierung. 
Diese wählst du im Drop-Down [Authentication Type] aus. 
Wenn du auf den Button [Token anfordern] klickst, öffnet sich automatisch eine Maske, in der du unter dem Punkt [Voreinstellungen] im Drop-Down FORCE Bridge auswählst. 
Dadurch werden automatisch einzelne Standardfelder ausgefüllt. 
Du musst nun nur noch in der Access Token URL die URL der Forcam API einsetzen. 
Diese entspricht der Basis URL der Abfragen. Außerdem musst du noch die von Forcam zur Verfügung gestellte Client ID und das[Client Secret in den entsprechenden Feldern eintragen. 
Danach kannst du über [Token Anfordern] ein Token anfordern.



![image_1](/assets/images/misc/Forcam/Forcam3.png)



Nachdem die OAuth Authentifizierung erfolgreich abgeschlossen wurde, kannst du über [Daten Laden] bereits Daten aus der REST API laden. 
Um noch zu definieren, welche Daten aus dem Ergebnis genau angezeigt werden sollen, kann über [Pfad] der Pfad definiert werden, der in der JSON Response verwendet werden soll.



In [diesem Video](https://www.youtube.com/watch?v=kZlCyePq61A) wird nochmal erklärt, wie die Forcam Anbindung im Peakboard Designer erstellt wird.