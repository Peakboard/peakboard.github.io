---
layout: article
title: Daten hintereinander hängen (Union)
menu_title: Daten hintereinander hängen (Union)
description: Daten hintereinander hängen (Union)
lang: de
weight: 7000
ref: flow-7000
redirect_from:
  - /dataflows/70-de-Daten-hintereinander-haengen.html
---
Beim Join-Schritt haben wir bereits gelernt, wie zwei Tabellen miteinander verknüpft werden. Beim Union-Schritt geht es auch um Verknüpfung, aber das Prinzip ist ein anderes, denn beim Union werden die Daten *hintereinander* und nicht *aneinander* gehängt. Wie das folgende Bild zeigt, ist der Union-Schritt recht primitiv. Er verlang nur die Angabe der anzuhängenden Tabelle. Alle Spalten der anzuhängenden Tabelle, bei denen der Name und der Datentyp übereinstimmen, werden an die entsprechende Spalte der Originaltabelle angefügt. Gibt es keine Entsprechung des Spaltennamens oder stimmt der Datentyp nicht überein, wird die Spalte ignoriert. Für den Fall, dass die Spaltennamen/typen nicht perfekt zueinanderpassen, müssen sie zunächst durch umbenennen oder umformatieren passend gemacht werden.

![Union Join](/assets/images/dataflows/dataflows-union03.png)