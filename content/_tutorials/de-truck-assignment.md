---
layout: article
title: LKW Zuweisung
menu_title: LKW Zuweisung
description: Plug&Play Lösung für eine LKW Zuweisung zu mehreren Toren
lang: de
weight: 550
ref: tut-550
homepage: false
image: /assets/images/instant_boards/truck_assignment/Truck_Assignment-DE.png
redirect_from:

---

Um einen möglichst einfachen Einstieg in die Erstellungen einer LKW Zuweisung zu geben, bieten wir ein vorgefertigtes Template an. Dies ist eine Schritt für Schritt Anleitung, wie Sie LKW Zuweisung mit Peakboard erstellen und verwalten. Eine generelle Einführung in Peakboard finden Sie in den [ersten Schritten](https://peakboard.rocks/erste-schritte). Wenn Sie wissen möchten, wie Sie eine Peakboard Box mit Ihrem Designer verbinden und eine Visualisierung übertragen, lesen Sie am besten folgenden [Artikel](https://peakboard.rocks/anschliessen). Zum Erstellen einer Visualisierung benötigen Sie den Peakboard Designer. Dieser kann kostenfrei [heruntergeladen](https://peakboard.rocks/designer-from-welcome) werden.

Nun werden Sie lernen wie Sie die Daten verwalten können und mit dem folgenden Template ihre eigene LKW Zuweisung erstellen.

![image_live](/assets/images/instant_boards/truck_assignment/Truck_Assignment-DE.png)


## Initiale Konfiguration

Die initiale Konfiguration ist ein einmaliger Vorgang und ist für die LKW Zuweisung ganz einfach. Laden Sie einfach das [LKW Zuweisungstemplate](https://github.com/Peakboard/CoolStuff/blob/master/Demonstrator/Designer%20Templates/Administration/Truck%20assignment/Truck_Assignment-DE.pbmx?raw=true) herunter und öffnen Sie die Datei mit dem Peakboard Designer. Nun können Sie das finale Ergebnis bereits ansehen, indem Sie direkt auf "Vorschau" (1) in der oberen Menüleiste klicken. 

![image_live](/assets/images/instant_boards/truck_assignment/Truck_Assignment_Overview.png)

Um die Visualisierung richtig verwenden zu können, müssen Sie sie auf ein Peakboard laden. Dafür klicken Sie in der oberen Menüleiste auf "Verwalten / Hochladen" (2). Nun wählen Sie die gewünschte Peakboard Box aus und klicken auf "Hochladen". Nun laden Sie die aktuelle Visualisierung hoch. Nun sehen Sie auf dem an der Peakboard Box angeschlossenen Monitor die Visualisierung.

## Angezeigte Daten verwalten

Die Dargestellten Daten können mit der Variable 'gates' verwaltet werden. Diese finden Sie auf der linken Seite im Explorer im Ordner 'Variablen'. Öffnen Sie diese Variable mit einem Doppelklick. 

Wenn Sie bereits eine Box besitzen und die Visualisierung läuft können Sie die Werte direkt über ein Webinterface auf Ihrer Box verwalten. Dieses Webinterface ist eine Webseite, welche auf der Peakboard Box läuft und über folgende Adresse aufgerufen werden kann: http://NameIhrerBox:40404. Sie müssen den Namen Ihrer Box eingeben, gefolgt vom Port :40404. Für den Login werden die mit der Box ausgelieferten Anmeldedaten benötigt. Anschließend sehen sie einen Screenshot Ihrer aktuell laufenden Visualisierung und auf der rechten Seite die Variablenliste "gates". 

![image_live](/assets/images/instant_boards/truck_assignment/Truck_Assignment_Webinterface_Overview.png)

Öffnen Sie diese Liste mit einem Klick auf "Edit". Anschließend sehen Sie eine Tabelle in der Sie alle angezeigten Werte verwalten können. Je nach Anzahl Ihrer Tore können Sie weitere Tore hinzufügen über den "+"-Button oder auch Zeilen entfernen. Sie Visualisierung passt sich dementsprechend an und zeigt pro Seite 7 Tore an, wenn es mehr Tore sind, wechselt die Visualisierung alle 15 Sekunden die Seite.

![image_live](/assets/images/instant_boards/truck_assignment/Truck_Assignment_Webinterface_Variable.png)

Über die Spalte "Prop_Available_At" können Sie eine Zeit angeben ab welcher die gewünschte LKW zum Tor fahren soll. Die Ampeln auf der linken Seite passen sich dementsprechend an. Unter 30 Minuten Restzeit wird die Ampel Orange, unter 5 Minuten Grün.

Wenn Sie die Werte angepasst haben, drücken Sie auf Update. Die Tabellenwerte werden alle 15 Sekunden ausgelesen. Danach sollten Sie in der Visualisierung Ihre neuen Werte sehen und der Zeitabstand bis zu Ihrer angegebenen Uhrzeit wird angezeigt.

Bitte beachten Sie, dies ist nur ein Beispiel. Sie können mit Peakboard auch Ihre Daten auch anders verwalten, oder die Visualisierung optisch Ihren Anforderungen anpassen. Probieren Sie es doch einfach mal aus.

# Jetzt kostenlos starten!

Legen Sie am besten direkt los und laden Sie sich den [Peakboard Designer](https://peakboard.rocks/designer-from-welcome) kostenlos herunter.

Wenn Sie weitere Fragen oder Anregungen haben, zögern Sie nicht mit uns in Kontakt zu treten. Am besten an unsere E-Mail Adresse: [info@peakboard.com](mailto:info@peakboard.com)
