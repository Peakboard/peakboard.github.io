---
layout: article
title: FAQ - Sicherheit
menu_title: FAQ - Sicherheit
description: FAQ - Sicherheit
lang: de
weight: 10500
ref: misc-10500
redirect_from:

---

## Operating system:
Windows 10 IoT Enterprise is installed on the Peakboard Box.

## Windows Updates:
Windows Updates are disabled by default.  

## Internet Access:
The Peakboard Box does not require Internet access by default.

## Unauthorized Access:
The Peakboard Box is started under a Windows user who has no rights except those necessary for viewing. 
This user cannot install anything or run any other software except the one we provide.
In addition, Peakboard Box is run in a kind of "kiosk mode", which does not allow switching to desktop mode.
You will receive the administrator as well as the corresponding password on a separate card together with the Peakboard Box. 
<div class="box-warning" markdown="1">
**Note:** 
Please change the password and keep a digital record of it. 
It *cannot* be reset if lost!
</div>

## Domain:

The Peakboard Box can, but does not have to be integrated into the domain.  

## Ports:
By default, all ports are blocked on the Peakboard Box except the following:  

* ICMPv4 and v6  

* Port 6 (Broadcast, optional)  

* Port 7 (Ping)  

* Port 5985 and Port 5986 (WinRM / PowerShell)   

* Port 40404, 40405 and 40407 (Peakboard communication)  

## Virus scanner:
With administrator access, it is possible, but not necessary, to install a virus scanner on the Peakboard Box. 
We guarantee full protection.