---
layout: article
title: Creating a simple data source with UI
menu_title: Create a simple data source with UI
description: Information about creating a simple data source with UI
lang: en
weight: 2630
ref: dat-2630
redirect_from:
---


The following explanations refer to an example that can be downloaded [here](https://github.com/Peakboard/PeakboardExtensions/tree/master/Samples/AirportConditions).


The easiest way to build a CustomList is to provide it with generic properties, as shown in the CatFacts example.
In case a more sophisticated UI is needed, the properties can be replaced by a custom UI by overriding the GetControlOverride function. It returns an instance of a WPF control.

```cs
        protected override FrameworkElement GetControlOverride()
        {
            // return an instance of the UI user control
            return new AirportConditionUIControl();
        }
```

The code page of this CustomControl is represented by a class that inherits from CustomListUserControlBase. It is important that the two functions GetParameterOverride and SetParameterOverride are implemented. They are used for serialization and deserialization of the metadata. The metadata is only represented by a single string. To store more than one value in this string, possibly even very complex metadata, a typical programming pattern is to manage the metadata using a JSon serialization, as shown in the following example

```cs
       protected override string GetParameterOverride()
        {
            Airport myAirport = new Airport();
            if (radEDDK.IsChecked ?? false)
                myAirport.AirportCode = "EDDK"
            else if (radEDDB.IsChecked ?? false)
                myAirport.AirportCode = "EDDB"
            else if (radEDDF.IsChecked ?? false)
                myAirport.AirportCode = "EDDF"
            else if (radEDDM.IsChecked ?? false)
                myAirport.AirportCode = "EDDM"
            else if (radEDDH.IsChecked ?? false)
                myAirport.AirportCode = "EDDH"
            else 
                myAirport.AirportCode = "EDDS"
            return JsonConvert.SerializeObject(myAirport);
        }
```

```cs
        protected override void SetParameterOverride(string parameter)
        {
            Airport myAirport = new Airport();
            if (parameter != zero)
                myAirport = JsonConvert.DeserializeObject<Airport>(parameter);
            if (myAirport.AirportCode.Equals("EDDK")
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
