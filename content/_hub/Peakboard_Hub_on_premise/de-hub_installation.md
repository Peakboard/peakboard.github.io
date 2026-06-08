---
layout: article
product: hub
title: Installation
menu_title: Installation
description: Peakboard Hub on premise - Schritt-für-Schritt-Anleitung für den Installer
lang: de
weight: 100
ref: hub-100
redirect_from:
  - /hub/de-hub_installation.html
---


Der Peakboard Hub on premise wird lokal auf deinem Server gehostet und benötigt Windows Server ab mindestens Version 2016. IIS, die ASP.NET Core Runtime und das passende Hosting Bundle musst du nicht vorab installieren — das Setup richtet alles automatisch ein, was der Peakboard Hub on premise zum Laufen braucht.
Es wird zu keinem Zeitpunkt eine Kommunikation nach außen hergestellt, sondern ausschließlich zwischen dem Nutzer, den Peakboard Boxen und dem Peakboard Hub on premise.
Für die Authentifizierung kann der Windows Domain Controller (Active Directory) oder eine lokale Nutzerverwaltung genutzt werden.
Die Datenhaltung des Peakboard Hub on premise findet in einem mitgelieferten SQL Server Express statt. Es kann aber auch ein bereits vorhandener SQL Server ab Version 2017 verwendet werden.

### Systemvoraussetzungen

Der Server, auf dem der Peakboard Hub on premise betrieben wird, muss mindestens folgende Voraussetzungen erfüllen:

{% include styled_table.html %}
{: .w-full }
| Prozessor | 4 Kerne |
| Arbeitsspeicher | 32 GB RAM |
| Festplatte | 128 GB SSD |
| Betriebssystem | Windows Server 2016 oder höher |

### Installation

