---
layout: article
product: hub
title: Alerts
menu_title: Alerts
description: Peakboard Hub - Alerts
lang: en
weight: 900
ref: hub-900
redirect_from:
---

Peakboard Hub alerts are a tool for real-time monitoring and response in your operating environment.
They help you to further improve efficiency and response times in your company.

## Peakboard alerts in the Peakboard Hub

You will find the Peakboard Hub alerts section in the [Alerts] menu item (1). The window is divided into three sections.

![Peakboard Alerts](/assets/images/hub/en_hub_alerts-01.png)

### New alerts (2)

Alerts that have been received but not yet processed are displayed here.
An alert always consists of the type of alert, the date and time of the alert, the device name and the message contained in the alert.
You can reload the list of alerts received (a), mark all alerts as solved (b) or delete all alerts (c).
You can also mark individual alerts as solved (d) or delete them (e)

### Solved alerts (3)

As soon as you have processed an alert and marked it as solved, it will be listed here.
You can delete all alerts by clicking on the trash can icon (f) or delete individual alerts.

### Alert settings (4)

Here you can add an email address to be notified when an alert is triggered.
Click on the [+ Add] button (g) to add a new recipient e-mail address.
You can deactivate or activate addresses that have already been created using the checkbox (h) in front of the respective address.
You can delete the entries by clicking on the trash can symbol (i).

## Send an alert

You can send the various alerts from your application. Simply use the ready-made building block [Send alert] (1) from the [Peakboard Hub] area under [Publish to external systems] in the main [FUNCTIONS] area.

Select the alert type (2) you want to send and add the message to be sent (3). This can be as complex as you like and can also contain variables or similar. In the example screenshot, the input of a text field named [Info_Text] is used as the message.

![Send alert](/assets/images/hub/en_hub_alerts-02.png)

This way you can send alerts manually via text field and button control or send automated alerts when certain conditions occur.

## The different alert types

There are three different alert types that are intended for different purposes.

### Info Alerts

`peakboardhub.sendinfo('This is an information message')`
Information messages are used, for example, to send general status updates or non-critical information.

### Warning Alerts

`peakboardhub.sendwarning('Warning: temperature exceeds recommended level')`
Warning alerts are used to indicate potential problems or conditions that may require your attention or further investigation.

### Problem Alerts

`peakboardhub.sendproblem('Critical error: application crashed')`
Problem alerts are used to indicate critical issues or errors that require your immediate attention or a fix.
