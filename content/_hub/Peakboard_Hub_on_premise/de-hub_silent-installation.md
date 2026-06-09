---
layout: article
product: hub
title: Silent-Installation und Deinstallation
menu_title: Silent-Installation
description: Peakboard Hub on premise - unbeaufsichtigte Installation und Deinstallation per Kommandozeile
lang: de
weight: 107
ref: hub-107
redirect_from:
---


Diese Anleitung beschreibt die kommandozeilengesteuerte, unbeaufsichtigte Installation und Deinstallation des Peakboard Hub on premise (inklusive Public API). Sie richtet sich an Administratoren und an die Automatisierung über Softwareverteilung, CI/CD oder eigene Skripte.

<div class="box-warning" markdown="1"> **Wichtig**: Sowohl das Setup als auch die Deinstallation **müssen mit erhöhten Rechten (als Administrator)** ausgeführt werden. Sie konfigurieren IIS, die Windows-Registry, Zertifikate und – bei Bedarf – den SQL Server.
</div>

## Silent-Installation

### Aktivierung

Die unbeaufsichtigte Installation wird über das Argument `-Silent True` aktiviert:

```bat
PeakboardHubSetup.exe -Silent True -InstallPath "C:\inetpub\PeakboardHub"
```

Ohne `-Silent True` startet der grafische Assistent.

### Aufrufformate der Argumente

Beide Schreibweisen werden akzeptiert und können gemischt werden:

{% include styled_table.html %}
{: .w-full }
| Format | Beispiel |
|---|---|
| `-Schlüssel Wert` | `-InstallPath "C:\inetpub\PeakboardHub"` |
| `Schlüssel=Wert` | `InstallPath=C:\inetpub\PeakboardHub` |

* Ein `-Schlüssel` **ohne** nachfolgenden Wert (oder gefolgt von einem weiteren `-Schlüssel`) wird als `True` interpretiert. `-Silent` entspricht also `-Silent True`.
* **Unbekannte Argumente** werden ignoriert und nur in die Logdatei geschrieben (Vorwärtskompatibilität).
* Schlüssel sind **nicht** case-sensitiv.

### Wahrheitswerte (Boolean)

Als `True` gelten (case-insensitiv): **`True`**, **`Yes`**, **`1`**. **Alles andere** (inklusive `False`, `No`, `0`, leer) gilt als `False`.

### Rückgabe- und Exit-Codes

{% include styled_table.html %}
{: .w-full }
| Exit-Code | Bedeutung |
|---|---|
| `0` | Installation erfolgreich |
| `-1` | Fehler oder Abbruch |

Der Fortschritt wird zusätzlich zeilenweise auf der Konsole ausgegeben (`[ 42%] <Schritt>`), die Detail-Logdatei liegt unter `C:\ProgramData\Peakboard\LocalState\Logs\Setup\PeakboardHubSetup_<Zeitstempel>.log`.

### Argumentreferenz

#### Allgemein

{% include styled_table.html %}
{: .w-full }
| Argument | Werte | Standard | Beschreibung |
|---|---|---|---|
| `-Silent` | `True/False` | `False` | Aktiviert die unbeaufsichtigte Installation (kein UI). |

#### Installationspfade (mindestens einer ist erforderlich)

