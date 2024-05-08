---
layout: article
title: Styled List
menu_title: Styled List
description: Informationen über das Styled List Control im Peakboard Designer
lang: de
draft: true
weight: 245
ref: con-245
redirect_from:
  - /controls/10-de-list-view.html
  - /controls/de-list-view.html
---

Mit dem Styled List Control kannst du die Zeilen einer Datenquelle mithilfe eines selbst definierten Templates darstellen.
Dies eignet sich vor allem dann, wenn du wiederholende Inhalte identisch in Form von Zeilen darstellen möchtest. Das Styled List Control ist in seinem Verhalten dem [Styled Tile Control](/controls/14-de-tilecontrol.html) und dem [Styled Tile Kollektion Control](/controls/11-de-tile-view.html) sehr ähnlich.

### Grundlage für die Darstellung mit dem Styled List Control

In diesem Beispiel sollen aktuelle Vorfälle (1) von Maschinen verschiedener Arbeitsstationen in Listenform dargestellt werden, um einen Live-Überblick zu bieten.

![Arbeitsstationen](/assets/images/Controls/StyledList/de_styledlist-01.png)

Die Grundlage für die Darstellung ist eine [Peakboard Hub Liste](/data_sources/de-peakboard-hub-list.html) in der die Daten der verschiedenen Arbeitsstationen gespeichert werden. Diese Gesamtliste wird mit einem [Dataflow](/dataflows/de-erste-schritte.html) weiterverarbeitet, der dann mit dem Styled List Control dargestellt wird.

![Peakboard Hub Liste](/assets/images/Controls/StyledList/de_styledlist-02.png)

### Styled List Control hinzufügen

Ziehe das Styled List Control (1) per Drag-and-drop auf die Arbeitsfläche, um es der Anwendung hinzuzufügen.

Es öffnet sich automatisch der Dialog zur Verknüpfung der gewünschten Datenquelle. In diesem Beispiel wird der vorher erwähnte Dataflow [DF_ErrorsList] (2) ausgewählt. Bestätige die Auswahl mit [OK] (3).

![Datenquelle auswählen](/assets/images/Controls/StyledList/de_styledlist-03.png)

Positioniere dann das Control an der gewünschten Stelle. Im Bereich [Allgemeines] (1) kannst du die exakte Position und Größe pixelgenau definieren. Im Bereich [Aussehen] (2) kannst du optische Anpassungen für das gesamte Control vornehmen. In diesem Beispiel wurde der Hintergrund auf Transparent geändert.

Im Bereich [Daten] kannst du eine andere Datenquelle auswählen (3), die gewählte Datenquelle aktualisieren (4) oder löschen (5). Im Abschnitt [Orientierung] wählst du aus, ob die Zeilen vertikal oder horizontal dargestellt werden sollen (6) und ob das Control scrollbar sein soll (7).

![Attribute](/assets/images/Controls/StyledList/de_styledlist-04.png)

### Template erstellen

Im nächsten Schritt erstellst du ein Template, mit dem die einzelnen Zeilen der Datenquelle später dargestellt werden sollen.
Mache einen Doppelklick auf das Control auf der Arbeitsfläche (1) oder klicke auf das [...]-Symbol (2), um den Dialog zur Erstellung des Templates zu öffnen.

![Template erstellen](/assets/images/Controls/StyledList/de_styledlist-05.png)

Der Editor für das Template ähnelt im Grundaufbau dem Peakboard Designer, beschränkt dabei aber die Arbeitsfläche auf die Größe des Controls. Über [Breite] (1) und [Höhe] (2) legst du die Größe fest, in der die einzelnen Zeilen der Datenquelle dargestellt werden sollen. Mit dem [Hintergrund] Drop-down (3) definierst du eine Hintergrundfarbe für die einzelnen Zeilen.

![Template Editor](/assets/images/Controls/StyledList/de_styledlist-06.png)

Wie aus dem Peakboard Designer bekannt, kannst du jetzt verschiedene Controls zum Template hinzufügen und diese mit den Spalten der gewählten Datenquelle verknüpfen. Für das Beispiel wurden drei Text Controls platziert, die mit den Spalten des Zeitstempels, des Arbeitsstation-Namens und dem Namen des Fehlers verknüpft wurden (1). Bestätige dann die Erstellung des Templates mit [OK] (2).

![Controls hinzufügen](/assets/images/Controls/StyledList/de_styledlist-07.png)

### Bedingte Templates

Mit dem Styled Tile Control ist es möglich, analog zur [bedingten Formatierung](/controls/Basics/de-cf.html), anhand von definierten Regeln separate Templates zur Darstellung der Zeilen zu nutzen. Klicke auf das [...]-Symbol (1) im Abschnitt [Bedingte Templates], um den Dialog für die bedingten Templates zu öffnen.

Hier kannst du neue Templates hinzufügen (2). Diese übernehmen automatisch das Standard Template. Du kannst die hinzugefügten Templates umbenennen (3), bearbeiten (4), deren Reihenfolge ändern (5), Regeln für die Anzeige definieren (6) oder die Templates wieder löschen (7).

![Bedingte Templates](/assets/images/Controls/StyledList/de_styledlist-08.png)
