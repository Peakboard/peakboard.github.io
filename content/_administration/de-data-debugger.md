---
layout: article
title: Data debugger
menu_title: Data debugger
description: Die Daten einer laufenden Peakboard Box aus dem Peakboard Designer heraus aus der Ferne prüfen und debuggen.
lang: de
weight: 820
ref: admin-820
---

Wenn sich eine Anwendung auf der Peakboard Box anders verhält als in der Vorschau, liegt es fast immer an den Daten: Eine Datenquelle liefert nichts, ein Dataflow filtert zu viel weg, oder ein Skript scheitert erst an den Werten, die vor Ort auftreten. Mit dem Data debugger schaust du dir genau diese Daten an – live auf der laufenden Peakboard Box, von deinem Arbeitsplatz aus.

### Data debugger öffnen

Klicke in der Menüleiste auf das Peakboard Box-Symbol, um die Peakboard Box-Einstellungen zu öffnen, wähle links die gewünschte Peakboard Box aus und wechsle auf den Reiter [Data debugger].

Die Peakboard Box muss online und erreichbar sein. Bei einer gerade nicht verfügbaren Peakboard Box bleiben die Reiter des Dialogs deaktiviert.

Der Data debugger funktioniert über beide Verbindungswege des Peakboard Designers:

* über das **lokale Netzwerk** direkt zur Peakboard Box und
* über die **Cloud-Verbindung**, wenn die Peakboard Box über den Peakboard Hub online angebunden ist.

Du musst dich also nicht im selben Netzwerk wie die Peakboard Box befinden.

### Daten ansehen

Links findest du den Daten-Explorer – dieselbe Struktur, die du aus dem Explorer des Peakboard Designers kennst, aber gefüllt mit dem, was tatsächlich auf der Peakboard Box liegt: Datenquellen, Dataflows, Variablen und Skripte.

Wähle einen Eintrag aus, und der Data debugger holt dessen aktuellen Zustand von der Peakboard Box und zeigt:

* die **Daten**, die der Eintrag gerade enthält, Zeile für Zeile,
* die **Anzahl der Zeilen**,
* die **letzte Ladezeit**, die **durchschnittliche Ladezeit** und den Zeitpunkt des **letzten Reloads** sowie
* einen Bereich **Errors** mit den Fehlern, die zu diesem Eintrag aufgetreten sind.

Das ist der schnellste Weg zu der Frage, auf die es im Supportfall ankommt: Bekommt die Peakboard Box überhaupt die Daten, die du erwartest?

### Reload auslösen

Du schaust nicht nur zu – du kannst den ausgewählten Eintrag auf der Peakboard Box auch auslösen. Die Datenquelle wird auf dem Gerät neu geladen bzw. der Dataflow neu berechnet, und die Vorschau zeigt das Ergebnis sofort. So prüfst du, ob sich eine Datenquelle nach einem Netzwerkproblem wieder fängt, ohne die gesamte Anwendung neu zu starten.

### Der Script debugger

Für Dataflows, Timer-Skripte, Funktionen und Reload-Skripte zeigt der Data debugger zusätzlich den **Script debugger**. Dort steht das Skript, das auf der Peakboard Box läuft. Erwartet das Skript Parameter, kannst du Werte dafür eintragen und es mit [Run script] starten.

Das Skript läuft **auf der Peakboard Box**, nicht auf deinem Rechner – mit den Daten, den Netzwerkzugriffen und der Peripherie des Geräts. Fehler werden darunter aufgelistet. Genau das macht es möglich, Probleme nachzustellen, die nur vor Ort auftreten.

<div class="box-tip" markdown="1">
**Tipp:**

Da das Skript wirklich auf dem Gerät ausgeführt wird, schreibt ein Skript, das in eine Datenbank schreibt oder eine E-Mail versendet, das auch von hier aus. Behalte das im Blick, wenn du eine produktive Peakboard Box debuggst.
</div>
