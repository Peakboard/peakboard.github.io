---
layout: article
title: Flows
menu_title: Flows
description: Flows control when and in what order data sources and dataflows are reloaded.
lang: en
weight: 10
ref: dat-10
redirect_from:
 - /misc/en-reloadflows.html
 - /data_sources/basics/en-reloadflows.html
---

### Function

Flows (formerly *Reload Flows*) define when and in which order data sources and dataflows are reloaded.
They are useful whenever a data source or dataflow has to be loaded after another one finishes, or when reloading needs to follow a schedule.

Flows can be used with any pull data source that supports a reload interval. Event-based sources such as MQTT or OPC UA cannot be reloaded by a **Reload** step, because they decide on their own when to update. They can, however, be used as a **trigger**: with the **After data reload** trigger, an incoming MQTT message or OPC UA value change starts the flow.

### A flow is built from these elements

{% include styled_table.html %}
{: .w-full }
| Trigger     | Decides *when* the flow runs. Four triggers are available today: **Periodic (sec)** for a fixed interval in seconds, **Schedule** for a weekday/time schedule, **After data reload**, which fires the flow as soon as a specific data source has finished reloading, and **After function execute**, which fires the flow as soon as a specific function has run. |
| Step        | A unit of work executed by the flow. The **Reload** step reloads any data source or dataflow. The **Run function** step executes a Lua function you created beforehand in the package explorer — for example to compute values, prepare data, or trigger follow-up actions. Steps run sequentially in the order shown. |
| Failure function | An optional Lua function that runs when a step fails. Useful for logging, alerting, or running compensating actions. |

<div class="box-tip" markdown="1">**Note**

The same data source or dataflow may be used in multiple flows.
Be careful not to create endless loops — for example by using an **After data reload** trigger that reloads the very data source it listens to.
</div>

### Creating a flow

To create a new flow, click the [Project] menu in the [Home] tab of the Peakboard Designer (1) and then click [Flows] (2).

![Open Flows from the Project menu](/assets/images/data-sources/reload-flows/reloadflows-01-project-menu.png)

As long as no flows exist, the **Manage flows** dialog shows an empty state with two entry points: the [+] icon in the left column (1) and the central [Add flow] button (2). Either one opens the editor for a new flow.

![Manage flows – empty state](/assets/images/data-sources/reload-flows/reloadflows-02-manage-flows-empty.png)

### Configuring the flow

In the editor, first give the flow a name (1). Then drag the building blocks from the [Select triggers and steps] panel on the right into the highlighted drop zones in the middle area:

- A **trigger** from the right-hand trigger picker (4) onto the yellow drop band in the **Triggers** section (2). In the example, **Periodic (sec)** is set to fire every 60 seconds. A flow can have one or more triggers.
- A **step** from the right-hand step picker (5) onto the drop band in the **Steps** section (3). The **Reload** step then shows a dropdown where you pick the data source or dataflow to reload — *test* in the example.

The order of the steps defines the execution order — you can rearrange them at any time by dragging. To remove a trigger or step, use the trash-can icon at the right end of the row.

![Configure a flow](/assets/images/data-sources/reload-flows/reloadflows-03-flow-editor.png)

<div class="box-tip" markdown="1">**Note**

A flow without any trigger only runs when it is called manually, for example from a Lua script (`flows("MyFlow"):run()`).
</div>

Click [OK] to save the flow, or [Cancel] to discard the changes.

### Preparing data sources for flows

Before a flow can reload a data source, only the [Enabled] checkbox (1) in the **Reload** section of the configuration dialog needs to be turned on. That is all that is required: as soon as the data source is used in a **Reload** step, the **flow's trigger** decides when it is reloaded.

The mode selected under [Reload state] (2) and the [Interval (in s)] field (3) only control the data source's *own* independent reloading. When it is reloaded by a flow, the flow trigger overrides that interval — a periodic schedule set here has no effect. In practice it is therefore enough to set [Reload state] to **Manual** and leave all timing to the flow.

![Reload options of a data source](/assets/images/data-sources/reload-flows/reloadflows-04-datasource-reload-section.png)

### Running functions in a flow

Besides data sources, a flow can also execute your own **functions**. The function has to be created first in the package explorer under [Scripts] › [Functions] (1) — only then is it available in the flow.

![Create a function in the package explorer](/assets/images/data-sources/reload-flows/reloadflows-05-function-in-explorer.png)

Then, in the flow editor, drag the **Run function** step (2) from the right-hand step picker into the **Steps** section and pick the function from the dropdown (1). In addition, the **After function execute** trigger (3) is available to start a flow as soon as a specific function has run.

![Run function step in the flow](/assets/images/data-sources/reload-flows/reloadflows-06-run-function-step.png)

### Editing or deleting existing flows

In the **Manage flows** dialog, pick the flow you want to change from the list on the left. The three-dot menu next to the flow name lets you rename or delete the flow. Triggers and steps can be removed by hovering over the entry and clicking the trash-can icon that appears.

<div class="box-tip" markdown="1">**Tip**

The optional **Failure function** lets you attach a Lua function that runs whenever a step in the flow fails. This is a clean way to write failed reloads to a log data source or fire an alerting push notification.
</div>
