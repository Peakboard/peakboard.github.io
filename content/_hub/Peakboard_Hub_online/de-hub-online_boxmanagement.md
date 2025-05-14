---
layout: article
product: hub
title: Peakboard Boxen
menu_title: Peakboard Boxen
description: Peakboard Hub online - Peakboard Boxen
lang: de
weight: 220
ref: hub-220
redirect_from:
---

Um deine Peakboard Boxen zu verwalten musst du sie zum Peakboard Hub hinzufügen.
Das Vorgehen unterscheidet sich, je nachdem ob du einen [Peakboard Hub on premise](/hub/Peakboard_Hub_on_premise/de-hub_boxmanagement.html) oder einen [Peakboard Hub online](/hub/Peakboard_Hub_online/de-hub-online_boxmanagement.html) verwendest.
Achte darauf, den korrekten Artikel zu nutzen.

### Network Settings for the Peakboard Boxes
Nötige Netzwerkeinstellungen um die Verbindungen von Peakboard Boxen zum Hub online zu gewährleisten.

{% include styled_table.html %}
{: .w-full }
| URL                                       | Port    | Beschreibung
| https://hub.peakboard.com                 | 443     | Initiale Anfrage von Boxen am Hub |
| peakboardhubonline.servicebus.windows.net | 5671    | Kommunikationskanal für Peakboard Hub online per AMQP Verbindung (Azure Service Bus) |
| https://downloads.peakboard.com/download/Peakboard/master/PeakboardRuntime.pbux  | 443 |  Herunterladen von Update Dateien |
| http://www.msftconnecttest.com/connecttest.txt | 80 | Überprüfen der Internetverbindung einer Box |

<div class="box-warning" markdown="1">**Wichtig**.

Notwendige [proxy Einstellungen](/administration/de-proxy.html) müssen auf den Boxen über den Peakboard Designer hinterlegt werden.
</div>

### Eine Peakboard Box zum Peakboard Hub online hinzufügen

Im ersten Schritt musst du deine Peakboard Box mit der Cloud verbinden.
Öffne hierzu den Peakboard Designer und öffne die Peakboard Box Einstellungen (1).

![Peakboard Box Einstellungen](/assets/images/hub/de_hub-online_boxes-01.png)

Wähle links die Peakboard Box aus (1), die du zum Peakboard Hub online hinzufügen möchtest und öffne den Tab [Allgemeines] (2).
Klicke auf das Cloud-Symbol (3) um deine Peakboard Box mit der Cloud zu verbinden. Kopiere dann die Cloudverbindungs-ID (4), diese benötigst du im nächsten Schritt.

![Peakboard Box Cloudverbindungs-ID](/assets/images/hub/de_hub-online_boxes-02.png)

Klicke nun im Peakboard Hub online unter [Peakboard Boxes] auf [Add Peakboard Box] (1) um den Dialog zum Hinzufügen zu öffnen.
Um eine Peakboard Box zum Peakboard Hub online hinzuzufügen, benötigst du die vorher kopierte Cloudverbindungs-ID (2) aus dem Peakboard Designer. Der Benutzer (3) mit dem du dich verbindest benötigt die Berechtigung [Cloud-Kommunikation zulassen]. Du findest die Berechtigung in den Peakboard Box-Einstellungen im Tab [Benutzer und Rollen] der [Nutzerverwaltung](/administration/de-nutzerverwaltung.html).

![Peakboard Box hinzufügen](/assets/images/hub/de_hub-online_boxes-03.png)

### Peakboard Boxen verwalten

Rechts oben kannst du nun auswählen, in welcher Ansicht deine Peakboard Boxen angezeigt werden sollen.

Die Listenansicht (1) empfiehlt sich, wenn du bereits viele Peakboard Boxen mit Peakboard Hub on premise verbunden hast.
Du bekommst damit einen schnellen Überblick über die Gruppen, Namen und weitere Daten deiner Peakboard Boxen. Allerdings sind in dieser Ansicht keine Screenshots sichtbar.
Um diese anzuzeigen, wählst du kleine (2) oder große Kacheln (3) zur Ansicht. Jetzt siehst du auf einen Blick, welche Visualisierung derzeit auf den Peakboard Boxen geladen ist.

