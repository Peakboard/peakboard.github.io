---
layout: article
product: hub
title: Peakboard LINK
menu_title: Peakboard LINK
description: Host the Peakboard Runtime inside the Peakboard Hub and show your Peakboard applications on any screen with a browser - no Peakboard Box needed.
lang: en
weight: 560
ref: hub-560
redirect_from:
  - /peakboard-link
  - /peakboard-link.html
---

With Peakboard LINK, the Peakboard Hub runs the Peakboard Runtime itself. You upload a Peakboard application (`.pbmx`) to the Peakboard Hub, start it there as a Peakboard LINK, and every screen that should show it just opens a link in its browser. There is no Peakboard Box and no BYOD device to set up on the screen: a TV with a browser, a tablet or a PC is enough. Data sources, scripts and Building Blocks run in the Peakboard Hub, and the screen only displays the application and passes on the user's input.

<div class="box-warning" markdown="1"> **Note:**
Peakboard LINK is currently a beta feature. It is available in the Peakboard Hub on premise only (not in Peakboard Hub online), and your Hub license has to include Peakboard LINK licenses. To use Peakboard LINK, you need the right **ManagePeakboardLinks** (*Can add and manage hosted Peakboard LINKs*) under [Users] > user group > **Access**. Administrators always have it.
</div>

The main terms at a glance:

- **Peakboard LINK:** a Peakboard application (`.pbmx` file from [Files](/hub/en-hub_files.html)) that is hosted in the Peakboard Hub.
- **Instance:** a running copy of a Peakboard LINK. Each instance has its own board URL and its own values for upload-defined variables. One Peakboard LINK can have several instances, for example one per production line.
- **Screen:** a browser that opens the board URL of an instance. Every screen needs a license.

### Run a Peakboard application as Peakboard LINK

![Run as Peakboard LINK in Files](/assets/images/hub/peakboard-link/peakboard-link-01-run-as-link.png)

1. **Upload the application:** Open [Files] in the sidebar and upload your `.pbmx` file with [Add file] (see [Files](/hub/en-hub_files.html)).
2. **Start it as Peakboard LINK:** Right-click the file (1) and choose [Run as Peakboard LINK] (2) under **Upload application**.

The Peakboard Hub creates the Peakboard LINK, adds its first instance and opens the **Peakboard LINK** page. Name and thumbnail are taken from the project file. A file can only be hosted once. If a file is already running as Peakboard LINK, the context menu offers [Open Peakboard LINK] instead.

### The Peakboard LINK page

![Peakboard LINK overview](/assets/images/hub/peakboard-link/peakboard-link-02-overview.png)

Open **Peakboard LINK** in the sidebar (directly below **Peakboard Boxes**). There is one tile for every Peakboard LINK:

