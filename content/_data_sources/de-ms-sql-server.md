---
layout: article
title: MS SQL Server
menu_title: MS SQL Server
description: Information über MS SQL Server Daten in Peakboard
lang: de
weight: 1200
ref: dat-1200
redirect_from:
  - /data_sources/12-5-de-ms-sql-server.html
---

Dieser Artikel erklärt den Zugriff von Peakboard auf einen MS SQL Server.
Um die Datenquelle hinzuzufügen, mache einen Rechtsklick auf [Daten] oder klicke alternativ auf den [...]-Button und wähle dann [Datenquelle hinzufügen] und [SQL Server] (1).

![Datenquelle hinzufügen](/assets/images/data-sources/ms-sql/de_sql-01.png)

Gib der Datenquelle einen Namen (1). Neben dem Host-Namen (2) musst du den Benutzernamen (3), das Passwort (4) und die Datenbank (5) angeben, die du verwenden möchtest. Falls ein Host mehrere SQL-Server-Instanzen hat, hängst du die gewünschte Instanz mit einem Backslash an den Host-Namen an.

Das SQL-Statement (6) kann beliebig kompliziert werden.
Sehr komplexe Queries solltest du im SQL Server in einer Sicht erstellen und dann mit Peakboard die Sicht abfragen.

Mit [Daten Laden] (7) kannst du die Daten prüfen und dann in deinem Projekt nutzen.

![SQL Dialog](/assets/images/data-sources/ms-sql/de_sql-02.png)
