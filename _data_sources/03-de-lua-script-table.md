---
layout: article
title: LUA Script Data
menu_title: LUA Script Data
description: Information über LUA Script Daten  in Peakboard
lang: de
ref: dat-03
---
Die Datenquelle LUA Script Table weicht etwas von den klassischen Datenquellen ab. Sie dient dazu, Anforderungen abzudecken, die mit den anderen, traditionellen Datenquellen gerade nicht abgedeckt werden können. Die Idee ist, einmalig die Metadaten, als Spalten, der Datenquelle zu definieren. Das Füllen mit Daten erledigt dann wie der Name schon sagt ein LUA-Script. Was genau das Script macht, bleibt der Phantasie des Users überlassen. Typische Anwendungsgebiete sind komplexe Datenquellen, die multiple Interaktion verlangen, z.B. zunächst einen Autorisierungstoken irgendwo abzuholen, um mit diesem dann zunächst in einer ersten Webquelle Daten abzurufen, um sie dann mit einer komplett anderen Datenquelle abzumischen. Es steht Ihnen der komplette Schatz aus LUA-Befehlen zur Verfügung.

Der folgende Screenshot zeigt eine Tabelle mit drei Spalten, die sich aus den drei elementaren LUA-Datentypen zusammensetzen können: Number, String oder Boolean. Das Anlegen der Spalten ist trivial und selbsterklärend. Im Reload-Intervall wird definiert, wie oft das Script ausgeführt werden soll.

![Edit lua Script Data Dialog](/assets/images/data-sources/datasources-lua-script/edit-lua-script-data-dialog.png)

Im Code-Block selbst wird dann nur noch ein JSON-String zusammengesetzt, der dann einmalig als return-Wert zurückgegeben wird.

![Edit Script Dialog](/assets/images/data-sources/datasources-lua-script/edit-script-dialog.png)

Hier nochmal für alle, die das Beispiel nachbauen wollen, der Originalcode. Mit der Random-Funktion werden Zufallszahlen erzeugt:

```lua
local json = '['

for j = 1, math.random(2, 4) do
 for i = 10, math.random(10, 15) do
 local r = math.random(10, 70)
 json = json .. '{ MATNR: "1000' .. i .. '", QUANT: ' .. r .. ', QUNTS: "' .. r.. '" }, '
 end
end

return string.sub(json, 1, -3).. ']
```