Neben den Screenshots der Visualisierung (außer in der Listenansicht) die regelmäßig aktualisiert werden, findest du weitere Elemente, die die verschiedenen Ansichtsarten gemeinsam haben. In der Kachelansicht kannst du mit einem Klick auf das Lupen-Symbol den aktuellen Screenshot vergrößern und mit dem Reload-Symbol wird der Screenshot aktualisiert.
Ein grüner Kreis neben dem Namen der jeweiligen Peakboard Box zeigt an, ob sie erreichbar ist oder nicht (4). Du siehst auf einen Blick die IP-Adresse (5), den Nutzer (6) und die Version (7) der jeweiligen Peakboard Box und kannst sie mit einem Klick auf den [Restart]-Button (8) neu starten.  Über das [...]-Symbol (9) kannst du ein Kontextmenü öffnen, über das du Zugriff auf weitere Aktionen bekommst. Du kannst deine Peakboard Boxen updaten, zurücksetzen, löschen oder einer Gruppe zuweisen.

![Peakboard Boxen verwalten](/assets/images/hub/de_hub-online_boxes-04.png)

### Peakboard Box Detailansicht

Klickst du auf den Namen der Peakboard Box oder auf den Screenshot, gelangst du in die Detailseite der gewählten Peakboard Box.
Die Detailseite bietet zwei Tabs, [Application] (1) und [System] (2).
Im Application-Tab wird angezeigt, welche Visualisierung derzeit angezeigt wird.
Im oberen Bereich kannst du durch einen Klick auf das Drop-down-Menü (3) auswählen, welche der vorhandenen Visualisierungen auf der Peakboard Box angezeigt werden soll. Du kannst die Visualisierung dort außerdem löschen (4) oder stoppen (5). Im unteren Bereich findest du wieder einen aktuellen Screenshot. Diesen kannst du durch einen Klick auf den entsprechenden Button (6) aktualisieren.

![Application Tab](/assets/images/hub/de_hub-online_boxes-05.png)

Im System-Tab findest du vier Bereiche:

* **Box Information (1):** Hier findest du allgemeine Informationen zu deiner Peakboard Box und erkennst durch farbliche Markierungen und Statusanzeigen bestehende Probleme. Einige Punkte können durch einen Klick auf das Stift- oder Zahnrad-Symbol angepasst werden.
* **Properties (2):** Hier wird die BoxID sowie die Lizenz der ausgewählten Peakboard Box angezeigt. Du kannst die Lizenz dort auch ändern.
* **Certificates (3):** In diesem Bereich kannst du Zertifikate für deine Peakboard Box hinterlegen.
* **Log Files (4):** Hier werden auf der Peakboard Box vorhandene Logs angezeigt. Du kannst diese nach verschiedenen Kriterien filtern (5). Über den Button [...] kannst du die Log Files auch exportieren. Du kannst entweder mit [Export] die gefilterten Logs exportieren oder mit [Export All] alle vorhandnenen Logs. Die Logs werden in beiden Fällen im Textformat exportiert.

![System Tab](/assets/images/hub/de_hub-online_boxes-06.png)

### Peakboard Box updaten

Du kannst deine Peakboard Boxen direkt über den Peakboard Hub online updaten. Voraussetzung dafür ist eine funktionierende Internetverbindung. Der Peakboard Hub online stellt für den Updateprozess immer die aktuellste Version bereit.

Um das Update durchzuführen, hast du zwei Optionen. Du kannst in der Übersicht der Peakboard Boxen je nach gewählter Ansicht auf das Zahnradsymbol (1) oder das [...]-Symbol (2) klicken und dann den Punkt [Update] (3) wählen. Hinter dem Menüpunkt wird angezeigt, welche Version durch das Update installiert wird.

![Peakboard Box Update Kacheln](/assets/images/hub/de_hub-online_boxes-07.png)
![Peakboard Box Update Liste](/assets/images/hub/de_hub-online_boxes-08.png)

Alternativ kannst du in der Detailansicht der Peakboard Box, die du updaten möchtest, im Tab [System] (1) im Bereich [System] beim Punkt [Version] (2) sehen, welche Version derzeit installiert ist. Rechts daneben wird die derzeit für Updates bereitgestellte Version angezeigt. Klicke, um das Update durchzuführen, auf das Aktualisieren-Symbol (3).

![Peakboard Box Update Detail](/assets/images/hub/de_hub-online_boxes-09.png)
