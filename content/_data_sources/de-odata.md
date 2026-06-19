---
layout: article
title: OData
menu_title: OData
description: Peakboard mit einem OData-Service verbinden und dessen Entitäten als Datenquelle einlesen
lang: de
weight: 1700
ref: dat-1700
redirect_from:
  - /data_sources/07-de-odata.html
---

OData ist ein standardisiertes, REST-basiertes Protokoll zum Austausch von Daten. Mit der OData Datenquelle verbindest du Peakboard mit einem beliebigen OData-Service und liest eine seiner Entitäten als Tabelle ein. Eine allgemeine Einführung, wie du externe Datenquellen konfigurierst und an Controls koppelst, findest du im folgenden Tutorial:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)

## Datenquelle hinzufügen

Füge eine neue OData Datenquelle über einen Rechtsklick auf [Daten] und dann [Datenquelle hinzufügen] hinzu. Wähle die Kachel [OData] (1) aus – du findest sie in der Kategorie [Generic] oder über das Suchfeld.

![OData hinzufügen](/assets/images/data-sources/odata/odata-01-add.png)

Falls du keine eigene OData-URL zur Hand hast, sondern die Sache einfach nur einmal ausprobieren willst, kannst du den öffentlichen TripPin-Beispielservice von Microsoft verwenden. Er stellt mehrere Entitäten bereit, z.B. `People`, `Airports` und `Airlines`:

[https://services.odata.org/TripPinRESTierService/](https://services.odata.org/TripPinRESTierService/)

## Verbindung und Entität konfigurieren

Vergib der Datenquelle zunächst einen Namen (1). Im Bereich [Connection] trägst du die Service-Adresse in [Base URL] (2) ein. Peakboard trennt den Service-Pfad dabei automatisch in das Feld [URL path] (3) im Bereich [Request] ab. Falls der Service eine Authentifizierung erfordert, wählst du die Methode unter [Authentication Type] (4) – für den öffentlichen Beispielservice bleibt sie auf [None].

Mit einem Klick auf [Load] (5) liest du die verfügbaren Entitätensets aus dem Service ein und wählst anschließend unter [Entity sets] (6) das gewünschte aus – in diesem Beispiel [Airlines]. Über das Drop-down [Entity properties] (7) legst du fest, welche Spalten abgerufen werden; hier liefert die Entität `AirlineCode` und `Name`. Wenn du nicht alle Zeilen abrufen möchtest, kannst du im Feld [Filter string] (8) einen OData-Filter hinterlegen. Falls du nicht genau weißt, wie ein OData-Filter funktioniert, findest du [auf odata.org](https://www.odata.org/getting-started/basic-tutorial/#queryData) eine gute Einführung.

Mit einem Klick auf [Load data] wird eine Testanfrage an den Server gesendet und rechts eine Vorschau angezeigt – hier die vom Service gelieferten Airlines mit ihrem `AirlineCode` und `Name`. Bestätige mit [OK], um die Datenquelle anzulegen; sie erscheint danach im Explorer unter [Daten] und kann wie jede andere Datenquelle mit Controls verknüpft werden.

![OData-Verbindung konfigurieren und Vorschau laden](/assets/images/data-sources/odata/odata-02-configure.png)
