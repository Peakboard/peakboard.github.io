---
layout: article
title: Dialogs and Notifications
menu_title: Dialogs and Notifications
description: Information about scripted dialogs and notifications
lang: en
weight: 161
ref: scr-161
redirect_from:
---

The application offers the following dialogs and notifications:

1. Notification
2. Error
3. Pop-Up with OK and Cancel
4. Pop-Up with Custom Answers

Additionally, elements within the application can be shown and hidden.

### Notifications

A simple notification can be created with the following code:

![Message](/assets/images/scripting/Scripting_Beispiele/dialogs/en-script-message.png)

```lua
runtime.shownotification('This is a notification message with 5 seconds duration.', notifieroptions.formessages(5000))
```

### Error Messages

For an error message, adjust the code as follows:

![Error_message](/assets/images/scripting/Scripting_Beispiele/dialogs/en-script-error-message.png)

```lua
runtime.shownotification('This is an error message with 10 seconds duration.', notifieroptions.forerrormessages(10000))
```

### Standard Pop-Up

A standard pop-up can be created with the following line of code:

![Pop_up](/assets/images/scripting/Scripting_Beispiele/dialogs/en-script-pop-up.png)

```lua
runtime.showdialog('Simple Pop-Up Header', 'Simple Pop-Up Body Text.')
```

### Custom Pop-Up

For a custom pop-up, it is necessary to define two functions beforehand, which will be triggered based on the selection within the pop-up.

The code for this pop-up is as follows:

![Custom_pop_up](/assets/images/scripting/Scripting_Beispiele/dialogs/en-script-custom-pop-up.png)

```lua
runtime.showdialog('Pop-Up with Custom Answers Header', 'Pop-Up with Custom Answers Body. You can attach your own functions to the buttons below and change their text.', 'I agree', 'I decline', AgreeFunction, DisagreeFunction)
```

### Controlling Element Visibility

To control the visibility of various elements within the application, the following code can be used:

![Visible](/assets/images/scripting/Scripting_Beispiele/dialogs/en-script-visible.png)

```lua
if screens['Screen1'].groups['Group2'].visible then
   screens['Screen1'].groups['Group2'].hide()
else
   screens['Screen1'].groups['Group2'].show()
end
```