---
layout: article
title: Daten miteinander verknüpfen (Joins)
menu_title: Daten miteinander verknüpfen (Joins)
description: Daten miteinander verknüpfen (Joins)
lang: de
ref: flow-40
---
Wir haben bereits beim Manipulieren von Spalten die Möglichkeit kennen gelernt, eine neue Spalte hinzuzufügen und diese durch einen Look Up auf eine andere Datenquelle zu füllen. Das ist sinnvoll, wenn es nur um eine einzelne Spalte geht. Der Join-Schritt geht einen Schritt weiter. Hier werden zwei tabellenartige Datenbestände miteinander verknüpft. Man kennt diese Technik im Bereich der relationalen Datenbanken. Da funktioniert es genauso.
Die Ausgangstabelle des aktuellen Datenflusses ist immer als die "linke" Tabelle zu sehen. Die neu hinzugefügte (sprich gejointe) Tabelle ist die "rechte" Tabelle.
Das folgende Beispiel zeigt das Hinzufügen einer zusätzlichen Tabelle mit Namen "kunden". Im unteren Bereich sind die Spalten zu definieren, an welchen die Verknüpfung stattfindet. In dem Beispiel ist es nur eine Verbindung, und zwar die Spalte "Kunde" in der Originaltabelle und die Spalte "KundenName" in der verknüpften Tabelle.

![Join Data](/assets/images/dataflows/dataflows-join01.png)

Der Join Type definiert, nach welcher Logik die beiden Tabellen verknüpft werden. Auch hier orientieren wir uns an den üblichen Begriffen relationaler Zusammenhänge:

### Inner Join

Das Ergebnis enthält nur die Zeilen, bei denen es eine Entsprechung in beiden Tabellen gibt. Das ist die gängigste Methode. Es gehen allerdings Zeilen verloren, wenn es in der linken oder rechten Tabelle Zeilen gibt, die keine Entsprechung in der jeweils anderen Tabelle haben.

### Full Join

Es gehen keine Zeilen verloren. Wenn es in der linken oder rechten Tabelle Zeilen ohne Entsprechung gibt, bleiben in diesem Fall die Spalten der jeweils anderen Tabelle leer.

### Left Join

Die Zeilen der linken Tabelle bleiben vollständig erhalten. Die Zeilen der rechten Tabelle finden nur dann ihren Weg in das Ergebnis, wenn sie eine Entsprechung auf der linken Seite haben.

### Right Join

Die Zeilen der rechten Tabelle bleiben vollständig erhalten. Die Zeilen der linken Tabelle finden nur dann ihren Weg in das Ergebnis, wenn sie eine Entsprechung auf der rechten Seite haben.

Das folgende Beispiel zeigt schön einen echten Full Join. Die erste Zeile ist nur in der Originaltabelle vorhanden, daher bleibt der Ort leer. Die letzte Zeile fehlt in der Originaltabelle, deshalb werden Kunden und Ort aus der rechten Tabelle angezeigt. Alle anderen Spalten sind entweder leer oder 0 (je nachdem, ob es sich um eine Zeichenfolge oder eine Nummer handelt).

![Join Data](/assets/images/dataflows/dataflows-join02.png)

> ## Hinweis!
>
> Joinen können Sie nicht nur Datenquellen, sondern natürlich auch andere Dataflows