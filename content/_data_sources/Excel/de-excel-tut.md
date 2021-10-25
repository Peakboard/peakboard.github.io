---
layout: article
title: Excel-Datei von einem Netzlaufwerk einbinden
menu_title: Excel-Datei von einem Netzlaufwerk einbinden
description: Excel-Datei von einem Netzlaufwerk einbinden
lang: de
weight: 600
ref: dat-6000
homepage: true
image: /assets/images/Tutorial/Overview/Tutorial_Excel_Small.png
redirect_from:
  - /tutorials/04-de-excel-tut.html
---
Peakboard unterstützt eine Vielzahl von wunderschönen Datenquellen; oft nutzen Neueinsteiger aber gerne einfach nur Excel. Eine normale Dokumentation zu Excel als Datenquelle finden Sie [hier](/data_sources/13-de-excel.html). Dieses Schritt-für-Schritt-Tutorial zeigt den kompletten Ablauf vom Einbinden der Datei bis zum Aufbereiten der Daten in einem kleinem Chart.

Der folgende Screenshot zeigt die Originaldatei. Sie enthält eine Tabelle von zwei Abteilungen (A und B) und jeweils pro Monat eine Art Performance-Kennzahl. Darüberhinaus enthält das Tabellenblatt noch weitere Daten und ein Excel-Chart. Alle diesen Daten interessieren uns nicht. Wir wollen nur die erste Tabelle ganz oben weiterverarbeiten.



![image_1](/assets/images/Tutorial/Excel/TutorialExcel_01.png)

Wir nehmen an, dass die Excel-Datei auf einem freigegeben Verzeichnis liegt. Legen Sie eine neue Excel-Datenquelle an und füllen Sie die Textfelder entsprechend aus. Wir benutzen in diesem Beispiel den Zugriff über eine Peakboard-Bridge (also bei Source NetworkSharedFile angeben). Peakboard greift also auf die Bridge und diese wiederum auf die Datei im Verzeichnis zu. Dieser Umweg ist aus Sicherheitsgründen in dieser Form nötig. Wenn Sie die Bridge zum Start eine Projektes nicht auf einem zentralen Server installieren wollen, können Sie sie auch einfach auf ihrem lokalen Desktop-Rechner laufen lassen. Geben Sie den Pfad der Exceldatei an (als UNC-Pfad beginnend mit \\MeinShare\MeinVerzeichnis\MeineDatei.xlsx) und den Name der Maschine, auf der der Bridge-Dienst läuft (in diesem Fall Marge:2501, wobei 2501 der Standard-Port ist).

Wenn der Zugriff funktioniert, können Sie nun in der Dropdown-Box alle verfügbaren Tabellenblätter sehen. Sie werden direkt aus der Excel-Datei geladen. Markieren Sie noch die Checkbox „Switch Rows and Columns“. Dadurch werden die Monate nach unten und die Abteilung nach rechts abgetragen, also genau anderstherum wie in der Originaldatei. Entfernen Sie das Häkchen bei „Select All“, da wir ja nur einen bestimmten Bereich und nicht alle Daten auf dem Tabellenblatt nutzen wollen. Der nutzbare Bereich ist der Zellenrange A1 bis M3, schreiben Sie daher „A1:M3“ in das Range-Feld


![image_1](/assets/images/Tutorial/Excel/TutorialExcel_02.png)

Ein Klick auf „Load Data“ liefert die gewünschten Testdaten wie im nächsten Screenshot gezeigt. So sind die Daten optimal aufbereitet, um sie direkt an ein Chart zu koppeln.

![image_1](/assets/images/Tutorial/Excel/TutorialExcel_03.png)

Das nächste Bild zeigt die Konfiguration des Charts. Es wird nur eine der beiden Abteilungen dargestellt. Die Monate werden nach rechts aufgetragen. Die Säulenfarben wurden manuell alle auf rot gesetzt, ansonsten würde das Chart zwölf Farben für zwölf Monate per Zufall bestimmen. Das wäre ein bisschen sehr bunt. Neben der Datenserie müssen auch noch ein paar Kleinigkeiten aufgehübscht werden, wie der Titel und der Subtitel. Die Legende wurde aus optischen Gründen auf unsichtbar gesetzt.

![image_1](/assets/images/Tutorial/Excel/TutorialExcel_04.png)

Das nachfolgende Bild zeigt unser Visualisierungsprojekt im Preview mit dem fertigen Chart.

![image_1](/assets/images/Tutorial/Excel/TutorialExcel_05.png)


> ### Wichtiger Hinweis!
>
>Wenn Sie frisch mit Peakboard beginnen und Excel-Daten nutzen wollen, probieren Sie am besten zuerst einmal, die Excel-Datei als feste Ressource einzubinden. Das ist die
>einfachste Möglichkeit, an die Daten zu kommen. Dann muss auch keine Bridge konfiguriert werden. Der (dynamische) Zugriff über die Bridge wird dann später nachgezogen. Gerade zum Start lassen sich so noch schneller erste, vorzeigbare Erfolge realisieren.
