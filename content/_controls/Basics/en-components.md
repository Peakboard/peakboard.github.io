---
layout: article
title: Components
menu_title: Components
description: Combine multiple controls into a reusable component – master and instance in Peakboard Designer.
lang: en
weight: 40
ref: con-40
redirect_from:
  - /controls/en-components.html
---

A **component** groups several controls into a single reusable unit. Once a component has been created, it shows up like any other control in the control area and can be dropped onto any screen as often as needed. A change to the component itself (the **master**) is automatically reflected in every **instance**. Components are therefore ideal whenever the same layout appears in more than one place – typical examples are header bars, navigation bars, footers, KPI tiles, or status panels.

## Create a component

First arrange the controls on the canvas that should make up your component and align them the way you want. Then select all of them (for example via lasso, with `Ctrl + A`, or by clicking with the `Ctrl` key held). Right-click anywhere on the canvas to open the context menu and choose [Create component] – the keyboard shortcut `Ctrl + Q` does the same thing.

![Context menu with Create component](/assets/images/Controls/Basics/components/components-01-contextmenu.png)

In the dialog that opens, give the component a meaningful name (for example `HeaderBar`) and optionally choose a color. The color is used solely for the icon in the control area and in the Explorer; it helps you tell several components apart at a glance. Confirm with [OK].

![Create Component dialog](/assets/images/Controls/Basics/components/components-02-create-dialog.png)

## Master and instance

Confirming the dialog triggers several things at once:

* The selected controls are wrapped in a group – this is the first **instance** of the component on the current screen.
* A new [Components] section appears in the Explorer, holding the **master** of your component (`HeaderBar` in this example).
* A new [Components] category appears in the control area. From there the component can be dragged onto any screen, just like any other control. Each group created this way is another instance that stays linked to the master.

![Component in the Explorer and the control area](/assets/images/Controls/Basics/components/components-03-overview.png)

The **master** is the template; **instances** are the copies that live on the screens. Changes to the master immediately propagate to every instance. Changes made directly to an instance only affect that single instance – the master and the other instances remain untouched.

## Editing a component

### Rename the master or change the color

Right-click the master in the Explorer's [Components] section to open the component's context menu.

![Master context menu](/assets/images/Controls/Basics/components/components-04-master-contextmenu.png)

* [Edit component] opens the familiar dialog with name and color.
* [Delete component] removes the master. Existing instances lose their link to it.
* [Show instances] highlights every place where the component is used, both in the Explorer and on the screens – very handy for keeping an overview in larger projects.

### Change the master's content

The actual content (which controls the component contains and how they look) is changed by opening any instance on the canvas and editing the controls inside it. To make the change show up in all other instances as well, right-click the modified instance in the Explorer and choose [Set as master]. The current state of the instance becomes the new template – all other instances pick up the change automatically.

![Instance context menu](/assets/images/Controls/Basics/components/components-05-instance-contextmenu.png)

### Local changes to an instance

As long as a change is not written back via [Set as master], it only applies to the instance you edited. This lets you, for example, tweak the title of the header bar on a specific screen without changing the global layout.

### Sync an instance with the master

To roll back local changes on an instance and align it with the master again, choose [Reset to master] from the instance context menu. All individual modifications are discarded and the instance matches the template exactly.

### Detach an instance from the master

If an instance should live on its own from now on, choose [Detach from component]. The instance is converted into a regular group and is no longer linked to the master.

## Typical use cases

* **Header and footer bars** that should look the same on every screen. A single change to the master updates every screen at once.
* **Navigation bars** with several buttons that switch screens via [Screen change].
* **Recurring KPI tiles** or **status panels** that need a consistent look.
* **Branding elements** such as logos combined with a clock that you want to reuse in every application.

If you simply want to move or align several controls together without needing the reusability of a master, the [Group] function (`Ctrl + G`) from the same context menu is the simpler choice.
