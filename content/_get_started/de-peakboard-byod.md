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

In diesem Artikel lernst du, wie du dein eigenes Gerät mit Peakboard BYOD anstelle einer Peakboard Box nutzen kannst.

## Vorbereitung und Mindestanforderungen

[Lade zuerst das Setup herunter](https://downloads.peakboard.com/download/Peakboard/master/PeakboardRuntimeSetupUI.exe) und übertrage es auf das Gerät, das du für Peakboard BYOD nutzen möchtest.

Die Mindestanforderungen an die Hardware hängen stark von deinem Anwendungsfall ab. Die folgenden Angaben sind lediglich die minimalen Systemanforderungen. Für ein reibungsloses Benutzererlebnis solltest du die Werte mindestens verdoppeln.
Wenn du dir unsicher bist [kontaktiere den Peakboard Support](mailto:support@peakboard.com) für Empfehlungen für dein spezifisches Projekt.

### Hardware-Mindestanforderungen

* 1 GHz CPU mit 2 Kernen
* 4 GB Arbeitsspeicher
* 64 GB Speicherplatz

### Betriebssystem-Mindestanforderungen

* Windows 10 (ab Version 1607), beliebige Edition, x64 (x86/ARM nicht unterstützt)
* Windows 11, beliebige Edition, x64 (x86/ARM nicht unterstützt)

<div class="box-warning" markdown="1">
**Achtung**

x86- und ARM-Prozessoren werden **nicht** unterstützt!
</div>


## Peakboard BYOD Setup

Das Setup führt dich automatisch durch den Installationsprozess. Es bietet die Option, Peakboard BYOD beim Hochfahren automatisch zu starten (1). In der Regel ist dies auch das gewünschte Verhalten. Für den automatischen Start wird der aktuell angemeldete Benutzer, der das Setup ausführt, verwendet.

<div class="box-tip" markdown="1">**Benötigte Schreibrechte**

Um sicherzustellen, dass alle Funktionen der BYOD Instanz fehlerfrei ausgeführt werden können, benötigt der angemeldete Nutzer Schreibrechte für den Ordner `C:/ProgramData/Peakboard`.
</div>

![Setup-Optionen](/assets/images/get_started/de_peakboard-byod-01.png)

## Peakboard BYOD Instanz dem Peakboard Designer hinzufügen und lizensieren

Vergewissere dich, dass Peakboard BYOD ordnungsgemäß ausgeführt wird.
Jetzt kannst du die Instanz [wie eine Peakboard Box dem Peakboard Designer hinzufügen](/administration/de-hinzufuegen.html). Wähle deine Peakboard BYOD Instanz aus der Liste aus (1) und gib den Standard-Benutzernamen (2) `PeakboardAdmin` ein. Das Passwort (3) lässt du leer.

![BYOD hinzufügen](/assets/images/get_started/de_peakboard-byod-02.png)

Du wirst nun aufgefordert ein neues Passwort für den Standard-Benutzer der Peakboard Box zu vergeben.
Du kannst das Passwort später noch ändern oder weitere Nutzer hinzufügen.

![Passwort vergeben](/assets/images/get_started/de_peakboard-byod-03.png)

Die Peakboard BYOD Instanz wird nun in der Liste der Peakboard Boxen angezeigt (1).
Da die Instanz zu diesem Zeitpunkt noch nicht lizenziert ist, erscheint das Eingabefeld für die Eingabe der Lizenzdaten.
Um eine Lizenz beim Peakboard-Vertriebsteam anzufordern, [sende bitte den Hardwareschlüssel (2) per E-Mail](mailto:support@peakboard.com). Du erhälst daraufhin eine Peakboard Box-ID (3) und einen zugehörigen Lizenzschlüssel (4). Der Lizenzschlüssel ist ein kryptischer Schlüssel (ca. 20-30 Zeichen lang), und die Peakboard Box-ID hat das Format [PBRXXXXX], wobei XXXX eine zufällige Zahl ist.

![BYOD lizensieren](/assets/images/get_started/de_peakboard-byod-04.png)

Wenn du die Instanz nur für Testzwecke nutzen möchtest kannst du diesen Schritt überspringen und die Instanz weiterhin unlizensiert lassen. Eine unlizenzierte Peakboard BYOD Instanz funktioniert ohne jegliche Einschränkungen. Es wird lediglich ein Banner erscheinen, das auf die fehlende Lizenz hinweist.

![Lizenzwarnung](/assets/images/get_started/de_peakboard-byod-05.png)

## Automatische Anmeldung und automatischer Start

In vielen Anwendungsfällen soll die Peakboard BYOD Instanz automatisch nach dem Einschalten des Geräts gestartet werden, ohne dass der Endnutzer mit der Windows-Oberfläche interagieren muss.

Der erste Schritt um dieses Verhalten einzurichten besteht darin, nach dem Booten automatisch eine Windows-Anmeldung durchzuführen. Dies geschieht über einen Registrierungsschlüssel. Idealerweise gibt es ein lokales Windows-Konto auf dem Rechner, das für die automatische Anmeldung verwendet wird. Fühle das folgende PowerShell-Skript aus, um den Registrierungsschlüssel für die automatische Anmeldung festzulegen. Ersetze dazu den Benutzernamen und das Passwort.

```powershell
$Username = Read-Host 'Enter username for auto-logon (f.e. domain\peakboard)'
$Pass = Read-Host "Enter password for $Username"
$RegistryPath = 'HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon'
Set-ItemProperty $RegistryPath 'AutoAdminLogon' -Value "1" -type String
Set-ItemProperty $RegistryPath 'DefaultUsername' -Value "$Username" -type String
Set-ItemProperty $RegistryPath 'DefaultPassword' -Value "$Pass" -type String
```

Um Peakboard BYOD nach der automatischen Anmeldung automatisch zu starten, legst du eine Verknüpfung für die `Peakboard.Runtime.Wpf.exe` im Benutzerverzeichnis von `%appdata%\Microsoft\Windows\Start Menu\Programs\Startup` ab, zum Beispiel `C:\Users\username\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup`.
Hast du diesen Punkt während der Installation ausgewählt, dann hat das Setup diesen Schritt bereits für dich übernommen.

## Weitere Tipps und Tricks

Die oben beschriebenen Schritte sind die wichtigsten Schritte, um Peakboard BYOD auf einem Gerät zum Laufen zu bringen. Falls du die Benutzererfahrung noch reibungsloser gestalten und Windows weiter vor den Endbenutzern verstecken möchtest sind hier einige Ideen, um dies zu erreichen:

* Verwende einen einfarbigen, schwarzen Desktop-Hintergrund
* Entferne alle Verknüpfungen auf dem Desktop
* Verstecke die Taskleiste
* Verwende ein einfarbiges, schwarzes Profilbild für das Benutzerkonto, unter dem die Peakboard BYOD Instanz ausgeführt wird
* Passe die Windows-Energieeinstellungen an deinen Anwendungsfall an. In der Regel bedeutet dies die Deaktivierung des Bildschirmschoners, des des automatischen Ruhezustands u.ä.
