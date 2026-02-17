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

Die Variablen im Peakboard Hub dienen zum Austausch einzelner Werte zwischen dem Peakboard Hub und Peakboard Boxen.
Im Gegensatz zu den [Peakboard Hub Listen](/hub/Listen/de-hub_new-list.html) können zwar nur einzelne Werte übertragen werden, jedoch ist die Nutzung von Variablen besonders einfach.
Änderungen werden direkt per MQTT verteilt, ohne auf ein Ladeintervall angewiesen zu sein.

![Variable anlegen](/assets/images/hub/de_hub_variable-create.gif)

### Variable erstellen

1. **Variablen-Bereich öffnen:** Navigiere zum Menüpunkt [Variables] in der linken Seitenleiste. Falls noch keine Variablen vorhanden sind, erscheint ein [Add Variable] Button.
2. **Neue Variable hinzufügen:** Klicke auf den [Add Variable] Button, um den Erstellungsdialog zu öffnen.

### Variable konfigurieren

3. **Identifier festlegen:** Gib einen Namen im Feld [Identifier] ein (z.B. "Schichtdauer").
4. **Datentyp auswählen:** Wähle einen der drei verfügbaren Datentypen:
   - **string:** Textwerte
   - **number:** Numerische Werte
   - **bool:** Boolesche Werte (wahr/falsch)
5. **Constraints hinzufügen (optional):** Für numerische Variablen kannst du die Option [Add constraints] aktivieren und folgende Werte definieren:
   - **Min value:** Minimaler erlaubter Wert
   - **Max value:** Maximaler erlaubter Wert
   - **Tick size:** Schrittgröße für Änderungen
6. **Variable speichern:** Klicke auf den [Add] Button, um die Variable zu erstellen.

### Variable bearbeiten

7. **Wert anpassen:** Die Variable erscheint nach der Erstellung im Bereich [Shared variables]. Klicke auf das Wertfeld, um den aktuellen Wert zu ändern.
8. **Änderungen bestätigen:** Bestätige die Änderungen mit dem Haken-Symbol oder verwirf sie mit dem X-Symbol.

Erfolgreich erstellte Variablen ermöglichen den Datenaustausch zwischen mehreren Peakboard Boxen. Werte werden automatisch über alle verbundenen Systeme synchronisiert.

### Verknüpfung mit Listenwerten

Peakboard Hub Variablen können mit Werten einzelner Zellen in Peakboard Hub Listen verknüpft werden.
Änderungen an der Variablen oder am Zellenwert wirken sich auf die jeweils verknüpfte Instanz aus.
Weitere Informationen findest du im Artikel [Listenzelle mit Variable verknüpfen](/hub/Listen/de-hub_list-bind-variable.html).
