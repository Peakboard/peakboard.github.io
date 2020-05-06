---
layout: article
title: Peakboard 2 
menu_title: Peakboard 2
description: Peakboard 2
lang: de
weight: 10
ref: misc-10
---

![gif0](/assets/images/misc/pb2/social-media-posting-peakboard2-facebook.gif)

Mit dem Update des Peakboard Designers auf Version [2.0.0.7](/misc/de-versionshistorie.html) erhalten Kunden neben der bekannten [(UWP)](https://docs.microsoft.com/de-de/windows/uwp/get-started/universal-application-platform-guide) Preview auch die [(WPF)](https://docs.microsoft.com/de-de/visualstudio/designers/getting-started-with-wpf?view=vs-2019) Preview der Version 2. 
Diese kann im Designer unter "Settings" und anschließend im Dialog "About" mit Hilfe des Hakens aktiviert werden.
Dieser Umstieg und die damit verbundenen Veränderungen am Betriebssystem der Peakboard Box kennzeichnen Peakboard 2 Boxen.

## Was sind Peakboard 2 Boxen?
Die technischen Spezifikationen der Peakboard 2 Box sind identisch zu denen der Peakboard Box.
Äußerlich unterscheiden sich die beiden Boxen nicht.
Peakboard 2 Boxen setzen jedoch auf ein anderes Betriebssystem sowie eine andere Architektur der Peakboard Runtime, wie aus nachfolgender Tabelle zu entnehmen ist.

{% include styled_table.html %}
|                                | Peakboard 2 Box           | Peakboard Box       |
|--------------------------------|---------------------------|---------------------|
| Betriebssystem                 | Windows 10 IoT Enterprise | Windows 10 IoT Core |
| Peakboard Runtime Architektur  |                       WPF |                 UWP |

### Was bedeutet Windows 10 IoT Enterprise?
Hierbei handelt es sich um ein vollwertiges Windows 10, welches für die Verwendung auf IoT Geräten, wie der Peakboard 2 Box, lizensiert ist.

### Was bedeutet WPF Runtime?
Windows Presentation Foundation (WPF) ist ein Framework zur Entwicklung von Desktop Client Anwendungen.
Die Runtime ist die Software, welche auf der Peakboard Box ausgeführt wird und dafür sorgt, dass Daten in Echtzeit geladen werden und die Visualisierung sowie mit dem Designer erstellt dargestellt wird.

### Welche Vorteile bringt die Peakboard 2 Box?
Das Windows 10 IoT Enterprise ermöglicht in Kombination mit der WPF Runtime eine direkte Kommunikation zwischen fast allen gängigen Datenbanken.
Ebenfalls ist es mit Peakboard 2 Boxen möglich Dateien wie beispielsweise Excel-, PDF-, oder Bilddateien direkt vom Netzlaufwerk auszulesen und weiterzuverarbeiten.

### Was ändert sich?
Da sich das Betriebssystem von Windows 10 IoT Core auf Windows 10 IoT Enterprise geändert hat, fällt das Geräteportal weg.
Dieses wird durch das Managementportal abgelöst.
Die [Peakboard Bridge](/administration/PB%201.x%20Box/de-1x-install.html), welche ein essentieller Bestandteil der Peakboard Box ist, wird nicht weiter zur Unterstützung der Kommunikation benötigt.
Bei der Peakboard 2 Box erfolgt hier die Kommunikation direkt.

### Wie erfolgt die Umstellung einer Peakboard Box auf eine Peakboard 2 Box?
Der Umstieg ist für alle Kunden mit einer gültigen [Service Level Agreement (SLA) Identifikationsnummer](https://peakboard.com/wp-content/uploads/2020/03/peakboard-service-level-agreement-de-v3.pdf) kostenlos.
Wer eine Peakboard Pro Box oder Peakboard Enterprise Box nach dem 01.05.2020 erwirbt, erhält automatisch die erworbene Version als Peakboard 2 Box.

Der Umstieg einer vorhandenen Peakboard Box auf eine Peakboard 2 Box kann auf folgende Wege erfolgen:
* [Upgrade der bestehenden Hardware mithilfe eines Peakboard 2 Upgrade USB-Sticks](/misc/de-pb2USB.html)
* Austausch der bestehenden Hardware durch Peakboard 2 Boxen

### Was muss beim Umstieg beachtet werden?
* Die Visualisierung muss vor dem Update unbedingt auf dem PC gesichert sein, damit sie nach dem Update wieder aufgespielt werden kann
* IP Adressen müssen nach dem Update ggf. neu gesetzt werden
* Proxy Settings müssen erneut durchgeführt werden
* Bei einem [Update per USB-Stick](/misc/de-pb2USB.html) müssen vorab [Name und Lizenz](/administration/PB%202.x%20Box/de-lizenz-aendern.html) in einem seperaten Text-Dokument gespeichert werden
