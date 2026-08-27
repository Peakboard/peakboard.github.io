---
layout: article
title: Controlling the Peakboard Runtime window from a script
menu_title: Runtime window
description: Switch the Peakboard Runtime to full screen or window mode, minimize it or bring it to the front - from a Building Block or from Lua.
lang: en
weight: 909
ref: scr-909
---

An application does not always own the whole screen. On a workstation the Peakboard Runtime often runs next to an ERP client or a browser, and the operator needs to get from one to the other. Four functions let your application do that itself: it can go to full screen, come back to window mode, step aside, or ask for attention.

### The functions

| Building Block | Lua | What it does |
|---|---|---|
| [Fullscreen] | `runtime.switchtofullscreen()` | Switches from window mode to full screen mode |
| [Window mode] | `runtime.switchtowindow()` | Switches from full screen mode to window mode |
| [Minimize] | `runtime.minimize()` | Minimizes the Peakboard Runtime window |
| [Bring to front] | `runtime.bringtofront()` | Brings the Peakboard Runtime window to the front |

In the Building Blocks you will find them under **Visualization** in the **Runtime** group, next to the other functions of the Peakboard Runtime.

### Example: a button that steps aside

Put a button on your screen and open its script for the [Tapped] event. Use the [Minimize] Building Block, and the operator can put the application aside with one tap to work in another program.

To get it back, combine it with a timer script that calls [Bring to front] - for example when a new order arrives - so the application returns to the foreground exactly when it has something to say.

```lua
-- Button, event Tapped: step aside
runtime.minimize()
```

```lua
-- Timer script: come back when it matters
runtime.bringtofront()
```

<div class="box-tip" markdown="1">
**Note:**

`runtime.minimize()` is deliberately without effect on a Peakboard Box. A Peakboard Box shows exactly one application on a wall screen; a minimized window there would leave an empty desktop that nobody can restore on site. The call is logged as a warning in this case, the application keeps running. Full screen, window mode and bring to front work everywhere.
</div>
