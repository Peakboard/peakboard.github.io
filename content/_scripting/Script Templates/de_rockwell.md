---
layout: article
title: Ändern von Werten in einer Rockwell-Steuerung
menu_title: Ändern von Werten in einer Rockwell-Steuerung
description: Beschreibt, wie über ein Skript Werte in einer Rockwell-Steuerung geschrieben werden können.
lang: de
weight: 177
ref: scr-177    
redirect_from:
---

<div class="box-tip" markdown="1">
**Hinweis:**

Falls bereits eine geteilte Rockwell-Verbindung vorhanden ist, kann der nächste Schritt übersprungen und die vorhandene Verbindung verwendet werden.
</div>

Das Ändern von Werten über eine Rockwell-Verbindung wird über ein Skript realisiert. Dafür muss zunächst eine [Rockwell-Datenquelle angelegt](/data_sources/de-rockwell.html) werden. Die Verbindung dieser Datenquelle wird dann verwendet, um beispielsweise die Verbindung mit der Steuerung herzustellen und die Werte zu ändern.

## Ändern von Werten
Das folgende Skript zeigt, wie Werte über eine Rockwell-Verbindung geändert werden können. Es wird davon ausgegangen, dass die Datenquelle bereits angelegt wurde.

In dem Block wird zunächst die Datenquelle ausgewählt, die für die Kommunikation verwendet werden soll. Anschließend wird das `Programm` ausgewählt in dem der zu ändernde Werte zu finden ist. Der `tag` markiert den Wert, welcher geändert werden soll. Abschließend wird noch das `value`, also der Wert mitgegeben.

Der Block kann unter `Publish to external systems` -> `Rockwell` -> `Write tag` gefunden werden.

![Ändern von Werten in einer Rockwell-Steuerung](/assets/images/scripting/Scripting_Beispiele/rockwell/en-script-change-rockwell-values.png)

Falls die Modifikation im Skript-Modus erfolgen soll, kann das folgende Skript verwendet werden:

```lua
connections.getfromid('exAyTzOahV0aDY14IFm65FoZTVY=').writetag('MainProgram', 'Int', 100)
```