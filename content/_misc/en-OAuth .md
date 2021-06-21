---
layout: article
title: Connecting applications via OAuth with Peakboard
menu_title: Connecting applications via OAuth with Peakboard
description: Connecting applications via OAuth with Peakboard
lang: en
weight: 725
ref: misc-725
redirect_from:
---

Learn how to use OAuth authentication for your apps with Peakboard.

### 1. On the side of the application to be added:
1. Open API management of the service to be connected.
2. If necessary, create a new project/application/clientID.
3. Add the Callback URL (Redirect URL) "https://www.peakboard.com/oauth2-callback/" to the created project.
(The stored callback URL must match the one from Peakboard Designer in every character)

### 2. In Peakboard Designer, add the application:
1. create new resource with appropriate data format (the format in which the application to be addressed returns data, usually json).
2. select "OAuth" as authorization
3. Use the "Request New Token" button to open the authorization window.

<div class="box-tip" markdown="1">
If a preset is used, step 2.1 can be skipped and proceed directly to step 2.2.
</div>

### 2.1 Not using a preset
1. Select "Custom" for Preset
2. select the grant type of the service to be connected as the grant type
- OAuth2 - Authorization Code Flow: Most used grant type for OAuth2
- OAuth2 - Password Code Flow: Should only be used for security reasons if the application to be connected does not offer an alternative.
- OAuth1: Used for applications that only support OAuth1 and not yet OAuth2.
3. Depending on the grant type selected, look up the Request URL, Authorization URL and Access Token URL with the application provider and enter them.
- Request URL (OAuth1 only, URL to request the initial Request Token)
- Authorization URL (OAuth1+OAuth2, URL of the authorization server)
- Access Token URL (OAuth1+OAuth2, URL to request/renew the access token).

### 2.2 Using a preset
- Select Preset (the Grant Type, Request URL, Authorization URL and Access Token URL will be filled in automatically).

### 3. Enter user-specific data about the application
1. Enter the ClientID obtained in step 1
2. Enter the ClientSecret received in step 1.
3. Certain requests require certain scopes. Enter all required scopes for the scheduled request. Multiple scopes are separated by a space.
4. Case needs to specify the Access Type. This is usually not required (except Google Cloud Platform). It may be filled in directly with the presets if the corresponding service supports an AccessType, but can also be removed if desired.

### 4. Authorize peakboard against the application 
1. Press the "Request Token" button. A browser window will open automatically.
2. In the newly opened browser window, perform the application login process.
3. If the login was successful, the browser window will close and the "Request New Token" button will be labeled "Authorized - Update Token".
4. This completes the authorization process.

### 5. General information about further procedures
1. The URL of the new web resource is now executed with authorization. Now requests to the API can be made here. The exact Url must be determined thereby with the appropriate application. Currently only Http-GET requests are possible.
2. Via the "Authorized - Update Token" button the existing authorization can be adjusted.
3. If desired, the authorization for Peakboard can be removed via the API management of the application (if not specified otherwise by the application).

