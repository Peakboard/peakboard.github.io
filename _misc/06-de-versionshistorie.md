---
layout: article
title: Versionshistorie
menu_title: Versionshistorie
description: Versionshistorie
lang: de
ref: misc-06
---

## 1.0.28.22 (19.10.2018)

* Ein Bug bei dem Bridge-Resource nicht mehr geladen wurden, wenn die Datei geöffnet war, wurde behoben

## 1.0.28.15 (14.10.2018)

* Der Hintergrund für den Titel des Tabellen-Elements hat jetzt die korrekte Farbe

## 1.0.28.9 (11.10.2018)

* Hotfix für einen Fehler, bei dem Charts aus einer Excel-Bridge-Resource nicht geladen wurden
* Ein Bug im Seitenwechsel des neuen PDF-Reader wurde behoben.

## 1.0.28.5 (09.10.2018)

* Fix für die Buttons beim Hinzufügen von IPs/ Domains zu OPC UA Zertifikaten
* Fix für Validierung von OPC UA Namespaces

## 1.0.28.4 (27.09.2018)

* Fix für einen Absturz beim Laden bestimmter Visualisierungen

## 1.0.28.1 (25.09.2018)

* Hotfix für das editieren statischer Listen

## 1.0.28.0 (24.09.2018)

* Http Put Funktion für Lua zugefügt
* Stabilität der Peakboard Bridge für Dateien wurde verbessert
* Fixes für Time Datasource
* Fixes für Bridge Log
* Fixes für Dataflows
* Fix für SAP Nummer Spalten

## 1.0.27.27 (20.09.2018)

* Die Standardsprache für die Spracherkennung wurde angepasst.
* Ein Fehler in der Rückwärtskompatibilität der Spracherkennung wurde behoben

## 1.0.27.17 (18.09.2018)

* Fix für ein Problem, bei dem die Spracherkennung beim Deployment erst nach einem Neustart der Box startete
* Fix eines Fehlers, welcher bei der Installation der Runtime auf Windows Server 2016 auftrat

## 1.0.27.10 (14.09.2018)

* Hotfix für PDF Control

## 1.0.27.0 (11.09.2018)

* Proxy-Authentifizierung hinzugefügt
* PDF Viewer kann jetzt interaktiv auf einem Touchscreen verwendet werden
* Webbrowser unterstützt jetzt PDF-Dateien
* Globales Voice Event hinzugefügt
* Optimierung für Titelabstand
* Optimierungen für die OPC UA Datenquelle
* Optimierungen und Korrekturen für Dataflows
* Bridge Standard Log Level wurde geändert
* Weitere Sprachen für Zeitdatenquellen hinzugefügt
* Fix für Titel-/ Untertitel Binding

## 1.0.26.9 (07.09.2018)

* Hotfix für die JSON-Datenquelle

## 1.0.26.2 (28.08.2018)

* Ausgelieferte Templates wurden aktuallisiert
* Background Templates wurden entfernt
* Dataflows von beta released
* Union wurden Dataflows hinzugefügt
* CSV Trennzeichen kann nun \t für Tab sein
* Preview Panel kann jetzt durch Drücken von Strg + p deaktiviert werden
* Fix für Absturz des Designers beim Öffnen falscher Dateien
* Fix für das Laden von SAP Vorschaudaten im Designer

## 1.0.25.1 (22.08.2018)

* Hotfix für Rectangle Controls beim Update von 1.0.24.5

## 1.0.25.0 (21.08.2018)

* Dataflows hinzugefügt
* Schatten, Titel und Untertitel zu den Controls hinzugefügt
* Neues Retro Flipper Control
* UI Rework für einige Dialoge
* Azure SQL wurde durch SQL Server-Datenquelle ersetzt
* Fix für Siemens S7 Datenquelle mit Einzelbit
* Fix für Siemens S7 Dialog
* Fix for Error messages Dialog
* Fix für manche 4k Displays
* Fixes für Lua Datum Snippets

## 1.0.24.5 (06.08.2018)

* Hotfix für die Feed-Datenquelle

## 1.0.24.1 (01.08.2018)

