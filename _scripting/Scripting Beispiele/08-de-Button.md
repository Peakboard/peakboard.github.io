---
layout: article
title: Button Skript Beispiel
menu_title: Button Skript Beispiel
description: Button Skript Beispiel
lang: de
ref: scr-08
---
Unter dem Sub-Menü Punkt Input finde sich Controls, die die Möglichkeit bieten mit der Peakboard Box zu interagieren.
Darunter auch das Button Control, dieses kann über ein einfaches Clicken einen Skript ausführen. 

![image_1](/assets/images/scripting/Scripting_Beispiele/Controls_Input.png)

Im folgenden wird ein Skript erklärt, welches einen Text in ein Textfeld schreibt, nachdem ein Button gecklickt wurde:

```lua
screens['Screen1'].Text.text = 'Hello World'

```

Zu sehen ist, das das Textfeld "Text" auf dem "Screen1", nach clicken des Buttons angesprochen wird und durch das .text am ende definiert wird, dass der Text verändert werden soll.
Der in den anführungszeichen stehende Text wird anschließend in das Textfeld eingetragen.

![image_1](/assets/images/scripting/Scripting_Beispiele/ButtonSkript.png)

Dieses Beispiel findet sich im Peakboard Designer unter Templates -> Scripting, oder kann über diesen [Link](https://github.com/Peakboard/CoolStuff/raw/master/Scripts/ButtonScriptExample/ButtonScriptExample.pbmx) heruntergeladen werden.
