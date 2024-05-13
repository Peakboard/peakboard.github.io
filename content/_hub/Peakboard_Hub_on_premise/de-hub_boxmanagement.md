---
layout: article
product: hub
title: Peakboard Boxen
menu_title: Peakboard Boxen
description: Peakboard Hub - Peakboard Boxen
lang: de
weight: 130
ref: hub-130
redirect_from:
 - /hub/de-hub_boxmanagement.html
---

Um deine Peakboard Boxen zu verwalten musst du sie zum Peakboard Hub hinzufügen.
Das Vorgehen unterscheidet sich, je nachdem ob du einen [Peakboard Hub on premise](/hub/Peakboard_Hub_on_premise/de-hub_boxmanagement.html) oder einen [Peakboard Hub online](/hub/Peakboard_Hub_online/de-hub-online_boxmanagement.html) verwendest.
Achte darauf, den korrekten Artikel zu nutzen.

### Eine Peakboard Box zum Peakboard Hub on premise hinzufügen

Klicke unter [Peakboard Boxes] auf [Add Peakboard Box] (1) um den Dialog zum Hinzufügen zu öffnen.

Um eine Peakboard Box zum Peakboard Hub on premise hinzuzufügen, benötigst du folgende Informationen:

* **Hostname or IP Address (2):** Diese findest du [auf dem Welcome Screen deiner Peakboard Box](/get_started/de-peakboard-box.html) oder in den Peakboard Box Einstellungen im Peakboard Designer.
* **Username (3):** Gib hier den Benutzernamen des Benutzers der Peakboard Box ein.
* **Password (4):** Gib hier das zugehörige Passwort des Benutzers ein.

![Peakboard Box hinzufügen](/assets/images/hub/de_hub_boxes-01.png)

### Peakboard Boxen verwalten

Rechts oben kannst du nun auswählen, in welcher Ansicht deine Peakboard Boxen angezeigt werden sollen.

Die Listenansicht (1) empfiehlt sich, wenn du bereits viele Peakboard Boxen mit Peakboard Hub on premise verbunden hast.
Du bekommst damit einen schnellen Überblick über die Gruppen, Namen und weitere Daten deiner Peakboard Boxen. Allerdings sind in dieser Ansicht keine Screenshots sichtbar.
Um diese anzuzeigen, wählst du kleine (2) oder große Kacheln (3) zur Ansicht. Jetzt siehst du auf einen Blick, welche Visualisierung derzeit auf den Peakboard Boxen geladen ist.

Neben den Screenshots der Visualisierung (außer in der Listenansicht) die regelmäßig aktualisiert werden, findest du weitere Elemente, die die verschiedenen Ansichtsarten gemeinsam haben. In der Kachelansicht kannst du mit einem Klick auf das Lupen-Symbol den aktuellen Screenshot vergrößern und mit dem Reload-Symbol wird der Screenshot aktualisiert.
Ein grüner Kreis neben dem Namen der jeweiligen Peakboard Box zeigt an, ob sie erreichbar ist oder nicht (4). Du siehst auf einen Blick die IP-Adresse (5), den Nutzer (6) und die Version (7) der jeweiligen Peakboard Box und kannst sie mit einem Klick auf den [Restart]-Button (8) neu starten.  Über das [...]-Symbol (9) kannst du ein Kontextmenü öffnen, über das du Zugriff auf weitere Aktionen bekommst. Du kannst deine Peakboard Boxen updaten, zurücksetzen, löschen oder einer Gruppe zuweisen. Über den Button [Web Access] (10) wechselst du in [die Oberfläche des Peakboard Web Access](/administration/de-web-access.html).

![Peakboard Boxen verwalten](/assets/images/hub/de_hub_boxes-02.png)

### Peakboard Box Detailansicht

Klickst du auf den Namen der Peakboard Box oder auf den Screenshot, gelangst du in die Detailseite der gewählten Peakboard Box.

Im oberen Bereich **Box Information (1)** findest du allgemeine Informationen zu deiner Peakboard Box und erkennst durch farbliche Markierungen und Statusanzeigen bestehende Probleme. Einige Punkte können durch einen Klick auf das Stift- oder Zahnrad-Symbol angepasst werden.

Darunter wird im Bereich **Visualization (2)** angezeigt, welche Visualisierung derzeit geladen ist.
Durch einen Klick auf das Drop-down-Menü (3) kannst du auswählen, welche der aktuell vorhandenen Visualisierungen auf der Peakboard Box angezeigt werden soll. Du kannst die Visualisierung dort außerdem löschen (4) oder stoppen (5). Den Screenshot kannst du durch einen Klick auf den entsprechenden Button (6) aktualisieren.

