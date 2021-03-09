---
layout: article
title: Manage Peakboard Edge
menu_title: Manage Peakboard Edge
description: Information about the management of a Peakboard Edge
lang: cn
weight: 2710
ref: dat-2710
redirect_from:
---

![img01](/assets/images/data-sources/peakboard-edge/manage01.png)

Start Designer and open main view

In the menu bar at the top, select "Home". 

Click on the "Manage / Test" button in the "PB Edge" field to open the Edge management interface

 
![img02](/assets/images/data-sources/peakboard-edge/manage02.png)

The management interface is structured analogous to the management interface of Peakboard Boxes. 

On top: there are different buttons for actions with one or more selected edges.

Center: contains all already added Peakboard Edge

Downstairs: There are two buttons to add a new PB Edge, and to close the interface


### Actions with an Edge:
In the management interface, select one or more (hold down CTRL) Edge(s). 

Select a possible action from the upper menu bar. Note: Multi-Edge actions are performed on all selected edges when multiple edges are selected. Single-edge actions can only be performed when exactly one Edge is selected.


### Add a new Edge:
To manage a Peakboard Edge and to integrate it into a visualization it has to be added to the designer.

![img03](/assets/images/data-sources/peakboard-edge/manage03.png)

"Open the "Select Edge" dialog via the "Add" button in the administration dialog

Select one of the displayed Peakboard Edge OR enter the desired data under "Name or IP Address

Enter the password supplied with the Peakboard Edge.

ALTERNATIVE: Enter data for authorization via a proxy.

Confirm via the "OK" button and add the Peakboard Edge to the Designer

 
### Test the connection to Edge:
The connection test is used to check if a connection between Designer and Edge is possible, as well as to test if the devices connected to the Edge work and are connected correctly.

![img04](/assets/images/data-sources/peakboard-edge/manage04.png)

"Open the "Peakboard Edge connection test" dialog via the "Test connection" button of the administration interface

Wait until the "Connection status" is green and a connection to the Edge is established. Note: If it takes longer than a few seconds to connect, there is probably a problem. See the Troubleshooting section → Connection issues may help.

If you already have input or output devices connected to the Edge, you can test them by following these steps:

You can play a sound on the Edge using the sound selector if a USB speaker is connected.

"Received String value" shows the last text value read by the Edge (A barcode scanner, keyboard, RFID reader, ...) must be connected via USB.

Using the "OUTPUT" check boxes the relays on the Peakboard Edge can be switched (can be heard by an acoustic "click" on the Edge. Simulates the switching of a connected traffic light or similar.

The "INPUT" checkboxes represent the values of the input pins of the terminal strip. Their status can be changed by a connected switch, for example.