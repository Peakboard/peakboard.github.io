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

A **component** groups several controls into a single reusable unit. Once a component has been created, it shows up like any other control in the control area and can be dropped onto one or several screens. A change to the component itself (the **master**) is automatically reflected in every **instance**. Components are therefore ideal whenever the same layout appears in more than one place – typical examples are header bars, navigation bars, footers, KPI tiles, or status panels.

## Create a component

First arrange the controls on the canvas that should make up your component and align them the way you want. Then select all of them (for example via lasso, with `Ctrl + A`, or by clicking with the `Shift` key held). Right-click anywhere on the canvas to open the context menu and choose [Create component] – the keyboard shortcut `Ctrl + Q` does the same thing.

![Context menu with Create component](/assets/images/Controls/Basics/components/components-01-contextmenu.png)

In the dialog that opens, give the component a meaningful name (for example `HeaderBar`) and optionally choose a color. The color is used solely for the icon in the control area and in the Explorer; it helps you tell several components apart at a glance. Confirm with [OK].

![Create Component dialog](/assets/images/Controls/Basics/components/components-02-create-dialog.png)

## Master and instance

Confirming the dialog triggers several things at once:

* The selected controls stay on the screen as the **master** – from now on they act as the template for every further use.
* A new [Components] section appears in the Explorer, holding your component (`HeaderBar` in this example).
* A [Components] category appears in the control area. From there the component can be dragged onto any screen, just like any other control. Each placement created this way is a **slave instance** that stays linked to the master.

![Component in the Explorer and the control area](/assets/images/Controls/Basics/components/components-03-overview.png)

Every component has exactly **one master** and any number of **slave instances**. The master is just an ordinary placement on a screen – only that this one acts as the template. Changes to the master are picked up automatically by every slave instance. Changes made directly to a slave instance only affect that single slave; the master and the other slaves stay untouched.

## Editing a component

### Rename the master or change the color

Right-click the entry in the Explorer's [Components] section to open the component's context menu.

![Master context menu](/assets/images/Controls/Basics/components/components-04-master-contextmenu.png)

* [Edit component] opens the dialog with name and color.
* [Delete component] removes the component. Existing slave instances lose their link to it.
* [Show instances] highlights every place where the component is used, both in the Explorer and on the screens – very handy for keeping an overview in larger projects.

### Change the master's content

The content of the component is edited directly on the master on the canvas: expand the master in the Explorer and edit the controls inside it – change text, adjust colors, add or remove controls. Every slave instance picks up the change automatically as soon as it is saved. No extra step is required.

### Local changes on a slave instance

You can also let a single slave instance deviate locally without affecting the master or any other instance – for example, set a different title on the header bar of one specific screen. Simply edit the controls inside that slave instance on the screen. The other slaves and the master stay unchanged.

### Sync with the master

The context menu of a slave instance offers three actions that govern its relationship with the master.

![Slave context menu](/assets/images/Controls/Basics/components/components-05-instance-contextmenu.png)

* [Reset to master] discards all local modifications of the slave instance – the instance matches the master exactly again.
* [Detach from component] breaks the link to the master completely. The instance is converted into a regular [group](/controls/en-groups.html) and lives independently from then on.
* [Set as master] promotes a slave instance to become the new master. The previous master is demoted to a slave. Useful when one specific placement has the better setup and should become the template for everything else.

## Typical use cases

* **Header and footer bars** that should look the same on every screen. A single change to the master updates every screen at once.
* **Navigation bars** with several buttons that switch screens via [Screen change].
* **Recurring KPI tiles** or **status panels** that need a consistent look.
* **Branding elements** such as logos combined with a clock that you want to reuse in every application.

If you simply want to move or align several controls together without needing the reusability of a master, the [Group](/controls/en-groups.html) function (`Ctrl + G`) from the same context menu is the simpler choice.
