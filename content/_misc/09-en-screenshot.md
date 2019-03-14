---
layout: article
title: Screenshot via HTTP Request
menu_title: Screenshot via HTTP Request
description: Screenshot of HTTP request
lang: en
ref: misc-09
---

If, for example, decisions are made on the shop floor on the basis of a visualization, it is necessary to document the decision basis.
This can be done, for example, by taking a screenshot of the visualization.

Technically, a screenshot can be extracted directly from the box via an HTTP get request.

This command looks like this:

![HTTP Get Request](/assets/images/misc/Screenshot/Screenshot01.png)

The request URL is as follows, where GET is used as the method:

```
[Box name]:8080/api/iot/screenshot
```

As shown in the diagram, the authorization is Base64 encoded. You can find a corresponding encoder for example [here](https://www.base64encode.org/). 
The authorization string is composed as follows:

```
Administrator:Your_device_password
```

If the request is successful, you receive a screenshot of the current display for further processing from the box.