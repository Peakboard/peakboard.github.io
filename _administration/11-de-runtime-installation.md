---
layout: article
title: Installation der Peakboard-Runtime
menu_title: Installation der Peakboard-Runtime
description: Installation der Peakboard-Runtime
lang: de
ref: admin-11
---

Bei der Installation des Peakboard-Designers wird normalerweise die Peakboard-Runtime mitinstalliert.
Diese wird für die Preview Funktionalität des Designers benötigt.

In einigen IT Infrastrukturen funktioniert diese Installation nicht automatisch, dann muss diese manuell erfolgen.

Zunächst einmal wird dafür mindestens ein Windows 10 bzw. Windows Server 2016 System benötigt.

Anschließend muss der Installationsordner von Peakboard geöffnet werden. Dieser ist im Standard C:/Programme/Peakboard/Designer.
Hier muss der Unterordner temporaryInstallFiles/RuntimeDependencies geöffnet werden.

Die beiden Dateien CoreRuntime und VCLibs müssen nun durch Doppelklick installiert werden.
Als nächstes kann im Überordner temporaryInstallFiles die Peakboard Runtime mit der neusten Versionsnummer installiert werden.

Sollte die Installation über Doppelklick nicht funktionieren, muss dies über PowerShell erfolgen.

Dafür muss zunächst PowerShell als Administrator geöffnet werden:

![image_1](/assets/images/admin/install-runtime/install-runtime_01.png)

Nun muss in PowerShell folgender Befehl durchgeführt werden (wobei der Pfad und der Dateinamen entsprechend angepasst werden muss):

```
Add-AppxPackage -Path "C:\Program Files\Peakboard\Designer\temporaryInstallFiles\PeakBoard.Runtime_1.0.20.7_x86_Preview.appx"
```

Bei der manuellen Installation muss beachtet werden, dass der letzte Schritt zur Installation der Runtime bei jedem Update des Peakboard-Designers durchgeführt werden muss.