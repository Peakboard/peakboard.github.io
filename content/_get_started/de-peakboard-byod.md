---
layout: article
title: Peakboard Bring-Your-Own-Device (BYOD) - Einführung
menu_title: Peakboard BYOD
description: Peakboard Bring-Your-Own-Device (BYOD) - Einführung
lang: de
weight: 250
ref: start-250
redirect_from:
---

Peakboard Bring-Your-Own-Device (BYOD)
In diesem Artikel lernst du , wie du dein eigenes Gerät als eigenständige Runtime-Instanz anstelle einer Peakboard Box nutzen kannst.

## Vorbereitung und Mindestanforderungen

[Lade zuerst das Setup herunter]( https://peakboard.com/download/Peakboard/dev_master/PeakboardRuntimeSetupUI.exe) und übertrage es auf das Gerät, das du für Peakboard BYOD nutzen möchtest.

Die Mindestanforderungen an die Hardware hängen stark von deinem Anwendungsfall ab. Die folgenden Angaben sind lediglich die minimalen Systemanforderungen. Für ein reibungsloses Benutzererlebnis solltest du die Werte mindestens verdoppeln.
Wenn du dir unsicher bist [kontaktiere den Peakboard Support](mailto:support@peakboard.com) für Empfehlungen für dein spezifisches Projekt.

### Hardware-Mindestanforderungen

* 1 GHz CPU mit 2 Kernen
* 4 GB Arbeitsspeicher
* 64 GB Speicherplatz

### Betriebssystem-Mindestanforderungen

* Windows 10 (ab Version 1607), beliebige Edition, x64 (x86/ARM wird nicht unterstützt)
* Windows 11, beliebige Edition, x64 (x86/ARM wird nicht unterstützt)

Auf dem Betriebssystem muss [das ASP.NET Core 3.1 Runtime (v3.1.32) - Windows Hosting Bundle]( https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-3.1.32-windows-hosting-bundle-installer) installiert sein.

## Peakboard BYOD Setup

Das Setup führt dich automatisch durch den Installationsprozess. Es bietet die Option, die Runtime beim Hochfahren automatisch zu starten (1). In der Regel ist dies auch das gewünschte Verhalten.

![Setup-Optionen](/assets/images/get_started/de_peakboard-byod-01.png)

Du hast außerdem die Möglichkeit den Lizenzschlüssel (1) während der Installation anzugeben. Wenn du zum Zeitpunkt der Installation noch keinen Lizenzschlüssel hast, kannst du diesen Schritt überspringen und die Lizenz später aktivieren.

<div class="box-warning" markdown="1">
**Hinweis**

Kopiere an dieser Stelle den Hardwareschlüssel (2), wenn du später eine Lizenz beantragen möchtest.
</div>

![Lizenzschlüssel eingeben](/assets/images/get_started/de_peakboard-byod-02.png)

Die Runtime-Instanz funktioniert trotzem ordnungsgemäß, mit Ausnahme eines Lizenzhinweises auf dem Bildschirm. Um den Schritt zu überspringen klicke auf [Next]. Es erscheint ein Hinweis zur Lizenz denn du durch einen erneuten Klick auf [Next] endgültig überspringen kannst.

Das Setup enthält die reguläre Desktop-Runtime-Anwendung sowie den Verwaltungsdienst und den Webserverdienst.

## Peakboard BYOD Instanz dem Peakboard Designer hinzufügen und lizensieren

Vergewissere dich, dass die Runtime-Instanz ordnungsgemäß ausgeführt wird.
Jetzt kannst du die Instanz [wie eine Peakboard Box dem Peakboard Designer hinzufügen](/administration/de-hinzufuegen.html). Wähle deine BYOD Instanz aus der Liste aus (1) und nutze die folgenden Anmeldedaten.

### Standard-Anmeldedaten

* **Benutzername (2):** PeakboardAdmin
* **Passwort (3):** InitP@ss

![BYOD hinzufügen](/assets/images/get_started/de_peakboard-byod-03.png)

Die Runtime-Instanz wird nun in der Liste der Peakboard Boxen angezeigt (1).
Wenn die Instanz zu diesem Zeitpunkt noch nicht lizenziert ist, erscheint das Eingabefeld für die Eingabe der Lizenzdaten.
Um eine Lizenz beim Peakboard-Vertriebsteam anzufordern, [sende bitte den zuvor kopierten Hardwareschlüssel per E-Mail](mailto:support@peakboard.com). Du erhälst daraufhin eine Peakboard Box-ID (2) und einen zugehörigen Lizenzschlüssel (3). Der Lizenzschlüssel ist ein kryptischer Schlüssel (ca. 20-30 Zeichen lang), und die Peakboard Box-ID hat das Format [PBRXXXXX], wobei XXXX eine zufällige Zahl ist.

![BYOD lizensieren](/assets/images/get_started/de_peakboard-byod-04.png)

Wenn du die Instanz nur für Testzwecke nutzen möchtest kannst du diesen Schritt überspringen und die Instanz weiterhin unlizensiert lassen. Eine unlizenzierte Peakboard BYOD-Instanz funktioniert ohne jegliche Einschränkungen. Es wird lediglich ein Banner erscheinen, das auf die fehlende Lizenz hinweist.

![Lizenzwarnung](/assets/images/get_started/de_peakboard-byod-05.png)

## Automatische Anmeldung

In vielen Anwendungsfällen soll die Runtime-Instanz automatisch nach dem Einschalten des Geräts gestartet werden. Der erste Schritt besteht darin, nach dem Booten automatisch eine Windows-Anmeldung durchzuführen. Dies geschieht über einen Registrierungsschlüssel.
Wenn du die Option während der Indsstallation auswählst übernimmt das Setup diese Schritte bereits für dich.

Idealerweise gibt es ein lokales Windows-Konto auf dem Rechner, das für die automatische Anmeldung verwendet wird. Du kannst dieses PowerShell-Skript ausführen, um den Registrierungsschlüssel für die automatische Anmeldung festzulegen. Gib dazu den Benutzernamen und das Kennwort ein.

```powershell
$Username = Read-Host 'Enter username for auto-logon (f.e. domain\peakboard)'
$Pass = Read-Host "Enter password for $Username"
$RegistryPath = 'HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon'
Set-ItemProperty $RegistryPath 'AutoAdminLogon' -Value "1" -type String
Set-ItemProperty $RegistryPath 'DefaultUsername' -Value "$Username" -type String
Set-ItemProperty $RegistryPath 'DefaultPassword' -Value "$Pass" -type String
```

Um die Runtime nach der automatischen Anmeldung automatisch zu starten, legst du eine Verknüpfung für die `Peakboard.Runtime.Wpf.exe` im Benutzerverzeichnis von `%appdata%\Microsoft\Windows\Start Menu\Programs\Startup` ab, zum Beispiel `C:\Users\username\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup`.

## Weitere Tipps und Tricks

Die oben beschriebenen Schritte sind die wichtigsten Schritte, um Peakboard BYOD auf einem Gerät zum Laufen zu bringen. Falls du die Benutzererfahrung noch reibungsloser gestalten und Windows vor den Endbenutzern verstecken möchtest sind hier einige Schritte, um dies zu erreichen:

* Verwende einen einfarbigen, schwarzen Desktop-Hintergrund
* Entferne alle Verknüpfungen auf dem Desktop
* Verstecke die Taskleiste
* Verwende ein einfarbiges, schwarzes Profilbild für das Konto, unter dem die Runtime-Instanz ausgeführt wird
* Passe die Windows-Energieeinstellungen an deinen Anwendungsfall an. In der Regel bedeutet dies die Deaktivierung des Bildschirmschoners, des des automatischen Ruhezustands u.ä.
