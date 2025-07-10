---
layout: article
product: hub
title: Peakboard Hub API
menu_title: API
description: Peakboard Hub - API
lang: en
weight: 1000
ref: hub-1000
redirect_from:
---

The **Peakboard Hub API** enables seamless integration of Peakboard applications into custom environments. A Peakboard Hub Online or Peakboard Hub On-Premises license is required to use the API.

### Setting Up the Peakboard Hub API – On-Premises Only

To install the Peakboard Hub API, you need the Peakboard Hub Setup, which can be downloaded [here](https://downloads.peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe).

#### Prerequisites

The Peakboard Hub On-Premises is hosted locally on your server and requires:
- **IIS** and **Windows Server 2016 or newer**.
- The [ASP.NET Core 8.0 Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-8.0.6-windows-hosting-bundle-installer), which can also be installed during the Peakboard Hub Setup.

> **Note:** A running Peakboard Hub instance is essential for full API functionality. The API does not need to reside on the same server but must have access to the same database.

#### Installation

![Peakboard Hub Setup components selection](/assets/images/hub/hub_api-installation-01.png)

Download the setup and run it with administrator privileges.
In the **Component Selection** screen, select:
   - **Peakboard Hub API** (2): Installs the API.
   - **Configure API IIS Page** (3): Sets up an IIS page and app pool with default settings, which can be adjusted later if needed.

> **Note:** If the IIS page setup is not selected, you must create the IIS page and app pool manually.

If a Peakboard Hub instance is installed on the same system, the API will automatically use its database connection. Otherwise, select **Configure Database** (1) to specify a custom database connection.


> **Note:** If 'Configure Database' (1) is selected, the next screen will also ask for a Peakboard Hub installation path. If there is no Peakboard Hub you can ignore this, or if the Peakboard Hub should not be adjusted, just select an empty folder.


#### Updating the API

To update the API:
- Download the latest setup version [here](https://downloads.peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe).
- Select **Peakboard Hub API** (2) in the component selection.
- Select **.NET Hosting Bundle** or install the latest [ASP.NET Core 8.0 Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-8.0.6-windows-hosting-bundle-installer) manually.

### Using the Peakboard Hub API

#### API Key

![API key management](/assets/images/hub/hub_api-installation-02.png)

An API key is required to access the API. Generate the key from the user group page:

- **Peakboard Hub Online:** Log in at [hub.peakboard.com](https://hub.peakboard.com) and navigate to *Organization → API KEYS*.
- **Peakboard Hub On-Premises:** Log into your local Hub and navigate to *Users → API KEYS*.

API keys are tied to the permissions of the respective user group and grant access to specific resources within that group. Additionally there are api key specific permissions, which are
- **read:lists** 
- **write:lists**
- **read:alerts**
- **write:alerts**
- **read:box**
- **write:box**

You can also set an expiration period for each key.

> **Tip:** Keys can be managed, edited, or deleted from the same page.

> **Note:** You need *Users* access rights to manage API keys. If unavailable, ask an admin to create a key for you.

#### Authorization

To use the API:
Access the main API page for available calls:
   - **Peakboard Hub Online:** [https://api.peakboard.com/public-api/index.html](https://api.peakboard.com/public-api/index.html)
   - **On-Premises:** `<your-local-api-path>/public-api/index.html`

Obtain an authorization token by making a GET request to:
   - **Online:** [https://api.peakboard.com/public-api/v1/auth/token](https://api.peakboard.com/public-api/v1/auth/token)
   - **Peakboard Hub On-Premises:** `<your-local-api-path>/public-api/v1/auth/token`

   Include the header: `'apiKey': '<your-api-key>'`.

Use the token in subsequent calls by including the header:
   `'Authorization': 'Bearer <your-authorization-token>'`.

> **Note:** Tokens are temporary and must be renewed once expired.