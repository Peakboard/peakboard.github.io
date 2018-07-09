---
layout: article
title: Button Skript Beispiel
menu_title: Button Skript Beispiel
description: Button Skript Beispiel
lang: de
ref: scr-08
---
Unter dem Untermenü Input finden sich Controls, die die Möglichkeit bieten, mit der Peakboard Box zu interagieren.
Darunter auch das Button Control, dieses kann über ein einfaches Klicken ein Skript ausführen. 

![image_1](/assets/images/scripting/Scripting_Beispiele/Controls_Input.png)

Im folgenden wird ein Skript erklärt, welches einen Text in ein Textfeld schreibt, nachdem ein Button geklickt wurde:

```lua
screens['Screen1'].Text.text = 'Hello World'

```

Zu sehen ist, dass das Textfeld "Text" auf dem "Screen1" nach klicken des Buttons angesprochen wird und durch das .text am Ende definiert wird, dass der Text verändert werden soll.
Der in den Anführungszeichen stehende Text wird anschließend in das Textfeld eingetragen.

![image_1](/assets/images/scripting/Scripting_Beispiele/ButtonSkript.png)

Dieses Beispiel findet sich im Peakboard Designer unter Templates -> Scripting, oder kann über diesen [Link](https://github.com/Peakboard/CoolStuff/raw/master/Scripts/ButtonScriptExample/ButtonScriptExample.pbmx) heruntergeladen werden.
