---
layout: article
title: Ressourcen - Basics
menu_title: Basics
description: Ressourcen - Basics
lang: de
weight: 100
ref: resources-100
redirect_from:
 - /misc/01-de-ressourcen.html
 - /misc/de-ressourcen.html
---

Neben den verschiedenen [Datenquellen](/data_sources/), [Dataflows](/dataflows/), [Controls](/controls/), [Variablen, Skripten](/scripting/) und Bildschirmen, sind Ressourcen eine wichtige Säule eines Peakboard-Projekts.

### Ressourcen im Peakboard Designer

Eine Ressource kann alles Mögliche sein, was an Zusatzmaterial für eine Visualisierung benötigt wird, wie zum Beispiel Bilder, [Schriftarten](/controls/Basics/de-custom-fonts.html) oder Datendateien wie Excel oder Ähnliches.

<div class="box-warning" markdown="1">
**Wichtiger Hinweis**

Wenn Dateien wie Excel als lokale Ressource im Projekt hinterlegt werden, handelt es sich dabei nicht um Live-Daten!
Wird die Datei auf dem Betriebssystem geändert, ändern sich die Daten der im Projekt hinterlegten Ressource nicht.
Wähle eine der anderen Möglichkeiten, um Echtzeitdaten anzuzeigen.
</div>

Im einfachsten Fall wird die jeweilige Ressource direkt, statisch im Peakboard Projekt hinterlegt. Eine Ressource kann aber auch dynamisch sein und zum Beispiel über eine URL abgerufen werden, in einem Cloudspeicher liegen oder auf einem freigegebenen Laufwerk innerhalb desselben Netzwerks.

Du findest den Bereich für die Ressourcen im Explorer. Durch einen Rechtsklick auf [Ressourcen] (1) öffnest du das Menü. Hier kannst du die verschiedenen Ressourcen-Typen (2) hinzufügen.

Die folgenden Datentypen können derzeit hinzugefügt werden:

* **[Lokale Ressourcen:](/resources/de-resources-local.html)** Statische Dateien aus dem Dateisystem, die nicht mehr verändert werden
* **[Netzwerk-Ressourcen:](/resources/de-resources-network.html)** Freigegebene Netzwerk-Dateien, auf die mit einem Domänen-Nutzer zugegriffen wird
* **[Web-Ressourcen:](/resources/de-resources-web.html)** Ressourcen, auf die der Zugriff per URL erfolgt
* **[Cloud-Ressourcen:](/resources/de-resources-cloud.html)** Ressourcen aus den folgenden Cloudspeichern - Dropbox, Google Drive, OneDrive und SharePoint

![Ressourcen-Menü](/assets/images/resources/de_resources-intro-01.png)

Um die Ressourcen in deinem Projekt zu nutzen ziehst du sie per Drag-and-drop auf den Arbeitsbereich.
Dadurch wird automatisch ein entsprechendes Control erstellt, beispielsweise ein [Bild](/controls/Media/de-image.html) Control oder ein [PDF Viewer](/controls/Document/de-pdf.html) Control.

### Ressourcen-Ordner

Wenn die Anzahl der Ressourceneinträge steigt, ist es sinnvoll, Ressourcen in Ordnern (1) zu organisieren. Du kannst die Dateien einfach per Drag-and-drop in ein Unterverzeichnis ablegen, um auch bei vielen Ressourcen den Überblick zu behalten (2).

![Ressourcen-Ordner](/assets/images/resources/de_resources-intro-02.png)

### Ungenutzte Ressourcen anzeigen und löschen

Wenn du in einem Projekt viele verschiedene Ressourcen verwendest, kann es trotz der Nutzung von Ordnern zur Organisation vorkommen, dass du den Überblick verlierst, welche Ressourcen aktuell auch wirklich genutzt werden. Um die Projektdatei möglichst kleinzuhalten ist es sinnvoll, vor allem lokale Ressourcen die du nicht benötigst, wieder aus dem Projekt zu löschen.

Um auf einen Blick zu sehen, welche Ressourcen derzeit nicht genutzt werden, musst du nicht erst alle hinzugefügten Ressourcen händisch prüfen. Öffne das Ressourcen-Menü mit einem Rechtsklick auf [Ressourcen] und klicke auf [Zeige ungenutzte Ressourcen] (1).

![Ungenutzte Ressourcen finden](/assets/images/resources/de_resources-intro-03.png)

Es öffnet sich ein Dialog, in dem alle Ressourcen angezeigt werden, die aktuell nicht in deinem Projekt verwendet werden.
Prüfe anhand des Namens, ob du die Ressourcen noch benötigst und lösche die Ressourcen, die du nicht mehr benötigst durch einen Klick auf [Delete] (1) in der Spalte [Aktion] und bestätige die Löschung.

![Ungenutzte Ressourcen löschen](/assets/images/resources/de_resources-intro-04.png)
