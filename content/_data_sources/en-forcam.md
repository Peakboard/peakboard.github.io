---
layout: article
title: Forcam Force as Data Source for Peakboard
menu_title: Forcam Force
description: Forcam Force as Data Source for Peakboard
lang: en
weight: 650
ref: dat-650
redirect_from:

---

## How to use Forcam as a data source for Peakboard.

To connect to Forcam, the Force Bridge API, a so-called REST API, is used. 
Calls can be made via this API, which return certain information.
A documentation of the Force Bridge API can be found [here](https://forcebridge.io/en/).

In the swagger tool of the API you can explore the individual calls of the REST API. 
You get access to this from Forcam itself.



![swagger tool](/assets/images/data-sources/forcam/en_swaggertool.png)



Once you have found the desired query in the swagger tool, you can copy the request URL and use it in the Peakboard Designer.

To do this, create a new [JSON Data Source](/data_sources/en-json.html) in the Peakboard Designer (1).



![JSON Data Source](/assets/images/data-sources/forcam/en_forcam-addjson.png)



Give the data source a name (2) and a reload interval (3).
For [Source Type] select [URL] (4) and in the [Base Url] field paste the request URL copied from the swagger tool (5). 



![JSON Configuration](/assets/images/data-sources/forcam/en_forcam-jsonconfig.png)



After inserting the URL, it will be automatically split into the base URL and the URL path for the specific query. 
This way you can use the base URL in multiple JSON data sources as an existing connection.

To access the REST API of Forcam, you need an OAuth authentication. 
You select this in the drop-down [Authentication Type] (6). 
If you click on the button [Request New Token] (7), a mask opens automatically, in which you select FORCE Bridge in the drop-down menu [Presets] (8). 



![JSON OAuth](/assets/images/data-sources/forcam/en_forcam-jsonoauth.png)



This will auto-fill some standard fields. 
Now you only have to insert the URL of the Forcam API in the Access Token URL (9). 
This corresponds to the base URL of the queries. Additionally you have to enter the [Client ID] and the [Client Secret] provided by Forcam in the corresponding fields (10). 
Then you can request a token via the [Request Token] button (11).



![JSON OAuth](/assets/images/data-sources/forcam/en_forcam-jsontest.png)



After the OAuth authentication has been completed successfully, you can already load data from the REST API via the [Load Data] button(12). 
To specify which data from the result should be displayed, you can use [Path] (13) to define the path that should be used in the JSON response.



In [this video](https://www.youtube.com/watch?v=kZlCyePq61A) it is explained again how the Forcam connection is established in the Peakboard Designer.

Translated with www.DeepL.com/Translator (free version)