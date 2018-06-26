---
layout: article
title: Statische Daten
menu_title: Statische Daten
description: Information über Statische Daten in Peakboard
lang: de
ref: dat-01
---
Normalerweise bedeutet der Begriff „Datenquelle“, dass Daten aus irgendeinem Vorsystem geholt werden, sei es nun eine Datenbank, ein ERP-System oder einfach nur aus dem Web mit Hilfe einer generischen Quelle wie JSon oder XML. In Peakboard werden auch statische Daten als „Datenquelle“ bezeichnet, die sich dadurch auszeichnen, dass die Daten eben gerade nicht aus einem anderen Ort stammen, sondern lokal im Paket hinterlegt sind. Es gibt im Wesentlichen zwei Gründe, wofür man diese statischen Datenquellen braucht:

Bei verschiedenen, anspruchsvollen Scripting-Aufgaben werden statische Datenquellen als eine Art „globale Variable“ benutzt. Unterschiedliche Scripts können so Informationen austauschen, indem sie in Datenquellen schreiben oder aus diesen lesen.
Statische Datenquellen werden als Container genutzt, um Push-Nachrichten von außen auf die Peakboard-Box zu senden. Man könnte beispielsweise eine statische Tabelle für Fehlermeldungen bauen. Eine Maschine, die in einen Fehlerzustand fällt, pusht dann die Fehlerinfos in diesen statischen Container. Alle verbundenen Steuerelemente reagieren dann automatisch darauf. Ein Beispiel dafür finden Sie [hier.](/misc/02-de-push-nachrichten.html)

Um eine statische Datenquelle anzulegen, gehen Sie so vor, wie bei allen [anderen Datenquellen](/tutorials/03-de-xml-daten.html) auch. Wählen Sie einfach „Add General Data“ im Designer. Eine statische Datenquelle kann entweder ein einzelner Wert (Single) sein oder eine Tabelle. Der folgende Screenshot zeigt die Pflege eines Einzelwertes. Es werden die Datentypen String (Zeichenfolge), Number (Zahl) und Boolean (true/false) unterstützt.

 ![image_1](/assets/images/data-sources/static-data/add-data-dialog.png)

Statische Datenquellen vom Typ List sind Tabellen. Hier müssen zunächst die Spalten definiert werden. Das folgende Beispiel zeigt eine Tabelle mit zwei Spalten: Code und Message, jeweils vom Typ String.^

![image_1](/assets/images/data-sources/static-data/edit-list-data.png)

Ist die Definition der Spalten abgeschlossen, kann die Tabelle mit Daten befüllt werden. Das folgende Beispiel zeigt, wie neue Einträge der Tabelle hinzugefügt werden können:

![image_1](/assets/images/data-sources/static-data/code-error-machine-is-broken.png)
