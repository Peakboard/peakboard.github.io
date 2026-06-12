---
layout: article
title: SharePoint-Liste
menu_title: SharePoint-Liste
description: Anbindung einer SharePoint Lists Datenquelle (Microsoft 365) im Peakboard Designer inkl. Multi-Tenant- und Single-Tenant-Autorisierung.
lang: de
weight: 2500
ref: dat-2500
redirect_from:
---

Mit der Datenquelle [SharePoint Lists] bindest du Listen aus Microsoft 365 bzw. SharePoint Online an Peakboard an. Die Anmeldung läuft über die moderne Microsoft-Authentifizierung (Microsoft Entra ID, OAuth). Du hast dabei die Wahl zwischen zwei Autorisierungsmethoden: einer **Multi-Tenant**- und einer **Single-Tenant**-Anwendung (siehe [Verbindung konfigurieren](#verbindung-konfigurieren)).

Eine allgemeine Anleitung, wie externe Datenquellen konfiguriert und an Peakboard-Elemente gekoppelt werden, findest du hier:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)

## Datenquelle hinzufügen

Mache einen Rechtsklick auf [Daten] oder klicke auf den [...]-Button und wähle [Datenquelle hinzufügen]. Wechsle dort in die Kategorie [Office 365] (1) und wähle die Datenquelle [SharePoint Lists] (2).

![SharePoint Lists Datenquelle hinzufügen](/assets/images/data-sources/sharepointlist/sharepointlist-01-add.png)

## Verbindung konfigurieren

Vergib im Bereich [General] zunächst einen Namen für die Datenquelle (1).

Im Bereich [Connection] wählst du über das Auswahlfeld die Autorisierungsmethode (2) und meldest dich anschließend über den Button [Authorize] (3) mit deinem Microsoft-Konto an. Da die Anmeldung über das normale Microsoft-Anmeldefenster erfolgt, wird auch die Zwei-Faktor-Authentifizierung (MFA) unterstützt.

![SharePoint Lists Verbindung – Multi-Tenant](/assets/images/data-sources/sharepointlist/sharepointlist-02-multitenant.png)

### Multi-Tenant- und Single-Tenant-Anwendung im Vergleich

Über das Auswahlfeld im Bereich [Connection] legst du fest, gegen welche in Microsoft Entra ID registrierte Anwendung sich Peakboard authentifiziert.

![SharePoint Lists – Autorisierungsmethode wählen](/assets/images/data-sources/sharepointlist/sharepointlist-03-tenant-options.png)

* **Use multi-tenant Application** – Peakboard nutzt eine bereits von Peakboard bereitgestellte, mandantenübergreifende (multi-tenant) Anwendung in Microsoft Entra ID. Du musst keine eigene App registrieren: Ein Klick auf [Authorize] genügt, danach meldest du dich mit deinem Microsoft-Konto an. Hinweis: Je nach Konfiguration deiner Organisation muss ein Administrator der Peakboard-Anwendung einmalig zustimmen (Admin Consent).
* **Use single-tenant Application** – Du verwendest eine eigene App-Registrierung in deinem eigenen Microsoft Entra ID-Verzeichnis (Tenant). Die Anmeldung bleibt damit vollständig innerhalb deiner Organisation und ist von keiner geteilten Anwendung abhängig.

Hast du [Use single-tenant Application] gewählt (1), trägst du zusätzlich die Werte deiner eigenen App-Registrierung ein: die [Application (client) ID] (2) und die [Directory (tenant) ID] (3). Anschließend startest du die Anmeldung über [Authorize] (4).

![SharePoint Lists Verbindung – Single-Tenant](/assets/images/data-sources/sharepointlist/sharepointlist-04-singletenant.png)

Kurz zusammengefasst:

* **Multi-Tenant** ist der schnellste Weg: eine zentrale, von Peakboard gepflegte Anwendung, die über mehrere Organisationen hinweg funktioniert – ohne eigene App-Registrierung.
* **Single-Tenant** bietet die größte Kontrolle: Du registrierst die Anwendung selbst in deinem Verzeichnis, vergibst die Berechtigungen und bist nicht auf eine geteilte Anwendung angewiesen.

<div class="box-tip" markdown="1">
**Hinweis**
Über den Button [Reuse existing connection] kannst du eine bereits autorisierte Verbindung erneut verwenden, ohne dich erneut anmelden zu müssen.
</div>

## Details angeben

Nach erfolgreicher Anmeldung lädst du mit [Retrieve SharePoint sites] die verfügbaren SharePoint-Seiten. Wähle danach unter [SharePoint site (collection)] (1) die gewünschte Seite und unter [SharePoint Lists] (2) die Liste aus.

Mit der Checkbox [Show user display name] werden bei Personen-Spalten die Anzeigenamen statt der internen Benutzer-IDs ausgegeben. Über die Zeilenbegrenzung legst du fest, wie viele Zeilen maximal geladen werden, und im Bereich [Sort] bestimmst du Sortierspalte und -richtung.

![SharePoint Lists – Seite und Liste auswählen mit Datenvorschau](/assets/images/data-sources/sharepointlist/sharepointlist-05-preview.png)

## Daten laden

Mit einem Klick auf [Load data] erzeugst du eine Vorschau der Listendaten – rechts im Dialog siehst du die geladenen Zeilen mit den Spalten der Liste (im Beispiel oben `id`, `Title`, `Description` und `Priority`). Neben den eigentlichen Nutzdaten werden auch Metadaten-Spalten mitgeliefert (z. B. Erstellungsdatum, Ersteller, Datum der letzten Änderung), die du je nach Anwendungsfall nutzen kannst.

Mit einem Klick auf [OK] legst du die Datenquelle an. Sie erscheint anschließend im Explorer unter [Daten] und kann wie jede andere Datenquelle mit Controls verknüpft werden.
