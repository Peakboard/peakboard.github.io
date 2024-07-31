---
layout: article
title: Aufrufen eines SAP Funktionsbausteins
menu_title: Aufrufen eines SAP Funktionsbausteins
description: Beschreibt, wie SAP Funktionsbausteine per Skript aufgerufen werden können.
lang: de
weight: 170
ref: scr-170
redirect_from:
---

Mit Peakboard können SAP Funktionsbausteine direkt per Skript aufgerufen werden. Dies ermöglicht eine nahtlose Integration und Nutzung von SAP-Daten innerhalb der Peakboard-Anwendungen.

## Schritt 1: SAP-Datenquelle anlegen
<div class="box-tip" markdown="1">
**Hinweis:**

Falls bereits eine geteilte SAP Verbindung vorhanden ist, kann dieser Schritt auch übersprungen und die vorhandene Verbindung verwendet werden.
</div>

Um eine Verbindung zu SAP herzustellen, muss zunächst eine SAP-Datenquelle im Peakboard Designer angelegt werden. Hierbei werden die Zugangsdaten zu SAP hinterlegt, einschließlich App-Server-Host, System-Nummer, Client, Benutzername und Passwort.

![SAP Datenquelle anlegen](/assets/images/scripting/Scripting_Beispiele/sap/en-create-sap-datasource.png)

Im [XQL](https://help.peakboard.com/data_sources/SAP/de-xql.html)-Statement wird ein Funktionsbaustein definiert, der zum Erstellen der Datenquelle und damit der geteilten Verbindung notwendig ist. In diesem Beispiel wird das folgende XQL-Statement verwendet:

```abap
EXECUTE FUNCTION 'Z_GET_LINES_BY_PLANT'
  EXPORTS
    I_WERKS = '1000'
  TABLES
    T_LINES INTO RESULTSET
```

Alternativ kann an dieser Stelle ein sehr einfacher Baustein genutzt werden, wie zum Beispiel:

```abap
SELECT TOP 10 * FROM MAKT;
```

## Schritt 2: Funktionsbaustein im Skript aufrufen
Nach dem Anlegen der Datenquelle und dem Definieren des Funktionsbausteins kann dieser im Skript aufgerufen werden. Zuerst muss die Verbindungs-ID der Datenquelle ermittelt werden. Diese kann im Designer durch einen Rechtsklick auf die SAP-Datenquelle und Auswahl von `Copy Connection` kopiert werden.

![Datenquelle Verbindungs-ID herausfinden](/assets/images/scripting/Scripting_Beispiele/sap/copy-connection-id.png)

Alternativ kann im Skript Editor auf der rechten Seite unter `Funktionen` -> `In externem System veröffentlichen` eine geteilte Verbindung vom Typ SAP ausgewählt werden, wodurch die passende ID automatisch eingefügt wird.

## Schritt 3: Skript zur Ausführung des Funktionsbausteins
Per Drag-and-Drop kann eine Schaltfläche auf dem Designer platziert und per Doppelklick geöffnet werden. Hier wird dann das folgende Skript hinterlegt, das den Funktionsbaustein aufruft:

```lua
local success, result = trycatch(function()
	local con = connections.getfromid('LmkrZjRqMtBrFRA2hohxcfs6rwQ=')
	return con.execute([[
		EXECUTE FUNCTION 'Z_GET_LINES_BY_PLANT'
  			EXPORTS
    			I_WERKS = '1000'
  			TABLES
    			T_LINES INTO RESULTSET
	]])
end)

if success then
   peakboard.log('Number of items: ' .. result.count)
   peakboard.log('LINE column of first item: ' .. result[0].LINE)
   peakboard.log('TARGET column of first item: ' .. result[0].TARGET)
else
   peakboard.log(result.message)
   peakboard.log(result.type)
end
```

Dieses Skript ruft den Funktionsbaustein `Z_GET_LINES_BY_PLANT` auf und gibt die Anzahl der zurückgegebenen Zeilen sowie die Werte der Spalten `LINE` und `TARGET` der ersten Zeile aus. Das Ergebnis des Funktionsbausteins wird in der Variablen `result` gespeichert, die ein Array der zurückgegebenen Zeilen enthält.

Um Fehler zu verhindern, wird der gesamte Aufruf in einem `trycatch`-Block ausgeführt. Sollte ein Fehler auftreten, wird `success` auf `false` gesetzt und die Fehlermeldung in der Eigenschaft `message` des `result`-Objekts gespeichert. Weitere Informationen zur Fehlerbehandlung sind [hier](https://help.peakboard.com/scripting/Script%20Templates/de-error-handling.html) verfügbar.
