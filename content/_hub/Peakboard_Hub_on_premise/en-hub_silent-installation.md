---
layout: article
product: hub
title: Silent installation and uninstallation
menu_title: Silent installation
description: Peakboard Hub on premise - unattended installation and uninstallation from the command line
lang: en
weight: 107
ref: hub-107
redirect_from:
---


This article describes the unattended, command-line driven installation and uninstallation of the Peakboard Hub on premise, including the Public API. It is written for administrators and for automation use cases (software deployment, CI/CD pipelines, scripts).

The Peakboard Hub and the Public API run as **Windows services** (`PeakboardHub` / `PeakboardHubApi`, Local System, delayed automatic start). IIS is not required. How an installation that still runs in IIS is migrated is described in [Migration from IIS to a Windows service](/hub/Peakboard_Hub_on_premise/en-hub_migration-iis-to-windows-service.html).

<div class="box-warning" markdown="1"> **Important**: Both setup and uninstall **must run with elevated (administrator) rights**. They create Windows services, configure the Windows Firewall and the registry and — if requested — install the SQL Server. Started without elevation, they fail.
</div>

## Silent installation

### Activation

The unattended installation is activated with the `-Silent True` argument:

```bat
PeakboardHubSetup.exe -Silent True -InstallPath "C:\Program Files\Peakboard\PeakboardHub"
```

Without `-Silent True` the graphical wizard starts.

<div class="box-warning" markdown="1"> **Important**: A silent run really installs — there is no test mode. Try your command line on a test server first.
</div>

### Argument syntax

Both notations are accepted and may be mixed:

{% include styled_table.html %}
{: .w-full }
| Format | Example |
|---|---|
| `-key value` | `-InstallPath "C:\Program Files\Peakboard\PeakboardHub"` |
| `key=value` | `InstallPath="C:\Program Files\Peakboard\PeakboardHub"` |

* A `-key` **without** a following value (or followed by another `-key`) is interpreted as `True`. `-Silent` is therefore equivalent to `-Silent True`.
* Arguments that take a value (paths, names, ports, passwords) **always** use the next token as their value, even if it starts with `-`. A password that starts with a dash is therefore safe.
* Put values that contain spaces in quotes.
* **Unknown arguments** are ignored and only written to the log file.
* Keys are **not** case sensitive.

### Boolean values

Treated as `True` (case insensitive): **`True`**, **`Yes`**, **`1`**. **Anything else** (including `False`, `No`, `0`, empty) is `False`.

### Return and exit codes

{% include styled_table.html %}
{: .w-full }
| Exit code | Meaning |
|---|---|
| `0` | Installation successful |
| `-1` | Error or cancellation |

In addition the progress is written to the console; the detailed setup log lives under `C:\ProgramData\Peakboard\LocalState\Logs\Setup\PeakboardHubSetup_<timestamp>.log`. On a failure, the console shows the path of the log file.

### Argument reference

#### General

{% include styled_table.html %}
{: .w-full }
| Argument | Values | Default | Description |
|---|---|---|---|
| `-Silent` | `True/False` | `False` | Activates the unattended installation (no UI). |

#### Peakboard Hub

