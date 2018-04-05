---
layout: article
title: Installation und Konfiguration
menu_title: Installation und Konfiguration
description: Installation und Konfiguration des Peakboard-Designer
lang: de
ref: admin-01
---

Die Peakboard-Bridge ist dafür konzipiert, Datenquellen für die Peakboard-Boxen bereitzustellen, welche die Box aufgrund von technischen Limitierungen nicht aus eigener Kraft erreichen kann. Dies betrifft z.B. den Zugriff auf Dateien im Netzwerk.

Die Bridge ist technisch gesehen ein sehr schlanker Windows Service, der in der Regel problemlos zusammen mit anderer Software auf einem Server im Unternehmen installiert wird. Benutzen Sie dazu das reguläre Installationsprogramm und wählen Sie die entsprechende Option wie im folgenden Screenshot gezeigt:

![image_1](/assets/images/admin/install/MiscBridge01.png)

In der Windows Service Administration finden Sie den Bridge Service wie jeden anderen Windows-Service auch. Falls gewünscht, kann er auch unter einem anderen Service-Account laufen. Bitte beachten Sie, dass der Bridge Service einen tcp/ip-Kanal nach außen öffnet, damit Peakboard-Boxen mit ihm kommunizieren können. Es sollte auf diesem Port also keine Firewall den Zugriff verbieten.

![image_1](/assets/images/admin/install/MiscBridge02.png)

Sie finden alle Binärdaten des Bridge-Services im Ordner C:\Program Files\Peakboard\Server (oder einem alternativen Pfad, falls Sie einen anderen bei der Installation gewählt haben). Im Unterverzeichnis Configuration liegt die XML-Datei serverConfiguration.xml. Hier können Sie bei Bedarf den Standard-Port 2501 abändern. Im Unterverzeichnis Logs werden Protokolle abgelegt. Für den Fehlerfall finden Sie dort ausführliche Fehlermeldungen.

![image_1](/assets/images/admin/install/MiscBridge03.png)

Die URL für die Anwendung der Bridge lautet dann `http://MeinServer:MeinPort`, z.B. `http://Julia:2501`
