---
layout: article
title: FAQ - Security
menu_title: FAQ - Security
description: FAQ - Security
lang: en
weight: 10
ref: admin-10
redirect_from:
 - /misc/en-faqsecurity.html
---

## Operating System

Windows 10 IoT Enterprise is installed on the Peakboard Box.

## Windows Updates

Windows Updates are disabled by default.  

## Internet Access

The Peakboard Box does not require Internet access by default.

## Unauthorized Access

The Peakboard Box is started under a Windows user who has no rights except those necessary for viewing.
This user cannot install anything or run any other software except the one we provide.
In addition, Peakboard Box is run in a kind of "kiosk mode", which does not allow switching to desktop mode.
You will receive the administrator as well as the corresponding password on a separate card together with the Peakboard Box.
<div class="box-warning" markdown="1">
**Note:**

Please change the password and keep a digital record of it. It **cannot** be reset if lost!
</div>

## Domain

The Peakboard Box can, but does not have to be integrated into the domain.  

## Ports

By default, all ports are blocked on the Peakboard Box except the following:  

* ICMPv4 and v6  
* Port 6 (Broadcast, optional)  
* Port 7 (Ping)  
* Port 5985 and Port 5986 (WinRM / PowerShell)
* Port 40404, 40405 and 40407 (Peakboard communication)  

## Virus scanner

With administrator access, it is possible, but not necessary, to install a virus scanner on the Peakboard Box.
We guarantee full protection.

## Encrypting Peakboard files

A Peakboard file (`.peakboard`) can be password-protected directly in the Peakboard Designer. Once protected, the entire file content – including all credentials for data sources, scripts, variables and resources – is encrypted and can only be opened again by entering the password.

In the Peakboard Designer, open the project settings in the menu bar and select [Project info]. In the [Edit project] dialog you will find the [File protection] section.

![Protect file with password](/assets/images/admin/security/faqsecurity-01-file-protection.png)

Activate the checkbox [Protect file with password] (1) and set a strong password in the [New password] field (2). Re-enter the same password in [Confirm password] (3) to confirm. With a click on [OK] the encryption is applied the next time the file is saved.

<div class="box-warning" markdown="1">
**Note:**

Keep the password in a safe place. Without the password, an encrypted Peakboard file can neither be opened nor recovered.
</div>

## Encrypted communication with the Peakboard Box (Port 40405)

The Peakboard Designer and the Peakboard Hub communicate with the Peakboard Box over two ports:

* **Port 40404 – unencrypted (HTTP).** Used exclusively for credential-free status queries such as the time-server check. Credentials and access tokens are never sent over this port.
* **Port 40405 – encrypted (HTTPS with TLS 1.2/1.3).** As soon as credentials, access tokens or application packages are transferred, the connection always runs over this encrypted port.

For this connection the Peakboard Box presents its own certificate, which is issued by the Peakboard root certification authority and contains the hostnames or IP addresses of the Peakboard Box. The Peakboard Designer validates that certificate against the Peakboard root certification authority that is added to the Windows certificate store when the Peakboard Designer is installed. This makes sure the connection really is with the correct Peakboard Box and cannot be eavesdropped on or tampered with.

<div class="box-tip" markdown="1">
**Tip:**

If you disable the unencrypted channel in the Peakboard Box settings, communication is restricted to port 40405 only.
</div>

## Authentication with data sources

For connections to external systems Peakboard uses the authentication and encryption mechanisms provided by each source system:

* **SAP** – sign-in with a dedicated SAP user via the RFC interface.
* **OPC UA** and **MQTT** – certificate-based authentication. The certificates are stored in the Peakboard Designer and rolled out to the Peakboard Box when the application starts. See [Adding a certificate to the certificate management](/administration/en-certificates.html) for details.
* **REST-based data sources** (XML, JSON, CSV) and similar web services – connections use the regular HTTPS mechanism with a server certificate. Optionally you can also configure client certificates.

## Data on the Peakboard Box

The Peakboard Box only keeps data from your data sources in memory while the application is running. As soon as the Peakboard application is stopped or the Peakboard Box is restarted, this data is discarded. The only data persisted on the Peakboard Box is what your application explicitly writes – for example through dedicated Building Blocks inside a script.

## User administration

You configure which users may access the Peakboard Box and with which permissions through the user administration in the Peakboard Designer. A complete description of users and roles is available in the [User administration](/administration/en-user-administration.html) article.
