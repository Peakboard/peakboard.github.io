---
layout: article
title: Peakboard Hub Liste
menu_title: Peakboard Hub Liste
description: Peakboard Hub Liste
lang: de
weight: 2900
ref: dat-2900
redirect_from:
---

Voraussetzung für die Nutzung der Peakboard Hub Liste-Datenquelle ist eine bestehende Verbindung mit dem Peakboard Hub.
Du kannst dich dafür [mit einem Peakboard Hub on premise oder einem Peakboard Hub online verbinden](/hub/de-hub_connectpbdesigner.html) und dort [eine Liste anlegen](/hub/de-hub_variableslist.html), die du dann in den nächsten Schritten nutzen kannst.
Ob die Verbindung steht, erkennst du dann im Peakboard Designer anhand der Peakboard Hub Statusanzeige (1).

![Peakboard Hub verbunden](/assets/images/data-sources/peakboard-hublist/de_hublist-01.png)

Um die Peakboard Hub Liste-Datenquelle hinzuzufügen, mache im Explorer einen Rechtsklick auf [Daten], wähle dann [Datenquelle hinzufügen] und [Peakboard Hub Liste] (1) aus, um den Dialog zu öffnen.

![Peakboard Hub Liste hinzufügen](/assets/images/data-sources/peakboard-hublist/de_hublist-02.png)

Gib der Datenquelle einen eindeutigen Namen (1) und lege ein Intervall fest, in dem die Datenquelle neu geladen werden soll (2).

Klicke dann im Bereich [Liste] auf den Button [Listen laden] (3), um alle Listen zu laden, die [in der Nutzergruppe des Peakboard Hubs](/hub/de-hub_usermanagement.html), mit dem du verbunden bist, erstellt wurden.
Wähle die gewünschte Liste im Drop-down-Menü [Variable Listen] (4) aus und gib im Drop-down-Menü [Spalten] (5) an, welche Spalten geladen werden sollen.

Im Bereich [Sortieren] kannst du festlegen, nach welcher Spalte (6) und ob in aufsteigender oder absteigender Reihenfolge (7) die Daten sortiert werden sollen. Im Bereich [Filter] (8) legst du fest, ob die gesamte Liste oder nur ein Teil davon geladen werden soll.
Um noch genauer festzulegen, welche Daten deiner Liste geladen werden sollen, kannst du im Bereich [Erweiterte Filter] (9) Bedingungen definieren, nach denen gefiltert werden soll.

Alternativ zu diesen vordefinierten Sortier- und Filtermöglichkeiten kannst du mit dem Button [Select SQL] (10) die Ansicht wechseln und deine Filterbedingungen als SQL Statement selbst definieren.

Klicke zuletzt auf [Daten laden] (11), um eine Vorschau der Liste anzuzeigen. Mit [OK] (12) erstellst du dann die Datenquelle.

![Peakboard Hub Liste hinzufügen](/assets/images/data-sources/peakboard-hublist/de_hublist-03.png)

Möchtest du nun Daten in die Peakboard Hub Liste schreiben, wird das über ein Skript erledigt.
Die Daten können beispielsweise aus einer weiteren Datenquelle stammen.

Für die Erstellung eines solchen Skripts stellen wir dir in den [Building Blocks](/scripting/de-building-blocks.html) im Block-Mode und auch im Script-Mode vorgefertigte Bausteine zur Verfügung, mit denen du das Skript nach deinen Bedürfnissen erstellen kannst. Natürlich kannst du das Skript auch händisch erstellen.

Für den oben genannten Fall, dass die Daten aus einer weiteren Datenquelle stammen, legst du einen Refreshed Skript auf dieser Datenquelle an. Setze den Haken bei [Nur ausführen, wenn Daten geändert wurden] (1). Dadurch werden die Daten erfasst, wenn sich etwas geändert hat.
Im Bereich [FUNKTIONEN] (2) des [Skript-Editors](/scripting/de-script-editor.html) findest du unter [In externen Systemen veröffentlichen] und [Peakboard Hub] im Block-Mode die Option [Zeile am Ende hinzufügen] (3). Ziehe diesen Block auf die Arbeitsfläche des Skript-Editors und ergänze ihn nach deinen Bedürfnissen mit den Daten, die in die Liste geschrieben werden sollen. Im gezeigten Beispiel wurde am Ende ein weiterer Block hinzugefügt (4), der die Peakboard Hub Liste neu lädt, damit sie live in zum Beispiel einer Tabelle dargestellt werden kann.
Nach einem Klick auf [Speichern & Schließen] (5) ist das Skript fertig und es werden neu eingehende Daten aus der weiteren Datenquelle automatisch in die Peakboard Hub Liste geschrieben.

![In Peakboard Hub Liste schreiben](/assets/images/data-sources/peakboard-hublist/de_hublist-04.png)
![Building Block final](/assets/images/data-sources/peakboard-hublist/de_hublist-05.png)

Um die Peakboard Hub Liste-Datenquelle dann visuell darzustellen, ziehst du sie per Drag-and-drop aus dem Explorer auf die Arbeitsfläche und kannst sie beispielsweise als Tabelle anzeigen lassen oder sie mit anderen Methoden wie Dataflows weiterverarbeiten.

![Peakboard Hub Liste visualisieren](/assets/images/data-sources/peakboard-hublist/de_hublist-06.png)
