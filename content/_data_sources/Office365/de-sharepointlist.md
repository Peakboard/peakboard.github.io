---
layout: article
title: Office 365 SharePoint-Liste
menu_title: Office 365 SharePoint-Liste
description: Anbindung einer SharePoint Lists Datenquelle (Microsoft 365) im Peakboard Designer inkl. Multi-Tenant- und Single-Tenant-Autorisierung.
lang: de
weight: 1180
ref: dat-2500
permalink: /data_sources/de-sharepointlist.html
redirect_from:
---

Mit der Datenquelle [SharePoint Lists] bindest du Listen aus Microsoft 365 bzw. SharePoint Online an Peakboard an. Die Anmeldung läuft über die moderne Microsoft-Authentifizierung (Microsoft Entra ID, OAuth). Du hast dabei die Wahl zwischen zwei Autorisierungsmethoden: einer **Multi-Tenant**- und einer **Single-Tenant**-Anwendung (siehe [Office 365 Verbindung](/data_sources/de-office365-connection.html)).

Eine allgemeine Anleitung, wie externe Datenquellen konfiguriert und an Peakboard-Elemente gekoppelt werden, findest du hier:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)

## Datenquelle hinzufügen

Mache einen Rechtsklick auf [Daten] oder klicke auf den [...]-Button und wähle [Datenquelle hinzufügen]. Wechsle dort in die Kategorie [Office 365] (1) und wähle die Datenquelle [SharePoint Lists] (2).

![SharePoint Lists Datenquelle hinzufügen](/assets/images/data-sources/sharepointlist/sharepointlist-01-add.png)

## Verbindung konfigurieren

Vergib der Datenquelle einen Namen und richte anschließend die [Connection] ein. Die Wahl der Autorisierungsmethode, die Anmeldung über [Authorize] und das Wiederverwenden einer bestehenden Verbindung funktionieren für alle Office 365 Datenquellen gleich und werden hier einmal beschrieben: [Office 365 Verbindung](/data_sources/de-office365-connection.html).

## Details angeben

Nach erfolgreicher Anmeldung lädst du mit [Retrieve SharePoint sites] die verfügbaren SharePoint-Seiten. Wähle danach unter [SharePoint site (collection)] (1) die gewünschte Seite und unter [SharePoint Lists] (2) die Liste aus.

Mit der Checkbox [Show user display name] werden bei Personen-Spalten die Anzeigenamen statt der internen Benutzer-IDs ausgegeben. Über die Zeilenbegrenzung legst du fest, wie viele Zeilen maximal geladen werden, und im Bereich [Sort] bestimmst du Sortierspalte und -richtung.

![SharePoint Lists – Seite und Liste auswählen mit Datenvorschau](/assets/images/data-sources/sharepointlist/sharepointlist-05-preview.png)

## Daten laden

Mit einem Klick auf [Load data] erzeugst du eine Vorschau der Listendaten – rechts im Dialog siehst du die geladenen Zeilen mit den Spalten der Liste (im Beispiel oben `id`, `Title`, `Description` und `Priority`). Neben den eigentlichen Nutzdaten werden auch Metadaten-Spalten mitgeliefert (z. B. Erstellungsdatum, Ersteller, Datum der letzten Änderung), die du je nach Anwendungsfall nutzen kannst.

Mit einem Klick auf [OK] legst du die Datenquelle an. Sie erscheint anschließend im Explorer unter [Daten] und kann wie jede andere Datenquelle mit Controls verknüpft werden.
