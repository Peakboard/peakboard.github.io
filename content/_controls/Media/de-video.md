---
layout: article
title: Video
menu_title: Video
description: Information über Peakboard Designer Video Control.
lang: de
weight: 320
ref: con-320
redirect_from:
  - /controls/de-video.html
---

Das Video-Control ist eine interaktive Control-Funktion, die es ermöglicht, Videos in deine Visualisierung zu integrieren. Neben der Anzeige von statischen Erklärvideos oder Hintergrund-Loops unterstützt Peakboard das dynamische Laden von Videoinhalten aus verschiedenen Quellen wie Web-URLs, lokalen Netzwerkpfaden oder Cloud-Ressourcen. Auch kann das Control dazu verwendet werden, problemlos reine Audio-Wiedergaben abzuspielen, da es auch MP3-Dateien unterstützt.
Du findest das Video-Control im Peakboard Designer in der Gruppe Medien & Dokumente (1). Ziehe das Icon per Drag-and-drop in deinen Designer oder platziere es mit einem Doppelklick auf deine Arbeitsfläche.

![image_1](/assets/images/Controls/Video/video_01.png)

# Konfiguration und Eigenschaften
## 1 Datenquelle und Videoauswahl
Ein Video-Control kann auf unterschiedliche Weise mit Inhalten gefüllt werden. Klicke das Control doppelt an, um den Konfigurationsdialog zu öffnen:
* Statische Ressource: Wähle ein Video aus deinen lokalen Ressourcen aus, das fest in der Anwendung gespeichert ist (z. B. eine Montageanleitung). Dieses kann eine lokale Datei oder ein Stream sein (1a, 1b).
* Dynamische Verknüpfung (Datenbindung): Verknüpfe das Control mit einer Datenquelle oder einer Variablen (über die Datenanbindung auf der linken Seite), die einen Pfad oder eine URL enthält. Das Video wird dann zur Laufzeit automatisch geladen oder aktualisiert.

![image_2](/assets/images/Controls/Video/video_02.png)

## 2 Aussehen und Steuerung
In den Eigenschaften auf der rechten Seite kannst du das Verhalten und die Darstellung des Videos präzise steuern:
1.	Dauerschleife (Daten): Bestimme, ob das Video nach dem Ende automatisch von vorne beginnt (1).
2.	Stumm (Daten): Lege fest, ob das Video standardmäßig mit oder ohne Ton abgespielt wird (2).
3.	Automatisch starten (Daten): Aktiviere diese Option, wenn das Video sofort nach dem Start der Visualisierung automatisch abgespielt werden soll. Um ein Video manuell zu starten oder zu pausieren, benötigt es ein weiteres Control-Tool, z.B. ein Icon, um über ein Skript das Video zu starten bzw. zu pausieren (3).

![image_3](/assets/images/Controls/Video/video_03.png)

# Scripting
Das Video-Control bietet spezifische Befehle, um die Wiedergabe dynamisch zu beeinflussen.
## Beispiel: Video per Button starten und stoppen
In diesem Beispiel nutzen wir zwei Buttons, um ein Video manuell zu steuern. Wähle dazu zwei Buttons bzw. Icons, mit denen Du das Video beispielsweise startest und pausierst.

Um das Video mit den Buttons im Script-Editor zu bearbeiten, vergebe dem Video-Control einen Namen unter „In Skripten verwenden“.
Schritte im Script-Editor:
1.	Öffne den Script-Editor des "Start"-Buttons unter Tapped.
2.	Wähle unter der Kategorie deines Video-Controls den Block „Start“.
3.	Füge den Block „Ins Log schreiben“ hinzu und trage „Video gestartet“ ein.
4.	Wiederhole den Vorgang für einen "Pause"-Button mit dem Block „Pause“.
5. Starte die Vorschau und überprüfe im Log (zweites Icon von links), ob Video korrekt gestartet und pausiert wird.

In diesem Video wird nochmal verdeutlicht, wie das Skript für dieses Beispiel aufgebaut und auf erfolgreiche Funktion geprüft wird:

![image_4](/assets/images/Controls/Video/video_04_gif.gif)

# Kamera

Das Video-Control spielt nicht nur Dateien und Streams ab - mit dem Quellentyp **[Aufnahmegerät]** zeigt es das Live-Bild einer am Gerät angeschlossenen Kamera. Damit wird eine Peakboard-Anwendung zur Arbeitsplatzkamera: Der Bediener sieht, was die Kamera sieht, kann ein Standbild daraus aufnehmen und weiterschicken.

## Kamera konfigurieren

Klicke das Control doppelt an und setze **[Typ]** auf **[Aufnahmegerät]**. Danach greifen die kameraspezifischen Eigenschaften:

1. **[Standard-Kamera-Index]** - welche Kamera gezeigt wird, wenn mehrere angeschlossen sind. `0` ist die erste Kamera. Der Index lässt sich auch an Daten binden, sodass ein Screen entscheiden kann, welche Kamera er zeigt.
2. **[Kameraauflösung]** - die Auflösung, in der die Kamera streamen soll, von `160 x 120 (QQVGA)` bis `3840 x 2160 (4K)`. Eine kleinere Auflösung kostet weniger Bandbreite und weniger CPU; bietet die Kamera die gewünschte Auflösung nicht an, wird die nächstgelegene verfügbare verwendet.
3. **[Kameraeinstellungen anzeigen]** - blendet zur Laufzeit eine kleine Leiste über dem Live-Bild ein. Dort wählt der Bediener die Kamera aus; bei genau zwei angeschlossenen Kameras gibt es zusätzlich eine Schaltfläche zum Umschalten zwischen Front- und Rückkamera.

## Ein Bild aus der Kamera aufnehmen

Das aktuelle Kamerabild lässt sich per Skript aufnehmen und direkt weitergeben - typischerweise aus dem Ereignis [Tapped] eines Buttons neben dem Live-Bild. Das aufgenommene Standbild wird als JPG abgelegt.

Vergib dem Video-Control unter [In Skripten verwenden] einen Namen und nutze eine dieser Funktionen, zum Beispiel im Skript eines Buttons:

```lua
-- das aktuelle Kamerabild per Mail verschicken
screens['Screen1'].Camera1.sendasmail('john@doe.com', 'Schadensmeldung', 'siehe Anhang', 0, 0)

-- es in den Dateimanager des Peakboard Hub legen
screens['Screen1'].Camera1.storeinhub('/schaeden', 'station-4.jpg', 0, 0)
```

`sendasmailinbody` verschickt das Bild im Mailtext statt als Anhang. Die beiden letzten Argumente sind Breite und Höhe des aufgenommenen Bildes; `0, 0` behält die Größe des Live-Bildes bei.

<div class="box-tip" markdown="1">
**Tipp:**

Ein Kamerabild dokumentiert einen Zustand zu einem Zeitpunkt - eine beschädigte Palette, einen vollen Behälter, ein falsches Etikett. Kombiniere die Aufnahme mit einer Variablen, die die Auftrags- oder Stationsnummer trägt, und benenne die Datei danach. So lässt sich das Bild auch später noch zuordnen.
</div>
