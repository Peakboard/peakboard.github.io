---
layout: article
title: Färben von Tabellen-Grids
menu_title: Färben von Tabellen-Grids
description: Färben von Tabellen-Grids
lang: de
weight: 904
ref: scr-904
redirect_from:
  - /scripting/05-de-formatieren.html
---

[Table Grids](https://help.peakboard.com/controls/de-table-grid.html) sind wenig überraschend die häufigste Form, tabellarische Daten darzustellen. 
Das Table Grid bietet die Möglichkeit, Daten zu binden und die Spalten wunschgemäß anzupassen: Schriftart, Orientierung, Formatierung, Überschrift usw. – Es gibt allerdings häufig Attribute, die nicht statisch gesetzt werden sollen, sondern abhängig von den Dateninhalten. 
Darüberhinaus kann es sinnvoll sein, die Dateninhalte vor der Ausgabe in der Tabelle einer Anpassung zu unterziehen, die die Standard-Formatierung nicht unterstützt. 
Dieser Artikel nimmt sich exemplarisch beiden Forderungen an:

In der SAP-Tabelle sollen diejenigen Einträge welche in der Spalte "LBKUM" einen Eintrag größer 1.000 haben in Grün angezeigt werden.
Diejenigen welche kleiner als 1.000 sind sollen in Rot dargestellt werden.


![image_1](/assets/images/scripting/format-table/Scripting_TableGrid_Formatieren_01.png)



Die Formatierungs- und Änderungslogik wird in ein Skript abgebildet. 
Das Skript wird für jede Tabellenzeile genau einmal durchlaufen unmittelbar bevor sie in der Visualisierung ausgegeben wird. 
Sie erreichen den Skript-Editor vom Events-Attribut des Table Grid Elements aus:



![image_1](/assets/images/scripting/format-table/Scripting_TableGrid_Formatieren_02.png)



Innerhalb des Events gibt es die Variable e. Sie repräsentiert die aktuelle Tabenllezeile.

* e.Data gibt Zugriff auf die Rohdaten (z.B. e.Data.MeineDatenspalte).
* e.TextControl erlaubt Zugriff auf das Steuerelement, das den Text repräsentiert (z.B. e.TextControl.Text = „Mein neuer Inhalt“)  e.
* e.CellControl erlaubt Zugriff auf die Zelle selbst (z.B. e.CellControl.Backgground = Brushes.Green).
table.getcelltext(e, [Index]) gibt den Wert der Spalte mit dem entsprechenden Index zurück. Hierbei entspricht 0 der ersten Spalte, 1 der zweiten, …

Daraus ergibt sich folgendes einfaches Script, um die Anforderungen von oben umzusetzen:



```lua
if math.tonumber(table.getcelltext(e, 2)) > 1000 then
 e.Columns[4].TextControl.Foreground = Brushes.Green
else
 e.Columns[4].CellControl.Foreground = Brushes.Red
end
```

Hier die Voransicht mit entsprechendem Formatierungsscript:

![image_1](/assets/images/scripting/format-table/Scripting_TableGrid_Formatieren_03.png)
