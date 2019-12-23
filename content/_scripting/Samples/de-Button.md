---
layout: article
title: Button Script Beispiel
menu_title: Button Script Beispiel
description: Button Script Beispiel
lang: de
weight: 800
ref: scr-800
redirect_from:
  - /scripting/Samples/08-de-Button.html
---
Unter dem Untermenü Input finden sich Controls, die die Möglichkeit bieten, mit der Peakboard Box zu interagieren.
Darunter auch das [Button Control](/controls/de-button.html). 

In diesem Skriptbeispiel wird erklärt, wie Sie ein Ereignis für das Button Control erstellen und die Eigenschaften anderer Controls über Ereignisse ändern können.

![image_1](/assets/images/scripting/Scripting_Beispiele/buttonscript/buttonscript2.png)

Die Hauptteile der Visualisierung sind das Button Control und das Text Control. Klicken Sie auf das Button Control, soll der Text im Text Control geändert werden. 
Daher ist es wichtig, dass das Text-Control einen Namen hat, hier Text. 

![image_2](/assets/images/scripting/Scripting_Beispiele/buttonscript/buttonscript3.png)

Durch einen Doppelklick auf das Button-Control sehen Sie das Skript, das ausgeführt wird, wenn das Ereignis des Button-Controls ausgelöst wird. 
Dies ist der Fall, wenn Sie beim Ausführen der Visualisierung auf das Button Control klicken.

![image_3](/assets/images/scripting/Scripting_Beispiele/buttonscript/buttonscript1.png)

In diesem Fall wird der Text des Text Controls über "screens['Screen1'].Text.text" geändert. 
Das 'Screen1' in den eckigen Klammern steht dabei für den Screen auf dem sich das Control befindet, dessen Eigenschaften geändert werden sollen. 
Text ist der Name des Controls und .text steht für die Eigenschaft, die geändert werden soll, hier der Text. 
Als nächstes müssen wir den neuen Text definieren. 
Dafür steht zuerst ein = Zeichen und dann den neuen Text in Anführungszeichen. 
Dies signalisiert dem Editor, dass es sich um eine Zeichenkette und nicht um einen Befehl handelt.
