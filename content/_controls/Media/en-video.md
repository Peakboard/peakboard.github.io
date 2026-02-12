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

## Configuration and Properties
### 1 Data Source and Video Selection
A Video control can be filled with content in various ways. Double-click the control to open the configuration dialog:

1. Static Resource:Select a video from your local resources that is permanently stored in the application (e.g., an assembly manual). This can be a local file or a stream (1a, 1b).
2. Dynamic Linking (Data Binding): Link the control to a data source or a variable (via the data binding on the left) that contains a path or a URL. The video is then automatically loaded or updated at runtime.

![image_2](/assets/images/Controls/Video/video_02.png)

### 2 Appearance and Control
In the properties on the right side, you can precisely control the behavior and representation of the video:

1. Control Positioning (General): Define the alignment of the element on the workspace. Use the first eight symbols to quickly place the control at corners or side centers, while the ninth symbol fills the entire available area. The last icon centers the element, where the size can be pre-defined via the manual input fields. (1)
2. Padding (General): You can precisely position the video using the Width, Height, Left, and Top fields. Below that, you define an internal padding for the video. (2) In this area, you can also assign a title to the control that appears above it. (2)
3. Loop (Data): Determine whether the video should automatically start over after it ends (3).
4. Autoplay (Data): Activate this option if the video should play automatically as soon as the visualization starts. To start or pause a video manually, another control tool is required, such as an icon, to start or pause the video via script (3).
5. Mute (Data): Set whether the video should play with or without sound by default (3).
6. Use in scripts (Logic): Give the control a unique name to control it later via script (e.g., start/stop via button click) (4).
7. Conditional Formatting (Logic): Use conditional formatting to start a specific process based on a predefined event (5).

![image_3](/assets/images/Controls/Video/video_03.png)

## Scripting
The Video control offers specific commands to dynamically influence playback.
### Example: Start and stop video via button
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
