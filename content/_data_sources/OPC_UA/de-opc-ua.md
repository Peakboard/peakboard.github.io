---
layout: article
title: OPC UA
menu_title: OPC UA
description: OPC UA Datenquelle in Peakboard einrichten – Client-Zertifikat, Verbindung, Endpunkt, Abonnements und Listener
lang: de
weight: 1900
ref: dat-1900
redirect_from: 
 - /data_sources/de-opc-ua.html
 - /data_sources/22-de-opc-ua.html
 - /data_sources/OPCUA/de-opc-ua.html
 - /data_sources/OPC_UA/de-Array-OPCUA.html
 - /misc/de-Array-OPCUA.html
 - /data_sources/OPCUA/de-Array-OPCUA.html
---

OPC UA (Open Platform Communications Unified Architecture) ist der Industriestandard für den herstellerunabhängigen Datenaustausch zwischen Maschinen, Anlagen und IT-Systemen. Mit der OPC UA Datenquelle verbindet sich Peakboard direkt mit einem OPC UA Server, abonniert dort einzelne Knoten und stellt deren Werte in der Peakboard-Anwendung dar. Mehr zum Standard findest du bei der [OPC Foundation](https://opcfoundation.org).

## Datenquelle hinzufügen

Lege über [Datenquelle hinzufügen] eine neue Datenquelle an und wähle die Kachel [OPC UA] (1) aus.

![OPC UA Datenquelle auswählen](/assets/images/data-sources/opc-ua/data-source-opc-ua-01.png)

## Verbindung konfigurieren

Wie jede andere Peakboard-Datenquelle benötigt auch die OPC UA-Datenquelle einen Namen. Trage diesen unter [Data source name] (1) ein.

![OPC UA Verbindung konfigurieren](/assets/images/data-sources/opc-ua/data-source-opc-ua-02.png)

Im Abschnitt [Connection] richtest du die Verbindung zum Server ein:

* (1) **Data source name**: Der Name, unter dem die Datenquelle in der Anwendung angesprochen wird.
* (2) **Load client certificate**: Ein Client-Zertifikat ist erforderlich. Es wird als Ganzes (öffentlicher und privater Schlüssel) auf der Client-Seite gespeichert. Der öffentliche Teil muss anschließend an den Server übertragen und dort als vertrauenswürdiges Zertifikat hinterlegt werden (einzige Ausnahme: der Endpunkt „None : None“ wird verwendet). Über diesen Button öffnest du die Zertifikatsverwaltung.
* (3) **Manage server certificates**: Verwalte hier die Zertifikate der Gegenstelle (Server).
* (4) **Trust All**: Akzeptiert automatisch alle Server-Zertifikate. Praktisch für Tests, im Produktivbetrieb solltest du die Zertifikate jedoch gezielt als vertrauenswürdig einstufen.
* (5) **Server URL**: Die Adresse des OPC UA Servers in der Form `opc.tcp://<host>.<domain>:<port>[/<path>]`. Über den `</>`-Button kann die Server-URL per Skript gesetzt werden.
* (6) **Endpoint**: Lade die verfügbaren Endpunkte über den Aktualisieren-Button rechts neben der Auswahl. Wird ein Zertifikats-Popup angezeigt, akzeptiere das Server-Zertifikat. Wähle danach den gewünschten Endpunkt. Die Endpunkte unterscheiden sich durch ihre Verschlüsselungs- und Signierstufen sowie die verwendeten Algorithmen.
* (7) **Authentication**: Optional eine Authentifizierungsmethode (Anonymous, UserName, Certificate). Die OPC UA Authentifizierung authentifiziert den OPC UA Benutzer gegenüber dem Server.
* (8) **Connect**: Stelle die Verbindung zum Server her. Funktioniert die Verbindung, sind alle eingegebenen Informationen gültig.

<div class="box-tip" markdown="1">
Hinweis:

Das Server-URL-Skript wird nur einmal ausgeführt, nämlich beim Verbindungsaufbau zum Server beim Start.
</div>

<div class="box-tip" markdown="1">
Hinweis:

Client- und Server-Zertifikat authentifizieren Client und Server gegeneinander und unterscheiden sich somit von der Benutzerauthentifizierung. Ist bereits eine OPC UA Verbindung hinterlegt (Personal/Hub/Visualisierung), kann diese über [Reuse existing connection] verwendet werden.
</div>

## Client-Zertifikat verwalten

Über [Load client certificate] öffnest du die Zertifikatsverwaltung.

![Zertifikate verwalten](/assets/images/data-sources/opc-ua/data-source-opc-ua-03.png)

* (1) **Certificate usage**: Wähle den Verwendungszweck. Für ein OPC UA Client-Zertifikat muss [OPC UA] ausgewählt sein.
* (2) **Import**: Importiere ein vorhandenes Zertifikat (`.pfx`, `.p12` oder `.p7b`).
* (3) **Create**: Erstelle ein neues Client-Zertifikat (siehe nächster Abschnitt).
* (4) **Zertifikatsliste**: Über das Aktionsmenü ([Open] bzw. das kleine Dreieck) lässt sich ein Zertifikat ansehen, exportieren oder im Windows-Zertifikatsbetrachter öffnen. Mit den Reitern [My certificates], [Root], [Trusted people] und [Untrusted] wechselst du zwischen den Zertifikatspeichern.
* (5) **Select**: Übernimm das markierte Zertifikat. Über [Cancel] verwirfst du die Auswahl – bereits hinzugefügte Zertifikate werden dadurch nicht gelöscht.

### Neues Zertifikat erstellen

![Neues Client-Zertifikat erstellen](/assets/images/data-sources/opc-ua/data-source-opc-ua-04.png)

* (1) Trage im oberen Eingabeblock alle erforderlichen Informationen ein (mindestens [Common name]).
* (2) Der untere Block enthält erweiterte Einstellungen wie [Certificate validity], [RSA key strength] und [Signature algorithm]. In den meisten Fällen müssen hier keine Änderungen vorgenommen werden.
* (3) Erzeuge das Zertifikat über [Create].

## Datenverarbeitung festlegen

Nach erfolgreicher Verbindung legst du im Abschnitt [Specify details] fest, wie die Daten gelesen werden.

![Datenverarbeitung festlegen](/assets/images/data-sources/opc-ua/data-source-opc-ua-05.png)

* (1) **Communication type**: Die Art der Kommunikation mit dem Server.
  * **Subscriptions**: Die von OPC UA definierten Abonnements. Dies ist der empfohlene Weg, sofern der Server sie unterstützt.
  * **Variables**: Liest Knotenwerte in einem festen Intervall (Reload Interval). Es können nur variable Knoten verwendet werden; Objekte und ihre Ereignisse stehen nicht zur Verfügung.
* (2) **Edit settings**: Abonnementspezifische Einstellungen bearbeiten. Sollte nur geändert werden, wenn du weißt, was du tust.
* (3) **Message type**: 
  * **Last message (simple)**: Speichert die letzte Nachricht je Abonnement.
  * **Advanced**: Speichert die letzten Wertaktualisierungen (Anzahl = Queue Size).
* (4) **Subscriptions**: Die Liste der abonnierten Knoten mit NodeID, Pfad und Titel. Der Titel wird verwendet, um innerhalb der Peakboard-Visualisierung auf den Knoten zuzugreifen.
* (5) **Manage subscriptions**: Verwalte deine Abonnements.
  * [Browse] öffnet den Knoten-Browser, der alle Knoten auf dem Server durchsucht (eine Verbindung ist erforderlich).
  * [Add manually] fügt Knoten anhand von Knoten-ID und Namensraum hinzu, ohne den Browser zu verwenden (offline möglich).
* (6) **Enable listener**: Aktiviere den Listener, um zu prüfen, ob alle Abonnements korrekt definiert sind. Der Listener verhält sich genauso wie die Datenquelle später in der Visualisierung – im Bereich [Preview] siehst du die Live-Werte.

<div class="box-tip" markdown="1">
Hinweis:

Aktiviere den Listener immer nach dem Anlegen der Abonnements und prüfe die Vorschau, bevor du den Dialog mit [OK] schließt.
</div>

## Knoten durchsuchen

Der Durchsuchen-Dialog zeigt den Baum der Knoten, die auf dem verbundenen OPC UA Server hinterlegt sind.

![OPC UA Knoten durchsuchen](/assets/images/data-sources/opc-ua/data-source-opc-ua-06.png)

* (1) **Knotenbaum**: Navigiere durch die Knotenstruktur des Servers.
* (2) **Knoten auswählen**: Durch Aktivieren der Checkbox eines Knotens wird ein neues Abonnement hinzugefügt, durch Deaktivieren wieder entfernt.
* (3) **Attributes**: Zeigt die Attribute des markierten Knotens (NodeId, NodeClass, Value, DataType …).
* (4) **Select**: Übernimm die ausgewählten Knoten als Abonnements.

Knotenklassen:

* **Variable**: Hat einen Wert, der vom Server gelesen wird.
* **Object**: Verfügt über Ereignisse, die im Dialog [Edit OPC UA subscription] abonniert werden können.

## Abonnement bearbeiten

Per Doppelklick auf eine Zeile in der Abonnementliste öffnest du die Detailansicht eines Abonnements.

![OPC UA Abonnement bearbeiten](/assets/images/data-sources/opc-ua/data-source-opc-ua-07.png)

* (1) **Title**: Der Titel, über den der Knoten in der Peakboard-Visualisierung angesprochen wird.
* (2) **Namespace**: Der Namensraum des Knotens. Kann per Skript (`</>`-Button) gesetzt werden. Das Skript wird nur einmal ausgeführt, wenn beim Start das Abonnement beim OPC UA Server angelegt wird.
* (3) **Identifier**: Der Bezeichner des Knotens. Kann ebenfalls per Skript gesetzt werden.
* (4) **Attributes**: Node class, Path, Data Type und Value Rank des Knotens.
* (5) **Fetch nodes**: Ist eine Verbindung zum Server möglich, liest dieser Button zusätzliche Knoteninformationen (Knotenklasse, Datentyp …) direkt vom Server.
