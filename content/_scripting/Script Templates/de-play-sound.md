---
layout: article
title: Sound abspielen
menu_title: Sound abspielen
description: Beschreibt, wie Sounds mit Peakboard und einem Skript abgespielt werden können.
lang: de
weight: 153
ref: scr-153
redirect_from:
---

# Skript für das Abspielen eines Sounds

Möchtest du einen Sound auf deiner Peakboard Box abspielen, kannst du ein Skript verwenden. Es gibt zwei Arten von Sounds, die abgespielt werden können:
- System Sounds
- Eigene Sounds

## System Sounds
System Sounds sind bereits auf der Peakboard Box vorhanden und erfordern keine zusätzlichen Dateien.

Es werden die folgenden System Sounds unterstützt:
- `buzzer`
- `confirm`
- `siren`
- `airhorn`
- `beep`

Das folgende Skript spielt den System Sound `buzzer` ab:
![Play sound](assets/images/scripting/Scripting_Beispiele/play-sound/en-play-sound-script.png)

Bei der Verwendung von Building Blocks können die Sounds bequem per Dropdown ausgewählt werden. Bei der Verwendung des Skript-Modus müssen die Sounds per Name referenziert werden.

## Eigene Sounds
Möchtest du eigene Sounds abspielen, musst du zuerst die Sounddatei als Ressource in deinem Peakboard Projekt hinterlegen. Sounds können als `.wav`- oder `.mp3`-Datei hinzugefügt werden. Die hinterlegten Ressourcen können dann per Namen im Skript referenziert und über die `PlayAudio`-Funktion abgespielt werden.

Das folgende Skript spielt den Sound `Car_Horn.mp3` ab:
```lua
runtime.playaudio('Car_Horn.mp3')
```