* Unterstützung für 64 Bit Boxen
* Spracherkennung
* Video Control hinzugefügt
* Änderungen für GUIs in Dialogen
* Rectangle Control wurde überarbeitet
* Neue Lua Snippets hinzugefügt
* Überarbeiteter Save As Dialog
* SAP Reports können Batches verwenden
* Icons für Drop Down Menü und Package Explorer hinzugefügt
* Getrennte Dialoge für Einzel- und Tabellenvariablen
* Datentyp wird in Tabellen angezeigt
* Der Canvas kann nun mit der mittleren Maustaste bewegt werden
* Advanced Chart zu den Live Tiles hinzugefügt
* Screencount Property zu Lua hinzugefügt
* Logdateien können jetzt gelöscht werden
* Überarbeitete Fehlerdialoge
* Colorpicker Farben sind jetzt nicht mehr alphabetisch sortiert
* Datei Menü überarbeitet
* Lua shownextscreen Funktion heißt jetzt showscreen
* Show Previous Screen Funktion wurde zu Lua hinzugefügt
* Zeitdatenquelle kann direkt auf das Lua-Datum formatiert werden
* Timer sind nun per default auf endlos
* Lua Datumsfunktionen wie Format oder Tag hinzugefügt
* Fixierungen von Controls können nun durch Anklicken des Pins gelöst werden
* Shorkeys zum Öffnen, Speichern, Öffnen und Anzeigen der Vorschau hinzugefügt
* Funktion hinzugefügt beim Doppelklick auf Formatoptionen
* Dialog für Series des Advanced Charts hinzugefügt
* Fix für das Formatieren von neu hinzugefügten Zeilen
* Fix für das Zoomen des Canvas
* Fix für erstes Refresh Event von Variablen und Listen
* Fix für Linear Gauge Fonts
* Fix für Timeline Grid Control
* Fix für Table Grid Controls ohne Zeilen und Header
* Fix für Table Grid Controls beim Ändern der Quelle
* Fix für Layout Icons
* Fix für Log-Dateien
* Fix für die Aktualisierung von globalen Lua-Scripten
* Fix für das Löschen des Activation Scripts
* Fix für das Umbenennen von Timer Scripts
* Fix für Power BI Tile Control

## 1.0.23.10 (13.07.2018)

* Fix für SAP im Preview
* Fix für Ressourcen mit Authentifizierung

## 1.0.23.3 (09.07.2018)

* Peakboard Designer-Dialoge optimiert
* Designer unterstützt jetzt 64bit Architekturen
* Bildschirme können jetzt kopiert und in andere Pakete eingefügt werden
* Ressourcen können jetzt kopiert und in andere Pakete eingefügt werden
* Neue Series im advanced Chart Control
* Neue Eigenschaften im advanced Chart Control
* abas-Authentifizierung
* Lua Sort Funktionen
* Lua Count Disctinct Funktion
* XQL Reports unterstützen UseBatch
* Fix für einen Bug, dass einige Schriftarten nicht akzeptiert wurden
* Fix für Excel Chart Control in der Datenauswahl 
* Fix in der Slack-Datenquelle
* Fix dass der Titel der Vorlagen nicht angezeigt wurde

## 1.0.22.0 (18.06.2018)

* Überarbeitete Datenquellendialoge
* Updates für advanced Chart Control
* XtractQL Updates für Reports
* Geänderte Standardschriftarten
* Fix für variable Listen Dialog 
* Fix für das  duplizieren von Peakboard IO Tabellen
* Fix für Xaml-Validierung in der Listview
* Fix für Json-Datendialog
* Fix für ungültigen Lizenz-Fehler
* Fix für Datenquellennamen
* Fix für Fehler beim Hinzufügen einer Spalte zu einer Lua-Script-Tabelle
* Fix für CSV-Datenquellenspalten

## 1.0.21.2 (13.06.2018)

* Fix für Datenquellennamen

## 1.0.21.1 (12.06.2018)

* Slack-Datenquelle hinzugefügt
* Microsoft Kalender Datenquelle hinzugefügt
* Advanced Chart Control hinzugefügt
* Vorlagen von Git werden zum Setup hinzugefügt
* Json-Datenquelle unterstützt Hierarchien
* Optimierung der S7-Leistung
* Änderungen für den S7-Datendialog
* Tabellenspalten-Dialog überarbeitet
* Gauge-Standardeinstellungen optimiert
* XAML Code Control unterstützt erweiterte Charts
* Fehlerbehandlung für Datenquellendialoge optimiert
* Aktualisierte Designer Datenbindung
* Instagram-Datenquelle mit Namen wird nicht mehr unterstützt
* Datasource column names allowing all unicode letters now
* Fix für Toggle Switch-Control, das im Designer anders aussah als in der Runtime
* Fix für KeyInput-Event
* Fix für Absturz der Laufzeit, wenn Text des Textfeldes auf null gesetzt wird

