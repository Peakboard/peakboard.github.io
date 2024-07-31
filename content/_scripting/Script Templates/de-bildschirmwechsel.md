---
layout: article
title: Bildschirmwechsel
menu_title: Bildschirmwechsel
description: Bildschirmwechsel in einer Applikation
lang: de
weight: 152
ref: scr-152
redirect_from:
---
Du kannst innerhalb deiner Applikation zwischen verschiedenen Bildschirmen wechseln. Dies ist besonders nützlich, wenn du verschiedene Daten anzeigen oder manipulieren möchtest.
Um den Wechsel zu erstellen, benötigst du eine Funktion, die den Wechsel anhand eines gedrückten Buttons steuert.
Beim Anlegen der Funktion ist es wichtig, unter "Parameter" einen neuen Parameter vom Typ "Nummer" zu erstellen.
Innerhalb dieser Funktion erstellst du eine Wenn-Dann-Anweisung. Als Bedingung nimmst du deinen erstellten Parameter und vergleichst ihn mit einer Nummer, die den gewünschten Bildschirm repräsentiert.

```lua
    if  ButtonNumber == 1 then
	    runtime.showscreen('Screen1')
    elseif  ButtonNumber == 2 then
        runtime.showscreen('Screen2')
	elseif  ButtonNumber == 3 then
        runtime.showscreen('Screen3')    
    end
```

/assets/images/scripting/Scripting_Beispiele/screenchanging/en_if_screenchange.png)

Abschließend erstellst du einen Button, der die Funktion zum Wechseln aufruft. Dabei übergibst du als Parameter die Nummer des gewünschten Bildschirms.

    Navigation(2)
	
![Button_screenchange](/assets/images/scripting/Scripting_Beispiele/screenchanging/en_button_screenchange.png)