---
layout: article
title: Erstellen einer einfachen Datenquelle mit UI
menu_title: Erstellen einer einfachen Datenquelle mit UI
description: Informationen über das Erstellen einer einfachen Datenquelle mit UI
lang: de
weight: 2630
ref: dat-2630
redirect_from:
---


Die folgenden Erklärungen beziehen sich auf ein Beispiel, dass [hier](https://github.com/Peakboard/PeakboardExtensions/tree/master/Samples/AirportConditions) heruntergeladen werden kann.


Die einfachste Methode, um einer CustomList zu bauen, ist sie mit generischen Properties auszustatten, wie im CatFacts-Beispiel gezeigt.
Für den Fall, dass eine anspruchsvollere UI nötig ist, lassen sich die Properties durch eine eigene UI ersetzen, indem die Funktion GetControlOverride überschrieben wird. Sie liefert eine Instanz eines WPF-Controls zurück.

```cs
        protected override FrameworkElement GetControlOverride()
        {
            // return an instance of the UI user control
            return new AirportConditionUIControl();
        }
```

Die Code-Seite dieses CustomControls ist durch eine Klasse repräsentiert, die von CustomListUserControlBase erbt. Wichtig dabei ist, dass die beiden Funktion GetParameterOverride und SetParameterOverride implementiert werden. Sie dienen für Serialisierung und Deserialisierung der Metadaten. Die Metadaten werden nur durch einen einzelnen String repräsentiert. Um mehr als einen Wert in diesem String zu speichern, eventuell sogar sehr komplexe Metadaten, ist ein typische Programmierpattern die Metadaten über eine JSon-Serialisierung zu managen, wie im folgenden Beispiel gezeigt:

```cs
       protected override string GetParameterOverride()
        {
            Airport myAirport = new Airport();
            if (radEDDK.IsChecked ?? false)
                myAirport.AirportCode = "EDDK";
            else if (radEDDB.IsChecked ?? false)
                myAirport.AirportCode = "EDDB";
            else if (radEDDF.IsChecked ?? false)
                myAirport.AirportCode = "EDDF";
            else if (radEDDM.IsChecked ?? false)
                myAirport.AirportCode = "EDDM";
            else if (radEDDH.IsChecked ?? false)
                myAirport.AirportCode = "EDDH";
            else 
                myAirport.AirportCode = "EDDS";
            return JsonConvert.SerializeObject(myAirport);
        }
```

```cs
        protected override void SetParameterOverride(string parameter)
        {
            Airport myAirport = new Airport();
            if (parameter != null)
                myAirport = JsonConvert.DeserializeObject<Airport>(parameter);
            if (myAirport.AirportCode.Equals("EDDK"))
                this.radEDDK.IsChecked = true;
            else if (myAirport.AirportCode.Equals("EDDB"))
                this.radEDDB.IsChecked = true;
            else if (myAirport.AirportCode.Equals("EDDF"))
                this.radEDDF.IsChecked = true;
            else if (myAirport.AirportCode.Equals("EDDM"))
                this.radEDDM.IsChecked = true;
            else if (myAirport.AirportCode.Equals("EDDH"))
                this.radEDDH.IsChecked = true;
            else
                this.radEDDS.IsChecked = true;
        }
```
