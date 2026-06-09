---
layout: article
product: hub
title: Deinstallation
menu_title: Deinstallation
description: Peakboard Hub on premise - Schritt-für-Schritt-Anleitung für den Uninstaller
lang: de
weight: 105
ref: hub-105
redirect_from:
---


Der Peakboard Hub on premise bringt einen eigenen Uninstaller mit. Du kannst ihn über die Windows **Apps & Features** Liste starten oder direkt aus dem Installationsordner unter `C:\inetpub\PeakboardHub\Uninstall\uninstall.exe` aufrufen. Wie das Setup muss auch der Uninstaller mit Administratorrechten ausgeführt werden.

### Schritt 1 — Bestätigung

Nach dem Start fragt der Uninstaller noch einmal nach, ob du den Peakboard Hub on premise wirklich entfernen möchtest. Mit [Start] (1) öffnest du den eigentlichen Uninstall-Assistenten.

![Bestätigung der Deinstallation](/assets/images/hub/installer/hub-uninstaller-01-welcome.png)

### Schritt 2 — Komponenten wählen

Im Schritt **Uninstall Peakboard Hub** entscheidest du, was alles entfernt werden soll. Standardmäßig ist nur die erste Option gesetzt; alles Weitere musst du bewusst aktivieren.

* **Peakboard Hub** (1) — Entfernt die Programmdateien des Peakboard Hub, die zugehörige IIS-Seite samt App Pool sowie den Registry-Eintrag dieses Hubs. Damit ist die Webanwendung selbst weg, die Datenbank bleibt aber unberührt.
* **Hub data (database, files, flows)** (2) — Löscht zusätzlich die Peakboard Hub Datenbank und ihren Login auf dem SQL Server, dazu alle hochgeladenen Dateien sowie die im Peakboard Hub angelegten Hub Flows. Aktiviere die Option nur, wenn du den Datenbestand wirklich vollständig verwerfen möchtest.
* **.NET Hosting Bundle** (3) — Deinstalliert das ASP.NET Core Hosting Bundle. Lass diesen Haken weg, wenn andere Anwendungen auf demselben Server ebenfalls darauf angewiesen sind.

Mit [Uninstall] (4) startest du die Deinstallation der gewählten Komponenten.

![Komponentenauswahl in der Deinstallation](/assets/images/hub/installer/hub-uninstaller-02-components.png)

### Schritt 3 — Fertig

Der Vorgang ist normalerweise nach wenigen Sekunden abgeschlossen. Der Uninstaller bestätigt das Ergebnis (1) und du verlässt ihn über [Finish] (2).

![Abgeschlossene Deinstallation](/assets/images/hub/installer/hub-uninstaller-03-finished.png)

Falls du die Datenbank und das .NET Hosting Bundle bewusst stehen gelassen hast, sind beide nach wie vor verfügbar. Du kannst den Peakboard Hub on premise dann jederzeit über die Setup-Datei erneut [installieren](/hub/Peakboard_Hub_on_premise/de-hub_installation.html) und dabei im Schritt **Database** die Option **Use an existing database and user** wählen, um deinen bestehenden Datenbestand weiterzuverwenden.