## 1.0.20.9 (30.04.2018)

* Scroll- und Zoom Eigenschaft wurde dem Webview Control zugefügt
* Lua Runtime Eigenschaft Screen Scale wurde hinzugefügt
* Fix für S7 benutzerdefinierte Variablen

## 1.0.20.6 (24.04.2018)

* Das manuelle Update wurde umgebaut und erlaubt nun auch das Updaten mehrerer Boxen
* Timer Scripte können nun deaktiviert werden
* Fix für die Formatierung einer einzeiligen Tabelle

## 1.0.19.7 (17.04.2018)

* OPC UA Datenquelle ermöglicht den Zugriff auf Event Methoden
* Peakbord IO Portal Benutzer kann nun mit Peakboard-Boxen gekoppelt werden
* Script Performance Updates
* Siemens S7:
  * Verbindungsstabilität verbessert
  * Alle primitiven Datentypen aller PLCs werden nun unterstützt
  * Data Validator wurde dem Designer hinzugefügt
  * Variablen können nun in Gruppen verwaltet werden (Strukturen)
* Timer Scripte sind nun global
* Controls können animiert werden
* Screen Animation hinzugefügt
* Paketverschlüsselung wurde optimiert
* Peakboard Bridge läuft nun auf .NET Version 4.6 anstelle von 4.5
* Fix für das Hinzufügen neuer Controls über existierende
* Fix für Programmabsturz bei Web Controls wenn C++ Bibliotheken nicht installiert sind
* Fix dass ein neues Paket nicht mehr modified startet
* Fix für Toggle Switch Control, dass dieses nicht initial ein Event triggert
* Fix für das Validieren neu angelegter Scripte
* Fix für Ressourcen die in den Screens angezeigt werden
* Fix für das Aufrufen von LUA Funktionen wenn diese klein geschrieben sind
* Fix für das hinzufügen eines Screens ohne Titel
* Fix für SAP Datenquelle, die einen Thread Fehler anzeigte


## 1.0.18.0 (06.03.2018)

* Screen Titel ist nun verpflichtend
* Erweiterungen bei der OPC UA Datenquelle
* Neue Icons
* Fix für das Logging der Bridge
* Fix für das Logging der Runtime
* Fix für Box Properties
* Fix für die Mail Datenquelle
* Fix für die Script Validierung

## 1.0.17.0 (16.02.2018)

* Fix beim Öffnen einer pbmx Datei, für den Zugriff auf Templates und globale Scripte
* Fix für den Select File Dialog

## 1.0.16.0 (13.02.2018)

* Excel Datenquelle unterstützt nun .xlsm Dateien
* Das Fehlerhandling von Webtabellen und Webviews wurde optimiert
* Fix für das Kopieren von Controls mit nicht existenten Schriftarten
* Fixes für Peakboard IO Tabellen

## 1.0.15.0 (09.02.2018)

* Verbesserungen für die Peakboard-Bridge
* Verbesserungen für die OPC UA Datenquelle
* Ribon Bar Icons wurden ersetzt

## 1.0.14.4 (02.02.2018)

* Verbesserungen für die Peakboard-Bridge

## 1.0.13.4 (30.01.2018)

* Fix für Twitter/ Instagram mit Bilder

## 1.0.13.0 (30.01.2018)

* OPC UA unterstützt nun Methodenaufrufe
* Peakboard-Bridge Stabilität Optimierungen

## 1.0.12.9 (22.01.2018)

* Interne Änderungen ohne Auswirkungen

## 1.0.12.0 (19.01.2018)

* Peakboard IO Pages veröffentlicht
* OPC UA unterstützt Zertifikate
* OPC UA Erweiterungen
* Top und Left Einstellungen im Property Panel
* Screen-Reihenfolge änderbar
* S7 unterstützt nun String-Variablen
* Textticker Fixes und Erweiterungen

## 1.0.11.6 (16.01.2018)

* OPC UA Datenquelle wurde erweitert

## 1.0.10.0 (12.01.2018)

