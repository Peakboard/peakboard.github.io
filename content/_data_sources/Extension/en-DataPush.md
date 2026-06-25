---
layout: article
title: Live data updates with Data.Push
menu_title: Live data updates
description: Push live data updates from an extension to the Designer or Box using Data.Push
lang: en
weight: 745
ref: dat-745
redirect_from:
---

Peakboard can update data from inside a running `CustomListBase` extension using the `Data.Push` interface. This mechanism is essential for real-time or subscription-based data sources (e.g. BACnet, MQTT, OPC UA, IoT sensors). It pushes live updates to the Designer or Box **without** reloading the entire dataset – typically when a value changes externally (for example via a COV event, a WebSocket message or a periodic subscription).

## Lifecycle overview

When a Custom List is loaded by Peakboard, it goes through several lifecycle methods:

| Method | Trigger | Purpose |
|---|---|---|
| `GetColumnsOverride()` | On initial connection | Defines the table schema (columns) |
| `GetItemsOverride()` | On first data load | Returns the initial rows |
| `SetupOverride()` | Immediately after the data source is initialized | Configure background tasks, subscriptions, timers, and capture the list context (e.g. the list name) |
| `ExecuteFunctionOverride()` | When a Lua function is called | Executes logic on call (write, recalc, etc.) |

## The SetupOverride method

`SetupOverride` is called once when the extension is loaded or the data source is connected in the Peakboard Designer. Use it to initialize connection objects (e.g. BACnet, MQTT clients), register for external subscriptions (COV events) and store the current list name for later updates:

```csharp
protected override void SetupOverride(CustomListData data)
{
    // Store the list name so we can reference it later when pushing updates
    _listName = data.ListName;

    Log.Info($"Setting up list: {_listName}");

    // Example: subscribe to live data or start a timer
    SubscribeToLiveData();
}
```

## Updating data while running

Once you have the list name (from `data.ListName`), you can update existing rows by calling:

```csharp
Data?.Push(_listName).Update(index, updatedItem);
```

| Parameter | Type | Description |
|---|---|---|
| `_listName` | `string` | The internal name of the list in the Peakboard Designer. |
| `index` | `int` | The row index to update (0-based). |
| `updatedItem` | `CustomListObjectElement` | The updated row data. |

If there is no element at that index in the table, it is simply added. To update an existing row, find its index and create a `CustomListObjectElement`.

## Minimal example

A simple simulation of live updates every two seconds:

```csharp
using Peakboard.ExtensionKit;
using System.Timers;

namespace LiveDemo;

[Serializable]
public class LiveDataCustomList : CustomListBase
{
    private string _listName;
    private Timer _updateTimer;
    private CustomListObjectElementCollection _items;

    protected override CustomListDefinition GetDefinitionOverride()
    {
        return new CustomListDefinition
        {
            ID = "LiveDemoList",
            Name = "Live Demo Data"
        };
    }

    protected override CustomListColumnCollection GetColumnsOverride(CustomListData data)
    {
        return
        [
            new CustomListColumn("Timestamp", CustomListColumnTypes.String),
            new CustomListColumn("Value", CustomListColumnTypes.Number)
        ];
    }

    protected override CustomListObjectElementCollection GetItemsOverride(CustomListData data)
    {
        _items = new CustomListObjectElementCollection
        {
            new CustomListObjectElement
            {
                { "Timestamp", DateTime.Now.ToString() },
                { "Value", 0 }
            }
        };

        return _items;
    }

    // Called once when the list starts
    protected override void SetupOverride(CustomListData data)
    {
        _listName = data.ListName;

        _updateTimer = new Timer(2000);
        _updateTimer.Elapsed += (_, _) => PushUpdate();
        _updateTimer.Start();
    }

    private void PushUpdate()
    {
        var updatedItem = _items[0];
        updatedItem["Timestamp"] = DateTime.Now.ToString();
        updatedItem["Value"] = new Random().Next(0, 100);

        // Push the updated row back to the Designer
        Data?.Push(_listName).Update(0, updatedItem);
    }
}
```

1. **Initial data:** when the data source starts, `GetItemsOverride()` provides the initial row.
2. **Setup:** in `SetupOverride()`, a timer starts that calls `PushUpdate()` periodically.
3. **Live update:** each time the timer fires, the row is updated and pushed via `Data?.Push(_listName).Update(0, updatedItem);`. The change appears immediately in the Peakboard Designer or on the running dashboard – without requerying the data source.
