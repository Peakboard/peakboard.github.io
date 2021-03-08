---
layout: article
title: Versionshistorie
menu_title: Versionshistorie
description: Versionshistorie
lang: de
weight: 1
ref: misc-1
redirect_from:
  - /misc/06-de-versionshistorie.html
footer: 2.8.0.0 (08.03.2021)
---
  
## 2.8.0.0 (08.03.2021) [Download](https://peakboard.com/peakboard-designer/) 
* Stabilitätsanpassung für die Peakbaord Runtime-Überwachung
* Stabilitätsanpassung für den Peakbaord Management Service
* Schritt im Dataflow hinzugefügt, der es erlaubt mehrere Datentypen auf einmal zu ändern
* User-Agent für Web Widget-Control und Webseiten-Control hinzugefügt
* Die OAuth2 Authentifizierung erlaubt nun einen Implicit Grant Type
* Möglichkeit hinzugefügt über eine geteilte MQTT-Datenquelle zu puplizieren
* Variabeln/Listen erlauben nun die Verwendung von Unicode-Zeichen
* Das PowerBi-Control kann nun im SharePoint freigegebene Dashboards verwenden
* Fix für einen Fehler, bei dem es möglich war eine aktualle Peakboard Box endlos zu aktualisieren
* Fix für einen Fehler, bei dem bei 4:3 Auflösungen die Skalierung nicht richtig durchgeführt wurde
* Fix für einen Fehler, bei dem mehrfache Verbindungen zu einem MQTT-Broker aufgebaut wurden
* Fix für einen Fehler, bei dem die Skript Funktion **.addmonth()** nicht korrekt ausgeführt wurde
* Fix für einen Fehler, bei dem die OAuth2 Authentifizierung für den Type Grant die Email-Authentifizierung nicht akzeptierte
* Fix für einen Fehler, bei dem die Authentifizierung in der OData-Datenquelle nicht funktionierte
* Fix für einen Fehler, bei dem CSV-Daten nicht mehr von URL oder lokalen Netzwerk geladen werden konnten
* Fix für einen Fehler, bei dem ein Circular Gauge-Diagram in einem TileView zu einem Absturz der Preview oder Peakboard Box geführt hat
* Fix für einen Fehler, bei dem die Peakboard Hub und Peakboard Datenquelle nicht in einem Dataflow genutzt werden konnte
* Fix für einen Fehler, bei dem Unicode-Zeichen innerhalb der Excel-Datenquelle nicht akzeptiert wurden
* Fix für einen Fehler, bei dem ein Bild-Control innerhalb eines Tile-Controls zum Absturz des Peakboard Designers geführt hat
* Fix für einen Fehler, bei dem das Neuladen einer Excel-Datenquelle die Datentypeinstellungen zurückgesetzt hat

