---
layout: article
title: Quick Tipp - Per Building Block Remote Funktion ausführen
menu_title: Quick Tipp - Remote Funktion ausführen
description: Quick Tipp - Per Building Block Remote Funktion ausführen
lang: de
weight: 912
ref: scr-912
redirect_from:
---

Der Building Block [Remote Funktion ausführen] ist dazu gedacht, eine Funktion einer bestimmten Peakboard Box Anwendung per Fernzugriff von einer anderen Peakboard Box Anwendung auszuführen.

Ein denkbarer Anwendungsfall für diesen Building Block wäre das Wechseln des aktuellen Bildschirms einer Anwendung, die als Übersicht für eine Produktionshalle gedacht ist, um beispielsweise einen Schichtplan, die aktuelle Wochenkarte der Kantine oder ähnliche Informationen anzuzeigen.
In diesem Fall soll die Funktion von den einzelnen Arbeitsplätzen in der Produktionshalle mit der dortigen Peakboard Box angesteuert werden.

### Anlegen der Funktion auf der Peakboard Box mit der Übersichts-Anwendung

Voraussetzung für die Nutzung der Beispielfunktion ist das Vorhandensein von mehreren Bildschirmen (1) in deiner Anwendung.
Zuerst legst du die Funktion an, die später den Bildschirmwechsel ausführen soll. Mache dazu im Explorer des Peakboard Designers einen Rechtsklick auf [Funktionen] im Bereich [Skripte] und wähle [Hinzufügen] (2) aus.

![Funktion hinzufügen](/assets/images/scripting/quicktipps/de_functions-bb-01.png)

Gib der Funktion einen Namen (1) und aktiviere die Checkbox [Geteilte Funktion] (2). Alle weiteren Einstellungen werden im vorliegenden Fall nicht benötigt. Je nach Anwendungsfall kannst du hier weitere Anpassungen vornehmen. Bestätige den Dialog mit [OK] (3) um in den Skript-Editor zu gelangen.

![Funktionsdialog](/assets/images/scripting/quicktipps/de_functions-bb-02.png)

Hier wählst du den Building Block [Bildschirm wechseln] (1) im Bereich [Visualisierung] im Hauptbereich [FUNKTIONEN]. Im Drop-down des Building Blocks wählst du die Option [nächsten] (2). Beim Ausführen dieses Skripts wird in der Anwendung auf den nächsten Bildschirm gewechselt. Bestätige die Erstellung der Funktion mit [Speichern & Schließen] (3).

![Funktionsskript](/assets/images/scripting/quicktipps/de_functions-bb-03.png)

### Anlegen des Auslösers in der Arbeitsplatz-Anwendung

Ein möglicher Auslöser für den Fernzugriff auf die soeben angelegte Funktion kann beispielsweise ein Button Control sein.
Ziehe das Button Control (1) in der Anwendung für den Arbeitsplatz auf die Arbeitsfläche und gestalte es mit den Attributen passend zu deiner bestehenden Anwendung.
Im Bereich [Logik] öffnest du den Skript-Editor für das Tapped-Event (2).

![Button Control hinzufügen](/assets/images/scripting/quicktipps/de_functions-bb-04.png)

Hier fügst du nun den [Remote Funktion ausführen] Building Block unter [Externe Funktionen] aus dem Bereich [In externen Systemen veröffentlichen] im Hauptbereich [FUNKTIONEN] hinzu. Voraussetzung für die korrekte Verwendung ist, dass die betroffenen Peakboard Boxen mit dem Peakboard Designer verbunden sind und die entsprechenden Anwendungen aktiv sind.
Wähle im ersten Drop-down des Building Blocks (1) die Peakboard Box aus, auf der sich die Anwendung mit der angelegten Funktion befindet. Im zweiten Drop-down (2) werden durch einen Klick auf das Ladesymbol die verfügbaren Funktionen geladen. Wähle die im ersten Schritt erstellte Funktion aus. Bestätige die Erstellung mit [Speichern & Schließen] (3).

![Tapped Event konfigurieren](/assets/images/scripting/quicktipps/de_functions-bb-05.png)

Wenn die Anwendung mit der Funktion für den Screenwechsel nun auf der ersten Peakboard Box aktiv ist und das Tapped-Event in der Anwendung der zweiten Peakboard Box durch einen Klick auf das Button Control ausgelöst wird, wird die Funktion ausgeführt und der Bildschirm auf der ersten Peakboard Box gewechselt.

Das Prinzip dieses Building Blocks kann für viele weitere, auch komplexere Anwendungsfälle entsprechend adaptiert werden.
