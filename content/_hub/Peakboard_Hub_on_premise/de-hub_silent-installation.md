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


Dieser Artikel beschreibt die unbeaufsichtigte, per Kommandozeile gesteuerte Installation und Deinstallation des Peakboard Hub on premise einschließlich der Public API. Er richtet sich an Administratoren und an Automatisierungsszenarien (Softwareverteilung, CI/CD-Pipelines, Skripte).

Der Peakboard Hub und die Public API laufen als **Windows-Dienste** (`PeakboardHub` / `PeakboardHubApi`, Lokales System, verzögerter automatischer Start). IIS wird nicht benötigt. Wie eine Installation migriert wird, die noch im IIS läuft, beschreibt der Artikel [Migration von IIS zu einem Windows-Dienst](/hub/Peakboard_Hub_on_premise/de-hub_migration-iis-to-windows-service.html).

<div class="box-warning" markdown="1"> **Wichtig**: Setup und Deinstallation **müssen mit erhöhten Rechten (Administrator) laufen**. Sie legen Windows-Dienste an, konfigurieren die Windows-Firewall und die Registry und installieren — falls gewünscht — den SQL Server. Ohne erhöhte Rechte gestartet, schlagen sie fehl.
</div>

## Silent-Installation

### Aktivierung

Die unbeaufsichtigte Installation wird mit dem Argument `-Silent True` aktiviert:

```bat
PeakboardHubSetup.exe -Silent True -InstallPath "C:\Program Files\Peakboard\PeakboardHub"
```

Ohne `-Silent True` startet der grafische Assistent.

<div class="box-warning" markdown="1"> **Wichtig**: Ein Silent-Lauf installiert wirklich — einen Testmodus gibt es nicht. Probiere deine Kommandozeile zuerst auf einem Testserver aus.
</div>

### Aufrufformate der Argumente

Beide Schreibweisen werden akzeptiert und dürfen gemischt werden:

{% include styled_table.html %}
{: .w-full }
| Format | Beispiel |
|---|---|
| `-key value` | `-InstallPath "C:\Program Files\Peakboard\PeakboardHub"` |
| `key=value` | `InstallPath="C:\Program Files\Peakboard\PeakboardHub"` |

* Ein `-key` **ohne** folgenden Wert (oder gefolgt von einem weiteren `-key`) wird als `True` interpretiert. `-Silent` ist also gleichbedeutend mit `-Silent True`.
* Argumente, die einen Wert erwarten (Pfade, Namen, Ports, Passwörter), nehmen **immer** das nächste Token als Wert, auch wenn es mit `-` beginnt. Ein Passwort, das mit einem Bindestrich beginnt, ist also kein Problem.
* Setze Werte mit Leerzeichen in Anführungszeichen.
* **Unbekannte Argumente** werden ignoriert und nur in die Protokolldatei geschrieben.
* Groß- und Kleinschreibung der Schlüssel spielt **keine** Rolle.

### Wahrheitswerte (Boolean)

Als `True` gelten (ohne Beachtung der Groß-/Kleinschreibung): **`True`**, **`Yes`**, **`1`**. **Alles andere** (auch `False`, `No`, `0`, leer) ist `False`.

### Rückgabe- und Exit-Codes

{% include styled_table.html %}
{: .w-full }
| Exit-Code | Bedeutung |
|---|---|
| `0` | Installation erfolgreich |
| `-1` | Fehler oder Abbruch |

Zusätzlich wird der Fortschritt in die Konsole geschrieben; das ausführliche Setup-Protokoll liegt unter `C:\ProgramData\Peakboard\LocalState\Logs\Setup\PeakboardHubSetup_<Zeitstempel>.log`. Bei einem Fehler zeigt die Konsole den Pfad der Protokolldatei.

### Argumentreferenz

#### Allgemein

{% include styled_table.html %}
{: .w-full }
| Argument | Werte | Standard | Beschreibung |
|---|---|---|---|
| `-Silent` | `True/False` | `False` | Aktiviert die unbeaufsichtigte Installation (ohne Oberfläche). |

#### Peakboard Hub

