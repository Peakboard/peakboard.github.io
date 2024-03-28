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

Mit Peakboard kannst du von der reinen Datenvisualisierung bis zu Human-Machine Interfaces ein breites Spektrum an Industrieanwendungen erstellen. So vielseitig wie die Anwendungen selbst sind auch die Nutzergruppen, die mit ihnen in Verbindung kommen.

Mit der Nutzerverwaltung bietet dir Peakboard die Möglichkeit, die Berechtigungen der unterschiedlichen Nutzer anzupassen, um einen reibungslosen Ablauf zu ermöglichen. Die Benutzer werden im Peakboard Designer separat für jede hinzugefügte Peakboard Box erstellt und verwaltet. Die Berechtigungen wirken sich auf die Nutzung der Peakboard Box selbst und die Verbindung zum Peakboard Designer aus. Der Peakboard Designer selbst kann immer im vollen Funktionsumfang genutzt werden.

## Standardbenutzer `PeakboardAdmin`

Wenn du eine neue Peakboard Box zum Peakboard Designer hinzufügst, ist automatisch der Benutzer `PeakboardAdmin` als Standardbenutzer hinterlegt. Beim Verbinden der Peakboard Box gibst du als Benutzername `PeakboardAdmin` an und lässt das Passwort-Feld leer. Dann wirst du aufgefordert, ein initiales Passwort für diesen Nutzer festzulegen. Dieses Vorgehen ist sowohl für Peakboard Boxen als auch für Peakboard BYOD identisch.

Der `PeakboardAdmin` Benutzer verfügt über die Rolle des Administrators und besitzt alle zur Verfügung stehenden Rechte. Mit ihm kann die Peakboard Box in vollem Umfang genutzt werden. Im weiteren Verlauf empfiehlt es sich, separate Nutzer und Rollen für die unterschiedlichen Anwendungen festzulegen.

## Benutzer und Rollen

Um auf die Nutzerverwaltung zuzugreifen, öffnest du im Peakboard Designer die Peakboard Box Einstellungen durch einen Klick auf das Peakboard Box Symbol (1) in der Menüleiste.

![Peakboard Box Einstellungen öffnen](/assets/images/admin/usermanagement/de_usermanagement-02.png)

Im Tab [Benutzer und Rollen] (1) nimmst du die jeweiligen Einstellungen zu den Benutzern (2) und Rollen (3) vor.

![Benutzer und Rollen](/assets/images/admin/usermanagement/de_usermanagement-03.png)

### Konfigurieren der Rollen

Im Bereich Rollen sind standardmäßig zwei Rollen vordefiniert. Der [Administrator] (1) verfügt über alle vorhandenen Berechtigungen. Diese Rolle kann nicht gelöscht oder angepasst werden und ist dem Standardbenutzer zugewiesen. Die Rolle [User] (2) ist ein Vorschlag für einen eingeschränkten Basis-Nutzer. Dieser Nutzer darf, wenn er sich per Peakboard Designer mit der Peakboard Box verbindet, lediglich die Anwendungen verwalten (3), also hochladen, wechseln oder löschen und Screenshots aufnehmen (4). Er hat aber beispielsweise keinen Zugriff auf die Verwaltung der Nutzer und Rollen, die Verwaltung der Logs oder Einstellungen der Lizenz oder Cloudverbindung.

![Standardrollen](/assets/images/admin/usermanagement/de_usermanagement-04.png)

#### Eine neue Rolle hinzufügen und bearbeiten

Klicke auf das [+] (1) und eine neue Rolle hinzuzufügen. Die hinzugefügte Rolle erscheint als neue Spalte in der Rollenübersicht und hat standardmäßig nur die Berechtigung Screenshots aufzunehmen. Um die Rolle umzubenennen, klickst du auf das Stift-Symbol (2) neben dem Namen der neuen Rolle. Mit einem Klick auf das Papierkorb-Symbol (3) kannst du Rollen löschen. Um die Berechtigungen anzupassen, wählst du die Checkboxen der gewünschten Berechtigungen an oder ab (4).

![Eine Rolle hinzufügen](/assets/images/admin/usermanagement/de_usermanagement-05.png)

Die folgenden Berechtigungen stehen zur Auswahl.

