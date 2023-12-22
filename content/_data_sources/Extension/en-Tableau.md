---
layout: article
title: Tableau token generator extension
menu_title: Tableau token generator extension
description: Information about using the Tableau token generator extension
lang: en
weight: 760
ref: dat-760
redirect_from:
---

In this article you will learn how to integrate your Tableau dashboards into a Peakboard application.
It covers creating a client secret in Tableau, installing the extension, configuring it in Peakboard, setting up variables and integrating an HTML code control. It also explains the steps for creating a refreshed script and testing in the preview.

To connect to Tableau, a token is required with which the Peakboard Designer can then access the various dashboards. This token is generated in the Peakboard Designer with the help of a [Peakboard Extension](/data_sources/Extension/en-Extension.html). The desired Tableau dashboard is then integrated into your application via [script](/scripting/en-script-engine.html) using an [HTML code control](/controls/Extended/en-html-code.html).

## Preparations in Tableau

To be able to display your Tableau dashboards in your Peakboard application, you must first make some preparations in Tableau. Open the menu item [Settings] and go to the [Connected apps] tab (1). Click on [New connected app] (2) to add an app.

![Connected apps](/assets/images/data-sources/extension/tableau/en_tableau-01.png)

Give the app a name (1), the remaining settings can be kept. Use the [Create] button (2) to add the app.

![New connected app](/assets/images/data-sources/extension/tableau/en_tableau-02.png)

You will automatically be taken to the overview of the newly created app. You will need a client secret to connect to the Peakboard Designer. Click on the [Generate new secret] button (1).

![Generate new client secret](/assets/images/data-sources/extension/tableau/en_tableau-03.png)

A field appears with the generated ID (1) and the value (2) of the client secret. You will need these values and the client ID (3) below them later. Click on [Back to the connected apps] (4) to return to the overview of the connected apps.

![Client secret](/assets/images/data-sources/extension/tableau/en_tableau-04.png)

In the [Actions] column, click on the three dots (1) in the row of the app you have just created and select [Activate] (2). You can now use the connected app in the Peakboard Designer.

![Activate app](/assets/images/data-sources/extension/tableau/en_tableau-05.png)

## Connection with the Peakboard Designer

### Install the Tableau token generator extension

Open the extension manager by right-clicking on [Data], [Add data source] and select [Manage extensions] (1).

![Open extension manager](/assets/images/data-sources/extension/tableau/en_tableau-06.png)

Click on [Install] (1) for the Tableau token generator extension and then restart the Peakboard Designer to activate the extensions.

![Install extension](/assets/images/data-sources/extension/tableau/en_tableau-07.png)

### Set up the extension

Add the Tableau token generator extension by right-clicking on [Data], [Add data source] and [Tableau token generator] (1).

![Add data source](/assets/images/data-sources/extension/tableau/en_tableau-08.png)

Give the data source a name (1). Then fill the fields in the [Specify details] area with the data from the client secret of the connected app from Tableau as follows.

{% include styled_table.html %}
| **Name**      | **Value**                                                                     |
|---------------|-------------------------------------------------------------------------------|
| Username      | Username from the Tableau account settings (2)                                |
| ClientId      | Client ID from the overview page of the connected apps in Tableau (3)         |
| Secret        | Secret ID from the overview page of the connected apps in Tableau (4)         |
| SecretValue   | Secret value from the overview page of the connected apps in Tableau (5)      |

![Configure data source](/assets/images/data-sources/extension/tableau/en_tableau-09.png)

![Tableau overview](/assets/images/data-sources/extension/tableau/en_tableau-10.png)

Use [Load data] to generate the token and confirm the creation of the data source with [OK].

### Add required variables

Two global variables are required for the script, the servername and the URL of the desired Tableau dashboard. The variables could also be integrated into the script as fixed elements, but changing them later would be much more complex. Right-click on [Variables] and [Add variable] (1) to add the first variable.

![Add variable](/assets/images/data-sources/extension/tableau/en_tableau-11.png)

Give it the name [Servername] (1), for example, select the data type string (2) and enter the highlighted part of the URL of the Tableau dashboard as the value (3).

![Variable Servername](/assets/images/data-sources/extension/tableau/en_tableau-12.png)

![Servername](/assets/images/data-sources/extension/tableau/en_tableau-13.png)

Create another variable of data type string (1). Name the variable [URL] (2) or something similar and give it the full URL of the Tableau dashboard (3) as the value.

