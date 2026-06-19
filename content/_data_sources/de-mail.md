---
layout: article
title: E-Mail
menu_title: E-Mail
description: Anbindung einer E-Mail Datenquelle (IMAP/SMTP) im Peakboard Designer
lang: de
weight: 500
ref: dat-500
redirect_from:
---

Die E-Mail Datenquelle erlaubt dir den Zugriff auf ein E-Mail-Postfach per IMAP sowie den Versand von E-Mails per SMTP. Üblicherweise nutzt du sie, um auf einfache Weise Nachrichten an oder von einer Peakboard Box zu senden bzw. zu empfangen. Grundsätzlich gibt es zwei Arten, wie du die Datenquelle einsetzen kannst:

- Der Inhalt des Postfachs wird als tabellarische Datenquelle dargestellt. Jede Zeile entspricht einer E-Mail.
- Jede eingehende E-Mail löst ein Event aus, in das sich Lua-Skript-Code integrieren lässt.

Welche Strategie die bessere ist, hängt vom Einzelfall und von deinen Programmierkenntnissen ab. Eine allgemeine Einführung, wie du externe Datenquellen konfigurierst und an Controls koppelst, findest du im [Tutorial zu externen Datenquellen](/tutorials/03-de-xml-daten.html).

## Datenquelle hinzufügen

Um die E-Mail Datenquelle anzubinden, machst du einen Rechtsklick auf [Daten] und wählst [Datenquelle hinzufügen]. Im folgenden Dialog suchst du nach [Email] und wählst die Datenquelle aus (1).

![E-Mail Datenquelle hinzufügen](/assets/images/data-sources/mail/mail-01-add.png)

## Verbindung konfigurieren

Im Bereich [General] vergibst du zunächst einen Namen für die Datenquelle (1).

Im Bereich [Reload] (2) legst du fest, ob und in welchem Intervall (in Sekunden) das Postfach automatisch neu eingelesen werden soll.

Im Bereich [Connection] trägst du die Verbindungsdaten deines E-Mail-Kontos ein:

* **Server (IMAP)** und **Port** (3): Netzwerkadresse und Port des Servers zum Empfangen von E-Mails (Standard-Port `993`).
* **Server (SMTP)** und **Port** (4): Netzwerkadresse und Port des Servers zum Versenden von E-Mails (Standard-Port `587`).
* **Secure Socket Option** (5): die Verschlüsselungsmethode der Verbindung. Mit `Auto` wählt Peakboard die passende Variante automatisch anhand des Ports; alternativ stehen `StartTls`, `SslOnConnect` und `None` zur Verfügung.
* **Username** und **Password** (6): die E-Mail-Adresse und das zugehörige Passwort des Kontos.

![E-Mail Verbindung konfigurieren](/assets/images/data-sources/mail/mail-02-connection.png)

## Details festlegen

Im Bereich [Specify details] steuerst du, welche Nachrichten und welche Inhalte gelesen werden:

* **Folder** (1): der Unterordner des Postfachs, der gelesen werden soll – üblicherweise `INBOX`.
* **All** / **Max. rows** (2): Standardmäßig werden alle Nachrichten geladen. Deaktivierst du [All], kannst du über [Max. rows] die Anzahl der gelesenen E-Mails begrenzen.
* **Entire message** (3): Ist die Option aktiviert, wird die komplette Nachricht inklusive Inhalt heruntergeladen. Andernfalls werden nur die Kopfdaten wie Betreff und Absender geladen.
* **Content type** (4): bestimmt, ob der Nachrichteninhalt als unformatierter Text oder als HTML geliefert wird. Diese Auswahl ist erst verfügbar, wenn [Entire message] aktiviert ist.

Mit einem Klick auf [Load data] erzeugst du eine Vorschau (5). Pro E-Mail erhältst du eine Zeile mit den Spalten Timestamp, From, Subject und Body, sodass du direkt prüfen kannst, ob die Verbindung funktioniert.

![E-Mail Details festlegen und Vorschau laden](/assets/images/data-sources/mail/mail-03-details.png)
