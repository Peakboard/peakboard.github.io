---
layout: article
title: LUA Script Data
menu_title: LUA Script Data
description: Information about LUA Script Data  in Peakboard
lang: en
ref: dat-3
---
The data source LUA Script Table differs slightly from the classic data sources. It is used to cover requirements that cannot be met by other traditional data sources. The idea is to define the metadata as columns of the data source. The filling with data is then done by a LUA-Script, as the name suggests. What exactly the script does is up to the user’s imagination. Typical areas of application are complex data sources that require multiple interaction, e. g. to first fetch an authorization token somewhere, then retrieve data from a first web source and then merge it with a completely different data source. The complete set of LUA commands is available.

The following screenshot shows a table with three columns that can consist of the three elementary LUA data sources: Number, string or boolean. Creating the columns is trivial and self-explanatory. In the reload interval, you define how often the script is to be executed.

 ![image_1](/assets/images/Data_Sources/datasources-lua-script/DatenquelleLUA01.png)

In the code block itself, only one JSON-String is then assembled, which is then returned once as a return value.

 ![image_1](/assets/images/Data_Sources/datasources-lua-script/DatenquelleLUA02.png)

Here again for all those who want to copy the example, the original code. Random function generates random numbers:

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
