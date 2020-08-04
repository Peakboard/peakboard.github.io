---
layout: article
title: Peakboard API
menu_title: Peakboard API
description: Peakboard API
lang: de
weight: 700
ref: misc-700
redirect_from:
  - /misc/07-de-API.html
---

Es gibt eine Reihe von Use Case, bei denen es nötig sein könnte, Informationen von außen an eine Peakbard-Box zu senden. 
Je nach Use Case wird die Informationen also nicht wie bei Datenquellen von der Box vom Quellsystem abgefragt, sondern aktiv vom externen System zur Box gepusht. 
Ein zweiter Use Case könnte sein, dass das externe Systeme Daten von der Box abfragen will, z.B. eine Variable die einen Vorgang zählt oder Ähnliches.
Beide Vorgänge, also Daten lesen und schreiben lassen sich mit der JSon-basierten REST-API einfach darstellen.
Die Basis sind skalare [Variablen oder Listen](https://help.peakboard.com/scripting/de-variables.html), bei denen das Attribut **Can Push Data via API** gesetzt ist.
Generell sind die Calls Passwort-geschützt. 
Der Aufrufer muss sich also mit seinen klassischen Base64-kodierten Credentials authentifizieren.

## Lesen von Daten

Der Call zum Lesen von Daten lautet wie folgt:

[http://NameOfBox:40404/api/runtime/data?name=NameOfDataArtefact](http://NameOfBox:40404/api/runtime/data?name=NameOfDataArtefact)

Der Call muss als http-Get-Befehl erfolgen. Hier ein Beispiel für eine skalare Variable:
```
{
  "ScalarData": [
    {
      "Name": "MyString",
      "Value": "My String"
    }
  ],
  "ListData": []
}
```

Für eine Liste werden in einer entsprechenden JSon-Darstellung die Spalten der Tabelle und die Nutzen angegeben. Das folgende Beispiel zeigt eine Tabelle mit drei Spalten und die ersten beiden Zeilen:

```
{
  "ScalarData": [],
  "ListData": [
    {
      "Name": "MyList",
      "Columns": [
        {
          "Name": "Name",
          "ElementName": "Name",
          "Type": "String"
        },
        {
          "Name": "Revenue",
          "ElementName": "Revenue",
          "Type": "Number"
        },
        {
          "Name": "Paid",
          "ElementName": "Paid",
          "Type": "Boolean"
        }
      ],
      "Items": [
        [
          {
            "Column": "Name",
            "Value": "Mark"
          },
          {
            "Column": "Revenue",
            "Value": 123.15
          },
          {
            "Column": "Paid",
            "Value": false
          }
        ],
        [
          {
            "Column": "Name",
            "Value": "Paul"
          },
          {
            "Column": "Revenue",
            "Value": 56.56
		  }
	}
}
```

## Schreiben von Daten

Für das Schreiben von Daten wird unter diesselbe URL ein http-Post-Befehl gesendet ohne Angabe des Datenelementnamens in der URL. Das Datenelement wird über den JSon-Content definiert und ist ähnlich der Get-Repsonse vom Lesevorgang. Um den Wert einer Variable zo setzen ist noch zusätzlich ein Operation Code (OpCode) mitzugeben. Er definiert die auszuführende Aktion in Bezug auf die Variable. In diesem Fall "Set".

```
{
	"ListInstructions": [],
	"ScalarInstructions":
	[
		{
			"DataSourceName": "MyString",
			"OpCode": "Set",
			"Data": "My little white rabbit"
		}
	]
}
```

![api-01.png](/assets/images/misc/API/api-01.png)

Neben dem Setzen von Variablen gibt es noch folgende Operation-Codes:

* **Add**, multipliziert den existierenden Wert
* **Subtract**, subtrahiert den existierenden Wert
* **Multiply**, multipliziert den existierenden Wert
* **Divide**, dividiert den existierenden Wert
* **Power**, poentiziert den existierenden Wert
* **Append**, fügt einen String hinten an

Das Beschreiben von Listen ist dem folgenden Beispiel zu entnehmen. 
Es ist zu beachten, dass eine Linenumber nur in bestimmten Fällen nötig ist, je nach Operation.

```
{
	"ListInstructions":
	[
		{
			"DataSourceName": "MyList",
			"OpCode": "Append",
			"LineNumber": 65535,
			"Data": {
				
				"Name": "Katrin",
				"Revenue": 100,
				"Paid": false,
			}
		},
	],
	"ScalarInstructions": []
}
```

Folgende Operationen sind möglich, um ein Tabellenobjekt zu manipulieren:

* **Append** hängt die Zeile am Ende der Tabelle an
* **Remove** löscht die Zeile an der angegebenen **LineNumber**
* **Insert** fügt die Zeile an der mit **LineNumber** angegeben Stelle ein.
* **Set** ersetzt die komplette Tabelle mit den gesendeteten Daten
* **Clear** leer die komplette Tabelle




