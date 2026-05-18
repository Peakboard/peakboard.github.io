---
layout: article
title: Schreiben nach OPC UA
menu_title: Schreiben nach OPC UA
description: Werte mit dem Building Block Variable setzen zurück auf einen OPC UA Server schreiben – der Block passt sich dynamisch an die gewählte Variable an
lang: de
weight: 1910
ref: dat-1910
redirect_from: 
 - /misc/de-Client-Write-OPCUA.html
 - /data_sources/OPCUA/de-Client-Write-OPCUA.html
---

Neben dem Lesen kann die [OPC UA Datenquelle](/data_sources/OPC_UA/de-opc-ua.html) auch Werte zurück auf den Server schreiben. Der empfohlene Weg ist der Building Block **Variable setzen**: Du wählst aus, welche Variable du ändern möchtest, und der Block baut sich dynamisch passend zu dieser Variablen neu auf – inklusive einer Werteingabe, die bereits den richtigen Datentyp hat. Eine manuelle Datentyp-Konvertierung ist damit nicht mehr nötig.

<div class="box-warning" markdown="1">
**Achtung**

Hierzu muss mindestens eine zuvor angelegte [OPC UA Datenquelle](/data_sources/OPC_UA/de-opc-ua.html) vorhanden sein! Der Building Block schreibt im Kontext dieser Verbindung.
</div>

## Die OPC UA Blöcke finden

Öffne den Building-Blocks-Editor für ein beliebiges Skript (zum Beispiel ein [Button]-Klick, ein Timer oder ein globales Ereignis) und stelle sicher, dass der [Block Mode] aktiv ist. Filtere mit der Blocksuche (1) nach `OPC UA`. Die Blöcke liegen unter **FUNCTIONS → Publish to external systems → OPC UA** (2).

![OPC UA Building Blocks in der Blockauswahl](/assets/images/data-sources/write-to-opc-ua/write-to-opc-ua-01-blocks-palette.png)

* **Set variable** (3): schreibt einen Wert in eine beschreibbare OPC UA Variable. Dies ist der Block, um einen Wert aus der Peakboard-Anwendung zurück auf den Server zu schreiben.
* **Call method** (4): ruft eine OPC UA Methode eines Objektknotens auf dem Server auf, ohne einen Rückgabewert zu verwenden.
* **Call method with return value** (5): ruft eine OPC UA Methode auf und speichert ihr Ergebnis, sodass der Rückgabewert im weiteren Skript verwendet werden kann.

## Den Block Set variable hinzufügen

Mache einen Doppelklick auf **Set variable** (oder ziehe ihn auf die Arbeitsfläche). Der Block startet in einem minimalen Zustand mit nur der Verbindungszeile.

![Der Block Set variable, bevor eine Variable ausgewählt ist](/assets/images/data-sources/write-to-opc-ua/write-to-opc-ua-02-empty-block.png)

* **for connection** (1): die OPC UA Datenquelle, in die der Block schreibt. Wähle die Verbindung im Dropdown aus.
* **Zurücksetzen / Variable wählen** (2): das Aktualisieren-Symbol öffnet den Knoten-Browser, mit dem du auswählst, welche Variable geschrieben werden soll.
* Solange keine Variable ausgewählt ist, zeigt der erzeugte Code (3) den Hinweis `-- !!! Please reset the connection and select a variable !!!`.

## Die zu schreibende Variable wählen

Das Aktualisieren-Symbol öffnet den Dialog [Select OPC UA nodes] – denselben Knoten-Browser wie in der Datenquelle. Er zeigt den Adressraum des verbundenen Servers.

![Auswahl der beschreibbaren Variablen im Knoten-Browser](/assets/images/data-sources/write-to-opc-ua/write-to-opc-ua-03-select-node.png)