Im Abschnitt **Log Files (7)** auf der rechten Seite werden auf der Peakboard Box vorhandene Logs angezeigt. Du kannst diese nach verschiedenen Kriterien filtern (8). Über den Button [...] kannst du die Log Files auch exportieren. Du kannst entweder mit [Export] die gefilterten Logs exportieren oder mit [Export All] alle vorhandnenen Logs. Die Logs werden in beiden Fällen im Textformat exportiert.

![Detailansicht 01](/assets/images/hub/de_hub_boxes-03.png)

Unterhalb des aktuellen Screenshots findest du vier Diagramme mit denen du dir einen Überblick über die **CPU- (1)**, **Speicher- (2)** und **Netzwerkauslastung (3)** deiner Peakboard Box verschaffen kannst.
Im Bereich **Properties (4)** wird die BoxID sowie die Lizenz der ausgewählten Peakboard Box angezeigt. Du kannst die Lizenz dort auch ändern. Unter **Users & Roles (5)** werden die auf der Peakboard Box vorhandenen Nutzer und ihre zugewiesenen Rollen angezeigt. Diese können im Peakboard Designer in den Peakboard Box Einstellungen angepasst werden. Im Bereich **Certificates (6)**  kannst du Zertifikate für deine Peakboard Box hinterlegen.

![Detailansicht 02](/assets/images/hub/de_hub_boxes-04.png)

### Peakboard Box Availability

Im Unterpunkt [Availability] siehst du eine Darstellung der Lauf- und Ausfallszeiten der letzten 24h deiner Peakboard Boxen.
Die angezeigten Timestamps zeigen jeweils die Uhrzeit der Statusänderung an.

![Availability](/assets/images/hub/de_hub_boxes-05.png)

### Peakboard Box updaten

Für das Update deiner Peakboard Boxen im Peakboard Hub on premise musst du die gewünschte Updatedatei selbst zur Verfügung stellen, bevor du das Update durchführen kannst.

#### Updatedatei aktualisieren

Voraussetzung für das Update deiner Peakboard Boxen ist eine aktuelle Datei, mit der das Update durchgeführt wird. Mit einer bestehenden Internetverbindung kannst du die aktuellste Updatedatei direkt in der Oberfläche des Peakboard Hub on premise herunterladen. Gehe dazu in den Bereich [Settings] (1). Im Abschnitt [Update] (2) unter dem Punkt [Peakboard Box Update File Version] (3) wird angezeigt, welche Version derzeit auf deinem Peakboard Hub on premise hinterlegt ist. Mit einem Klick auf das Aktualisieren-Symbol (4) kannst du die aktuellste Version herunterladen. Diese wird automatisch unter dem beim Punkt [Box update package folder] (5) hinterlegten Pfad abgelegt.

![Peakboard Box Update](/assets/images/hub/de_hub_boxes-06.png)

Sollte dies nicht korrekt funktionieren oder keine Internetverbindung bestehen kannst du den Prozess auch manuell durchführen. Lade dazu [die aktuellste Version für das Update](https://peakboard.com/download/Peakboard/master/PeakboardRuntime.pbux) herunter und hinterlege die Datei unter dem beim Punkt [Box update package folder] hinterlegten Pfad auf deinem Peakboard Hub on premise Server oder passe den Pfad entsprechend an.

#### Update durchführen

Das Update der gewünschten Boxen kannst du jetzt an zwei verschiedenen Stellen vornehmen. Du kannst in der Übersicht der Peakboard Boxen auf das [...]-Symbol (1) klicken und dann den Punkt [Update] (2) wählen. Hinter dem Menüpunkt wird angezeigt, welche Version durch das Update installiert wird.

![Peakboard Box Update Liste](/assets/images/hub/de_hub_boxes-07.png)
![Peakboard Box Update Kacheln](/assets/images/hub/de_hub_boxes-08.png)

Alternativ kannst du in der Detailansicht der Peakboard Box, die du updaten möchtest, im Bereich [System] beim Punkt [Version] (1) sehen, welche Version derzeit installiert ist. Rechts daneben wird die derzeit für Updates bereitgestellte Version angezeigt. Klicke, um das Update durchzuführen, auf das Aktualisieren-Symbol (2).

![Peakboard Box Update Detail](/assets/images/hub/de_hub_boxes-09.png)
