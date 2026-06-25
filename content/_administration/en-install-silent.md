---
layout: article
title: Silent Installation
menu_title: Silent Installation
description: Unattended installation of the Peakboard Runtime and the Peakboard Designer via the command line
lang: en
weight: 150
ref: admin-150
redirect_from:

---

Both the Peakboard Runtime and the Peakboard Designer can be installed unattended (silently) from the command line – ideal for automated rollout via software distribution, scripts or deployment pipelines. The command line must be run **as an administrator**.

If the following window appears, confirm that you trust the software provider by clicking [Yes].

![Windows User Account Control](/assets/images/admin/install-silent/usercontrol.png)

## Silent Installation of the Peakboard Runtime

To roll out the *Peakboard Runtime* unattended onto Peakboard Boxes or BYOD devices, use the *Peakboard Runtime Setup.exe*. This setup runs as a console application and is **always silent** – no graphical wizard is shown. The following example installs the Peakboard Runtime to [D:\Peakboard], adds it to the autostart and blocks the unencrypted port 40404:

```bat
"Peakboard Runtime Setup.exe" Silent=True InstallPath="D:\Peakboard" AddToStartup=True BlockUnencryptedConnection=True
```

### Argument format and boolean values

Arguments are passed in the format `key=value` (e.g. `InstallPath="D:\Peakboard"`). Wrap values that contain spaces in quotes. Keys are **not** case-sensitive, and unknown arguments are ignored.

Only **`True`**, **`Yes`** and **`1`** count as the boolean value `True` (case-insensitive). Any other value (including `False`, empty or missing) is treated as `False`.

### Parameters

{% include styled_table.html %}
{: .w-full }
| Parameter | Values | Default | Description |
|---|---|---|---|
| `InstallPath` | path | `C:\Program Files\Peakboard` | Target folder of the installation. |
| `AddToStartup` | `True/False` | `False` | Adds a shortcut to the Windows autostart so the Peakboard Runtime launches automatically after logon. |
| `BlockUnencryptedConnection` | `True/False` | `False` | Disables the unencrypted connection channel (port 40404), allowing encrypted connections only. |
| `CreateStartMenuShortcuts` | `True/False` | `True` | Creates a shortcut in the Start menu. |
| `RunOnPeakboardBox` | `True/False` | `True` | Enables the Peakboard Box-specific installation steps. Default `True` for installation on a Peakboard Box; set it to `False` on a BYOD device. |
| `Silent` | `True/False` | – | Accepted but ignored: the console setup always runs silently anyway. |

<div class="box-warning" markdown="1"> The installation requires **Windows 10 (version 20H1, build 19041) or newer**. On older systems the setup aborts with exit code <code>-1</code>.
</div>

### Exit codes

{% include styled_table.html %}
{: .w-full }
| Exit code | Meaning |
|---|---|
| `0` | Installation successful |
| `-1` | Error or abort (an existing installation is automatically restored from backup if needed) |

## Silent Installation of the Peakboard Designer

For development machines the *Peakboard Designer* is installed via the *Peakboard Designer Setup.exe*. This installs the Peakboard Designer together with the Peakboard Runtime required for the preview function. Unlike the Runtime, this setup starts the graphical wizard by default – for an unattended installation you must set `Silent=True`:

```bat
"Peakboard Designer Setup.exe" Silent=True InstallPath="C:\Program Files\Peakboard"
```

The Designer is always installed into a [\Designer] subfolder of the specified path.

### Parameters

{% include styled_table.html %}
{: .w-full }
| Parameter | Values | Default | Description |
|---|---|---|---|
| `Silent` | `True/False` | `False` | Enables the unattended installation (no wizard). |
| `InstallPath` | path | `C:\Program Files\Peakboard` | Target folder. The Designer is installed into the `\Designer` subfolder. |
| `CreateStartMenuShortcuts` | `True/False` | `True` | Creates a shortcut in the Start menu. |
| `Update` | `True/False` | `False` | Updates an existing installation at the detected path. |

## Silent Uninstallation

The installation places a dedicated uninstaller in the [Uninstall] subfolder of the installation directory. Like the installation, the uninstallation can be run in silent mode via the `--silent` argument (alias `-s`):

```bat
"D:\Peakboard\Uninstall\Peakboard Uninstall.exe" --silent
```

Without `--silent` the graphical uninstaller starts. This too must be run from a command line with administrator rights. The uninstaller returns exit code `0` on success and `-1` if it could not be executed.
