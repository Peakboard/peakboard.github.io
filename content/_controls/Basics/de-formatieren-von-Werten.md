---
layout: article
title: Formatieren von Werten
menu_title: Formatieren von Werten
description: Formatieren von Werten
lang: de
weight: 20
ref: con-20
redirect_from:
 - /misc/03-de-formatieren-von-Werten.html
 - /misc/de-formatieren-von-Werten.html
---

Viele Peakboard Controls werden dazu genutzt Werte darzustellen, beispielsweise Diagramme oder Text Controls. Verschiedene Datentypen wie Zahlen, Datumsangaben oder Texte erfordern dabei unterschiedliche Formatierungen. Zum Beispiel werden Zahlen oft mit Dezimalstellen oder Tausendertrennzeichen formatiert, während Datumsangaben in einem spezifischen Format wie DD.MM.YYYY dargestellt werden sollen, obwohl sie rein technisch in einem anderen Format vorliegen.

### Format von Werten bearbeiten

Für die Bearbeitung der Werte gibt es an verschiedenen Stellen der Controls einen [Format bearbeiten] Dialog.
Du hast dort jeweils die Möglichkeit bestimmte vordefinierte Formate über ein Drop-down-Menü auszuwählen (1).

Die vorgefertigten Formate funktionieren nur dann, wenn die Eingangsdaten von Peakboard korrekt erkannt werden.

Folgende Optionen stehen dort zur Verfügung:

* Zahl
* Zahl mit 2 Dezimalstellen
* Währung
* Prozentzahl
* Prozentzahl mit 2 Dezimalstellen
* Datum (dd.MM.yyyy)
* Datum (MM/dd/yyyy)
* Datum & Zeit (dd.MM.yyyy HH:mm)
* Datum & Zeit (MM/dd/yyyy HH:mm)
* Zeit (HH:mm)
* Intervall (hh:mm hours)
* Intervall (mm:ss minutes)
* Intervall (dd days hh hours)

Benötigst du weitere Einstellmöglichkeiten oder möchtest ein ganz eigenes Format definieren, kannst du den Dialog über das [...]-Symbol (2) öffnen. Der Screenshot zeigt das Text Control.

![Text Control Werte formatieren](/assets/images/Controls/format/de_format-01.png)

Hast du den [Format bearbeiten] Dialog geöffnet, kannst du im linken Bereich eine Formatart (1) wählen, die du dann im rechten Bereich bearbeiten kannst. Zur Verfügung stehen:

* Zahl
* Datum/Uhrzeit
* Intervall

Für jede Formatart können detaillierte Einstellungen getroffen werden.

![Format bearbeiten Dialog](/assets/images/Controls/format/de_format-02.png)

### Zahlenformat bearbeiten

Im geöffneten Dialog wird ganz oben ein Beispiel (1) angezeigt, wie das Format mit den aktuell gewählten Einstellungen aussehen würde.
Darunter kannst du die formatspezifischen Einstellungen (2) für Zahlen vornehmen. Du kannst dort Dezimalstellen, Trennzeichen, Prä- und Suffixe und einen Multiplikator festlegen.
Über das Fehlerbehandlung Drop-down-Menü (3) ganz unten kannst du auswählen was passieren soll wenn das Format nicht angewendet werden kann.

![Zahlenformat bearbeiten](/assets/images/Controls/format/de_format-03.png)

### Datum/Uhrzeit bearbeiten

Auch bei Datum/Uhrzeit wird ganz oben ein Beispiel (1) angezeigt, wie das Format mit den aktuell gewählten Einstellungen aussehen würde.
Darunter kannst du die formatspezifischen Einstellungen (2) für Datum/Uhrzeit vornehmen. Du kannst dort das Ausgabeformat definieren. Das Eingabeformat kann entweder automatisch erkannt werden oder ebenfalls von dir definiert werden, falls die Erkennung nicht richtig funktioniert.
Über das Fehlerbehandlung Drop-down-Menü (3) ganz unten kannst du auch hier auswählen, was passieren soll, wenn das Format nicht angewendet werden kann.

![Datum/Uhrzeit bearbeiten](/assets/images/Controls/format/de_format-04.png)

Folgende Format-Werte kannst du für Datum/Uhrzeit nutzen:

#### Datum

