---
layout: article
product: hub
title: Peakboard Hub API
menu_title: API
description: Peakboard Hub - API
lang: de
weight: 1000
ref: hub-1000
redirect_from:
---

Die **Peakboard Hub API** ermöglicht die Integration von Peakboard-Anwendungen in individuelle Umgebungen. Für die Nutzung der API ist eine Peakboard Hub Online- oder On-Premises-Lizenz erforderlich.

### Einrichtung der Peakboard Hub API – Nur On-Premises

Für die Installation der Peakboard Hub API wird das Peakboard Hub Setup benötigt, das Sie [hier herunterladen können](https://downloads.peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe).

#### Voraussetzungen

Der Peakboard Hub On-Premises wird lokal auf Ihrem Server gehostet und benötigt **Windows Server 2016 oder neuer**. Die API läuft als eigener Windows-Dienst — IIS wird nicht benötigt. Die erforderliche ASP.NET Core Runtime installiert das Setup, falls sie fehlt.

> **Hinweis:** Eine laufende Peakboard Hub-Instanz ist für die vollständige Funktionalität der API erforderlich. Die API muss nicht auf demselben Server installiert sein, benötigt jedoch Zugriff auf dieselbe Datenbank.

#### Installation

Laden Sie das Setup herunter und führen Sie es mit Administratorrechten aus. Wählen Sie auf der ersten Seite **Choose Components** die Option **Peakboard Hub Public API**. Wenn Sie nur die API installieren möchten, wählen Sie **Peakboard Hub** ab. Auf der Seite **Installation Folders** legen Sie den Ordner der API fest; Standard ist `C:\Program Files\Peakboard\PeakboardHubApi`.

![Komponenten der Public API](/assets/images/hub/hub_api-installation-01.png)

Die Seite **Install Public API** zeigt, was das Setup für eine neue API erledigt: Es kopiert die Programmdateien, richtet die Datenbankverbindung ein und legt den Windows-Dienst `PeakboardHubApi` an. Auf der Seite **Service Configuration** wählen Sie den HTTP-Port (Standard `20688`) und optional HTTPS (Standard-Port `20689`).

Die API nutzt die Datenbank des Peakboard Hub mit. Auf der Seite **API database connection** trägt das Setup die Verbindung eines Peakboard Hub auf demselben Server ein; andernfalls geben Sie Datenbankserver, Datenbankname, Nutzername und Passwort selbst ein.

![Datenbankverbindung der Public API](/assets/images/hub/hub_api-installation-03.png)

Alle Schritte des Setups beschreibt der Artikel [Installation](/hub/Peakboard_Hub_on_premise/de-hub_installation.html).

#### Aktualisierung der API

Um die API zu aktualisieren:
- Laden Sie die neueste Version des Setups [hier](https://downloads.peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe) herunter.
- Wählen Sie auf der ersten Seite **Peakboard Hub Public API** und auf der Seite **Installation Folders** den Ordner der vorhandenen API.
- Die API behält ihre eigene Datenbankverbindung, sofern Sie die Datenbank nicht erneut konfigurieren.

Eine API, die noch im IIS läuft, wird beim Update in einen Windows-Dienst migriert, siehe [Migration von IIS zu einem Windows-Dienst](/hub/Peakboard_Hub_on_premise/de-hub_migration-iis-to-windows-service.html).

### Nutzung der Peakboard Hub API

#### API Key

![API key Verwaltung](/assets/images/hub/hub_api-installation-02.png)

Für den Zugriff auf die API wird ein API-Schlüssel benötigt. Dieser kann auf der Benutzergruppenseite generiert werden:

- **Peakboard Hub Online:** Melden Sie sich unter [hub.peakboard.com](https://hub.peakboard.com) an und navigieren Sie zu *Organisation → API KEYS*.
- **Peakboard Hub On-Premises:** Melden Sie sich bei Ihrem lokalen Hub an und gehen Sie zu *Users → API KEYS*.

Die API-Schlüssel sind an die Berechtigungen der jeweiligen Benutzergruppe gebunden und ermöglichen den Zugriff auf spezifische Ressourcen innerhalb dieser Gruppe. Die Berechtigungen umfassen:
- **read:lists**
- **write:lists**
- **read:alerts**
- **write:alerts**
- **read:box**
- **write:box**

Zusätzlich kann ein Gültigkeitszeitraum für den Schlüssel festgelegt werden.

> **Tipp:** Schlüssel können an derselben Stelle verwaltet, bearbeitet oder gelöscht werden.

> **Hinweis:** Für die Verwaltung von API-Schlüsseln sind *Benutzer*-Zugriffsrechte erforderlich. Falls diese fehlen, bitten Sie Ihren Administrator, einen Schlüssel für Sie zu erstellen.

#### Autorisierung

So verwenden Sie die API:
Rufen Sie die Hauptseite der API auf um eine Übersicht der verfügbaren Endpunkte zu erhalten:
   - **Peakboard Hub Online:** [https://api.peakboard.com/public-api/index.html](https://api.peakboard.com/public-api/index.html)
   - **Peakboard Hub On-Premises:** `<your-local-api-path>/public-api/index.html`

Fordern Sie ein Autorisierungstoken über einen GET-Request an:
   - **Peakboard Hub Online:** [https://api.peakboard.com/public-api/v1/auth/token](https://api.peakboard.com/public-api/v1/auth/token)
   - **Peakboard Hub On-Premises:** `<your-local-api-path>/public-api/v1/auth/token`

Der Header `'apiKey': '<your-api-key>'` wird dabei benötigt.

Autorisieren Sie mit dem so erhaltenen Token alle nachfolgende Aufrufe, indem Sie den Header hinzufügen:
   `'Authorization': 'Bearer <your-authorization-token>'`.

> **Hinweis:** Autorisierungstokens sind nur temporär gültig und müssen nach Ablauf erneuert werden.