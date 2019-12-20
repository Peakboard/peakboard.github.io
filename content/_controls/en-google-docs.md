---
layout: article
title: Google Docs  
menu_title: Google Docs
description: Information about Peakboard Designer Google Docs Control.
lang: en
weight: 520
ref: con-520
redirect_from:
  - /controls/05-en-google-docs.html
---

This article describes the integration of Google Docs documents into a Peakboard-Panel. All three types of documents are supported: Docs (normal documents as known from MS Word), slides (as from MS PowerPoint) and spreadsheets (as from MS Excel). Of course, many other documents can still be stored in Google Drive, but the Google Docs Control only supports these three main types, which are grouped together under the term “Google Docs”.

We want to include the following example document. There’s no need to release it in any way. They allow Peakboard to readily access Google Drive. This ensures authentication.

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs01.png)

Drag the Google Docs Control from the Toolbox to a Peakboard panel, resize it, and double-click the Control to open the editor.

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs02.png)

You must now allow Peakboard to access your Google Drive. To do so, click on the button with the three dots to open the authorization dialog where you need to enter your Google credentials. Attention! This is a Google website. You don’t give your user name and password to Peakboard, but you only authenticate yourself at Google and allow access. Google then only returns an authorization token (a cryptic string) to Peakboard. You can revoke this authorization at any time in your Google Account. It works exactly the same way as when you allow other third-party apps to access it.

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs03.png)

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs04.png)

With the button “Select Document…” opens a selection dialog that shows the folder structure of the Google Drive account. In this way, the desired document can be selected and transferred to the main dialog.

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs05.png)

Nothing more can be done. The Preview button retrieves the document from Google and displays it at the bottom of the dialog.

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs06.png)

And it should look exactly the same if it runs at runtime in the preview or directly on the Peakboard-Box.

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs07.png)

## Remarks
If you use slides from Google, these slides are adapted to the size of the Peakboard-Control. This is not the case with docs and spreadsheets. Here, the pixel-accurate size is fitted into the Peakboard-Control. If the Control is not large enough, parts of the content are not visible.
