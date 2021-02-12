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

### Was bedeutet Peakboard 2?
Bei Peakboard 2 setzen wir auf ein anderes Betriebssystem sowie eine andere Architektur der Peakboard Runtime, wie du in der Tabelle siehst.

{% include styled_table.html %}
|                                | Peakboard 2               | Peakboard 1         |
|--------------------------------|---------------------------|---------------------|
| Betriebssystem                 | Windows 10 IoT Enterprise | Windows 10 IoT Core |
| Peakboard Runtime Architektur  |                       WPF |                 UWP |

### Was bedeutet Windows 10 IoT Enterprise?
Dabei handelt es sich um ein vollwertiges Windows 10, das für die Verwendung auf IoT Geräten lizensiert ist.

### Was bedeutet WPF Runtime?
Windows Presentation Foundation [(WPF)](https://docs.microsoft.com/de-de/visualstudio/designers/getting-started-with-wpf?view=vs-2019) ist ein Framework zur Entwicklung von Desktop Client Anwendungen. 
Die Runtime ist die Software, die auf der Peakboard Box ausgeführt wird und dafür sorgt, dass Daten in Echtzeit geladen werden und die Visualisierung genau so dargestellt wird, wie du sie dir im Peakboard Designer erstellt hast.

### Welche Vorteile bringt das Update?
Das Windows 10 IoT Enterprise ermöglicht in Kombination mit der WPF Runtime eine direkte Kommunikation zwischen fast allen gängigen Datenbanken. 
Außerdem ist es mit Peakboard 2 möglich, Dateien wie beispielsweise Excel-, PDF-, oder Bilddateien direkt vom Netzlaufwerk auszulesen und weiterzuverarbeiten.

### Was ändert sich?
Da sich das Betriebssystem von Windows 10 IoT Core auf Windows 10 IoT Enterprise geändert hat, fällt das Geräteportal weg und wird durch das Managementportal abgelöst. 
Die Peakboard Bridge, die ein essenzieller Bestandteil von Peakboard war, wird nicht weiter zur Unterstützung der Kommunikation benötigt da die Kommunikation direkt erfolgt. 

### Wie erfolgt die Umstellung auf Peakboard 2?
Der Umstieg ist für alle Kunden mit einer gültigen [Service Level Agreement (SLA) Identifikationsnummer](https://peakboard.com/wp-content/uploads/2020/03/peakboard-service-level-agreement-de-v3.pdf) kostenlos.
Wer eine Peakboard Pro Box oder Peakboard Enterprise Box nach dem 01.05.2020 erwirbt, erhält diese automatisch inklusive des Updates. 
Wenn du keine neue Peakboard Box kaufst, kannst du folgendermaßen auf Peakboard 2 umsteigen:

* [Upgrade der bestehenden Hardware mithilfe eines Peakboard 2 Upgrade USB-Sticks](/misc/de-pb2USB.html)
* Austausch der bestehenden Hardware durch Peakboard Boxen auf denen Peakboard 2 läuft

{: .box-warning }
**Beachte:**
* Die Visualisierung muss vor dem Update unbedingt auf dem PC gesichert sein, damit sie nach dem Update wieder aufgespielt werden kann
* IP Adressen müssen nach dem Update ggf. neu gesetzt werden
* Proxy Settings müssen erneut durchgeführt werden
* Bei einem [Update per USB-Stick](/misc/de-pb2USB.html) müssen vorab [Name und Lizenz](/administration/PB%202.x%20Box/de-lizenz-aendern.html) in einem seperaten Text-Dokument gespeichert werden


