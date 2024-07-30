---
layout: article
title: Processing Text
menu_title: Processing Text
description: Processing Text
lang: en
weight: 162
ref: scr-162
redirect_from:
---

With Peakboard, you can not only display and evaluate texts and strings but also manipulate them. Here are some examples and guidelines on how to work with texts.

### Evaluating Text

One way to evaluate text is by counting the characters. You can use the following code for this:

![Count](/assets/images/scripting/Scripting_Beispiele/dialogs/en-script-count.png)

```lua
data.ModifiedText = string.tostring(string.len(data.BaseText))
```

### Manipulating Text

Possible manipulations include replacing, trimming, deleting, and adjusting the case.

#### Replacing

To replace specific parts of a text, use the following code:

![Replace](/assets/images/scripting/Scripting_Beispiele/dialogs/en-script-replace.png)

```lua
data.ModifiedText = string.replace(data.BaseText, 'like', 'love')
```

#### Trimming

To trim the text, i.e., display only a specific part of the text, use this code:

![Trim](/assets/images/scripting/Scripting_Beispiele/dialogs/en-script-trim.png)

```lua
data.ModifiedText = string.sub(data.BaseText, 1, 7)
```

#### Deleting

To delete non-numeric characters from the text, use:

```lua
data.ModifiedText = string.match(data.BaseText, "%D+")
```

#### Uppercase

To convert the entire text to uppercase, use:

![Uppercase](/assets/images/scripting/Scripting_Beispiele/dialogs/en-script-uppercase.png)

```lua
data.ModifiedText = string.upper(data.BaseText)
```