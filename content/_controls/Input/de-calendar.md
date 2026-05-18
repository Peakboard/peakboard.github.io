---
layout: article
title: Calendar
menu_title: Calendar
description: Informationen zum Calendar-Control im Peakboard Designer
lang: de
weight: 805
ref: con-805
redirect_from:
---

Das Calendar-Control zeigt Termine und Ereignisse in einer klassischen Kalender-Ansicht an. Es eignet sich für Schichtpläne, Meetingübersichten, Wartungstermine oder jede Art von zeitlich verorteten Datensätzen mit Anfangs- und Endzeitpunkt. Du kannst zwischen Tages-, Wochen-, Arbeitswochen- und Monatsansicht wechseln.

## Calendar hinzufügen

Das Calendar-Control findest du im Peakboard Designer in der Werkzeugleiste unter [Interactive] über die Schaltfläche [More] (•••). Klicke darauf, dann wählst du das Calendar-Symbol (1) aus dem Popup aus.

![Calendar im Toolbar-Popup](/assets/images/Controls/calendar/calendar-01-toolbar-more-popup.png)

Ziehe das Symbol per Drag-and-drop auf die Arbeitsfläche oder platziere es mit einem Doppelklick.

## Datenquelle verbinden

Der Calendar benötigt eine Datenquelle, die mindestens drei Spalten enthält: einen **Anfangszeitpunkt**, einen **Endzeitpunkt** und einen **Titel** (Subject) für jeden Termin. Geeignet ist jede dynamische Datenquelle, etwa eine Microsoft-Calendar-Anbindung oder eine statische Variablen-Liste.

Nach dem Hinzufügen öffnet sich automatisch der Dialog [Connect control with data source]. Wähle hier unter [Data source name] (1) deine Liste aus.

![Connect-Dialog](/assets/images/Controls/calendar/calendar-02-connect-dialog-empty.png)

Tippe den Namen deiner Liste ein, das Auto-Vervollständigen schlägt passende Einträge (2) vor. Übernimm den Vorschlag mit der Pfeiltaste nach unten und bestätige mit [OK].

![Datenquelle ausgewählt](/assets/images/Controls/calendar/calendar-03-connect-dialog-filled.png)

## Spalten zuordnen und Datumsformat festlegen

Nach dem Verbinden zeigt das Eigenschaften-Panel auf der rechten Seite die Sektion [Data]. Hier ordnest du dem Control die passenden Spalten zu:

1. [Data source] (1) zeigt deine ausgewählte Liste an. Über die Schaltflächen daneben kannst du die Verknüpfung lösen oder die Liste neu laden.
2. [Start time column] (2) — die Spalte mit dem Anfangszeitpunkt jedes Termins.
3. [End time column] (3) — die Spalte mit dem Endzeitpunkt.
4. [Event column] (4) — die Spalte mit dem Titel oder Betreff, der auf dem Eintrag im Kalender erscheint.
5. [Data format] (5) — das Format, in dem die Zeitstempel in deinen Daten vorliegen, beispielsweise `yyyy-MM-dd HH:mm:ss`. Das Standardformat ist `HH:mm:ss dd.MM.yyyy`.

![Calendar mit Monatsansicht und Daten](/assets/images/Controls/calendar/calendar-04-bound-month-view.png)

Sobald alle Spalten zugeordnet sind und das Datenformat passt, erscheinen deine Termine farbig im Kalender.

## Ansicht wechseln

Im Bereich [Appearance] unter [VIEW] legst du die Darstellung fest. Über das Feld [View type] (1) kannst du zwischen vier Modi wechseln:

* **Day** — zeigt einen einzelnen Tag mit Stundenraster
* **Week** — zeigt eine komplette Woche im Stundenraster
* **Working Week** — wie Week, aber ohne Wochenende
* **Month** — zeigt einen Monatsüberblick (Standard)

In der Wochenansicht erscheint zusätzlich die Option [First day of week], mit der du Sonntag oder Montag als Wochenstart festlegen kannst.

![Calendar in Wochenansicht](/assets/images/Controls/calendar/calendar-05-week-view.png)

Über [Date format] direkt darunter wählst du, in welchem Format die Datumsangaben in der Kopfzeile des Kalenders erscheinen (z. B. `dd.MM.` oder `MM/dd`).

## Aussehen anpassen

Im selben [Appearance]-Bereich findest du außerdem:

* **Fonts** — Schriftarten für den Basistext, die Tages-Kopfzeile, die Wochen-/Monats-Kopfzeile, die Tagesnummern (nur in der Monatsansicht) und für die Termine selbst.
* **Colors** — Farben für [Event background] (Hintergrund der Termine), [Today highlight color] (Markierung des heutigen Tages), [Line color], [Cell background], [Header background] und [Time column background] (Stunden-Spalte in Day/Week-Ansichten).
* **Limit displayed time** — Aktiviere diese Option, um die Zeitschiene auf einen bestimmten Zeitraum zu beschränken (z. B. nur Arbeitsstunden 8–17 Uhr). Es erscheinen dann die Felder [StartHour] und [EndHour].

## Logik und Scripting

Im Bereich [Logic] kannst du das Calendar-Control für Skripte zugänglich machen und auf Benutzeraktionen reagieren:

* **Used in scripting** — aktiviere die Checkbox, damit das Control über die Skript-API ansprechbar wird.
* **Conditional formatting** — definiere Regeln, um Termine je nach Inhalt unterschiedlich darzustellen.
* **Event tapped** — wird ausgelöst, wenn der Benutzer auf einen Termin tippt; nützlich, um Detail-Pop-ups oder Folgeaktionen zu starten.
* **Tap on empty space** — wird ausgelöst, wenn der Benutzer auf eine leere Stelle im Kalender tippt; nützlich, um einen neuen Termin anzulegen.