## 2.7.0.0 (09.02.2021) [Download](https://theobaldsoftware.sharepoint.com/:f:/s/peakboardpublic/EoZnpEzOy4FInIVk-lDFuVgBrcMTaidBnaHa-UJhcQ2J_w?e=vwbWpU) 
* Peakboard Hub List als Datenquelle für [Peakboard Hub](https://peakboard.com/produkt/peakboard-hub/) hinzugefügt
* Rework für die MQTT Datenquelle
* Rework für interaktive [Controls]
* Datenquellen UI Rework 
* Rework für die Kommunikation zwischen Peakboard Designer und Peakboard Box
* Rework für das [User Management] auf der Peakboard Box

* Rework für die SharePointList-Datenquelle
* Publish-Funktion für MQTT Datenquellen zum Scripteditor hinzugefügt
* Variablen als Vergleichsoperator für bedingte Formatierung hinzugefügt
* Empty States für alle Elemente überarbeitet
* Rechtsklick Optionen wie Kopieren, Einfügen, Löschen,... für bedingte Formatierung hinzugefügt
* QR Code Controls können direkt mit einer Datenquelle verknüpft werden
* [Remove Columns] Dialog für Dataflows überarbeitet und Funktionen für [Select All] und [Deselect All] hinzugefügt
* Fix für einen Fehler, bei dem die [selectvalue]-Funktion eines DropDown-Controls nicht korrekt funktionierte
* Fix für einen Fehler, bei dem die Eigenschaft [Max Rows] für die Peakboard Datenquelle ohne Funktion war
* Fix für einen Fehler, bei dem es nicht möglich war, Datein unter [Ressources] in einen Ordner zu verschieben
* Fix für einen Fehler, bei dem die Limitierung auf 50 Preview Datensätze bei der SQL-Datenquelle ohne Funktion war
* Fix für einen Fehler, bei dem eine einzelne Variable aus einer Peakboard Datenquelle nicht in einem Skript verwendet werden konnte
* Fix für einen Fehler, bei dem die Funktionen [Group] und [Hide] in einem Tile-Control nicht genutzt werden konnten
* Fix für einen Fehler, bei dem das Textticker-Control nach einer bestimmten Länge nicht mehr ausgeführt wurde
* Fix für einen Fehler, bei dem das Aufräumen der Ressourcen auf der Peakboard Box nicht korrekt ausgeführt wurde
* Fix für einen Fehler, bei dem das Ändern der Rahmengröße per bedingter Formatierung dazu führte, dass der Rahmen verschwand
* Fix für einen Fehler, bei dem die [Shared Connection] für eine OneDrive-Datenquelle nicht genutzt werden konnte
* Fix für einen Fehler, bei dem das Anlegen einer [Ressource] mit einer [Shared Connection] dazu führte, dass die [Ressource] zweimal hinzugefügt wurde
* Fix für einen Fehler, bei dem das Ändern der Ausrichtung eines ListView-Controls zu einem schweren Fehler führte
* Fix für einen Fehler, bei dem der [Save]-Button für Skripte ohne Funktion war 
* Fix für einen Fehler, bei dem das Duplizieren einer Datenquelle mit einem Refresh-Skript dazu führte, dass das Skript nicht ordentlich kopiert wurde
* Fix für einen Fehler, bei dem das GoogleDocs-Control einen Fehler in der Lua Intellisense verursacht hat
* Fix für einen Fehler, bei dem die Log-Dateien auf der Peakboard Box nicht korrekt sortiert wurden
* Fix für einen Fehler, bei dem die Preview auf einem anderen Monitor ausgeführt wurde als der Peakboard Designer

  
## 2.6.2.0 (17.12.2020) [Download](https://theobaldsoftware.sharepoint.com/:f:/s/peakboardpublic/Ejzogw8wAfFIkKfyq_iKMMEB1CM2pSuQXSpg9MKHOHfNjQ?e=oW3wim)
* Hotfix für einen Fehler in der XML-Datenquelle, bei dem die Daten nicht geladen wurden
* Hotfix für einen Fehler, bei dem das Ändern der JSON, XML, CSV Header nicht übernommen wurde

## 2.6.1.0 (30.11.2020)
* Hotfix für die Runtime-Überwachung

## 2.6.0.0 (23.11.2020)
* Informationsgrafiken hinzugefügt
* Rework für Web-Datenquellen (CSV, XML, JSON)
* Ladebalken für das Web-Control hinzugefügt
* Dataflow-Schritt Aggregation überarbeitet
* Funktion zum Überschreiben von Listen hinzugefügt
* Informationsmeldung für Dataflows hinzugefügt, wenn keine Daten geladen werden konnten
* Limit für Preview-Daten der SAP-Datenquelle erhöht
* Vorschau der Datentypen im Daten-laden-Dialog hinzugefügt
* Fix für einen Fehler, bei dem Excel-Daten nicht aus allen Bereichen einer Excel Datei geladen werden konnten
* Fix für einen Fehler, bei dem das Bearbeiten von Custom Variablen in der S7 Datenquelle nicht mehr möglich war
* Fix für einen Fehler, bei dem das Deaktivieren von Datenquellen zu einem kritischen Fehler geführt hat
* Fix für einen Fehler, bei der Pfaddefinition einer JSON-Datenquelle
* Fix für einen Fehler, bei dem die automatische IP-Zuweisung nicht funktioniert hat
* Fix für eine fehlerhafte Benennung in den Peakboard Log-Dateien
* Fix für einen Fehler, bei dem das Speichern einer SAP-Datenquelle nicht möglich war
* Fix für einen Fehler im Timeline-Grid
* Fix für einen Fehler, bei dem das Ausführen bedingter Formatierungen zum Absturz geführt hat
* Fix für einen Fehler, bei dem kein User für eine Excel Datenquelle benötigt wurde
* Fix für einen Fehler, bei dem das Web-Widget auf der Zeichenfläche nicht angezeigt wurde
* Fix für einen Fehler, bei dem die XQL Statements für die SAP-Datenquelle fehlerhafte Werte zurückgegeben haben

## 2.5.2.0 (26.10.2020)[Download](https://theobaldsoftware.sharepoint.com/:f:/s/peakboardpublic/Eq7oFzyBV1BBvKCc5yvk0rQBnpL3-11nML-P2XrKp63W7g?e=Klr4Wn)
* Hotfix für einen Fehler, bei dem das Beschreiben von Listenvariablen nicht mehr möglich war

## 2.5.1.0 (23.10.2020)
* Hotfix für einen Fehler, bei dem die SAP-Datenquelle nach einem Fehler, leer geöffnet wurde

## 2.5.0.0 (20.10.2020) 
* Peakboard UWP Preview, sowie Updates für Peakboard 1 Boxen entfernt
* Peakboard Bridge aus dem Updateprozess entfernt
* Automatsichen Neustart bei Absturz der Peakboard 2 Box Anwendung hinzugefügt
* SharePoint-Datenquelle Berechtigungen reduziert
* Webseitentabellen Datenquelle überarbeitet
* CSV-Datenquelle überarbeitet
* Feed-Datenquelle überarbeitet
* Peakboard Edge, weitere Sounds hinzugefügt
* Peakboard Edge, Lautstärkeregelung für die Soundausgabe der Peakboard Edge Box im Peakboard Designer hinzugefügt
* Skript-Beispiele für JSON-Objekte im Peakboard Designer hinzugefügt
* Alphabetische Sortierung für die Auswahl von Datenquellen hinzugefügt
* Fix für einen Fehler, bei dem Controls zuviel Speicherplatz beansprucht haben
* Fix für einen Fehler, bei dem die initiale Standardvisualisierung nicht angezeigt wurde
* Fix für einen Fehler, bei der Verwendung von inaktiven Peakboard Extensions Datenquellen
* Fix für einen Fehler im Advanced Chart, bei dem keine neuen Daten angezeigt wurden
* Fix für einen Fehler im Refresh-Skript einer Variablen, bei dem ein Refresh-Skript nicht ausgeführt wurde, wenn die Variable per API-Call geschrieben wurde
* Fix für einen Fehler in der JSON-Datenquelle
* Fix für einen Fehler, bei dem die Peakboard 2 Box nach dem Wechsel der Screenausrichtung nicht neugestartet wurde
* Fix für einen Fehler, bei dem in einer Peakboard Edge Verbindung der Name über der IP Adresse priorisiert wurde
* Fix für einen Fehler, bei dem in einfachen Charts die Farbe nicht mehr geändert werden konnte
* Fix für einen Fehler, bei dem das Excel-Chart Control bestimmte Schriftarten nicht korrekt dargestellt hatte
* Fix für einen Fehler, bei dem in der bedingten Formatierung die Eigenschaften für ein Icon-Control nicht geändert werden konnten
* Fix für einen Fehler, bei dem die Schaltfläche "Save" die Anwendung geschlossen hatte
* Fix für einen Fehler, bei dem eine mit einem Passwort versehene Visualisierung nicht in der Preview geöffnet werden konnte
* Fix für einen Fehler, bei dem Event-Skripte in einem veralteten Editor geladen wurden
* Fix für einen Fehler, bei dem der Designer bei falscher Passworteingabe neu gestartet werden musste
* Fix für einen Fehler, bei dem das Webpage-Control nicht mit der Authentifizierung "none" genutzt werden konnte
* Fix für einen Fehler, bei dem die Deinstallation des Peakboard Designers nicht korrekt vollständig ausgeführt wurde

## 2.4.5.0 // 1.13.5.0 (01.10.2020) [Download](https://theobaldsoftware.sharepoint.com/:f:/s/peakboardpublic/Ev2WJvGLtwFLvz5nRtGX4KABmPad9KPzH7w9J37lCRFrZQ?e=ZurMnR)
* Hotfix für einen Fehler im SQL-Datenquellendialoge
* Hotfix für einen Fehler bei http-put-Requests

## 2.4.4.1 // 1.13.4.1 (30.09.2020)
* Hotfix für einen Fehler bei dem Dataflows für eine Excel-Datenquelle nicht mehr ausgeführt werden konnten

## 2.4.3.0 // 1.13.3.0 (29.09.2020)
* Hotfix für IPv6-Adressen handling

## 2.4.2.0 // 1.13.2.0 (28.09.2020)
* Hotfix für einen Fehler beim Öffnen der Siemens und Mitsubishi-Datenquelle

## 2.4.1.0 // 1.13.1.0 (25.09.2020)
* Hotfix für Peakboard Edge Management Dialog

## 2.4.0.2 // 1.13.0.2 (24.09.2020)
* Mitsubishi Datenquelle hinzugefügt
* Verbindungsverwaltung für Datenquellen mit Nutzeranmeldedaten hinzugefügt
* Deaktivierung von Datenquellen im Peakboard Designer hinzugefügt
* Lua-Skript für "ExecutNonQuerey"-Funktion bei ODBC und Oracle-Datenquellen hinzugefügt
* Beispiel Template für den Aufruf von SAP-Tabellen mit vielen Spalten hinzugefügt
* Option zur Auswahl einer Spalte für das DropDown-Control hinzugefügt
* Zusätzliche Eigenschaften zur Bedingten Formatierung hinzugefügt
* MQTT Publish-Funktion im Skript-Baum hinzugefügt
* Oracle Datenquellen Dialog überarbeitet
* SQL-Server Datenquellen Dialog überarbeitet
* ODBC Datenquellen Dialog überarbeitet
* Feed Datenquellen Dialog überarbeitet
* SAP Datenquellen Dialog überarbeitet
* Google Sheet Datenquellen Dialog überarbeitet
* SharePoint-Datenquellen Dialog überarbeitet
* Mail-Datenquellen Dialog überarbeitet
* Textticker-Control überarbeitet
* Icons im Box-Eigenschaften-Dialog überarbeitet
* Sortierung der Log-Dateien der Peakboard Boxen überarbeitet
* Das Reload-Intervall der JSON-Datenquelle kann nun auf >1 Sekunde gesetzt werden
* Die Gateway-Option wurde aus der SAP-Datenquelle entfernt
* Proxy-Authentifizierung aus dem Add Box Dialog entfernt
* Fix für einen Fehler, bei dem die Excel-Datenquelle bei der Verbindungsart "Sharepoint" Schreibrechte verlangt hat
* Fix für einen Fehler, bei dem keine eigene Schriftart für die Achsen eines Balkendiagramms vergeben werden konnte
* Fix für einen Fehler, bei dem das Datarowloaded-Event nicht korrekt ausgeführt wurde
* Fix für einen Fehler, bei dem die Proxy-Authentifizierung beim Hochladen einer Visualisierung nicht verwendet wurde
* Fix für einen Fehler, bei dem die Verbindung zwischen Box und Manage-Dialog nicht ordentlich getrennt wurde
* Fix für einen Fehler, bei dem einem Skript ein falscher Threat zugewiesen wurde
* Fix für einen Fehler, bei dem zu viel Speicher verbraucht wurde
* Fix für einen Fehler, bei dem in der Mail-Datenquelle die Ordner Eigenschaft ignoriert wurde
* Fix für einen Fehler, der beim Kopieren eines Elements mit eigner Schrift auftrat
* Fix für einen Fehler in der Peakboard-Datenquelle
* Fix für einen Fehler, bei dem mit der Peakboard Basic Box keine Variablen oder Dataflows genutzt werden konnten
* Fix für einen Fehler, bei dem die Reihenfolge der zuletzt geöffneten Visualisierungen nicht korrekt war
* Fix für einen Fehler, bei dem Diagramme mit fehlerhaften Farben und Schriftarten kopiert wurden
* Fix für die Handhabung eines Fatal-Errors
* Fix für einen Fehler, bei dem der Manage Dialog den DNS-Namen statt der IP-Adresse verwendet hat
* Fix für einen Fehler, bei dem die Skript-Funktion peakboard.restart() keine Funktion hatte
* Fix für einen Fehler, bei dem der Peakboard Designer abstürzte, wenn auf eine nicht verbundene Peakboard Edge Box zugegriffen wurde
* Fix für einen Fehler, bei dem das Umbenennen einer Datenquelle nicht für das zugehörige Refresh-Skript übernommen wurde
* Fix für einen Fehler, bei dem die X und Y-Achsen Bezeichnung eines Advanced Charts verloren ging
* Fix für einen Fehler, bei dem das Toggle-Button-Control nicht richtig verwendet werden konnte
* Fix für einen Fehler, bei dem Variablen nicht in einen Ordner verschoben werden konnten
* Fix für einen Fehler, bei dem globale Funktionen zwar kopiert aber nicht eingefügt werden konnten
* Fix für eine Fehler, bei dem die Autovervollständigung im Skript-Editor nicht korrekt funktionierte
* Fix für einen Übersetzungsfehler im Skript-Editor
* Fix für einen Fehler, der durch einen Button in einer Tile-Control verursacht wurde
* Fix für einen Fehler, bei dem leere Spalten in einer Excel-Datenquelle nicht korrekt verarbeitet wurden
* Fix für einen Fehler, beim Verwalten von Peakboard Edge Boxen
* Fix für einen Fehler, bei dem kein Sound mit einer Peakboard Edge Box abgespielt werden konnte
* Fix für einen Fehler, bei dem ein Event für einen Text-Control nicht ausgelöst wurde, wenn kein Hintergrund für das Control vergeben war
* Fix für einen Fehler, bei dem das Kopieren von Controls nicht dazu führte, dass diese in die korrekten Ebenen kopiert wurden
* Fix für einen Fehler, bei dem angelegte Variablen im Skript-Editor unter Daten zu finden waren und nicht unter Variablen
* Fix für einen Fehler, bei dem keine Datenquelle mit der Slider-Control verknüpft werden konnte
* Fix für eine Skript-Fehler bei der Verwendung eines Index für Peakboard Edge Boxen
* Fix für einen Fehler, bei der Verwendung eines Bild-Controls innerhalb eines ListView-Controls
* Fix für einen Fehler, bei dem ein Video nicht mit dem Video-Control angezeigt werden konnte
* Fix für einen Fehler, bei dem ein bereits geöffnetes Template nicht erneut geöffnet werden konnte
* Fix für einen Fehler, bei dem das TileView-Control zu viel Speicher benötigte
* Fix für einen Fehler, bei dem das Refresh-Skript für die Mail-Datenquelle nicht ausgeführt wurde
* Fix für einen Fehler, bei dem die Visibilty-Eigenschaft nicht im Skript für ein Linien-Control verwendet werden konnte
* Fix für einen Fehler, bei dem ein RSS-Feed nicht verwendet werden konnte, wenn er über keine Authentifizierung verfügt
* Fix für einen Fehler, bei dem der Skript-Validator Schlüsselwörter fehlinterpretierte, wenn sie Teil eines Wortes waren
* Fix für einen Fehler, bei dem die Mail-Datenquelle nicht geladen werden konnte, wenn keine E-Mail vorhanden war
* Fix für einen Fehler, bei dem die Load-Data-Funktion bei der Peakboard Extension-Datenquelle nicht richtig funktioniert hatte
* Fix für einen Fehler, der durch einen leerer OR-Block in einer bedingten Formatierung verursacht wurde
* Fix für einen Fehler, der durch den Dataflow-Schritt "switch Columns/Rows" verursacht wurde
* Fix für einen Fehler, bei dem Listenelemente mit der Peakboard API nicht mehr bearbeitet werden konnten
* Fix für einen Fehler, bei dem die Peakboard Boxen kurzeitig nicht erreichbar waren
* Fix für einen Fehler, bei dem der Name einer Peakbaord Box auch ohne speichern gespeichert wurde
* Fix für einen Fehler, bei dem Peakboard Boxen mehrfach hinzugefügt werden konnten
* Fix für einen Fehler, bei dem in der JSON-Datenquelle keine URL per Code definiert werden konnte
* Fix für einen Fehler, bei dem der Skript-Editor falsch skaliert dargestellt wurde
* Fix für einen Fehler, bei dem das Drücken der Enter-Taste zum Absturz der Preview geführt hatte
* Fix für einen Fehler, bei dem das Linien-Diagramm gegen Bearbeitung gesperrt wurde
* Fix für einen Fehler, bei dem die Transition eines Screens mit der Eigenschaft "none" nicht funktioniert hatte
* Fix für einen Fehler, bei der Farbauswahl von Advanced Charts

## 2.3.4.0 // 1.12.4.0 (19.08.2020) [Download](https://theobaldsoftware.sharepoint.com/:f:/s/peakboardpublic/EraALhDXk0lCifINoOfWVzUBpy6oBuxTOIWbFGoGyHpSXA?e=a1FFgj)
* Hotfix für einen Speicherfehler

## 2.3.3.1 // 1.12.3.1 (07.08.2020) 
* Hotfix für Fehler beim Öffnen und Schließen der S7 Datenquelle

## 2.3.2.0 // 1.12.2.0 (06.08.2020)
* Hotfix für einen Fehler in der CSV-Datenquelle bei dem die Spaltenbezeichnungen nicht korrekt erfasst wurden

## 2.3.1.0 // 1.12.1.0 (17.07.2020) 
* Hotfix für einen Fehler bei dem die Daten aus der SQL Datenquelle nicht geladen wurden
* Hotfix für einen Fehler im PowerBI-Control

## 2.3.0.2 // 1.12.0.2 (15.07.2020) 
* Peakboard Edge hinzugefügt
* Peakboard Edge als Datenquelle hinzugefügt
* Peakboard Datenquelle hinzugefügt
* Datenanbindung über das lokale Netzwerk für CSV, XML und JSON Datenquellen implementiert
* XML Datenquelle überarbeitet
* Unterstützung von Unicode-Zeichen für Excel-Datenquelle erweitert
* Icon Control überarbeitet und weitere Icons hinzugefügt
* Veraltete Slack-Datenquelle entfernt
* PlugIn-Plattform für die Unterstützung eigens entwickelter Datenquellen implementiert
* WLAN-Dialog für Peakboard 2 Boxen überarbeitet
* Fehlermeldung für veraltete Visualisierungen angepasst
* Upgrade Benachrichtigung beim Update von Peakboard 1 Boxen hinzugefügt
* Fix für einen Fehler bei dem das Passwort der Peakbaord 2 Box nicht korrekt geändert werden konnte
* Fix für Tile und TileView-Control
* Fix für den mehrfachen Zugriff auf lokale Ressourcen
* Fix für einen Fehler beim Auswählen einer Datenquelle für ein Control
* Fix für einen Fehler bei der gemeinsamen Verwendung eines Web-Widgets und Web-View Controls
* Fix für einen Fehler bei dem in der bedingten Formatierung die angelegeten Regeln verschwunden sind
* Fix für einen Fehler beim Abbruch des Updatevorgangs
* Fix für einen Fehler in der CSV-Datenquelle bei der die Option "Column Names in First Row" ignoriert wurde
* Fix für einen Fehler in der CSV-Datenquelle bei dem der Quelltyp "File" nicht unterstützt wurde
* Fix für einen Fehler in der JSON-Datenquelle bei dem die Option "Max Rows" ignoriert wurde
* Fix für einen Fehler bei dem Zeit-Datenquellen mit einem Dataflow bearbeitet werden konnten
* Fix für einen Fehler bei dem Bild-Dateien welche als lokale Ressource hinzugefügt wurden nicht korrekt angezeigt werden konnten
* Fix für einen Anzeigefehler im Gauge-Diagramme
* Fix für einen Fehler bei dem der Broadcast der Peakboard 2 Box nicht korrekt ausgeführt wurde
* Fix für einen Fehler bei dem das Textticker-Control und das DropDown-Control nicht korrekt ausgeführt wurden

## 2.2.4.2 // 1.11.4.2 (25.06.2020) [Download](https://theobaldsoftware.sharepoint.com/:f:/s/peakboardpublic/Ehr7t9IhmVdJiio__qmtMUIBP-W5NGPKml40HbMNCx9EDA?e=qFy3H7)
* Hotfix für die Verwendung lokaler Netzwerkressourcen
* Hotfix für einen Fehler in der Excel Datenquelle, bei dem die Verwendung lokaler Netzwerkdateien nicht korrekt funktionierte

## 2.2.3.0 // 1.11.3.0 (29.05.2020) 
* Hotfix für die JSON-Datenquelle

## 2.2.2.1// 1.11.2.1 (26.05.2020)
* Hotfix für einen Fehler bei dem die Lizenz nicht erkannt wurde
* Hotfix für einen Fehler bei dem das Ändern des Passworts einer Peakboard 2 Box zu einem Fehler führte

## 2.2.0.1 // 1.11.0.1 (12.05.2020)
* Peakboard Extension Kit zur Entwicklung eigener Datenquellen implementiert
* Die Peakboard 2 Preview wird nun standardmäßig als Preview verwendet
* Startseiten-Dialog im Designer überarbeitet
* Hinweis im Startseiten-Dialog sowie im Canvas des Peakboard Designer für die Verfügbarkeit einer neuen Peakboard Designer Version
* News-Sektion zum Startseiten-Dialog hinzugefügt
* Video-Sektion zum Startseiten-Dialog hinzugefügt
* Die Getting-Started-Visualisierung wird nun standardmäßig angezeigt, wenn keine andere Visualisierung aktiv ist
* Tile Controls: Über einen Rechtsklick auf das Control kann der Template Selector sowie die bedingte Formatierung aufgerufen werden
* JSON-Datenquelle überarbeitet
* CSV-Datenquelle überarbeitet
* XML-Datenquelle überarbeitet
* Excel-Datenquelle Markierung für die Auswahl des Datentyps hinzugefügt
* Geräteportal für Peakboard 2 Boxen entfernt
* Lizenzmodel um Peakboard Basic erweitert sowie für Professional und Enterprise überarbeitet
* SharePoint-Datenquelle Dokumente der Hauptseite sind nun verfügar
* Icons im Manage&Upload-Dialog aktualisiert
* Icons für die Bearbeitung der Schritte eines Dataflows aktualisiert
* Anzeigetext mehrerer Fehlermeldungen überarbeitet 
* Dataflows ermöglichen es tabelarische Datenquellen zu transponieren
* Dialog zur Datenanbindung für mehrere Controls überarbeitet
* Lua-Snippets für den Editor der List- oder TileViews hinzugefügt
* In der bedingten Formatierung kann nun auch der Rahmen, bei Controls mit Rahmen,  in Regeln verändert werden
* Fix für einen Fehler beim Kopieren der bedingten Formatieren innerhalb des Editors für List- oder TileViews
* Fix für einen Fehler beim Hinzufügen eines Textes an einen Button innerhalb des Editors für List-oder TileViews
* Fix für einen Fehler bei dem für eine einzelne Variable ein Dataflow angelegt werden konnte
* Fix für einen kritischen Fehler beim Ändern der Auflösung im Set Resolution Dialog
* Fix für einen Fehler im Dataflow bei dem die Manipulation der Daten im Designer nicht angezeigt wurde
* Fix für einen Fehler in der SQL-Datenquelle bei dem Null-Werte nicht korrekt verarbeitet wurden
* Fix für einen Fehler bei dem eine SQL-Datenbank temporär gesperrt war nachdem die Peakboard Box die Verbindung aufgrund eines Stromverlusts verloren hatte
* Fix für einen Fehler bei dem die IP von Peakboard 2 Boxen nicht im Designer gespeichert wurde
* Fix für einen Fehler bei dem ein gesperrtes Element auf der Zeichenfläche die Bearbeitung eines darunterliegenden Elements verhinderte
* Fix für einen Fehler bei dem die Peakboard 2 Preview nicht auf einem Windows 7 Gerät ausgeführt werden konnte

## 2.1.1.0 // 1.10.1.0 (03.04.2020) [Download](https://theobaldsoftware.sharepoint.com/:f:/s/peakboardpublic/Evp-kobC6_NCsm9EOQjZxcgBnqmFDJ2-doAIGrfKQIAaiQ?e=1nheWl)
* Fix für die Datenverknüpfung von Spalten, welche mit einer Zahl beginnen
* Fix für einen Fehler bei dem die Navigation per Tabulator-Taste beim Umbenennen von Spalten nicht funktioniert hat
* Datenverknüpfungsdialog für Tile, ListView, TileView und Live Tiles übernommen
* Kleinere Fehlerkorrekturen für den Datenverknüpfungsdialog

## 2.1.0.0 // 1.10.0.0 (23.03.2020)
* SharePoint OneDrive als neue Datenquelle hinzugefügt
* Bedingte Formatierung ersetzt weitestgehend den Regel-Editor
* Bedingte Formatierung für Elemente innerhalb einer ListView oder TileView
* Skript-Editor - Erweiterung der Skript-Editor Funktionen für Controls welche in einer TileView oder ListView angelegt wurden
* Der Datenquellen Index eines Tile-Controls kann mit Hilfe eines Skripts verändert werden
* Das ListView und TileView-Control sind nun scrollbar
* Dem ListView und TileView-Control wurden weitere interaktive Controls hinzugefügt
* Das Tile Control verfügt nun ebenfalls über einen Template-Selektor
* Skript-Editor - Funktion runtime.currentscreenname zur Steuerung von Screens anhand des Namens implementiert
* Oracle-Datenquelle für Peakboard 2 Boxen überarbeitet
* ODBC-Datenquelle für Peakboard 2 Boxen überarbeitet
* Video-Control - Zusätzliche Funktionen, wie Start, Stopp, Neustart und Stumm zur Steuerung per Skript hinzugefügt
* Format-Eigenschaft für Controls von Aussehen nach Allgemein verschoben
* Direkter Zugriff auf Domain-Dateien
* Das Passwortfeld wurde aus der S7-Datenquelle entfernt
* Die JSON-Datenquelle unterstützt nun skalare Werte
* Fehlermeldung für falsch selektierte JSON-Objekte angepasst
* Fußzeilennotifikation für Elemente hinzugefügt, welche eine Peakboard 2 Box benötigen
* Anpassung des Icons für den Schriftarten-Editor
* Fix für einen Fehler bei dem die Version der Peakboard-Box als nicht aktuell angezeigt wurde, obwohl es sich um die aktuelle Version handelt
* Fix für die Datentypenerkennung bei der OData-Datenquelle
* Fix für die Datentypenerkennung bei der S7-Datenquelle
* Fix für die "use full path" Option der JSON-Datenquelle 
* Fix für die Gauge-Diagramme, wenn diese in einer ListView eingebunden sind
* Fix für das Wechseln von PDFs über das Netzwerk (PB2) 
* Fix für das Wechseln von PDFs über die Bridge (PB1)
* Fix für einen Fehler bei dem das falsche Skript markiert wurde und nicht das zu bearbeitende
* Fix für einen Anzeigefehler der runtime.shownotification Funktion
* Fix für die Benachrichtigung aktueller Boxen
* Fix für einen Fehler in der XML-Datenquelle, wenn das XML-File lediglich aus einer Zeile besteht
* Fix für das Photoframe-Control
* Fix für einen Fehler, bei dem es zu einem Absturz des Designers beim Löschen eines Farbcodes kommen konnte
* Fix für einen Fehler, bei dem es zu einem Absturz des Designers beim Editieren einer nicht vorhandenen Schriftart kommen konnte
* Fix für das anpassen eines Controls bei 200% zoom
* Fehlermeldung für falsch selektierte JSON-Objekte angepasst
* Fix für einen Fehler, bei dem die Skalierung der Preview nicht korrekt dargestellt wurde

## 2.0.0.7 // 1.9.0.7 (10.02.2020) [Download](https://theobaldsoftware.sharepoint.com/:f:/s/peakboardpublic/ElRTM3tT5SRGi3BBUtFM2ogBg1QT4ZGiOLCHdz8ihwA6JQ?e=Q4rjH7)
* Unterscheidung in der Versionierung für Peakboard 2 Boxen (2.x.x.x) und Peakboard Boxen (1.x.x.x)
* Änderung der Peakboard Runtime (Preview) Architektur von UWP auf WPF
* Abschaffung der Peakboard Bridge für Peakboard 2 Boxen
* Unterstützung des Designers von Peakboard und Peakboard 2 Boxen
* Versionstrennung von Peakboard Boxen und Peakboard 2 Boxen
* Dataflows können nun per Rechtsklick auf eine Datenquelle erzeugt werden.
* In einem Dataflow können einfache Filter und Sortierungsfunktionen über einen Rechtsklick auf die im Dataflow dargestellte Tabelle vorgenommen werden.
* Unterstützung für OAuth2 Authentifizierung implementiert.
* Windows Explorer Button hinzugefügt.
* Angelegte Datenquellen können per Skript auch zum zurückschreiben verwendet werden.
* Es ist nun möglich, einzelne Datenquellen per Skript zu aktivieren und deaktivieren.
* Im Designer hinterlegte Ressourcen können per Rechtsklick herunter geladen werden.
* Umbenennung von NetworkFileShare zu Peakboard Bridge 
* Umbenennung von NetworkFileShareDirecet zu Lokales Netzwerk (nur für Peakboard 2 Boxen verfügbar)
* Die Breite des Rahmens kann für Elemente mit Rahmen per Skript angepasst werden.
* Skript-Debugger für Preview implementiert (nur für Peakboard 2 Boxen verfügbar)
* Template Dialog zum initialen Ladebildschirm des Peakboard Designers hinzugefügt.
* Tooltipp Icons in Dialogen hinzugefügt.
* Fix für einen Fehler, bei dem der Screenwechsel mit einem PDF zum Absturz des Designers führte.
* Fix für einen Fehler, bei dem bei einer aktiven Preview und dem erneuten öffnen einer Preview ein Fehler erzeugt wurde.
* Fix für einen Fehler, bei dem die Logs der Peakboard Box nicht mehr gelöscht werden konnten.
* Fix für die Undo-Funktion bei gruppierten Elementen.
* Fix für einen Fehler, bei dem nach einigen Screenshots kein weitere Screenshot erstellt werden konnte.
* Fix für einen Fehler beim Kopieren einer OPC/UA Datenquelle
* Fix für Skript-Fehlermeldungen im Peakboard Runtime Log

## 1.8.7.0 (31.01.2020) [Download](https://theobaldsoftware.sharepoint.com/:u:/s/peakboardpublic/EWNEpnPQNOFCjqG7OvWuxV0BIkIHRXdOO3yCGSgBwQnf3A?e=MlaQeI)
* Hotfix für einen Excel-Datenquellenfehler, der dazu führte, dass die Excel-Datenquelle die Daten nicht geladen hat, wenn keine Spaltennamen ausgewählt wurden

## 1.8.6.0 (14.01.2019)
* Hotfix für Excel Spaltennamen

## 1.8.5.1 (13.01.2020)
* Ein Fehler wurde im Designer behoben, wodurch die OPC UA Datenquelle einen Fehler ausgab, sobald mit dem Server interagiert werden sollte.

## 1.8.4.0 (07.01.2020)
* Hotfix für ShowDialog Lua Funktionen

## 1.8.3.0 (19.12.2019)
* Hotfix für die WLAN Konfiguration per Skript

## 1.8.2.0 (18.12.2019)
* Hotfix für JSON-Datenquelle
* Hotfix für Excel-Datenquelle

## 1.8.1.0 (17.12.2019)
* Hotfix für einen Fehler bei dem die Peakboard Runtime für die Preview nicht aktualisiert wurde

## 1.8.0.2 (16.12.2019)
* Signifikante Verbesserung der Performance bei der Verarbeitung von Skripten (Multithreading)
* Debugger für Lua-Skripte implementiert
* Der Dialog der Excel-Datenquelle wurde grundlegend überarbeitet
* Als Ressource hinzugefügte Dateien können heruntergeladen werden
* Save&Close-Button zu Skripten hinzugefügt
* Fehlerhandling verbessert
* Fehlermeldung bei Screenshots angepasst
* Fix für das Löschen von Skripten, gelöschte Skripte werden nicht weiterhin angezeigt
* Fix für die Verwendung neu erstellter Schriftarten
* Fix für das erneute Hinzufügen einer aktualisierten Excel-Liste
* Fix für Dataflows bei denen die Datenquelle geändert wurde
* Fix für den Linear und Circular Gauge wenn fehlerhafte Min oder Max Werte eingegeben wurden
* Fix für das Photoframe-Control
* Fix für fehlerhafte Zuweisung von IPv6-Adressen
* Fix für die Handhabung von Resourcen über die Peakboard Bridge


## 1.7.1.0 (29.10.2019) [Download](https://theobaldsoftware.sharepoint.com/:f:/s/peakboardpublic/Eoikktz-6r5ItM51juqX6fgBA5na2F5KWMY9yzi7b8WHkA?e=ByOAeQ)
* Hotfix für den Template Designer

## 1.7.0.0 (28.10.2019)
* Neue Datenquelle: SharePoint Lists
* Optimierung für Ressourcen, die über die Bridge geladen werden
* In der Zeitdatenqulle kann nun direkt eine relative Zeit zur aktuellen definiert werden
* Optimierung bei der Fehlerbehandlung kaputter Pakete
* Bei Web APIs wird nun "Peakboard" als User-Agent übergeben
* Der Reset im Manage Dialog wird nun ordentlich durchgeführt
* Im Explorer werden markierte Controls gekennzeichnet
* OneDrive Excel, PeakboardIO und AzureSQL wurden entfernt
* MQTT Tester ist wieder verfügbar
* Eigenschaften für die Simple Charts wurden umsortiert
* Bildvorschau verzerrt das Bild nicht mehr
* Icons im Eigenschaften-Editor wurden überarbeitet
* Silent Installation wurde optimiert
* Globale Funktion zur Peakboard Kommunikation wurde hinzugefügt
* Gesperrte Controls können nun über den Explorer ausgewählt werden
* Der Installer ist nun mehrsprachig
* Fix beim Installer wenn nur die Bridge installiert wurde
* Das Timeline Grid wurde überarbeitet
* Fix beim Benennen eines Controls zu "Background"
* Fix für Eigene Fonts
* Fix für eine Fehlermeldung beim Start des Designers
* Fix in der JSON Datenquelle beim Laden mancher Datenquellen
* Fix für die Zeitdatenquelle
* Fix für den Colorpicker beim Ändern der Werte im Textfeld

## 1.6.4.0 (18.10.2019) [Download](https://theobaldsoftware.sharepoint.com/:u:/s/peakboardpublic/EYyKT0GXBTlLiTKu0NqnesEBMTN6QRcCyjaxUeThQgBKew?e=jVNs2G)
* Die Grundeinstellung für das Designer-Theme wurde auf "Light" zurückgesetzt.

## 1.6.3.0 (17.10.2019)
* Es wurde ein Fehler in der Zeit-Datenquelle behoben, bei dem Zeitzonen manchmal nicht korrekt angewandt worden.

## 1.6.2.0 (19.09.2019)
* Es wurde ein Fehler der S7-Datenquelle behoben, bei dem mehrere Variablen von Merker-Bausteinen nicht gelesen werden konnten.

## 1.6.1.0 (27.08.2019)
* Hotfix für den Peakboard Webbrowser 

## 1.6.0.0 (22.08.2019)
* E-Mail mit dem Peakboard versenden unterstützt jetzt keine Authentifizierung
* XML Dialog überarbeitet
* Animate Funktion überarbeitet
* Übersetztungsfehler für SAP Templates behoben
* Die Option "Scrollbar" ermöglicht es nun auch horizontal zu scrollen
* Neue Funktionen zur Schriftartenbearbeitung hinzugefügt
* Skript-Editor: Elemente im Skript-Baum können nur noch durch einen Doppelklick geöffnet werden
* Skript-Editor: Skripte können nicht mehr im Editor selbst gelöscht werden
* Skripte können per Rechtsklick auf das entsprechende Skript gelölscht oder editiert werden
* Skript-Editor: Speichermeldung für erfolgreiches Speichern entfernt
* Tablegrid: Mehrfachselektion zum Löschen von Spalten hinzugefügt
* Fix für das Schreiben des Anzeigewertes von Combo-Box Elementen
* Fix für die Verwendung eines Bridge-Resourcen Bildes als Hintergrund einer Visualisierung
* Fix für die Drag&Drop Funktionalität von Tile-, TileView- und ListView-Elementen
* Fix für das Speichern von angepassten Schriftarten
* Fix für das Kopieren von Elemten mit einem Refresh-Skript
* Fix für das Öffnen von Dateien 


## 1.5.3.9 (07.08.2019) [Download](https://theobaldsoftware.sharepoint.com/:u:/s/peakboardpublic/ESHFf50r2tdFrrr2RA_rRegBzgCcoM7oz8C-IeIQPXRljw?e=3Mp4Nl)
* Ein Problem bei der Verarbeitung von NULL-Daten in der SQL-Server Datenquelle wurde behoben.

## 1.5.3.1 (06.08.2019)
* Hotfix für den Versionsabgleich zwischen Designer und Runtime, hier wurde ein Fehler gemeldet, obwohl die Versionen auf dem gleichen Stand waren

## 1.5.2.15 (05.08.2019)
* Fix für Bridge-Resourcen
* Fix für fehlende DLLs

## 1.5.1.0 (16.07.2019)
* Ein Fehler wurde behoben, der das Laden von Bilder über die Bridge verhinderte.

## 1.5.0.0 (15.07.2019)
* Es wurde ein Problem behoben, der zu einem hohen Speicherverbrauch für Dateiressourcen führte.
* Ein Fehler wurde behoben, bei dem der Installer gezwungen wurde, den Peakboard Designer mit der Bridge zu installieren.
* Fehlende deutsche Übersetzungen für SAP-Datenquellen-Abfragevorlagen wurden hinzugefügt.
* Fehlermeldung im WLAN-Dialog behoben
* Die Backstage des Designers wurde überarbeitet.
* Such-/Ersetzen-Funktionalität für Skripte im Skript-Editor hinzugefügt.
* Es wurde ein Fehler behoben, bei dem das Speichern der Visualisierung bei Änderungen an Skripten nicht möglich war.
* Der Skripteditor verfügt nun über eine Baumansicht, um schnell zwischen den Skripten zu navigieren.
* Ein Fehler wurde behoben, der dazu führte, dass das Hochladen von Visualisierungen fehlschlug, wenn sich eine Bildressource im Paket befand.
* Ein Fehler wurde behoben, bei dem das Öffnen eines Skripts in einem Dataflow den Speichern-Button in anderen Skripten deaktiviert hat.
* Ein Fehler wurde behoben, der dazu führte, dass der Designer beim Drag'n-Drop eines Diagramms auf die Leinwand in der chinesischen Version abstürzte.

## 1.4.2.7 (08.07.2019)
* Hotfix für ein Problem mit Bildelementen, die den Speicher voll laufen ließen

## 1.4.2.2 (05.07.2019)
* Hotfix zur Handhabung von Bild-Dateien

## 1.4.1.0 (14.06.2019)
* Hotfix für die Verwendung des Tile-Control

## 1.4.0.0 (11.06.2019)
* WLan Dialog überarbeitet - Funktion wird nur auf Boxen ab Version 1.4.0.0 unterstützt
* CSV-Datenquelle: Handling für doppelte Spaltenbezeichnungen hinzugefügt
* CSV-Datenquelle: Es ist nun möglich Zeilen zu überspringen
* Lua-Skript-Editor: Funktion .animate() für Controls hinzugefügt
* Lua-Skript-Editor: Eigene globale Funktionen können über strg+Leertaste ausgewählt werden 
* Lua-Skript-Editor: Skript-Baum analog zur Ordnerstruktur im Skript-Editor implementiert
* Dataflows: Für mathematische Operationen wird ausschließlich das englische Zahlenformat (#,###.##) unterstützt. Über die Format-Option eines Controls kann das Ergebniss der Operation zur Anzeige auf dem Display in das deutsche Zahlenformat (#.###,##) umgewandelt werden
* Update: Die Funktion prüft, bevor das Update ausgeführt wird, ob die aktuelle Visualisierung gespeichert wurde
* PDF-Viewer überarbeitet
* Fix für das Kopieren nicht zulässiger Elemente in Tile, Tile View und List View
* Fix für Skripte welche bei der Bildschirmaktivierung ausgeführt werden
* Fix im Skript-Editor für globale Funktionen 


## 1.3.1.0 (29.05.2019) [Download](https://theobaldsoftware.sharepoint.com/:u:/s/peakboardpublic/Eb34w5ubUXVLkIfnSREFSNEBFwHlT-3UVgFaXcc1vNr0qA?e=AjCyqo)
* Hotfix für das Speichern von Farben bei Kreis und Donut-Diagrammen

## 1.3.0.0 (21.05.2019)
* OPC UA: Fix von Browsing-Problemen bei absoluten Node IDs
* OPC UA: Fix für Fortschrittsbalken, der beim Verbindungstest unendlich lang läuft
* OPC UA: Hinzufügen von Multi-Node-Browsing, um Variablen zum Lesen auszuwählen
* OPC UA: Tabellenansicht für alle Variablen einer Subscription
* Balken-, Linien- und Kreisdiagramme wurden überarbeitet und sind außerhalb des Advanced Charts verfügbar
* Farbauswahl für alle Diagramme überarbeitet
* Padding für alle Controls hinzugefügt
* Lua-Skript-Editor: Dynamische Timer hinzugefügt
* Lua-Skript-Editor: Beispiel zur Bestimmung von Kalenderwochen hinzugefügt
* Lua-Skript-Editor: Überarbeitung der Validierungsfunktion
* Lua-Skript-Editor: Logik für lokale Variablen und globale Funktionen hinzugefügt
* Lua-Skript-Editor: Suchen und Ersetzen-Funktion implementiert
* Lua-Skript-Editor: Markierte Elemente können durch Code-Vorlagen erstezt werden
* Beim Löschen einer Variablen wird zusätzlich geprüft, ob diese neben einem Control-Element auch in einem Skript verwendet wird
* Template Dialog überarbeitet und ins Menü eingebunden
* Refresh-Skripte werden nach der Datenquelle benannt, auf der sie beruhen
* Webservice-Icon zum Manage-Dialog hinzugefügt
* Save-Button funktioniert analog zu "Speichern unter", falls die aktuelle Visualisierung noch nicht gespeichert wurde
* Bridge-Funktion für NetworkShareFileDirect der Excel-Datenquelle entfernt
* Meldung zum Abgleich der Designer- und Box-Version implementiert
* Tapped-Event für Text-Controls hinzugefügt
* Fix für die Kalender-Datenquelle
* Fix für die Weboberfläche bei Browser-Zugriff
* Fix für den Öffnen-Dialog bei Dateien die keine .pbmx-Dateien sind
* Fix für das Duplizieren eines Dataflows, welcher ein Refresh-Skript enthält
* Fix für das Skalieren von Screenshots
* Fix für die Handhabung von mehr als in 127 Zeichen in Strings in der SQL-Datenquelle
* Fix für das Tabelle-Control im chinesischen Sprachpaket


## 1.2.2.0 (23.04.2019)
* Hotfix für die Installation der Peakboard Runtime

## 1.2.1.1 (17.04.2019)
* Hotfix für den Reload einer S7 Datenquelle in der Preview

## 1.2.0.1 (16.04.2019)
* Regel-Editor für die Controls Text, Linear-Gauge und Circular-Gauge
* Für Excel-Daten kann der Datentyp von „String“ zu „Number“ in der Datenquelle direkt geändert werden 
* Auswahl mehrerer Variablen für die OPC-UA Datenquelle
* Nachinstallation der Peakboard Runtime wurde dem Setup hinzugefügt
* Versionsabgleich von Runtime und Designer implementiert
* Das Text-Box-Control kann mehrzeilig beschrieben werden
* Überarbeitung zuletzt geöffneter Dateien
* Screenshot zuletzt geöffneter Dateien hinzugefügt
* Farbauswahl komprimiert und zuletzt verwendete Farben hinzugefügt
* Überarbeitung der Farbauswahl für Advanced Charts
* Überarbeitetes Design der Ribbon-Bar
* Überarbeitung der Microsoft Kalender Datenquelle
* Überarbeitete Web-Oberfläche zur Eingabe von Variablen und Listen
* Settings und Logs aus der Web-Oberfläche in den Manage-Dialog des Designers verschoben
* Zusammenführen von "Activate" und "Delete" einer Visualisierung im Manage-Dialog
* Hervorhebung für aktiven Screen verbessert
* Nach dem Duplizieren eines Screens wird der duplizierte Screen zum aktiven Screen gesetzt
* Fix für einen Fehler beim Zurückladen einer Visualisierung von einer Box
* Fix für das Speichern von Listen auf der Box 
* Fix für Zeitdatenquellen vom Typ „default“
* Fix für den Wechseln einer ODBC Verbindung auf eine Oracle Verbindung
* Fix für Lua Code Beispiele
* Fix für das Erstellen und Löschen von Skripten
* Fix für den Lua-Befehl "runtime.shownotification"
* Fix für das umbennenen von Skripten 



## 1.1.0.46 (18.03.2019)
* Hotfix für das Threshold Diagramm des Advanced Charts

## 1.1.0.1 (11.03.2019)
* Fehlende deutsche Übersetzungen hinzugefügt

## 1.1.0.0 (11.03.2019)

* Sprachauswahl um Mandarin erweitert
* Anzeige des Dateinamens in der Title-Bar
* Überarbeiter StartUp-Dialog
* Überarbeiter Ribbon-Bar
* Die Anzahl der Preview-Daten für alle Datenquellen wurde von fünf auf 50 Zeilen erhöht (falls vorhanden)
* Deutsche Übersetzung für Dataflows hinzugefügt
* Web GUI zum Pushen von Daten in Variablen der aktiven Visualisierung hinzugefügt
* List View überarbeitet sowie Controls und Funktionen hinzugefügt
* Tile View überarbeitet sowie Controls und Funktionen hinzugefügt
* Excel Files müssen nicht mehr geschlossen sein, wenn sie von einem NetworkShare bezogen werden
* Default für Dataflows auf "Neu laden, wenn die Quelle aktualisiert wird." gesetzt
* OPC UA erlaubt die Löschung von Server-Zertifikaten
* Fix für die Anzeige von Dialogen
* Fix für den Update-Dialog (x hatte dieselbe Funktion wie YES)
* Fix in LUA für die Verwendung von getrennten SQL Verbindungen
* Fix für NULL Handling bei SQL
* Fix für das erneute Hinzufügen einer bereits angelegten lokalen Ressource
* Fix für JSON Abfragen mit leerem JSON
* Fix für JSON Push
* Fix für OPC UA

## 1.0.35.53 (12.02.2019)

* Hotfix für den Umgang mit OPC UA-Server-Zertifikaten

## 1.0.35.50 (12.02.2019)

* Hotfix für falsche Übersetzungen

## 1.0.35.6 (05.02.2019)

* Sprachauswahl um deutsches Sprachpaket erweitert
* Trennung von Variabeln/Listen und Datenquellen
* Neue Datenquelle: Google Spreadsheet
* Neue Ordnerstruktur für Variablen, Listen und Skripte
* Weitere Zeitformate hinzugefügt
* Neue date functions mit .NET-Formatierung
* Einführung unterschiedlicher Zeichnungsebenen
* Möglichkeit Ebenen per Drag and Drop in der Rubrik Screen zu ändern
* Möglichkeit ein Element eine Ebene herauf oder herab zu stufen
* Fix für Undo/Redo 
* Fix für den Zeitserver bei alten Visualisierungen
* Fix für die Anzeige eines Live Tile Box
* Fix für die Anzeige bei Verwendung einer Auflösung mit 1280*720
* Fix für Lesefehler in der S7 Datenquelle
* Fix für die Eingabe von RGB-Werten
* Fix für den Deploy auf mehrere Boxen
* Fix für Google Docs Control

## 1.0.34.7 (18.01.2019)

* Hotfix für die Validierung der Daten im Dialog der OPC UA Datenquelle

## 1.0.34.3 (14.01.2019)

* Die Auswahl mehrerer Elemente kann über ESC beendet werden
* Zusätzliche Formatierungspunkte um Elemente horizontal und vertikal anzuordnen
* Fix für die Siemens S7 Datenanbindung
* Fix für Undo/Redo
* Fix für das Verschieben mehrere Objekte
* Fix für die Zugriffsrechte auf Microsoft One Drive

## 1.0.33.7 (19.12.2018)

* OPC UA Datenquelle: Der Umgang mit Serverzertifikaten wurde überarbeitet und ist jetzt spezifikationskonform

## 1.0.33.0 (17.12.2018)

* Die Eigenschaft fixed wurde nach locked umbenannt
* Die Funktionen Lock, Hide und Group können via Rechtsklick verwendet werden
* Der Designer kann mit einer Auflösung ab 1280*720 verwendet werden
* Für das Löschen von Resourcen, Datenquellen und Ordnern wurde ein Bestätigungsdialog eingefügt
* Fix für den Linear Gauge

## 1.0.32.1 (03.12.2018)

* Fix für den Umgang mit Listen in der JSON-Datenquelle
* Fix für die abas-Authentifizierung in der JSON-Datenquelle

## 1.0.32.0 (28.11.2018)

* Der Bridge-Dialog wurde überarbeitet
* Der Zeitserver wird jetzt global für die Visualisierung gesetzt

## 1.0.31.1 (22.11.2018)

* Signalblock-Control hinzugefügt
* Wlan Manager hinzugefügt
* Updated Package Explorer Style
* Linear Gauge kann mit vertikaler Ausrichtung verwendet werden
* Neue Templates hinzugefügt
* JSON Datasource überarbeitet und Networksharefiles hinzugefügt
* Shadow Frame zur Textbox hinzugefügt
* Dataflows können in Ordnern gegliedert werden
* Google Analytics Control entfernt
* Fix für SAP Dialog Höhe bei niedriger Auflösung
* Fix für Lua Date Snippet
* Fix für Änderungen im Select Data Dialog
* Fix für die visible Eigenschaft im Zusammenhang mit Shadow Frames
* Fix für für die gecachten Screenshots, die den Designer zum Absturz bringen konnten

## 1.0.30.2 (14.11.2018)

* Hotfix für das Updaten von PDF Dateien

## 1.0.30.1 (07.11.2018)

* Hotfix für das automatische Gruppieren aus der Zwischenablage eingefügter Controls

## 1.0.30.0 (05.11.2018)

* Excel Dateien nutzen nun sowohl im Designer als auch in der Runtime englische Kultureinstellungen
* Tablegrid Zellen padding and margin kann nun angepasst werden
* Screens können nun mit Strg + Up / Down verschoben werden

## 1.0.29.3 (31.10.2018)

* Hotfix für das Zoomen und Scrollen in WebViews

## 1.0.29.1 (30.10.2018)

* Hotfix für das Ändern des Admin-Passworts

## 1.0.29.0 (29.10.2018)

* Der Dialog zur Verwaltung der Boxen im Netzwerk wurde überarbeitet, sodass sich alle Aktionen, die mit einer Peakboard-Box durchgeführt werden können, in einem Dialog befinden
* Ein Nutzerverwaltungssystem für Peakboard-Boxen wurde hinzugefügt
* Die JSON-Datenquelle speichert jetzt Beispieldaten des Previewdialogs für Dataflows
* Kleinere Anpassungen des Dialogs zum Editieren von Schriftarten
* Im Excelchart können jetzt die Schriftarten angepasst werden
* Grafische Elemente können nun gruppiert werden
* Bei Auswahl mehrerer grafischer Elemente können nun Eigenschaften für identische Elemente manipuliert werden

## 1.0.28.23 (22.10.2018)

* Der Dialog zum Lookup Column Step der Dataflows zeigt jetzt die korrekte aktuelle Konfiguration an

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

* Hotfix für das Editieren statischer Listen

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
* Fix für JSON-Datendialog
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
* JSON-Datenquelle unterstützt Hierarchien
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
* Fixes für Lua JSON Parsing
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
* Fix für die Authentifizierung bei der CSV und JSON Datenquelle

{% include collapsible.html %}
