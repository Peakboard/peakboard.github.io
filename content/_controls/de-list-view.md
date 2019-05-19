---
layout: article
title: ListView
menu_title: ListView
description: Information über Peakboard Designer ListView Control.
lang: de
weight: 1000
ref: con-1000
redirect_from:
  - /controls/10-de-list-view.html
---

Das ListView-Control ist in seinem Verhalten dem [Tile Control](/controls/14-de-tilecontrol.html) und dem [Tile View](/controls/11-de-tile-view.html) sehr ähnlich. 
Wie das Anlegen eines Templates für das ListView- oder TileView-Control funktioniert wird beim [Tile Control](/controls/14-de-tilecontrol.html) Schritt für Schritt erklärt.
Während beim [Tile Control](/controls/14-de-tilecontrol.html) die Anordnung der einzelnen Tiles dem Entwickler freigestellt ist, werden beim ListView automatisch, solange Einträge in der Datenquelle vorhanden sind, Tile Elemente gemäß des verfügbaren Bereichs bereitgestellt. Nachfolgender Screenshot verdeutlicht dies.

![image_1](/assets/images/Controls/ListView/list1.png)

Die Anordnung der Elemente kann dabei vertikal oder horizontal erfolgen. Die Einstellung hierfür erfolgt unter Orientierung, wo über eine Dropdown-Liste die gewünschte Ausrichtung getroffen werden kann. 

Ebenfalls ist es mit der ListView-Control möglich, anhand einer getroffenen Regel die Anzeige zu verändern.
Nachfolgendes Beispiel nutzt hierfür ebenfalls die im [Tile Control](/controls/14-de-tilecontrol.html) verwendete Liste, welche um die Spalte Status erweitert wurde:

![table1](/assets/images/Controls/ListView/table1.png)

Für die Visualisierung soll eine Regel festgelegt werden, welche einen Warnhinweis enthält, wenn es zum Stillstand einer Produktionslinie kommt.
Dafür wird das angelegte ListView-Element selektiert und anschließend ein zusätzliches Template über die drei Punkte neben Vorlagenselektion angelegt (1). 
In einem ersten Schritt wird über das Zahnrad-Symbol (2) der Regel-Editor geöffnet. Über das + Symbol (3) wird eine neue Regel angelegt. 
Für das Beispiel soll immer dann ein alternatives Template angezeigt werden, wenn der Status einer Produktionslinie gleich Stop wie Stillstand ist. (4)
Im zweiten Schritt soll die für die gerade angelegte Regel gültige Vorlage erstellt werden. Dazu wird der Regel-Editor über OK verlassen (5) und der Template-Editor geöffnet (6).

![image_2](/assets/images/Controls/ListView/list2.png)

Dieser ist identisch zu den Tile, ListView oder TileView Editoren und verwendet die gleiche Datenbasis.
Zunächst wird die Größe gleich der Größe des ListView-Elements gesetzt, damit sich das alternative Template nahtlos in die Liste eingefügt (1).
Anschließend können die Controls wie bekannt per Drag&Drop auf die Oberfläche gezogen werden und mit den entsprechenden Spalten der Datenquelle verknüpft werden.

![image_3](/assets/images/Controls/ListView/list3.png)

Über OK wird der Editor verlassen und das Template gespeichert.

Zuletzt kann das Ergebnis in der Preview betrachtet werden. Es zeigt sich, dass bei der Produktionslinie 3 ein Stillstand vorliegt. Dies deckt sich mit den Inputdaten der eingangs gezeigten Tabelle.

![image_4](/assets/images/Controls/ListView/list4.png)

