---
layout: article
title: Silent Installation
menu_title: Silent Installation
description: Silent Installation
lang: de
weight: 150
ref: admin-150
redirect_from:

---

Die Installation des Peakboard Designers und der Peakboard Bridge kann über die Kommandozeile erfolgen.
Je nachdem wie das System konfiguriert ist, kann es sein, dass das User Account Control Fenster erscheint, bei dem bestätigt werden muss, dass dem Anbieter der Software vertraut wird.

![Windows User Account Control Fenster](/assets/images/admin/install-silent/usercontrol.png)

Nachfolgende Möglichkeiten ergeben sich für eine Silent Installation:

# Silent Installation des Peakboard Designers
Hierbei wird lediglich der Peakboard Designer sowie die für die Previewfunktionalität notwendige Peakboard Runtime installiert. 
Die PeakBoardDesignerSetup.exe kann dabei von jedem beliebigen Verzeichnis aus aufgerufen werden. 
Nachfolgende Kommandozeileneingabe illustriert wie die Installation im Silent Mode aus dem Verzeichnis C:\Temp heraus funktioniert:

````markdown
    ```
       "C:\Temp\PeakBoardDesignerSetup.exe" /S
    ```
````

# Silent Installation des Peakboard Designers zusammen mit der Peakboard Bridge
Hierbei handelt es sich um eine komplett Installation bei der der Peakboard Designer, die Peakboard Runtime sowie die Peakboard Bridge im Silent Mode installiert werden.
Die Installation erfolgt analog zur Vorrangegangenen und wird lediglich um den Zusatz /b erweitert.

````markdown
    ```
       "C:\Temp\PeakBoardDesignerSetup.exe" /b /S
    ```
````

# Silent Installation der Peakboard Bridge
Falls lediglich die Peakboard Bridge installiert werden soll, so kann diese über nachfolgendes Kommando ohne den Peakboard Designer und ohne Peakboard Runtime installiert werden.
Die Installation erfolgt analog zu den Vorrangegangenen und wird lediglich um den Zusatz /bb erweitert.

````markdown
    ```
       "C:\Temp\PeakBoardDesignerSetup.exe" /bb /S
    ```
````
	
# Silent Deinstallation
Analog zur Installation kann auch die Deinstallation der Software im Silent Mode durchgeführt werden.
Hierfür muss lediglich das Kommando auf den Pfad der uninst.exe angepasst werden.
Standardmäßig erfolgt die Installation des Peakboard Designers unter "C:\Program Files\Peakboard". 
Hier findet sich auch die uninst.exe.

````markdown
    ```
       "C:\Program Files\Peakboard\uninst.exe" /S
    ```
````


> ## Wichtig
>
> Bei der Deinstallation des Designers wird immer auch die Bridge mit entfernt!
