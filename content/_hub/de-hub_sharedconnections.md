---
layout: article
product: hub
title: Verbindungen
menu_title: Verbindungen
description: Peakboard Hub - Verbindungen
lang: de
weight: 500
ref: hub-500
redirect_from:
---

Im Menüpunkt Verbindungen kannst du Verbindungen zu unterschiedlichen Datenquellen erstellen und diese später [im Peakboard Designer verwenden](/misc/de-shared-connection.html).

Wenn der [Peakboard Designer mit dem Peakboard Hub verbunden ist](/hub/de-hub_connectpbdesigner.html), kann eine hier angelegte Verbindung im Peakboard Designer geladen und anschließend in Datenquellen genutzt werden ohne die Zugangsdaten erneut eingeben zu müssen.

<div class="box-tip" markdown="1">**Hinweis**

Das bedeutet auch, dass beispielsweise ein Administrator einzelnen Nutzern Zugang zu sensiblen Datensystem gewähren kann ohne die Zugangsdaten herausgeben zu müssen.
</div>

Eine neue Verbindung legst du durch einen Klick auf den Button [Add Connection] (1) im Peakboard Hub an.

![Verbindung hinzufügen](/assets/images/hub/de_hub_connections-01.png)

Gib hier der Verbindung einen Namen (1) und wähle die gewünschte Datenquelle für die du eine Verbindung anlegen möchtest. Jede Datenquelle benötigt individuelle Anmeldedaten. Diese kannst du in der Maske auf der rechten Seite (3) eingeben.

![Verbindung hinzufügen](/assets/images/hub/de_hub_connections-02.png)

In der [Nutzerverwaltung](/hub/de-hub_usermanagement.html) kannst du die angelegte Verbindung einer Nutzergruppe zuordnen (1).

![Nutzergruppen](/assets/images/hub/de_hub_connections-03.png)

Um die angelegten Verbindungen im Peakboard Designer zu nutzen, musst du mit dem Gruppenschlüssel der entsprechenden Nutzergruppe mit dem Peakboard Hub verbunden sein.
Öffne dann im Peakboard Designer den Dialog in der Menüleiste unter [Verbindungen] (1).

![Verbindungen](/assets/images/hub/de_hub_connections-04.png)

Anschließend kann über den Button […] und [Peakboard Hub-Verbindungen aktualisieren] (1) alle Verbindungen aus dem Peakboard Hub geladen werden.

![Verbindungen aktualisieren](/assets/images/hub/de_hub_connections-05.png)

Wählst du eine der Verbindungen aus (1), werden dir rechts die hinterlegten Daten der Verbindung angezeigt (2).
Wenn du bereits Datenquellen angelegt hast, siehst du hier auch, welche der Datenquellen die Verbindung derzeit nutzen (3).

![Verbindungen anzeigen](/assets/images/hub/de_hub_connections-06.png)

Nun kannst du beim Erstellen einer Datenquelle diese Verbindung nutzen wie es [hier beschrieben ist](/misc/de-shared-connection.html).
