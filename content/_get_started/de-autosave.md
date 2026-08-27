---
layout: article
title: Autosave - ein Projekt nach einem Absturz wiederherstellen
menu_title: Autosave
description: Der Peakboard Designer schreibt alle 20 Sekunden eine Sicherung des geöffneten Projekts und bietet sie nach einem Absturz oder Stromausfall zur Wiederherstellung an.
lang: de
weight: 180
ref: start-180
---

Ein Stromausfall, ein Bluescreen, ein versehentlich geschlossener Peakboard Designer - und eine Stunde Arbeit ist weg. Genau dagegen schreibt der Peakboard Designer im Hintergrund laufend eine Sicherung des Projekts, an dem du gerade arbeitest. Nach einem unerwarteten Ende bekommst du diese Sicherung beim nächsten Start angeboten.

Autosave ist immer aktiv. Es gibt nichts einzuschalten und nichts zu konfigurieren.

### Was wann gesichert wird

Alle **20 Sekunden** schreibt der Peakboard Designer das gerade aktive Projekt in eine Sicherungsdatei. Geschrieben wird nur, was sich tatsächlich geändert hat: Trägt das Projekt keine ungespeicherten Änderungen, wird seine Sicherung wieder entfernt statt neu geschrieben.

Wenn du mit mehreren Projekten in Tabs arbeitest, erfasst der Timer den Tab im Vordergrund. Die anderen Tabs sind deshalb nicht vergessen - ein Tab wird in dem Moment gesichert, in dem du ihn verlässt. So hat jedes geöffnete Projekt eine aktuelle Sicherung.

Die Sicherungen liegen pro Benutzer unter

```
%LOCALAPPDATA%\Peakboard\PeakboardAutoSaves
```

<div class="box-tip" markdown="1">
**Hinweis:**

Die Sicherung ist eine Kopie des Projekts, nicht des Dateipfads. Sie ist ein Netz für den Absturz, kein Ersatz für das Speichern: Speichere dein Projekt weiterhin regelmäßig und lege die Stände, auf die es ankommt, im Peakboard Hub oder in deiner eigenen Dateiablage ab.
</div>

### Ein Projekt nach einem Absturz wiederherstellen

Starte den Peakboard Designer nach einem unerwarteten Ende erneut. Noch bevor der Home Screen erscheint, wirst du gefragt:

> Es gibt ein ungespeichertes Paket aus der vorherigen Sitzung. Möchtest du es laden?

* **[Ja]** - die Sicherung wird als Projekt geöffnet. Sie kommt als Projekt mit ungespeicherten Änderungen und ohne Dateipfad an, deshalb fragt das nächste [Speichern] nach dem Ablageort. Über [Speichern unter] schreibst du sie zurück über deine ursprüngliche Datei - oder in eine neue Datei, wenn du beide Stände behalten willst.
* **[Nein]** - die Sicherung wird verworfen.

In beiden Fällen ist die Sicherungsdatei mit dieser Antwort verbraucht: Sie wird danach gelöscht. Wenn du dir nicht sicher bist, ob du den Stand noch brauchst, antworte mit [Ja] und entscheide bei geöffnetem Projekt - schließen ohne zu speichern kannst du es immer noch.

Gibt es mehrere Sicherungen, bietet der Peakboard Designer die **neueste** an, die nicht gerade von einem anderen laufenden Peakboard Designer benutzt wird. Ein gleichzeitig geöffneter zweiter Peakboard Designer nimmt dem ersten seine Sicherung also nicht weg.

### Wenn keine Frage erscheint

Die Frage erscheint nur, wenn es etwas wiederherzustellen gibt. Es gibt nichts, wenn

* das Projekt keine ungespeicherten Änderungen trug - die Sicherung eines unveränderten Projekts wird beim nächsten Lauf des Timers wieder entfernt, und
* das Projekt im Peakboard Designer regulär geschlossen wurde - beim Schließen wird die Sicherung zusammen mit den Arbeitsdaten des Projekts aufgeräumt.
