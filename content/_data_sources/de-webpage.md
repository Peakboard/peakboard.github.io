---
layout: article
title: Webseitentabelle
menu_title: Webseitentabelle
description: Information über Webseitentabellen in Peakboard
lang: de
weight: 900
ref: dat-900
redirect_from:
  - /data_sources/09-de-webpage.html
---

Diese Seite erklärt dir die einzelnen Features beim Zugriff auf eine Tabelle, die auf einer Webseite enthalten ist. Unter dem folgenden Link findest du ein Tutorial, wie generell externe Datenquellen konfiguriert und an Peakboard-Elemente gekoppelt werden:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)

Falls du keine URL zu einer passenden Webseite zur Hand hast, sondern die Sache einfach nur einmal ausprobieren möchtest, verwende die folgende Beispiel-URL. Sie verweist auf eine Webseite mit mehreren Tabellen. Interessant ist für diesen Artikel nur die erste, große Tabelle mit den aktuellen Edelmetallkursen. Die anderen, kleineren Tabellen – weiter unten auf der Seite sollen rausgefiltert werden.

[https://www.gold.de/kurse/](https://www.gold.de/kurse/)

Um die Datenquelle für Webseitentabellen hinzuzufügen mache einen Rechtsklick auf [Daten] oder klicke alternativ auf den [...]-Button und wähle [Datenquelle hinzufügen] und [Webseitentabelle](1).

Peakboard sucht in der jeweiligen Webseite nach HTML-Tabellen. Das funktioniert besonders gut, wenn das HTML syntaktisch korrekt ist. Solltest du dich an einer Webseite versuchen, bei der die Daten nicht korrekt gefunden werden oder unvollständig sind, prüfe die HTML-Syntax.

Gib der Datenquelle einen eindeutigen Namen (1) und gib die URL (2) ein. Falls die Webseite eine Authentifizierung (3) verlangt kannst du diese ebenfalls eingeben.
Alle Tabellen auf der Webseite haben entweder einen Namen oder eine Nummer. Um die gewüschte Tabelle auszuwählen musst du auf das Ladesymbol (4) klicken, danach kannst du im Drop-down (5) die verschiedenen Tabellen auswählen die erkannt wurden.
Jetzt kannst du ausprobieren, welche die richtige Tabelle ist. Für den Fall, dass die Tabelle keine HTML-Überschriften hat (`<th>`-Tag), stehen die Überschriften eventuell in der ersten Tabellenzeile. Falls das so ist, aktiviere die entsprechende Checkbox (6). Mit einem Klick auf [Daten laden] (7) kannst du dir jeweils die Vorschau der gewählten Tabelle anzeigen lassen.

![Webseitentabelle konfigurieren](/assets/images/data-sources/webpage/de_webpage-02.png)

Die Metadaten (Spalten und deren Datentyp) werden übernommen. Du kannst die Zeit für das automatische Auffrischen der Datenquelle in Sekunden angeben und bei Bedarf die maximale Anzahl der Zeilen beschränken. Sollte sich die Quelle aus irgendeinem Grund ändern, kannst du mit dem Ladesymbol das Ermitteln der Metadaten von Hand erneut starten. Die gepeicherten Metadaten werden dann gelöscht und neu ermittelt.
