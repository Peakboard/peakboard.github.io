---
layout: article
product: hub
title: Link list cell to variable
menu_title: Link list cell to variable
description: Peakboard Hub - Link list cell to a variable
lang: en
weight: 640
ref: hub-640
redirect_from:
---

You can link individual cells in Peakboard Hub lists with Peakboard Hub variables.
This creates a bidirectional synchronization where changes to the variable automatically update the linked cell and vice versa.

### Link cell to variable

1. **Select cell (1):** Click on the cell in your list that you want to link to a variable. The selected cell is highlighted.
2. **Start the link (2):** Click [Bind to variable] in the upper menu bar.

![Select cell](/assets/images/hub/list-bind-variable/list-bind-variable-01-select.png)

3. **Select variable (1):** The [Link to Variable] dialog opens with the available variables. Since this example uses a string column, only string variables are shown for selection. Choose the desired variable.

![Select variable](/assets/images/hub/list-bind-variable/list-bind-variable-02-dialog.png)

After selection, the variable is linked to the cell. A link icon (1) in the cell indicates the existing connection.

![Linked cell](/assets/images/hub/list-bind-variable/list-bind-variable-03-bound.png)

### Remove link

1. **Select linked cell (1):** Select the cell whose link you want to remove.
2. **Select unbind (2):** Click [Unbind] in the menu bar.

![Remove link](/assets/images/hub/list-bind-variable/list-bind-variable-04-unbind.png)

3. **Confirm removal:** A confirmation dialog appears. Click [Yes] to remove the link between the cell and the variable.

![Confirm removal](/assets/images/hub/list-bind-variable/list-bind-variable-05-unbind-confirm.png)
