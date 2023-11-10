---
layout: article
title: Netzwerk-Ressourcen
menu_title: Netzwerk-Ressourcen
description: Netzwerk-Ressourcen
lang: de
weight: 300
ref: resources-300
redirect_from:
---

Bei Netzwerk-Ressourcen handelt es sich ähnlich wie bei den [lokalen Ressourcen](/resources/de-resources-local.html) um Dateien in einem Dateisystem.
Im Gegensatz zu den lokalen Ressourcen werden diese allerdings nicht direkt in das Projekt importiert, sondern über ihren UNC-Pfad angebunden.

Die Netzwerk-Ressource selbst wird auch nicht im Projekt mit gespeichert. Voraussetzung für die Nutzung der Ressource ist also die Verbindung zu dem Netzwerk, in dem die Datei abgelegt ist.
Der Vorteil dieser Anbindungsmethode ist, dass die Dateien nicht so statisch sind wie eine lokale Ressource und sich ändern können, wenn sie überschrieben werden.

Voraussetzung für den Zugriff ist ein Domänen-Nutzer mit entsprechenden Zugriffsrechten auf die freigegebenen Netzwerk-Dateien.

### Netzwerk-Ressource hinzufügen

Durch einen Rechtsklick auf [Ressourcen] und einen Klick auf [Netzwerk-Ressource hinzufügen] (1) öffnest du den Verbindungsdialog.

![Netzwerk-Ressource hinzufügen](/assets/images/resources/de_resources-network-01.png)

Im Verbindungsdialog gibst du der Ressource zuerst einen Namen (1). Du kannst außerdem ein Nachladeintervall (2) definieren, in dem die Datei aktualisiert wird.
Dann benötigst du die Verbindungsdaten zu deiner Datei. Dazu gehören der UNC-Pfad (3), der Benutzername (4) des Domänen-Nutzers, der für die Verbindung genutzt werden soll und der über die nötigen Rechte verfügt, sowie das zugehörige Passwort (5). Mit dem Button [Verbindungstest] (6) kannst du die Verbindung prüfen.
Alternativ kannst du auch eine bereits vorhandene Verbindung nutzen (7).

![Verbindung einrichten](/assets/images/resources/de_resources-network-02.png)

Die Ressource wird jetzt im Explorer angezeigt.
Du kannst die Netzwerk-Ressource mit einem Rechtsklick bearbeiten (1), kopieren (2), löschen (3) oder anzeigen lassen, an welchen Stellen du die Ressource in deinem Projekt aktuell verwendest (4).

![Netzwerk-Ressource verwalten](/assets/images/resources/de_resources-network-03.png)
