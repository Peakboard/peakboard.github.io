---
layout: article
title: Swipe Gestures
menu_title: Swipe Gestures
description: Describes how to use swipe gestures on the Peakboard Box.
lang: en
weight: 167
ref: scr-167
redirect_from:
---

Swipe gestures on the Peakboard Box can be detected and used to enhance user interaction. A designated event is triggered with each swipe gesture, where a corresponding script determines the action to be executed.

Swipe gestures can be recognized in all directions: `Left`, `Right`, `Up`, and `Down`. The gesture is defined by the direction in which the finger moves.

## Creating an Event
To create a swipe gesture event, add a new global event in the Package Explorer under Scripts. Right-click to open a context menu and select either a `Swipe up`, `Swipe down`, `Swipe left`, or `Swipe right` event.

![Add Swipe Event](/assets/images/scripting/Scripting_Beispiele/swipe-events/en-add-swipe-event.png)

After creating the event, define the script that will be executed when a swipe gesture is detected.

## Example of Swipe Gesture Application
A common application for swipe gestures is navigating to different screens. Swipe gestures allow users to seamlessly switch between screens. For more information on navigating between screens using scripts, click [here](https://help.peakboard.com/scripting/Script%20Templates/en_screenchanging.html).