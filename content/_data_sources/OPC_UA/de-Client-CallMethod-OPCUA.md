---
layout: article
title: OPC UA Methoden aufrufen
menu_title: OPC UA Methoden aufrufen
description: OPC UA Methoden eines Objektknotens mit den Building Blocks Call method und Call method with return value aufrufen – mit und ohne Rückgabewert
lang: de
weight: 1920
ref: dat-1920
redirect_from: 
 - /misc/de-Client-CallMethod-OPCUA.html
 - /data_sources/OPCUA/de-Client-CallMethod-OPCUA.html
---

Neben dem Lesen von Werten und dem [Schreiben nach OPC UA](/data_sources/OPC_UA/de-Client-Write-OPCUA.html) kann Peakboard auch OPC UA Methoden aufrufen, die ein Server über seine Objektknoten bereitstellt. Dafür gibt es zwei Building Blocks: **Call method** ruft eine Methode auf, ohne ihr Ergebnis weiterzuverwenden, und **Call method with return value** ruft eine Methode auf und liefert deren Ergebnis zurück, sodass du es im Skript weiterverarbeiten kannst.

<div class="box-warning" markdown="1">
**Achtung**

Hierzu muss mindestens eine zuvor angelegte [OPC UA Datenquelle](/data_sources/OPC_UA/de-opc-ua.html) vorhanden sein! Der Building Block ruft die Methode im Kontext dieser Verbindung auf.
</div>

## Die OPC UA Blöcke finden

Öffne den Building-Blocks-Editor für ein beliebiges Skript (zum Beispiel ein [Button]-Klick, ein Timer oder ein globales Ereignis) und stelle sicher, dass der [Block Mode] aktiv ist. Filtere mit der Blocksuche (1) nach `OPC UA`. Die Blöcke liegen unter **FUNCTIONS → Publish to external systems → OPC UA** (2).

![OPC UA Building Blocks in der Blockauswahl](/assets/images/data-sources/call-opc-ua-method/call-opc-ua-method-01-blocks-palette.png)

* **Set variable** (3): schreibt einen Wert in eine beschreibbare OPC UA Variable (siehe [Schreiben nach OPC UA](/data_sources/OPC_UA/de-Client-Write-OPCUA.html)).
* **Call method** (4): ruft eine OPC UA Methode eines Objektknotens auf dem Server auf, ohne einen Rückgabewert zu verwenden.
* **Call method with return value** (5): ruft eine OPC UA Methode auf und gibt ihr Ergebnis zurück, sodass du den Rückgabewert weiterverwenden kannst – zum Beispiel, um ihn in einer Variablen zu speichern.

## Den Block Call method hinzufügen

Mache einen Doppelklick auf **Call method** (oder ziehe ihn auf die Arbeitsfläche). Der Block startet in einem minimalen Zustand mit nur der Verbindungszeile.

![Der Block Call method, bevor eine Methode ausgewählt ist](/assets/images/data-sources/call-opc-ua-method/call-opc-ua-method-02-empty-block.png)

* **for connection** (1): die OPC UA Datenquelle, in deren Kontext die Methode aufgerufen wird. Wähle die Verbindung im Dropdown aus.
* **Zurücksetzen / Methode wählen** (2): das Aktualisieren-Symbol öffnet den Knoten-Browser, mit dem du den Objektknoten und die Methode auswählst.
* Solange keine Methode ausgewählt ist, zeigt der erzeugte Code (3) den Hinweis `-- !!! Please reset the connection and select any Objects with methods !!!`.

## Die Methode auswählen

Das Aktualisieren-Symbol öffnet den Dialog [Select OPC UA nodes] – denselben Knoten-Browser wie in der Datenquelle. Er zeigt den Adressraum des verbundenen Servers.

![Auswahl einer Methode im Knoten-Browser](/assets/images/data-sources/call-opc-ua-method/call-opc-ua-method-03-select-method.png)

