---
layout: article
title: Reload Flows
menu_title: Reload Flows
description: Wie funktionieren Reload Flows.
lang: de
weight: 11100
ref: misc-11100
redirect_from:

---
### Funktion

Reload Flows dienen dazu eine Reihenfolge anzulegen in der Datenquellen und Dataflows geladen werden. 

Das bietet sich an, wenn Datenquellen oder Dataflows Informationen einer anderen Datenquelle oder eines Dataflows benötigen, um geladen zu werden. 
Reload Flows können für alle Pull Datenquellen angelegt werden, für die ein Reload Intervall bestimmt werden kann. 
MQTT oder OPC UA Datenquellen können zum Beispiel nicht in einem Reload Flow geladen werden.

### Ein Reload Flow besteht aus folgenden Elementen

{% include styled_table.html %}
{: .w-full }
| Reload Flow Element      | Ein Element, das im Reload Flow genutzt wird. Dies kann eine Datenquelle oder ein Dataflow sein. |
| Reload Flow Source       | Die Datenquelle oder der Dataflow der den Reload Flow auslöst. Diese kann nicht über den Reload Flow geladen werden welchen sie auslöst. |
| Reload Flow Target       | Ein Reload Flow Element, welches von dem Reload Flow geladen wird. Hier können alle Datenquellen eingebunden werden, die in einem bestimmten Zeitintervall neu geladen werden, sowie jegliche Dataflows. Ein Reload Flow Target kann auch gleichzeitig eine Reload Flow Source sein, wenn darauf weitere Elemente folgen. |

<div class="box-tip" markdown="1">**Hinweis**

Die Elemente sind nicht auf die Nutzung in einem einzigen Reload Flow beschränkt.
Eine Datenquelle oder ein Dataflow kann in mehreren Reload Flows verwendet werden.
Bitte achte darauf, bei mehrfacher Verwendung von Datenquellen oder Dataflows keine versehentlichen Dauerschleifen zu erzeugen.
</div>

### Erstellen und Bearbeiten eines Reload Flows

Um einen Reload Flow zu erstellen, klickst du im Reiter [Start] des Peakboard Designers auf das Drop Down Menü [Projekt] und dort auf [Reload Flows] (1)

![Reload Flow anlegen](/assets/images/misc/Reload_Flows/de_reloadflow-add.png)

Alternativ stellst du während der Konfiguration einer Datenquelle die Nachlade Art auf [Von Reload Flow] (2), um ebenfalls in den Erstellungsdialog zu gelangen.

![Reload Flow aus Datenquelle anlegen](/assets/images/misc/Reload_Flows/de_reloadflow-add02.png)

In diesem Dialog kannst du nun bestehende Reload Flows bearbeiten oder neue Reload Flows erstellen.


#### Reload Flow erstellen
Um einen neuen Reload Flow zu erstellen, klickst du auf das Plus in der oberen linken Ecke des Dialogs (3).
Dann kannst du dem Reload Flow einen Namen geben (4) und über die Datasources auf der rechten Seite die Reload Flow Elemente (5) per Drag-and-Drop im mittleren Bereich hinzufügen. 
Im mittleren Bereich kannst du die Reihenfolge in der die Reload Flow Elemente in diesem Reload Flow geladen werden bestimmen (6).

![Reload Flows konfigurieren](/assets/images/misc/Reload_Flows/de_reloadflow-config.png)


#### Reload Flow bearbeiten
Um einen bestehenden Reload Flow zu bearbeiten, wählst du diesen im linken Bereich des Reload Flow Dialogs aus (7). 
Daraufhin kannst du den Namen und die einzelnen Reload Flow Elemente bearbeiten.
Um die Reihenfolge der Reload Flow Elemente in einem Reload Flow zu ändern, kannst du per Drag-and-Drop die einzelnen Reload Flow Elemente verschieben. 
Um ein Reload Flow Element aus einem Reload Flow zu löschen, bewegst du die Maus über das Reload Flow Element und klickst auf die Mülltonne neben dem Reload Flow Element (8).

![Reload Flows bearbeiten](/assets/images/misc/Reload_Flows/de_reloadflow-config02.png)

Möchtest du einen Reload Flow vollständig löschen, bewegst du die Maus über den Reload Flow und klickst dann auf die Mülltonne (9).

Alle Änderungen innerhalb des Dialogs kannst du entweder über [OK] speichern oder über [Abbrechen] verwerfen.

![Reload Flows bearbeiten](/assets/images/misc/Reload_Flows/de_reloadflow-config03.png)


#### Funktionen innerhalb des Reload Flows
Innerhalb des Reload Flows gibt es 2 Funktionen. 
Das erste Reload Flow Element dient dabei als Reload Flow Source, diese kann also nicht nach dem Reload Flow geladen werden. 
In den Einstellungen dieser Datenquelle kannst du festlegen, ob der Reload Flow nur ausgelöst werden soll, wenn sich Daten geändert haben oder ob er in jedem Fall beim Neuladen der Reload Flow Source ausgelöst werden soll. (10)
Wird der Reload Flow dann ausgelöst werden alle weiteren Reload Flow Targets neu geladen.

![Datenquelle konfigurieren](/assets/images/misc/Reload_Flows/de_reloadflow-datasource01.png)

Ist ein Reload Flow Element bereits in einem Reload Flow eingebunden, ist beim Bearbeiten dieser Datenquelle direkt [Von Reload Flow] in der Nachlade Art ausgewählt.
Über den Reload Flows Button (11) kannst du den Dialog zum Bearbeiten der Reload Flows öffnen.
Ist das Reload Flow Element noch nicht in einem Reload Flow beinhaltet, öffnet sich beim Auswählen dieser Option direkt der Reload Flows Dialog.
Hier kannst du das Reload Flow Element entweder in einen bestehenden Reload Flow einfügen oder einen neuen Reload Flow erstellen und es diesem hinzufügen.

![Datenquelle konfigurieren](/assets/images/misc/Reload_Flows/de_reloadflow-datasource02.png)

<div class="box-tip" markdown="1">**Hinweis**

Wie oben bereits erwähnt kann ein Reload Flow Target gleichzeitig eine Reload Flow Source sein, wenn weitere Elemente folgen.
Zudem sind Reload Flow Elemente nicht auf die Nutzung in einem einzigen Reload Flow beschränkt.
Daraus kann sich eine Mischform der beiden dargestellten Optionen ergeben.
In dieser wird in den Einstellungen der Datenquelle sowohl die Auswahl [Reload Flows bei Datenänderung laden] (10), als auch der Reload Flows Button (11) angezeigt.
</div>