{% include styled_table.html %}
| **Formatbezeichner** | **Beschreibung**                        | **Beispiel**                                                                               |
|------------------|---------------------------------------------|--------------------------------------------------------------------------------------------|
| "d"       | Der Tag des Monats, von 1 bis 31.                  | 2009-06-01T13:45:30 -> 1<br>2009-06-15T13:45:30 -> 15                                      |
| "dd"      | Der Tag des Monats, von 01 bis 31.                 | 2009-06-01T13:45:30 -> 01<br>2009-06-15T13:45:30 -> 15                                     |
| "ddd"     | Der abgekürzte Name des Wochentags.                | 2009-06-15T13:45:30 -> Mon (en-US)                                                         |
| "dddd"    | Der vollständige Name des Wochentags.              | 2009-06-15T13:45:30 -> Monday (en-US)                                                      |
| "M"       | Der Monat, von 1 bis 12.                           | 2009-06-15T13:45:30 -> 6                                                                   |
| "MM"      | Der Monat, von 01 bis 12.                          | 2009-06-15T13:45:30 -> 06                                                                  |
| "MMM"     | Der abgekürzte Name des Monats.                    | 2009-06-15T13:45:30 -> Jun (en-US)                                                         |
| "MMMM"    | Der vollständige Name des Monats.                       | 2009-06-15T13:45:30 -> June (en-US)                                                   |
| "y"       | Das Jahr, von 0 bis 99.                            | 0001-01-01T00:00:00 -> 1<br>0900-01-01T00:00:00 -> 0<br>1900-01-01T00:00:00 -> 0<br>2009-06-15T13:45:30 -> 9<br>2019-06-15T13:45:30 -> 19 |
| "yy"      | Das Jahr, von 00 bis 99.                           | 0001-01-01T00:00:00 -> 01<br>0900-01-01T00:00:00 -> 00<br>1900-01-01T00:00:00 -> 00<br>2019-06-15T13:45:30 -> 19 |
| "yyy"     | Die Jahreszahl mit mindestens drei Ziffern.        | 0001-01-01T00:00:00 -> 001<br>0900-01-01T00:00:00 -> 900<br>1900-01-01T00:00:00 -> 1900<br>2009-06-15T13:45:30 -> 2009 |
| "yyyy"    | Die Jahreszahl als vierstellige Zahl.              | 0001-01-01T00:00:00 -> 0001<br>0900-01-01T00:00:00 -> 0900<br>1900-01-01T00:00:00 -> 1900<br>2009-06-15T13:45:30 -> 2009 |
| "yyyyy"   | Die Jahreszahl als fünfstellige Zahl.              | 0001-01-01T00:00:00 -> 00001<br>2009-06-15T13:45:30 -> 02009                               |
| "g", "gg" | Der Zeitraum oder die Epoche.                      | 2009-06-15T13:45:30.6170000 -> A.D.                                                        |
| "/"       | Das Datumstrennzeichen.                            | 2009-06-15T13:45:30 -> / (en-US)                                                           |

#### Zeit

