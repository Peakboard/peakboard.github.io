---
layout: article
title: Reload flows
menu_title: Reload flows
description: How reload flows work.
lang: en
weight: 11100
ref: misc-11100
redirect_from:

---
### Function

Reload flows are used to create an order in which data sources and dataflows are loaded. 

This is useful when data sources or dataflows need information from another data source or dataflow to be loaded. 
You can create reload flows for all pull data sources for which a reload interval can be defined. 
For example, you cannot load MQTT or OPC UA data sources in a reload flow.


### A reload flow consists of the following elements

{% include styled_table.html %}
{: .w-full }
| Reload flow element | An element that is used in the reload flow. This can be a data source or a dataflow. |
| Reload flow source | The data source or dataflow that triggers the reload flow. It can not be loaded from the reload flow it triggers. |
| Reload flow target | A reload flow element that is loaded by the reload flow. Any data sources that are reloaded at a specified time interval can be included here, as well as any dataflows. A reload flow target can also be a reload flow source if it is followed by other elements. |

<div class="box-tip" markdown="1">**Note**

Elements are not limited to use in a single reload flow.
You can use a data source or dataflow in multiple reload flows.
Please be careful not to create accidental continuous loops when using data sources or dataflows multiple times.
</div>


### Creating and editing a reload flow

To create a reload flow, click on the [Project] drop-down menu in the [Home] tab of the Peakboard Designer and then on [Reload Flows] (1).

![Create reload flow](/assets/images/misc/Reload_Flows/en_reloadflow-add.png)

Alternatively, set the reload state to [On Reload Flow] (2) during the configuration of a data source to get to the creation dialog as well.

![Create reload flow from data source](/assets/images/misc/Reload_Flows/en_reloadflow-add02.png)

In this dialog, you can now edit existing reload flows or create new reload flows.


#### Creating a reload flow
To create a new reload flow, click on the plus in the upper left corner of the dialog (3).
You can then give the reload flow a name (4) and add the reload flow elements (5) via the data sources on the right side by dragging and dropping them in the center area. 
In the center area you can specify the order in which the reload flow elements are loaded in this reload flow (6).

![Configure reload flows](/assets/images/misc/Reload_Flows/en_reloadflow-config.png)


#### Editing a reload flow
To edit an existing reload flow, select it in the left area of the reload flows dialog (7). 
You can then edit the name and the individual reload flow elements.
To change the order of the reload flow elements in a reload flow, you can drag and drop the individual reload flow elements. 
To delete a reload flow element from a reload flow, move the mouse over the reload flow element and click on the trash can next to the reload flow element (8).

![Edit reload flows](/assets/images/misc/Reload_Flows/en_reloadflow-config02.png)

If you want to delete a reload flow completely, move the mouse over the reload flow and click on the trash can (9).

You can save all changes within the dialog by clicking [OK] or discard them by clicking [Cancel].

![Edit reload flows](/assets/images/misc/Reload_Flows/en_reloadflow-config03.png)


#### Functions within the reload flow
Within the reload flow there are two functions. 
The first reload flow element serves as a reload flow source, so it cannot be loaded after the reload flow.
In the settings of this data source, you can define if the reload flow should only be triggered if data has changed or if it should be triggered in any case when the reload flow source is reloaded. (10)
If the reload flow is then triggered, all further reload flow targets will be reloaded.

![Configure data source](/assets/images/misc/Reload_Flows/en_reloadflow-datasource01.png)

If a reload flow element is already included in a reload flow, [On Reload Flow] is directly selected in the reload state when editing this data source.
Via the reload flows button (11) you can open the dialog to edit the reload flows.
If the reload flow element is not yet included in a reload flow, selecting this option will directly open the reload flows dialog.
Here you can either insert the reload flow element into an existing reload flow or create a new reload flow and add the element to it.

![Configure data source](/assets/images/misc/Reload_Flows/en_reloadflow-datasource02.png)

<div class="box-tip" markdown="1">**Note**

As mentioned above, a reload flow target can also be a reload flow source if other elements follow.
Additionaly, reload flow elements are not limited to use in a single reload flow.
This can result in a hybrid of the two options shown.
In this case, both the [Trigger Reload Flows with data change] (10) selection and the reload flows button (11) are shown in the data source settings.
</div>