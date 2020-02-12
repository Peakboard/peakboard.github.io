---
layout: article
title: Schreiben in einen SAP Funktionsbaustein
menu_title: Schreiben in einen SAP Funktionsbaustein
description: Schreiben in einen SAP Funktionsbaustein
lang: de
weight: 20101
ref: dat-20101
---

Um Daten zurück ins SAP System schreiben zu können, ist es notwendig einen entsprechenden Funktionsbaustein (Your_Function_Module) im SAP System anzulegen.

Zunächst wird im Peakboard Designer eine SAP Datenquelle angelegt (YourSAPDatasource). Diese kann einerseits dafür verwendet werden Daten aus dem SAP System anzuzueigen und zum anderen um Daten zurück zu schreiben.

Dabei kann der zu schreibende Wert aus einer Datenbank oder einer Variablen (PeakboardVariable) stammen.

```lua
local con = data.YourSAPDatasource.getconnection()
-- Connect to SAP system
con.open()
-- Execute XtractQL statements 
local res = sap.execute(con, "EXECUTE FUNCTION 'Your_Function_Module' EXPORTS YourColumn = '" .. data.PeakboardVariable .. "'")
-- Disconnect from SAP system
con.close()
```

|YourSAPDatasource |= Name der angeleten SAP Verbindung|
|Your_Function_Module |= Funktionsbaustein, welcher für das Schreiben nach SAP konfiguriert ist|
|YourColumn |= Spalte des Funktionsbaustein in die die Daten geschrieben werden sollen|
|PeakboardVariable |= Im Peakboard angelegte Variable, welche den zu schreibenden Wert enthält|