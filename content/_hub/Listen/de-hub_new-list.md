---
layout: article
product: hub
title: Listen hinzufügen
menu_title: Listen hinzufügen
description: Peakboard Hub - Listen hinzufügen
lang: de
weight: 800
ref: hub-800
redirect_from:
 - /hub/de-hub_variableslist.html
---

Im Peakboard Hub kannst du Listen erstellen, die du im Peakboard Designer verwenden kannst.
Diese Listen bieten dir die Möglichkeit, Daten zentral für alle Peakboard Boxen zu ändern, die diese nutzen.
Außerdem bieten dir diese Listen auch die Möglichkeit Daten über Peakboard schnell und einfach zentral zu speichern.
So kannst du für Maschinen, unabhängig von deren Alter oder Ausstattung zum Beispiel den Maschinenstatus speichern um damit danach eine Langzeitauswertung zu erzeugen.

### Eine neue Liste anlegen

Um eine neue Liste anzulegen, klickst du im Bereich [Lists] auf den Button [Add] (1).
Mit dem [Import]-Button kannst du Listen in den Peakboard Hub laden, die als JSON-String in einer Textdatei gespeichert wurden.
Wie die Erstellung funktioniert kannst du im Abschnitt [Export von Listen] weiter unten nachlesen.

![Liste hinzufügen](/assets/images/hub/de_hub_list-01.png)

Gib der Liste einen Namen (1). Dann legst du eine Datenstruktur an und definierst die Spalten deiner Liste. Um eine Spalte hinzuzufügen, klicke auf [Add Column] (2), gib der Spalte den gewünschten Namen (3) und wähle den Spaltentyp (4) aus. Du kannst Spalten vom Typ, String, Number oder Boolean erstellen.
Um die Reihenfolge der Spalten zu verändern, kannst du diese per Drag-and-drop verschieben. Wenn du alle Spalten hinzugefügt hast, speicherst du die Liste mit [Save] (5) ab.

![Liste anlegen](/assets/images/hub/de_hub_list-02.png)

Im nächsten Bereich hast du die Möglichkeit, Daten für diese Liste zu pflegen.
Du kannst Zeilen mit [Add] (1) hinzufügen, kannst Werte in die Zeilen eintragen (2), Zeilen löschen (3) und die Änderungen mit [Save] (4) speichern.

Mit einem Klick auf [Edit Properties] (5) kannst du die Spaltentypen und Namen der Spalten im Nachhinein noch ändern.
Über die Option [Clear All] (6) löschst du alle Einträge aus der Liste.

![Daten pflegen](/assets/images/hub/de_hub_list-03.png)

### Berechtigungen

Um zu verhindern, dass jeder beliebig auf deine Daten zugreifen kann, kannst du [in der Nutzerverwaltung des Peakboard Hub](/hub/de-hub_usermanagement.html) festlegen, welche Nutzergruppe mit ihrem jeweiligen Gruppenschlüssel Zugriff auf die Liste hat. Im [Artikel über die Nutzerverwaltung](/hub/de-hub_usermanagement.html) ist auch beschrieben, wie du die Berechtigungen von Nutzergruppen für einzelne Listen noch detaillierter vergeben kannst.

Im nächsten Artikel liest du, [wie du die Listen im Peakboard Designer verwenden kannst](/hub/de-hub_use-list.html).
