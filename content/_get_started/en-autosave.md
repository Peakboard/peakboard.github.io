---
layout: article
title: Autosave - recovering a project after a crash
menu_title: Autosave
description: The Peakboard Designer writes a snapshot of the open project every 20 seconds and offers it for recovery after a crash or a power failure.
lang: en
weight: 180
ref: start-180
---

A power failure, a blue screen, a Peakboard Designer that is closed by mistake - and an hour of work is gone. To prevent exactly that, the Peakboard Designer continuously writes a snapshot of the project you are working on in the background. After an unexpected end you are offered that snapshot the next time you start.

Autosave is always active. There is nothing to switch on and nothing to configure.

### What is saved, and when

Every **20 seconds** the Peakboard Designer writes the currently active project into a snapshot file. Only what has actually changed is written: if the project carries no unsaved changes, its snapshot is removed again instead of being rewritten.

If you work with several projects in tabs, the timer covers the tab that is in front. The other tabs are not forgotten - a tab is written to its snapshot the moment you switch away from it, so every open project has a current snapshot.

The snapshots are stored per user in

```
%LOCALAPPDATA%\Peakboard\PeakboardAutoSaves
```

<div class="box-tip" markdown="1">
**Note:**

The snapshot is a copy of the project, not of the file path. It is a safety net against a crash, not a substitute for saving: keep saving your project regularly, and keep the versions that matter in the Peakboard Hub or in your own file storage.
</div>

### Recovering a project after a crash

Start the Peakboard Designer again after an unexpected end. Before the Home screen appears you are asked:

> There is an unsaved package from the previous session. Do you want to load it?

* **[Yes]** - the snapshot is opened as a project. It arrives as a project with unsaved changes and without a file path, so the next [Save] asks you where to store it. Use [Save as] to write it back over your original file, or to a new file if you want to keep both.
* **[No]** - the snapshot is discarded.

Either way the snapshot file is used up by that answer: it is deleted afterwards. If you are unsure whether you still need the state, answer [Yes] and decide with the project open - you can always close it again without saving.

If several snapshots exist, the Peakboard Designer offers the **most recent** one that is not currently in use by another running Peakboard Designer. A second Peakboard Designer that is open at the same time therefore does not take away the snapshot of the first one.

### When no question appears

The question only appears if there is a snapshot to recover. There is none if

* the project carried no unsaved changes - the snapshot of an unchanged project is removed again by the next run of the timer, and
* the project was closed normally in the Peakboard Designer - closing a project clears its snapshot along with its working data.
