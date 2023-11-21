---
layout: article
title: Web-Ressourcen
menu_title: Web-Ressourcen
description: Web-Ressourcen
lang: de
weight: 400
ref: resources-400
redirect_from:
---

Der Zugriff auf eine Web-Ressource erfolgt per URL. Ähnlich wie die [Netzwerk-Ressourcen](/resources/de-resources-network.html) wird die Ressource allerdings nicht direkt im Projekt gespeichert, sondern lediglich über die URL verbunden.
Voraussetzung für die Nutzung der Web-Ressource ist somit eine funktionierende Internetverbindung.

### Web-Ressource hinzufügen

Durch einen Rechtsklick auf [Ressourcen] und einen Klick auf [Web-Ressource hinzufügen] (1) öffnest du den Verbindungsdialog.

![Web-Ressource hinzufügen](/assets/images/resources/de_resources-web-01.png)

Kopiere die URL deiner Web-Ressource in das Feld [URL] (1) ein. Die URL wird dann automatisch aufgeteilt und das Feld [Path] (2) entsprechend befüllt. Dann gibst du der Ressource einen Namen (3) und definierst ein Nachladeintervall (4), in dem die Ressource aktualisiert werden soll.
Als Letztes kannst du, falls benötigt, den Authentication Type (5) wählen und deine Zugangsdaten eingeben.
Die folgenden Typen stehen zur Auswahl.

* **Basic Authentication:** Du sendest deinen Benutzernamen und dein Passwort in einer einfachen (aber verschlüsselten) Form, um dich zu identifizieren.
* **Bearer Authentication:** Du verwendest einen speziellen Sicherheitsschlüssel (Token), den du erhältst, nachdem du dich eingeloggt hast. Diesen Schlüssel zeigst du vor, wie ein Konzertticket, um Zugang zu erhalten.
* **OAuth:** [OAuth](/data_sources/Basics/de-OAuth.html) ist wie ein fortgeschrittenes Berechtigungssystem, das dir erlaubt, einem Dienst zu gestatten, in deinem Namen mit anderen Apps zu interagieren, ohne deine Login-Daten weiterzugeben. Du erteilst die Erlaubnis, und die App bekommt einen speziellen Schlüssel (Token), den sie benutzt, um in deinem Namen bestimmte Dinge zu tun.

Alternativ kannst du auch [eine bereits vorhandene Verbindung (6) nutzen](/data_sources/Basics/de-shared-connection.html).

![Verbindung einrichten](/assets/images/resources/de_resources-web-02.png)

Die Ressource wird jetzt im Explorer angezeigt.
Du kannst die Web-Ressource mit einem Rechtsklick bearbeiten (1), kopieren (2), löschen (3) oder anzeigen lassen, an welchen Stellen du die Ressource in deinem Projekt aktuell verwendest (4).

![Web-Ressource verwalten](/assets/images/resources/de_resources-web-03.png)