Für die initiale Installation auf einem Windows Server benötigst du nur die Installationsdatei des Peakboard Hub on premise, die du [hier](https://downloads.peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe) herunterladen kannst. Starte die Datei anschließend mit Administratorrechten — der Installer führt dich in vier Schritten durch die Einrichtung.

#### Schritt 1 — Willkommen

Nach dem Start erscheint der Begrüßungsbildschirm. Klicke auf [Install Peakboard Hub] (1), um den Assistenten zu öffnen.

![Begrüßungsbildschirm des Peakboard Hub Installers](/assets/images/hub/installer/hub-installer-01-welcome.png)

#### Schritt 2 — Komponenten auswählen

Im Schritt **Choose components** legst du fest, welche Bestandteile installiert werden sollen. Bereits installierte Komponenten sind standardmäßig abgewählt, sodass du sie bei einem Update überspringst.

* **Peakboard Hub (web application)** (1) — Die zentrale Webanwendung des Peakboard Hub. Bei einer Erstinstallation immer aktiviert lassen.
* **Install Microsoft SQL Server Express** (2) — Aktiviere die Option, wenn du noch keinen SQL Server zur Verfügung hast. Der Installer richtet dann eine lokale SQL Server Express Instanz ein. Wenn du einen bereits vorhandenen SQL Server nutzen möchtest, lass die Option abgewählt.
* **Peakboard Hub Public API** (3) — Optionale REST-Schnittstelle, mit der du den Peakboard Hub aus anderen Systemen heraus ansprechen kannst.

Klicke anschließend auf [Next].

![Komponentenauswahl im Peakboard Hub Installer](/assets/images/hub/installer/hub-installer-02-components.png)

#### Schritt 3 — User Authentication

Lege fest, wie sich deine Nutzer am Peakboard Hub anmelden sollen:

* **Local Users** (1) — Lokale Nutzerverwaltung direkt im Peakboard Hub. Geeignet, wenn du keine Active-Directory-Anbindung verwenden möchtest.
* **AD Users** (2) — Anmeldung über deinen Windows Domain Controller (Active Directory). Beim Login gibst du den *Windows Nutzernamen ohne Domäne* sowie das *Windows Passwort* an. Der erste Nutzer, der sich anmeldet, wird automatisch zum Administrator des Peakboard Hub on premise.

Wähle die passende Option und klicke auf [Next].

![Auswahl der Nutzerauthentifizierung](/assets/images/hub/installer/hub-installer-03-auth.png)

#### Schritt 4 — Installationsordner

Im Schritt **Hub installation folder** legst du fest, wohin der Peakboard Hub installiert wird. Standardmäßig ist `C:\inetpub\PeakboardHub` voreingestellt (1) — dieser Ordner wird später als IIS-Seite eingebunden. Über [Browse...] (2) kannst du einen anderen Pfad wählen.

Bestätige deine Auswahl mit [Next].

![Auswahl des Installationsordners](/assets/images/hub/installer/hub-installer-04-folder.png)

#### Schritt 5 — Datenbank

Im Schritt **Database** verbindest du den Peakboard Hub mit seiner SQL-Datenbank.

* **Create a new database and user** (1) — Der Installer legt eine neue Datenbank und einen neuen SQL-Nutzer für dich an.
* **Use an existing database and user** (2) — Wähle diese Option, wenn du eine bereits vorhandene Datenbank weiterverwenden möchtest (zum Beispiel bei einem Update oder einer Migration).
* **SQL Server instance** (3) — Adresse und Instanzname deines SQL Servers. Bei der mitgelieferten Express-Instanz lautet die Voreinstellung `localhost\SQLEXPRESS`.
* **Database name** (4) — Name der Datenbank. Standardmäßig `PeakboardHub`.

![Datenbankkonfiguration — Verbindung und Datenbankname](/assets/images/hub/installer/hub-installer-05-database-top.png)

Im unteren Bereich des Dialogs gibst du die Anmeldedaten für den SQL-Nutzer an:

* **Username** (1) — Loginname des SQL-Nutzers (standardmäßig `pbhub`).
* **Password** (2) und **Confirm password** (3) — Vergib ein sicheres Passwort und wiederhole es zur Bestätigung. Die Eingabe wird ausgeblendet.

Mit [Next] startet die eigentliche Installation.

![Datenbankkonfiguration — Nutzername und Passwort](/assets/images/hub/installer/hub-installer-06-database-bottom.png)

#### Schritt 6 — Installation

Der Assistent zeigt nun den Fortschritt an und führt nacheinander folgende Aufgaben aus: Bereitstellen der Voraussetzungen, Einrichten des SQL Servers, Anlegen der Datenbank, Kopieren der Dateien in den Installationsordner sowie das Eintragen der IIS-Seite. Die aktuell laufende Aufgabe wird über dem Fortschrittsbalken angezeigt.

![Installationsfortschritt](/assets/images/hub/installer/hub-installer-07-installing.png)

#### Schritt 7 — Fertig

Wenn alle Aufgaben erfolgreich abgeschlossen sind, wechselt der Assistent zum Schritt **Installation finished**.

* **Zusammenfassung** (1) — Eine Übersicht über das, was eingerichtet wurde: der Installationsordner, der Datenbankname samt SQL Server Instanz und der Port der IIS-Seite. Darunter findest du den Pfad zur Setup-Logdatei, in der jeder Schritt im Detail nachvollziehbar ist.
* **Finish** (2) — Schließt den Assistenten. Der Peakboard Hub on premise ist anschließend über den angezeigten Port in deinem Browser erreichbar und taucht in der IIS-Verwaltung als eigene Seite auf.

![Erfolgreich abgeschlossene Installation](/assets/images/hub/installer/hub-installer-08-finished.png)

Du findest den Peakboard Hub on premise nun in deiner IIS-Verwaltung unter den Seiten und kannst ihn dort wie gewohnt weiter konfigurieren, zum Beispiel eine sichere Kommunikation mit Zertifikaten deines Unternehmens hinterlegen.

Nach der ersten Anmeldung eines Benutzers im Peakboard Hub on premise wird dieser Benutzer automatisch zum Administrator. Zukünftig kannst du weitere Benutzer in der Benutzerverwaltung des Peakboard Hub on premise zu Admins ernennen.

<div class="box-warning" markdown="1"> **Beachte**:
* Wenn du Updates der Peakboard Boxen über den Peakboard Hub on premise durchführen willst, musst du den IIS Prozess dazu berechtigen, in den Installationsordner (zum Beispiel `C:\inetpub\PeakboardHub`) zu schreiben.
* Wenn MQTT zur Kommunikation zwischen Peakboard Boxen genutzt werden soll, muss der MQTT Port (standardmäßig 1883) geöffnet werden.
</div>

Hier siehst du, wo du die Berechtigungen setzen musst:

![Peakboard Hub on premise Berechtigungen](/assets/images/hub/hub_permissions.png)

### Wenn die Installation fehlschlägt

Tritt während der Installation ein Fehler auf, zeigt der Assistent den Schritt **Installation failed** mit einer Fehlermeldung und dem Pfad zur Setup-Logdatei an. Die Logdatei findest du unter `C:\ProgramData\Peakboard\LocalState\Logs\Setup\`. Häufige Ursachen sind eine nicht erreichbare SQL Server Instanz oder fehlende Schreibrechte auf den Installationsordner. Behebe die Ursache und starte den Installer anschließend erneut.

![Fehlgeschlagene Installation](/assets/images/hub/installer/hub-installer-09-failed.png)

### Updates

Um ein Update durchzuführen, lädst du dir die aktuelle [Installationsdatei des Peakboard Hub on premise](https://downloads.peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe) herunter und startest den Installer auf demselben Server wie die bestehende Installation. Im Schritt **Choose components** sind alle bereits installierten Komponenten automatisch abgewählt, sodass du nur den Haken bei **Peakboard Hub (web application)** gesetzt lässt. Den weiteren Verlauf des Assistenten durchläufst du wie bei der Erstinstallation; deine bestehende Datenbank bleibt dabei erhalten.
