---
layout: article
title: Siemens S7
menu_title: Siemens S7
description: Information über Siemens S7 Daten in Peakboard
lang: de
weight: 1900
ref: dat-1900
redirect_from:
  - /data_sources/21-de-siemens-s7.html
---
Generell gibt es mehrere Möglichkeiten, Maschinendaten in Peakboard zu verarbeiten, z.B. über einen cloudbasierten IoT-Hub (wie von Azure oder Google) oder einen MQTT-Server. Die Siemens-S7-Datenquelle ermöglicht es, die Peakboard-Box direkt an eine S7-Steuerung anzubinden. Für den Fall, dass in der jeweiligen Umgebung das Steuernetz vom „normalen“ Business-Netz getrennt ist, kann die Box über USB einen zweiten LAN-Anschluss bekommen, der auf der einen Seite mit dem Business Netz (z.B. für den SAP-Zugriff) und auf der anderen Seite mit dem S7-Steuernetz verbunden ist.

## Voraussetzungen

Abgesehen von einer aktiven Netzwerkverbindung müssen auf Seite der S7-Steuerung noch ein paar wenige Einstellungen vorgenommen bzw. sichergestellt werden. Zuerst muss der Zugriff auf die Datenbausteine gewährt werden. Stellen Sie sicher, dass sowohl der allgemeine Lese- und Schreibzugriff, als auch die PUT- und GET-Kommunikation zugelassen ist. Diese Einstellungen können, je nach Konfigurationsprogramm, wie folgt aussehen:

![Protection](/assets/images/data-sources/siemens-s7/datenquelle-s7-00-protection.png)

Der zweite Aspekt ist die Verwaltung der Variablen auf der Steuerung. Der interne Zugriff auf Datenblöcke, Merker, Eingänge und Ausgänge kann entweder optimiert oder absolut erfolgen. Um Variablen von der Steuerung mit Peakboard lesen zu können, muss der absolute Zugriff aktiviert sein.

![Block Access](/assets/images/data-sources/siemens-s7/datenquelle-s7-01-block-access.png)

Der folgende Screenshot zeigt die Rohansicht eines Datenblocks aus Sicht des S7-Programmierers. Relevant sind hier zum einen die Datentypen der Variablen und das Offset. Beide Werte werden bei der Konfiguration der S7-Datenquelle benötigt. Für den Fall, dass die Variable in einem Datenbaustein liegt, wird noch die Nummer des Bausteins benötigt.

![Data Block](/assets/images/data-sources/siemens-s7/datenquelle-s7-02-data-block.png)

## Anbindung im Peakboard-Designer

Um Peakboard mit der S7 zu verbinden, legen Sie eine entsprechende Datenquelle an. Tragen Sie einen obligatorischen Namen, die IP-Adresse, Slot und Rack ein. Bei der Angabe der S7-CPU werden im Moment die Modelle 1200, 1500, 200, 300 und 400 unterstützt. Das Reload Interval gibt an, wie viel Zeit bis zur nächsten Aktualisierung der Daten vergeht. Mit Max Items können sie die Anzahl der Werte festlegen, die später in der Tabelle enthalten sein sollen. Der aktuellste Variablenwert steht in der Tabelle immer an erster Stelle. Es ergibt nur Sinn, einen Wert größer 1 einzutragen, wenn Sie später in einem Skript auf die Werte vor (!) dem aktuellen Abruf zugreifen möchten.

![Data Dialog](/assets/images/data-sources/siemens-s7/datenquelle-s7-03-edit-data-dialog.png)

## Variablendefinition


Für jede abzurufende Variable muss manuell ein Eintrag vorgenommen werden. Dafür muss ein eindeutiger Name gewählt werden, der jedoch nicht mit dem der Variable auf der Steuerung übereinstimmen muss. Weiterhin muss die Position der Variable definiert werden. Dazu gehört, ob die Variable in einem Datenbaustein, Merker, Aus- oder Eingang liegt (Type) und das Offset, welches die Speicheradresse der Variable angibt.


