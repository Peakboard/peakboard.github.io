---
layout: article
title: Text verarbeiten
menu_title: Text verarbeiten
description: Text verarbeiten
lang: de
weight: 162
ref: scr-162
redirect_from:
---

Mit Peakboard kannst du Texte und Zeichenketten nicht nur anzeigen und auswerten, sondern auch manipulieren. Hier sind einige Beispiele und Anleitungen, wie du mit Texten arbeiten kannst.

### Text auswerten

Eine Möglichkeit zur Auswertung ist das Zählen der Buchstaben. Hierfür kann folgender Code verwendet werden:

![Count](/assets/images/scripting/Scripting_Beispiele/working-with-text/en-script-count.png)

```lua
data.ModifiedText = string.tostring(string.len(data.BaseText))
```

### Text manipulieren

Zu den möglichen Manipulationen zählen das Ersetzen, Trimmen, Löschen und die Anpassung der Groß- und Kleinschreibung.

#### Ersetzen

Um bestimmte Teile eines Textes zu ersetzen, verwende folgenden Code:

![Replace](/assets/images/scripting/Scripting_Beispiele/working-with-text/en-script-replace.png)

```lua
data.ModifiedText = string.replace(data.BaseText, 'like', 'love')
```

#### Trimmen

Um den Text zu trimmen, also nur einen bestimmten Teil des Textes anzuzeigen, verwende diesen Code:

![Trim](/assets/images/scripting/Scripting_Beispiele/working-with-text/en-script-trim.png)

```lua
data.ModifiedText = string.sub(data.BaseText, 1, 7)
```

#### Löschen

Um nicht-numerische Zeichen aus dem Text zu löschen, verwende:

```lua
data.ModifiedText = string.match(data.BaseText, "%D+")
```

#### Großschreibung

Um den gesamten Text in Großbuchstaben zu konvertieren, verwende:

![Uppercase](/assets/images/scripting/Scripting_Beispiele/working-with-text/en-script-uppercase.png)

```lua
data.ModifiedText = string.upper(data.BaseText)
```