1. **Available licenses:** how many of your Peakboard LINK licenses are still free, out of all licenses. A click opens the list of screens (see below). The number turns orange when all licenses are assigned.
2. **[New Instance]:** adds another instance of the same application. It gets its own board URL and starts right away. Existing instances and the screens that show them are not affected.
3. **Gear of the Peakboard LINK:** [Rename], [Show all variables] / [Hide all variables] (only if the application has upload-defined variables) and [Delete]. Deleting a Peakboard LINK stops and removes all of its instances.
4. **Source file:** the `.pbmx` file in Files. Uploading a new version of this file does **not** change the running instances. Instead, the tile shows **New version available.** with the link [Update project]. Click it to update the Peakboard LINK to the current file version. Its instances are restarted, so the screens showing them are interrupted briefly.
5. **QR code:** the board URL of this instance. Scan it with a tablet or phone to open the board.
6. **Board URL:** the address a screen has to open. Use the copy icon to copy it to the clipboard. The info icon explains where the address comes from (see [External address](#external-address)).
7. **Connected clients:** the number of screens that currently show this instance. A click opens the **Information** dialog with the tabs **Clients** (screens connected right now and in the last 7 days, and [Find clients], which shows the instance and screen name on every connected screen for 20 seconds) and **Resources** (live CPU and memory of the instance).
8. **Start / Stop:** starts or stops the instance. The status next to the name shows **Starting…**, **Running** or **Stopped**.
9. **Gear of the instance:** [Information], [Show screenshot] (a picture of what the instance shows right now, only while it is running), [Rename], [Access control] and [Delete].

If the application uses upload-defined variables, every instance shows a collapsible **Upload defined Variables** table. There you can give each instance its own values. A changed value is applied with the check mark to the running board right away.

### Show the board on a screen

Open the board URL of an instance in the browser of the screen, or scan the QR code. The first time, the screen is not licensed yet:

![This screen is not licensed](/assets/images/hub/peakboard-link/peakboard-link-03-screen-not-licensed.png)

The page shows a **Screen code** (1) that identifies this screen. It stays open and shows the board by itself as soon as the screen has a license. Alternatively (2), a Hub user who holds a **Peakboard LINK user license** can sign in on this page. The screen then needs no license of its own (see [Peakboard LINK user licenses](#peakboard-link-user-licenses)).

To assign a license to the screen:

![Assign a Peakboard LINK license to a screen](/assets/images/hub/peakboard-link/peakboard-link-04-assign-license.png)

1. On the **Peakboard LINK** page, click the **Available licenses** tile. The dialog **Peakboard LINK devices** opens.
2. Under **Active devices**, find the screen with the matching **Code** (1). The list contains all screens that hold a license, and all unlicensed screens that tried to open a board in the last 24 hours. Use the pencil next to a device name to give the screen a meaningful name, for example *Hall 2 - line 1*.
3. Switch on **License** (2). The number of available licenses (3) goes down by one.

The screen now shows the application:

![The Peakboard application running in the browser](/assets/images/hub/peakboard-link/peakboard-link-05-board-in-browser.png)

The application runs in the Peakboard Hub and is fully interactive in the browser. Buttons, filters and inputs work as they do on a Peakboard Box.

A license belongs to its screen, and a screen is one browser on one device. It stays with the screen until you switch it off again in the same list. Unlicensed screens that are not used any more disappear from the list after 7 days. If all licenses are assigned, free a license on another screen first.

### Protect a board with an access code

By default, anyone who knows the board URL can view the board on a licensed screen. To limit this, protect the instance with an access code:

![Access control in the instance menu](/assets/images/hub/peakboard-link/peakboard-link-06-instance-menu.png)

1. Click the gear of the instance and choose [Access control] (1).

![Access control dialog](/assets/images/hub/peakboard-link/peakboard-link-07-access-control.png)

2. Switch on **Require an access code** (1). The change applies immediately.
3. The **Current code** (2) is a 5-digit code. Copy it with the copy icon and share it with the people who may view the board.
4. [Regenerate code] (3) creates a new code. Screens that already use the old code have to enter the new one.

A screen that opens the board the first time now shows **Access code required**. After entering the correct code and clicking [Open board], the board opens and the screen remembers the code. A lock icon next to the instance status shows that an access code is required, and a click on it opens the same dialog.

### External address

Every board URL and QR code uses the address under which the screens reach the Peakboard Hub. It is **not** the address you are currently using in your browser. Otherwise, a link opened on the Hub server itself would say *localhost* and work nowhere else.

![External Address in the settings](/assets/images/hub/peakboard-link/peakboard-link-08-external-address.png)

Open [Settings] and go to the **Hub Endpoints** tile. Enter the address the screens use in **External Address** (1), for example a DNS name such as `hub.contoso.com`, an IP address such as `10.0.0.7`, `10.0.0.7:5000` or `https://hub.contoso.com` (2). While the field is empty, the Peakboard Hub determines the address automatically. It uses the host of its own listen endpoint, then the server hostname, then the first external IP address of the server, and finally 127.0.0.1. The port always comes from the endpoint the Peakboard Hub really listens on. Set the address whenever screens reach the Peakboard Hub under a different name, for example a DNS alias or a reverse proxy.

### Peakboard LINK user licenses

Besides the licenses for screens, your Hub license can include **Peakboard LINK user licenses**. A user who holds one can sign in on the license page of any screen and open the Peakboard LINKs assigned to that user. The screen itself then needs no license.

![Peakboard LINK users](/assets/images/hub/peakboard-link/peakboard-link-09-users.png)

Open **Peakboard LINK** > **Users** in the sidebar:

1. **Available user licenses:** free user licenses, out of all user licenses in your Hub license.
2. **User license:** switch it on to give the user a Peakboard LINK user license.
3. **From user group:** while this is on, the user may open the Peakboard LINKs of their user group. Switch it off to pick the Peakboard LINKs for this user with [Add] / [Edit] instead.
4. **Peakboard LINKs:** the Peakboard LINKs this user may open on a screen.

Which Peakboard LINKs a user group may manage is set in [Users] > user group > tab **Peakboard LINK**.
