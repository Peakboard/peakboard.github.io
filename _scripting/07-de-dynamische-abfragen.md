---
layout: article
title: Dynamische Abfragen
menu_title: Dynamische Abfragen
description: Dynamische Abfragen
lang: de
ref: scr-07
---
Oft kommt es vor, dass Abfragen gegen eine Datenquelle dynamisch gestaltet werden müssen; sprich in Abhängigkeit eines bestimmten Kontextes. Beispiel: Ein End-Anwender gibt über ein Textfeld ein Datum ein und die Datenquelle soll die Anfrage an das Vorsystem stellen, so dass sie den User-Eingaben gerecht wird. Dazu wird ein dynamisches SQL-Statement erzeugt, dass das gewünschte Datum des End-Anwenders enthält. Dieser Artikel zeigt die Standardvorgehensweise wie solch eine dynamische Abfrage gestaltet wird.

Zentrales Element ist ein Schieberegler. Der Enduser kann am Schieberegler einstellen, wieviele Datensätze in SAP geholt werden. Jedes mal wenn er den Regler betätigt, richtet sich die Datenabfrage danach. Das folgende Bild zeigt den Entwurf. Neben dem Schieberegler benötigen wir ein skalares Datenelement (namens Rowcount), die SAP-Quelle und eine Tabelle, um die Daten der SAP-Quelle anzuzeigen.



![image_1](/assets/images/scripting/queries/misc_dynamische_Abfrage_01.png)

Der Schieberegler bietet ein Ereignis „ValueChanged“, das jedes mal aufgerufen wird, wenn sich der eingestellte Wert des Reglers ändert. Wir hinterlegen ein einfaches Script, das den Wert des Reglers in die statische Variable RowCount schreibt und danach ein Neuladen der SAP-Quelle triggert. Hier das Script dazu und ein Screenshot:

```lua
data.RowCount = screen.Slider.value
data.MAKT.reloadasync()
```

![image_1](/assets/images/scripting/queries/misc_dynamische_Abfrage_02.png)

Das letzte Mosaik-Steinchen ist jetzt die tatsächliche Dynamisierung. Der folgende Screenshot zeigt die SAP-Quelle in der Entwurfsansicht. Das XQL-Statement enthält aber einen Platzhalter, der sich wiederum an der entscheidenden Stelle den Wert aus der globalen RowCount-Variable zieht. Der Platzhalter funktioniert nach dem Prinzip #[MeineVariable]#. Im folgenden das XQL-Statement und ein Screenshot dazu.

`SELECT TOP #[RowCount]# * FROM MAKT;`

![image_1](/assets/images/scripting/queries/misc_dynamische_Abfrage_03.png)
