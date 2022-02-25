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

Bei der Anbindung von Forcam wird die Force Bridge API eine sogenannte REST API verwendet. 
Über diese können Calls getätigt werden welche bestimmte Informationen zurückgeben.
Eine Dokumentation der Force Bridge API findet ihr [hier.](https://forcebridge.io/)

Im Swagger Tool der API können die einzelnen Calls der REST API erkundet werden. 
Den Zugriff hierauf erhaltet ihr dabei von Forcam selbst.



![image_1](/assets/images/misc/Forcam/Forcam1.png)



Habt ihr im Swagger Tool die gewünschte Abfrage gefunden dann könnt ihr die Request URL kopieren 
und diese dann im Peakboard Designer nutzen.

Dafür legt ihr im Peakboard Designer eine neue JSON Datenquelle an.



![image_1](/assets/images/misc/Forcam/Forcam2.png)



Diese benötigt einen Namen und ein Reload Intervall.
Beim Quell typ muss  URL definiert werden und für die Basis URL die im Swagger Tool kopierte Request URL. 

Nach dem Einfügen der URL wird diese automatisch in die Basis URL und den URL Pfad für die spezifische Abfrage aufgeteilt. 
So kann die Basis URL in mehreren JSON Datenquellen als existierende Verbindung genutzt werden.

Um auf die REST API von Forcam zugreifen zu können benötigt es einer OAuth Authentifizierung. 
Diese kann unter dem Authentication Type ausgewählt werden. 
Wenn auf den Button Token anfordern geklickt wird öffnet sich automatisch eine Maske, in der unter dem Punkt Voreinstellungen FORCE Bridge ausgewählt werden kann. 
Dadurch werden automatisch einzelne Standardfelder ausgefüllt. 
Es muss nun nur noch in der Access Token URL die URL der Forcam API eingesetzt werden. 
Diese entspricht der Basis URL der Abfragen. Außerdem müssen noch die von Forcam zur Verfügung gestellte Client ID und das Client Secret eingetragen werden. 
Danach kann über Token Anfordern ein Token angefordert werden.



![image_1](/assets/images/misc/Forcam/Forcam3.png)



Nachdem die OAuth Authentifizierung erfolgreich abgeschlossen wurde, können über Daten Laden bereits daten aus der REST API geladen werden. 
Um noch zu definieren welche Daten aus dem Ergebnis genau angezeigt werden sollen kann über den Pfad der Pfad definiert werden, welcher in der JSON Response verwendet werden soll.


In [diesem Video](https://www.youtube.com/watch?v=kZlCyePq61A) wird nochmal erklärt wie die Forcam Anbindung im Peakboard Designer erstellt wird.