---
layout: article
title: Azure IoT Hub
menu_title: Azure IoT Hub
description: Information über Azure IoT Hub Daten in Peakboard
lang: de
ref: dat-020
---
Dieser Artikel zeigt die Nutzung der Azure IoT Hub Datenquelle in Peakboard. Bitte machen Sie sich zunächst den Unterschied zwischen den Datenquellen IoT Hub und Event Hub klar. Letzterer wird hier erklärt. Bei der Event-Hub-Quelle geht es darum, ausschließlich Messages zu empfangen. Das ist also nur zum (asynchronen) Reagieren auf Ereignisse gedacht. Bei der IoT-Hub-Quelle agiert das Peakboard als Device innerhalb des Azure IoT Hubs. Es muss dort als Device angelegt sein. Damit das funktioniert, benötigt man den Connection String aus dem Azure Portal, der direkt mit dem Device assoziiert wird.

![image_1](/assets/images/Data_Sources/Azure_IoT_Hub/DatenquellenIoTHub01.png)

![image_1](/assets/images/Data_Sources/Azure_IoT_Hub/DatenquellenIoTHub02.png)


Damit das Peakboard seine Arbeit als „Device“ machen kann, gibt es mehrere Kommunikationswege, die im Folgenden erklärt werden: Messages asynchron empfangen, Methoden mit Rückgabewert synchron empfangen und einen Wert zurückliefern, Messages vom Peakboard aus senden.

## Messages empfangen

Eingehende Messages werden in der Datenquelle ganz normal wie man das von einer Datenquelle kennt in einem tabellenartigen Objekt mit den drei Spalten Timestamp, Topic und Text gespeichert. Die Größe dieser Queue kann über einen Parameter eingestellt werden. Wer auf den Inhalt der Queue keinen Wert legt, kann auch mit Hilfe eines Scripts darauf reagieren. Das Script wird einfach bei jeder eingehenden Message aufgerufen. Das folgende Beispiel zeigt ein Script, das den Inhalt der Message einfach in ein Textfeld schreibt:

![image_1](/assets/images/Data_Sources/Azure_IoT_Hub/DatenquellenIoTHub03.png)


Um eine Test-Message zu senden, benutzt man am besten den Testmodus von Azure:



![image_1](/assets/images/Data_Sources/Azure_IoT_Hub/DatenquellenIoTHub04.png)

## Methoden empfangen und darauf reagieren

Die zweite Möglichkeit des Nachrichtenaustauschs sind Methoden. Sie unterscheiden sich von den Messages dadurch, dass sie einen Rückgabewert haben. Das Device kann also auf die Nachricht reagieren und eine Art Quittung zurückgeben. Für jede Methode muss ein Eintrag in der Methodentabelle angelegt werden. Das Beispiel zeigt die Methode „PostAlert“, die die Nachricht empfängt, auswertet und den Namen des Peakboards als JSON zurückgibt. Nehmen wir an, die Methode sendet eine JSON-Nachricht mit der Art des Alarms. Im übernächsten Screenshot wird gezeigt, wie der Request im Azure-Methoden-Testdialog erzeugt wird. Sie erreichen ihn wie den Testmodus für Nachrichten (siehe oben). Der Scriptcode zeigt auch, wie das JSON korrekt geparsed und verarbeitet wird. Der reine String kann über json.DataAsJson erreicht werden. Die Funktion json.parse(…) erzeugt ein dynamisches Objekt. Auf die Eigenschaft AlertType wird dann ganz einfach zugegriffen.



![image_1](/assets/images/Data_Sources/Azure_IoT_Hub/DatenquellenIoTHub05.png)

![image_1](/assets/images/Data_Sources/Azure_IoT_Hub/DatenquellenIoTHub06.png)

## Nachrichten vom Peakboard zum IoT Hub senden

Der dritte und letzte Aspekt für die Nutzung von Peakboard als IoT Device ist das Senden von Nachrichten in die Cloud. Das geht ganz einfach über ein Script. Das folgende Beispiel liegt hinter dem Tapped-Event eines Buttons. Der Enduser kann also durch einen Knopfdruck eine Nachricht senden. Auch hier wird typischerweise wieder ein JSON-String versendet. Man kann an dem Script schön sehen, wie das JSON aus einem dynamischen Objekt gebildet wird. Die Attribute werden einfach mit Werten gefüllt und dadurch implizit angelegt.

![image_1](/assets/images/Data_Sources/Azure_IoT_Hub/DatenquellenIoTHub07.png)