* **Methode wählen** (1): klappe den Baum auf und setze den Haken in der Checkbox der Methode, die du aufrufen möchtest. Methoden findest du unter dem Objektknoten, der sie bereitstellt – Standardmethoden liegen zum Beispiel unter dem Knoten **Server**.
* **Attributes** (2): im Attributbereich kannst du prüfen, ob du den richtigen Knoten gewählt hast. Eine aufrufbare Methode hat `NodeClass` = **Method** und `Executable` = **True**.
* **Select** (3): bestätigt die Auswahl und kehrt zum Editor zurück.

## Der Block passt sich an

Sobald eine Methode ausgewählt ist, baut sich der Block **Call method** neu auf: Er zeigt jetzt die Methode und – falls die Methode Eingabeargumente erwartet – je einen typisierten Eingabeanschluss pro Argument.

![Der Block Call method, nachdem er sich an die gewählte Methode angepasst hat](/assets/images/data-sources/call-opc-ua-method/call-opc-ua-method-04-call-method-block.png)

* **for connection** (1): die OPC UA Verbindung, über die die Methode aufgerufen wird.
* **method** (2): die gewählte Methode, dargestellt mit NodeID und Name. Über das Dropdown kannst du zu einer anderen Methode derselben Verbindung wechseln.
* **Argumente** (3): für jedes Eingabeargument der Methode (im Beispiel `SubscriptionId`) erzeugt der Block einen typisierten Anschluss. Hier hängst du einen festen Wert, einen [Get value]-Block oder einen passenden Ausdruck an.
* **Erzeugter Code** (4): der Block erzeugt automatisch den passenden `callmethod`-Aufruf, zum Beispiel `connections.getfromid('…').callmethod('i=2253', 'i=11492', '')`. Das erste Argument ist die NodeID des Objektknotens, das zweite die NodeID der Methode, danach folgen die Methodenargumente.

## Call method with return value

Der Block **Call method with return value** funktioniert genauso wie **Call method** – Verbindung, Methode und Argumente werden identisch ausgewählt. Der Unterschied: Er liefert das Ergebnis der Methode zurück.

![Der Block Call method with return value mit Rückgabewert-Ausgang](/assets/images/data-sources/call-opc-ua-method/call-opc-ua-method-05-return-value-block.png)

* **Rückgabewert-Ausgang** (1): der Anschluss oben links am Block gibt das Ergebnis der Methode aus. Verbinde ihn zum Beispiel mit einem **Set value**-Block, um den Rückgabewert in einer Variablen zu speichern.
* **Verbindung, Methode und Argumente** (2): werden wie beim Block **Call method** ausgewählt.
* **Erzeugter Code** (3): der erzeugte Code beginnt jetzt mit `local _ = …`, das heißt das Ergebnis des `callmethod`-Aufrufs wird übernommen und kann weiterverwendet werden.

## Aus dem Skript aufrufen

Derselbe Aufruf ist auch direkt im Skriptcode verfügbar, was für fortgeschrittene Szenarien nützlich ist:

```lua
-- ohne Rückgabewert
connections.getfromid('EncodedConnectionKey').callmethod('ObjectNodeId', 'MethodNodeId', 'Argumente')

-- mit Rückgabewert
local result = connections.getfromid('EncodedConnectionKey').callmethod('ObjectNodeId', 'MethodNodeId', 'Argumente')
```

Die NodeIDs des Objektknotens und der Methode findest du im Durchsuchen-Dialog der [OPC UA Datenquelle](/data_sources/OPC_UA/de-opc-ua.html) im Feld "NodeID". Eine Methode ist an `NodeClass` = **Method** erkennbar.

<div class="box-tip" markdown="1">
**Hinweis**

Die NodeID kann auch mit Hilfe von [UaExpert](https://opcfoundation.org/products/view/uaexpert) oder einem ähnlichen Tool ermittelt werden.
</div>

Für die [Peakboard Skript Engine](/scripting/de-script-engine.html) sind alle Zahlen gleichwertig und werden als "double" verarbeitet. Übergibst du der Methode numerische Argumente, konvertiere sie daher mit den passenden Funktionen (`toint32()`, `toint16()`, …) in den vom Server erwarteten OPC UA Datentyp. Der Building Block **Call method** übernimmt diese Konvertierung über seine typisierten Eingabeanschlüsse für dich.
