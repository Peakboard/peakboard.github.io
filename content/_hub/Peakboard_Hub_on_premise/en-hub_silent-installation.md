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

<div class="box-warning" markdown="1"> **Important**: Both setup and uninstall **must run with elevated (administrator) rights**. They configure IIS, the Windows registry, certificates and — if requested — the SQL Server.
</div>

## Silent installation

### Activation

The unattended installation is activated with the `-Silent True` argument:

```bat
PeakboardHubSetup.exe -Silent True -InstallPath "C:\inetpub\PeakboardHub"
```

Without `-Silent True` the graphical wizard starts.

### Argument syntax

Both notations are accepted and may be mixed:

{% include styled_table.html %}
{: .w-full }
| Format | Example |
|---|---|
| `-key value` | `-InstallPath "C:\inetpub\PeakboardHub"` |
| `key=value` | `InstallPath=C:\inetpub\PeakboardHub` |

* A `-key` **without** a following value (or followed by another `-key`) is interpreted as `True`. `-Silent` is therefore equivalent to `-Silent True`.
* **Unknown arguments** are ignored and only written to the log file (forward compatibility).
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

In addition the progress is written to the console line by line (`[ 42%] <step>`); the detailed setup log lives under `C:\ProgramData\Peakboard\LocalState\Logs\Setup\PeakboardHubSetup_<timestamp>.log`.

### Argument reference

#### General

{% include styled_table.html %}
{: .w-full }
| Argument | Values | Default | Description |
|---|---|---|---|
| `-Silent` | `True/False` | `False` | Activates the unattended installation (no UI). |

#### Installation paths (at least one is required)

