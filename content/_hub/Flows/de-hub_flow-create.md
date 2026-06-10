---
layout: article
product: hub
title: Flow erstellen
menu_title: Flow erstellen
description: Schritt für Schritt einen Peakboard Hub Flow im Peakboard Designer erstellen und in den Hub hochladen.
lang: de
weight: 1110
ref: hub-1110
redirect_from:
 - /hub/de-hub_flow-create.html
---

In diesem Artikel erstellst du Schritt für Schritt einen Flow im Peakboard Designer und lädst ihn in den Peakboard Hub hoch. Was Flows sind und wie sie sich von normalen Projekten unterscheiden, erfährst du unter [Flows – Einführung](/hub/Flows/de-hub_flows-introduction.html).

### Flow-Projekt anlegen

Öffne den Peakboard Designer und klicke auf der Startseite auf [New Flow project]. Damit legst du ein Flow-Projekt (`*.pbfx`) an, das später im Peakboard Hub läuft.

![Neues Flow-Projekt auf der Startseite](/assets/images/hub/flows/flows-01-home-new-flow-project.png)

### Das Flow-Projekt im Überblick

Ein Flow-Projekt enthält dieselben Bausteine wie ein Design-Projekt – nur ohne Screens. Im Explorer findest du [Data], [Variables], [Scripts] und [Flows].

![Aufbau eines Flow-Projekts](/assets/images/hub/flows/flows-02-project-structure.png)

### Datenquellen und Dataflows hinzufügen

Füge deine Daten genau wie in einem normalen Projekt hinzu: Klicke mit der rechten Maustaste auf [Data] und wähle [Add data source] oder [Add dataflow]. Es steht dir die komplette Auswahl an Datenquellen zur Verfügung.

![Datenquelle hinzufügen](/assets/images/hub/flows/flows-03-add-datasource.png)

### Logik in einer Funktion bauen

Die eigentliche Verarbeitung baust du in einer Funktion mit den Building Blocks. Lege dazu unter [Scripts] eine neue Funktion an. Im Bereich [Publish to external systems] kannst du Ergebnisse unter anderem per [Email] verschicken oder in [Peakboard Hub], [MQTT], [Siemens S7] oder [SQL Server] schreiben.

![Funktion mit Building Blocks](/assets/images/hub/flows/flows-04-function-buildingblocks.png)

### Trigger und Steps festlegen

Öffne deinen Flow unter [Flows] und definiere die Abfolge. Ziehe aus dem Bereich [Select triggers and steps] (4) die Bausteine per Drag-and-drop in den Flow:

![Trigger und Steps festlegen](/assets/images/hub/flows/flows-05-trigger-and-steps.png)

1. Vergib im Feld [Name] einen aussagekräftigen Namen für deinen Flow.
2. Füge unter [Triggers] (2) einen Trigger hinzu, der bestimmt, wann der Flow startet – zum Beispiel [Periodic (sec)] mit einem Intervall in Sekunden.
3. Füge unter [Steps] (3) die Schritte hinzu, die der Flow ausführt – etwa [Run function] und wähle die zuvor erstellte Funktion aus.

### Mit dem Peakboard Hub verbinden

Bevor du hochladen kannst, verbinde den Designer mit deinem Peakboard Hub. Klicke dazu auf den Button [Peakboard Hub] in der oberen Menüleiste.

![Mit dem Peakboard Hub verbinden](/assets/images/hub/flows/flows-06-connect-hub.png)

1. Wähle unter [Type] (1) deinen Peakboard Hub aus. Flow-Projekte benötigen einen Peakboard Hub on premise.
2. Trage unter [Group key] (2) deinen Group Key ein oder authentifiziere dich über [Authenticate by Username and Password] (3).
3. Bestätige die Verbindung. Sobald [Connection] und [Synchronization] grün sind, ist der Designer verbunden.

### Flow hochladen

Klicke nun auf [Upload] in der oberen Menüleiste. Der Flow wird in den Peakboard Hub übertragen. Anschließend findest du ihn im Peakboard Hub unter [Peakboard Hub Flows] in der Flow-Liste, wo du seine Ausführung und Logs verfolgen kannst.

![Flow im Peakboard Hub](/assets/images/hub/de_hub_flows-03.png)

Dein Flow ist nun erstellt und läuft im Peakboard Hub. Wie du den laufenden Flow im Hub steuerst, beschreibt [Flows Übersicht](/hub/Flows/de-hub_flows-overview.html). Eine Übersicht typischer Einsatzszenarien findest du unter [Flows – Anwendungsfälle](/hub/Flows/de-hub_flow-use-cases.html).
