---
layout: article
title: Office 365 To Do
menu_title: Office 365 To Do
description: Die Aufgaben einer Microsoft To Do Aufgabenliste als Datenquelle im Peakboard Designer lesen – inkl. Single-Tenant- und Multi-Tenant-Autorisierung.
lang: de
weight: 1190
ref: dat-1190
redirect_from:
---

Die Office 365 To Do Datenquelle ermöglicht es dir, die Aufgaben einer Microsoft To Do Aufgabenliste zu lesen, die bei Microsoft 365 gehostet wird. Die Anmeldung läuft über die moderne Microsoft-Authentifizierung (Microsoft Entra ID, OAuth) und du hast die Wahl zwischen einer **Multi-Tenant**- und einer **Single-Tenant**-Anwendung.

## Einrichten der Datenquelle

Mache einen Rechtsklick auf [Daten] oder klicke auf den [...]-Button und wähle [Datenquelle hinzufügen]. Wechsle in die Kategorie [Office 365] (1) und wähle die Datenquelle [To Do] (2).

![Office 365 To Do Datenquelle hinzufügen](/assets/images/data-sources/microsoft-todo/microsoft-todo-01-add.png)

## Verbindung konfigurieren

Vergib im Bereich [General] zunächst einen Namen für die Datenquelle. Im Bereich [Connection] wählst du über das Auswahlfeld die Autorisierungsmethode und meldest dich anschließend über den Button [Authorize] an. Nach erfolgreicher Anmeldung zeigt der Button [Is authorized]. Da die Anmeldung über das normale Microsoft-Anmeldefenster erfolgt, wird auch die Zwei-Faktor-Authentifizierung (MFA) unterstützt – in deinem Projekt wird niemals Username und Passwort gespeichert, sondern nur ein Token, dessen Gültigkeit du über das Microsoft-365-Portal jederzeit zurücksetzen kannst.

* **Use multi-tenant Application** – Peakboard nutzt eine bereits von Peakboard bereitgestellte, mandantenübergreifende Anwendung in Microsoft Entra ID. Du musst keine eigene App registrieren; ein Klick auf [Authorize] genügt.
* **Use single-tenant Application** – du verwendest eine eigene App-Registrierung in deinem eigenen Microsoft Entra ID-Verzeichnis (Tenant), indem du dessen [Application (client) ID] und [Directory (tenant) ID] einträgst. Die Anmeldung bleibt damit vollständig innerhalb deiner Organisation.

Hast du im selben Projekt bereits eine Office-365-Verbindung autorisiert (zum Beispiel für SharePoint Lists, den Office 365 Kalender, Outlook oder Teams), klicke unten auf [Reuse existing connection] und wähle sie aus – eine erneute Anmeldung ist dann nicht nötig.

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