* Erste Version des Peakboard IO Portals veröffentlicht
* IMAP Mail Datenquelle wurde hinzugefügt
* Control Icons wurden überarbeitet
* CSV Datenquelle kann nun Daten über die Bridge beziehen
* CSV Datenquelle kann nun definierbare Trennzeichen verwenden
* Neue Textformatierung für Prozentangaben
* Bridge Stabilität verbessert
* Fixes für Lua Json Parsing
* Fix für Table Grid Spalten mit Sonderzeichen
* Fix für SAP Query Abfragen ohne Rückgabewerte
* Fixes für S7 Datenquelle

## 1.0.9.0 (22.12.2017)

* Neues Control: Live Tiles
* Erste Preview Version für die OPC UA Datenquelle
* XML Daten können nun aus dem Netzwerk bezogen werden
* Über Strg + L kann in der Runtime das aktuelle Log angezeigt werden
* Fixes für Map Control, Image Control, Websnippet Control, Animierte Gifs

## 1.0.8.17 (15.12.2017)

* Fix für das Ändern von Schriftarten über einen Lua-Script

## 1.0.8.7 (27.11.2017)
* Fix für lokale PDF Dateien

## 1.0.8.4 (23.11.2017)

* Globales Event Key Down wurde hinzugefügt
* Globales Event Key Input wurde hinzugefügt
* Fix Änderungen in Ressourcen während der Laufzeit

## 1.0.8.0 (23.11.2017)

* Excel Chart Control
* Web Resourcen wurden hinzugefügt
* Bridge Ressourcen wurden hinzugefügt
* Performance Verbesserungen für Lua Scripte
* SAP Message-Server werden nun unterstützt
* Lua Snippets wurden um Waiting Screen erweitert
* SAP über Bridge wird nicht mehr unterstützt

## 1.0.7.3 (08.11.2017)

* Zwei neue Templates wurden hinzugefügt
* Fix für tablejoin Lua Funktionen
* Fix für math.tonumber() und string.tostring() Lua Funktionen

## 1.0.7.0 (06.11.2017)

* Grundsätzliche Änderungen für die Lizenzierung
* Fenster werden abhängig von der Bildschirmgröße geöffnet
* Tabellen Performance Verbesserungen
* Tabellenspalten-Änderungen lassen sich nun zurücksetzen
* Fix für das Ändern des Passworts einer Box vom Designer

## 1.0.6.5 (26.10.2017)

* Settings- und Variablendialoge wurden überarbeitet
* Fixes für Gauges bei gleichem Maximal, Minimal und aktuellem Wert
* Fixes für Intellisense

## 1.0.6.3 (19.10.2017)

* Insert Kategorie wurde im Menüband hinzugefügt
* Peakboard Bridge Datenqullen lassen sich über Lua reloaden
* Einfügeassistent für Bilder
* Syntaxeditor wurde überarbeitet
* Neue Codesnippets wurden hinzugefügt
* Fix für Max, Min und Sum Function

## 1.0.5.0 (06.10.2017)

* Es können Pop-Up Benachrichtigungen angezeigt werden
* Überarbeitung der Fehleranzeige im Preview
* Neue Templates wurden hinzugefügt
* Lua Objekte und Funktionen lassen sich nun in Kleinschrift aufrufen
* Scriptvorschläge sind nun alle kleingeschrieben
* Änderungen von IP Adressen von Peakboard Boxen werden automatisch aktualisiert
* Fix für Excel mit sprachenabhängigen Kommazahlen
* Fixes für Script Validierung und Script Editor

## 1.0.4.0 (29.09.2017)

* Der Template Dialog wurde in Kategorien unterteilt
* Abfragen in Excel Datenquellen bieten nun die Möglichkeit Bereiche zu definieren
* Excel Dateien können nun als Ressource angelegt werden
* Ein Wartebalken kann nun über Lua eingeblendet werden
* Die Schriftart im Scripteditor wurde geändert
* Doppelklick auf einen Button öffnet nun den Scripteditor
* Datenänderungen die Änderungen in Controls nach sich ziehen kann nun deaktiviert werden
* Weitere Templates wurden hinzugefügt
* Dropbox API V.1 Verwendung durch V.2 ersetzt
* Fix für Globale Lua Funktionen
* Fix für den Validator in Globalen Lua Scripten

## 1.0.3.1 (22.09.2017)

* Script Editor Dialog wurde überarbeitet
* Versionshistorie wurde im Aboutdialog verlinkt

## 1.0.3.0 (22.09.2017)

