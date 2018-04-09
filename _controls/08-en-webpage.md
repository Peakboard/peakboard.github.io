---
layout: article
title: Webpage
menu_title: Webpage
description: Information about Peakboard Designer Webpage Control.
lang: en
ref: con-08
---

The Webpage Control has the simple task of displaying web pages. It is practically a freely positionable browser. The most important property is Source. It contains the URL to be displayed, starting with http or https. Apart from the pure page, all other elements like CSS files, images etc. are loaded accordingly. The Refresh Time property is the time span in seconds after which the Control refreshes the page. It is worth mentioning that the rendering engine of Microsoft Edge, the browser introduced with Windows 10, is used for rendering the page. Depending on the complexity of the page, this must be taken into account when designing the HTML code.

The following screenshot shows the panel from above and shows the desired website.

Peakboard also supports a variety of websites that require login. To do this, they fill the fields User Name and Password with your login data in the WebBrowser Control. You must also enter the ID’s of the login and password field as well as the ID of the login button. These can be found in the source code of the website. In current versions of Google Chrome, Internet Explorer, Edge and Firefox, you can right-click on the items and then explore them, or click on Element information in Safari. Here you should find the ID attribute, whose values you must enter in the WebPage control.
