---
layout: article
title: Daten via Inner Join, Left Join, Right Join und Full Join miteinander verknüpfen
menu_title: Daten mithilfe von Joins verknüpfen
description: Dieser Artikel und seine Grafiken erklären die Methode des INNER JOIN, LEFT JOIN, RIGHT JOIN und FULL JOIN zwischen zwei Tabellen angelegt an die SQL Funktionalität.
lang: de
weight: 4000
ref: flow-4000
redirect_from:
  - /dataflows/40-de-daten-joinen.html
---
Beim [Manipulieren von Spalten](/dataflows/de-spalteninhalte-aendern.html) haben wir dir bereits gezeigt, wie du eine [neue Spalte hinzuzufügst](/dataflows/de-spalten-hinzufuegen-loeschen-aendern.html) und sie durch einen [Look Up](https://help.peakboard.com/dataflows/de-spalten-hinzufuegen-loeschen-aendern.html#:~:text=Add%20Lookup%20Column%20-%20Ein%20neue%20Spalte%20mit%20Verweise%20auf%20eine%20andere%20Datenquelle%20hinzuf%C3%BCgen), auf eine andere Datenquelle füllst. 
Um allerdings zwei oder mehrere tabellenartige Datenbestände miteinander zu verknüpfen, empfehlen wir Joins, eine Technik die oft im Bereich der relationalen Datenbanken, wie [SQL](/data_sources/de-ms-sql-server.html) oder [Oracle](/data_sources/de-oracle.html) Datenbank.

Beginne zunächst damit, einen [Dataflow anzulegen](https://help.peakboard.com/dataflows/de-erste-schritte.html#:~:text=Einen%20neuen%20Dataflow%20anlegen).
Klicke anschließend im Dataflow auf auf [Add Step / Schritt hinzufügen] und wähle dann [joinen]. 
Im Dialog kannst du nun die Datenquelle auswählen, die mit dem Dataflow verbunden werden soll (2).
Über [+] kannst du die Schlüsselattribute (3) hinzufügen – das sind die Attribute, die in beiden Tabellen vorhanden sind und beim joinen als Identifikatoren gelten.
Welcher Join Typ (4) für deinen Anwendungsfall passend ist, zeigen wir dir im nachfolgenden Artikel.

![Join Data](/assets/images/dataflows/dataflows-join01.png)

### Inner Join
Das Ergebnis eines Inner Joins enthält genau die Zeilen, bei denen es eine Entsprechung in beiden Tabellen gibt. 
Wenn es in der linken oder rechten Tabelle Zeilen gibt, die keine Entsprechung in der jeweils anderen Tabelle haben, gehen diese Zeilen dabei verloren.

![Dataflow SQL Inner Join](/assets/images/dataflows/peakboard-helpsite_inner-join.png)

### Full Join
Beim full Join gehen keine Zeilen verloren. 
Wenn es in der linken oder rechten Tabelle Zeilen ohne Entsprechung gibt, werden diese zeilen im Ergebnis leer angeführt.

![Dataflow SQL Full Join](/assets/images/dataflows/peakboard-helpsite_full-join.png)

### Left Join
Beim left Join bleiben die Zeilen der linken Tabelle vollständig erhalten. 
Die Zeilen der rechten Tabelle finden nur dann ihren Weg in das Ergebnis, wenn sie eine Entsprechung auf der linken Seite haben.

![Dataflow SQL Left Join](/assets/images/dataflows/peakboard-helpsite_left-join.png)


### Right Join
Beim right Join bleiben die Zeilen der rechten Tabelle vollständig erhalten. 
Die Zeilen der linken Tabelle finden nur dann ihren Weg in das Ergebnis, wenn sie eine Entsprechung auf der rechten Seite haben.

![Dataflow SQL Right Join](/assets/images/dataflows/peakboard-helpsite_right-join.png)

<div class="box-tip" markdown="1">
**Hinweis**

Du kannst übrigens nicht nur Datenquellen, sondern natürlich auch andere [Dataflows](/dataflows/de-erste-schritte.html) auf diese Weise miteinander verbinden.
</div>

