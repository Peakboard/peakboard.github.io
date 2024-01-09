---
layout: article
title: Quick Tipp - Variablen per API Funktionen und HTTP POST auf mehreren Peakboard Boxen synchronisieren
menu_title: Quick Tipp - Variablen synchronisieren
description: Quick Tipp - Variablen per API Funktionen und HTTP POST auf mehreren Peakboard Boxen synchronisieren
lang: de
weight: 910
ref: scr-910
redirect_from:
---

Es gibt verschiedene Wege wie du mit Peakboard Variablen synchronisieren kannst, so dass diese auf mehreren Peakboard Boxen gleich sind. Ein Beispiel dafür ist die API Freigabe von Variablen und die Nutzung der [Peakboard Box Datenquelle](/data_sources/de-peakboard-data-source.html). Über sie kannst du auf die Variablen oder Listen einer anderen Peakboard Box zugreifen und diese periodisch abfragen.

Je nach Anwendungsfall hat diese Methode den Nachteil, dass Werte, die sich während dem Nachladeintervall mehrfach ändern, eventuell nicht erfasst werden. Um dies zu vermeiden, musst du ein sehr kurzes Intervall wählen, was mehr Belastung nach sich zieht.
Zudem musst du zwei separate Datenquellen anlegen, um gleichzeitig Variablen und Listen abrufen zu können.

Diese Nachteile kannst du mit der Nutzung eines API HTTP POST auf der Senderseite und einer Funktion auf der Empfänger-Peakboard Box umgehen. Voraussetzung für die Nutzung ist, dass sich alle genutzten Peakboard Boxen im gleichen Netzwerk befinden.

## Konfigurieren der Senderseite

Auf der Senderseite benötigst du eine oder mehrere [Variablen und/oder Listen](/scripting/de-variables.html), die auf der Empfängerseite ebenfalls existieren und die synchronisiert werden sollen. Im folgenden Beispiel wurde eine Variable vom Datentyp String genutzt. Lege die Variable mit einem Rechtsklick auf [Variablen] und einem Klick auf [Variable hinzufügen] (1) an.

![Variable hinzufügen](/assets/images/scripting/quicktipps/de_http-post_01.png)

Gib der Variable einen Namen (1) und wähle den Datentyp String (2).

![Variable konfigurieren](/assets/images/scripting/quicktipps/de_http-post_02.png)

Zum Befüllen der Variable wird ein [Textfeld Control](/controls/Input/de-textbox.html) (1) verwendet. Aktiviere in den Attributen die Verwendung in Skripten (2) und gib dem Control einen Namen (3). In deinem Anwendungsfall kann die Variable oder Liste auch auf andere Weise befüllt werden.

![Textfeld Control](/assets/images/scripting/quicktipps/de_http-post_03.png)

Zum Senden der Daten nutzt du in diesem Fall ein Skript im Tapped Event (1) eines [Button Controls](/controls/Input/de-button.html) (2).
Für deinen Anwendungsfall kannst du aber beispielsweise auch ein Timer-Skript nutzen.

![Button Control](/assets/images/scripting/quicktipps/de_http-post_04.png)

Das Skript für den HTTP POST sieht folgendermaßen aus:

```lua
data.Testvariable = screens['Screen1'].Textfeld.text

local creds = http.createbasicauth('username', 'password')
local header = {{name='content-type', value='application/json'}, {name='Authorization', value=creds}}
local body = '{"Testparameter": "' .. data.Testvariable ..'"}'
http.post('https://192.168.20.2:40405/api/functions/Testfunction', header, body)
```

Die erste Zeile des Skripts überschreibt die Variable mit dem Wert, der in das Textfeld Control eingegeben wurde, sobald der Button angeklickt wird.

Bei der zweiten Zeile des Skripts handelt es sich um eine Basic-Authentifizierung aus Benutzername und Passwort der Peakboard Box.
Die dritte Zeile erstellt einen Header für die Anfrage und enthält den Content-Type (application/json), sowie die zuvor erstellte Authentifizierung.
Die vierte Zeile erstellt den Body der Anfrage und definiert den Parameter der Empfängerfunktion, der überschrieben werden soll und die Variable, die dafür genutzt werden soll.
Die letzte Zeile ist der HTTP POST mit der IP-Adresse und dem Port der Empfänger-Peakboard Box, sowie der Funktion, die genutzt wird, um den Wert zu überschreiben.

![Tapped Event Skript](/assets/images/scripting/quicktipps/de_http-post_05.png)

## Konfigurieren der Empfängerseite

In einer weiteren Anwendung, die auf die Empfänger-Peakboard Box geladen wird, definierst du jetzt die Funktion, die die Variable überschreibt. Voraussetzung ist, dass in dieser Anwendung ebenfalls eine Variable mit dem gleichen Namen und Datentyp wie auf der Senderseite angelegt ist.

Um die Funktion zu erstellen, klappst du im Explorer den Bereich [Skripte] aus und machst einen Rechtsklick auf den Ordner [Funktionen]und wählst dann [Hinzufügen] (1) aus.

![Funktion hinzufügen](/assets/images/scripting/quicktipps/de_http-post_06.png)

In den Einstellungen der Funktion gibst du der Funktion den Namen (1), den du im Skript auf der Senderseite im HTTP Post festgelegt hast. Aktiviere außerdem die Checkbox [Geteilte Funktion] (2).

![Funktionseinstellungen](/assets/images/scripting/quicktipps/de_http-post_07.png)

Füge dann einen Parameter hinzu (1) und nenne ihn so wie den im Skript auf der Senderseite definierten Parameter. Wähle als Datentyp String (2). Bestätige die Einstellungen der Funktion dann mit [OK] (3).

![Parameter](/assets/images/scripting/quicktipps/de_http-post_08.png)

Es öffnet sich automatisch der Skript-Editor für die Funktion. Du kannst den Skript-Editor auch jederzeit durch einen Doppelklick auf die Funktion im Explorer öffnen.

Hier definierst du jetzt mit dem folgenden Skript, dass die Variable auf der Empfänger-Peakboard Box mit dem Parameter aus der Funktion überschrieben wird.

```lua
data.Testvariable = Testparameter
```

Bestätige die Erstellung mit [Speichern & Schließen].

![Funktionsskript](/assets/images/scripting/quicktipps/de_http-post_09.png)

Ziehe als letzten Schritt die Variable (2) auf der Empfängerseite als Text Control (2) auf die Arbeitsfläche. So kannst du später sehen, ob alles funktioniert.

![Text Control](/assets/images/scripting/quicktipps/de_http-post_10.png)

Um das zu testen, lädst du die beiden Anwendungen jeweils auf die entsprechende Peakboard Box.
Jetzt kannst du in der Anwendung etwas in das Textfeld (1) der Senderseite eingeben und mit einem Klick auf den Button (2) bestätigen.

![Test](/assets/images/scripting/quicktipps/de_http-post_11.png)

Dadurch wird die Eingabe an die Empfängerseite übertragen und im Text Control angezeigt.

![Ergebnis](/assets/images/scripting/quicktipps/de_http-post_12.png)
