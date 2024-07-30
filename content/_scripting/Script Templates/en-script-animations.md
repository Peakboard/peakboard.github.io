---
layout: article
title: Animations in Scripts
menu_title: Animations in Scripts
description: Information on scripted animation of controls
lang: en
weight: 159
ref: scr-159
redirect_from:
---

Peakboard provides the capability to animate various controls within an application.

### Animating Controls

To animate a control, it must first be prepared accordingly. This means enabling its use in scripts and assigning it a name. Then, open a script in the script editor. Both Peakboard Building Blocks and standard Lua scripting can be used to animate a control. In the script editor, select the appropriate screen under "Controls" on the right side, choose the desired control, and use the "Animate" option.

The following animations are available:
- Rotate
- Blink
- Zoom
- Fade Out
- Vertical Shake
- Horizontal Shake
- Zigzag Bounce

Additionally, you can choose between 1 and 5 repetitions or opt for infinite repetitions of the animation.

![Building Block](/assets/images/scripting/Scripting_Beispiele/script-with-animations/de-script-editor-animation-block.png)

### Lua Script

The corresponding Lua command can be seen at the bottom of the previous screenshot. Using 

```Lua
screen['<screen-name>'].<control-name>.animate('<animation-name>', <number>)
```

the correct control is selected and animated. The following applies:

- `<screen-name>` - the name of the screen where the control is located
- `<control-name>` - the name of the chosen control
- `<animation-name>` - the name of the animation in uppercase: `ROTATE`, `BLINK`, `ZOOM`, `FADEOUT`, `VERTICALSHAKE`, `HORIZONTALSHAKE`, `ZIGZAGBOUNCE`
- `<number>` - the integer number of repetitions. In this context, `-1` stands for infinite.