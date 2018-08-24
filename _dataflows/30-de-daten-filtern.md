---
layout: article
title: Daten filtern
menu_title: Daten filtern
description: Daten filtern
lang: de
ref: flow-30
---
Der Dataflow-Schritt "Filter" stellt ein mächtiges Werkzeug dar, um nicht benötigte Daten nach einer gewissen Logik zu löschen. Wenn Sie beipsielsweise Lagertransaktionsdaten aus einem Vorsystem für zwei Lagerbereiche bekommen, aber beide Bereiche separat betrachten wollen (z.B. mit einer Auslastungskennzahl für den einen und den anderen Bereich), würde man typischerweise zwei Dataflows anlegen und gleich zu Beginn die Daten des jeweils anderen Bereichs per Filter löschen. So machen Sie aus einer gemischten Datenquelle zwei Separate. 

Die Logik funktioniert mit einem Lua-Ausdruck wie beim Create Colum Schritt. Nur der Rückgabewert ändert sich. Liefert der Ausdruck "false" zurück, wird die Zeile gelöscht, liefert er "true" bleibt sie enthalten. Das folgende Beispiel zeigt, wie alle Zeilen gelöscht werden, die in der Spalte City den Wert "N/A" enthalten.

![Filer Column](/assets/images/dataflows/dataflows-filter01.png)

