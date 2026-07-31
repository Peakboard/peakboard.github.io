---
layout: article
product: hub
title: Installation
menu_title: Installation
description: Peakboard Hub on premise - Schritt-für-Schritt-Anleitung durch das neue Setup
lang: de
weight: 100
ref: hub-100
redirect_from:
  - /hub/de-hub_installation.html
---


Der Peakboard Hub on premise wird lokal auf deinem Server gehostet und benötigt Windows Server ab mindestens Version 2016. IIS, die ASP.NET Core Runtime und das passende .NET Hosting Bundle musst du nicht vorab installieren — das Setup richtet alles automatisch ein, was der Peakboard Hub on premise zum Laufen braucht.
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

Für die initiale Installation auf einem Windows Server benötigst du nur die Installationsdatei des Peakboard Hub on premise, die du [hier](https://downloads.peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe) herunterladen kannst. Starte die Datei anschließend mit Administratorrechten — das Setup führt dich durch die Einrichtung.

#### Schritt 1 — Willkommen

Nach dem Start erscheint der Begrüßungsbildschirm mit der aktuellen Setup-Version. Klicke auf [Start], um den Assistenten zu öffnen.

![Begrüßungsbildschirm des Peakboard Hub Setups](/assets/images/hub/installer/hub-installer-01-welcome.png)

#### Schritt 2 — Komponenten auswählen

Im Schritt **Choose Components** legst du fest, welche Bestandteile installiert werden sollen. Für eine Erstinstallation kannst du die vorausgewählten Komponenten einfach übernehmen.

* **Peakboard Hub** (1) — Die zentrale Webanwendung des Peakboard Hub. Bei einer Erstinstallation immer aktiviert lassen.
* **.NET Hosting Bundle** — Die von IIS benötigte ASP.NET Core Runtime. Lass die Option aktiviert, sofern das Bundle noch nicht auf dem Server vorhanden ist.
* **Configure IIS Page** — Richtet die IIS-Seite für den Peakboard Hub automatisch ein.
* **Install Microsoft SQL Server Express** (2) — Aktiviere die Option, wenn du noch keinen SQL Server zur Verfügung hast. Das Setup richtet dann eine lokale SQL Server Express Instanz ein. Wenn du einen bereits vorhandenen SQL Server nutzen möchtest, lass die Option abgewählt.
* **Configure Database** (3) — Legt die Datenbank und den Datenbankbenutzer für den Peakboard Hub an. Die zugehörigen Angaben machst du in den Schritten 4 und 5.
* **Peakboard Hub Api** (4) und **Configure API IIS Page** — Optionale REST-Schnittstelle samt eigener IIS-Seite, mit der du den Peakboard Hub aus anderen Systemen heraus ansprechen kannst. Standardmäßig abgewählt.

Klicke anschließend auf [Next].

![Komponentenauswahl im Peakboard Hub Setup](/assets/images/hub/installer/hub-installer-02-components.png)

#### Schritt 3 — Installationsordner

Im Schritt **Choose Install Path** legst du fest, wohin der Peakboard Hub installiert wird. Standardmäßig ist `C:\inetpub\PeakboardHub` voreingestellt (1) — dieser Ordner wird später als IIS-Seite eingebunden. Über den Ordner-Button (2) kannst du einen anderen Pfad wählen.

Bestätige deine Auswahl mit [Next].

![Auswahl des Installationsordners](/assets/images/hub/installer/hub-installer-03-install-path.png)

<div class="box-tip" markdown="1"> **Hinweis**: Wenn du im Schritt 2 **Install Microsoft SQL Server Express** aktiviert gelassen hast, installiert das Setup den SQL Server Express direkt nach diesem Schritt, bevor es mit der Datenbankkonfiguration weitergeht. Der Fortschritt wird dabei über einen Fortschrittsbalken angezeigt.
</div>

#### Schritt 4 — Datenbank

Im Schritt **Generate Peakboard Hub Database** verbindest du den Peakboard Hub mit seiner SQL-Datenbank.

* **Create new database** (1) — Aktiviere diese Option bei einer Erstinstallation, damit das Setup eine neue Datenbank für dich anlegt. Lass sie abgewählt, wenn du eine bereits vorhandene Datenbank weiterverwenden möchtest (zum Beispiel bei einem Update oder einer Migration).
* **MS SQL Server name** (2) — Adresse und Instanzname deines SQL Servers. Bei der mitgelieferten Express-Instanz lautet die Voreinstellung `localhost\SQLEXPRESS`.
* **MS SQL Database name** (3) — Name der Datenbank. Standardmäßig `PeakboardHub`.

Mit [Next] geht es weiter zum Datenbankbenutzer.

![Datenbankkonfiguration — SQL Server und Datenbankname](/assets/images/hub/installer/hub-installer-04-database.png)

#### Schritt 5 — Datenbankbenutzer

Im Schritt **Create Database user** legst du den SQL-Benutzer fest, mit dem der Peakboard Hub auf seine Datenbank zugreift.

* **Create new user** (1) — Das Setup legt einen neuen SQL-Benutzer an. Mit **Add existing user** kannst du stattdessen einen bereits vorhandenen Benutzer verwenden.
* **Username** (2) — Loginname des SQL-Benutzers.
* **Password** (3) und **Confirm Password** — Vergib ein sicheres Passwort und wiederhole es zur Bestätigung. Die Eingabe wird ausgeblendet.

Mit [Next] startet die eigentliche Installation.

![Anlegen des Datenbankbenutzers](/assets/images/hub/installer/hub-installer-05-database-user.png)

#### Schritt 6 — Installation

Das Setup führt nun die ausgewählten Schritte nacheinander aus: Bereitstellen der Voraussetzungen und des .NET Hosting Bundles, gegebenenfalls Einrichten des SQL Server Express, Anlegen der Datenbank und des Datenbankbenutzers, Kopieren der Dateien in den Installationsordner sowie das Eintragen der IIS-Seite. Die aktuell laufende Aufgabe wird über dem Fortschrittsbalken angezeigt.

![Installationsfortschritt](/assets/images/hub/installer/hub-installer-06-installing.png)

#### Schritt 7 — Fertig

Wenn alle Aufgaben erfolgreich abgeschlossen sind, wechselt der Assistent zum Schritt **Installation finished** und begrüßt dich mit einer Erfolgsmeldung. Über [Close] (1) schließt du das Setup.

![Erfolgreich abgeschlossene Installation](/assets/images/hub/installer/hub-installer-07-finished.png)

Der Peakboard Hub on premise ist anschließend in deinem Browser erreichbar — standardmäßig unter dem Port `20588`, also zum Beispiel `http://<dein-server>:20588`. Zudem taucht er in der IIS-Verwaltung als eigene Seite auf, die du dort wie gewohnt weiter konfigurieren kannst, zum Beispiel eine sichere Kommunikation mit Zertifikaten deines Unternehmens hinterlegen.

Nach der ersten Anmeldung eines Benutzers im Peakboard Hub on premise wird dieser Benutzer automatisch zum Administrator. Zukünftig kannst du weitere Benutzer in der Benutzerverwaltung des Peakboard Hub on premise zu Admins ernennen.

<div class="box-warning" markdown="1"> **Beachte**:
* Wenn du Updates der Peakboard Boxen über den Peakboard Hub on premise durchführen willst, musst du den IIS Prozess dazu berechtigen, in den Installationsordner (zum Beispiel `C:\inetpub\PeakboardHub`) zu schreiben.
* Wenn MQTT zur Kommunikation zwischen Peakboard Boxen genutzt werden soll, muss der MQTT Port (standardmäßig 1883) geöffnet werden.
</div>

Hier siehst du, wo du die Berechtigungen setzen musst:

![Peakboard Hub on premise Berechtigungen](/assets/images/hub/hub_permissions.png)

### Wenn die Installation fehlschlägt

Tritt während der Installation ein Fehler auf, bricht das Setup den betroffenen Schritt mit einer Fehlermeldung ab. Die Setup-Logdateien findest du unter `C:\ProgramData\Peakboard\LocalState\Logs\Setup\`. Häufige Ursachen sind eine nicht erreichbare SQL Server Instanz oder fehlende Schreibrechte auf den Installationsordner. Behebe die Ursache und starte das Setup anschließend erneut.

### Updates

Um ein Update durchzuführen, lädst du dir die aktuelle [Installationsdatei des Peakboard Hub on premise](https://downloads.peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe) herunter und startest das Setup auf demselben Server wie die bestehende Installation. Im Schritt **Choose Components** wählst du die Komponenten ab, die bereits vorhanden sind (zum Beispiel **Install Microsoft SQL Server Express**), und lässt den Haken bei **Peakboard Hub** gesetzt. Im Schritt **Generate Peakboard Hub Database** wählst du **Create new database** ab, damit deine bestehende Datenbank erhalten bleibt. Den weiteren Verlauf des Assistenten durchläufst du wie bei der Erstinstallation.

### Deinstallation

Den Peakboard Hub on premise wieder los wirst du über den mitgelieferten Uninstaller. Die Schritt-für-Schritt-Anleitung dazu findest du im Artikel [Deinstallation](/hub/Peakboard_Hub_on_premise/de-hub_uninstallation.html).
