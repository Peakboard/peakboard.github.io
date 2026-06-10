---
layout: article
product: hub
title: Flows – Einführung
menu_title: Einführung
description: Was Peakboard Hub Flows sind, wie sie sich von normalen Projekten unterscheiden und wofür du sie einsetzt.
lang: de
weight: 1090
ref: hub-1090
redirect_from:
 - /hub/de-hub_flows-introduction.html
---

Peakboard Hub Flows sind serverseitige Datenprojekte, die direkt im Peakboard Hub laufen – nicht auf einer Peakboard Box oder einem BYOD Gerät. Ein Flow hat keine Oberfläche: Er liest, verarbeitet und verteilt Daten im Hintergrund. Erstellt werden Flows im Peakboard Designer, ausgeführt werden sie im Peakboard Hub.

### Zwei Projektarten

Im Peakboard Designer arbeitest du mit zwei Projektarten:

- **Design-Projekte (`*.pbmx`):** Die klassischen Projekte mit Oberfläche. Sie laufen über die Peakboard Runtime auf einer Peakboard Box oder einem BYOD Gerät.
- **Flow-Projekte (`*.pbfx`):** Datenprojekte ohne Oberfläche. Sie laufen im Peakboard Hub und führen dort deine Datenlogik aus.

### Alles außer der Oberfläche

Ein Flow-Projekt nutzt dieselben Bausteine wie ein normales Projekt – nur ohne Screens:

![Aufbau eines Flow-Projekts](/assets/images/hub/flows/flows-02-project-structure.png)

- **Data (1):** Datenquellen wie SQL Server, SAP, OPC UA, MQTT oder Siemens S7 – exakt dieselbe Auswahl wie in einem Design-Projekt. Auch Dataflows zum Bereinigen und Aufbereiten der Daten stehen zur Verfügung.
- **Variables (2):** Variablen, optional mit Peakboard Hub-Verbindung, um Werte live zu verteilen.
- **Scripts (3):** Funktionen, die du mit den Building Blocks (oder in Lua) baust.
- **Flows (4):** Die Flows selbst, die Trigger und Steps zusammenführen.

Einen Punkt findest du hier nicht: Screens. Da ein Flow keine Oberfläche hat, entfällt der gesamte UI-Teil.

### Nichts läuft von allein

Das ist der wichtigste Unterschied zu einem Design-Projekt: In einem Flow werden Datenquellen, Dataflows und Funktionen **nie automatisch** ausgeführt. Stattdessen steuert der Flow die komplette Abfolge.

![Aufbau eines Flows](/assets/images/hub/flows/flows-05-trigger-and-steps.png)

Ein Flow besteht aus zwei Teilen:

- **Trigger (2):** Bestimmt, wann der Flow startet – zum Beispiel [Periodic (sec)] für eine zeitgesteuerte Ausführung im Sekundentakt, [Schedule] für feste Uhrzeiten, [After function execute] oder ein manueller Aufruf.
- **Steps (3):** Die Schritte, die der Flow nacheinander abarbeitet – etwa [Run function], um eine deiner Funktionen auszuführen. Diese lädt zum Beispiel eine Datenquelle neu, verarbeitet die Daten und schreibt das Ergebnis in eine Peakboard Hub Liste oder Variable.

Im Bereich [Select triggers and steps] (4) ziehst du die verfügbaren Trigger und Steps per Drag-and-drop in deinen Flow. Auf der linken Seite siehst du außerdem die Projektstruktur mit allen Datenquellen, Variablen und Funktionen (1).

### Voraussetzung: Peakboard Hub on premise

Flow-Projekte benötigen einen Peakboard Hub on premise. Peakboard Hub Online unterstützt Datenprojekte derzeit nicht.

### Wofür du Flows einsetzt

Mit Flows baust du Datenlogik zentral im Peakboard Hub. Typische Szenarien:

- **Workflows und Benachrichtigungen:** zum Beispiel eine E-Mail verschicken, wenn eine Maschine ausfällt.
- **Daten stagen und Verbindungen sparen:** eine einzige Verbindung zur Datenquelle, deren Ergebnis viele Peakboard Boxen aus dem Hub abrufen.
- **Live-Broker für SPS-Werte:** eine SPS einmal lesen und die Werte live über Peakboard Hub Variablen verteilen.

Eine ausführliche Beschreibung dieser Szenarien findest du unter [Flows – Anwendungsfälle](/hub/Flows/de-hub_flow-use-cases.html). Wie du Schritt für Schritt deinen ersten Flow baust, zeigt [Flow erstellen](/hub/Flows/de-hub_flow-create.html).
