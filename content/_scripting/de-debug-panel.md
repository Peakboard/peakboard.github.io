---
layout: article
title: Das Debug Panel in der Vorschau
menu_title: Debug Panel
description: Datenquellen, Dataflows und Skripte analysieren, während die Anwendung läuft - direkt neben der Vorschau des Peakboard Designers.
lang: de
weight: 115
ref: scr-115
---

Die Vorschau zeigt dir, wie deine Anwendung aussieht. Das Debug Panel zeigt dir, **warum** sie so aussieht: welche Zeilen eine Datenquelle wirklich geliefert hat, wie lange ihr letztes Laden gedauert hat, was ein Dataflow daraus gemacht hat und in welchen Fehler ein Skript gelaufen ist. Es läuft neben der lebenden Anwendung - du musst also keine Werte mehr ins Log schreiben, um herauszufinden, was passiert.

### Debug Panel öffnen

Starte die Vorschau deines Projekts. In der Leiste am oberen Rand des Vorschaufensters findest du die Schaltflächen der Peakboard Runtime:

* **[Toggle Fullscreen Mode]** - schaltet die Vorschau auf Vollbild. `STRG + F` wechselt ins Vollbild, `ESC` wieder heraus.
* **[Show log]** - blendet das Log ein und aus. Das Symbol färbt sich rot, sobald Fehler protokolliert wurden - so siehst du ein Problem, ohne das Log zu öffnen.
* **[Show Data]** - öffnet das Debug Panel. Der Tastenbefehl `STRG + D` schaltet es ebenfalls um.
* **[Close Runtime]** - beendet die Vorschau.

Das Debug Panel ist zum Testen gedacht und wird deshalb auf einem produktiven Gerät nicht angeboten: In der Vorschau des Peakboard Designers steht es immer zur Verfügung, auf einer Peakboard Box nur dann, wenn für diese Peakboard Box der Debug-Modus eingeschaltet ist.

### Der Daten-Explorer

Das Panel öffnet sich auf der rechten Seite, neben deiner laufenden Anwendung. Die Trennlinie zwischen beiden Hälften lässt sich ziehen - du entscheidest also, wie viel Platz der Anwendung bleibt. Die Schaltfläche in der Kopfzeile des Panels löst es in ein eigenes Fenster heraus, praktisch auf einem zweiten Monitor oder wenn die Anwendung in voller Größe zu sehen sein soll. Die Schaltfläche im herausgelösten Fenster dockt es wieder an.

Links im Panel liegt der Daten-Explorer, mit derselben Struktur wie der Explorer des Peakboard Designers, aber gefüllt mit dem Zustand der laufenden Anwendung: Datenquellen, Dataflows, Variable Lists, Timer-Skripte, Funktionen und Reload-Skripte.

### Was ein Eintrag verrät

Wähle einen Eintrag aus, und du bekommst seinen aktuellen Zustand:

* die **Daten**, die er gerade hält, Zeile für Zeile,
* die Anzahl der **Zeilen** - die schnellste Antwort auf die Frage "liefert er überhaupt etwas?",
* die **durchschnittliche Ladezeit**, die **Ladezeit des letzten Reloads** und den Zeitpunkt des **letzten Reloads** sowie
* bei Dataflows, Timer-Skripten, Funktionen und Reload-Skripten einen Bereich **Errors** mit den Fehlern genau dieses Eintrags.

Die Werte sind die Live-Werte der laufenden Vorschau. Lädt eine Datenquelle nach, während das Panel offen ist, siehst du ihr dabei zu.

Bei Variablen und Variable Lists zeigt das Panel zusätzlich pro Eintrag den Zeitpunkt der **letzten Änderung**. Genau das brauchst du, wenn ein Wert von mehreren Stellen geschrieben wird und du wissen willst, ob es dein Skript war.

### Werte aus dem Panel mitnehmen

Klicke mit der rechten Maustaste auf eine Zelle und wähle **[Copy]**, um ihren Wert in die Zwischenablage zu legen. Das ist der kurze Weg, einen tatsächlich empfangenen Wert in ein Skript, einen Filter oder ein Support-Ticket zu übernehmen, statt ihn vom Bildschirm abzutippen.

<div class="box-tip" markdown="1">
**Tipp:**

Für eine Anwendung, die bereits auf einer Peakboard Box läuft, brauchst du die Vorschau nicht: Der [Data debugger](/administration/de-data-debugger.html) zeigt dieselben Daten des laufenden Geräts aus dem Peakboard Designer heraus.
</div>