{% include styled_table.html %}
{: .w-full }
| Argument | Werte | Standard | Beschreibung |
|---|---|---|---|
| `-InstallPath` | Pfad | – | Ordner des Peakboard Hub. Empfohlen ist `C:\Program Files\Peakboard\PeakboardHub`. Muss ein absoluter Pfad sein. Geschützte Orte (ein Laufwerksstamm, `C:\Windows`, `C:\Program Files` außerhalb von `C:\Program Files\Peakboard\`) werden abgelehnt. |
| `-InstallPeakboardHub` | `True/False` | abgeleitet | Programmdateien des Peakboard Hub kopieren. |
| `-InstallNetHostingBundle` | `True/False` | abgeleitet | Sicherstellen, dass die ASP.NET Core Runtime vorhanden ist (wird aus dem mitgelieferten Hosting Bundle nur installiert, wenn sie fehlt). Wird automatisch sichergestellt, sobald Hub oder API installiert werden. |
| `-ConfigureHubService` | `True/False` | abgeleitet | Windows-Dienst des Peakboard Hub anlegen oder aktualisieren, seine(n) Port(s) in die `appsettings.json` schreiben und in der Windows-Firewall öffnen. *(`-ConfigureIisPage` wird weiterhin als Alias akzeptiert.)* |
| `-HubServiceName` | Text | `PeakboardHub` | Name des Windows-Dienstes (der Anzeigename folgt ihm). Ohne dieses Argument behält ein vorhandener Dienst des Zielordners seinen Namen; ist `PeakboardHub` bereits von einer anderen Installation belegt, wird eine Nummer angehängt (`PeakboardHub_2`). Ein ausdrücklich angegebener Name wird unverändert verwendet — hat ihn bereits ein anderer Dienst, schlägt das Setup fehl. |
| `-HubPort` | Zahl | `20588` | HTTP-Port. Bei einem Update bleibt der konfigurierte Port erhalten, sofern dieses Argument nicht angegeben ist. |
| `-HubHttps` | `True/False` | `False` | HTTPS-Endpunkt aktivieren. Wird durch jedes `-HubCert*`- oder `-HubHttpsPort`-Argument impliziert. |
| `-HubHttpsPort` | Zahl | `20589` | HTTPS-Port. |
| `-HubCertSubject` | Text | – | Antragsteller (Subject) eines HTTPS-Zertifikats im Speicher **Eigene Zertifikate** des lokalen Computers (`LocalMachine\My`). Empfohlen, weil kein Passwort gespeichert wird. Passen mehrere Zertifikate, wird das am spätesten ablaufende verwendet. |
| `-HubCertPath` | Pfad | – | HTTPS-Zertifikat als **Datei** (`.pfx`) mit privatem Schlüssel. |
| `-HubCertPassword` | Text | – | Passwort der `.pfx`-Datei. Es wird in der `appsettings.json` gespeichert — nutze besser `-HubCertSubject`. |
| `-InstallSqlServerExpress` | `True/False` | `False` | Lokale SQL Server Express Instanz installieren (Name `SQLEXPRESS`). **Nur** setzen, wenn noch kein funktionierender SQL Server vorhanden ist. |

#### Public API

{% include styled_table.html %}
{: .w-full }
| Argument | Werte | Standard | Beschreibung |
|---|---|---|---|
| `-ApiInstallPath` | Pfad | – | Ordner der Public API, empfohlen `C:\Program Files\Peakboard\PeakboardHubApi`. Muss sich vom Hub-Ordner unterscheiden. |
| `-InstallPeakboardHubApi` | `True/False` | abgeleitet | Programmdateien der Public API kopieren. |
| `-ConfigureApiService` | `True/False` | abgeleitet | Windows-Dienst der Public API anlegen oder aktualisieren, ihre(n) Port(s) schreiben und in der Windows-Firewall öffnen. *(`-ConfigureApiIisPage` wird weiterhin als Alias akzeptiert.)* |
| `-ApiServiceName` | Text | `PeakboardHubApi` | Name des Windows-Dienstes der API. Gleiche Regeln wie bei `-HubServiceName`; muss sich vom Dienstnamen des Hub unterscheiden. |
| `-ApiPort` | Zahl | `20688` | HTTP-Port der API. |
| `-ApiHttps` | `True/False` | `False` | HTTPS-Endpunkt für die API aktivieren. |
| `-ApiHttpsPort` | Zahl | `20689` | HTTPS-Port der API. |
| `-ApiCertSubject` / `-ApiCertPath` / `-ApiCertPassword` | Text | – | Zertifikat der API — gleiche Bedeutung wie die `-HubCert*`-Argumente. |
| `-ReconfigureApiDb` | `True/False` | `False` | **Nur beim Update der API:** die Verbindungszeichenfolge der API durch die des Peakboard Hub ersetzen. Ohne dieses Argument behält ein Update der API ihre eigene Verbindungszeichenfolge. Eine neue API übernimmt die Verbindungszeichenfolge des Hub automatisch. |

#### Datenbank

Die Datenbank wird nur mit `-ConfigureDatabase True` eingerichtet.

{% include styled_table.html %}
{: .w-full }
| Argument | Werte | Standard | Beschreibung |
|---|---|---|---|
| `-ConfigureDatabase` | `True/False` | `False` | Datenbank in diesem Lauf einrichten oder anbinden. **Im Silent-Modus nicht automatisch aktiv.** |
| `-DatabaseServerName` | Text | `localhost\SQLEXPRESS` | SQL-Server-Instanz. |
| `-DatabaseName` | Text | `PeakboardHub` | Name der Datenbank. Darf keine Anführungszeichen oder Klammern enthalten. |
| `-CreateDatabase` | `True/False` | `False` | `True` = **neue** Datenbank anlegen (darf noch nicht existieren). `False` = **vorhandene** Datenbank nutzen (muss existieren). |
| `-CreateLogin` | `True/False` | wie `-CreateDatabase` | `True` = neuen SQL-Login anlegen. `False` = vorhandenen Login nutzen. |
| `-DatabaseUsername` | Text | – | SQL-Login, mit dem der Peakboard Hub arbeitet. |
| `-DatabasePassword` | Text | – | Passwort des SQL-Logins. |
| `-AdminSqlAuth` | `True/False` | `False` | Wie sich das Setup am SQL Server anmeldet, um Datenbank und Login anzulegen. `False` = der aktuelle Windows-Nutzer (lokaler SQL Server). `True` = ein SQL-Server-Login mit sysadmin-Rechten — erforderlich für einen entfernten SQL Server. |
| `-AdminUsername` / `-AdminPassword` | Text | – | Sysadmin-Login und Passwort. **Erforderlich** bei `-AdminSqlAuth True`. Wird nur während des Setups genutzt und nie gespeichert. |
| `-BackupDatabase` | `True/False` | `True` | Vor einem **Update**, das die Programmdateien ersetzt, eine Sicherung der Datenbank anlegen (nur wenn die Datenbank bereits existiert). Schlägt die Sicherung fehl, wird der Silent-Lauf **abgebrochen** — mit `-BackupDatabase False` überspringst du die Sicherung. |
| `-BackupFolder` | Pfad | Standard der Instanz | Ordner für die Sicherungsdatei. Die Datei schreibt der SQL Server, deshalb muss der Ordner auf dem Datenbankserver liegen und für das Dienstkonto des SQL Servers beschreibbar sein. |

<div class="box-warning" markdown="1"> Bei `-ConfigureDatabase True` sind **alle vier** Werte erforderlich: `-DatabaseServerName`, `-DatabaseName`, `-DatabaseUsername`, `-DatabasePassword`. Ein neuer Login muss ein **gültiger SQL-Bezeichner** sein (beginnt mit einem Buchstaben oder Unterstrich, danach nur Buchstaben, Ziffern oder Unterstriche), und sein Passwort muss mindestens 8 Zeichen lang sein, drei der vier Zeichenarten (Großbuchstaben, Kleinbuchstaben, Ziffern, Sonderzeichen) enthalten und darf den Login-Namen nicht enthalten.
</div>

#### Benutzer-Authentifizierung

{% include styled_table.html %}
{: .w-full }
| Argument | Werte | Standard | Beschreibung |
|---|---|---|---|
| `-LocalUsers` | `True/False` | `False` | `True` = Hub-Nutzer gegen die lokalen Windows-Konten des Servers authentifizieren. `False` (oder weggelassen) = **Active Directory**. |

#### Firewall

{% include styled_table.html %}
{: .w-full }
| Argument | Werte | Standard | Beschreibung |
|---|---|---|---|
| `-ConfigureFirewall` | `True/False` | `True` | Die Ports von Hub und API als eingehende Regeln in der Windows-Firewall öffnen. Gilt nur für ein Produkt, dessen Dienst in diesem Lauf konfiguriert wird. Mit `False` verwaltest du die Firewall selbst. |

#### Migration von IIS

Diese Argumente spielen nur beim Update einer Installation eine Rolle, die noch im IIS läuft. Details findest du unter [Migration von IIS zu einem Windows-Dienst](/hub/Peakboard_Hub_on_premise/de-hub_migration-iis-to-windows-service.html).

{% include styled_table.html %}
{: .w-full }
| Argument | Werte | Standard | Beschreibung |
|---|---|---|---|
| `-HubEndpointsFromIis` | `True/False` | `True` | `True` = **alle** wiederverwendbaren Bindungen der IIS-Seite übernehmen (HTTP und HTTPS samt Zertifikat). `False` = nichts aus dem IIS übernehmen; es gelten nur die Ports dieses Laufs (`-HubPort`, `-HubHttps*`, `-HubCert*`). Die IIS-Seite wird in beiden Fällen gelöscht. |
| `-ApiEndpointsFromIis` | `True/False` | `True` | Dasselbe für die IIS-Seite der Public API. |
| `-HubMigrateFrom` | Pfad | – | Die Installation aus der IIS-Zeit in diesem Ordner nach `-InstallPath` verschieben. Die Datenordner werden nach `C:\ProgramData\Peakboard\PeakboardHub` verschoben. Der Ordner muss auf demselben Laufwerk liegen wie `C:\ProgramData`. Dieselbe Kommandozeile kann gefahrlos erneut ausgeführt werden. |
| `-ApiMigrateFrom` | Pfad | – | Dasselbe für die Public API. Nur zusammen mit `-HubMigrateFrom`. |
| `-RemoveOldFolders` | `True/False` | `False` | Den bzw. die alten Ordner nach erfolgreichem Verschieben löschen — einschließlich manuell dort abgelegter Dateien. |

<div class="box-tip" markdown="1"> **Hinweis**: Die Argumente `-ContinueInstallation` und `-InstallIisFeature` älterer Setups gibt es nicht mehr. Sie werden ignoriert und nur in die Protokolldatei geschrieben.
</div>

### Verhalten und automatische Voreinstellungen

* **Pfad impliziert Komponente:** Ist `-InstallPath` ohne weitere Hub-Argumente gesetzt, installiert das Setup den **Hub**, stellt die **.NET Runtime** sicher und **konfiguriert den Hub-Dienst**. Dasselbe gilt für `-ApiInstallPath`, das die **API** installiert und den **API-Dienst konfiguriert**.
* **Sobald du ein weiteres Hub-Argument angibst** (zum Beispiel `-ConfigureDatabase` oder `-InstallSqlServerExpress`), entfällt diese Voreinstellung, und jede Komponente muss ausdrücklich genannt werden — ergänze `-InstallPeakboardHub True`.
* **Ohne vorhandenen Dienst ist die Dienstkonfiguration Pflicht.** Bei einer neuen Installation oder beim Update einer Installation, die noch im IIS läuft, wird der Dienst immer konfiguriert, egal was die Argumente sagen. Nur beim Update einer bestehenden Dienst-Installation darf sie entfallen — der Dienst wird dann gestoppt, aktualisiert und mit seiner aktuellen Konfiguration wieder gestartet.
* **Die Datenbank wird im Silent-Modus NICHT automatisch eingerichtet.** Setze `-ConfigureDatabase True` zusammen mit den Datenbankwerten, wenn das Setup die Datenbank anlegen oder anbinden soll.
* **SQL Server Express** wird nur mit `-InstallSqlServerExpress True` installiert.
* **API ohne `-ConfigureDatabase`:** Die API teilt sich die Datenbank mit dem Hub. Eine neue API übernimmt die Verbindungszeichenfolge eines vorhandenen Peakboard Hub; gibt es keinen, wird ein deutlich erkennbarer **Platzhalter** in die `appsettings.json` der API geschrieben, den du anschließend von Hand ersetzen musst.

### Was ein Update an der appsettings.json ändert

Ein Update — silent oder mit dem Assistenten — ändert an der `appsettings.json` einer Installation **nichts** außer dem, was du ausdrücklich angefordert hast:

* **Ausdrückliche Änderungen** sind Kommandozeilenargumente wie `-HubPort`, `-HubHttpsPort`, `-HubHttps`, `-HubCert*`, `-LocalUsers`, `-ConfigureDatabase`, `-ReconfigureApiDb` und ihre Gegenstücke für die API — oder im Assistenten ein Wert, den du geändert hast.
* **Alles andere bleibt, wie es ist**: Ports, die HTTPS-Einstellungen, die Verbindungszeichenfolge, die Art der Authentifizierung, aus dem IIS übernommene Endpunkte und deine eigenen Einträge.
* **Neue Einstellungen**, die mit der neuen Version kommen, werden ergänzt. Vorhandene Einträge werden nie durch den mitgelieferten Standard ersetzt.
* Während die Programmdateien ersetzt werden, wird die Datei als `appsettings.json.installerbak` gesichert und anschließend wiederhergestellt — auch wenn das Update fehlschlägt.

### Dienste während eines Updates

Während ein Update die Programmdateien ersetzt, wird der Windows-Dienst des Produkts auf **Deaktiviert** gesetzt, damit ihn mitten im Kopieren niemand starten kann. Sein ursprünglicher Starttyp wird wiederhergestellt, sobald die Dateien an ihrem Platz sind. Schlägt das Update beim Kopieren fehl oder wird es abgebrochen, bleibt der Dienst deaktiviert und die Konsole meldet `The program files in "<folder>" are incomplete. The service '<name>' is disabled. Run setup again.` Starte dasselbe Setup noch einmal, um das Update abzuschließen.

### Beispiele

**Neuinstallation — Hub + SQL Express + Datenbank auf einem leeren Server:**

```bat
PeakboardHubSetup.exe -Silent True ^
  -InstallPath "C:\Program Files\Peakboard\PeakboardHub" -InstallPeakboardHub True ^
  -InstallSqlServerExpress True ^
  -ConfigureDatabase True -CreateDatabase True ^
  -DatabaseServerName "localhost\SQLEXPRESS" ^
  -DatabaseName "PeakboardHub" ^
  -DatabaseUsername "pbhub" -DatabasePassword "V3rySecure!" ^
  -LocalUsers True
```

**Hub mit einem entfernten SQL Server:**

```bat
PeakboardHubSetup.exe -Silent True ^
  -InstallPath "C:\Program Files\Peakboard\PeakboardHub" -InstallPeakboardHub True ^
  -ConfigureDatabase True -CreateDatabase True ^
  -DatabaseServerName "SQLSRV01\PROD" ^
  -DatabaseName "PeakboardHub" ^
  -DatabaseUsername "pbhub" -DatabasePassword "V3rySecure!" ^
  -AdminSqlAuth True -AdminUsername "sa" -AdminPassword "Adm1nSecret!"
```

**Hub auf eigenen Ports mit HTTPS aus dem Zertifikatspeicher:**

```bat
PeakboardHubSetup.exe -Silent True ^
  -InstallPath "C:\Program Files\Peakboard\PeakboardHub" ^
  -HubPort 8080 -HubHttps True -HubHttpsPort 8443 -HubCertSubject hub.example.com
```

**Bestehende Installation ohne Datenbanksicherung aktualisieren:**

```bat
PeakboardHubSetup.exe -Silent True ^
  -InstallPath "C:\Program Files\Peakboard\PeakboardHub" ^
  -BackupDatabase False
```

**Nur die Public API neben einem vorhandenen Hub installieren:**

```bat
PeakboardHubSetup.exe -Silent True -ApiInstallPath "C:\Program Files\Peakboard\PeakboardHubApi"
```

## Silent-Deinstallation

Jede Hub-Installation bringt ihren eigenen Uninstaller mit.

{% include styled_table.html %}
{: .w-full }
| Komponente | Uninstaller |
|---|---|
| Hub (optional inklusive API) | `<InstallPath>\Uninstall\uninstall.exe` |
| Eigenständige API | `<ApiInstallPath>\Uninstall\api_uninstall.exe` |

Den Pfad findest du auch im Registry-Wert `UninstallString` des zugehörigen Eintrags unter Apps & Features.

### Aktivierung

```bat
"C:\Program Files\Peakboard\PeakboardHub\Uninstall\uninstall.exe" --silent
```

Ohne `--silent` startet der grafische Uninstaller. `-Silent True` wird ebenfalls akzeptiert.

### Argumentreferenz

{% include styled_table.html %}
{: .w-full }
| Argument | Alias | Beschreibung |
|---|---|---|
| `--silent` | `-s`, `-Silent` | Unbeaufsichtigte Deinstallation (ohne Oberfläche). |
| `--remove-database` | `-RemoveDatabase` | Zusätzlich die **Datenbank löschen** und die zugehörigen Hub Flows und hochgeladenen Dateien entfernen. |
| `--remove-data-folder` | `-RemoveDataFolder` | Zusätzlich den Datenordner unter `C:\ProgramData\Peakboard` löschen. |
| `--remove-database-user` | `-RemoveDatabaseUser` | Den SQL-Login auch dann entfernen, wenn er schon vor der Installation existierte. |
| `--keep-database-user` | `-KeepDatabaseUser` | Den SQL-Login behalten, auch wenn das Setup ihn angelegt hat. Hat Vorrang vor `--remove-database-user`. |

### Standardverhalten

Im Silent-Modus werden die **Standardkomponenten** entfernt:

* die Programmdateien des Hub, sein Windows-Dienst und seine Firewall-Regeln,
* der Registry-Eintrag und der Eintrag unter Apps & Features **dieser** Installation,
* die Public API, wenn sie zusammen mit dem Hub installiert ist,
* der SQL-Login, wenn das Setup ihn angelegt hat.

Die Datenbank, die Hub Flows, die hochgeladenen Dateien und der Datenordner **bleiben standardmäßig erhalten**. **Nie** im Silent-Modus entfernt werden: SQL Server Express und das .NET Hosting Bundle.

### Schutz bei mehreren Hub-Installationen

* **Gemeinsame Datenbank:** Mit `--remove-database` wird die Datenbank **nur** gelöscht, wenn diese Installation nachweislich ihr **einziger** Nutzer ist. Zeigt noch eine andere Hub- oder API-Installation auf dieselbe Datenbank, bleibt sie **erhalten**.
* **Datenordner:** Mit `--remove-data-folder` wird der Ordner nur gelöscht, wenn er unter `C:\ProgramData\Peakboard` liegt und kein anderer Peakboard Hub dieselbe Datenbank nutzt.
* **Zertifikate:** Werden nur entfernt, wenn dies die **letzte** Hub-Installation auf dem Server ist.

### Rückgabe- und Exit-Codes

{% include styled_table.html %}
{: .w-full }
| Exit-Code | Bedeutung |
|---|---|
| `0` | Deinstallation abgeschlossen |
| `-1` | Konnte nicht ausgeführt werden (zum Beispiel fehlt `uninstall.json` oder ist beschädigt) |

### Beispiele

**Hub deinstallieren, Datenbank und Daten behalten:**

```bat
"C:\Program Files\Peakboard\PeakboardHub\Uninstall\uninstall.exe" --silent
```

**Hub vollständig deinstallieren — inklusive Datenbank, Datenordner, Hub Flows und Dateien:**

```bat
"C:\Program Files\Peakboard\PeakboardHub\Uninstall\uninstall.exe" --silent --remove-database --remove-data-folder
```

**Eigenständige Public API deinstallieren:**

```bat
"C:\Program Files\Peakboard\PeakboardHubApi\Uninstall\api_uninstall.exe" --silent
```

## Hinweise

* **SQL Server Express über einem vorhandenen SQL Server:** Ist bereits ein (möglicherweise defekter) SQL Server installiert, kann die Installation einer neuen SQL-Express-Instanz fehlschlagen (SQL-Setup-Fehler `0x84B40002` oder `1722`). Der Assistent warnt in diesem Fall; im Silent-Modus lässt du `-InstallSqlServerExpress` weg und nutzt entweder eine vorhandene Instanz über `-ConfigureDatabase` + `-CreateDatabase False` oder entfernst den vorhandenen SQL Server vorher vollständig.
* **HTTPS und Windows Single Sign-on:** Das Setup legt den HTTPS-Endpunkt immer auf HTTP/1.1 fest, weil die Windows-Authentifizierung über HTTP/2 nicht funktioniert.
* **Protokolldateien:**
  * Setup: `C:\ProgramData\Peakboard\LocalState\Logs\Setup\PeakboardHubSetup_<Zeitstempel>.log`
  * SQL-Server-Setup (bei Installation von Express): `C:\Program Files\Microsoft SQL Server\150\Setup Bootstrap\Log\Summary.txt`