{% include styled_table.html %}
{: .w-full }
| Argument | Werte | Standard | Beschreibung |
|---|---|---|---|
| `-InstallPath` | Pfad | – | Zielordner des Peakboard Hub. Wird ein Pfad angegeben, **ohne** weitere Hub-Komponenten-Flags zu setzen, installiert das Setup automatisch **Hub + .NET-Runtime + IIS** (siehe [Verhalten und automatische Voreinstellungen](#verhalten-und-automatische-voreinstellungen)). |
| `-ApiInstallPath` | Pfad | – | Zielordner der Public API. Wird gesetzt, **ohne** API-Flags, installiert das Setup automatisch **API + API-IIS**. |

<div class="box-warning" markdown="1"> Es muss **mindestens** `-InstallPath` **oder** `-ApiInstallPath` angegeben werden, sonst bricht das Setup mit Exit-Code `-1` ab.
</div>

#### Komponenten

{% include styled_table.html %}
{: .w-full }
| Argument | Werte | Standard | Beschreibung |
|---|---|---|---|
| `-InstallPeakboardHub` | `True/False` | abgeleitet | Hub installieren. |
| `-InstallPeakboardHubApi` | `True/False` | abgeleitet | Public API installieren. |
| `-InstallSqlServerExpress` | `True/False` | `False` | SQL Server Express lokal installieren (Instanz `SQLEXPRESS`). **Nur** angeben, wenn noch kein (funktionierender) SQL Server vorhanden ist. |
| `-InstallNetHostingBundle` | `True/False` | abgeleitet | .NET Hosting Bundle / Desktop Runtime sicherstellen (wird nur installiert, wenn nicht vorhanden). |
| `-ConfigureIisPage` | `True/False` | abgeleitet | IIS-Seite und App Pool für den Hub einrichten. |
| `-ConfigureApiIisPage` | `True/False` | abgeleitet | IIS-Seite und App Pool für die API einrichten. |

#### Datenbank

{% include styled_table.html %}
{: .w-full }
| Argument | Werte | Standard | Beschreibung |
|---|---|---|---|
| `-ConfigureDatabase` | `True/False` | `False` | Datenbank einrichten oder verbinden. **Im Silent-Modus nicht automatisch aktiv** – muss explizit gesetzt werden, wenn das Setup die Datenbank konfigurieren soll. |
| `-DatabaseServerName` | Text | `localhost\SQLEXPRESS` | SQL-Server-Instanz. |
| `-DatabaseName` | Text | `PeakboardHub` | Name der Datenbank. |
| `-DatabaseUsername` | Text | – | SQL-Login, das der Hub verwendet. |
| `-DatabasePassword` | Text | – | Passwort des SQL-Logins. |
| `-CreateDatabase` | `True/False` | `False` | `True` = Datenbank **und** Login werden neu angelegt. `False` = bestehende Datenbank und Login verwenden. |
| `-BackupDatabase` | `True/False` | `True` | Vor einem **Update** (Datenbank existiert bereits) ein Backup erstellen. Schlägt das Backup fehl, wird der Silent-Lauf **abgebrochen** – mit `-BackupDatabase False` überspringen. |

<div class="box-warning" markdown="1"> Bei `-ConfigureDatabase True` sind **alle vier** Werte erforderlich: `-DatabaseServerName`, `-DatabaseName`, `-DatabaseUsername`, `-DatabasePassword`. Bei `-CreateDatabase True` muss `-DatabaseUsername` ein **gültiger SQL-Bezeichner** sein (beginnt mit Buchstabe oder Unterstrich, danach nur Buchstaben, Ziffern oder Unterstriche).
</div>

#### Benutzer-Authentifizierung

{% include styled_table.html %}
{: .w-full }
| Argument | Werte | Standard | Beschreibung |
|---|---|---|---|
| `-LocalUsers` | `True/False` | `False` | `True` = Hub-Benutzer gegen lokale Maschinenkonten authentifizieren. `False` (oder weglassen) = **Active Directory**. |

#### Interne Argumente (nicht manuell verwenden)

{% include styled_table.html %}
{: .w-full }
| Argument | Beschreibung |
|---|---|
| `-ContinueInstallation` | Wird ausschließlich vom RunOnce-Eintrag nach dem Neustart (IIS-Feature-Installation) gesetzt. |
| `-InstallIisFeature` | Wird intern gesetzt, wenn dieser Lauf das IIS-Windows-Feature aktiviert hat. |

### Verhalten und automatische Voreinstellungen

* **Pfad impliziert Komponente:** Wird `-InstallPath` angegeben, ohne eine Hub-Komponente explizit zu setzen, aktiviert das Setup automatisch **Hub + .NET-Runtime + IIS**. Analog aktiviert `-ApiInstallPath` automatisch **API + API-IIS**.
* **Datenbank ist im Silent-Modus NICHT automatisch aktiv.** Anders als im Assistenten wird `-ConfigureDatabase` im unbeaufsichtigten Modus nicht aus der Komponentenauswahl abgeleitet. Soll das Setup die Datenbank anlegen oder verbinden, muss `-ConfigureDatabase True` (plus die DB-Werte) gesetzt werden.
* **SQL Server Express** wird nur installiert, wenn `-InstallSqlServerExpress True` angegeben ist.
* **API ohne `-ConfigureDatabase`:** Die API teilt sich die Hub-Datenbank. Ist keine DB-Konfiguration angegeben, übernimmt das Setup den Connection-String einer bereits installierten Hub-Instanz; ist keiner vorhanden, wird ein erkennbarer **Platzhalter** in die `appsettings.json` der API geschrieben, der anschließend manuell ersetzt werden muss.

### Beispiele

**Neuinstallation Hub + SQL Express + Datenbank (frische Maschine):**

```bat
PeakboardHubSetup.exe -Silent True ^
  -InstallPath "C:\inetpub\PeakboardHub" ^
  -InstallSqlServerExpress True ^
  -ConfigureDatabase True -CreateDatabase True ^
  -DatabaseServerName "localhost\SQLEXPRESS" ^
  -DatabaseName "PeakboardHub" ^
  -DatabaseUsername "pbhub" -DatabasePassword "S3hr$icher!" ^
  -LocalUsers True
```

**Hub gegen bestehende SQL-Server-Datenbank (kein SQL-Express-Setup):**

```bat
PeakboardHubSetup.exe -Silent True ^
  -InstallPath "C:\inetpub\PeakboardHub" ^
  -ConfigureDatabase True -CreateDatabase True ^
  -DatabaseServerName "SQLSRV01\PROD" ^
  -DatabaseName "PeakboardHub" ^
  -DatabaseUsername "pbhub" -DatabasePassword "S3hr$icher!"
```

**Update einer bestehenden Installation ohne Datenbank-Backup:**

```bat
PeakboardHubSetup.exe -Silent True ^
  -InstallPath "C:\inetpub\PeakboardHub" ^
  -ConfigureDatabase True -CreateDatabase False ^
  -DatabaseServerName "localhost\SQLEXPRESS" ^
  -DatabaseName "PeakboardHub" ^
  -DatabaseUsername "pbhub" -DatabasePassword "S3hr$icher!" ^
  -BackupDatabase False
```

**Nur Public API installieren:**

```bat
PeakboardHubSetup.exe -Silent True -ApiInstallPath "C:\inetpub\PeakboardHubApi"
```

## Silent-Deinstallation

Bei der Installation wird für jede Hub-Instanz ein eigener Deinstaller mitgeliefert.

{% include styled_table.html %}
{: .w-full }
| Komponente | Deinstaller |
|---|---|
| Hub (inklusive ggf. API) | `<InstallPath>\Uninstall\uninstall.exe` |
| Eigenständige API | `<ApiInstallPath>\Uninstall\api_uninstall.exe` |

Der Pfad steht auch im Registry-Wert `UninstallString` des jeweiligen Eintrags unter Apps & Features.

### Aktivierung

```bat
"C:\inetpub\PeakboardHub\Uninstall\uninstall.exe" --silent
```

Ohne `--silent` startet die grafische Deinstallation.

### Argumentreferenz

{% include styled_table.html %}
{: .w-full }
| Argument | Alias | Standard | Beschreibung |
|---|---|---|---|
| `--silent` | `-s` | – | Unbeaufsichtigte Deinstallation (kein UI). |
| `--remove-database` | `-RemoveDatabase` | aus | Zusätzlich die **Datenbank und den Login löschen** sowie die zugehörigen Hub Flows und hochgeladenen Dateien entfernen. |

### Standardverhalten (ohne `--remove-database`)

Im Silent-Modus werden die **Standard- und Pflichtkomponenten** entfernt:

* Programmdateien des Peakboard Hub (Ordner wird nach Beendigung des Prozesses gelöscht),
* IIS-Seite und App Pool **dieser** Installation,
* Registry-Eintrag und Apps-&-Features-Eintrag **dieser** Installation.

Die Datenbank, die Hub Flows und die hochgeladenen Dateien bleiben **standardmäßig erhalten** (Daten werden bewusst geschützt). Sie werden **nur** mit `--remove-database` gelöscht.

**Nicht** automatisch entfernt werden (Opt-in-Komponenten, im Silent-Modus ausgelassen): SQL Server Express, .NET Hosting Bundle und das IIS-Windows-Feature.

### Schutz bei mehreren Hub-Instanzen und gemeinsamen Ressourcen

* **Gemeinsame Datenbank:** Mit `--remove-database` wird die Datenbank **nur** gelöscht, wenn diese Installation nachweislich der **alleinige** Nutzer ist. Verweist eine andere (auch ältere) Hub- oder API-Installation auf dieselbe Datenbank, bleibt sie **erhalten** (Fail-Safe).
* **Gemeinsame IIS-Seite und Zertifikate:** Werden nur entfernt, wenn es sich um die **letzte** Hub-Installation auf der Maschine handelt.

### Rückgabe- und Exit-Codes

{% include styled_table.html %}
{: .w-full }
| Exit-Code | Bedeutung |
|---|---|
| `0` | Deinstallation durchgeführt |
| `-1` | Konnte nicht ausgeführt werden (zum Beispiel `uninstall.json` fehlt oder ist defekt) |

### Beispiele

**Hub deinstallieren, Datenbank und Daten behalten:**

```bat
"C:\inetpub\PeakboardHub\Uninstall\uninstall.exe" --silent
```

**Hub vollständig deinstallieren – inklusive Datenbank, Login, Hub Flows und Dateien:**

```bat
"C:\inetpub\PeakboardHub\Uninstall\uninstall.exe" --silent --remove-database
```

**Eigenständige Public API deinstallieren:**

```bat
"C:\inetpub\PeakboardHubApi\Uninstall\api_uninstall.exe" --silent
```

## Hinweise

* **SQL Server Express auf bereits vorhandenem SQL Server:** Ist bereits ein (gegebenenfalls defekter) SQL Server installiert, kann die Installation einer neuen SQL-Express-Instanz fehlschlagen (SQL-Setup-Fehler `0x84B40002` beziehungsweise `1722`). Im Assistenten warnt das Setup in diesem Fall; im Silent-Modus `-InstallSqlServerExpress` weglassen und stattdessen über `-ConfigureDatabase` und `-CreateDatabase False` eine vorhandene Instanz verwenden, oder den vorhandenen SQL Server zuvor vollständig entfernen.
* **Logdateien:**
  * Setup: `C:\ProgramData\Peakboard\LocalState\Logs\Setup\PeakboardHubSetup_<Zeitstempel>.log`
  * SQL-Server-Setup (bei Express-Installation): `C:\Program Files\Microsoft SQL Server\150\Setup Bootstrap\Log\Summary.txt`
