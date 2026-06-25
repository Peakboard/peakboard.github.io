---
layout: article
title: Live-Datenaktualisierung mit Data.Push
menu_title: Live-Datenaktualisierung
description: Live-Datenaktualisierungen aus einer Extension mit Data.Push an den Designer oder die Box senden
lang: de
weight: 745
ref: dat-745
redirect_from:
---

Peakboard kann Daten aus einer laufenden `CustomListBase`-Extension über die Schnittstelle `Data.Push` aktualisieren. Dieser Mechanismus ist für echtzeit- oder abonnementbasierte Datenquellen unverzichtbar (z.B. BACnet, MQTT, OPC UA, IoT-Sensoren). Er sendet Live-Aktualisierungen an den Designer oder die Box, **ohne** den gesamten Datensatz neu zu laden – typischerweise, wenn sich ein Wert extern ändert (z.B. über ein COV-Event, eine WebSocket-Nachricht oder ein periodisches Abonnement).

## Überblick über den Lebenszyklus

Wenn eine Custom List von Peakboard geladen wird, durchläuft sie mehrere Lebenszyklus-Methoden:

| Methode | Auslöser | Zweck |
|---|---|---|
| `GetColumnsOverride()` | Bei der ersten Verbindung | Definiert das Tabellenschema (Spalten) |
| `GetItemsOverride()` | Beim ersten Laden der Daten | Liefert die initialen Zeilen |
| `SetupOverride()` | Direkt nach der Initialisierung der Datenquelle | Hintergrundaufgaben, Abonnements und Timer einrichten sowie den Listenkontext (z.B. den Listennamen) erfassen |
| `ExecuteFunctionOverride()` | Beim Aufruf einer Lua-Funktion | Führt Ausführungslogik aus (Schreiben, Neuberechnen usw.) |

## Die Methode SetupOverride

`SetupOverride` wird einmalig aufgerufen, wenn die Extension geladen bzw. die Datenquelle im Peakboard Designer verbunden wird. Nutze sie, um Verbindungsobjekte zu initialisieren (z.B. BACnet-, MQTT-Clients), externe Abonnements zu registrieren (COV-Events) und den aktuellen Listennamen für spätere Aktualisierungen zu speichern:

```csharp
protected override void SetupOverride(CustomListData data)
{
    // Listennamen speichern, um ihn später beim Pushen von Aktualisierungen zu referenzieren
    _listName = data.ListName;

    Log.Info($"Setting up list: {_listName}");

    // Beispiel: Live-Daten abonnieren oder einen Timer starten
    SubscribeToLiveData();
}
```

## Daten im laufenden Betrieb aktualisieren

Sobald du den Listennamen hast (aus `data.ListName`), kannst du bestehende Zeilen aktualisieren:

```csharp
Data?.Push(_listName).Update(index, updatedItem);
```

| Parameter | Typ | Beschreibung |
|---|---|---|
| `_listName` | `string` | Der interne Name der Liste im Peakboard Designer. |
| `index` | `int` | Der zu aktualisierende Zeilenindex (0-basiert). |
| `updatedItem` | `CustomListObjectElement` | Die aktualisierten Zeilendaten. |

Existiert an diesem Index kein Element in der Tabelle, wird es einfach hinzugefügt. Um eine bestehende Zeile zu aktualisieren, ermittelst du ihren Index und erstellst ein `CustomListObjectElement`.

## Minimalbeispiel

Eine einfache Simulation von Live-Aktualisierungen alle zwei Sekunden:

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

    // Wird einmalig beim Start der Liste aufgerufen
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

        // Aktualisierte Zeile zurück an den Designer pushen
        Data?.Push(_listName).Update(0, updatedItem);
    }
}
```

1. **Initiale Daten:** Beim Start der Datenquelle liefert `GetItemsOverride()` die initiale Zeile.
2. **Setup:** In `SetupOverride()` wird ein Timer gestartet, der `PushUpdate()` periodisch aufruft.
3. **Live-Aktualisierung:** Bei jedem Timer-Durchlauf wird die Zeile aktualisiert und über `Data?.Push(_listName).Update(0, updatedItem);` gepusht. Die Änderung erscheint sofort im Peakboard Designer oder auf dem laufenden Dashboard – ohne die Datenquelle erneut abzufragen.
