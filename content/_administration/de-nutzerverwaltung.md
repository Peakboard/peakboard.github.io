---
layout: article
title: Nutzerverwaltung
menu_title: Nutzerverwaltung
description: Nutzerverwaltung
lang: de
weight: 1300
ref: admin-1300
redirect_from:
  - /administration/13-de-nutzerverwaltung.html
---

Peakboard bietet eine Vielzahl von Anwendungsmöglichkeiten. Das hat zur Folge, dass in einem Unternehmen unterschiedlichste Personengruppen mit den Visualisierungen in Verbindung kommen. Um diesen Umstand abzubilden, hat Peakboard die Möglichkeit für jede Box Nutzer hinzuzufügen, welche einer bestimmten Nutzergruppe zugeordnet werden. Diese Gruppe kann dann mit den Berechtigungen versehen werden, die für die Arbeit der jeweiligen Personengruppe benötigt werden.
Dabei gilt stets, dass sich diese Berechtigungen auf die Box und die Verbindung vom Designer zur Box auswirken. Der Designer selbst kann in jedem Fall in vollem Funktionsumfang genutzt werden.

## Betroffene Komponenten

Es folgt eine Auflistung der Bereiche, die von der Nutzerverwaltung betroffen sind bzw. abgefangen werden:

![Overview](/assets/images/admin/usermanagement/Overview.png)

### Manage Visualizations
Dieser Punkt gibt an, ob ein Nutzer mit dieser Nutzergruppe Visualisierungen aktivieren bzw deaktivieren, deployen oder löschen darf.

### Pair With PBIO
Einem Nutzer mit dieser Nutzergruppe ist es erlaubt, die Box mit einem Peakboard.io-Account zu verknüpfen. Eine solche Verknüpfung ist zwingend notwendig, wenn eine Visualisierung ein Peakboard.io-Feature nutzt.

### Push Data
Möchte man Variablen einer aktiven Visualisierung per Http-Push manipulieren, benötigt der Nutzer, unter dessen Kontext der Push gesendet wird, dieses Privileg.

### Set Properties
Ein Nutzer mit diesem Privileg kann die, auf der Box gespeicherten, Properties manipulieren. Da diese Properties unter anderem Zugriff auf den Lizenzschlüssel geben, sollte dieser Punkt ausschließlich Administratoren vorbehalten sein.

### Manage Logs
Diese Nutzergruppe hat Zugriff auf die Log-Dateien, die auf der Box erstellt werden. Dies schließt das Lesen, aber auch das Löschen der Dateien ein.

## Konfiguration von Nutzern und Nutzergruppen

Neben dem Administratorkonto, welches fest mit dem Betriebssystem der Box verknüpft ist und damit aus diesem Konzept herausfällt, stellt Peakboard zwei vordefinierte Nutzergruppen zur Verfügung. Zum einen ist das der "Designer Administrator" mit nahezu vollen Berechtigungen. Der andere Nutzer ist der sogenannte "App User", welcher ein Vorschlag für Personen sein soll, die zum Beispiel nur per Android- oder iOS-App mit der Box interagieren möchten. So ist dem "App User" zwar gestattet, Visualisierungen zu wechseln. Der Zugriff auf kritische Informationen, wie den Lizenzschlüssel ist ihm aber untersagt.
Möchte man eine neue Nutzergruppe erstellen, wählt man die gewünschte Box aus und öffnet über den "Settings"-Button die Option "Manage Users". Nach einer kurzen Synchronisation mit der Box wird der Konfigurationsdialog geöffnet. Dieser besteht aus zwei Tabs, wovon der erste die Nutzer anzeigt, die bereits auf der Box konfiguriert sind. Der zweite Tab gibt Auskunft über die verfügbaren Rollen und deren Rechteverteilung.
![NewGroup](/assets/images/admin/usermanagement/NewUsergroup.png)
Mit einem Klick auf den "Add"-Button wird je nach Tab ein neuer Nutzer oder eine neue Nutzergruppe erstellt. Bei der Nutzergruppe lässt sich durch einfaches Setzen von Haken in den jeweiligen Bereichen festlegen, welche Privilegien ein Nutzer mit dieser Gruppe inne haben soll. Der Name der Gruppe kann per Klick in das Namensfeld geändert werden. Im Tab "User" öffnet sich ein kleines Fenster. Darin gebe Sie den Nutzernamen des neuen Benutzerkontos ein. Im zweiten Textfeld wird ein zufällig generiertes Passwort angezeigt. Falls Sie dieses beibehalten möchten, müssen Sie das Passwort separat abspeichern! Es wird nach Schließen dieses Dialogs nicht mehr zugänglich sein.
![NewUser](/assets/images/admin/usermanagement/NewUser.png)
Ist dies erledigt, muss nur noch ausgewählt werden, welcher Gruppe dieser Nutzer angehören soll. Die Änderung des Namens läuft auch hier direkt über das Namensfeld.
![Save](/assets/images/admin/usermanagement/Save.png)
Um die Änderungen anzuwenden, reicht nun das Betätigen des "Save"-Buttons. Falls erwünscht können die Einstellungen der aktuell ausgewählten Box auch für alle anderen Geräte in der Gruppe übernommen werden. Dazu setzen Sie den Haken bei der Option "Replicate users and roles to other boxes in group '[Name der aktuellen Gruppe]'".

## Gerät mit Nutzerkontext verwenden

Um die Geräte unter dem gewünschten Nutzerkontext zu nutzen, muss man im Designer die Boxen mit dem jeweiligen Nutzer hinzufügen. Im Managedialog drückt man also auf "Add". Wie im Bild zu sehen ist, müssen in dem Dialog zur Geräteauswahl, wie üblich, Nutzername und Passwort eingegeben werden. Hier wird jetzt der neue Nutzer mit der gewünschten Nutzergruppe hinterlegt, anstelle des sonst benötigten Administratorkontos.
![AddDevice](/assets/images/admin/usermanagement/AddDevice.png)
Ein Klick auf den "OK"-Button fügt das Peakboard zum Designer hinzu. Welcher Nutzer aktuell mit der Box verknüpft ist, sehen ist im Managedialog in der Spalte "Username" zu sehen.
![ManageDialogEntry](/assets/images/admin/usermanagement/ManageDialogEntry.png)