{% include styled_table.html %}
{: .w-full }
| Argument | Values | Default | Description |
|---|---|---|---|
| `-InstallPath` | Path | – | Folder of the Peakboard Hub. The recommended location is `C:\Program Files\Peakboard\PeakboardHub`. Must be an absolute path. Protected locations (a drive root, `C:\Windows`, `C:\Program Files` outside of `C:\Program Files\Peakboard\`) are rejected. |
| `-InstallPeakboardHub` | `True/False` | derived | Copy the program files of the Peakboard Hub. |
| `-InstallNetHostingBundle` | `True/False` | derived | Make sure the ASP.NET Core runtime is present (installed from the bundled Hosting Bundle only if it is missing). Ensured automatically whenever the Hub or the API is installed. |
| `-ConfigureHubService` | `True/False` | derived | Create or update the Windows service of the Peakboard Hub, write its port(s) into `appsettings.json` and open them in the Windows Firewall. *(`-ConfigureIisPage` is still accepted as an alias.)* |
| `-HubServiceName` | Text | `PeakboardHub` | Name of the Windows service (the display name follows it). Without this argument, an existing service of the target folder keeps its name; if `PeakboardHub` is already taken by another installation, a number is added (`PeakboardHub_2`). An explicitly given name is used as is — if another service already has it, the setup fails. |
| `-HubPort` | Number | `20588` | HTTP port. On an update the configured port is kept unless this argument is given. |
| `-HubHttps` | `True/False` | `False` | Enable an HTTPS endpoint. Implied by any `-HubCert*` or `-HubHttpsPort` argument. |
| `-HubHttpsPort` | Number | `20589` | HTTPS port. |
| `-HubCertSubject` | Text | – | Subject of an HTTPS certificate in the **Personal** store of the local computer (`LocalMachine\My`). Recommended, because no password is stored. If several certificates match, the one that expires last is used. |
| `-HubCertPath` | Path | – | HTTPS certificate **file** (`.pfx`) with private key. |
| `-HubCertPassword` | Text | – | Password of the `.pfx` file. It is stored in `appsettings.json` — prefer `-HubCertSubject`. |
| `-InstallSqlServerExpress` | `True/False` | `False` | Install a local SQL Server Express instance (named `SQLEXPRESS`). **Only** set this if no working SQL Server is available yet. |

#### Public API

{% include styled_table.html %}
{: .w-full }
| Argument | Values | Default | Description |
|---|---|---|---|
| `-ApiInstallPath` | Path | – | Folder of the Public API, recommended `C:\Program Files\Peakboard\PeakboardHubApi`. Must differ from the Hub folder. |
| `-InstallPeakboardHubApi` | `True/False` | derived | Copy the program files of the Public API. |
| `-ConfigureApiService` | `True/False` | derived | Create or update the Windows service of the Public API, write its port(s) and open them in the Windows Firewall. *(`-ConfigureApiIisPage` is still accepted as an alias.)* |
| `-ApiServiceName` | Text | `PeakboardHubApi` | Name of the Windows service of the API. Same rules as `-HubServiceName`; must differ from the Hub's service name. |
| `-ApiPort` | Number | `20688` | HTTP port of the API. |
| `-ApiHttps` | `True/False` | `False` | Enable an HTTPS endpoint for the API. |
| `-ApiHttpsPort` | Number | `20689` | HTTPS port of the API. |
| `-ApiCertSubject` / `-ApiCertPath` / `-ApiCertPassword` | Text | – | Certificate of the API — same meaning as the `-HubCert*` arguments. |
| `-ReconfigureApiDb` | `True/False` | `False` | **API update only:** replace the API's connection string with the one of the Peakboard Hub. Without it, an API update keeps its own connection string. A new API takes the Hub's connection string automatically. |

#### Database

Database setup only runs with `-ConfigureDatabase True`.

{% include styled_table.html %}
{: .w-full }
| Argument | Values | Default | Description |
|---|---|---|---|
| `-ConfigureDatabase` | `True/False` | `False` | Set up or connect the database in this run. **Not enabled automatically in silent mode.** |
| `-DatabaseServerName` | Text | `localhost\SQLEXPRESS` | SQL Server instance. |
| `-DatabaseName` | Text | `PeakboardHub` | Database name. Must not contain quotes or brackets. |
| `-CreateDatabase` | `True/False` | `False` | `True` = create a **new** database (must not exist yet). `False` = use an **existing** database (must exist). |
| `-CreateLogin` | `True/False` | like `-CreateDatabase` | `True` = create a new SQL login. `False` = use an existing login. |
| `-DatabaseUsername` | Text | – | SQL login used by the Peakboard Hub. |
| `-DatabasePassword` | Text | – | Password of the SQL login. |
| `-AdminSqlAuth` | `True/False` | `False` | How the setup signs in to the SQL Server to create the database and login. `False` = the current Windows user (local SQL Server). `True` = an SQL Server login with sysadmin rights — required for a remote SQL Server. |
| `-AdminUsername` / `-AdminPassword` | Text | – | Sysadmin login and password. **Required** with `-AdminSqlAuth True`. Only used during the setup, never stored. |
| `-BackupDatabase` | `True/False` | `True` | Back up the database before an **update** replaces the program files (only if the database already exists). If the backup fails, the silent run is **cancelled** — pass `-BackupDatabase False` to skip the backup. |
| `-BackupFolder` | Path | default of the instance | Folder for the backup file. The file is written by the SQL Server, so the folder must be on the database server and writable by the SQL Server service account. |

<div class="box-warning" markdown="1"> With `-ConfigureDatabase True`, **all four** values are required: `-DatabaseServerName`, `-DatabaseName`, `-DatabaseUsername`, `-DatabasePassword`. A new login must be a **valid SQL identifier** (starts with a letter or underscore, then only letters, digits or underscores), and its password must be at least 8 characters long, contain three of the four character types (upper case, lower case, digits, symbols) and must not contain the login name.
</div>

#### User authentication

{% include styled_table.html %}
{: .w-full }
| Argument | Values | Default | Description |
|---|---|---|---|
| `-LocalUsers` | `True/False` | `False` | `True` = authenticate Hub users against the local Windows accounts of the server. `False` (or omitted) = **Active Directory**. |

#### Firewall

{% include styled_table.html %}
{: .w-full }
| Argument | Values | Default | Description |
|---|---|---|---|
| `-ConfigureFirewall` | `True/False` | `True` | Open the ports of the Hub and the API as inbound rules in the Windows Firewall. Only applies to a product whose service is configured in this run. Pass `False` if you manage the firewall yourself. |

#### Migration from IIS

These arguments only matter when an installation that still runs in IIS is updated. Details are in [Migration from IIS to a Windows service](/hub/Peakboard_Hub_on_premise/en-hub_migration-iis-to-windows-service.html).

{% include styled_table.html %}
{: .w-full }
| Argument | Values | Default | Description |
|---|---|---|---|
| `-HubEndpointsFromIis` | `True/False` | `True` | `True` = take over **all** reusable bindings of the IIS site (HTTP and HTTPS with their certificates). `False` = take nothing from IIS; only the ports of this run (`-HubPort`, `-HubHttps*`, `-HubCert*`) are used. The IIS site is deleted either way. |
| `-ApiEndpointsFromIis` | `True/False` | `True` | The same for the IIS site of the Public API. |
| `-HubMigrateFrom` | Path | – | Move the IIS-era installation in this folder to `-InstallPath`. The data folders move to `C:\ProgramData\Peakboard\PeakboardHub`. The folder must be on the same drive as `C:\ProgramData`. The same command line can safely be run again. |
| `-ApiMigrateFrom` | Path | – | The same for the Public API. Only together with `-HubMigrateFrom`. |
| `-RemoveOldFolders` | `True/False` | `False` | Delete the old folder(s) after a successful move — including files placed there manually. |

<div class="box-tip" markdown="1"> **Note**: The arguments `-ContinueInstallation` and `-InstallIisFeature` of older setups no longer exist. They are ignored and only written to the log file.
</div>

### Behaviour and automatic defaults

* **Path implies component:** If `-InstallPath` is set without any other Hub argument, the setup installs the **Hub**, ensures the **.NET runtime** and **configures the Hub service**. The same applies to `-ApiInstallPath`, which installs the **API** and **configures the API service**.
* **As soon as you pass any other Hub argument** (for example `-ConfigureDatabase` or `-InstallSqlServerExpress`), this defaulting is off and every component must be named explicitly — add `-InstallPeakboardHub True`.
* **Service configuration is mandatory when there is no service yet.** For a fresh install or an update of an installation that still runs in IIS, the service is always configured, whatever the arguments say. Only an update of an existing service installation may leave it off — the service is then stopped, updated and restarted with its current configuration.
* **Database is NOT enabled automatically in silent mode.** Set `-ConfigureDatabase True` together with the database values if the setup should create or connect the database.
* **SQL Server Express** is only installed when `-InstallSqlServerExpress True` is given.
* **API without `-ConfigureDatabase`:** The API shares the Hub database. A new API takes the connection string of an existing Peakboard Hub; if there is none, an obvious **placeholder** is written into the API's `appsettings.json`, which then has to be replaced manually.

### What an update changes in appsettings.json

An update — silent or with the wizard — changes **nothing** in the `appsettings.json` of an installation except what you explicitly requested:

* **Explicit changes** are command-line arguments such as `-HubPort`, `-HubHttpsPort`, `-HubHttps`, `-HubCert*`, `-LocalUsers`, `-ConfigureDatabase`, `-ReconfigureApiDb` and their API counterparts — or, in the wizard, a value you changed.
* **Everything else stays as it is**: ports, the HTTPS settings, the connection string, the authentication mode, endpoints taken over from IIS and your own entries.
* **New settings** introduced by the new version are added. Existing entries are never replaced by the shipped default.
* While the program files are replaced, the file is backed up as `appsettings.json.installerbak` and restored afterwards — also when the update fails.

### Services during an update

While an update replaces the program files, the Windows service of the product is set to **Disabled**, so nothing can start it in the middle of the copy. Its original startup type is restored as soon as the files are in place. If the update fails or is cancelled during the copy, the service stays disabled and the console shows `The program files in "<folder>" are incomplete. The service '<name>' is disabled. Run setup again.` Run the same setup again to complete the update.

### Examples

**Fresh install — Hub + SQL Express + database on a clean server:**

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

**Hub against a remote SQL Server:**

```bat
PeakboardHubSetup.exe -Silent True ^
  -InstallPath "C:\Program Files\Peakboard\PeakboardHub" -InstallPeakboardHub True ^
  -ConfigureDatabase True -CreateDatabase True ^
  -DatabaseServerName "SQLSRV01\PROD" ^
  -DatabaseName "PeakboardHub" ^
  -DatabaseUsername "pbhub" -DatabasePassword "V3rySecure!" ^
  -AdminSqlAuth True -AdminUsername "sa" -AdminPassword "Adm1nSecret!"
```

**Hub on custom ports with HTTPS from the certificate store:**

```bat
PeakboardHubSetup.exe -Silent True ^
  -InstallPath "C:\Program Files\Peakboard\PeakboardHub" ^
  -HubPort 8080 -HubHttps True -HubHttpsPort 8443 -HubCertSubject hub.example.com
```

**Update an existing installation without a database backup:**

```bat
PeakboardHubSetup.exe -Silent True ^
  -InstallPath "C:\Program Files\Peakboard\PeakboardHub" ^
  -BackupDatabase False
```

**Install only the Public API next to an existing Hub:**

```bat
PeakboardHubSetup.exe -Silent True -ApiInstallPath "C:\Program Files\Peakboard\PeakboardHubApi"
```

## Silent uninstall

Each Hub installation ships with its own uninstaller.

{% include styled_table.html %}
{: .w-full }
| Component | Uninstaller |
|---|---|
| Hub (optionally including API) | `<InstallPath>\Uninstall\uninstall.exe` |
| Standalone API | `<ApiInstallPath>\Uninstall\api_uninstall.exe` |

The path is also available in the `UninstallString` registry value of the corresponding entry under Apps & Features.

### Activation

```bat
"C:\Program Files\Peakboard\PeakboardHub\Uninstall\uninstall.exe" --silent
```

Without `--silent` the graphical uninstaller starts. `-Silent True` is accepted as well.

### Argument reference

{% include styled_table.html %}
{: .w-full }
| Argument | Alias | Description |
|---|---|---|
| `--silent` | `-s`, `-Silent` | Unattended uninstall (no UI). |
| `--remove-database` | `-RemoveDatabase` | Additionally **drop the database** and remove the associated Hub Flows and uploaded files. |
| `--remove-data-folder` | `-RemoveDataFolder` | Additionally delete the data folder under `C:\ProgramData\Peakboard`. |
| `--remove-database-user` | `-RemoveDatabaseUser` | Also remove the SQL login if it already existed before the installation. |
| `--keep-database-user` | `-KeepDatabaseUser` | Keep the SQL login even if the setup created it. Wins over `--remove-database-user`. |

### Default behaviour

In silent mode the **default components** are removed:

* the Hub program files, its Windows service and its firewall rules,
* the registry entry and the Apps & Features entry of **this** installation,
* the Public API, if it is installed together with the Hub,
* the SQL login, if the setup created it.

The database, the Hub Flows, the uploaded files and the data folder **are kept by default**. The following are **never** removed in silent mode: SQL Server Express and the .NET Hosting Bundle.

### Protection across multiple Hub installations

* **Shared database:** With `--remove-database`, the database is dropped **only** when this installation is provably its **sole** user. If another Hub or API installation still points at the same database, it is **kept**.
* **Data folder:** With `--remove-data-folder`, the folder is deleted only if it lies under `C:\ProgramData\Peakboard` and no other Peakboard Hub uses the same database.
* **Certificates:** Removed only when this is the **last** Hub installation on the server.

### Return and exit codes

{% include styled_table.html %}
{: .w-full }
| Exit code | Meaning |
|---|---|
| `0` | Uninstall completed |
| `-1` | Could not run (for example `uninstall.json` is missing or broken) |

### Examples

**Uninstall the Hub, keep the database and data:**

```bat
"C:\Program Files\Peakboard\PeakboardHub\Uninstall\uninstall.exe" --silent
```

**Fully uninstall the Hub — including the database, the data folder, Hub Flows and files:**

```bat
"C:\Program Files\Peakboard\PeakboardHub\Uninstall\uninstall.exe" --silent --remove-database --remove-data-folder
```

**Uninstall a standalone Public API:**

```bat
"C:\Program Files\Peakboard\PeakboardHubApi\Uninstall\api_uninstall.exe" --silent
```

## Notes

* **SQL Server Express on top of an existing SQL Server:** If a SQL Server (possibly broken) is already installed, installing a fresh SQL Express instance can fail (SQL setup error `0x84B40002` or `1722`). The wizard warns about this case; in silent mode, leave `-InstallSqlServerExpress` off and either reuse an existing instance via `-ConfigureDatabase` + `-CreateDatabase False`, or fully remove the existing SQL Server beforehand.
* **HTTPS and Windows single sign-on:** The setup always sets the HTTPS endpoint to HTTP/1.1, because Windows authentication does not work over HTTP/2.
* **Log files:**
  * Setup: `C:\ProgramData\Peakboard\LocalState\Logs\Setup\PeakboardHubSetup_<timestamp>.log`
  * SQL Server setup (when Express is installed): `C:\Program Files\Microsoft SQL Server\150\Setup Bootstrap\Log\Summary.txt`
