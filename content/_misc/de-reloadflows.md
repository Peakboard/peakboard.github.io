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

Reload Flows

### Funktion

Reload Flows dienen dazu eine Reihenfolge anzulegen in der Datenquellen und Dataflows geladen werden. 

Das bietet sich an, wenn Datenquellen oder Dataflows Informationen einer anderen Datenquelle oder eines Dataflows benötigen, um geladen zu werden. 
Reload Flows können für alle Pull Datenquellen angelegt werden für die ein Reload Intervall bestimmt werden kann. 
MQTT oder OPC UA Datenqellen können zum beispiel nicht in einem Reload Flow geladen werden.

### Ein Reload Flow besteht aus folgenden Elementen

{% include styled_table.html %}
{: .w-full }
| Reload Flow Element      | Ein Element das im Reload Flow genutzt wird. Dies kann eine Datenquelle oder ein Dataflow sein. |
| Reload Flow Source       | Die Datenquelle oder der Dataflow der den Reload Flow auslöst dieses kann nicht über den Reload Flow geladen werden welchen es auslöst. |
| Reload Flow Target       | Ein reload flow Element welches von dem Reload Flow geladen wird. Hier können alle Datenquellen eingebunden werden die in einem bestimmten Zeitintervall neu geladen werden und Dataflows. |

### Erstellen und Bearbeiten eines Reload Flows

Um auf die Maske zum erstellen eines Reload Flows zu gelangen kann etweder über die Projekteinstellungen unter dem Punkt Reload Flows geklickt werden:

![image_1](/assets/images/misc/Reload_Flows/Reload_Flows_Location.png)

oder direkt beim anlegen einer Datenquelle oder eines Dataflows unter Nachlade Art Reload Flow gewählt werden:

![image_1](/assets/images/misc/Reload_Flows/Reload_Flows_Location2.png)

In dieser Maske besteht nun die Möglichkeit bestehende Reload Flows zu bearbeiten oder neue Reload Flows zu erstellen.

#### Reload Flow erstellen
Um einen neuen Reload Flow zu erstellen klicken wir auf das Plus im oberen linken Eck (1) 
können dann dem Reload Flow einen Namen geben (2) 
und über die Data Sources in der rechten Seite die Reload Flow Elemente hinzufügen (3). 
Im mittleren Bereich sehen wir dann die Reihenfolge in der die Reload Flow Elemente in diesem Reload Flow geladen werden (4).

#### Reload Flow bearbeiten
Um einen bestehenden Reload Flow zu bearbeiten kann dieser in dem linken Bereich ausgewählt werden (1). 
Daraufhin können der Name und die einzelnen Reload Flow Elemente bearbeitet werden (2).
Um die Reihenfolge der Reload Flow Elemente in einem Reload Flow zu ändern können wir über Drag und Drop die einzelnen Reload Flow Elemente in ihrer Position bearbeiten. 
Um ein Reload Flow Element aus einem reload flow zu löschen können wir auf die Mülltonne neben dem Reload Flow Element klicken
Um einen Reload Flow zu löschen müssen wir die Maus über den Reload Flow bewegen und dann auf das Minus klicken.

Alle Änderungen innhalb der Maske können entweder über OK gespeichert werden oder über cancel verworfen werden.

![image_1](/assets/images/misc/Reload_Flows/Reload_Flows_Interface.png)

#### Funktionen innerhalb des Reload Flows
Innerhalb des Reload Flows gibt es 2 Funktionen. 
Das erste Reload Flow Element dient dabei als Reload Flow Source, diese kann also nicht nach dem Reload Flow geladen werden sondern nur nach einem Zeitinterval oder über ein Skript. 
Hier können wir außerdem bestimmen ob der Reload Flow nur ausgelöst werden soll wenn sich Daten geändert haben oder ob er in jedem Fall beim Neuladen der Reload Flow Source ausgelöst werden soll. 
Wird der Reload Flow dann ausgelößt werden alle weiteren Reload Flow Targets neu geladen.

![image_1](/assets/images/misc/Reload_Flows/Reload_Flow_Element)

Ist ein Reload Flow Element in einem Reload Flow eingebunden kann beim Bearbeiten dieses Reload Flows direkt Reload Flow in der Nachlade Art gewählt werden. 
Ist das Reload Flow Element noch nicht in einem Reload Flow beinhaltet öffnet sich beim auswählen dieser option direkt die Reload Flows Maske und es kann entweder in einen bestehenden reload flow hinzugefügt werden oder ein neuer Reload Flow erstellt werden in dem dieses Reload Flow Element hinzugefügt werden kann.

![image_1](/assets/images/misc/Reload_Flows/Reload_Flows_Location2.png)
