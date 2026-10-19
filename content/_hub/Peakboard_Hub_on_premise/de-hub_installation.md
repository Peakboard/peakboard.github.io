---
layout: article
product: hub
title: Installation
menu_title: Installation
description: Peakboard Hub on premise - Schritt-für-Schritt-Anleitung durch das Setup, das den Hub als Windows-Dienst installiert
lang: de
weight: 100
ref: hub-100
redirect_from:
  - /hub/de-hub_installation.html
---


Der Peakboard Hub on premise wird lokal auf deinem Server gehostet und benötigt Windows Server ab mindestens Version 2016. Der Peakboard Hub läuft als eigener **Windows-Dienst** — IIS wird nicht benötigt. Auch die ASP.NET Core Runtime und das .NET Hosting Bundle musst du nicht vorab installieren: Das Setup richtet alles automatisch ein, was der Peakboard Hub on premise zum Laufen braucht.
Es wird zu keinem Zeitpunkt eine Kommunikation nach außen hergestellt, sondern ausschließlich zwischen dem Nutzer, den Peakboard Boxen und dem Peakboard Hub on premise.
Für die Authentifizierung kann der Windows Domain Controller (Active Directory) oder eine lokale Nutzerverwaltung genutzt werden.
Die Datenhaltung des Peakboard Hub on premise findet in einem mitgelieferten SQL Server Express statt. Es kann aber auch ein bereits vorhandener SQL Server ab Version 2017 verwendet werden.

<div class="box-tip" markdown="1"> **Hinweis**: Frühere Versionen des Peakboard Hub on premise liefen als Seite im IIS. Wenn du eine solche Installation aktualisierst, lies zuerst [Migration von IIS zu einem Windows-Dienst](/hub/Peakboard_Hub_on_premise/de-hub_migration-iis-to-windows-service.html).
</div>

### Systemvoraussetzungen

Der Server, auf dem der Peakboard Hub on premise betrieben wird, muss mindestens folgende Voraussetzungen erfüllen:

{% include styled_table.html %}
{: .w-full }
| Prozessor | 4 Kerne |
| Arbeitsspeicher | 32 GB RAM |
| Festplatte | 128 GB SSD |
| Betriebssystem | Windows Server 2016 oder höher |

### So läuft der Peakboard Hub auf deinem Server

{% include styled_table.html %}
{: .w-full }
| | Standard |
|---|---|
| Programmordner | `C:\Program Files\Peakboard\PeakboardHub` |
| Datenordner (hochgeladene Dateien, Hub Flows, Update-Pakete für Boxen, gehostete Web Runtimes) | `C:\ProgramData\Peakboard\PeakboardHub` |
| Windows-Dienst | `PeakboardHub` (Anzeigename **Peakboard Hub**), läuft als Lokales System, startet automatisch (verzögert) und startet nach einem Fehler neu |
| HTTP-Port | `20588` |
| HTTPS-Port (optional) | `20589` |
| Firewall | Das Setup öffnet die konfigurierten Ports als eingehende Regeln mit dem Namen `Peakboard Hub (TCP <Port>)` |

Die Ports und das optionale HTTPS-Zertifikat änderst du nach der Installation mit dem **Peakboard Hub Configurator** (siehe Abschnitt **Konfiguration später ändern** weiter unten).

### Installation

