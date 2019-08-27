---
layout: article
title: Eigenschaften (Properties) nutzen
menu_title: Eigenschaften (Properties) nutzen
description: Eigenschaften (Properties) nutzen
lang: de
weight: 600
ref: scr-600
redirect_from:
  - /scripting/06-de-eigenschaften-properties.html
---
Dieser Artikel beschreibt den Gebrauch so genannter Properties (oder zu deutsch Eigenschaften). Im weitesten Sinne sind das konstante Werte, die hauptsächlich in Scripten verwendet werden. Solche Konstanten können  für die komplette Peakboard Box, auf der die Visualisierung läuft angelegt werden.

Ein gutes Beispiel für eine Box-Property wäre der Name der Abteilung. So könnte man im Script einfach eine Funktion hinterlegen die dafür sorgt, dass wenn eine Visualisierung in einer bestimmten Abteilung läuft, sie sich etwas anders verhält, als in einer anderen Abteilung. Es ist und bleibt aber dieselbe Visualisierung und kann dann universell erstellt werden: „Wenn Abteilung = ‚Sued‘ dann zeige nur Süd-Zahlen, ansonsten zeige alle Zahlen“.

Um eine Property für eine bestimmte Box zu setzen, erreichen Sie die Pflegemaske über den entsprechenden Menüeintrag im Manage-Dialog. 

```markdown
> ## Warnung
>
> Bitte beachten Sie, dass die Properties BoxID und License Systemeigenschaften sind, die nicht geändert oder gar gelöscht werden sollten.
```

![image_1](/assets/images/scripting/properties/Properties_02.png)

Innerhalb des Scripts werden die Box-Properties mit

`runtime.properties.<MeineBoxProperty>`

abgefragt:

![image_1](/assets/images/scripting/properties/Properties_03.png)
