---
layout: article
product: hub
title: Listen 
menu_title: Listen 
description: Peakboard Hub - Listen 
lang: de
weight: 800
ref: hub-800
redirect_from:
---

Im Peakboard Hub kannst du Listen erstellen, die du im Peakboard Designer verwenden kannst.
Diese Listen bieten dir die Möglichkeit, Daten zentral für alle Peakboard Boxen zu ändern, die diese nutzen.
Außerdem bieten dir diese Listen auch die Möglichkeit Daten von Peakboard schnell und einfach zentral zu speichern, um zum Beispiel Maschinenstatus für eine Langzeitauswertung zu erzeugen.

### Eine neue Liste anlegen

Um eine neue Liste anzulegen, klickst du im Bereich [Lists] auf den Button [Add] (1).

![Liste hinzufügen](/assets/images/hub/de_hub_list-01.png)

Gib der Liste einen Namen (1). Dann legst du eine Datenstruktur an und definierst die Spalten deiner Liste. Um eine Spalte hinzuzufügen, klicke auf [Add Column] (2), gib der Spalte den gewünschten Namen (3) und wähle den Spaltentyp (4) aus.
Um die Reihenfolge der Spalten zu verändern, kannst du diese per Drag-and-drop verschieben. Wenn du alle Spalten hinzugefügt hast, speicherst du die Liste mit [Save] (5) ab.

![Liste anlegen](/assets/images/hub/de_hub_list-02.png)

Im nächsten Bereich hast du die Möglichkeit, Daten für diese Liste zu pflegen.
Du kannst Zeilen mit [Add] (1) hinzufügen, kannst Werte in die Zeilen eintragen (2), Zeilen löschen (3) und die Änderungen mit [Save] (4) speichern.

Mit einem Klick auf [Edit Properties] (5) kannst du die Spaltentypen und Namen der Spalten im Nachhinein noch ändern.
Über die Option [Clear All] (6) löschst du alle Einträge aus der Liste.

![Daten pflegen](/assets/images/hub/de_hub_list-03.png)

### Die Liste im Peakboard Designer verwenden

Ist die Liste einmal angelegt und dein [Peakboard Designer mit dem Peakboard Hub verbunden](/hub/de-hub_connectpbdesigner.html), dann kannst du diese über die Datenquelle [Peakboard Hub List](/data_sources/de-peakboard-hub-list.html) im Peakboard Designer einbinden. Wie genau das funktioniert, wird [im zugehörigen Artikel](/data_sources/de-peakboard-hub-list.html) erklärt.

Anstatt die Daten der Liste nur zu lesen, kannst du auch Daten in die Peakboard Hub List zurückschreiben.
Dazu erstellst du mit dem [Skript-Editor](/scripting/de-script-editor.html) ein entsprechendes Skript. Im Skript-Baum findest du im Block-Mode unter [FUNKTIONEN/In externen Systemen veröffentlichen/Peakboard Hub] (1) bereits vorgefertigte Building Blocks für diese Aufgabe, die du nach deinen Bedürfnissen anpassen kannst. Im Script-Mode findest du die Snippets unter [DATEN/Listenname].

![Skript-Editor](/assets/images/hub/de_hub_list-04.png)

### Berechtigungen

Um zu verhindern, dass jeder beliebig auf deine Daten zugreifen kann, kannst du [in der Nutzerverwaltung des Peakboard Hub](/hub/de-hub_usermanagement.html) festlegen, welche Nutzergruppe mit ihrem jeweiligen Gruppenschlüssel Zugriff auf die Liste hat. Im [Artikel über die Nutzerverwaltung](/hub/de-hub_usermanagement.html) ist auch beschrieben, wie du die Berechtigungen von Nutzergruppen für einzelne Listen noch detaillierter vergeben kannst.

### Export von Listen

Du kannst deine angelegten Listen im Peakboard Hub auch exportieren. Hierfür stehen zwei verschiedene Möglichkeiten zur Verfügung.

In der Detailansicht deiner Liste kannst du mit [Duplicate Structure] (1) die Struktur, das heißt die Spalten und Spaltentypen deiner Liste für eine neue Liste übernehmen. Du gelangst in den Erstellungsdialog für eine neue Liste, die bereits die identischen Spalten enthält und musst dieser nur einen neuen Namen geben.
Alternativ kannst du mit [Export Structure] (2) eine Textdatei herunterladen, die die Struktur der Liste als JSON-String enthält.
Dateien dieser Form kannst du mit dem [Import] Button (3) in den Peakboard Hub laden, um eine neue Liste mit der identischen Struktur zu erstellen.

Um die Inhalte deiner Liste mit dem aktuellen Stand zu exportieren, klickst du auf [Download Data] (4).
Deine Daten werden dabei im Dateiformat CSV zum Download bereitgestellt.
Es ist nicht möglich, diese Daten zu einem späteren Zeitpunkt wieder in Peakboard Hub zu importieren.

![Listen exportieren](/assets/images/hub/de_hub_list-05.png)
