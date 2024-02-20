---
layout: article
title: Runtime mit PowerShell neu installieren
menu_title: Runtime mit PowerShell neu installieren
description: Runtime mit PowerShell neu installieren
lang: de
weight: 850
ref: admin-850
---

Wenn das Update der Peakboard Box auf dem normalen Weg nicht korrekt funktioniert, hilft eine erneute manuelle Installation der Peakboard Runtime auf der Peakboard Box.
Hierfür nutzt du ein PowerShell Skript und die aktuellste Version der Software für die Peakboard Box [PeakboardRuntime.pbux]. Diese kannst du [in der Versionshistorie herunterladen](/misc/de-versionshistorie.html). Auf diesem Weg kannst du die Software mit Windows-Bordmitteln neu installieren.

<div class="box-warning" markdown="1">**Warnung**

Auf diese Weise wird der Verifizierungsprozess der Peakboard-Software umgangen. Dieser Weg könnte also dazu benutzt werden, bösartige Software auf der Peakboard Box zu installieren und sollte daher mit Vorsicht genossen werden! Stelle sicher, dass die ausgewählte .pbux-Datei vertrauenswürdige Binärdateien enthält.
</div>

## Die Installation per Powershell Skript durchführen

Nachdem du die aktuellste Version der Software heruntergeladen hast, startest du zuerst PowerShell.

Navigiere dann zu dem Ordner, der das Skript enthält:
`<Peakboard-Installationsordner>\Designer\RemoteInstall`

Führe das Skript aus:
`.\RemoteInstallScript.ps1`

Gib dabei die folgenden Paramater mit. Wenn du nichts angibst wird der Standard verwendet.

* **installFile** - Der Pfad, an dem die .pbux Datei abliegt, die du auf der Peakboard Box installieren möchtest. Standard ist `~\Downloads\PeakboardRuntime.pbux`
* **tempFolder** - Der Ordner, in den die .pbux Datei entpackt wird, bevor die benötigten Dateien auf die Peakboard Box geladen werden. Standard ist `C:\temp\ReakboardRuntime`

Das Skript fragt nun alle benötigten Informationen ab. Gib diese ein, wenn du danach gefragt wirst.

* **computerName** - Die IP-Adresse der Peakboard Box
* **user** - Der Benutzername des Peakboard Box Administrator-Nutzers
* **pw** - Das Passwort des Peakboard Box Administrator-Nutzers

Alternativ kannst du die Parameter beim Ausführen des Skripts ebenfalls direkt mitgeben.

Jetzt kopiert das Skript alle benötigten Dateien auf die Peakboard Box und installiert die Software.
