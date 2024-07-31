---
layout: article
title: Ändern von Werten in OPC-UA
menu_title: Ändern von Werten in OPC-UA
description: Beschreibt, wie über ein Skript Werte in OPC UA geschrieben werden können.
lang: de
weight: 175
ref: scr-175    
redirect_from:
---

<div class="box-tip" markdown="1">
**Hinweis:**

Falls bereits eine geteilte OPC UA Verbindung vorhanden ist, kann der nächste Schritt übersprungen und die vorhandene Verbindung verwendet werden.
</div>

Das Ändern von Werten in einer OPC-UA-Verbindung kann über ein Skript realisiert werden. Dafür muss zunächst eine OPC-UA-Datenquelle angelegt werden. Die Verbindung dieser Datenquelle wird dann verwendet, um die Verbindung mit dem OPC-UA-Server herzustellen und die Werte zu ändern.

## Ändern von Werten
Das folgende Skript zeigt, wie Werte über eine OPC-UA-Verbindung geändert werden können. Es wird davon ausgegangen, dass die Datenquelle bereits angelegt wurde.

In dem Block wird zunächst die Verbindung ausgewählt, die für die Verbindung mit dem OPC-UA-Server verwendet werden soll. Anschließend können die `NodeID` des Wertes, der geändert werden soll, und der neue Wert zusammen mit dessen Datentyp angegeben werden.

Der Block kann unter `Publish to external systems` -> `OPC-UA` -> `Set variable` gefunden werden.

![Ändern von Werten in OPC-UA](/assets/images/scripting/Scripting_Beispiele/opc-ua/en-script-change-opc-ua-values.png)

Falls die Modifikation im Skript-Modus erfolgen soll, kann das folgende Skript verwendet werden:

```lua
connections.getfromid('oi4AHK7cVuFfTFvjf/okKZLrNBc=').writevalue('ns=2;s=TestData_TestBool', true)
```