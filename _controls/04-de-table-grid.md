---
layout: article
title: Table Grid   
menu_title: Table Grid
description: Information über Peakboard Designer Table Grid Control.
lang: de
ref: con-04
---

Das Control Table Grid ist dazu gedacht, Daten tabellarisch darzustellen. Es ist neben dem einfachen Textblock das am häufigsten genutzte Control. Bitte beachten Sie zunächst folgende allgemeine Infos und wiederkehrende Bedienpatterns für Steuerelemente:

[Allgemeine Eigenschaften](/controls/01-de-allgemeine-eigenschaften.html)

[Verwalten von Schriftarten mit dem Font-Manager](/misc/04-de-fonts.html)

[Scripte in dynamischen Eigenschaften](/scripting/02-de-dynamischen-eigenschaften.html)

[Formatieren von Werten](/misc/03-de-formatieren-von-Werten.html)


Nachdem ein Table Grid per Drag and Drop aus der Toolbox rechts oben auf den Screen gezogen wurde, wird es mit Hilfe der Eigenschaft Source mit einer tabellarischen Datenquelle verbunden. Dadurch entstehen im Tabellen-Steuerelement gleich automatisch Spalten, die der Originaldatenquelle entsprechen und dann einfach abgeändert werden können. Ein Doppelklick auf das Control öffnet den Spalten-Dialog. Hier können die einzelnen Spalten konfiguriert werden, z.B. ihre Position mit den kleinen Pfeiltasten, die Spaltenüberschrift (Caption) oder die Breite. Die Breite wird in Pixel definiert. „Auto“ definiert die Breite automatisch so, dass sie immer genauso breit ist, wie der breiteste Inhalt. Ein * in der Breite ist dynamisch. Der komplette zur Verfügung stehende Platz wird unter allen * - Spalten einfach gleichmäßig aufgeteilt. Deshalb ist * auch die Standard-Einstellung für alle Spalten.

![image_1](/assets/images/Controls/Table-Grid/ControlsTableGrid01.png)

Weniger oft genutzte Spalten-Eigenschaften verbergen sich hinter dem Edit-Button, z.B. die Funktion für die Wert-Formatierung.

![image_1](/assets/images/Controls/Table-Grid/ControlsTableGrid02.png)

Im Folgenden sind alle Eigenschaften aufgelistet, die nicht bereits unter den Links von oben besprochen wurden.

| Properties  |	Description |
|-------------|---------------|
| Active Cell |	 definiert die Farbe, mit der eine markierte Zelle dargestellt wird, falls die Tabelle auf einem Touchscreen benutzt wird.|
| Active Row  |	definiert die Farbe, mit der eine markierte Zeile dargestellt wird, falls die Tabelle auf einem Touchscreen benutzt wird.|
| Scrollable  |	 definiert, ob die Tabelle eine Scrollbar bekommen soll, falls der Inhalt größer als die Tabelle ist. Die Funktion macht natürlich nur auf einem Touchscreen Sinn.|
| Border Color |	Farbe des Randes |
| Border Size |		Dicke des Randes in Pixeln |
| Dynamic Height |	Definiert, ob die Tabelle so dargestellt werden sollte, als würde sie keine definierte Größe besitzen. Diese Option wird häufig dann verwendet, wenn man eine Tabelle mit an den Inhalt angepasster Höhe haben möchte, die so aussieht, als wäre sie genauso hoch, wie der Inhalt selbst. |
| Show Header |	definiert, ob die Spaltenüberschriften angezeigt werden sollen.|
| Show Row Grid Lines |	definiert, ob eine Linie zwischen den Zeilen angezeigt werden soll. |

> Es kommt in der Praxis sehr häufig vor, dass Zellen oder Zeilen  in Abhängigkeit des Dateninhalts formatiert werden sollen. Für diese Anforderung gibt es einen eigenen Artikel, den Sie [hier]() finden.
