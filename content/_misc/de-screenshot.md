---
layout: article
title: Screenshot über HTTP Request
menu_title: Screenshot über HTTP Request
description: Screenshot über HTTP Request
lang: de
weight: 900
ref: misc-900
redirect_from:
  - /misc/09-de-screenshot.html
---

Ob zur Dokumentation des aktuellen Zustands einer Anwendung, zur Fehleranalyse, Datenanalyse oder einfach zum Teilen von Informationen.
Es gibt viele Gründe einen Screenshot anzufertigen und diesen an anderer Stelle weiterzuverwenden.

Technisch kannst du so einen Screenshot über [die Peakboard API](/misc/de-API.html) mittels einem HTTP GET Request direkt von der Peakboard Box extrahieren.

### Peakboard API Swagger nutzen

Klicke in den Peakboard Box Einstellungen im Tab [Allgemeines] (1) deiner Peakboard Box auf den Button [Swagger] (2) um die Übersicht der Peakboard API zu öffnen.

![Peakboard API Swagger](/assets/images/misc/Screenshot/de_screenshot-01.png)

Klicke auf den Button [Authorize] (1), gib die Zugangsdaten deiner Peakboard Box ein (2) und bestätige mit [Authorize] (3) um dich zu authentifizieren.

![Authorize](/assets/images/misc/Screenshot/de_screenshot-02.png)

Im Bereich [RuntimeApiManagementService] findest du den HTTP GET Request `/api/screenshot` (1).
Klicke auf den Button [Try it out] und dann auf [Execute] um die Funktion zu testen und die Request URL anzuzeigen.
Die Request URL (2) gestaltet sich dabei wie folgt, wobei als Methode GET verwendet wird:

`[IP der Peakboard Box]:40405/api/screenshot`

![HTTP GET Request](/assets/images/misc/Screenshot/de_screenshot-03.png)

### Screenshot auf einer weiteren Peakboard Box anzeigen

Mit dem HTTP GET Request kannst du nun den Screenshot beliebig weiterverarveiten.
Als Beispiel zeigst du auf einer zweiten Peakboard Box den Screenshot deiner ersten Peakboard Box an.
So kannst du von der zweiten Peakboard Box aus direkt sehen ob die erste Peakboard Box korrekt läuft.

Lege dazu einfach ein Bild Control (1) an und füge eine neue Web-Ressource (2) hinzu.

![Bild Control hinzufügen](/assets/images/misc/Screenshot/de_screenshot-04.png)

Gib die Request URL (1) als Quell-URL sowie deine Zugangsdaten für die Peakboard Box als Basic Authorization (2) ein. Gib der Ressource einen Namen (3) und definiere ein geeignetes Nachladeintervall (4).

![Web-Ressource hinzufügen](/assets/images/misc/Screenshot/de_screenshot-05.png)

Wenn sich jetzt auf der ersten Peakboard Box die Visualisierung ändert wird die Änderung nach Ablauf des Nachladeintervalls in der Anwendung auf der zweiten Peakboard Box sichtbar.
