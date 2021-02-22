---
layout: article
title: Peakboard Hub - Geteilte Variablenlisten 
menu_title: Peakboard Hub - Geteilte Variablenlisten 
description: Peakboard Hub - Geteilte Variablenlisten 
lang: de
weight: 500
ref: hub-500
redirect_from:
---
### Shared Variable Lists im Peakboard Designer verwenden
Im Bereich [Shared Variable Lists] erstellst du Tabellen, die sowohl zum Lesen von Peakboard Boxen als auch zum Schreiben genutzt werden. 
Gib dazu unter [Add Variable List] einen Namen für die Liste ein und definiere einen [Token](/hub/de-hub_tokens.html), der den Zugriff auf diese Liste gewährt. 
Als nächstes legst du die gewünschten Spalten für die Tabelle an.

![Shared Connections Bild 1](/assets/images/hub/hub_variableslist1.png) 

Wenn du den Dialog bestätigst, wird diese Liste angezeigt. 
Du kannst sie durch einen Klick öffnen und Zeilen hinzufügen oder bearbeiten. 
Um die Liste  zu verwenden, klickst du im Peakboard Designer auf [neue Datenquelle hinzufügen] und wählst die Datenquelle [Peakboard Hub List] aus. 
Wähle einen Namen für die Datenquelle, definiere ein Ladeintervall und gib im Feld [Peakboard HUB URL] die URL für Peakboard Hub an. 
Unter [Token] kannst du den zuvor definierten Token angeben.
Klicke du nun auf [Load Lists] und wähle eine Liste aus. 
Die Daten lädst du über [Daten laden].

![Shared Connections Bild 2](/assets/images/hub/hub_variableslist2.png) 

Möchtest du Daten in die Peakboard Hub Liste schreiben, findet das über ein Lua Skript statt. 
Hierfür kannst du die Befehle nutzen, wie sie im Skripteditor auf der rechten Seite vorgeschlagen werden. 
Eine neue Zeile fügst du zum Beispiel über folgenden Befehl hinzu:
```lua
	data.HubList.appendentry({MyString='', MyNum=0})
```

![Shared Connections Bild 3](/assets/images/hub/hub_variableslist3.png)