---
layout: article
product: hub
title: Listenzelle mit Variable verknüpfen
menu_title: Listenzelle mit Variable verknüpfen
description: Peakboard Hub - Listenzelle mit einer Variable verknüpfen
lang: de
weight: 640
ref: hub-640
redirect_from:
---

Du kannst einzelne Zellen in Peakboard Hub Listen mit Peakboard Hub Variablen verknüpfen.
Dadurch entsteht eine bidirektionale Synchronisierung: Änderungen an der Variable aktualisieren automatisch die verknüpfte Zelle und umgekehrt.

### Zelle mit Variable verknüpfen

1. **Zelle auswählen (1):** Klicke auf die Zelle in deiner Liste, die du mit einer Variable verknüpfen möchtest. Die ausgewählte Zelle wird hervorgehoben.
2. **Verknüpfung starten (2):** Klicke in der oberen Menüleiste auf [Bind to variable].

![Zelle auswählen](/assets/images/hub/list-bind-variable/list-bind-variable-01-select.png)

3. **Variable auswählen (1):** Es öffnet sich der Dialog [Link to Variable] mit den verfügbaren Variablen. Da es sich im Beispiel um eine String-Spalte handelt, werden nur String-Variablen zur Auswahl angezeigt. Wähle die gewünschte Variable aus.

![Variable auswählen](/assets/images/hub/list-bind-variable/list-bind-variable-02-dialog.png)

Nach der Auswahl ist die Variable mit der Zelle verknüpft. Ein Verknüpfungssymbol (1) in der Zelle zeigt die bestehende Verbindung an.

![Verknüpfte Zelle](/assets/images/hub/list-bind-variable/list-bind-variable-03-bound.png)

### Verknüpfung aufheben

1. **Verknüpfte Zelle markieren (1):** Wähle die Zelle aus, deren Verknüpfung du aufheben möchtest.
2. **Unbind auswählen (2):** Klicke in der Menüleiste auf [Unbind].

![Verknüpfung aufheben](/assets/images/hub/list-bind-variable/list-bind-variable-04-unbind.png)

3. **Aufhebung bestätigen:** Es erscheint ein Bestätigungsdialog. Klicke auf [Yes], um die Verknüpfung zwischen Zelle und Variable zu entfernen.

![Aufhebung bestätigen](/assets/images/hub/list-bind-variable/list-bind-variable-05-unbind-confirm.png)
