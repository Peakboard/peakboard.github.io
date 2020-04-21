---
layout: article
title: Schreiben in einen SAP Funktionsbaustein
menu_title: Schreiben in einen SAP Funktionsbaustein
description: Schreiben in einen SAP Funktionsbaustein
lang: de
weight: 1150
ref: dat-1150
---

Im SAP kann über Peakboard ein beliebiger Funktionsbaustein des SAP Systems aufgerufen werden. Dabei ist es wichtig, dass dieser Funktionsbaustein Remote-fähig ist. Über Peakboard kann der Funktionsbaustein (Z_Function_Module) aufgerufen werden und Exportparameter übergeben werden. Diese können dann innerhalb des Funktionsbausteins auf der Seite von SAP beliebig weiterverarbeitet werden.

Zunächst wird im Peakboard Designer eine SAP Datenquelle angelegt (YourSAPDatasource). Diese kann einerseits dafür verwendet werden. Daten aus dem SAP System anzuzeigen und zum anderen, um Daten zurück zu schreiben.

Dabei kann der Exportparameter aus unterschiedlichen Datenquellen, beispielsweise einer im Peakbaord angelegten Variablen (PeakboardVariable) stammen.

```lua
local con = data.YourSAPDatasource.getconnection()
-- Connect to SAP system
con.open()
-- Execute XtractQL statements 
local res = sap.execute(con, "EXECUTE FUNCTION 'Z_Function_Module' EXPORTS YourColumn = '" .. data.PeakboardVariable .. "'")
-- Disconnect from SAP system
con.close()
```

|YourSAPDatasource |= Name der angelegten SAP Verbindung|
|Z_Function_Module |= Funktionsbaustein, welcher für das Schreiben nach SAP konfiguriert ist|
|YourColumn |= Spalte des Funktionsbaustein in die die Daten geschrieben werden sollen|
|PeakboardVariable |= Im Peakboard angelegte Variable, welche den zu schreibenden Wert enthält|