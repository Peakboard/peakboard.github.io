---
layout: article
product: hub
title: Wertebeschränkungen für Variablen
menu_title: Wertebeschränkungen für Variablen
description: Peakboard Hub - Wertebeschränkungen für Variablen
lang: de
weight: 710
ref: hub-710
redirect_from:
---

In diesem Artikel erfährst du, wie du Wertebeschränkungen (Constraints) für Variablen im Peakboard Hub festlegen kannst.

### Numerische Variablen

![Numerische Constraints](/assets/images/hub/de_hub_variable-constraints-01.png)

Für Variablen vom Typ Number stehen dir drei Beschränkungsoptionen zur Verfügung:

- **Min value:** Legt den niedrigsten erlaubten Wert fest.
- **Max value:** Bestimmt den maximal erlaubten Wert.
- **Tick size:** Definiert die Schrittgröße für Wertänderungen.

Bestätige die Einstellungen mit [Save] oder verwirf sie mit [Cancel].

### String-Variablen

![String Constraints](/assets/images/hub/de_hub_variable-constraints-02.png)

Für String-Variablen kannst du über [Edit Constraints] erlaubte Werte festlegen.
Du kannst einzelne erlaubte Einträge hinzufügen, die dann in einer Dropdown-Liste bei der Nutzung der Variable zur Auswahl stehen.
Werte können einzeln entfernt oder neue Einträge hinzugefügt werden.

Alternativ kannst du Beschränkungen über Regex-Muster definieren, um Formatvorgaben sicherzustellen.

### Constraints beim Anlegen neuer Variablen

![Constraints beim Anlegen](/assets/images/hub/de_hub_variable-constraints-03.png)

Beim Anlegen einer neuen Variable über [+ Add Variable] gibst du einen Identifier (Variablennamen) und den Datentyp an.
Durch Aktivieren von [Add constraints] werden datentypspezifische Optionen angezeigt:

- **Für String:** Wähle zwischen [Values] (einzelne erlaubte Einträge) oder [Regex] (Muster für Formatvalidierung).
- **Für Number:** Definiere Min value, Max value und Tick size.

Schließe den Vorgang mit [Add] ab.
