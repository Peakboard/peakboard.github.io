---
layout: article
title: Manage extensions 
menu_title: Manage extension 
description: Basic information about the Peakboard Extension Kit
lang: en
weight: 710
ref: dat-710
redirect_from:
---

### Add and delete extensions

Via [Data], [Add data source] and [Manage extensions] (1) you can access the management dialog for the Peakboard Extensions. Currently installed extensions are already displayed above this point.

![Manage extensions](/assets/images/data-sources/extension/en_extension_add-01.png)

You'll find an overview of the extensions provided by Peakboard. Already installed extensions are marked accordingly (1).
To install an extension, click on the [Install] (2) button below the desired extension.
To delete already installed extensions, click on the trash can icon (3) below the respective extension.

![Add extension](/assets/images/data-sources/extension/en_extension_add-02.png)

To apply the changes, you have to restart the Peakboard Designer.
The currently added extensions are now visible under [Data], [Add data source] (4).
Deleted extensions are no longer visible there.

![Add extension](/assets/images/data-sources/extension/en_extension_add-03.png)

<div class="box-warning" markdown="1">
**Caution!**

It is not necessary to modify the Peakboard Box in any way.
The extension is automatically loaded onto the Peakboard Box by the deployment process of a dashboard.
</div>

### Write extensions yourself

If you want to adapt the extensions or write your own extension, you can also find the existing extensions in our [GitHub repository](https://github.com/Peakboard/PeakboardExtensions) and helpful articles e.g. [here](https://help.peakboard.com/data_sources/Extension/de-DatasourceNoUI.html) in the Peakboard help.
The examples are kept simple and show the applicable architecture clearly.
Each extension is available in source code (directory SourceCode) and as a file to install (binaries).

### Installing your own Extension

To add your own extension to Peakboard Designer, you need the extension as a zip file.
Click in the Extension management under [Data], [Add data source], [Extensions] and [Manage extensions] on [Add custom extension] (1), then select the zip file to install the extension.

![Add your own extension](/assets/images/data-sources/extension/en_extension_add-04.png)

To apply the changes, you have to restart the Peakboard Designer.
The newly added custom extension is now visible under [Data], [Add data source], [Extensions].
