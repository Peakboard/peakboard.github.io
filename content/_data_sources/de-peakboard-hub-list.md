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
<div class="box-tip" markdown="1">
Um die Peakboard Hub Liste zu verwenden, musst du zunächst deinen [Peakboard Hub mit deinem Peakboard Designer](/hub/de-hub_connectpbdesigner.html) verbinden.
</div>

Anschließend klickst du im Peakboard Designer auf [neue Datenquelle hinzufügen] und wählst die Datenquelle [Peakboard Hub List] aus. 
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
