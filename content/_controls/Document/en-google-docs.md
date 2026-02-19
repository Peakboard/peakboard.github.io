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
  - /controls/en-google-docs.html
---

The Google Docs control allows you to integrate Google Docs documents into your visualization. All three types of documents are supported: Docs (standard documents as known from MS Word), Slides (as in MS PowerPoint), and Spreadsheets (as in MS Excel).
You find the Google Docs control in the Peakboard Designer in the Media & Documents group (1). Drag and drop the icon into your designer or place it with a double-click on your workspace.

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDoc_01.png)

# Configuration and Properties
## 1 Data Source and Account Linking
We want to integrate the following sample document; it is not necessary to share it in any form. Simply allow Peakboard to have read access to Google Drive. This ensures authentication.
Click the "Authorize" button (1) to open the authorization dialog, where you must enter your Google credentials. Note! This is a Google website. You are not providing your username and password to Peakboard; instead, you are merely authenticating with Google and granting access. Google then returns only an authorization token (a cryptic character string) to Peakboard. You can revoke this authorization in your Google account at any time. It works on exactly the same principle as granting access to other third-party apps.
Using the "Document" input field (2) opens a selection dialog that reflects the folder structure of your Google Drive account. This allows you to select the desired document and transfer it to the main dialog.

![image_2](/assets/images/Controls/Google-Docs/ControlsGoogleDocs_02.png)

## 2 Appearance and Control
In the properties on the right side, you can precisely control the behavior and representation:
1. Control Positioning (General): Define the alignment of the element on the workspace. With the first eight symbols, the control can be quickly placed at corners or side centers, while the ninth symbol fills the entire available area. The last icon centers the element (1).
2. General: Use the Width, Height, Left, and Top fields to precisely define the size of the Control via the manual input fields. Below that, you define an internal spacing (padding) for the document within its frame, and a title can also be assigned that appears above the control (2).
3. Use in scripts (Logic): Give the control a unique name to control it later via script.
4. Conditional Formatting (Logic): Use conditional formatting to control the visibility of the control based on certain events, for example.

The preview button retrieves the document from Google and displays it in the lower part of the dialog.
And this is exactly how it should look when it runs in the preview at runtime or directly on the Peakboard Box.

![image_3](/assets/images/Controls/Google-Docs/ControlsGoogleDocs_03.png)

## Remarks

If you use Google Slides, these slides will be adapted to the size of the Peakboard control. This is not the case for Docs and Spreadsheets. Here, the pixel-perfect size is fitted into the Peakboard control. If the control is not large enough, parts of the content will not be visible.