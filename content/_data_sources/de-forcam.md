---
layout: article
title: Forcam Force als Datenquelle für Peakboard
menu_title: Forcam Force
description: Wie funktioniert die Anbindung an Forcam Force als Datenquelle für Peakboard
lang: de
weight: 650
ref: dat-650
redirect_from:

---

## Forcam als Datenquelle für Peakboard nutzen.

Bei der Anbindung von Forcam wird die Force Bridge API, eine sogenannte REST API verwendet. 
Über diese können Calls getätigt werden, welche bestimmte Informationen zurückgeben.
Eine Dokumentation der Force Bridge API findest du [hier.](https://forcebridge.io/)

Im Swagger Tool der API kannst du die einzelnen Calls der REST API erkunden. 
Den Zugriff hierauf erhältst du dabei von Forcam selbst.


![Swagger Tool](/assets/images/data-sources/forcam/de_en_swaggertool.png)


Hast du im Swagger Tool die gewünschte Abfrage gefunden, kannst du die Request URL kopieren und diese im Peakboard Designer nutzen.

Dafür legst du im Peakboard Designer eine neue [JSON Datenquelle](/data_sources/de-json.html) an (1).


![JSON Datenquelle](/assets/images/data-sources/forcam/de_forcam-addjson.png)


Gib der Datenquelle einen Namen (2) und ein Ladeintervall (3).
Bei [Quelltyp] muss [URL] (4) ausgewählt werden und ins Feld [Basis Url] fügst du die aus dem Swagger Tool kopierte Request URL ein (5). 


![JSON Konfiguration](/assets/images/data-sources/forcam/de_forcam-jsonconfig.png)


Nach dem Einfügen der URL wird diese automatisch in die Basis URL und den URL-Pfad für die spezifische Abfrage aufgeteilt. 
So kannst du die Basis URL in mehreren JSON Datenquellen als existierende Verbindung nutzen.

Um auf die REST API von Forcam zugreifen zu können, benötigst du eine OAuth Authentifizierung. 
Diese wählst du im Drop-Down [Authentication Type] aus (6). 
Wenn du auf den Button [Token anfordern] klickst (7), öffnet sich automatisch eine Maske, in der du unter dem Punkt [Voreinstellungen] im Drop-Down FORCE Bridge auswählst (8). 


![JSON OAuth](/assets/images/data-sources/forcam/de_forcam-jsonoauth.png)


Dadurch werden automatisch einzelne Standardfelder ausgefüllt. 
Du musst nun nur noch in der Access Token URL die URL der Forcam API einsetzen (9). 
Diese entspricht der Basis URL der Abfragen. Außerdem musst du noch die von Forcam zur Verfügung gestellte Client ID und das[Client Secret in den entsprechenden Feldern eintragen (10). 
Danach kannst du über [Token Anfordern] ein Token anfordern (11).


![JSON OAuth](/assets/images/data-sources/forcam/de_forcam-jsontest.png)


Nachdem die OAuth Authentifizierung erfolgreich abgeschlossen wurde, kannst du über [Daten Laden] (12) bereits Daten aus der REST API laden. 
Um noch zu definieren, welche Daten aus dem Ergebnis genau angezeigt werden sollen, kann über [Pfad] (13) der Pfad definiert werden, der in der JSON Response verwendet werden soll.



In [diesem Video](https://www.youtube.com/watch?v=kZlCyePq61A) wird nochmal erklärt, wie die Forcam Anbindung im Peakboard Designer erstellt wird.