---
layout: article
title: Instagram
menu_title: Instagram
description: Informatinon about Instagram Data in Peakboard
lang: en
ref: dat-16
---
This page explains the individual features when accessing Instagram data sources from Peakboard. Under the following link you will find a tutorial on how external data sources are generally configured and linked to Peakboard-Elements:

[Getting Started with External Data Sources Using the Example of an XML Data Source]()

The Instagram data source provides all raw data to build a complete Instagram feed later in the visualization. Like any other data source, it needs a name. You can define the time interval in seconds (reload interval) after which the data is loaded. Max Items is the maximum number of data rows, i. e. Instagram images or videos that are retrieved.

Basically, the Instagram elements can be selected using three methods: All posts of a certain account (By User Name), a hash tag or all images of a certain geographic location (see below). The Access token allows the Peakboard to access Instagram under your name. Access must always be personalized in accordance with Instagram’s terms and conditions. To get an Access Token, click Get Access Token. You will then need to enter your Instagram credentials to grant authorization. Please note that Peakboard never stores your access data anywhere. You can revoke authorization in the settings of your Instagram account at any time.

![image_1](/assets/images/Data_Sources/Instagram/datenquelleninstagram01.png)

A click on Preview shows you a preview of the raw data.

![image_1](/assets/images/Data_Sources/Instagram/datenquelleninstagram02.png)

The Instagram data source always has the same columns. They have the following meaning:

> *	**UserName:** is the Instagram name of the user
> *	**UserFullName:** is the full name of the user
> *	**caption:** is the caption including all hashtags
> *	**time stamp:** is a timestamp of the form YYYY. MM. DD hh: mm: ss
> *	**media URL:** is a URL to an image or video
> *	**MediaType:** Image or video depending on type
> *	**ProfileImageURL:** is the URL to the user’s profile picture
> *	**LocationName:** is the name of the geographical location if set by the user
> *	**NumberOfLikes:** is the number of allocated Likes for this image/video
> *	**TimeAgo:** is the formatted time specification, e. g.”5 minutes ago”, if the post was dropped 5 minutes ago.

## Location ID

The Instagram mask gives you the possibility to select all postings for a certain geolocation. You will need the location ID. To find out, open Instagram normally in your browser, find a picture of the desired location and click on the location name. The page that then appears contains the location ID as part of the URL as shown in the following screenshot.


![image_1](/assets/images/Data_Sources/Instagram/datenquelleninstagram03.png)
