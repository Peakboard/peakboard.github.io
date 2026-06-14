---
layout: article
title: Office 365 To Do
menu_title: To Do
description: Die Aufgaben einer Microsoft To Do Aufgabenliste als Datenquelle im Peakboard Designer lesen – inkl. Single-Tenant- und Multi-Tenant-Autorisierung.
lang: de
weight: 1190
ref: dat-1190
permalink: /data_sources/de-microsoft-todo.html
redirect_from:
---

Die Office 365 To Do Datenquelle ermöglicht es dir, die Aufgaben einer Microsoft To Do Aufgabenliste zu lesen, die bei Microsoft 365 gehostet wird. Die Anmeldung läuft über die moderne Microsoft-Authentifizierung (Microsoft Entra ID, OAuth) und du hast die Wahl zwischen einer **Multi-Tenant**- und einer **Single-Tenant**-Anwendung.

## Einrichten der Datenquelle

Mache einen Rechtsklick auf [Daten] oder klicke auf den [...]-Button und wähle [Datenquelle hinzufügen]. Wechsle in die Kategorie [Office 365] (1) und wähle die Datenquelle [To Do] (2).

![Office 365 To Do Datenquelle hinzufügen](/assets/images/data-sources/microsoft-todo/microsoft-todo-01-add.png)

## Verbindung konfigurieren

Vergib der Datenquelle einen Namen und richte anschließend die [Connection] ein. Die Wahl der Autorisierungsmethode, die Anmeldung über [Authorize] und das Wiederverwenden einer bestehenden Verbindung funktionieren für alle Office 365 Datenquellen gleich und werden hier einmal beschrieben: [Office 365 Verbindung](/data_sources/de-office365-connection.html).

## Details angeben

Klicke auf [Retrieve To Do tasks list] (2), um die Aufgabenlisten zu laden, auf die du Zugriff hast. Wähle unter [Task list] (3) die gewünschte Liste aus – in diesem Beispiel [Factory CI].

![Office 365 To Do Verbindung und Details konfigurieren](/assets/images/data-sources/microsoft-todo/microsoft-todo-02-config.png)

## Daten laden und Ausgabespalten

Klicke auf [Load data], um dir die Vorschau anzeigen zu lassen. Das Ergebnis ist eine Liste, die pro Aufgabe eine Zeile enthält, mit den folgenden Spalten:

* **Id** – die eindeutige Kennung der Aufgabe.
* **Title** – der Titel der Aufgabe.
* **Status** – der Status der Aufgabe, zum Beispiel `notStarted`, `inProgress` oder `completed`.
* **Importance** – die Priorität der Aufgabe: `low`, `normal` oder `high`.
* **Content** – der Beschreibungstext (Body) der Aufgabe.
* **Created Date** – der Zeitpunkt, zu dem die Aufgabe erstellt wurde.
* **Completed Date** – der Zeitpunkt, zu dem die Aufgabe abgeschlossen wurde; bleibt leer, solange die Aufgabe nicht abgeschlossen ist.
* **Due Date** – das Fälligkeitsdatum der Aufgabe; leer, wenn kein Datum gesetzt ist.
* **Categories** – die der Aufgabe zugeordneten Kategorien.
* **Has Attachments** – gibt an, ob die Aufgabe Anhänge hat (`true` / `false`).

![Office 365 To Do Vorschau](/assets/images/data-sources/microsoft-todo/microsoft-todo-03-preview.png)

Mit einem Klick auf [OK] legst du die Datenquelle an. Sie erscheint anschließend im Explorer unter [Daten] und kann wie jede andere Datenquelle mit Controls verknüpft werden.
