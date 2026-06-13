---
layout: article
title: ODBC
menu_title: ODBC
description: Peakboard über einen Connection String und ein SQL-Statement an beliebige Datenbanken mit ODBC-Treiber (z. B. MySQL) anbinden.
lang: de
weight: 1800
ref: dat-1800
redirect_from:
---

Die ODBC-Datenquelle ermöglicht es dir, Peakboard an nahezu jede Datenbank anzubinden, die einen ODBC-Treiber bereitstellt – zum Beispiel MySQL, MariaDB oder PostgreSQL. Du definierst einen ODBC Connection String und ein SQL-Statement, und Peakboard liest das Ergebnis dieses Statements in eine Tabelle ein.

Unter dem folgenden Link findest du ein Tutorial, wie generell externe Datenquellen konfiguriert und an Peakboard-Elemente gekoppelt werden:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)

## ODBC-Treiber installieren

Bevor du die ODBC-Datenquelle verwenden kannst, musst du den ODBC-Treiber der gewünschten Datenbank installieren – sowohl auf deinem lokalen Rechner (um die Datenquelle im Designer zu bauen) als auch auf der Peakboard Box, die die Anwendung später abspielt. Auf der Box installierst du den Treiber wie auf einem normalen Windows-Rechner (mit USB-Tastatur und -Maus) oder remote per PowerShell. Achte auf die passende Architektur; für eine 64-Bit Peakboard Runtime brauchst du den 64-Bit-ODBC-Treiber.

Sollte der ODBC-Zugriff von sehr vielen Boxen aus erfolgen, kann es sinnvoll sein, stattdessen eine [Extension](https://help.peakboard.com/data_sources/Extension/de-Extension.html) zu entwickeln. Eine Extension auszurollen geht oft schneller, als den ODBC-Treiber auf jeder Box zu installieren.

## Einrichten der Datenquelle

Mache einen Rechtsklick auf [Daten] oder klicke auf den [...]-Button und wähle [Datenquelle hinzufügen]. Wechsle in die Kategorie [Database & SAP] (1) und wähle die Datenquelle [ODBC] (2).

![ODBC Datenquelle hinzufügen](/assets/images/data-sources/odbc/odbc-01-add.png)

## Verbindung und Statement

Vergib der Datenquelle einen Namen. Im Bereich [Connection] trägst du den ODBC [Connection string] (1) ein. Das Feld ist wie ein Passwortfeld maskiert, da der Connection String in der Regel das Datenbank-Passwort enthält – über das Augen-Symbol rechts kannst du ihn ein- oder ausblenden.

Das genaue Format des Connection Strings hängt von der Datenbank und dem installierten Treiber ab. Ein Beispiel für MySQL sieht so aus:

```
Driver={MySQL ODBC 9.7 Unicode Driver};Server=myserver.example.com;Port=3306;Database=production;Uid=myuser;Pwd=********;
```

Alternativ kannst du alle Zugangsdaten in einer lokalen DSN hinterlegen. Der Connection String muss dann nur noch die DSN über ihren Namen referenzieren (zum Beispiel `DSN=MyProductionDb;`), was ihn kurz hält – die DSN muss allerdings auch auf der Box gepflegt werden.

Trage das SQL-[Statement] (2) ein, das die Daten selektiert und entsprechend deiner Datenbank formuliert ist, zum Beispiel:

```
SELECT * FROM production_orders LIMIT 5
```

Klicke auf [Load data] (3), um die Verbindung zu testen und das Ergebnis zu laden.

![ODBC Connection String und Statement](/assets/images/data-sources/odbc/odbc-02-config.png)

## Daten laden

Die Vorschau zeigt die vom Statement zurückgelieferten Zeilen und liest die Spalten – samt ihrer Datentypen – in die Tabelle ein. Mit einem Klick auf [OK] legst du die Datenquelle an. Sie erscheint anschließend im Explorer unter [Daten] und kann wie jede andere Datenquelle mit Controls verknüpft werden.

![ODBC Vorschau](/assets/images/data-sources/odbc/odbc-03-preview.png)
