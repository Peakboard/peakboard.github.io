---
layout: article
title: Silent Installation
menu_title: Silent Installation
description: Unbeaufsichtigte Installation der Peakboard Runtime und des Peakboard Designers per Kommandozeile
lang: de
weight: 150
ref: admin-150
redirect_from:

---

Sowohl die Peakboard Runtime als auch der Peakboard Designer lassen sich unbeaufsichtigt (silent) über die Kommandozeile installieren – ideal für die automatisierte Verteilung per Softwareverteilung, Skript oder Deployment-Pipeline. Die Kommandozeile muss dabei **als Administrator** ausgeführt werden.

Falls das folgende Fenster erscheint, bestätige darin mit einem Klick auf [Ja / Yes], dass dem Anbieter der Software vertraut wird.

![Windows Benutzerkontensteuerung](/assets/images/admin/install-silent/usercontrol.png)

## Silent Installation der Peakboard Runtime

Für das unbeaufsichtigte Ausrollen der *Peakboard Runtime* auf Peakboard Boxen oder BYOD Geräten wird die *Peakboard Runtime Setup.exe* verwendet. Dieses Setup läuft als Konsolenanwendung und ist **immer silent** – ein grafischer Assistent wird nicht angezeigt. Das folgende Beispiel installiert die Peakboard Runtime nach [D:\Peakboard], trägt sie in den Autostart ein und blockiert den unverschlüsselten Port 40404:

```bat
"Peakboard Runtime Setup.exe" Silent=True InstallPath="D:\Peakboard" AddToStartup=True BlockUnencryptedConnection=True
```

### Aufrufformate und Wahrheitswerte

Die Argumente werden im Format `Schlüssel=Wert` übergeben (z.B. `InstallPath="D:\Peakboard"`). Werte mit Leerzeichen in Anführungszeichen setzen. Schlüssel sind **nicht** case-sensitiv, unbekannte Argumente werden ignoriert.

Als Wahrheitswert `True` gelten (case-insensitiv) nur **`True`**, **`Yes`** und **`1`**. Jeder andere Wert (inklusive `False`, leer oder fehlend) gilt als `False`.

### Parameter

{% include styled_table.html %}
{: .w-full }
| Parameter | Werte | Standard | Beschreibung |
|---|---|---|---|
| `InstallPath` | Pfad | `C:\Program Files\Peakboard` | Zielordner der Installation. |
| `AddToStartup` | `True/False` | `False` | Legt eine Verknüpfung im Windows-Autostart an, sodass die Peakboard Runtime nach der Anmeldung automatisch startet. |
| `BlockUnencryptedConnection` | `True/False` | `False` | Deaktiviert den unverschlüsselten Verbindungskanal (Port 40404), sodass nur noch verschlüsselte Verbindungen möglich sind. |
| `CreateStartMenuShortcuts` | `True/False` | `True` | Legt eine Verknüpfung im Startmenü an. |
| `RunOnPeakboardBox` | `True/False` | `True` | Aktiviert die Box-spezifischen Installationsschritte. Standard `True` für die Installation auf einer Peakboard Box; auf einem BYOD Gerät auf `False` setzen. |
| `Silent` | `True/False` | – | Wird akzeptiert, aber ignoriert: das Konsolen-Setup läuft ohnehin immer silent. |

<div class="box-warning" markdown="1"> Die Installation setzt **Windows 10 (Version 20H1, Build 19041) oder neuer** voraus. Auf älteren Systemen bricht das Setup mit Exit-Code <code>-1</code> ab.
</div>

### Exit-Codes

{% include styled_table.html %}
{: .w-full }
| Exit-Code | Bedeutung |
|---|---|
| `0` | Installation erfolgreich |
| `-1` | Fehler oder Abbruch (eine bestehende Installation wird bei Bedarf automatisch aus dem Backup wiederhergestellt) |

## Silent Installation des Peakboard Designers

Für Entwicklungsrechner wird der *Peakboard Designer* über die *Peakboard Designer Setup.exe* installiert. Dabei werden der Peakboard Designer und die für die Vorschaufunktion notwendige Peakboard Runtime installiert. Im Gegensatz zur Runtime startet dieses Setup standardmäßig den grafischen Assistenten – für die unbeaufsichtigte Installation muss `Silent=True` gesetzt werden:

```bat
"Peakboard Designer Setup.exe" Silent=True InstallPath="C:\Program Files\Peakboard"
```

Der Designer wird dabei stets in einen Unterordner [\Designer] des angegebenen Pfads installiert.

### Parameter

{% include styled_table.html %}
{: .w-full }
| Parameter | Werte | Standard | Beschreibung |
|---|---|---|---|
| `Silent` | `True/False` | `False` | Aktiviert die unbeaufsichtigte Installation (kein Assistent). |
| `InstallPath` | Pfad | `C:\Program Files\Peakboard` | Zielordner. Der Designer wird in den Unterordner `\Designer` installiert. |
| `CreateStartMenuShortcuts` | `True/False` | `True` | Legt eine Verknüpfung im Startmenü an. |
| `Update` | `True/False` | `False` | Aktualisiert eine bestehende Installation am erkannten Pfad. |

## Silent Deinstallation

Bei der Installation wird ein eigener Deinstaller im Unterordner [Uninstall] des Installationsverzeichnisses abgelegt. Die Deinstallation lässt sich analog zur Installation im Silent-Modus über das Argument `--silent` (Alias `-s`) durchführen:

```bat
"D:\Peakboard\Uninstall\Peakboard Uninstall.exe" --silent
```

Ohne `--silent` startet die grafische Deinstallation. Auch hier muss die Kommandozeile als Administrator ausgeführt werden. Der Deinstaller liefert Exit-Code `0` bei Erfolg und `-1`, falls er nicht ausgeführt werden konnte.
