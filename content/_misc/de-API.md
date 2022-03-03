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

In unterschiedlichen Szenarien kann es vorkommen, dass man die Schnittstelle der Box ansprechen möchte. 
Dies kann beispielsweise dann der Fall sein, wenn du Peakboard in ein vorhandenes IT-System integrieren möchtest.

Im folgenden Artikel soll erklärt werden, welche Optionen hierfür zur Verfügung stehen. 
Der Artikel beschreibt dabei Möglichkeiten, wie Daten einer Peakboard Visualisierung ausgelesen werden können, wie Daten einer Peakboard Visualisierung geändert werden können und wie eine Funktion einer Peakboard Visualisierung ausgelöst werden kann. 
Außerdem wird gezeigt, wo man Details zu weiteren Schnittstellen finden kann, um bspw. Systemeigenschaften einer Peakboard Box auszulesen oder zu bearbeiten. 
Hierzu zählen Dinge wie einen Screenshot auslesen, eine Box neu zu starten oder die aktive Visualisierung zu ändern.

### Vorbereitung Einzelwerte auslesen / schreiben
Um Daten aus einer Visualisierung auszulesen, müssen diese zunächst in eine Variable oder in eine Liste übertragen werden. 
Hierfür musst du zuerst z.B. eine String Variable anlegen und diese für einen Zugriff von außen freigeben. 
Dazu klickst du auf den Ordner [Variablen] und dort auf [Variable hinzufügen]. 
Im sich nun öffnenden Dialog gibst du dieser Variablen einen Namen und bestimmst in dem Tab [Erweitert], dass diese von außer lesbar und schreibbar sein soll.

![image_1](/assets/images/misc/API/1.gif)

Um diese Variable nun mit einem Wert zu Befüllen kannst du sie nun beispielsweise mit einer Textbox verknüpfen. 
Dafür kannst du eine Textbox anklicken und die Verknüpfung herstellen, indem du einen Doppelklick darauf machst und im Dropdown die eben angelegt Variable auswählst.

![image_2](/assets/images/misc/API/2.png)

### Daten auslesen (Einzelwert)
Möchtest du den Wert der Variablen nun auslesen, kannst du das über folgende Abfrage machen:
```
HTTP GET (Port 40405)
https://[Box IP oder Hostname]:40405/api/data?name=Test

Mit Basic Authorization
```

Dazu erhältst du dann diese Antwort im JSON Format:
```JSON
{
  "ScalarData": [
    {
      "Name": "Test",
      "Accessibility": {
        "CanRead": true,
        "CanWrite": true
      },
      "Value": "Hello World"
    }
  ],
  "ListData": []
}
```

Da es sich um eine einzelne Variable handelt befindet sich der Inhalt in ScalarData. 
Dort findest du unter anderem den Namen, wie auch den Wert.

### Daten schreiben (Einzelwert)
```JSON
HTTP POST (Port 40405)
https://[Box IP oder Hostname]:40405/api/data
Content-Type
application/json

Mit Basic Authorization


Body
{
  "ListInstructions":[],
  "ScalarInstructions":
  [
    {
      "DataSourceName": "Test",
      "OpCode": "Set",
      "Data": "Test"
    }
  ]
}

```

Der Wert hat sich nun geändert und du erhältst folgende Antwort:

```JSON
{
    "message": "OK."
}
```

### Vorbereitung Listen auslesen / schreiben
Möchtest du keine Einzelwerte, sondern Listen über die Schnittstelle verarbeiten, so musst du zunächst eine Liste im Peakboard Designer anlegen. 
Bei der Liste hast du auch wieder die Möglichkeit im Bereich [Accessibility by API] auswählen, dass diese Liste von außen gelesen und beschrieben werden darf.

![image_3](/assets/images/misc/API/3.png)

Möchtest du die Werte der Liste verändern, dann kann du eine ListView erstellen. 
In dieser ListView kannst du eine Textbox erstellen die du mit einer Spalte der Datenquelle verknüpfst.

### Daten auslesen (Liste)
Möchtest du alle Werte der Liste auswählen, kannst du das über folgende Abfrage machen:

