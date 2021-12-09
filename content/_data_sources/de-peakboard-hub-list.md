---
layout: article
title: Peakboard Hub List
menu_title: Peakboard Hub List
description: Peakboard Hub List
lang: de
weight: 2900
ref: dat-2900
redirect_from:
---

Verbinde zunächst [Peakboard Hub mit dem Peakboard Designer](/hub/de-hub_connectpbdesigner.html).


Klicke dann im Peakboard Designer auf [neue Datenquelle hinzufügen] und wähle [Peakboard Hub List] aus. 
Wähle dann einen Namen für die Datenquelle, definiere ein Ladeintervall und gib im Feld [Peakboard Hub URL] die URL für Peakboard Hub an. 
Unter [Token] kannst du außerdem den zuvor definierten Token angeben. 
Klickst du nun auf [Load Lists] und wählst eine Liste aus, kannst du deine Daten unter [Daten laden] hochladen.

![Peakboard Hub List anlegen](/assets/images/hub/hub_variableslist2.png) 

Möchtest du Daten in die Peakboard Hub Liste schreiben, findet das über ein Lua Skript statt. 
Hierfür kannst du die Befehle nutzen, die im Skripteditor auf der rechten Seite vorgeschlagen werden. 
Eine neue Zeile fügst du zum Beispiel über folgenden Befehl hinzu:

```lua
	data.HubList.appendentry({MyString='', MyNum=0})
```

![[Peakboard Hub List Lua Code Snipped](/assets/images/hub/hub_variableslist3.png)
