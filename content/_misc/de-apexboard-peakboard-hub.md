---
layout: article
title: Apexboard - Peakboard Hub einrichten
menu_title: Peakboard Hub einrichten
description: Informationen zu den nötigen Schritten um Einstellungen für das Apexboard im Peakboard Hub vorzunehmen
lang: de
weight: 989
ref: misc-989
draft: true
---

Die Daten deines Apexboard werden im Peakboard Hub gespeichert. Neben der reinen Funktion als Datenspeicher kannst du über den Peakboard Hub dein Apexboard konfigurieren und deiner Arbeitsumgebung anpassen.
Der folgende Artikel zeigt das Vorgehen anhand des [Peakboard Hub Online](/hub/Peakboard_Hub_online/de-get-started-online.html). Der Peakboard Hub Online des Apexboard wird dafür vorkonfiguriert ausgeliefert und beinhaltet bereits die für den reibungslosen Betrieb benötigten Listen.

## Stammdaten im Peakboard Hub pflegen

Damit später die richtigen Abteilungen, Schichten, Mitarbeiter, und weitere Einstellungsoptionen im Apexboard verfügbar sind, musst du diese zuerst im Peakboard Hub konfigurieren. Die folgenden Listen musst du dafür im Peakboard Hub befüllen. Die restlichen Listen dienen der Datenspeicherung und sollten nicht bearbeitet werden.

Du findest die Listen im Peakboard Hub unter dem Menüpunkt [Peakboard Hub Data] (1) im Tab [Peakboard Hub Lists] (2). Um einen neuen Eintrag in einer Liste anzulegen klickst du auf den [+ Add]-Button (3). Der Eintrag wird ganz unten in der Liste eingefügt. Um bestehende Einträge zu bearbeiten machst du einen Doppelklick in das Feld, das du bearbeiten möchtest. Wenn du Änderungen vorgenommen hast, speicherst du diese mit dem [Save]-Button (4).

![Peakboard Hub Listen](/assets/images/apexboard/peakboardhub/de_apexboard-peakboardhub-01.png)

### SFM_M_Departments

In der Peakboard Hub Liste [SFM_M_Departments] definierst du die Abteilungen deines Unternehmens. Diese werden stehen später in der [Schichtauswahl](/apexboard/de-apexboard-settings.html) zur Verfügungung. Die Spalten werden wie folgt befüllt.

#### DepartmentID

Die ID der Abteilung. Diese benötigst du später um den Mitarbeitern ihre jeweilige Abteilung zuzuweisen.

#### Department

Der Name der Abteilung wie er später im Apexboard angezeigt wird.

#### ShowDepartment

Mit dieser Checkbox legst du fest ob diese Abteilung derzeit im Apexboard angezeigt wird oder nicht.

#### SortingPosition

Mit dieser Spalte legst du die Sortierungsreihenfolge der Abteilungen fest. Die Sortierung erfolgt von rechts nach links und von oben nach unten.

### SFM_M_Employees

In der Peakboard Hub Liste [SFM_M_Employees] legst du die einzelnen Mitarbeiter deines Unternehmens an. Den hier angelegten Mitarbeitern können im Apexboard dann Verantwortlichkeiten für [Kennzahlen](/apexboard/de-apexboard-keyfigures.html) oder [Maßnahmen](/apexboard/de-apexboard-measures.html) zugeordnet werden. Du befüllst die Spalten wie folgt.

#### Name

Der Vorname des Mitarbeiters den du anlegen möchtest.

#### LastName

Der Nachname des Mitarbeiters.

#### DepartmentID

Die ID der Abteilung aus der Liste [SFM_M_Departments], die du dem Mitarbeiter zuweisen möchtest.

#### Email

Die E-Mail Adresse des Mitarbeiters.

#### ReceiveNotifications

Mit dieser Checkbox legst du fest, ob der Mitarbeiter in bestimmten Situationen benachrichtigt werden soll oder nicht.

Jeder neu angelegte Mitarbeiter erhält automatisch eine [EmployeeID] (6)

### SFM_M_Kpi

In der Peakboard Hub Liste [SFM_M_Kpi] definierst du alle Eigenschaften deiner [Kennzahlen](/apexboard/de-apexboard-keyfigures.html) im Apexboard. Die Spalten werden wie folgt befüllt.

#### Kpi

Der Name der Kennzahl, der unter anderem auf den Buttons im linken Bereich [Werte erfassen](/apexboard/de-apexboard-capture.html) bei der Auswahl der Kennzahlen angezeigt wird.

#### Description

Die detaillierte Beschreibung der Kennzahl, die beim Klick auf den Info-Button [beim erfassen von Werten](/apexboard/de-apexboard-capture.html) angezeigt wird.

#### Unit

Die Einheit in der die Kennzahl erfasst wird.

#### KpiCategoryID

Die ID der Kategorie in der die Kennzahl angezeigt werden soll.
Es stehen fünf Kategorien zur Auswahl:

* **1** - Sicherheit
* **2** - Qualität
* **3** - Ausbringung
* **4** - Kosten
* **5** - Personal

#### AggregationType

Beschreibt wie die Kennzahl aggregiert wird.
Es stehen folgende Optionen zur Auswahl, diese müssen unter Beachtung der Groß- und Kleinschreibung in die Spalte eingetragen werden.

* **Sum** - Die Werte werden addiert
* **Average** - Es wird ein Durchschnitt aus den Werten gebildet

