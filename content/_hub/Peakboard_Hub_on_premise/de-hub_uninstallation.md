---
layout: article
product: hub
title: Deinstallation
menu_title: Deinstallation
description: Peakboard Hub on premise - Schritt-für-Schritt-Anleitung durch den Uninstaller
lang: de
weight: 105
ref: hub-105
redirect_from:
---


Der Peakboard Hub on premise bringt einen eigenen Uninstaller mit. Du startest ihn über die Windows-Liste **Apps & Features** oder direkt aus dem Installationsordner unter `C:\Program Files\Peakboard\PeakboardHub\Uninstall\uninstall.exe` (bei einer Installation, die nie aus dem IIS-Ordner verschoben wurde: `C:\inetpub\PeakboardHub\Uninstall\uninstall.exe`). Wie das Setup benötigt auch der Uninstaller Administratorrechte.

### Schritt 1 — Bestätigung

Beim Start fragt der Uninstaller noch einmal nach, ob du den Peakboard Hub on premise wirklich entfernen möchtest. Klicke auf [Start], um die Komponentenauswahl zu öffnen.

![Bestätigung der Deinstallation](/assets/images/hub/installer/hub-uninstaller-01-welcome.png)

### Schritt 2 — Komponenten auswählen

Im Schritt **Uninstall Peakboard Hub** legst du fest, was entfernt werden soll. Welche Einträge erscheinen, hängt davon ab, was das Setup auf diesem Server installiert hat.

* **Peakboard Hub** (1) — Entfernt die Programmdateien des Hub, seinen Windows-Dienst, seine Firewall-Regeln und den Registry-Eintrag dieses Hub. Diese Komponente wird immer entfernt. Die Datenbank bleibt unberührt.
* **Hub data (database, files, flows)** (2) — Löscht zusätzlich die Datenbank des Peakboard Hub sowie hochgeladene Dateien und die angelegten Hub Flows. Aktiviere die Option nur, wenn du den Datenbestand wirklich komplett verwerfen möchtest. Die Datenbank wird nur gelöscht, wenn keine andere Installation des Peakboard Hub oder der Public API sie nutzt.
* **Database user** (3) — Entfernt den SQL-Server-Login, mit dem sich der Peakboard Hub verbindet. Er ist nur vorausgewählt, wenn das Setup den Login angelegt hat. Gab es den Login schon vor der Installation, entziehst du mit dem Entfernen allen anderen, die ihn nutzen, den Zugriff.
* **Peakboard Hub API** — Erscheint, wenn die Public API zusammen mit dem Hub installiert ist. Entfernt ihren Windows-Dienst, ihre Dateien, ihre Firewall-Regel und ihren Registry-Eintrag.
* **SQL Server Express** und **.NET Hosting Bundle** (4) — Erscheinen nur, wenn das Setup sie installiert hat. Lass sie abgewählt, wenn andere Anwendungen auf demselben Server sie noch benötigen.

Klicke auf [Uninstall] (5), um fortzufahren.

![Komponentenauswahl im Uninstaller](/assets/images/hub/installer/hub-uninstaller-02-components.png)

Bevor etwas entfernt wird, nennt der Uninstaller die Programmordner, die endgültig gelöscht werden, und bittet dich um Bestätigung. Danach fragt er **Also delete the Hub's data folder?** — der Datenordner (zum Beispiel `C:\ProgramData\Peakboard\PeakboardHub`) enthält die hochgeladenen Dateien, Hub Flows und Update-Pakete dieser Installation. [No] ist vorausgewählt und behält den Ordner für eine spätere Neuinstallation. Der Ordner wird nur gelöscht, wenn kein anderer Peakboard Hub dieselbe Datenbank nutzt.

### Schritt 3 — Fertig

Der Vorgang dauert in der Regel nur wenige Sekunden. Der Uninstaller bestätigt das Ergebnis und du schließt ihn mit [Finish].

![Deinstallation abgeschlossen](/assets/images/hub/installer/hub-uninstaller-03-finished.png)

Hast du die Datenbank, den Datenordner oder das .NET Hosting Bundle bewusst behalten, stehen sie weiterhin zur Verfügung. Du kannst den Peakboard Hub on premise jederzeit über die Setup-Datei erneut [installieren](/hub/Peakboard_Hub_on_premise/de-hub_installation.html) und auf den Datenbankseiten **Use an existing database** und **Use an existing user** wählen, um deinen bisherigen Datenbestand weiterzuverwenden.

Der Uninstaller lässt sich auch unbeaufsichtigt ausführen, siehe [Silent-Installation](/hub/Peakboard_Hub_on_premise/de-hub_silent-installation.html#silent-deinstallation).
