---
layout: article
title: E-Mail
menu_title: E-Mail
description: Information about E-Mail data sources in Peakboard
lang: de
weight: 500
ref: dat-500
redirect_from:
---

Diese Seite erklärt die einzelnen Features beim Zugriff auf die E-Mail Datenquelle.
Unter dem folgenden Link findest du ein Tutorial, wie generell externe Datenquellen konfiguriert und an Peakboard-Elemente gekoppelt werden:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)

Die E-Mail Datenquelle erlaubt dir den Zugriff auf ein E-Mail-Postfach per IMAP sowie den Versand von E-Mails per SMTP.
Üblicherweise nutzt du sie, um über einen sehr einfachen Weg Nachrichten an oder von einer Peakboard Box zu senden.
Generell gibt es zwei Arten, wie du die Datenquelle einsetzen kannst:

- Der Inhalt des Postfaches wird einfach als tabellarische Datenquelle dargestellt. Jede Zeile entspricht einer E-Mail.
- Jede eingehende E-Mail löst ein Event aus, in das sich Lua-Skript-Code integrieren lässt.

Welche Strategie die bessere ist, kommt auf den Einzelfall an und hängt auch von deinen Programmierfähigkeiten ab.

Um die Datenquelle hinzuzufügen mache einen Rechtsklick auf [Daten] oder klicke alternativ auf den [...]-Button und wähle dann [Datenquelle hinzufügen] und [E-Mail] (1).

![E-Mail Datenquelle hinzufügen](/assets/images/data-sources/mail/de_email-01.png)

Gib der Datenquelle einen Namen (1) und befülle diese mit den Login-Informationen des E-Mail-Accounts, den du benutzen möchtest (2).

Im Bereich **Verbindung**:

- **IMAP** und **Port** ist die Netzwerkadresse und der Port des Mail-Servers zum Empfangen von E-Mails
- **SMTP** und **Port** ist die Netzwerkadresse und der Port des Mail-Servers zum Versenden von E-Mails
- Im Textfeld **Benutzername** gibst du die E-Mail Adresse ein, im Textfeld **Passwort** das zugehörige Passwort

Im Bereich **Details angeben**:

- **Ordner** ist der zu lesende Unterordner des Postfachs, normalerweise INBOX
- **Gesamte Nachricht** definiert, ob die komplette Nachricht heruntergeladen werden soll oder nur der Betreff
- **Inhaltstyp** definiert, ob der Mail-Inhalt in unformatiertem Text oder HTML formatiert geliefert werden soll

![E-Mail Datenquelle konfigurieren](/assets/images/data-sources/mail/de_email-02.png)

Für den Fall, dass du per Scripting auf eingehende Mails reagieren willst, nutze die **Message Handle Script**-Routine.
