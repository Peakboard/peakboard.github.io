---
layout: article
title: Daten miteinander verknüpfen (Joins)
menu_title: Daten miteinander verknüpfen (Joins)
description: Daten miteinander verknüpfen (Joins)
lang: de
weight: 4000
ref: flow-4000
redirect_from:
  - /dataflows/40-de-daten-joinen.html
---
Wir haben bereits beim [Manipulieren von Spalten](/dataflows/de-spalteninhalte-aendern.html) die Möglichkeit kennen gelernt, eine [neue Spalte hinzuzufügen](/dataflows/de-spalten-hinzufuegen-loeschen-aendern.html) und diese durch einen [Look Up](https://help.peakboard.com/dataflows/de-spalten-hinzufuegen-loeschen-aendern.html#:~:text=Add%20Lookup%20Column%20-%20Ein%20neue%20Spalte%20mit%20Verweise%20auf%20eine%20andere%20Datenquelle%20hinzuf%C3%BCgen) auf eine andere Datenquelle zu füllen. Das ist sinnvoll, wenn es nur um eine einzelne Spalte geht.
Der Join-Schritt geht einen Schritt weiter. Hier werden zwei tabellenartige Datenbestände miteinander verknüpft. Man kennt diese Technik im Bereich der relationalen Datenbanken, wie beispielsweise einer [SQL](/data_sources/de-ms-sql-server.html) oder [Oracle](/data_sources/de-oracle.html) Datenbank. Da funktioniert es genauso.

Die Ausgangstabelle des aktuellen Datenflusses ist immer als die "linke" Tabelle zu sehen. Die neu hinzugefügte (sprich gejointe) Tabelle ist die "rechte" Tabelle.
Das folgende Beispiel zeigt das Hinzufügen einer zusätzlichen Tabelle mit Vizepräsidenten zu dem bekannten [Beispiel der amerikanischen Präsidenten](https://mysafeinfo.com/api/data?list=presidents). 
Im unteren Bereich sind die Spalten zu definieren, an welchen die Verknüpfung stattfindet. In dem Beispiel ist es nur eine Verbindung, und zwar die Spalte "FullName" in der Originaltabelle und die Spalte "Name" in der verknüpften Tabelle. Beide enthalten jeweils den vollständigen Namen des jeweiligen Präsidenten und dienen als Schlüsselattribut für den Join-Schritt.

![Join Data](/assets/images/dataflows/dataflows-join01.png)

Der Join Type definiert, nach welcher Logik die beiden Tabellen verknüpft werden. Auch hier orientieren wir uns an den üblichen Begriffen relationaler Zusammenhänge:

### Inner Join

![Dataflow SQL Inner Join](/assets/images/dataflows/peakboard-helpsite_inner-join.png)

Das Ergebnis enthält nur die Zeilen, bei denen es eine Entsprechung in beiden Tabellen gibt. Das ist die gängigste Methode. Es gehen allerdings Zeilen verloren, wenn es in der linken oder rechten Tabelle Zeilen gibt, die keine Entsprechung in der jeweils anderen Tabelle haben.

### Full Join

![Dataflow SQL Full Join](/assets/images/dataflows/peakboard-helpsite_full-join.png)

Es gehen keine Zeilen verloren. Wenn es in der linken oder rechten Tabelle Zeilen ohne Entsprechung gibt, bleiben in diesem Fall die Spalten der jeweils anderen Tabelle leer.

### Left Join

![Dataflow SQL Left Join](/assets/images/dataflows/peakboard-helpsite_left-join.png)

Die Zeilen der linken Tabelle bleiben vollständig erhalten. Die Zeilen der rechten Tabelle finden nur dann ihren Weg in das Ergebnis, wenn sie eine Entsprechung auf der linken Seite haben.

### Right Join

![Dataflow SQL Right Join](/assets/images/dataflows/peakboard-helpsite_right-join.png)

Die Zeilen der rechten Tabelle bleiben vollständig erhalten. Die Zeilen der linken Tabelle finden nur dann ihren Weg in das Ergebnis, wenn sie eine Entsprechung auf der rechten Seite haben.

Das folgende Beispiel zeigt schön einen echten Full Join. Die erste Zeile ist nur in der Originaltabelle vorhanden, daher bleibt der Ort leer. Die letzte Zeile fehlt in der Originaltabelle, deshalb werden Kunden und Ort aus der rechten Tabelle angezeigt. Alle anderen Spalten sind entweder leer oder 0 (je nachdem, ob es sich um eine Zeichenfolge oder eine Nummer handelt).

![Join Data](/assets/images/dataflows/dataflows-join02.png)

> ## Hinweis!
>
> Joinen können Sie nicht nur Datenquellen, sondern natürlich auch andere Dataflows.