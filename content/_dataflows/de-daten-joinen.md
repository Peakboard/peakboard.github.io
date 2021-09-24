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
Um allerdings zwei oder mehrere tabellenartige Datenbestände miteinander zu verknüpfen, empfehlen wir Joins, eine Technik die oft im Bereich der relationalen Datenbanken, wie [SQL](/data_sources/de-ms-sql-server.html) oder [Oracle](/data_sources/de-oracle.html) Datenbank. Da funktioniert es genauso.

Um zwei Tabellen miteinander zu verknüpfen, [legst du dir zunächst einen Dataflow an](https://help.peakboard.com/dataflows/de-erste-schritte.html#:~:text=Einen%20neuen%20Dataflow%20anlegen).

Im folgenden Beispiel fügen Ergänzen wir eine [Tabelle der amerikanischen Präsidenten](https://mysafeinfo.com/api/data?list=presidents) um eine Spalte, die die jeweiligen Vizepräsidenten beinhaltet.
Die Ausgangstabelle ist dabei immer links zu sehen, die zu ergänzende siehst du rechts. 
Im Dropdown-Menü wählst du die Spalten, die verknüpft werden sollen. 
Hier wird die Spalte “FullName” in der Originaltabelle mit der Spalte “Name” verknüpft. 

![Join Data](/assets/images/dataflows/dataflows-join01.png)

Unter [Join type] wählst du, nach welcher Logik die Spalten miteinander verknüpft werden.

### Inner Join

![Dataflow SQL Inner Join](/assets/images/dataflows/peakboard-helpsite_inner-join.png)

Das Ergebnis eines inner Joins enthält genau die Zeilen, bei denen es eine Entsprechung in beiden Tabellen gibt. 
Wenn es in der linken oder rechten Tabelle Zeilen gibt, die keine Entsprechung in der jeweils anderen Tabelle haben, gehen diese Zeilen dabei verloren.

### Full Join

![Dataflow SQL Full Join](/assets/images/dataflows/peakboard-helpsite_full-join.png)

Beim full Join gehen keine Zeilen verloren. 
Wenn es in der linken oder rechten Tabelle Zeilen ohne Entsprechung gibt, werden diese zeilen im Ergebnis leer angeführt.

### Left Join

![Dataflow SQL Left Join](/assets/images/dataflows/peakboard-helpsite_left-join.png)

Beim left Join bleiben die Zeilen der linken Tabelle vollständig erhalten. 
Die Zeilen der rechten Tabelle finden nur dann ihren Weg in das Ergebnis, wenn sie eine Entsprechung auf der linken Seite haben.

### Right Join

![Dataflow SQL Right Join](/assets/images/dataflows/peakboard-helpsite_right-join.png)

Beim right Join bleiben die Zeilen der rechten Tabelle vollständig erhalten. Die Zeilen der linken Tabelle finden nur dann ihren Weg in das Ergebnis, wenn sie eine Entsprechung auf der rechten Seite haben.

<div class="box-tip" markdown="1">
**Hinweis**

Du kannst übrigens nicht nur Datenquellen, sondern natürlich auch andere [Dataflows](/dataflows/de-erste-schritte.html) joinen.
</div>