#### DeltaOrange

Der Schwellenwert ab welchem die [Kennzahlen](/apexboard/de-apexboard-keyfigures.html) in der ersten Farbabstufung in gelb angezeigt werden. Nutzt die unter [Unit] angegebene Einheit. Falls ein Dezimal-Trennzeichen genutzt werden soll, muss ein Punkt verwendet werden.

#### DeltaRed

Der Schwellenwert ab welchem die [Kennzahlen](/apexboard/de-apexboard-keyfigures.html) in der zweiten Farbabstufung in rot angezeigt werden. Nutzt die unter [Unit] angegebene Einheit. Falls ein Dezimal-Trennzeichen genutzt werden soll, muss ein Punkt verwendet werden.

#### RelativeDelta

Wenn für den Schwellenwert der Farbabstufung die relative Abweichung in Prozent genutzt werden soll, anstatt beispielsweise der exakten absoluten Abweichung in Stück, dann muss diese Checkbox aktiviert werden. Die Angaben in den Spalten [DeltaOrange] und [DeltaRed] werden dann in Prozent interpretiert anstatt der unter [Unit] angegebenen Einheit.

#### NegativeKpi

Mit dieser Checkbox kann festgelegt werden, wie Abweichungen vom Soll-Wert der Kennzahl interpretiert werden. Ist die Checkbox aktiviert, ist das Ziel mit dem Ist-Wert unter dem Soll-Wert zu bleiben. Eine Überschreitung des Soll-Wertes hat negative Auswirkungen. Beispiel für solche Kennzahlen wären beispielsweise Unfälle, Durchlaufzeiten oder Ausschuss.

#### ShowCurrentDay

Mit dieser Checkbox legst du fest, welches Datum standardmäßig bei der Erfassung der Kennzahl hinterlegt sein soll. Bei aktivierter Checkbox wird der aktuelle Tag hinterlegt, ansonsten wir der Vortag angezeigt. Über das Datumsfeld kann weiterhin ein abweichendes Datum gewählt werden.

### SFM_M_ProcessingStatus

In der Peakboard Hub Liste [SFM_M_ProcessingStatus] definierst du die vier Spalten deines [Maßnahmen Kanban-Board](/apexboard/de-apexboard-measures.html). Die Spalten werden dabei wie folgt befüllt.

#### ProcessingStatus

Der Name der Spalte auf dem Maßnahmen Kanban-Board.

#### Position

Die Sortierung der Spalten von rechts nach links.

### SFM_M_Settings

In der Peakboard Hub Liste [SFM_M_Settings] werden einige grundlegende EInstellungen vorgenommen. Die Spalten werden wie folgt befüllt.

#### OrganisationName

Hier wird der Name des Peakboard Hub eingetragen. Dieser Eintrag ist voreingestellt und sollte nicht verändert werden.

#### HubVersionNumber

Hier wird die Version des verwendeten Peakboard Hub eingetragen. Diese Spaltr wird ebenfalls vorausgefüllt und sollte nicht verändert werden.

#### MeetingTimerMinutes

Hier legst du die Dauer des Timers in der Menüleiste des Apexboard fest, der dich bei deinen Shopfloormeetings unterstützen soll. Die Angabe erfolt in Minuten.

#### TimelineDefaultUrl

In der Detailansicht deiner definierten [Maßnahmen](/apexboard/de-apexboard-measures.html) im Apexboard findest du den Bearbeitungsfortschritt. Dort kannst du neben Texteinträgen auch Link-Einträge vornehmen. Mit der URL die du in dieser Spalte eingibst legst du fest, welche Website standardmäßig dort eingetragen wird. Dies kann sinnvoll sein wenn regelmäßig auf die gleiche Website zugegriffen werden soll, beispielsweise eine Seite aus dem Intranet des Unternehmens. Lässt du den Eintrag leer, wird standardmäßig keine Website voreingetragen.

### SFM_M_Shifts

In der Peakboard Hub Liste [SFM_M_Shifts] legst du die Schichten an in denen deine Mitarbeiter arbeiten. Die angelegten Schichten stehen dann in der [Schichtauswahl](/apexboard/de-apexboard-settings.html) zur Verfügung. Die Schichten werden in der Reihenfolge angezeigt in der sie in der Liste angelegt sind. Möchtest du die Reihenfolge ändern, musst du die Schichten neu anlegen.

Die Spalten werden wie folgt befüllt.

#### Shift

Der Name der angelegten Schicht.

#### ShowShift

Mit dieser Checkbox legst du fest, ob die Schicht in der [Schichtauswahl](/apexboard/de-apexboard-settings.html) angezeigt wird oder ausgeblendet ist.

#### ShiftStartTime

Hier legst du im Format HHmm (Stunden:Minuten im 24 Stunden Zeitformat) fest, um welche Uhrzeit die Schicht beginnt.

#### ShiftEndTime

Hier legst du fest, um welche Uhrzeit die angelegte Schicht endet.

### SFM_M_Urls

In der Peakboard Hub Liste [SFM_M_Urls] definierst du die Menüeinträge des Browsers im Apexboard. Die Spalten befüllst du wie folgt.

#### PageName

Der Name der Website wie er im Untermenü des Browser im Apexboard angezeigt werden soll.

#### Url

Die URL Der Website die angezeigt werden soll, wenn der entsprechende Menüpunkt angeklickt wird.
