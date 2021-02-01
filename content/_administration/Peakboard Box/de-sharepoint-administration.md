---
layout: article
title: Sharepoint zur Nutzung als Peakboard Datenquelle konfigurieren
menu_title: Sharepoint zur Nutzung als Peakboard Datenquelle konfigurieren
description: Sharepoint zur Nutzung als Peakboard Datenquelle konfigurieren
lang: de
weight: 950
ref: admin-950
redirect_from:
---

```
The endpoint only accepts POST resquests. Recieved a GET request.
```

Erhalten Sie diese Fehlermeldung bei der Nutzung von Sharepoint als Peakboard Datenquelle, so müssen Sie die Peakboard App zu Ihren Office 365 Apps hinzufügen.

Wie Sie eine App zu ihren Office365 Apps hinzufügen können, erfahren Sie auf [der Microsoft Azure Webseite](https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/grant-admin-consent#construct-the-url-for-granting-tenant-wide-admin-consent).

Für die Installation werden administrative Berechtigungen für Microsoft Azure benötigt.
Ebenso wird hierfür die Client ID der Peakboard App benötigt.
Diese lautet:
```
6c6f1968-4625-4772-bbda-7e728e939da7
```