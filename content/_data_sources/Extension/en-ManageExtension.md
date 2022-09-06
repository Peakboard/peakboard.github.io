---
layout: article
title: Manage extensions 
menu_title: Manage extension 
description: Basic information about the Peakboard Extension Kit
lang: en
weight: 2605
ref: dat-2605
redirect_from:
---

### Adding extensions
To add an extension to the Peakboard Designer, you need the extension as a zip file.
Via the button [General] in the menu bar and a click on [Extensions] (1) you reach the management dialog of the extensions.

![Add extension](/assets/images/data-sources/extension/Peakboard-Extension_add-01_en.png)

There you click on the button [Add/Update] (2) and select your zip file.

![Add extension](/assets/images/data-sources/extension/Peakboard-Extension_add-02_en.png)

After restarting the Peakboard Designer, the extension appears under [Data sources] (3) as well as in the management dialog of the extensions.

![Add extension](/assets/images/data-sources/extension/Peakboard-Extension_add-03_en.png)

<div class="box-warning" markdown="1">
**Caution!**

It is not necessary to modify the Peakboard Box in any way. 
The extension is automatically loaded onto the Peakboard Box by the deploy process of a dashboard.
</div>

### Deleting extensions
To delete added extensions open the extension management dialog ([General], [Extensions]) and click on the arrow for the drop-down menu in the column [Action] and select [Delete] (4).

![Delete extension](/assets/images/data-sources/extension/Peakboard-Extension_delete_en.png)

After restarting the Peakboard Designer, the extension no longer appears in the data sources or the extensions management dialog.

### Downloading extension examples
You can find some extensions in our [Template Gallery](https://templates.peakboard.com/en/) which can be used directly.
Download the extension and add it to the Peakboard Designer as described above.

![Download extension](/assets/images/data-sources/extension/Peakboard-Extension_download_en.png)

### Writing your own extensions
If you want to adapt the extensions or write your own extension, you can also find the existing extensions in our [Github repository](https://github.com/Peakboard/PeakboardExtensions) and helpful articles such as [this one](https://help.peakboard.com/data_sources/Extension/en-DatasourceNoUI.html) in the Peakboard help. 
The examples are kept simple and show the applicable architecture clearly. 
Each extension is available in source code (directory SourceCode) and as a file for import (binaries).