{% include styled_table.html %}
| **Berechtigung**              | **Beschreibung**                                      |
|-------------------------------|-------------------------------------------------------|
| Benutzer verwalten            | Zugriff auf die Verwaltung der Benutzer der Peakboard Box. Es können Benutzer hinzugefügt und geändert werden. |
| Logs verwalten                | Zugriff auf die Logs, die auf der Peakboard Box gespeichert werden. Die Logs können gelesen und auch gelöscht werden. |
| Anwendungen verwalten         | Aktivieren, deaktivieren, hochladen und löschen von Anwendungen auf der Peakboard Box im Peakboard Designer und per Web Access. |
| Daten lesen                   | Variablen und Listen und globale Funktionen nach außen freigeben und auslesen. |
| Daten schreiben               | Variablen und Listen und globale Funktionen nach außen freigeben und zurückschreiben. |
| Eigenschaften festlegen       | Im Tab Eigenschaften in den Peakboard Box Einstellungen Werte hinzufügen, ändern und löschen. Es handelt sich dabei um Eigenschaften die für die gesamte Peakboard Box gelten. Darunter fällt zusätzlich auch der Lizenzschlüssel. Diese Option sollte deshalb Administratoren vorbehalten sein. |
| Ressourcen festlegen          | Vorhandene Ressourcen per Web Access verändern und ergänzen. |
| Screenshot aufnehmen          | Benötigt für den Screenshot in den Peakboard Box Einstellungen. Mindestvoraussetzung für Nutzung des Peakboard Hub online. |
| Systemeinstellungen           | Allgemeine, die Peakboard Box betreffende Systemeinstellungen verändern wie beispielsweise den Peakboard Box Namen, Netzwerverbindungen und ähnliches. |
| Cloud-Kommunikation zulassen  | Kommunikation mit dem Peakboard Hub online ermöglichen. |

### Konfigurieren der Benutzer

Hast du die Rollen konfiguriert, kannst du alle benötigten Benutzer anlegen und ihnen jeweils die passende Rolle zuweisen.
Um einen neuen Benutzer hinzuzufügen, klickst du auf das [+] (1). Für den neuen Benutzer wird automatisch ein sicheres Passwort generiert (2). Mit einem Klick auf das Auge-Symbol (3) kannst du dieses in Klarschrift anzeigen. Du kannst das Passwort bei Bedarf auch manuell anpassen. Gib dem neuen Benutzer in der Spalte [Benutzername] (4) einen Namen. In der Spalte [Rolle] (5) wählst du die gewünschte Rolle für den Benutzer aus dem Drop-down Menü aus.

![Benutzer hinzufügen und konfigurieren](/assets/images/admin/usermanagement/de_usermanagement-06.png)

Um Konfigurationsaufwand zu sparen, kannst du die Einstellungen für Benutzer und Rollen automatisch für alle Peakboard Boxen, die sich in der gleichen Gruppe befinden, übernehmen. Aktiviere dazu die Checkbox [Repliziere Benutzer und Rollen in andere Peakboard Boxen der Gruppe 'Name der aktuellen Gruppe'] (1).

## Peakboard Box mit Nutzerkontext verwenden

Um die Peakboard Boxen im gewünschten Nutzerkontext zu verwenden, muss die jeweilige Peakboard Box mit dem entsprechenden Benutzer zum Peakboard Designer hinzugefügt werden. Dafür wird beim Hinzufügen der Peakboard Box der jeweilige Benutzername und das zugehörige Passwort eingegeben. Nun können nur noch Aktionen durchgeführt werden, die mit den für den Benutzer vergebenen Berechtigungen übereinstimmen.

## Betriebssystem-Administratorkonto `pbadmin`

Unabhängig von der Nutzerverwaltung der Peakboard Boxen im Peakboard Designer gibt es ein Administratorkonto für das Windows-Betriebssystem im Hintergrund der Peakboard Box. Der Standardbenutzer ist hier der `pbadmin`. Das Passwort erhältst du bei der Auslieferung der Peakboard Box per E-Mail. Diesen Benutzer benötigst du lediglich für administrative Aufgaben im Hintergrund, nicht für deine Arbeit mit den Peakboard Boxen im Peakboard Designer.

Um das Passwort des `pbadmin` zu ändern, klickst du im Bereich [Rollen] auf den Button [Change pbadmin Password] (1).

![pbadmin Passwort ändern](/assets/images/admin/usermanagement/de_usermanagement-07.png)