```JSON
HTTP GET (Port 40405)
https://[Box IP oder Hostname]:40405/api/data?name=TestList

Mit Basic Authorization
```

Dies liefert dir folgende Antwort:

```JSON
{
  "ScalarData": [],
  "ListData": [
    {
      "Name": "TestList",
      "Columns": [
        {
          "Name": "Col1",
          "ElementName": "Col1",
          "Type": "String"
        },
        {
          "Name": "Col2",
          "ElementName": "Col2",
          "Type": "Number"
        }
      ],
      "Items": [
        [
          {
            "Column": "Col1",
            "Value": "A"
          },
          {
            "Column": "Col2",
            "Value": 1
          }
        ],
        [
          {
            "Column": "Col1",
            "Value": "B"
          },
          {
            "Column": "Col2",
            "Value": 2
          }
        ],
        [
          {
            "Column": "Col1",
            "Value": "C"
          },
          {
            "Column": "Col2",
            "Value": 3
          }
        ]
      ]
    }
  ]
}
```

Alternativ kannst du auch nur ein Feld der Tabelle auslesen, indem du den Index der Zeile und den Namen der Spalten übergibst:

```JSON
HTTP GET (Port 40405)
https://[Box IP oder Hostname]:40405/api/data?name=TestList&lineNumber=0&columnNames=Col1

Mit Basic Authorization
```
Dies liefert dir dann eine Antwort der einzelnen Zelle die wie folgt aussieht:

```JSON
{
  "ScalarData": [],
  "ListData": [
    {
      "Name": "TestList",
      "Columns": [
        {
          "Name": "Col1",
          "ElementName": "Col1",
          "Type": "String"
        }
      ],
      "Items": [
        [
          {
            "Column": "Col1",
            "Value": "A"
          }
        ]
      ]
    }
  ]
}
```

### Daten schreiben (Liste)
Wenn du eine Zelle der Tabelle bearbeiten möchtest, so kannst du das über einen HTTP Post machen. 
Hierzu musst du die Daten wie in folgender Abfrage als JSON Body übergeben.

```JSON
HTTP POST (Port 40405)
https://[Box IP oder Hostname]:40405/api/data
Content-Type
application/json

Mit Basic Authorization


Body
{
  "ListInstructions": 
  [
    {
      "DataSourceName": "TestList",
      "OpCode": "Update",
      "LineNumber": 1,
      "Data":
      {
        "Col1": "C"
      }
    }
  ],
  "ScalarInstructions":[]
}
```

### Funktion ausführen
Möchtest du in deiner Visualisierung ein Skript ausführen. 
So kannst du eine globale Funktion anlegen und diese nach außen freigeben. 
Um eine globale Funktion zu erstellen, klickst du im Explorer auf Skripte -> Funktionen -> globale Funktion hinzufügen.

In der Funktion musst du nun markieren, dass sie nach außen freigegeben werden soll. 
Dazu klickst du auf [Shared Funktion]. 
Für die Funktion kannst du anschließend noch Parameter angeben, welche an die Funktion übergeben werden können.

![image_4](/assets/images/misc/API/4.png)

Dieser Parameter lässt sich im Skript später über den Namen des Parameters ansteuern. 
Zum Beispiel zeigt folgendes Skript den Parameter als Nachricht auf der Visualisierung an:

```lua
runtime.shownotification(MyParam)
```

Die Funktion mit dem Namen MyFunc kann nun über folgende Abfrage aufgerufen werden:

```JSON
HTTP POST (Port 40405)
https://[Box IP oder Hostname]:40405/api/functions/MyFunc
Content-Type
application/json

Mit Basic Authorization


Body
{
  "MyParam": "Hello World"
}
```

### Übersicht über alle Schnittstellen
Außer den hier beschriebenen Aufrufen können viele weitere aufgerufen und getestet werden. 
Dazu bietet Peakboard eine Oberfläche, die eine Auflistung aller Schnittstellen darstellt. 
Hier kann man sich direkt Authentifizieren und eine Abfrage an die Box starten.

Diese Oberfläche findest du unter:

```
https://[Box IP oder Hostname]:40405/swagger
```

![image_5](/assets/images/misc/API/5.gif)