{% include styled_table.html %}
| **Formatbezeichner** | **Beschreibung**                        | **Beispiel**                                                                               |
|------------------|---------------------------------------------|--------------------------------------------------------------------------------------------|
| "h"       | Die Stunde, mit einer 12-Stunden-Uhr von 1 bis 12. | 2009-06-15T01:45:30 -> 1<br>2009-06-15T13:45:30 -> 1                                       |
| "hh"      | Die Stunde, mit einer 12 Stunden Uhr von 01 bis 12. | 2009-06-15T01:45:30 -> 01<br>2009-06-15T13:45:30 -> 01                                    |
| "H"       | Die Stunde, mit einer 24-Stunden-Uhr von 0 bis 23. | 2009-06-15T01:45:30 -> 1<br>2009-06-15T13:45:30 -> 13                                      |
| "HH"      | Die Stunde, mit einer 24-Stunden-Uhr von 00 bis 23. | 2009-06-15T01:45:30 -> 01<br>2009-06-15T13:45:30 -> 13                                    |
| "m"       | Die Minute, von 0 bis 59.                          | 2009-06-15T01:09:30 -> 9<br>2009-06-15T13:29:30 -> 29                                      |
| "mm"      | Die Minute, von 00 bis 59.                         | 2009-06-15T01:09:30 -> 09<br>2009-06-15T01:45:30 -> 45                                     |
| "s"       | Die Sekunde, von 0 bis 59.                         | 2009-06-15T13:45:09 -> 9                                                                   |
| "ss"      | Die Sekunde, von 00 bis 59.                        | 2009-06-15T13:45:09 -> 09                                                                  |
| "f"       | Die Zehntelsekunden in einem Datums- und Zeitwert. | 2009-06-15T13:45:30.6170000 -> 6<br>2009-06-15T13:45:30.05 -> 0                            |
| "ff"      | Die Hundertstel einer Sekunde in einem Datums- und Zeitwert. | 2009-06-15T13:45:30.6170000 -> 61<br>2009-06-15T13:45:30.0050000 -> 00           |
| "fff"     | Die Millisekunden in einem Datums- und Zeitwert.   | 6/15/2009 13:45:30.617 -> 617<br>6/15/2009 13:45:30.0005 -> 000                            |
| "ffff"    | Die Zehntausendstel einer Sekunde in einem Datums- und Zeitwert. | 2009-06-15T13:45:30.6175000 -> 6175<br>2009-06-15T13:45:30.0000500 -> 0000   |
| "fffff"   | Die Hunderttausendstel einer Sekunde in einem Datums- und Zeitwert. | 2009-06-15T13:45:30.6175400 -> 61754<br>6/15/2009 13:45:30.000005 -> 00000 |
| "ffffff"  | Die Millionstel einer Sekunde in einem Datums- und Zeitwert. | 2009-06-15T13:45:30.6175420 -> 617542<br>2009-06-15T13:45:30.0000005 -> 000000   |
| "fffffff" | Die zehn Millionstel einer Sekunde in einem Datums- und Zeitwert. | 2009-06-15T13:45:30.6175425 -> 6175425<br>2009-06-15T13:45:30.0001150 -> 0001150 |
| "F"       | Wenn ungleich Null, die Zehntelsekunden in einem Datums- und Zeitwert. | 2009-06-15T13:45:30.6170000 -> 6<br>2009-06-15T13:45:30.0500000 -> (no output) |
| "FF"      | Wenn ungleich Null, die Hundertstelsekunden in einem Datums- und Zeitwert. | 2009-06-15T13:45:30.6170000 -> 61<br>2009-06-15T13:45:30.0050000 -> (no output) |
| "FFF"     | Wenn ungleich Null, die Millisekunden in einem Datums- und Zeitwert. | 2009-06-15T13:45:30.6170000 -> 617<br>2009-06-15T13:45:30.0005000 -> (no output) |
| "FFFF"    | Wenn ungleich Null, die Zehntausendstel einer Sekunde in einem Datums- und Zeitwert. | 2009-06-15T13:45:30.5275000 -> 5275<br>2009-06-15T13:45:30.0000500 -> (no output) |
| "FFFFF"   | Wenn ungleich Null, die Hunderttausendstelsekunde in einem Datums- und Zeitwert. | 2009-06-15T13:45:30.6175400 -> 61754<br>2009-06-15T13:45:30.0000050 -> (no output) |
| "FFFFFF"  | Wenn ungleich Null, die Millionstel einer Sekunde in einem Datums- und Zeitwert. | 2009-06-15T13:45:30.6175420 -> 617542<br>2009-06-15T13:45:30.0000005 -> (no output) |
| "FFFFFFF" | Wenn ungleich Null, die zehn Millionstel einer Sekunde in einem Datums- und Zeitwert. | 2009-06-15T13:45:30.6175425 -> 6175425<br>2009-06-15T13:45:30.0001150 -> 000115 |
| "t"       | Das erste Zeichen des AM/PM-Bezeichners.           | 2009-06-15T13:45:30 -> P (en-US)                                                           |
| "tt"      | Der AM/PM-Bezeichner                               | 2009-06-15T13:45:30 -> PM (en-US)                                                          |
| "K"       | Informationen zur Zeitzone.                        | Various examples depending on the kind of DateTime value used                              |
| "z"       | Stundenabweichung von der UTC, ohne führende Nullen. | 2009-06-15T13:45:30-07:00 -> -7                                                          |
| "zz"      | Stundenabweichung von der UTC, mit einer führenden Null für einen einstelligen Wert. | 2009-06-15T13:45:30-07:00 -> -07                         |
| "zzz"     | Stunden und Minuten, die von UTC abweichen.        | 2009-06-15T13:45:30-07:00 -> -07:00                                                        |
| ":"       | Das Zeittrennzeichen.                              | 2009-06-15T13:45:30 -> : (en-US)                                                           |