![Edit Variable Dialog](/assets/images/data-sources/siemens-s7/datenquelle-s7-04-edit-variable-dialog.png)

Bei der Definition des Offsets sind Besonderheiten in der Formatierung zu beachten, welche abhängig vom Datentyp sind.
Soll eine Variable vom Datentyp Bit, also ein boolescher Wert, gelesen werden, muss das Offset in der Form [Byte.Bit] angegeben werden. Valide Werte sind also zum Beispiel „0.0“ oder „2.7“.

## Variablen in Strukturen organisieren

Oftmals stellt eine Steuerung eine Vielzahl von Werten bereit. Möchte man eine größere Menge von Variablen beziehen, so besteht die Gefahr, dass die Datenquellenkonfiguration schnell unübersichtlich wird.
Um dieses Problem zu vermeiden, gibt es die Möglichkeit, Variablen in Strukturen zu bündeln und damit örtlich oder thematisch zu organisieren. Zunächst klickt man dafür auf den "add custom" Button.
Im folgenden Dialog können, neben dem obligatorischen Namen, auch Variablen hinzugefügt werden. Beachten Sie, dass eine Struktur mindestens zwei Variablen enthalten muss.

![Edit Custom Dialog](/assets/images/data-sources/siemens-s7/datenquelle-s7-05-edit-custom-dialog.png)

Variablen, welche in einer Struktur hinterlegt sind, werden später gleichwertig mit allen anderen Werten in der Tabelle angezeigt.

Eine Beispielkonfiguration könnte also folgendermaßen aussehen.

![Struct Pattern](/assets/images/data-sources/siemens-s7/datenquelle-s7-06-struct-pattern.png)

Alle Variablen, die in Verbindung mit Linie 1 stehen und damit auf Datenbaustein #3 liegen, sind hier in einer eigenen Struktur hinterlegt.

Mit einem Klick auf Preview verbindet sich der Peakboard-Designer mit der S7-Steuerung, holt die aktuellen Werte und visualisiert sie in einer Tabelle.

![Preview Dialog](/assets/images/data-sources/siemens-s7/datenquelle-s7-07-preview-dialog.png)

Die Datenquelle kann jetzt wie üblich in Peakboard weiterverwendet werden, z.B. durch Bindung oder mit Hilfe eines Skriptes. Bitte unbedingt beachten: Das Refreshed-Event der Datenquelle wird nur gefeuert, wenn sich mindestens eine Variable verändert hat. Bleiben alle Variablen gleich, wird KEIN Event ausgelöst.

## Variablen schreiben

Das Setzen von Werten auf S7-Steuerungen ist ausschließlich mit Lua-Script möglich. Dazu gibt es vier Methoden, jeweils eine pro Art von Speicher. Diese Methoden sind im Skripteditor als Unterpunkt „Write to PLC“ der Datenquelle zu finden.
Es ist zu beachten, dass die Variable, welche geschrieben werden soll, nicht in der Datenquelle hinterlegt sein muss.

![Write Methods](/assets/images/data-sources/siemens-s7/datenquelle-s7-08-write-methods.png)

Die Syntax der Methoden ist weitestgehend identisch, wobei stets ausschließlich die essentiellen Informationen der zuschreibenden Variable erforderlich sind.

Ein solcher Befehl hat folgendes Muster:


```lua
data.[plc].setvar( ([Datenblocknummer], )[Offset], [Datentyp], [Wert] )
```
Die Datenblocknummer wird nur benötigt, wenn auf einen Datenbaustein geschrieben werden soll und wird als Ganzzahl angegeben.
Die Angabe des Offsets erfolgt wie im Dialog zur Variablenkonfiguration.
Gleiches gilt für den Datentyp.
Der Wert wird, wie Offset und Datentyp, als Zeichenkette (‘Wert’) angegeben.
