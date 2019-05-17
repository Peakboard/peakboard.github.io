---
layout: article
title: Installation der Peakboard-Runtime
menu_title: Installation der Peakboard-Runtime
description: Installation der Peakboard-Runtime
lang: de
weight: 1100
ref: admin-1100
---

Bei der Installation des Peakboard-Designers wird normalerweise die Peakboard-Runtime mitinstalliert.
Diese wird für die Preview-Funktionalität des Designers benötigt.

In einigen IT Infrastrukturen funktioniert diese Installation nicht automatisch. In diesem Fall muss die Software manuell installiert werden.

Zunächst einmal setzt die Preview-Funktionalität Windows 10 mit Build 15063 (1703 Creators Update) voraus.

Anschließend muss der Installationsordner von Peakboard geöffnet werden. Dieser ist im Standard C:/Programme/Peakboard/Designer.
Hier muss der Unterordner temporaryInstallFiles/RuntimeDependencies geöffnet werden.

Die beiden Dateien CoreRuntime und VCLibs müssen nun durch Doppelklick installiert werden.
Als nächstes kann im Überordner temporaryInstallFiles die Peakboard Runtime mit der neusten Versionsnummer installiert werden.

Sollte die Installation über Doppelklick nicht funktionieren, muss dies über PowerShell erfolgen.

Dafür muss zunächst PowerShell als Administrator geöffnet werden:

![Install Runtime](/assets/images/admin/install-runtime/install-runtime.png)

Nun muss in PowerShell folgender Befehl durchgeführt werden (wobei der Pfad und der Dateiname entsprechend angepasst werden müssen):

```
Add-AppxPackage -Path "C:\Program Files\Peakboard\Designer\Runtime\Peakboard.Runtime.appx"
```

Bei der manuellen Installation muss beachtet werden, dass der letzte Schritt zur Installation der Runtime bei jedem Update des Peakboard-Designers durchgeführt werden muss.