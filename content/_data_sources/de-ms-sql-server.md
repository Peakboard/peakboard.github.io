---
layout: article
title: MS SQL Server
menu_title: MS SQL Server
description: Information über MS SQL Server Daten in Peakboard
lang: de
weight: 1500
ref: dat-1500
redirect_from:
  - /data_sources/12-5-de-ms-sql-server.html
---

Mit der SQL Server Datenquelle bindest du eine Microsoft SQL Server Datenbank an den Peakboard Designer an. Du gibst die Verbindungsdaten ein, hinterlegst ein SQL-Statement und kannst die Ergebnisspalten anschließend wie jede andere Datenquelle mit Controls verknüpfen.

## Datenquelle hinzufügen

Mache einen Rechtsklick auf [Daten] und wähle [Datenquelle hinzufügen]. Im folgenden Dialog wählst du die Datenquelle [SQL Server] (1) aus.

![SQL Server Datenquelle hinzufügen](/assets/images/data-sources/ms-sql/ms-sql-01-add.png)

## Verbindung konfigurieren

Im folgenden Dialog vergibst du im Bereich [General] einen Namen für die Datenquelle (1). Im Bereich [Connection] gibst du den Host-Namen (2) und den Namen der Datenbank (3) ein. Falls ein Host mehrere SQL-Server-Instanzen hat, hängst du die gewünschte Instanz mit einem Backslash an den Host-Namen an. Anschließend trägst du den Benutzernamen (4) und das Passwort (5) für den SQL-Server-Login ein.

Im Bereich [Statement] (6) erfasst du das SQL-Statement, das die Daten für deine Anwendung liefert. Sehr komplexe Abfragen solltest du im SQL Server in einer Sicht erstellen und diese dann von Peakboard abfragen.

Mit einem Klick auf [Load data] (7) prüfst du die Verbindung und lädst eine Vorschau der Ergebniszeilen. Über den Button [Connection test] kannst du außerdem isoliert prüfen, ob Peakboard den SQL-Server erreichen kann.

![SQL Server Verbindung konfigurieren](/assets/images/data-sources/ms-sql/ms-sql-02-config.png)

## Variablen direkt im SQL-Statement nutzen

Im SQL-Statement kannst du Peakboard Variablen als Platzhalter einsetzen. Peakboard ersetzt den Platzhalter zur Ausführungszeit durch den aktuellen Wert der Variable. Der Platzhalter folgt dem Schema `#[Variablenname]#` (1).

![Variable im SQL-Statement](/assets/images/data-sources/ms-sql/ms-sql-03-variables.png)

So kannst du zum Beispiel die Auswahl eines Anwenders – etwa über einen Schieberegler, ein Eingabefeld oder einen Dropdown – direkt in die SQL-Abfrage einfließen lassen. Ein ausführliches Beispiel inklusive Skripten findest du im Artikel [Dynamische Abfragen](/data_sources/Basics/de-dynamische-abfragen.html).

## SQL-Statement per Skript erzeugen

Reicht eine Variable als Platzhalter nicht aus – etwa weil du Spalten, Tabellen oder ganze `WHERE`-Bedingungen erst zum Ausführungszeitpunkt aus mehreren Bedingungen zusammensetzen möchtest – kannst du das SQL-Statement vollständig per Skript aufbauen. Aktiviere dazu im Bereich [Statement] über das Symbol [</>] (1) den Modus [Use script]. Der Editor schaltet auf den Peakboard-Skripteditor um. Dein Skript muss als Rückgabewert das fertige SQL-Statement als Zeichenkette liefern (2).

![SQL-Statement per Skript erzeugen](/assets/images/data-sources/ms-sql/ms-sql-04-script.png)

Im obigen Beispiel wird ein konstantes `SELECT`-Statement mit dem aktuellen Wert der Variable `CurrentStatus` verkettet und so dynamisch das vollständige Statement gebildet.

## Vorschaudaten laden

Mit einem Klick auf [Load data] führt Peakboard das SQL-Statement aus und zeigt im Bereich [Preview] eine Vorschau der zurückgelieferten Zeilen. Auf diese Weise kannst du direkt prüfen, ob Verbindung, Anmeldedaten und Statement korrekt sind.

![Vorschaudaten laden](/assets/images/data-sources/ms-sql/ms-sql-05-preview.png)

Mit einem Klick auf [OK] legst du die Datenquelle an. Sie erscheint anschließend im Explorer unter [Daten] (1) und kann wie jede andere Datenquelle per Drag-and-drop auf Controls (z. B. Tabelle, Styled List, Chart) gezogen werden.

![SQL Server Datenquelle im Explorer](/assets/images/data-sources/ms-sql/ms-sql-06-explorer.png)
