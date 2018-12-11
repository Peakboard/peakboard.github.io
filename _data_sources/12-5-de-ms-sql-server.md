---
layout: article
title: MS SQL Server
menu_title: MS SQL Server
description: Information über MS SQL Server Daten in Peakboard
lang: de
ref: dat-12.5
---
Dieser Artikel erklärt den Zugriff von Peakboard auf einen MS SQL Server. Der Dialog ist eigentlich nahezu selbsterklärend. Neben dem Host-Namen sind User-Name, Passwort und die Datenbank (Initial Catalog) zu füllen. Falls ein Host mehrere SQL-Server-Instanzen hat, ist die gewünschte Instanz einfach mit einem Backslash an den Host-Namen anzuhängen.

Das SQL-Statement kann beliebig kompliziert werden. Es sei an dieser Stelle empfohlen, sehr komplexe Queries lieber im SQL Server in eine View zu packen und von hier aus auf die View zu lesen.

Der Load-Button führt das SQL-Statement einmalig aus und füllt die Spalten-Daten. Ab dann sollte der Preview ebenfalls funktionieren und das Dataset steht in Peakboard zur Weiterverarbeitung zur Verfügung.

![Add SQL Server Data](/assets/images/data-sources/ms-sql/add-sql-server-data.png)
