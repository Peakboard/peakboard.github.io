---
layout: article
title: Table Grid   
menu_title: Table Grid
description: Information über Peakboard Designer Table Grid Control.
lang: de
weight: 210
ref: con-210
redirect_from:
  - /controls/04-de-table-grid.html
  - /controls/de-table-grid.html
---

Das Control Table Grid ist dazu gedacht, Daten tabellarisch darzustellen. Es ist neben dem einfachen Textblock das am häufigsten genutzte Control. 
Bitte beachten Sie zunächst folgende allgemeine Infos und wiederkehrende Bedienpatterns für Steuerelemente:

[Allgemeine Eigenschaften](/controls/01-de-allgemeine-eigenschaften.html)

[Verwalten von Schriftarten mit dem Font-Manager](/misc/04-de-fonts.html)

[Formatieren von Werten](/misc/03-de-formatieren-von-Werten.html)

Nachdem ein Table Grid per Drag and Drop aus der Toolbox rechts oben auf den Screen gezogen wurde, wird es mit Hilfe der Eigenschaft Data Source mit einer tabellarischen Datenquelle verbunden. 
Dadurch entstehen im Tabellen-Steuerelement gleich automatisch Spalten, die der Originaldatenquelle entsprechen und dann einfach abgeändert werden können. 


Ein Doppelklick auf das Control öffnet den Spalten-Dialog. Hier können die einzelnen Spalten konfiguriert werden.  
Dafür stehen folgende Eigenschaften zur Verfügung:

* Position: Die Position der Spalten kann per Drag-and-Drop angepasst werden. Eine Verschiebung von Oben nach Unten entspricht dabei einer Verschiebung von Links nach Rechts.
* Spaltenüberschrift: Die Spaltenüberschrift kann über *Caption* angepasst werden.
* Breite: Die Breite kann in drei verschiedenen optionen eingestellt werden:
	* Fill definiert die Breite automatisch so, dass sie immer die maximale Breite annimmt. 
	* Cut versucht das Gegenteil und minimiert die Breite so weit wie möglich.
	* Pixel legt eine feste Breite für die jeweilige Spalte fest.
* Position des Inhalts: Der Inhalt der Spalten kann über *Alignment* bestimmt werden.
* Format: Soll der Inhalt in einem bestimmten Format (z.B. als Prozentzahl) dargestellt werden, lässt sich dies für die gesamte Spalte einstellen. In [diesem Artikel](https://help.peakboard.com/misc/de-formatieren-von-Werten.html) wird erklärt, wie ein Format angepasst werden kann.
* Schriftart: Jede einzelne Spalte kann eine Schriftart zugeordnet werden. Diese muss dafür unter *Specific Font* ausgewählt werden.

![image_1](/assets/images/Controls/Table-Grid/ControlsTableGrid01.png)


Wenn die Daten in der Tabelle manipuliert werden sollen lohnt es sich vor dem anlegen des Table Grid Controls einen [Dataflow](https://help.peakboard.com/dataflows/de-erste-schritte.html) anzulegen.


Abschließend sind im Folgenden sind alle Eigenschaften aufgelistet, die spezifisch für das Table Grid Controll sind und daher nicht unter dem Link von oben aufgelistet wurden.

{% include styled_table.html %}
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


Es kommt in der Praxis sehr häufig vor, dass Zellen oder Zeilen  in Abhängigkeit des Dateninhalts formatiert werden sollen. Für diese Anforderung gibt es einen eigenen Artikel, den Sie [hier](/scripting/05-de-formatieren.html) finden.