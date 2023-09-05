---
layout: article
title: Datum erstellen
menu_title: Datum erstellen
description: Informationen über die Erstellung eines Datums in der Lua Skripterstellung
lang: de
weight: 350
ref: scr-350
redirect_from:
---

Um ein Datum in Lua zu erstellen, kannst du die Funktion `os.date` verwenden.
Die Funktion `os.date` ermöglicht es dir, ein Datum und eine Uhrzeit nach einem bestimmten Muster zu formatieren und gibt es als String zurück.

So kannst du ein Datum in Lua erstellen:

```lua
local year = 2023
local month = 7
local day = 25
local hour = 12
local minute = 30
local second = 0

local date = os.date("%Y-%m-%d %H:%M:%S", os.time({year=year, month=month, day=day, hour=hour, min=minute, sec=second}))
print(date)  -- Output: "2023-07-25 12:30:00"
```

In diesem Beispiel verwendest du die Funktion `os.time`, um die angegebenen Datumskomponenten (Jahr, Monat, Tag, Stunde, Minute und Sekunde) in einen Zeitstempel zu konvertieren, der die Anzahl der Sekunden seit dem 1. Januar 1970, 00:00:00 UTC angibt. Dann verwendest du die Funktion `os.date` mit dem entsprechenden Formatierungsmuster ("%Y-%m-%d %H:%M:%S"), um den Zeitstempel in eine String-Darstellung des Datums zu formatieren.

Du kannst das Formatmuster in der Funktion `os.date` anpassen, um das Datum in verschiedenen Formaten entsprechend deinen Anforderungen anzuzeigen. Hier sind einige gängige Formatangaben:

* `%Y`: Jahr mit Jahrhundert als Dezimalzahl (z. B. "2023")
* `%m`: Monat als Dezimalzahl (z. B. "07")
* `%d`: Tag des Monats als Dezimalzahl (z. B. "25")
* `%H`: Stunde (00-23) als Dezimalzahl (z. B. "12")
* `%M`: Minute (00-59) als Dezimalzahl (z. B. "30")
* `%S`: Sekunde (00-59) als Dezimalzahl (z. B. "00")

Du kannst diese Formatspezifikationen verwenden, um benutzerdefinierte Datumsformate zu erstellen, die deinen speziellen Anforderungen entsprechen.

Beachte, dass die Funktion `os.date` die lokale Zeitzone und die Systemeinstellungen für die Formatierung von Datum und Uhrzeit verwendet. Wenn du mit Datumsangaben in verschiedenen Zeitzonen arbeiten oder komplexere Datumsmanipulationen durchführen musst, solltest du die benutzerdefinierte Peakboard Format-Bibliothek verwenden.

## Grundlegende Datumsfunktionen

1. `date.create(2018, 12, 31, 12, 30, 00)`

Diese Funktion kannst du verwenden, um ein neues Datumsobjekt mit den angegebenen Werten für Jahr, Monat, Tag, Stunde, Minute und Sekunde zu erstellen. Ähnlich wie bei `os.date`.

2. `date.tostring(906000490, 'yyyyMMdd')`

Diese Funktion wandelt eine numerische Darstellung eines Datums (in Sekunden seit dem 1. Januar 1970) in eine formatierte String-Darstellung um, die auf dem angegebenen Format basiert.

**Beispiel mit `log()`:**

```lua
local formattedDate = date.tostring(906000490, 'yyyyMMdd')
log("Formatted Date: " .. formattedDate)
```

3. `date.parse('20171231', 'yyyyMMdd')`

Diese Funktion analysiert eine String-Darstellung eines Datums auf der Grundlage des angegebenen Formats und wandelt sie in eine numerische Darstellung um (Sekunden seit dem 1. Januar 1970).

**Beispiel mit `log()`:**

```lua
local numericalDate = date.parse('20171231', 'yyyyMMdd')
log("Numerical Date: " .. numericalDate)
```

4. `date.addyear(data.mydate.getluadate(), 2)`

Diese Funktion fügt eine bestimmte Anzahl von Jahren zu einem gegebenen Datumsobjekt hinzu.

5. `date.addday(data.mydate.getluadate(), 2)`

Diese Funktion fügt eine bestimmte Anzahl von Tagen zu einem gegebenen Datumsobjekt hinzu.

6. `date.addmonth(data.mydate.getluadate(), 2)`

Diese Funktion fügt eine bestimmte Anzahl von Monaten zu einem gegebenen Datumsobjekt hinzu.

7. `date.addhour(data.mydate.getluadate(), 2)`

Diese Funktion fügt eine bestimmte Anzahl von Stunden zu einem gegebenen Datumsobjekt hinzu.

8. `date.addminute(data.mydate.getluadate(), 2)`

Diese Funktion fügt eine bestimmte Anzahl von Minuten zu einem gegebenen Datumsobjekt hinzu.

9. `date.addsecond(data.mydate.getluadate(), 2)`

Diese Funktion fügt eine bestimmte Anzahl von Sekunden zu einem gegebenen Datumsobjekt hinzu.

10. `date.difference(date1, date2)`

Diese Funktion berechnet die Zeitdifferenz in Sekunden zwischen zwei Datumsobjekten.

**Beispiel mit `log()`:**

```lua
local date1 = date.parse('20230101', 'yyyyMMdd')
local date2 = date.parse('20230102', 'yyyyMMdd')
local differenceInSeconds = date.difference(date1, date2)
log("Time Difference in Seconds: " .. differenceInSeconds)
```

11. `date.getweeknumberofyear(data.mydate.getluadate())`

Diese Funktion berechnet die Kalenderwoche des angegebenen Datumsobjekts.

**Beispiel mit `log()`:**

```lua
local weekNumber = date.getweeknumberofyear(data.mydate.getluadate())
log("Calendar Week Number: " .. weekNumber)
```

12. `date.calculateshiftduration('08:00', '16:00', '10:00', '10:15')`

Diese Funktion berechnet die Dauer einer Schicht auf der Grundlage der angegebenen Startzeit, Endzeit, Pausenstartzeit und Pausenendzeit.

**Beispiel mit `log()`:**

```lua
local shiftDuration = date.calculateshiftduration('08:00', '16:00', '10:00', '10:15')
log("Shift Duration: " .. shiftDuration)
```

Die Verwendung von `log()` in diesen Beispielen ermöglicht es dir, die relevanten Informationen in der Protokolldatei für die Überwachung, das Debugging und andere Protokollierungszwecke innerhalb deines Peakboard-Projekts zu erfassen.