![Variable URL](/assets/images/data-sources/extension/tableau/en_tableau-14.png)

![URL](/assets/images/data-sources/extension/tableau/en_tableau-15.png)

### Set up HTML code control

Drag the HTML code control (1) from the [Other] area onto the workspace.
You will later insert a dynamic HTML code into this. The control processes this code and displays the HTML-based Tableau Dashboard.

![Add HTML code control](/assets/images/data-sources/extension/tableau/en_tableau-16.png)

Activate the checkbox [Used in scripts] (1) in the [Logic] area and give the control a unique name (2), for example [WebWidget].
Also activate the checkboxes [Allow all certificates] (3) and [Allow cross-platform usage] (4)

![Configure HTML code control](/assets/images/data-sources/extension/tableau/en_tableau-17.png)

### Configure refreshed script

Right-click on the Tableau token generator extension data source and click on [Edit refreshed script] (1).

![Refreshed script](/assets/images/data-sources/extension/tableau/en_tableau-18.png)

Insert the following script:

```lua
local token = data.Peakboard_Tableau.first.Token
local html = "<script type=\"module\" src=\"https://" .. data.servername .. "/javascripts/api/tableau.embedding.3.latest.min.js\"></script>"
html = html .. "<tableau-viz id=\"tableauViz\" src=\"" .. data.URL .. "\" width=\"1920\" height=\"883\" toolbar=\"bottom\" iframe-auth token=\"" .. token .."\"></tableau-viz>"
screens['Screen1'].WebWidget.htmlcode = html
```

The script embeds the Tableau dashboard in the HTML code control. The following parameters and variables are used in the code:

1. `local token = data.Peakboard_Tableau.first.Token`:
   - **Parameter:** `Token`
   - **Description:** This is the authentication token that is required to access the Tableau Dashboard. The token is obtained from the data source named `data.Peakboard_Tableau`.

2. `local html = "<script type=\"module\" src=\"https://" .. data.servername .. "/javascripts/api/tableau.embedding.3.latest.min.js\"></script>"`:
   - **Parameter:** `data.servername`
   - **Description:** This is the name of the server on which the Tableau application is hosted. This value is used to create the path to Tableau.

3. `html = html .. "<tableau-viz id=\"tableauViz\" src=\"" .. data.URL .. "\" width=\"1920\" height=\"883\" toolbar=\"bottom\" iframe-auth token=\"" .. token .."\"></tableau-viz>"`:
   - **Parameter:** `data.URL`, `width`, `height`, `toolbar`, `iframe-auth`, `token`
   - **Description:**
     - `data.URL`: The URL of the specific Tableau dashboard to be embedded.
     - `width` and `height`: The width and height of the embedded dashboard. Here they are set to 1920x883 pixels.
     - `toolbar`: Position of the Tableau toolbar (here at the bottom). It controls where and whether the toolbar is displayed.
     - `iframe-auth token`: This is the authentication token defined above and is used to access the dashboard.

4. `screens['Screen1'].WebWidget.htmlcode = html`:
   - **Parameter:** `screens['Screen1'].WebWidget.htmlcode`
   - **Description:** This part of the code assigns the previously created HTML script (`html`) to the HTML code control (`WebWidget`) on the screen `Screen1`. This displays the Tableau dashboard on this screen.

Using further parameters in the dynamic HTML, you can restrict the Tableau dashboard and get rid of the toolbars or tabs, you can set up filters or allow or disallow certain levels of interactivity. You can find out what options are available [in the Tableau documentation](https://help.tableau.com/current/api/embedding_api/en-us/docs/embedding_api_configure.html).

Replace the names of the referenced data source [Peakboard_Tableau], the HTML code control [WebWidget] and the variables [Servername] and [URL] with the names you used and save the script.

![Refreshed script](/assets/images/data-sources/extension/tableau/en_tableau-19.png)

In the settings of the Tableau token generator extension data source, adjust the reload state to [On Startup] (1) so that the token is only generated once.

![Reload state data source](/assets/images/data-sources/extension/tableau/en_tableau-20.png)

Set the refresh time of the HTML code control in the attributes to 60 seconds (1) so that the tableau dashboard is reloaded once a minute.

![Refresh time control](/assets/images/data-sources/extension/tableau/en_tableau-21.png)

## Test the application in the preview

To test whether everything works, open the [Preview]. The application now displays the selected Tableau dashboard and updates it once a minute

![Preview](/assets/images/data-sources/extension/tableau/en_tableau-22.png)
