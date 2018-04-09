---
layout: article
title: Twitter
menu_title: Twitter
description: Information about Twitter Data in Peakboard
lang: en
ref: dat-17
---
Under the following link you will find a tutorial on how external data sources are generally configured and linked to Peakboard-Elements.

[Getting Started with External Data Sources Using the Example of an XML Data Source]()

The Twitter data source provides all raw data to build a complete Twitter feed later in the visualization. Like any other data source, it needs a name. You can define the time interval in seconds (reload interval) after which the data is loaded. Max Items is the maximum number of data rows, i. e. tweets that are retrieved.
Basically, the tweets can be selected using three methods: All tweets of a specific Twitter account (By User Name) or hash tag. The third option is a free search by search criteria (e. g.”BVB AND VFB” for all tweets containing BVB and VFB). You will find a good guide to the search criteria here.

![image_1](/assets/images/Data_Sources/Twitter/Twitter01.png)

A click on Preview shows you a preview of the data.

![image_1](/assets/images/Data_Sources/Twitter/Twitter02.png)

The Twitter data source always had the same columns. They have the following meaning:

> *	**UserLongName:** is the full name of the user
> *	**UserShortName:** is the twitter name of the user
> *	**text:** is the content of the tweet with all formatting
> *	**time stamp:** is a timestamp of the form YYYY. MM. DD hh: mm: ss
> *	**media URL:** is a URL to an image or video in case the tweet has an attachment.
> *	**ProfileImageURL:** is the URL to the user’s profile picture
> *	**TimeAgo:** is the formatted time specification, e. g.”5 minutes ago”, if the tweet was dropped 5 minutes ago.
