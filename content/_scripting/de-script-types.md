---
layout: article
title: Skript-Typen
menu_title: Skript-Typen
description: Informationen über die im Peakboard Designer verfügbaren Skript-Typen
lang: de
weight: 901
ref: scr-901
redirect_from:
---

Peakboard verwendet Lua als Skriptsprache. Jedes Skript ist einem der folgenden Skript-Typen zugeordnet, der bestimmt, *wann* das Skript ausgeführt wird. Im Explorer erscheinen sie als Ordner unter [Scripts].

## Timer

Ein Timer-Skript läuft zeitgesteuert – entweder wiederholt in einem gleichbleibenden Rhythmus oder einmalig. Jeder Timer hat ein Intervall (in Millisekunden) und einen Modus:

* **Endless** – wiederholt sich unbegrenzt im angegebenen Intervall.
* **Once** – feuert einmal nach Ablauf des Intervalls und stoppt dann.
* **Manual** – feuert nicht automatisch, sondern wird aus einem Lua-Skript gestartet. Nach dem Start feuert er einmalig nach dem konfigurierten Intervall als Verzögerung.
* **On schedule** – feuert gemäß einem Zeitplan aus Wochentag und Uhrzeit.

## Funktionen

Hier definierst du wiederverwendbare Lua-Funktionen, die aus jedem anderen Skript heraus aufgerufen werden können. Jedes Skript läuft in einem eigenen, isolierten Gültigkeitsbereich – eine in einem Skript definierte Funktion kann also nicht aus einem anderen Skript aufgerufen werden. Gemeinsame Funktionen sind der Mechanismus, um Logik über Timer, Events und Aktivierungsskripte hinweg zu teilen und doppelten Code zu vermeiden.

## Globale Events

Globale Events gelten für die gesamte Anwendung und reagieren auf Eingaben oder Systemzustände. Das `e`-Objekt im Skript enthält den ereignisspezifischen Kontext.

#### Swiped (Up / Down / Left / Right)
Wird ausgelöst, wenn der Benutzer auf dem Touchscreen in die jeweilige Richtung wischt. Der Wisch-Effekt kann alternativ auch mit der Maus erzeugt werden. Diese Events tragen keine Kontextdaten.

#### Key pressed
Wird bei jedem einzelnen Tastendruck ausgelöst. `e.key` ist der virtuelle Tastencode, `e.modifier` die Modifier-Taste; mit `e.handled = true` unterbindest du die weitere Verarbeitung. Nützlich für Eingaben über einen [Presenter](/misc/de-presenter.html), eine Tastatur oder ein ähnliches Gerät.

#### Key input
Sammelt alle eingegebenen Zeichen, bis Enter/Return gedrückt wird, und feuert dann einmalig mit dem vollständigen Text in `e.text`. Ideal für Barcode-Scanner und RFID-Leser, die Zeichen gefolgt von Enter senden. Mit `peakboard.clearinput()` leerst du den Puffer vor einem Scan.

#### Script error
Wird ausgelöst, wenn ein Lua-Skriptfehler auftritt, sodass du zentral darauf reagieren kannst.

#### Data source update failed
Wird ausgelöst, wenn die Aktualisierung einer Datenquelle fehlschlägt. `e.datasourcename` und `e.errormessage` beschreiben den Fehler.

#### Call incoming / Call started / Call ended / VoIP signal received
VoIP/SIP-Telefonie-Events. Sie liefern den Remote-Endpunkt, den Anrufer und – bei `VoIP signal received` – das empfangene DTMF-Signal.

## Bei Bildschirmaktivierung

Ein hier definiertes Skript wird jedes Mal ausgeführt, wenn der entsprechende Screen aktiviert, also geladen und angezeigt wird. Das ist der richtige Ort für die einmalige Einrichtung eines Screens.

## Bei Datenaktualisierung

Dieses Skript wird ausgeführt, nachdem eine Datenquelle einen Aktualisierungszyklus abgeschlossen hat (das `Refreshed`-Event des Datenelements). Lege es unter [Scripts] – [After data reload] über [Add] für die entsprechende Datenquelle an oder per Rechtsklick auf die Datenquelle.

## Für Controls

Hier findest du alle Skripte, die über die [Events]-Funktion eines Controls erstellt wurden. Ein Event ist eine bestimmte Aktion, die ein Control auslösen kann. Die folgende Liste zeigt jedes Control-Event und die Controls, die es unterstützen:

#### Tapped (Button, Text, Textfeld, Rechteck, Bild, Icon)
Wird ausgelöst, wenn das Control über Touch, Maus oder ähnliche Eingabe aktiviert wird.

#### TextChanged (Textfeld, Date Picker)
Wird ausgelöst, wenn sich die Texteingabe des Controls ändert.

#### SelectionChanged (Dropdown-Liste)
Wird ausgelöst, wenn ein neues Element in der Dropdown-Liste ausgewählt wird.

#### Checked / Unchecked (Toggle Button, Checkbox, Radio Button)
`Checked` wird ausgelöst, wenn der Zustand des Controls von False nach True wechselt, `Unchecked`, wenn er von True nach False wechselt.

#### Toggled (Toggle Button, Checkbox)
Wird ausgelöst, wenn der Zustand des Controls in beide Richtungen wechselt (False → True oder True → False).

#### ValueChanged (Slider)
Wird ausgelöst, wenn sich der Wert des Sliders ändert.

#### DataRowLoaded / CellTapped (Tabelle)
`DataRowLoaded` wird ausgelöst, sobald eine neue Tabellenzeile geladen wird; `CellTapped`, wenn eine Zelle innerhalb der Tabelle über Touch, Maus oder ähnliche Eingabe aktiviert wird.

#### ElementDropped (List View, Tile View)
Wird ausgelöst, wenn ein Element innerhalb der List View oder Tile View fallen gelassen wird (Neuanordnung per Drag-and-drop).

#### AppointmentTapped / EmptySpaceTapped (Scheduler)
`AppointmentTapped` wird ausgelöst, wenn ein Termin aktiviert wird; `EmptySpaceTapped`, wenn ein leerer Bereich des Schedulers aktiviert wird.
