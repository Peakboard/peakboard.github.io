---
layout: article
title: Microsoft Kalendar
menu_title: Microsoft Kalendar
description: Information über die Integration von Microsoft Kalender in Peakboard
lang: de
weight: 1000
ref: cal-1000
redirect_from:
  - /data_sources/24-de-microsoft-calendar.html
---

Die Microsoft Kalender Datenquelle ermöglicht es dir, auf einen Kalender zuzugreifen, der bei Office 365 hinterlegt ist. Derzeit werden nur Kalender von Microsoft unterstützt, die bei Office 365 oder bei Office.com gehostet werden. SharePoint-Kalender oder lokale Exchange-Kalender werden nicht unterstützt.

## Einrichten der Datenquelle

Um die Datenquelle hinzuzufügen, mache einen Rechtsklick auf [Daten] oder klicke alternativ auf den [...]-Button und wähle dann [Datenquelle hinzufügen] und [Microsoft Kalender] (1).

![Datenquelle hinzufügen](/assets/images/data-sources/mscal/de_mscal-01.png)

Gib der Datenquelle einen Namen (1) und definiere den gewünschten Zeitabschnitt (2) für den Kalendereinträge angezeigt werden sollen im vorgegebenen Format und wähle die korrekte Zeitzone.

Nun musst du Peakboard autorisieren, auf den Kalender zuzugreifen. Klicke dazu auf den [Authorize]-Button (3) und folgende den Eingabeaufforderungen für den Kontenzugang.

![Datenquellen Dialog](/assets/images/data-sources/mscal/de_mscal-02.png)

Bitte beachte, dass niemals Username und Passwort in deinem Projekt gespeichert werden, sondern nur ein Token, dessen Gültigkeit du über das Office-365-Portal zurücksetzen kannst.

![Autorisierung](/assets/images/data-sources/mscal/de_mscal-03.png)

Das Feld Datumsformat (1) enthält das Pattern, mit der Datum und Uhrzeit in der späteren Tabelle formatiert werden. Für den Fall, dass du den Hauptteil des Kalendereintrags (der sogenannte Body) nicht als Klartext, sondern als HTML-Formatierung weiterverarbeiten möchtest, klicke die entsprechende Checkbox [Inhalt als HTML] (2) an.
Klicke auf [Daten laden] (3), um dir die Vorschau anzeigen zu lassen.
Das Ergebnis ist eine Liste, die pro Kalendereintrag eine Zeile enthält.

![Vorschau](/assets/images/data-sources/mscal/de_mscal-04.png)

Unter dem folgenden Link findest du ergänzende Informationen in Form eines YouTube-Videos:

[Darstellung des Microsoft Outlook Kalenders in Peakboard.](https://www.youtube.com/watch?v=0LsEXH9-r7s)
