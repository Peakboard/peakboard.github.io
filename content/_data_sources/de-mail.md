---
layout: article
title: E-Mail
menu_title: E-Mail
description: Information about E-Mail data sources in Peakboard
lang: de
weight: 850
ref: dat-850
redirect_from:
---
Diese Seite erklärt die einzelnen Features beim Zugriff auf die Mail-Datenquelle. 
Unter dem folgenden Link finden Sie ein Tutorial, wie generell externe Datenquellen konfiguriert und an Peakboard-Elemente gekoppelt werden:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)

Die Maildatenquelle erlaubt den Zugriff auf ein E-Mail-Postfach per Imap. 
Sie wird üblicherweise dazu genutzt, um über einen sehr einfachen Weg Nachrichten an eine Peakboard Box zu senden. 
Generell gibt es zwei Muster, die Datenquelle einzusetzen:

- Der Inhalt des Postfaches wird einfach als tabellarische Datenquelle dargestellt. Jede Zeile entspricht einer E-Mail.
- Jede eingehende E-Mail löst ein Event aus, in das sich LUA-Skript-Code integrieren lässt.

Welche Strategie die bessere ist, kommt auf den Einzelfall an und hängt auch von den Programmierfähigkeiten ab.

* **IMAP** und **Port** ist die Netzwerkadresse und der Port des Mail-Servers
* Mit dem **...**-Button erreichen Sie ein separates Fenster zur Eingabe von Username und Passwort
* **Folder** ist der zu lesende Unterordner des Postfachs, normalerweise INBOX
* **Entire Message** definiert, ob die komplette Nachricht heruntergeladen werden soll oder nur der Betreff
* **Content Type** definiert, ob der Mail-Inhalt in unformatiertem Text oder HTML formatiert geliefert werden soll

Für den Fall, dass Sie per Scripting auf eingehende Mails reagieren wollen, nutzen Sie bitte die **Message Handle Script**-Routine.

![mail.png](/assets/images/data-sources/mail/mail.png)

