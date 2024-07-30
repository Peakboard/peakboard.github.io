---
layout: article
title: Play Sound
menu_title: Play Sound
description: Describes how sounds can be played using Peakboard and a script.
lang: en
weight: 153
ref: scr-153
redirect_from:
---

If you want to play a sound on your Peakboard Box, you can use a script. There are two types of sounds that can be played:
- System sounds
- Custom sounds

## System Sounds
System sounds are already available on the Peakboard Box and do not require additional files.

The following system sounds are supported:
- `buzzer`
- `confirm`
- `siren`
- `airhorn`
- `beep`

The following script plays the system sound `buzzer`:
![Play sound](/assets/images/scripting/Scripting_Beispiele/play-sound/en-play-sound-script.png)

When using Building Blocks, the sounds can be conveniently selected via a dropdown menu. In script mode, the sounds must be referenced by name.

## Custom Sounds
If you want to play custom sounds, you must first add the sound file as a resource in your Peakboard project. Sounds can be added as `.wav` or `.mp3` files. The added resources can then be referenced by name in the script and played using the `PlayAudio` function.

The following script plays the sound `Car_Horn.mp3`:
```lua
runtime.playaudio('Car_Horn.mp3')
```