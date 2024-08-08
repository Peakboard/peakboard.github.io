---
layout: article
title: Ändern von Werten über Modbus
menu_title: Ändern von Werten über Modbus
description: Beschreibt, wie über ein Skript Werte über Modbus geschrieben werden können.
lang: de
weight: 176
ref: scr-176    
redirect_from:
---

<div class="box-tip" markdown="1">
**Hinweis:**

Falls bereits eine geteilte Modbus Verbindung vorhanden ist, kann der nächste Schritt übersprungen und die vorhandene Verbindung verwendet werden.
</div>

Das Ändern von Werten über eine Modbus-Verbindung wird über ein Skript realisiert. Dafür muss zunächst eine [Modbus-Datenquelle angelegt](/data_sources/de-modbus.html) werden. Die Verbindung dieser Datenquelle wird dann verwendet, um beispielsweise die Verbindung mit der Steuerung herzustellen und die Werte zu ändern.

## Ändern von Werten
Das folgende Skript zeigt, wie Werte über eine Modbus-Verbindung geändert werden können. Es wird davon ausgegangen, dass die Datenquelle bereits angelegt wurde.

In dem Block wird zunächst die Datenquelle ausgewählt, die für die Modbus-Verbindung verwendet werden soll. Anschließend können die `Start Adresse` des Wertes, der geändert werden soll, und der neue Wert angegeben werden.

Der Block kann unter `Publish to external systems` -> `Modbus` -> `Write single coil` gefunden werden.

![Ändern von Werten über Modbus](/assets/images/scripting/Scripting_Beispiele/modbus/en-script-change-modbus-values.png)

Falls die Modifikation im Skript-Modus erfolgen soll, kann das folgende Skript verwendet werden:

```lua
connections.getfromid('J8L9n/gRsYtZHNkrombr0f7oD14=').writesinglecoil(0, true)
```