---
layout: article
title: Allgemeine Eigenschaften
menu_title: Allgemeine Eigenschaften
description: Allgemeine Eigenschaften
lang: de
weight: 100
ref: con-100
redirect_from:
  - /controls/01-de-allgemeine-eigenschaften.html
---

Alle Controls, die in der Toolbox oben rechts zur Verfügung stehen, haben Eigenschaften. Dazu gehören zum einen spezielle Eigenschaften, die nur für das jeweilige Control gelten aber auch allgemeine Eigenschaften, die fast bei jedem oder zumindest bei vielen Controls vorkommen. Damit nicht auf jeder Hilfe-Seite immer alle Eigenschaften wieder und wieder erklärt werden müssen, sind die Eigenschaften, die bei mehr als einem Control auftauchen, in der folgenden Liste zusammengefasst:

| **Eigenschaft**   | **Beschreibung** |
|------------|-------------|
| Name       | ist ein eindeutiger Name für das Control (ohne Sonderzeichen), um es von Skripten aus anzusteuern. Nur wenn das Control tatsächlich von Skripten aus genutzt wird, muss ein Name vergeben werden. |
| Height     | ist die Höhe in Pixel.
| Margin     | kann nicht direkt verändert werden, sondern repräsentiert die Position des Controls auf dem Board (x,y-Koordinate)|
| Visible    | wird üblicherweise von Skripten aus gesetzt, um nach einer gewissen Logik ein Control sichtbar / unsichtbar zu machen. |
| Scripts    | um ein Control nach einer bestimmten Logik sichtbar / unsichtbar zu machen. |
| Width      | ist die Breite in Pixel.|
| Events     | Über diese Eigenschaft kann ein Dialog aufgerufen werden, der ein oder mehrere Skripte enthält, die beim Eintreten von Ereignissen des Controls aufgerufen werden.|
| Font       | repräsentiert eine Schrift aus dem Font Manager. Manche Controls haben mehrere Font-Eigenschaften, z.B. das Table Grid: Eine für die Kopfzeile, eine für den Rest.	|
| Background | ist die Farbe des Hintergrunds. |
| Foreground | ist die Farbe des Vordergrunds (was genau der "Vordergrund" ist, hängt vom Control ab).|