* Der Lua Script Editor wurde überarbeitet
* Spracheingabe wurde hinzugefügt (beta)
* Bridge Datenquelle Fehlerhandling wurde optimiert
* Bridge Datenquelle erlaubt nun dynamische Aufrufe
* Einige Dialoge von Datenquellen wurden überarbeitet
* Scripte in Ressourcen-Dateien können nun direkt vom Scripteditor aufgerufen werden
* Fix für Feed Datenquelle
* Fixes für Excel Datenquelle
* Fix für Bindings von Listen

## 1.0.2.1 (14.09.2017)

* Fix für Webpage Table Datenquelle ohne Authentifizierung

## 1.0.2.0 (05.09.2017)

* Peakboard kann nun Sprachbefehle über ein Mikrofon aufnehmen
* Peakboard kann nun Daten an eine S7 Steuerung senden
* Neue Templates wurden hinzugefügt und die vorhandenen Templates überarbeitet
* Werte von Variablen können nun auf der Box langfristig gespeichert werden
* Globale Properties für Boxen wurden hinzugefügt
* Globale Properties für Boards wurden hinzugefügt
* Einige Icons der GUI wurden überarbeitet
* Werte von Gauges können nun ausgeblendet werden
* Unnötige Einstellungen in den Gauges wurden entfernt
* Nummern werden nun unabhängig der Sprache des Betriebssystems dargestellt
* Scripte können nun direkt über die rechte Maustaste auf Resources hinzugefügt werden
* Variablen heißen nun „Variables“ und nicht mehr „General Data“
* Überarbeitung einiger Dialoge
* .NET Core Runtime V1.0 wurde auf V1.1 erhöht

## 1.0.1.2 (21.08.2017)

* Siemens S7 Datenquelle
* Send Mail Funktion für LUA um Emails zu versenden
* Drag and Drop um Datenquellen und Resourcen in Ordner zu verschieben
* Reaktivierung der Screen IsEnabled Property
* Löschen der Expand Collase Ordner Funktionen
* ODBC Datenbanken lassen sich nun mit Hilfe der Peakboard Bridge anbinden
* Fix für das Löschen leerer Ordner
* Fix für SQLSever mit leeren Spaltennamen
* Fix für erstellen neuer Pakete ohne Admin Rechte

## 1.0.0.486 (31.07.2017)

* Fix für die SQL Datenquelle bei double Werten
* Fix damit ein neues Steuerelement sofort an vorderster Position zu sehen ist
* Fix bei der Erkennung, ob sich in der Visualisierung etwas geändert hat

## 1.0.0.483 (28.07.2017)

* Fixe Tabellenspalten können nur noch mit validen Namen bezeichnet werden
* Fix für Probleme beim Verbindungsabbruch, während dem veröffentlichen eines Peakboards

## 1.0.0.482 (25.07.2017)

* Fix für das Selektionsfeld bei fixierten Elementen

## 1.0.0.481 (24.07.2017)

* Im Peakboard Designer können nun Elemente fixiert und damit unveränderbar gemacht werden
* Es können nun statische Tabellen die initial leer sind angelegt werden
* Für das Laden von Bildern aus einer URL kann nun eine Authentifizierung übergeben werden
* PDF Daten können nun von einer URL geladen werden
* Änderungen der Icons im Bereich Control Layout
* Das Selektionsfeld wurde umgestaltet
* Screens können nicht mehr deaktiviert werden

## 1.0.0.475 (21.07.2017)

* Neue Interaktive Steuerelemente (Date Picker, Time Picker)
* Es lässt sich nun ein Pop-Up-Dialog über Lua Script aufrufen
* Nach einem Http Push feuert die Datenquelle nun ein Refreshed-Event
* Über Lua kann nun mit RemoveAt ein Element an einem definierten Index entfernt werden
* Fix bei den Größen und Positionen beim Anzeigen von Fenstern im Peakboard Designer
* Änderungen der Icons einiger Steuerelemente

## 1.0.0.469 (18.07.2017)

* Neue Interaktive Steuerelemente (Flat Button, Repeat Button, Toggle Button, Toggle Switch, Check Box, Radio Button, Combo Box, Slider)
* Es lässt sich nun eine Basic Authentifizierung direkt im Lua Script generieren
* Fix für Zeit-Datenquelle mit internen NTP Servern
* Fix für die Authentifizierung bei der CSV und JSon Datenquelle
