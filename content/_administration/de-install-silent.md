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

Die Installation des Peakboard Designers kann über die Kommandozeile erfolgen. Diese muss dabei als Administrator ausgeführt werden.
Falls das folgende Fenster erscheint, bestätige darin mit einem Klick auf [Yes / Ja], dass dem Anbieter der Software vertraut wird.

![Windows User Account Control Fenster](/assets/images/admin/install-silent/usercontrol.png)

### Silent Installation des Peakboard Designers

Hierbei wird nur der Peakboard Designer und die für die Previewfunktion notwendige Peakboard Runtime installiert.
Die *PeakboardSetup.exe* kann dabei von jedem beliebigen Verzeichnis aus aufgerufen werden.
Nachfolgende Kommandozeileneingabe illustriert wie die Installation im Silent Mode aus dem Verzeichnis [C:\Temp] heraus funktioniert:

````markdown
    ```
       "C:\Temp\PeakboardSetup.exe" -Silent True -InstallPath <installation path>
    ```
````

### Silent Deinstallation

Analog zur Installation kann auch die Deinstallation der Software im Silent Mode durchgeführt werden.
Passe dafür das Kommando auf den Pfad der *uninst.exe* an.
Standardmäßig erfolgt die Installation des Peakboard Designers unter [C:\Program Files\Peakboard], wo du auch die *uninst.exe* findest

````markdown
    ```
       "C:\Program Files\Peakboard\uninst.exe" -Silent True
    ```
````

### Silent Deinstallation

Über den Parameter BlockUnencryptedConnection kann definiert werden dass die Box den unverschlüsselten Port 40404 komplett blockiert:

````markdown
    ```
       "C:\Temp\PeakboardSetup.exe" -Silent True -InstallPath <installation path> -BlockUnencryptedConnection True
    ```
````
