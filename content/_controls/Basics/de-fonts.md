---
layout: article
title: Verwalten von Schriftformaten mit dem Schriftarten Manager
menu_title: Schriftarten verwalten
description: Verwalten von Schriftformaten mit dem Schriftarten Manager
lang: de
weight: 30
ref: con-30
redirect_from:
 - /misc/04-de-fonts.html
 - /misc/de-fonts.html
 - /misc/05-de-custom-fonts.html
 - /misc/de-custom-fonts.html
 - /controls/Basics/de-custom-fonts.html
---

Zur Verwaltung von Schriftformaten gibt es im Peakboard Designer den Schriftarten Manager.
Um den Schriftarten Manager zu öffnen, klickst du in der Menüleiste auf den [Schriftarten] Button (1)

![Schriftarten Manager öffnen](/assets/images/Controls/fonts/de_fonts-01.png)

Alternativ gelangst du auch von den Orten im Peakboard Designer, an denen du Schriftarten auswählen kannst in den Schriftarten Manager. So findest du zum Beispiel in den Attributen von Controls wie dem Text Control beim Drop-down-Menü zum Auswählen der Schriftart einen Button (1), um die Schriftart anzupassen. Klickst du im Pop-up auf den [...]-Button (2) öffnet sich der Schriftarten Manager.

![Schriftarten Manager alternativ öffnen](/assets/images/Controls/fonts/de_fonts-02.png)

### Schriftarten hinzufügen und verwalten

Im Schriftarten Manager findest du im linken Bereich alle aktuell vorhandenen Schriftarten nach Alphabet aufgelistet (1).
Wenn du ein neues Projekt angelegt hast, findest du dort alle Standard-Schriftarten. Diese können nicht gelöscht werden.
Du kannst die bestehenden Schriftarten im linken Bereich kopieren (2). Dabei werden die Einstellungen der kopierten Schriftart übernommen. Selbst angelegte Schriftarten kannst du hier auch löschen (3). Durch einen Klick auf den Namen der jeweiligen Schriftart öffnest du die Einstellungsoptionen der Schriftart im rechten Bereich (4).

Über den [+]-Button (5) kannst du eine neue Schriftart hinzufügen. Neue hinzugefügte Schriftarten werden immer mit den gleichen Einstellungen angelegt.

![Schriftarten hinzufügen und verwalten](/assets/images/Controls/fonts/de_fonts-03.png)

### Schriftarten bearbeiten

Im rechten Bereich kannst du bei jeder Schriftart Einstellungen vornehmen.

Um zu sehen, welche Veränderungen deine Einstellungen verursachen, findest du im oberen Bereich eine Vorschau der aktuell ausgewählten Schriftart (1). Damit du auch bei hellen Schriftarten erkennst, welche Änderungen du vorgenommen hast, kannst du einen dunklen Hintergrund simulieren. Aktiviere dazu die entsprechende Checkbox (2).

Unterhalb der Vorschau nimmst du deine Einstellungen vor. Du kannst die Schriftfamilie (3) auswählen und die Größe der Schriftart (4) und deren Farbe festlegen (5). Du kannst außerdem festlegen, ob die Schriftart bold, kursiv oder unterstrichen (6) dargestellt werden soll.

![Schriftarten bearbeiten](/assets/images/Controls/fonts/de_fonts-04.png)

### Eine neue Schriftfamilie hinzufügen

Standardmäßig unterstützt der Peakboard Designer eine ganze Reihe von Schriftfamilien.
Falls diese nicht ausreichen, kannst du in deinen Peakboard Projekten auch viele externe Schriftfamilien nutzen. Derzeit ist das Hinzufügen externer Schriftfamilien auf TrueType Fonts mit der Dateiendung .ttf beschränkt. OpenType Fonts mit der Dateiendung .otf können nicht verwendet werden. Wenn dein Unternehmen eigene Hausschriften besitzt, sind die Marketing- oder die IT-Abteilung oder der Corporate Design Styleguide meist gute Anlaufstellen für den Erhalt der entsprechenden Dateien.

Um eine neue Schriftfamilie zum Peakboard Designer hinzuzufügen, klickst du im Schriftarten Manager im Bearbeitungsbereich der Schriftart, die du verändern möchtest, auf den [+]-Button (1) hinter dem Drop-down-Menü zur Auswahl der Schriftfamilie.

![Schriftfamilie hinzufügen](/assets/images/Controls/fonts/de_fonts-05.png)

Es öffnet sich ein Auswahldialog, in dem du die Datei auf deinem Computer auswählst und mit [Öffnen] das Hinzufügen bestätigst.
Die Datei wird automatisch zu den Ressourcen des aktuellen Projekts hinzugefügt (1).
Jetzt kannst du die Schriftfamilie im Drop-down-Menü auswählen. Externe Schriftfamilien sind am Zusatz [(Custom)] (2) in der Liste leicht zu erkennen.

![Schriftfamilie auswählen](/assets/images/Controls/fonts/de_fonts-06.png)

Alternativ kannst du Schriftfamilien hinzufügen, indem du die TrueType Font Dateien mit der Dateiendung .ttf als lokale Ressource per Drag-and-drop zu den Ressourcen hinzufügst. Die hinzugefügten Schriftfamilien sind dann automatisch im Drop-down-Menü im Schriftarten Manager wie oben beschrieben verfügbar.

### Schriftarten verwenden

Die fertig angelegten und bearbeiteten Schriftarten kannst du jetzt überall im Peakboard Designer verwenden, wo du eine Schriftart definieren kannst, beispielsweise im Text Control.
Dazu wählst du die gewünschte Schriftart (1) im entsprechenden Drop-down-Menü in den Attributen aus.

![Schriftart verwenden](/assets/images/Controls/fonts/de_fonts-07.png)