* **Beschreibbare Variable wählen** (1): klappe den Baum auf und setze den Haken in der Checkbox der Variablen, die du schreiben möchtest. Nur Variablenknoten, deren `AccessLevel` das Schreiben erlaubt, können auf dem Server geändert werden.
* **Select** (2): bestätigt die Auswahl und kehrt zum Editor zurück.

## Der Block passt sich dynamisch an

Sobald eine Variable ausgewählt ist, baut sich der Block **Set variable** neu auf: Er zeigt jetzt eine Zielzeile und eine typisierte Werteingabe.

![Der Block Set variable, nachdem er sich an die gewählte Variable angepasst hat](/assets/images/data-sources/write-to-opc-ua/write-to-opc-ua-04-dynamic-block.png)

* **for connection** (1): die OPC UA Verbindung, über die geschrieben wird.
* **write to variable** (2): der gewählte Knoten, dargestellt mit NodeID und Browse-Pfad. Über das Dropdown kannst du zu einer anderen beschreibbaren Variablen derselben Verbindung wechseln.
* **value** (3): der zu schreibende Wert. Da der Block den Datentyp des gewählten Knotens kennt, ist diese Eingabe bereits korrekt typisiert (ein Number-Knoten erwartet eine Zahl, ein Boolean-Knoten einen Wahrheitswert usw.). Stecke einen Wert, einen [Get value]-Block oder einen passenden Ausdruck in diesen Anschluss.
* **Erzeugter Code** (4): der Block erzeugt automatisch den passenden `writevalue`-Aufruf, zum Beispiel `connections.getfromid('…').writevalue('ns=2;s=TemplatesData1_Temperature', 0)`. Du musst den Wert nicht mehr von Hand konvertieren – der Block übergibt ihn bereits im korrekten OPC UA Datentyp.

## Schreiben aus dem Skript

Dieselbe Schreiboperation ist auch direkt im Skriptcode verfügbar, was für fortgeschrittene Szenarien nützlich ist:

```lua
-- Datenquellenname.writevalue(NodeID, Value)
connections.getfromid('EncodedConnectionKey').writevalue('ns=3;s="Data_block_2"."IntegersWords"."int1"', toint16(12))
```

Die NodeID findet sich im Durchsuchen-Dialog der [OPC UA Datenquelle](/data_sources/OPC_UA/de-opc-ua.html) im Feld "NodeID" der Variablen.

<div class="box-tip" markdown="1">
**Hinweis**

Die NodeID kann auch mit Hilfe von [UaExpert](https://opcfoundation.org/products/view/uaexpert) oder einem ähnlichen Tool erstellt werden.
</div>

Für die [Peakboard Skript Engine](/scripting/de-script-engine.html) sind alle Zahlen gleichwertig.
Daher werden alle Zahlen als "double" verarbeitet.
Dies führt dazu, dass diese Zahlen nicht ohne weiteres auf einem OPC UA Server gespeichert werden können.

<div class="box-tip" markdown="1">
**Hinweis**

Die [Peakboard Skript Engine](/scripting/de-script-engine.html) kennt lediglich drei Datentypen: bool, number und string!
Daher ist beim Schreiben aus dem Skriptcode eine Konvertierung anhand nachfolgender Tabelle notwendig. Der Building Block **Set variable** übernimmt diese Konvertierung für dich.
</div>

Nachfolgende Tabelle liefert eine Übersicht über die OPC UA Datentypen und deren entsprechende Konvertierungsfunktionen:

{% include styled_table.html %}
| OPC UA Datatype | Konvertierungsfunktion |
|-----------------|----------------------:|
| byte            |              tobyte() |
| sbyte           |             tosbyte() |
| float/single    |  tofloat()/tosingle() |
| int16/short     |   toint16()/toshort() |
| int32           |             toint32() |
| int64/long      |    toint64()/tolong() |
| uint16/ushort   | touint16()/toushort() |
| uint32          |            touint32() |
| uint64/ulong    |  touint64()/toulong() |
| datetime        |          todatetime() |
| guid            |              toguid() |