#### Datum/Uhrzeit: Sonstige

{% include styled_table.html %}
| **Formatbezeichner** | **Beschreibung**                        | **Beispiel**                                                                               |
|------------------|---------------------------------------------|--------------------------------------------------------------------------------------------|
| "string"  | Trennzeichen für String-Literale.                  | 2009-06-15T13:45:30 ("arr:" h:m t) -> arr: 1:45 P                                          |
| "%"       | Legt das folgende Zeichen als benutzerdefinierten Formatbezeichner fest. | 2009-06-15T13:45:30 (%h) -> 1                                        |
| "\"       | Das Escape-Zeichen.                                | 2009-06-15T13:45:30 (h \\h) -> 1 h                                                         |
| Jedes andere Zeichen | Das Zeichen wird unverändert in den Ergebnis-String kopiert. | 2009-06-15T01:45:30 (arr hh:mm t) -> arr 01:45 A                      |

### Intervall bearbeiten

Wie bei den anderen Formatarten wird ganz oben ein Beispiel (1) angezeigt, wie das Format mit den aktuell gewählten Einstellungen aussehen würde.
Darunter kannst du die formatspezifischen Einstellungen (2) für Intervalle vornehmen. Du kannst dort das Ausgabeformat definieren und auswählen welches Eingabeformat vorliegt.
Über das Fehlerbehandlung Drop-down-Menü (3) ganz unten kannst du auch hier auswählen, was passieren soll, wenn das Format nicht angewendet werden kann.

![Intervall bearbeiten](/assets/images/Controls/format/de_format-05.png)

Folgende Format-Werte kannst du für Intervall nutzen:

#### Tage

{% include styled_table.html %}
| **Formatbezeichner**  | **Beschreibung**                        | **Beispiel**                                                                             |
|-------------------|---------------------------------------------|------------------------------------------------------------------------------------------|
| "d", "%d"       | Die Anzahl der ganzen Tage im Zeitintervall.                                                    | "%d" --> "6" "d\.hh\:mm" --> "6.14:32" |
| "dd"-"dddddddd" | Die Anzahl der ganzen Tage im Zeitintervall, ggf. mit führenden Nullen aufgefüllt.         | "ddd" --> "006" "dd\.hh\:mm" --> "06.14:32" |

#### Stunden

{% include styled_table.html %}
| **Formatbezeichner**  | **Beschreibung**                        | **Beispiel**                                                                             |
|-------------------|---------------------------------------------|------------------------------------------------------------------------------------------|
| "h", "%h"       | Die Anzahl der ganzen Stunden im Zeitintervall, die nicht als Teil von Tagen gezählt werden. Einstellige Stunden haben keine führende Null. | "%h" --> "14" "hh\:mm" --> "14:32" |
| "hh"            | Die Anzahl der ganzen Stunden im Zeitintervall, die nicht als Teil von Tagen gezählt werden. Einstellige Stunden haben eine führende Null. | "hh" --> "14" "hh" --> 08 |

#### Minuten

{% include styled_table.html %}
| **Formatbezeichner**  | **Beschreibung**                        | **Beispiel**                                                                             |
|-------------------|---------------------------------------------|------------------------------------------------------------------------------------------|
| "m", "%m"       | Die Anzahl der ganzen Minuten im Zeitintervall, die nicht als Teil von Stunden oder Tagen gezählt werden. Einstellige Minuten haben keine führende Null. | "%m" --> "8" "h\:m" --> "14:8" |
| "mm"            | Die Anzahl der ganzen Minuten im Zeitintervall, die nicht als Teil von Stunden oder Tagen gezählt werden. Einstellige Minuten haben eine führende Null. | "mm" --> "08" "d\.hh\:mm\:ss" --> 6.08:05:17 |

#### Sekunden

