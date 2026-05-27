---
layout: article
title: Oracle
menu_title: Oracle
description: Anbindung einer Oracle Datenquelle im Peakboard Designer
lang: de
weight: 2000
ref: dat-2000
redirect_from:
---

Oracle Database ist eines der am weitesten verbreiteten relationalen Datenbanksysteme im Unternehmensumfeld. Peakboard verbindet sich direkt mit einer Oracle-Instanz, führt ein beliebiges SQL-Statement aus und stellt das Ergebnis als Tabelle bereit, die du an Controls binden oder per Dataflow weiterverarbeiten kannst. Weitere Informationen findest du unter [oracle.com/database](https://www.oracle.com/database/).

## Datenquelle hinzufügen

Um die Oracle-Datenquelle anzubinden, öffnest du in der Explorer-Spalte unter [Daten] den Dialog [Datenquelle hinzufügen]. In der Kategorie [Database & SAP] (1) wählst du die Kachel [Oracle] (2) per Doppelklick aus.

![Oracle Datenquelle hinzufügen](/assets/images/data-sources/oracle/oracle-01-add-datasource.png)

## Verbindung konfigurieren

Im Konfigurationsdialog [Add Oracle data] vergibst du im Bereich [General] zunächst einen Namen (1) für die Datenquelle. Über diesen Namen referenzierst du die Daten später in Controls, Dataflows und Scripts.

Im Bereich [Connection] stehen dir zwei Modi (2) zur Verfügung:

* **Default** – verwendet die klassischen Oracle-Zugangsdaten in einzelnen Feldern.
* **Custom** – akzeptiert einen vollständigen Oracle-Connection-String, wenn du Sonderoptionen brauchst.

Im Modus [Default] (3) trägst du die Zugangsdaten zur Oracle-Instanz ein:

* **Hostname / IP** – Adresse des Oracle-Servers, entweder als Hostname oder als IP-Adresse.
* **Port** – Netzwerkport, auf dem die Oracle-Instanz erreichbar ist (Standard: `1521`).
* **SID** – Oracle System Identifier der Zielinstanz.
* **Username** / **Password** – Anmeldedaten für den Datenbankzugriff.

Im Editor [Statement] (4) hinterlegst du das gewünschte SQL-Statement. Das Statement muss eine tabellarische Ergebnismenge zurückliefern, damit Peakboard die Spalten als Datenstruktur erkennt. Komplexe Auswertungen legst du am besten als View in der Oracle-Datenbank an und liest die View über ein einfaches `SELECT * FROM …` aus.

Mit einem Klick auf [Load data] (5) führt Peakboard das Statement aus und zeigt eine Vorschau der ersten Zeilen im Bereich [Preview] an. So überprüfst du sofort, ob Verbindung und Statement korrekt arbeiten.

![Oracle Verbindung im Default-Modus](/assets/images/data-sources/oracle/oracle-02-default-tab.png)

## Custom Connection String

Reichen die Felder im Modus [Default] nicht aus – zum Beispiel weil du mehrere Hosts (RAC), eine TNS-Beschreibung oder einen Service Name statt einer SID nutzen möchtest –, wechselst du auf den Tab [Custom] (1). Im Feld [Custom connection string] (2) hinterlegst du einen vollständigen Oracle-Connection-String. Die unterstützten Schlüssel und Beispiele findest du in der Oracle-Dokumentation.

![Oracle Custom Connection String](/assets/images/data-sources/oracle/oracle-03-custom-tab.png)

Mit einem Klick auf [OK] legst du die Datenquelle an. Sie erscheint anschließend im Explorer unter [Daten] und lässt sich wie jede andere Datenquelle an Controls binden oder per Dataflow weiterverarbeiten. Beachte, dass Oracle-Datentypen in die drei generischen Peakboard-Datentypen `String`, `Number` und `Boolean` überführt werden.
