---
layout: article
title: Geteilte Verbindungen
menu_title: Geteilte Verbindungen
description: Wie geteilte Verbindungen im Peakboard Designer eingerichtet, verwaltet und ausgetauscht werden.
lang: de
weight: 20
ref: dat-20
redirect_from:
 - /misc/11-de-web.html
 - /misc/de-shared-connection.html
---

Wenn mehrere Datenquellen einer Visualisierung auf dasselbe Quellsystem verweisen, ist es sinnvoll, die Zugangsdaten dazu nur einmal zu hinterlegen.
Peakboard bietet diese Möglichkeit für eine Vielzahl an Quellsystemen, u. a. SAP, SQL Server oder Excel.

Ein Beispiel: In einer Visualisierung werden SAP-Bestandsdaten aus einer Tabelle und offene Transportaufträge aus einem Funktionsbaustein angezeigt.
Beide Daten stammen aus demselben SAP-System. Mit einer geteilten Verbindung werden Zugangsdaten wie Benutzer, Passwort oder SAP-Server nur einmal und nicht bei jeder Datenquelle erneut hinterlegt.

## Verbindungen teilen

Lege die erste Datenquelle deines Projekts wie gewohnt an und trage die Verbindungsdaten ein.
Lege anschließend die zweite Datenquelle desselben Typs an.
Statt die Verbindungsdaten erneut einzutragen, klicke unten links im Dialog auf [Reuse existing connection] (3).
Es öffnet sich eine Liste der bereits vorhandenen Verbindungen dieses Typs.
Wähle die passende Verbindung aus – die Verbindungsdaten (2) werden direkt in den Dialog übernommen, und du musst nur noch die Datenquelle benennen (1) und die Abfrage definieren.

![Datenquelle mit vorhandener Verbindung wiederverwenden](/assets/images/misc/shared-connection/shared-connection-01.png)

## Geteilte Verbindungen verwalten

Über den [Project settings]-Button in der Symbolleiste und den Eintrag [Connections] öffnest du den Connection Manager.
Er gibt dir einen Überblick über alle Verbindungen und gliedert sie in drei Bereiche:

- **Used in current application** (1): alle Verbindungen, die von Datenquellen im aktuellen Projekt verwendet werden.
- **Personal connections** (2): Verbindungen, die lokal auf deinem Rechner gespeichert sind und in allen Projekten zur Verfügung stehen.
- **Peakboard Hub connections** (3): Verbindungen, die zentral im Peakboard Hub gespeichert und damit im ganzen Team verfügbar sind.

Über den [Import]-Button und das Menü […] (4) kannst du Verbindungen importieren und exportieren.

![Connection Manager mit den drei Verbindungsbereichen](/assets/images/misc/shared-connection/shared-connection-02.png)

## Verbindungsdetails ansehen

Mit einem Klick auf eine Verbindung in der linken Liste (1) erscheinen rechts unter [Connection options] (2) alle Details der Verbindung.
Darunter zeigt [Data sources using this connection] (3) alle Datenquellen des aktuellen Projekts, die diese Verbindung verwenden, und [Resources using this connection] (4) die zugehörigen Ressourcen.
Wir empfehlen, jeder Verbindung einen sprechenden Namen zu geben.

![Details einer ausgewählten Verbindung](/assets/images/misc/shared-connection/shared-connection-03.png)

### Persönliche Verbindungen

Mit den persönlichen Verbindungen (Bereich **Personal connections**) legst du Zugangsdaten über das aktuelle Projekt hinaus auf dem lokalen Rechner ab, sodass du sie in neuen Projekten nicht erneut eingeben musst.
Eine persönliche Verbindung steht in allen neuen Projekten zur Verfügung und kann in den jeweiligen Datenquellendialogen über [Reuse existing connection] abgerufen werden.

<div class="box-warning" markdown="1">
**Achtung!**

Sobald persönliche Verbindungen auf dem lokalen Rechner abgelegt werden, werden sie durch ein Passwort verschlüsselt.
Um Missbrauch zu vermeiden, ist dieses Passwort bei jedem Start des Peakboard Designers einzugeben.
</div>

## Verbindungen exportieren und importieren

Verbindungen können in eine Datei exportiert werden, um sie in einer Zielumgebung – etwa auf dem Rechner einer Kollegin oder eines Kollegen – wieder zu importieren.
Klicke im Connection Manager auf das Menü […] und dann auf [Export connections…].
Im folgenden Dialog wählst du die Zieldatei (1), vergibst ein Passwort zur Verschlüsselung der Daten (2) und markierst die zu exportierenden Verbindungen (3).
Ein Klick auf [Export] (4) erzeugt die Datei.
In der Zielumgebung importierst du die Verbindungen anschließend mit einem Klick auf [Import].

![Verbindungen in eine Datei exportieren](/assets/images/misc/shared-connection/shared-connection-04.png)
