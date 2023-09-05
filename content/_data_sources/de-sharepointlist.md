---
layout: article
title: Sharepoint-Liste
menu_title: Sharepoint-Liste
description: Information über die Sharepoint-Listen Datenquelle in Peakboard
lang: de
weight: 1650
ref: dat-1650
redirect_from:
---

Diese Seite erklärt die einzelnen Features beim Zugriff auf eine Sharepoint-Liste.
Unter dem folgenden Link findest du ein Tutorial, wie generell externe Datenquellen konfiguriert und an Peakboard-Elemente gekoppelt werden:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)

Du kannst die Sharepoint-Datenquelle sowohl mit Listen aus On-Premise als auch mit Cloud-Installationen wie Office 365 koppeln.

Um die Datenquelle hinzuzufügen, mache einen Rechtsklick auf [Daten] oder klicke alternativ auf den [...]-Button und wähle dann [Datenquelle hinzufügen] und [Sharepoint Liste] (1).

![Sharepoint-Liste hinzufügen](/assets/images/data-sources/sharepointlist/de_sharepoint-01.png)

Gib der Datenquelle einen Namen (1).

Im Bereich [Verbindung] gibst du bei [Sharepoint Seite (Sammlung)] (2)die Seiten-URL ein.
E-Mail (3) und Passwort (4) sind deine Sharepoint Zugangsdaten.
Mit dem Auswahlfeld [Sharepoint Installation] (5) definierst du ob es sich um eine On-Premise oder Online-Installation handelt.

Im Bereich [Details angeben] gibst du dann den Namen der gewünschten Liste (6) ein und definierst wie viel Zeilen maximal geladen werden (7).

Durch einen Klick auf [Daten laden] (8) werden die entsprechenden Daten als Vorschau angezeigt.

Neben den reinen Nutzdaten werden auch auch Metadaspalten mit übermittelt, z.B. das Datum des letzten Zugriffs, der Name des Erstellers und weitere.
Je nach Anwendungsfall können diese Zusatzspalten nützlich sein.
Wenn die Metadaten ermittelt sind, steht die Datenquelle zur Nutzung zur Verfügung.

![Sharepoint-Liste konfigurieren](/assets/images/data-sources/sharepointlist/de_sharepoint-02.png)
