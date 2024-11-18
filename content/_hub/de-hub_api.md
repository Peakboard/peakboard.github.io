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

Für die Installation der Peakboard Hub API wird das Peakboard Hub Setup benötigt, das Sie [hier herunterladen können](https://peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe).

#### Voraussetzungen

Die Peakboard Hub On-Premises wird lokal auf Ihrem Server gehostet und benötigt:
- **IIS** und **Windows Server 2016 oder neuer**.
- Die [ASP.NET Core 8.0 Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-8.0.6-windows-hosting-bundle-installer), welche auch während der Installation über das Setup installiert werden kann.

> **Hinweis:** Eine laufende Peakboard Hub-Instanz ist für die vollständige Funktionalität der API erforderlich. Die API muss nicht auf demselben Server installiert sein, benötigt jedoch Zugriff auf dieselbe Datenbank.

#### Installation

Laden Sie das Setup herunter und führen Sie es mit Administratorrechten aus.
Wählen Sie im Bildschirm **Component Selection** folgende Optionen:
   - **Peakboard Hub API** (2): Installiert die API.
   - **Configure API IIS Page** (3): Erstellt eine IIS-Seite und einen App-Pool mit Standardeinstellungen, die später angepasst werden können.

> **Hinweis:** Wenn die IIS-Einrichtung übersprungen wird, müssen die IIS-Seite und der App-Pool manuell erstellt werden.

Wenn bereits eine Peakboard Hub-Instanz auf demselben System installiert ist, nutzt die API automatisch deren Datenbankverbindung. Ist dies nicht der Fall, wählen Sie die Komponente **Configure Database** (1), um eine benutzerdefinierte Datenbankverbindung anzugeben.


> **Hinweis:** Wenn 'Configure Database' (1) ausgewählt ist, frägt die nächste Seite nach dem Installationspfad des Peakboard Hubs. Falls auf dem System kein Peakboard Hub installiert ist, kann dies ignoriert werden. Andernfalls bitte einen leeren Ordner auswählen um die installierte Peakboard Hub Instanz nicht zu beeinflussen.

#### Aktualisierung der API

Um die API zu aktualisieren:
- Laden Sie die neueste Version des Setups herunter.
- Wählen Sie die Komponente **Peakboard Hub API** (2) aus.
- Aktualisieren Sie das [ASP.NET Core 8.0 Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-8.0.6-windows-hosting-bundle-installer), falls erforderlich.

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