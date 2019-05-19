---
layout: article
title: Tastatureingabe Script Beispiel
menu_title: Tastatureingabe Script Beispiel
description: Tastatureingabe Script Beispiel
lang: de
weight: 1100
ref: scr-1100
redirect_from:
  - /scripting/Samples/11-de-keyinputs.html
---
In diesem Scripting Beispiel wird erklärt, wie Tastaturbefehle genutzt werden können, um die Peakboard Box zu steuern.


![image_1](/assets/images/scripting/Scripting_Beispiele/KeyInputs.png)

Generell können Tastatureingaben über KeyPressed verarbeitet werden.
Das dahinter liegende Script wird jedes Mal ausgeführt, wenn eine Taste auf der Tastatur geklickt wird.

```lua
data.KeyInputs[0].Text = 'vkeys.' .. string.tostring(e.key)

```

In meinem Beispiel soll dann eine Zeile in der Tabelle mit dem Text befüllt werden, der von der gedrückten Taste übermittelt wird.
Dafür benutze ich den e.key Befehl welcher den Text der gedrückten Taste beinhaltet.
Dieser muss dann nur noch zu einem String konvertiert und in die Tabelle eingetragen werden.

Dieses Beispiel findet sich im Peakboard Designer unter Templates -> Scripting, oder kann über diesen [Link](https://github.com/Peakboard/CoolStuff/raw/master/Scripts/Key%20Inputs/KeyInputs.pbmx) heruntergeladen werden.