{% include styled_table.html %}
{: .w-full }
| Argument | Values | Default | Description |
|---|---|---|---|
| `-InstallPath` | Path | – | Target folder of the Peakboard Hub. If a path is given **without** any further Hub component flags, the setup automatically installs **Hub + .NET runtime + IIS** (see [behaviour and automatic defaults](#behaviour-and-automatic-defaults)). |
| `-ApiInstallPath` | Path | – | Target folder of the Public API. If set **without** API flags, the setup automatically installs **API + API IIS**. |

<div class="box-warning" markdown="1"> At least **one** of `-InstallPath` or `-ApiInstallPath` must be set; otherwise the setup aborts with exit code `-1`.
</div>

#### Components

{% include styled_table.html %}
{: .w-full }
| Argument | Values | Default | Description |
|---|---|---|---|
| `-InstallPeakboardHub` | `True/False` | derived | Install the Hub. |
| `-InstallPeakboardHubApi` | `True/False` | derived | Install the Public API. |
| `-InstallSqlServerExpress` | `True/False` | `False` | Install a local SQL Server Express instance (named `SQLEXPRESS`). **Only** set this if no working SQL Server is available yet. |
| `-InstallNetHostingBundle` | `True/False` | derived | Make sure the .NET Hosting Bundle / Desktop Runtime is present (only installed if it is missing). |
| `-ConfigureIisPage` | `True/False` | derived | Set up the IIS site and app pool for the Hub. |
| `-ConfigureApiIisPage` | `True/False` | derived | Set up the IIS site and app pool for the API. |

#### Database

{% include styled_table.html %}
{: .w-full }
| Argument | Values | Default | Description |
|---|---|---|---|
| `-ConfigureDatabase` | `True/False` | `False` | Set up or connect the database. **Not enabled automatically in silent mode** — must be set explicitly if the setup should touch the database. |
| `-DatabaseServerName` | Text | `localhost\SQLEXPRESS` | SQL Server instance. |
| `-DatabaseName` | Text | `PeakboardHub` | Database name. |
| `-DatabaseUsername` | Text | – | SQL login used by the Hub. |
| `-DatabasePassword` | Text | – | Password for the SQL login. |
| `-CreateDatabase` | `True/False` | `False` | `True` = create database **and** login from scratch. `False` = reuse an existing database and login. |
| `-BackupDatabase` | `True/False` | `True` | Take a backup before an **update** (database already exists). If the backup fails, the silent run is **cancelled** — disable it with `-BackupDatabase False` to skip the backup. |

<div class="box-warning" markdown="1"> With `-ConfigureDatabase True`, **all four** values are required: `-DatabaseServerName`, `-DatabaseName`, `-DatabaseUsername`, `-DatabasePassword`. With `-CreateDatabase True`, the `-DatabaseUsername` must be a **valid SQL identifier** (starts with a letter or underscore, then only letters, digits or underscores).
</div>

#### User authentication

{% include styled_table.html %}
{: .w-full }
| Argument | Values | Default | Description |
|---|---|---|---|
| `-LocalUsers` | `True/False` | `False` | `True` = authenticate Hub users against the local machine accounts. `False` (or omitted) = **Active Directory**. |

#### Internal arguments (do not set manually)

{% include styled_table.html %}
{: .w-full }
| Argument | Description |
|---|---|
| `-ContinueInstallation` | Set exclusively by the RunOnce entry after a reboot (when the IIS Windows feature has just been installed). |
| `-InstallIisFeature` | Set internally when this run enabled the IIS Windows feature. |

### Behaviour and automatic defaults

* **Path implies component:** If `-InstallPath` is set without explicitly selecting a Hub component, the setup automatically enables **Hub + .NET runtime + IIS**. The same logic applies to `-ApiInstallPath`, which enables **API + API IIS**.
* **Database is NOT enabled automatically in silent mode.** Unlike the wizard, `-ConfigureDatabase` is not derived from the component selection in unattended runs. If the setup should create or connect the database, you must set `-ConfigureDatabase True` together with the database values.
* **SQL Server Express** is only installed when `-InstallSqlServerExpress True` is given.
* **API without `-ConfigureDatabase`:** The API shares the Hub database. If no database configuration is supplied, the setup takes the connection string from a Hub instance that is already installed; if none exists, an obvious **placeholder** is written into the API's `appsettings.json`, which then has to be replaced manually.

### Examples

**Fresh install — Hub + SQL Express + database on a clean machine:**

```bat
PeakboardHubSetup.exe -Silent True ^
  -InstallPath "C:\inetpub\PeakboardHub" ^
  -InstallSqlServerExpress True ^
  -ConfigureDatabase True -CreateDatabase True ^
  -DatabaseServerName "localhost\SQLEXPRESS" ^
  -DatabaseName "PeakboardHub" ^
  -DatabaseUsername "pbhub" -DatabasePassword "V3rySecure!" ^
  -LocalUsers True
```

**Hub against an existing SQL Server database (no SQL Express setup):**

```bat
PeakboardHubSetup.exe -Silent True ^
  -InstallPath "C:\inetpub\PeakboardHub" ^
  -ConfigureDatabase True -CreateDatabase True ^
  -DatabaseServerName "SQLSRV01\PROD" ^
  -DatabaseName "PeakboardHub" ^
  -DatabaseUsername "pbhub" -DatabasePassword "V3rySecure!"
```

**Update an existing installation without a database backup:**

```bat
PeakboardHubSetup.exe -Silent True ^
  -InstallPath "C:\inetpub\PeakboardHub" ^
  -ConfigureDatabase True -CreateDatabase False ^
  -DatabaseServerName "localhost\SQLEXPRESS" ^
  -DatabaseName "PeakboardHub" ^
  -DatabaseUsername "pbhub" -DatabasePassword "V3rySecure!" ^
  -BackupDatabase False
```

**Install only the Public API:**

```bat
PeakboardHubSetup.exe -Silent True -ApiInstallPath "C:\inetpub\PeakboardHubApi"
```

## Silent uninstall

Each Hub instance ships with its own uninstaller during the install.

{% include styled_table.html %}
{: .w-full }
| Component | Uninstaller |
|---|---|
| Hub (optionally including API) | `<InstallPath>\Uninstall\uninstall.exe` |
| Standalone API | `<ApiInstallPath>\Uninstall\api_uninstall.exe` |

The path is also available in the `UninstallString` registry value of the corresponding entry under Apps & Features.

### Activation

```bat
"C:\inetpub\PeakboardHub\Uninstall\uninstall.exe" --silent
```

Without `--silent` the graphical uninstaller starts.

### Argument reference

{% include styled_table.html %}
{: .w-full }
| Argument | Alias | Default | Description |
|---|---|---|---|
| `--silent` | `-s` | – | Unattended uninstall (no UI). |
| `--remove-database` | `-RemoveDatabase` | off | Additionally **drop the database and the login** and remove the associated Hub Flows and uploaded files. |

### Default behaviour (without `--remove-database`)

In silent mode the **default and mandatory components** are removed:

* The Hub program files (the folder is deleted once the process ends),
* The IIS site and app pool of **this** installation,
* The registry entry and Apps & Features entry of **this** installation.

The database, the Hub Flows and the uploaded files **are kept by default** (data is protected on purpose). They are deleted **only** when `--remove-database` is supplied.

The following are **not** removed automatically (opt-in components, skipped in silent mode): SQL Server Express, the .NET Hosting Bundle and the IIS Windows feature.

### Protection across multiple Hub instances and shared resources

* **Shared database:** With `--remove-database`, the database is dropped **only** when this installation is provably the **sole** consumer. If another (including older) Hub or API installation still points at the same database, it is **kept** (fail-safe).
* **Shared IIS site and certificates:** Removed only when this is the **last** Hub installation on the machine.

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
"C:\inetpub\PeakboardHub\Uninstall\uninstall.exe" --silent
```

**Fully uninstall the Hub — including the database, login, Hub Flows and files:**

```bat
"C:\inetpub\PeakboardHub\Uninstall\uninstall.exe" --silent --remove-database
```

**Uninstall a standalone Public API:**

```bat
"C:\inetpub\PeakboardHubApi\Uninstall\api_uninstall.exe" --silent
```

## Notes

* **SQL Server Express on top of an existing SQL Server:** If a SQL Server (possibly broken) is already installed, installing a fresh SQL Express instance can fail (SQL setup error `0x84B40002` or `1722`). The wizard warns about this case; in silent mode, leave `-InstallSqlServerExpress` off and either reuse an existing instance via `-ConfigureDatabase` + `-CreateDatabase False`, or fully remove the existing SQL Server beforehand.
* **Log files:**
  * Setup: `C:\ProgramData\Peakboard\LocalState\Logs\Setup\PeakboardHubSetup_<timestamp>.log`
  * SQL Server setup (when Express is installed): `C:\Program Files\Microsoft SQL Server\150\Setup Bootstrap\Log\Summary.txt`
