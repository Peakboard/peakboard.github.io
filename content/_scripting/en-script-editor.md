---
layout: article
title: Peakboard Script Editor
menu_title: Peakboard Script Editor
description: Information about the Peakboard Script Editor
lang: en
weight: 110
ref: scr-110
redirect_from:
---

For complex Lua scripts, the Peakboard Designer provides its own script editor.
In the following figure, you can see how the script editor looks like, using a timer script as an example. However, the structure is almost identical for all Peakboard script types.

![Script editor](/assets/images/scripting/editor/en_script-editor-01.png)

When you open the script editor, you can decide whether you want to work in the [building block mode](/scripting/en-building-blocks.html), or switch to the classic text-based editor (1).

Above the workspace (2) you will find a button to [comment out] (3) and a button to [uncomment] (4).

The magnifying glass button (5) or the key combination [Ctrl+F] will take you to [Search] and [Replace].

<div class="box-tip" markdown="1">
**Hint:**

For more helpful keyboard shortcuts, see the end of this article.
</div>

![Skript-Editor](/assets/images/scripting/editor/en_script-editor-02.png)

The script tree (6) is intended to make working with scripts easier. It contains predefined functions and examples, which you can insert at the cursor position by simply double-clicking. In addition to the elements of the explorer you previously created in the Peakboard Designer, such as [Data], [Dataflows], [Variables], [Reload flows], [Resources] and [Controls]/[Screens], it also contains [Timer scripts], [Logic & loops], [Math] and many other functions, as well as, among other things, all connections from your current project under [Publish in external system].

Using the folders on the left side of the script editor (7) you can navigate through your previously created scripts in the current project without having to leave the editor. Scripts from dataflows are not listed there.

After entering a script in the workspace of the script editor, you can check whether it is correct by clicking the [Validate] button (8).
Missing or wrong elements are listed in the error list (9).

### Helpful keyboard shortcuts

{% include styled_table.html %}
{: .w-full }
| CTRL + F                  | Opens the search dialog window            |
| CTRL + space              | Opens the Intellisense                    |
| CTRL + arrow keys         | Jumps through the text                    |
| CTRL + shift + arrow keys | Selects complete text sections            |
| CTRL + pos1/end           | Jumps to the beginning/end of the text    |
| CTRL +Shift + pos1/end    | Selects the text to the beginning/end     |
| ALT + Up/Down             | Move a line of text                       |
| ALT + Mouse selection     | Selecting the cursor in multiple lines    |
| Tab                       | Autocomplete                              |
