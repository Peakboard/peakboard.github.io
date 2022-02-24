---
layout: article
title: Forcam Force as Data Source for Peakboard
menu_title: Forcam Force as Data Source for Peakboard
description: Forcam Force as Data Source for Peakboard
lang: en
weight: 11200
ref: misc-11200
redirect_from:

---

## How to use Forcam as a data source for Peakboard.

For the connection of Forcam, the Force Bridge API, a so-called REST API, is used. 
Calls can be made via this API which return certain information.
A documentation of the Force Bridge API can be found [here.](https://forcebridge.io/en/)

The individual calls of the REST API can be explored in the Swagger tool of the API. 
You get access to this from Forcam itself.



![image_1](/assets/images/misc/Forcam/Forcam1.png)



Once you have found the desired query in the Swagger tool, you can copy the request URL 
and use it in the Peakboard Designer.

To do this, create a new JSON data source in the Peakboard Designer.



![image_1](/assets/images/misc/Forcam/Forcam2.png)



This requires a name and a reload interval.
For the source type URL must be defined and for the base URL the request URL copied in the Swagger tool. 

After pasting the URL, it will be automatically split into the base URL and the URL path for the specific query. 
This allows the base URL to be used as an existing connection in multiple JSON data sources.

To access the REST API of Forcam it requires an OAuth authentication. 
This can be selected under the Authentication Type. 
If the button Request Token is clicked, a mask opens automatically, in which FORCE Bridge can be selected under the item Preferences. 
This automatically fills in some standard fields. 
Now only the URL of the Forcam API must be inserted in the Access Token URL. 
This corresponds to the base URL of the queries. In addition, the client ID and the client secret provided by Forcam must be entered. 
After that, a token can be requested via Request Token.



![image_1](/assets/images/misc/Forcam/Forcam3.png)



After the OAuth authentication has been completed successfully, data from the REST API can already be loaded via Load data. 
In order to define which data from the result should be displayed exactly, the path can be defined via the path, which should be used in the JSON response.