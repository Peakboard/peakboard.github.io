---
layout: article
title: Schreiben nach Excel
menu_title: Schreiben nach Excel
description: Schreiben nach Excel
lang: de
weight: 1200
ref: scr-1200
redirect_from:
  - /scripting/Samples/12-de-excel.html
---

Damit ein Schreiben nach Excel möglich ist, muss das entsprechende .xls-File als Bridge-Datenquelle über einen ODBC-Request eingebunden werden. Eine Anleitung dazu findet sich [hier](/data_sources/31-de-ODBC-Excel.html).

Nachfolgendes Skript-Beispiel erlaubt es, Werte nach Excel zu schreiben. Mit Hilfe eines Reload()-Befehls wird ein unmittelbares Neuladen der verknüpften Datenquelle ausgelöst.

```lua
Data.MyOdbcExcelDatasource.ExecuteNonQuery('INSERT INTO [MyTable$] (Col1, [Col 2], [Col 3]) VALUES (15, 25, 35)')
Data.MyOdbcExcelDatasource.Reload()
```
Dieses Beispiel findet sich im Peakboard Designer unter Templates -> Scripting, oder kann über diesen [Link](https://github.com/Peakboard/CoolStuff/raw/master/Scripts/WritetoExcel/WritetoExcel.pbmx) heruntergeladen werden.