---
layout: article
title: Video
menu_title: Video
description: Information about Peakboard Designer Video Control.
lang: en
weight: 320
ref: con-320
redirect_from:
  - /controls/en-video.html
---

The Video control is an interactive function that allows you to integrate videos into your visualization. In addition to displaying static explanatory videos or background loops, Peakboard supports the dynamic loading of video content from various sources such as web URLs, local network paths, or cloud resources. The control can also be used to seamlessly play pure audio, as it supports **MP3 files**.
You can find the Video control in the Peakboard Designer in the **Media & Documents** group (1). Drag and drop the icon into your designer or double-click to place it on your workspace.

![image_1](/assets/images/Controls/Video/video_01.png)

# Configuration and Properties
## 1 Data Source and Video Selection
A Video control can be filled with content in various ways. Double-click the control to open the configuration dialog:

1. Static Resource:Select a video from your local resources that is permanently stored in the application (e.g., an assembly manual). This can be a local file or a stream (1a, 1b).
2. Dynamic Linking (Data Binding): Link the control to a data source or a variable (via the data binding on the left) that contains a path or a URL. The video is then automatically loaded or updated at runtime.

![image_2](/assets/images/Controls/Video/video_02.png)

## 2 Appearance and Control
In the properties on the right side, you can precisely control the behavior and representation of the video:
1. Loop (Data): Determine whether the video should automatically start over after it ends (1).
2. Autoplay (Data): Activate this option if the video should play automatically as soon as the visualization starts. To start or pause a video manually, another control tool is required, such as an icon, to start or pause the video via script (2).
3. Mute (Data): Set whether the video should play with or without sound by default (3).

![image_3](/assets/images/Controls/Video/video_03.png)

# Scripting
The Video control offers specific commands to dynamically influence playback.
## Example: Start and stop video via button
In this example, we use two buttons to manually control a video. Choose two buttons or icons for starting and pausing the video. To edit the video with the buttons in the script editor, give the Video control a name under "Use in scripts."

Steps in the Script Editor:

1. Open the script editor of the "Start" button under "Tapped".
2. Select the Start block under your Video control's category.
3. Add the "Write to log"** block and enter "Video started."
4. Repeat the process for a "Pause" button with the **"Pause"** block.

Start the preview and check the **Log** (second icon from the left) to see if the video starts and pauses correctly.
If you want to display the status in the log, add the "Write to log" block and enter "Video started."

In this video, it is once again illustrated how the script for this example is built and tested for successful functionality:

![image_4](/assets/images/Controls/Video/video_04_gif.gif)

# Camera

The Video control does not only play files and streams - with the source type **[Capture device]** it shows the live image of a camera connected to the device. That turns a Peakboard application into a workstation camera: the operator sees what the camera sees, and can capture a still image from it and send it on.

## Configuring the camera

Double-click the control and set **[Type]** to **[Capture device]**. The camera-specific properties then apply:

1. **[Default camera index]** - which camera is shown when several are connected. `0` is the first camera. The index can also be bound to data, so a screen can decide which camera it shows.
2. **[Camera resolution]** - the resolution the camera is asked to stream in, from `160 x 120 (QQVGA)` up to `3840 x 2160 (4K)`. A lower resolution costs less bandwidth and less CPU; if the camera does not offer the requested resolution, the closest available one is used.
3. **[Show camera settings]** - shows a small toolbar on top of the live image at runtime. The operator can pick the camera there; with exactly two cameras connected there is a button to flip between front and rear camera.

## Capturing an image from the camera

The current camera image can be captured and passed on directly from a script - typically from the [Tapped] event of a button next to the live image. The captured still is stored as a JPG.

Give the Video control a name under [Use in scripts] and use one of these functions, for example in the script of a button:

```lua
-- send the current camera image by mail
screens['Screen1'].Camera1.sendasmail('john@doe.com', 'Damage report', 'See attachment', 0, 0)

-- put it into the Peakboard Hub file manager
screens['Screen1'].Camera1.storeinhub('/damages', 'station-4.jpg', 0, 0)
```

`sendasmailinbody` sends the image inside the mail body instead of as an attachment. The last two arguments are width and height of the captured image; `0, 0` keeps the size of the live image.

<div class="box-tip" markdown="1">
**Tip:**

A camera image documents a state at a point in time - a damaged pallet, a filled bin, a wrong label. Combine the capture with a variable that carries the order or station number, and name the file after it. That way the image can still be assigned later on.
</div>
