---
layout: article
title: LUA脚本数据
menu_title: LUA脚本数据
description: Peakboard中LUA脚本数据的相关信息
lang: cn
weight: 200
ref: dat-200
redirect_from:
  - /data_sources/03-cn-lua-script-table.html
---
数据源LUA脚本表与传统数据源稍有不同。它用于满足其他传统数据源无法满足的要求。该想法是将元数据定义为数据源的列。然后，用LUA脚本完成填充数据，正如其名所指。脚本究竟做什么取决于用户的想象力。典型的应用领域是需要多次交互的复杂数据源，例如：首先在某处获取授权令牌，然后从首个网络源中检索数据，之后将其与完全不同的数据源合并。可以使用完整的LUA命令集。

以下屏幕截图显示了一个包含3列的表，这些列可以包含3种基本的LUA数据源：数字、字符串或布林。创建这些列无需说明。在重载间隔中可以定义执行脚本的频率。

![Edit lua Script Data Dialog](/assets/images/data-sources/datasources-lua-script/edit-lua-script-data-dialog.png)

在代码块中，只汇编一个JSON字符串，然后将其返回一次作为返回值。

![Edit Script Dialog](/assets/images/data-sources/datasources-lua-script/edit-script-dialog.png)

在此给所有想要复制示例的人提供原始代码。随机函数生成随机数字：

```lua
local json = '['

for j = 1, math.random(2, 4) do
    for i = 10, math.random(10, 15) do
        local r = math.random(10, 70)
        json = json .. '{ MATNR: "1000' .. i .. '", QUANT: ' .. r .. ', QUNTS: "' .. r .. '" }, '
    end
end

return string.sub(json, 1, -3).. ']'
```
