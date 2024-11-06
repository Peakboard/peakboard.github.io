---

layout: article  
product: hub  
title: Variablen  
menu_title: Variablen  
description: Peakboard Hub - Variablen  
lang: de  
weight: 700  
ref: hub-700  
redirect_from:  

---

Die Variablen im Peakboard Hub dienen zum Austausch einzelner Werte zwischen dem Peakboard Hub und Peakboard Boxen. Im Gegensatz zu den [Peakboard Hub Listen](/hub/Listen/de-hub_new-list.html) können zwar nur einzelne Werte übertragen werden, jedoch ist die Nutzung von Variablen noch einfacher als die Einbindung von [Peakboard Hub Listen](/hub/Listen/de-hub_new-list.html). Änderungen werden direkt per MQTT verteilt, ohne auf ein Ladeintervall angewiesen zu sein.

## Peakboard Variablen im Peakboard Hub

Du findest den Bereich für die Peakboard Hub Variablen im Menüpunkt **[Variables]**. Das Fenster zeigt eine Übersicht über alle Variablen der aktuellen Nutzergruppe.

![Peakboard Variablen](/assets/images/hub/de_hub_variables-01.png)

In dieser Ansicht kannst du ebenfalls mit den Variablen arbeiten. Über den Knopf **"Add Variable"** lassen sich neue Variablen anlegen. Dafür werden ein Datentyp und ein Identifier benötigt. Daneben gibt es eine Suchleiste, über die Variablen nach ihrem Identifier gefiltert werden können. Dies ist bei einer hohen Anzahl an Variablen besonders hilfreich.

### Variablen im Überblick

![Peakboard Variablen Karte](/assets/images/hub/de_hub_variables-02.png)

Alle Variablen der aktuellen Gruppe werden in einzelnen Karten dargestellt, die jeweils drei Zeilen umfassen.

- **Erste Zeile:** Zeigt das Symbol für den Datentyp (z.B. für 'String'), den Identifier der Variablen und am Ende ein Dreipunktmenü. Über dieses Menü lassen sich Variablen entfernen oder Verbindungen aufheben.
- **Zweite Zeile:** Zeigt den aktuellen Wert der Variablen. Ein Klick auf den Wert ermöglicht das Ändern des Wertes.
- **Dritte Zeile:** Zeigt den Zeitpunkt der letzten Wertänderung.

## Variablen im Peakboard Designer

Um Peakboard Hub Variablen im Peakboard Designer und in der Peakboard Runtime zu nutzen, muss innerhalb einer Applikation eine Variable angelegt werden.

![Variablen im Designer](/assets/images/hub/de_hub_variables-03.png)

Über das **Peakboard Hub Tab** des Variablen-Dialogs kann eine Peakboard Designer Variable mit einer Hub Variable verknüpft werden. Im Dropdown-Menü in der Mitte des Dialogs können passende Hub Variablen der aktuellen Nutzergruppe und Hub Instanz ausgewählt werden.

**Hinweis:** Um eine problemlose Funktionsweise zu gewährleisten, sollten der [Peakboard Designer verbundene Hub](/hub/de-hub_connectpbdesigner.html) und die Nutzergruppe der Applikation entsprechen.

Zusätzlich lassen sich über den 'Mülleimer'-Knopf Verbindungen auflösen und über den 'Plus'-Knopf neue Variablen im Peakboard Hub anlegen.

## Verknüpfung mit Listenwerten

Peakboard Hub Variablen können mit Werten einzelner Zellen in Peakboard Hub Listen verknüpft werden. Änderungen an der Variablen oder am Zellenwert wirken sich auf die jeweils verknüpfte Instanz aus.

![Variablen im Designer](/assets/images/hub/de_hub_variables-04.png)

Um eine Variable zu verknüpfen, öffne eine Liste und wähle eine Zelle aus. Über die Menüpunkte oberhalb der Liste lässt sich mit **"Bind to variable"** eine Verbindung herstellen. Bei einer bestehenden Verbindung wird ein Kettensymbol angezeigt und der **"Unbind"** Knopf ermöglicht das Lösen der Verbindung.

Eine Variable kann mit genau einer Zelle und eine Zelle mit genau einer Variablen verbunden werden.