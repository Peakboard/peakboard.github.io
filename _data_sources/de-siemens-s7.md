---
layout: article
title: Siemens S7
menu_title: Siemens S7
description: Information über Siemens S7 Daten in Peakboard
lang: de
ref: dat-021
---
Generell gibt es mehrere Möglichkeiten, Maschinendaten in Peakboard zu verarbeiten, z.B. über einen cloudbasierte IoT-Hub (wie von Azure oder Google) oder einen MQTT-Server. Die Siemens-S7-Datenquelle ermöglicht es, die Peakboard-Box direkt an eine S7-Steuerung anzubinden. Für den Fall, dass in der jeweiligen Umgebung das Steuernetz vom „normalen“ Business-Netz getrennt ist, kann die Box über USB einen zweiten LAN-Anschluss bekommen, der auf der einen Seite mit dem Business Netz (z.B. für den SAP-Zugriff) und auf der anderen Seite mit dem S7-Steuernetz verbunden ist.

Bitte sorgen Sie dafür, dass die S7 so konfiguriert ist, dass von außen ein Zugriff auf die Variablen erfolgen kann, die mit Peakboard visualisiert werden sollen. Es gibt verschiedene Einstellungen, die das verbieten könnten (z.B. aus Sicherheitsgründen).

Der folgende Screenshot zeigt die Rohansicht eines Datenblocks aus Sicht des S7-Programmierers. Relevant sind für uns die beiden Variable TempIst (eine Temperatur) und ZaehlerLS (ein fortlaufender Zähler)

![image_1](/assets/images/Data_Sources/Siemens_S7/DatenquellenS701.png)

Um Peakboard mit der S7 zu verbinden, legen Sie eine entsprechende Datenquelle an. Tragen Sie einen obligatorischen Namen, die IP-Adresse, Slot und Rack ein. Bei der Angabe der S7-CPU werden im Moment die Modelle 1200, 1500, 200, 300 und 400 unterstützt. Der Wert Sampling Interval ist die Anzahl der Millisekunden, die zwischen zwei Datenabrufen vergehen. Mit Max Items können sie die Anzahl der Werte festlegen, die später in der Tabelle enthalten sein sollen. Der aktuellste Variablenwert steht in der Tabelle immer an erster Stelle. Es macht nur Sinn, einen Wert größer 1 einzutragen, wenn Sie später in einem Script auf die Werte vor (!) dem aktuellen Abruf zugreifen möchten.

Für jede abzurufende Variable muss manuell ein Eintrag vorgenommen werden. Eine Variable wird definiert durch einen beliebigen Namen, einen Datenort (Type), eine DatenblockNr (falls der Datenort ein Datenblock ist), ein Offset und einen Datentyp. Bitte tragen Sie diese Werte sehr sorgfältig ein. Wenn nur eine einzelne Angabe unkorrekt ist, kann das zu abstrusen Werten führen, da der Byte-Strom der S7 dann fehlinterpretiert wird.

Der Screenshot zeigt analog zum Ausschnitt von oben die beiden variablen Temperatur und Zaehler.

![image_1](/assets/images/Data_Sources/Siemens_S7/DatenquellenS702.png)

![image_1](/assets/images/Data_Sources/Siemens_S7/DatenquellenS703.png)

Ein Klick auf Preview verbindet sich zur S7 und ruft die Variablen ab. Im folgenden Bild wurde eine Temperatur von 27 Grad und ein Zähler von 42 ermittelt.

![image_1](/assets/images/Data_Sources/Siemens_S7/DatenquellenS704.png)

Die Datenquelle kann jetzt wie üblich in Peakboard weiterverwendet werden, z.B. durch Bindung oder mit Hilfe eines Scriptes. Bitte unbedingt beachten: Das Refreshed-Event der Datenquelle wird nur gefeuert, wenn sich mindestens eine Variable verändert hat. Bleiben alle Variablen gleich, wird KEIN Event ausgelöst.
