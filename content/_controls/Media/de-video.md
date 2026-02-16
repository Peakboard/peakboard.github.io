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
•	Statische Ressource: Wähle ein Video aus deinen lokalen Ressourcen aus, das fest in der Anwendung gespeichert ist (z. B. eine Montageanleitung). Dieses kann eine lokale Datei oder ein Stream sein (1a, 1b).
•	Dynamische Verknüpfung (Datenbindung): Verknüpfe das Control mit einer Datenquelle oder einer Variablen (über die Datenanbindung auf der linken Seite), die einen Pfad oder eine URL enthält. Das Video wird dann zur Laufzeit automatisch geladen oder aktualisiert.

![image_2](/assets/images/Controls/Video/video_02.png)

## 2 Aussehen und Steuerung
In den Eigenschaften auf der rechten Seite kannst du das Verhalten und die Darstellung des Videos präzise steuern:
1.	Control-Positionierung (Allgemeines): Lege die Ausrichtung des Elements auf der Arbeitsfläche fest. Mit den ersten acht Symbolen kann das Control schnell an Ecken oder Seitenmitten platziert werden, während das neunte Symbol die gesamte verfügbare Fläche füllt. Das letzte Icon zentriert das Element mittig, wobei die Größe vorab über die manuellen Eingabefelder definiert werden kann (1).
2.	Abstand (Allgemeines): Über die Felder Breite, Höhe, Links und Oben kannst du das Video präzise positionieren. Darunter definierst du einen inneren Abstand für das Video (2). In diesem Bereich kann dem Control ebenfalls ein Titel vergeben werden, der über dem Control erscheint. (2)
3.	Dauerschleife (Daten): Bestimme, ob das Video nach dem Ende automatisch von vorne beginnt (3).
4.	Automatisch starten (Daten): Aktiviere diese Option, wenn das Video sofort nach dem Start der Visualisierung automatisch abgespielt werden soll. Um ein Video manuell zu starten oder zu pausieren, benötigt es ein weiteres Control-Tool, z.B. ein Icon, um über ein Skript das Video zu starten bzw. zu pausieren (3).
5.	Stumm (Daten): Lege fest, ob das Video standardmäßig mit oder ohne Ton abgespielt wird (3).
6.	In Skripten verwenden (Logik): Gib dem Control einen eindeutigen Namen, um es später per Skript zu steuern (z. B. Start/Stopp per Button-Klick) (4).
7.	Bedingte Formatierung (Logik): Über die bedingte Formatierung kannst Du einen bestimmten Prozess bei vorgegebenem Ereignis starten (5).

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
