---
layout: article
title: Microsoft Calendar
menu_title: Microsoft Calendar
description: Information über Kalender Integration in Peakboard
lang: de
weight: 1000
ref: cal-1000
redirect_from:
  - /data_sources/24-de-microsoft-calendar.html
---
Die Microsoft Calendar Datenquelle ermöglicht es, auf einen Kalender zuzugreifen, der bei Office 365 hinterlegt ist. Derzeit werden nur Kalender von Microsoft unterstützt, die bei Office 365 oder bei Office.com gehostet werden. SharePoint-Kalender oder lokale Exchange-Kalender werden nicht unterstützt.

## Einrichten der Datenquelle

Neben dem obligatorischen Namen der Datenquelle muss Peakboard authorisiert werden, auf den Kalender zuzugreifen. Klicken Sie dazu auf den Authorize Button und folgenden Sie den üblichen Eingabeaufforderungen für den Kontenzugang. Bitte beachten Sie, dass niemals Username und Passwort in dem Board gespeichert werden, sondern nur ein Token, dessen Gültigkeit über das Office-365-Portal zurückgesetzt werden kann.

![image_1](/assets/images/data-sources/mscal/calendar-authorize.png)

Der Rest der zu füllenden Felder sind nahezu selbsterklärend. Der Zeitabschnitt, für den die Kalender-Einträge gesucht werden, muss im vorgegebenen Format angegeben werden. Das Feld Date Format enthält das Pattern, mit der Datum und Uhrzeit in der späteren Tabelle formatiert werden. Für den Fall, dass Sie den Hauptteil des Kalendereintrags (der so genannte Body) nicht als Klartext, sondern als HTML-Formatierung weiterverarbeiten möchten, klicken Sie die entsprechende Checkbox an.

![image_1](/assets/images/data-sources/mscal/calendar-maindialog.png)

Das Ergebnis ist ein ganz normale Liste, die pro Kalendereintrag eine Zeile enthält. Sie kann nun entsprechend weiterverarbeitet werden, wie jeder andere Datenquelle auch.

![image_1](/assets/images/data-sources/mscal/calendar-entries.png)

Unter dem folgenden Link finden Sie ergänzende Infos in Form eines YouTube-Videos:

[Darstellung des Microsoft Outlook Kalenders in Peakboard.](https://www.youtube.com/watch?v=0LsEXH9-r7s)