{% include styled_table.html %}
| **Formatbezeichner**  | **Beschreibung**                        | **Beispiel**                                                                             |
|-------------------|---------------------------------------------|------------------------------------------------------------------------------------------|
| "s", "%s"       | Die Anzahl der ganzen Sekunden im Zeitintervall, die nicht als Teil von Stunden, Tagen oder Minuten gezählt werden. Einstellige Sekunden haben keine führende Null. | "%s" --> 12 "s\.fff" --> 12.965 |
| "ss"            | Die Anzahl der ganzen Sekunden im Zeitintervall, die nicht als Teil von Stunden, Tagen oder Minuten gezählt werden. Einstellige Sekunden haben eine führende Null. | "ss" --> 06 "ss\.fff" --> 06.965 |

#### Sekundenbruchteile

{% include styled_table.html %}
| **Formatbezeichner**  | **Beschreibung**                        | **Beispiel**                                                                             |
|-------------------|---------------------------------------------|------------------------------------------------------------------------------------------|
| "f", "%f"       | Die Zehntelsekunden eines Zeitintervalls.                                                                   | "f" --> 8 "ss\.f" --> 06.8 |
| "ff"            | Die Hundertstel einer Sekunde in einem Zeitintervall.                                                   | "ff" --> 89 "ss\.ff" --> 06.89 |
| "fff"           | Die Millisekunden in einem Zeitintervall.                                                           | "fff" --> 895 "ss\.fff" --> 06.895 |
| "ffff"          | Die Zehntausendstel einer Sekunde in einem Zeitintervall.                                       | "ffff" --> 8954 "ss\.ffff" --> 06.8954 |
| "fffff"         | Die Hunderttausendstel einer Sekunde in einem Zeitintervall.                                | "fffff" --> 89543 "ss\.fffff" --> 06.89543 |
| "ffffff"        | Die Millionstel einer Sekunde in einem Zeitintervall.                                   | "ffffff" --> 895432 "ss\.ffffff" --> 06.895432 |
| "fffffff"       | Die Zehnmillionstel einer Sekunde in einem Zeitintervall.                           | "fffffff" --> 8954321 "ss\.fffffff" --> 06.8954321 |
| "F", "%F"       | Die Zehntelsekunden in einem Zeitintervall. Wenn die Ziffer Null ist, wird nichts angezeigt.                      | "%F": 3 "ss\.F": 03. |
| "FF"            | Die Hundertstel einer Sekunde in einem Zeitintervall. Nachkommende Nullen oder zwei Nullen werden nicht berücksichtigt. | "FF": 32 "ss\.FF": 03.1 |
| "FFF"           | Die Millisekunden in einem Zeitintervall. Nachkommende Nullen werden nicht mitgerechnet.                    | "FFF": 329 "ss\.FFF": 03.1 |
| "FFFF"          | Die Zehntausendstel einer Sekunde in einem Zeitintervall. Nachkommende Nullen werden nicht mitgerechnet. | "FFFF": 3291 "ss\.FFFF": 03.1 |
| "FFFFF"         | Die Hunderttausendstel einer Sekunde in einem Zeitintervall. Nachkommende Nullen werden nicht mitgerechnet. | "FFFFF": 32917 "ss\.FFFFF": 03.1 |
| "FFFFFF"        | Die Millionstel einer Sekunde in einem Zeitintervall. Nachkommende Nullen werden nicht angezeigt.  | "FFFFFF": 329179 "ss\.FFFFFF": 03.1 |
| "FFFFFFF"       | Die Zehnmillionen einer Sekunde in einem Zeitintervall. Nachkommende Nullen oder sieben Nullen werden nicht angezeigt. | "FFFFFF": 3291791 "ss\.FFFFFF": 03.19 |

#### Intervalle: Sonstige

{% include styled_table.html %}
| **Formatbezeichner**  | **Beschreibung**                        | **Beispiel**                                                                             |
|-------------------|---------------------------------------------|------------------------------------------------------------------------------------------|
| "string"        | Trennzeichen für String-Literale.                                                                        | "hh':'mm':'ss" --> "14:32:17" |
| "\"             | Das Escape-Zeichen.                                                                                        | "hh\:mm\:ss" --> "14:32:17" |
| Jedes andere Zeichen | Jedes andere Zeichen ohne Escpae-Zeichen wird als benutzerdefiniertes Format interpretiert      |                                   |
