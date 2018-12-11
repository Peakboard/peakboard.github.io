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

Um eine statische Datenquelle anzulegen, gehen Sie so vor, wie bei allen [anderen Datenquellen](/tutorials/03-de-xml-daten.html) auch. Sie haben die Möglichkeit, entweder einen Einzelwert oder ein Tabelle anzulegen.

![Add Static Data](/assets/images/data-sources/static-data/add-data-dialog.png)

## Variable für Einzelwert pflegen

Neben dem Namen und dem Datentyp (String, Number oder Boolean) kann ein Startwert mitgegeben werden. Die Option *Save on Box* ermöglicht es, den Wert später auf der Peakboard Box über einen Neustart des Boards hinaus zu speichern. Wenn diese Option nicht angeklickt ist, wird der Wert nach dem Neustart auf den Startwert zurückgesetzt.

![Add Static Data](/assets/images/data-sources/static-data/static-single-variable.png)

## Statische Tabellen pflegen

Um tabellenartige Daten statisch zu hinterlegen, muss im entsprechenden Dialog über den Edit-Button in die Pflege gesprungen werden. Dort können im unteren Bereich neue Spalten für die Tabelle angelegt oder auch wieder gelöscht werden. Zur Pflege des Dateninhalts klicken Sie einfach in die entsprechende Tabellenzelle. Das Löschen einer Tabellenzeile erfolgt durch die Entfernen-Taste (Entf), ohne dass der Cursor in einer Zelle steht, sodass nur die Zeile markiert ist.
Auch bei den Tabellen gibt es die Option mithilfe von *Save on Box* die Daten über den nächsten Bootvorgang hinaus auf der Box zu persistieren.

![Add Static Data](/assets/images/data-sources/static-data/static-table-variable.png)