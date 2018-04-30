---
layout: article
title: Formatieren von Tabellen-Grids
menu_title: Formatieren von Tabellen-Grids
description: Formatieren von Tabellen-Grids
lang: de
ref: scr-05
---

Table Grids sind wenig überraschend die häufigste Form, tabellarische Daten darzustellen. Das Table Grid bietet die Möglichkeit, Daten zu binden und die Spalten wunschgemäß anzupassen: Schriftart, Orientierung, Formatierung, Überschrift usw. – Es gibt allerdings häufig Attribute, die nicht statisch gesetzt werden sollen, sondern abhängig von den Dateninhalten. Darüberhinaus kann es sinnvoll sein, die Dateninhalte vor der Ausgabe in der Tabelle einer Anpassung zu unterziehen, die die Standard-Formatierung nicht unterstützt. Dieser Artikel nimmt sich exemplarisch beiden Forderungen an:

Die Datengrundlage soll aus SAP kommen. Es werden offene Lieferungen angezeigt. Neben der Liefernummer und dem Kundennamen wird auch das Gewicht der Lieferung ausgegeben. Die folgende Tabelle zeigt die Rohdaten. Nur die Gewichtsangabe ist mit Bordmitteln formatiert und rechtsbündig ausgerichtet. Es soll das Gewicht in grün ausgegeben werden, wenn es kleiner als 10kg ist und mit einem roten Hintergrund, falls es schwerer ist. Darüber hinaus sollen die führenden Nullen bei der LieferNr abgeschnitten werden.



![image_1](/assets/images/scripting/format-table/Scripting_TableGrid_Formatieren_01.png)



Die Formatierungs- und Änderungslogik wird in ein Script abgebildet. Das Script wird für jede Tabellenzeile genau einmal durchlaufen unmittelbar bevor sie in der Visualisierung ausgegeben wird. Sie erreichen den Script-Editor vom Events-Attribut des Table Grid Elements aus:



![image_1](/assets/images/scripting/format-table/Scripting_TableGrid_Formatieren_02.png)



Innerhalb des Events gibt es die Variable e. Sie repräsentiert die aktuelle Tabenllezeile.

* e.Data gibt Zugriff auf die Rohdaten (z.B. e.Data.MeineDatenspalte).
* e.TextControl erlaubt Zugriff auf das Steuerelement, das den Text repräsentiert (z.B. e.TextControl.Text = „Mein neuer Inhalt“)  e.
* e.CellControl erlaubt Zugriff auf die Zelle selbst (z.B. e.CellControl.Backgground = Brushes.Green).
table.getcelltext(e, [Index]) gibt den Wert der Spalte mit dem entsprechenden Index zurück. Hierbei entspricht 0 der ersten Spalte, 1 der zweiten, …

Daraus ergibt sich folgendes einfaches Script, um die Anforderungen von oben umzusetzen (Schriftfarbe, Zellfarbe, führende Nullen abschneiden):



```lua
if math.tonumber(table.getcelltext(e, 4)) < 10 then
 e.Columns[4].TextControl.Foreground = Brushes.Green
else
 e.Columns[4].CellControl.Background = Brushes.Red
end

e.Columns[0].TextControl.Text = string.sub(table.getcelltext(e, 0), -8)
```

Hier die Voransicht mit entsprechendem Formatierungsscript:



![image_1](/assets/images/scripting/format-table/Scripting_TableGrid_Formatieren_03.png)