Für die initiale Installation auf einem Windows Server benötigst du nur die Installationsdatei des Peakboard Hub on premise, die du [hier](https://downloads.peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe) herunterladen kannst. Starte die Datei anschließend mit Administratorrechten — das Setup führt dich durch die Einrichtung. Die Schritte links im Fenster zeigen dir, wo du gerade bist.

#### Schritt 1 — Willkommen

Nach dem Start erscheint der Begrüßungsbildschirm mit der aktuellen Setup-Version. Klicke auf [Install Peakboard Hub], um den Assistenten zu öffnen.

![Begrüßungsbildschirm des Peakboard Hub Setups](/assets/images/hub/installer/hub-installer-01-welcome.png)

#### Schritt 2 — Produkte auswählen

Auf der Seite **Choose Components** legst du fest, welche Produkte du einrichten möchtest:

* **Peakboard Hub** (1) — Die Webanwendung des Peakboard Hub selbst. Bei einer Erstinstallation immer aktiviert lassen.
* **Peakboard Hub Public API** (2) — Optionale REST-Schnittstelle, mit der du den Peakboard Hub aus anderen Systemen heraus ansprechen kannst. Sie wird in einen eigenen Ordner installiert und läuft als eigener Windows-Dienst. Mehr dazu im Artikel [Peakboard Hub API](/hub/de-hub_api.html).

Klicke anschließend auf [Next].

![Produktauswahl im Peakboard Hub Setup](/assets/images/hub/installer/hub-installer-02-products.png)

#### Schritt 3 — Installationsordner

Auf der Seite **Installation Folders** legst du für jedes ausgewählte Produkt fest, wohin es installiert wird. Standardmäßig ist für den Peakboard Hub `C:\Program Files\Peakboard\PeakboardHub` voreingestellt. Über [Browse...] kannst du einen anderen Ordner wählen.

Der Ordner entscheidet auch darüber, was das Setup tut: Ein leerer Ordner bekommt eine neue Installation, ein Ordner mit einem vorhandenen Peakboard Hub wird aktualisiert (siehe [Updates](#updates)).

Bestätige deine Auswahl mit [Next].

![Auswahl des Installationsordners](/assets/images/hub/installer/hub-installer-03-install-path.png)

#### Schritt 4 — Komponenten des Peakboard Hub

Die Seite **Install Peakboard Hub** nennt den Ordner, in den der neue Peakboard Hub installiert wird, und listet seine Komponenten auf. Bei einer neuen Installation gehören die ersten drei immer dazu:

* **Install Hub program files** (1) — Kopiert den Peakboard Hub in den Installationsordner.
* **Set up database** (2) — Auf den folgenden Seiten wählst du, ob eine neue Datenbank angelegt oder eine vorhandene genutzt wird.
* **Configure Hub Windows service (ports & firewall)** (3) — Legt den Windows-Dienst des Peakboard Hub an, konfiguriert seinen Port (und das optionale HTTPS-Zertifikat) und öffnet den Port in der Windows-Firewall.
* **Install Microsoft SQL Server Express** (4) — Aktiviere die Option, wenn du noch keinen SQL Server zur Verfügung hast. Das Setup installiert dann eine lokale SQL Server Express Instanz. Wenn du einen vorhandenen SQL Server nutzen möchtest, lass die Option abgewählt.

Wenn du mit der Maus über eine Komponente fährst, siehst du eine kurze Erklärung. Klicke anschließend auf [Next].

![Komponenten des Peakboard Hub](/assets/images/hub/installer/hub-installer-04-components.png)

#### Schritt 5 — Dienstkonfiguration

Auf der Seite **Service Configuration** legst du fest, wie der Peakboard Hub erreichbar ist:

* **Windows service name** (1) — Name des Windows-Dienstes. Behalte `PeakboardHub` bei, außer du betreibst mehrere Peakboard Hubs auf demselben Server.
* **HTTP port** (2) — Der Port, auf dem der Peakboard Hub erreichbar ist. Standard ist `20588`.
* **Enable HTTPS** (3) — Stellt den Peakboard Hub zusätzlich über HTTPS bereit.
* **HTTPS port** (4) — Standard ist `20589`.
* **Certificate from the Windows certificate store** (5) — Wähle ein Zertifikat aus dem Zertifikatspeicher **Eigene Zertifikate** des lokalen Computers. Diese Option wird empfohlen, weil dabei kein Passwort gespeichert werden muss.
* **Certificate file (.pfx)** (6) — Alternativ wählst du eine `.pfx`-Datei mit privatem Schlüssel aus und gibst ihr Passwort ein.

Wenn du in Schritt 2 auch die Public API ausgewählt hast, erscheinen dieselben Einstellungen für die API (Standard-HTTP-Port `20688`, HTTPS-Port `20689`). Klicke anschließend auf [Next].

![Dienstkonfiguration mit aktiviertem HTTPS](/assets/images/hub/installer/hub-installer-05-service.png)

<div class="box-tip" markdown="1"> **Hinweis**: Wenn du Windows Single Sign-on über HTTPS nutzen möchtest, musst du nichts weiter einstellen — das Setup legt den HTTPS-Endpunkt immer auf HTTP/1.1 fest, was die Windows-Authentifizierung voraussetzt.
</div>

#### Schritt 6 — Nutzer-Authentifizierung

Auf der Seite **User Authentication** legst du fest, wie sich die Nutzer am Peakboard Hub anmelden:

* **Local Users** (1) — Die Nutzer melden sich mit den lokalen Windows-Konten des Servers an.
* **AD Users** (2) — Die Nutzer melden sich mit ihren Active Directory (Domänen) Konten an.

**AD Users** ist vorausgewählt. Wenn der Server keiner Domäne angehört, wähle **Local Users**. Klicke anschließend auf [Next].

![Nutzer-Authentifizierung](/assets/images/hub/installer/hub-installer-06-authentication.png)

#### Schritt 7 — Datenbank

Auf der Seite **Create Database** verbindest du den Peakboard Hub mit seiner SQL-Datenbank.

* **Create a new database** (1) — Das Setup legt eine neue Datenbank an. Wähle diese Option bei einer Erstinstallation.
* **Use an existing database** (2) — Nutzt eine bereits vorhandene Datenbank, die du vorher selbst angelegt hast, zum Beispiel durch deinen Datenbankadministrator. Auch hier richtet das Setup die Datenbank neu ein und legt darin alle Tabellen des Peakboard Hub an. Die Datenbank muss deshalb **leer** sein. Enthält sie bereits andere Objekte oder Daten, fragt das Setup nach, ob es die Datenbank leeren darf — dabei wird ihr gesamter Inhalt unwiderruflich gelöscht. Ohne deine Bestätigung geht es nicht weiter. Eine vorhandene Datenbank eines Peakboard Hub wird nicht geleert, sondern weiterverwendet.
* **SQL Server instance** (3) — Adresse und Instanzname deines SQL Servers. Beim mitgelieferten SQL Server Express ist das standardmäßig `localhost\SQLEXPRESS`.
* **Database name** (4) — Standard ist `PeakboardHub`.
* **Current Windows user (local server)** (5) — Das Setup meldet sich mit deinem Windows-Konto am SQL Server an. Wähle diese Option, wenn der SQL Server auf demselben Server läuft.
* **SQL Server login (remote / external server)** (6) — Das Setup meldet sich mit einem SQL-Server-Login mit Administratorrechten (sysadmin) an. Wähle diese Option für einen entfernten SQL Server. Der Login wird nur während des Setups verwendet und nicht gespeichert.

Klicke auf [Next]. Das Setup prüft die Verbindung, bevor es weitergeht.

![Konfiguration der Datenbank](/assets/images/hub/installer/hub-installer-07-database.png)

<div class="box-tip" markdown="1"> **Hinweis**: Die [Richtlinien für Datenbankadministratoren](/hub/Peakboard_Hub_on_premise/de-hub_dba-guidelines.html) beschreiben, welche Änderungen dein Datenbankadministrator selbst an der Datenbank des Peakboard Hub vornehmen darf, zum Beispiel eigene Indizes auf Listentabellen oder Instant File Initialization.
</div>

#### Schritt 8 — Datenbankbenutzer

Auf der Seite **Database user** legst du den SQL-Login fest, mit dem der Peakboard Hub auf seine Datenbank zugreift.

* **Create a new user** (1) — Das Setup legt einen neuen SQL-Login an. Mit **Use an existing user** verwendest du stattdessen einen bereits vorhandenen Login.
* **Username** (2) — Name des SQL-Logins. Ein neuer Login muss mit einem Buchstaben oder Unterstrich beginnen und darf nur Buchstaben, Ziffern und Unterstriche enthalten.
* **Password** (3) und **Confirm password** (4) — Ein neues Passwort muss mindestens 8 Zeichen lang sein, mindestens drei der vier Zeichenarten (Großbuchstaben, Kleinbuchstaben, Ziffern, Sonderzeichen) enthalten und darf den Nutzernamen nicht enthalten.

Klicke auf [Install], um die Installation zu starten.

![Anlegen des Datenbankbenutzers](/assets/images/hub/installer/hub-installer-08-database-user.png)

#### Schritt 9 — Installation

Das Setup führt jetzt die ausgewählten Schritte nacheinander aus: fehlende .NET Runtimes installieren, gegebenenfalls SQL Server Express einrichten, Datenbank und Datenbankbenutzer anlegen, Dateien kopieren, den Windows-Dienst anlegen, die Firewall-Ports öffnen und zum Schluss den Dienst starten. Über dem Fortschrittsbalken siehst du, welcher Schritt gerade läuft.

![Fortschritt der Installation](/assets/images/hub/installer/hub-installer-09-installing.png)

#### Schritt 10 — Fertig

Sind alle Schritte erfolgreich abgeschlossen, zeigt die Seite **Installation finished**, was installiert wurde und wo das Setup-Protokoll liegt. Das Setup öffnet den Peakboard Hub in deinem Browser. Mit [Finish] schließt du das Setup.

![Erfolgreich abgeschlossene Installation](/assets/images/hub/installer/hub-installer-10-finished.png)

Der Peakboard Hub on premise ist nun über den Browser erreichbar — standardmäßig auf Port `20588`, zum Beispiel unter `http://<dein-server>:20588`.

Nachdem sich der erste Nutzer am Peakboard Hub on premise angemeldet hat, wird dieser automatisch zum Administrator. Weitere Nutzer kannst du später in der Nutzerverwaltung des Peakboard Hub on premise zu Administratoren machen.

<div class="box-warning" markdown="1"> **Bitte beachten**: Wenn du MQTT für die Kommunikation zwischen Peakboard Boxen verwenden möchtest, öffne den MQTT-Port (Standard 1883).
</div>

### Konfiguration später ändern

Das Setup installiert zusätzlich den **Peakboard Hub Configurator**, den du im Windows-Startmenü findest. Er ändert die Konfiguration einer bestehenden Installation, ohne dass du die `appsettings.json` von Hand bearbeiten musst, und startet die betroffenen Dienste für dich neu:

* **Services** — Peakboard Hub und Public API starten, stoppen oder neu starten.
* **Web endpoints** — Ports und HTTPS-Zertifikat ändern.
* **Database** — Die Datenbankverbindung ändern.
* **Authentication** — Zwischen lokalen Nutzern und Active Directory Nutzern wechseln.

Wie das Setup benötigt auch der Peakboard Hub Configurator Administratorrechte.

### Wenn die Installation fehlschlägt

Geht während der Installation etwas schief, bricht das Setup den betroffenen Schritt ab und zeigt eine Fehlermeldung. Die Protokolldateien des Setups findest du unter `C:\ProgramData\Peakboard\LocalState\Logs\Setup\`. Häufige Ursachen sind eine nicht erreichbare SQL-Server-Instanz oder ein Port, den bereits ein anderes Programm belegt. Behebe die Ursache und starte das Setup erneut.

### Updates

Für ein Update lädst du die aktuelle [Installationsdatei des Peakboard Hub on premise](https://downloads.peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe) herunter und startest das Setup auf demselben Server wie deine bestehende Installation. Auf der Seite **Installation Folders** wählst du den Ordner deiner bestehenden Installation. Die nächste Seite heißt dann **Update Peakboard Hub** und bietet:

![Update eines bestehenden Peakboard Hub](/assets/images/hub/installer/hub-installer-11-update.png)

* **Update Hub program files** (1) — Ersetzt die Programmdateien durch die neue Version. Deine `appsettings.json` (Ports, HTTPS, Datenbankverbindung, Authentifizierung, eigene Änderungen) bleibt erhalten.
* **Create backup** (2) — Sichert die Datenbank des Peakboard Hub, bevor die neuen Programmdateien kopiert werden. Auf der nächsten Seite wählst du den Ordner für die Sicherung; bleibt das Feld leer, wird der Standard-Sicherungsordner der SQL-Server-Instanz genutzt. Die Sicherungsdatei schreibt der SQL Server, deshalb muss der Ordner auf dem Datenbankserver liegen.
* **Set up database** (3) — Aktiviere diese Option nur, wenn du die Datenbankverbindung ändern möchtest.
* **Configure Hub Windows service (ports & firewall)** (4) — Wähle die Option ab, um die aktuelle Dienstkonfiguration zu behalten. Beim Update einer Installation, die noch im IIS läuft, ist die Option immer aktiviert — siehe [Migration von IIS zu einem Windows-Dienst](/hub/Peakboard_Hub_on_premise/de-hub_migration-iis-to-windows-service.html).

Während die Programmdateien ersetzt werden, wird der Windows-Dienst des Peakboard Hub gestoppt und auf **Deaktiviert** gesetzt, damit ihn mitten im Update niemand starten kann. Danach wird sein ursprünglicher Starttyp wiederhergestellt und der Dienst wieder gestartet. Schlägt das Update beim Kopieren der Dateien fehl, bleibt der Dienst deaktiviert und das Setup fordert dich auf, es erneut auszuführen — starte dasselbe Setup noch einmal, um das Update abzuschließen.

<div class="box-tip" markdown="1"> **Hinweis**: Funktioniert der Peakboard Hub nach einem Update im Browser nicht richtig — bleiben zum Beispiel Seiten leer, reagieren Buttons nicht oder wird noch die alte Version angezeigt —, verwendet der Browser vermutlich noch Dateien der vorherigen Version aus seinem Cache. Lade die Seite ohne Cache neu: Drücke [Strg + F5] (macOS: [Cmd + Shift + R]). Hilft das nicht, lösche im Browser die gespeicherten Daten der Adresse des Peakboard Hub: Öffne über das Symbol links neben der Adressleiste die Website-Einstellungen, lösche die Websitedaten (Cookies und gespeicherte Daten) und lade die Seite neu. Dabei wirst du abgemeldet und musst dich anschließend neu anmelden.
</div>

### Deinstallation

Zum Entfernen des Peakboard Hub on premise von einem Server nutzt du den mitgelieferten Uninstaller. Eine Schritt-für-Schritt-Anleitung findest du im Artikel [Deinstallation](/hub/Peakboard_Hub_on_premise/de-hub_uninstallation.html).
