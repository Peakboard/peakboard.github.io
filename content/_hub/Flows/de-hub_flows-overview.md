---
layout: article
product: hub
title: Flows Übersicht
menu_title: Flows Übersicht
description: Peakboard Hub - Flows Übersicht
lang: de
weight: 1100
ref: hub-1100
redirect_from:
 - /hub/de-hub_flows-overview.html
---

Dieser Bereich bietet eine zentrale Übersicht und Steuerung deiner Datenprojekte innerhalb von Peakboard Hub.

### Seitenleiste: Peakboard Hub Flows und Flow-Projektbaum

![Flow Seitenleiste](/assets/images/hub/de_hub_flows-01.png)

In der Seitenleiste navigierst du über [Peakboard Hub Flows] zu vorhandenen Datenprojekten.
Jedes Projekt kann einen oder mehrere Flows enthalten, dargestellt als verschachtelte Einträge unterhalb des jeweiligen Projektnamens.
Über einen Klick auf einen Flow öffnest du die Detailansicht.

### Kopfbereich: Flow-Steuerung und letzte Aktivität

![Flow Steuerung](/assets/images/hub/de_hub_flows-02.png)

Im oberen Bereich des Arbeitsbereichs findest du den Flow-Namen, die Angabe wann der Flow zuletzt ausgeführt wurde sowie zentrale Steueroptionen:

- **Trigger manually:** Löst den aktuellen Flow unmittelbar aus, ohne auf den eingestellten Zeitplan oder Trigger zu warten.
- **Download project:** Exportiert das gesamte Projekt zur weiteren Bearbeitung im Peakboard Designer.

### Flow Steps: Trigger, Aktionen, Outputs, Statusanzeigen

![Flow Steps](/assets/images/hub/de_hub_flows-03.png)

Der Abschnitt [Flow steps] zeigt die komplette Abfolge eines Flows:

- **Trigger (grau hinterlegt):** Gibt an, wodurch und wie oft der Flow ausgelöst wird, zum Beispiel [Periodic] für zeitgesteuerte Ausführung.
- **Normale Schritte (hellgrau):** Diese Listenpunkte bilden die Hauptlogik oder Verarbeitungsschritte innerhalb des Flows.
- **List-Outputs (blau markiert):** Schritte, die Ausgabedaten wie Peakboard Hub Listen erzeugen und abspeichern. Diese Listen sind schreibgeschützt und dienen lediglich der Ausgabe innerhalb des Flows.

Die Statusanzeigen der einzelnen Schritte:
- **Grün:** Vollständig und fehlerfrei ausgeführt.
- **Blauer Rand:** Schritt wird aktuell verarbeitet.
- **Rot:** Schritt fehlgeschlagen, gefolgt von einer kurzen Fehlerbeschreibung.

### Projektlogs: Protokollanzeige, Filter, Exportfunktionen

![Projektlogs](/assets/images/hub/de_hub_flows-04.png)

Im Bereich [Project Logs] findest du alle relevanten Ereignismeldungen zu den Flows:

- **Log-Tags:** Über die farbig gekennzeichneten Buttons wie [Verbose], [Info], [Warning], [Error], [Critical] und [Debug] filterst du die Anzeige nach Schweregrad.
- **Datumsfilter:** Wechsle das Tagesdatum, um nur Meldungen eines bestimmten Zeitraums zu sehen.
- **Exportfunktionen:** Mit den Schaltflächen [Export] oder [Export All] exportierst du die angezeigten oder alle Logs zur weiteren Analyse.
