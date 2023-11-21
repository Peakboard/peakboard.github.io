---
layout: article
title: Cloud-Ressourcen
menu_title: Cloud-Ressourcen
description: Cloud-Ressourcen
lang: de
weight: 500
ref: resources-500
redirect_from:
---

Um eine Ressource aus einem Cloudspeicher zu laden, musst du Peakboard erlauben, auf deinen Cloudspeicher zuzugreifen.
Im Gegensatz zur [lokalen Ressource](/resources/de-resources-local.html) ist eine Cloud-Ressource nicht statisch, sondern dynamisch mit der Originaldatei verbunden.

Derzeit werden folgende Cloudspeicheranbieter unterstützt:

* Dropbox
* Google Drive
* OneDrive
* SharePoint

### Cloud-Ressource SharePoint hinzufügen

Mache einen Rechtsklick auf [Ressourcen], wähle [Cloud-Ressource hinzufügen] und dann den gewünschten Cloudspeicheranbieter (1) aus.

![Cloud-Ressource hinzufügen](/assets/images/resources/de_resources-cloud-01.png)

Es öffnet sich ein Fenster zum Einrichten der Berechtigung. Hier musst du dich mit den Zugangsdaten deines Anbieters authentifizieren.

<div class="box-warning" markdown="1">
**Wichtiger Hinweis**

Deine Zugangsdaten zu deinem Cloudspeicher werden NICHT im Peakboard Designer oder auf der Peakboard Box gespeichert, sondern lediglich ein Zugriffstoken. Wenn du diese Erlaubnis rückgängig machen willst, gehe einfach in die Einstellungen deines Cloudspeicher-Accounts. Dort ist der Zugriff gelistet und kann gelöscht werden. Das ist ein übliches Verfahren, um Drittanbietern Zugriff auf einen Cloudspeicher zu ermöglichen.
</div>

![Zugriff autorisieren](/assets/images/resources/de_resources-cloud-02.png)

Nach dem Login-Prozess gelangst du zur Dateiauswahl. In diesem Fenster wählst du aus der Dateistruktur die gewünschte Datei aus (1) und definierst das Nachladeintervall (2), in dem die Datei aktualisiert wird.

![Datei auswählen](/assets/images/resources/de_resources-cloud-03.png)

Die Ressource wird jetzt im Explorer angezeigt.
Du kannst die Cloud-Ressource mit einem Rechtsklick bearbeiten (1), kopieren (2), löschen (3) oder anzeigen lassen, an welchen Stellen du die Ressource in deinem Projekt aktuell verwendest (4).

![Cloud-Ressource verwalten](/assets/images/resources/de_resources-cloud-04.png)
