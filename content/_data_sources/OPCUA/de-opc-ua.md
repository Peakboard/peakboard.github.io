---
layout: article
title: OPC UA
menu_title: OPC UA
description: Information über OPC UA Daten in Peakboard
lang: de
weight: 2400
ref: dat-2400
redirect_from: 
 - /data_sources/de-opc-ua.html
 - /data_sources/22-de-opc-ua.html
  
---

So wie auch der direkte Zugriff auf die Siemens S7, MQTT oder den Azure IoT Hub, fügt sich die OPC UA Datenquelle nahtlos in die Sammlung der Maschinendatenanbindungen ein. Im hier beschriebenen Fall stellt Peakboard einen OPC UA-Client dar, der sich auf einen OPC UA-Server verbindet. Das Beispiel in diesem Artikel kann einfach mit dem generischen OPC UA "Reference Server" nachvollzogen werden, den Sie auf [opcfoundation.org](https://opcfoundation.org/developer-tools/samples-and-tools-unified-architecture) nach der Registrierung herunterladen können.

In der Zip-Datei befinden sich diverse Applikationen. Darunter auch der sogenannte "Reference Server", den Sie per Doppelklick starten können. Das ist natürlich nur für einen Test „im Trockenen“ nötig. Falls Sie einen echten OPC UA-Server in Ihrem Netzwerk haben, können Sie auch diesen für die ersten Schritte nehmen. Idealerweise sind Sie dafür aber sowohl mit OPC UA im Allgemeinen als auch mit Ihrem OPC UA-Server im Speziellen entsprechend vertraut.

Geben Sie zum Start die URL ein, unter der der Server erreichbar ist. Je nach den genutzen Sicherheitseinstellungen kann diese URL vom hier gezeigten Beispiel abweichen. Ein Klick auf „Get Endpoints“ füllt die darunterliegende Auswahlbox mit allen möglichen Zugangsarten, die der Server unterstützt. Dabei geht es insbesondere um die Frage, wie die spätere Übertragung authentifiziert und/oder verschlüsselt werden soll. Im Beispiel wird eine Kommunikationsart ausgewählt, die keine weiteren Sicherheitsmaßnahmen ergreift. Außerdem wird der Dateninhalt binär übertragen, was im Gegensatz zu XML etwas performanter ist und das Netzwerk wegen des geringeren Durchsatzes schont.

![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-01.png)

Im nächsten Schritt kann noch die Authentifizierung eingestellt werden. In den meisten Fällen, wie zum Beispiel bei MicroEmbedded OPC UA-Servern wird Anonymous verwendet. Es ist aber auch möglich sich mit einem Nutzernamen und Passwort anzumelden oder ein gegebenenfalls passwortgeschütztes Zertifikat anzugeben, welches zur Identifikation verwendet wird.

![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-02.png)

Als nächstes muss das Zertifikat angegeben werden, mit dem sich die Peakboard Applikation, also Ihre Visualisierung, gegenüber dem Server eindeutig identifiziert, sowie gegebenenfalls die verschlüsselte Verbindung aufbaut. Das nächste Bild zeigt den Absprung in den Zertifikate-Store, der für das ganze Board gilt. Sie können die gewünschten Zertifikate dort per Import von der lokalen Festplatte übernehmen oder – falls Sie über kein Zertifikat verfügen – können Sie sich selbst eines ausstellen (Button „Create“). Für den Fall, dass Sie selbst ein Zertifikat ausstellen, muss dieses auf dem Server bekannt gemacht werden. Wie das genau geht, hängt vom Server ab. In diesem Testszenario können Sie als Endpoint (Nummer 3 im ersten Screenshot) einfach None:None:Binary auswählen und als Authentifizierungsmethode "Anonymous" eingestellt lassen. Das sorgt dafür, dass der Server jede Verbindung zulässt.

![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-03.png)

Kommen wir zum letzten Konfigurationsschritt. Es sollen ja schließlich Daten vom Server empfangen werden. Dafür gibt es zwei Möglichkeiten: Zum einen können Sie mithilfe einer oder mehrer Subscription(s) dafür sorgen, dass die Visualisierung stets eine Benachrichtigung erhält sobald sich ein Wert ändert. Diese Variante ist also so nah an Echtzeitkommunikation, wie das die Rechenleistung und das Netzwerk zulassen. Jede OPC-UA-Datasource kann beliebig viele Items in beliebig vielen Subscriptions abonnieren. Der Server der OPC Foundation stellt in seiner Konfiguration einen Knotenpunkt "Simulation" bereit. Darin befinden sich unzählige Variablen diverser Datentypen. Außerdem ändern sich die Werte zufällig in etwa einmal pro Sekunde, was sich für die Subscriptions daher anbietet. Auf logischer Ebene ergibt die Verwendung von Subscription dann Sinn, wenn mit den Daten der Variablen gleich verfahren werden soll. Man könnte beispielsweise alle Fehlercodes, die der Server zur Verfügung stellt zu einer Subscription zusammenfassen, da im Board im Fehlerfall immer die gleiche rote Lampe aufleuchten soll, egal welcher Fehler gerade auftritt. Um Variablen zu eine Subscription hinzuzufügen, können Sie mithilfe den Browse-Dialogs einfach alle Datenpunkte auswählen, die Sie benötigen. Der folgende Screenshot zeigt den Weg vom Erstellen einer Subscription bis zum Auswählen der gewünschten Variablen.

![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-04.png)

Variante zwei für das Lesen von Daten vom Server ist ein zyklischer Lesevorgang, bei dem wie gewöhnlich eine Anfrage and den Server gesendet wird. Der Server antwortet dann mit dem aktuellen Datensatz. Was zwischen den Lesezyklen passiert kann dabei nicht erfasst werden. Die Anbindung funktioniert analog zum Anlegen der Subscriptions, mit dem Unterschied, dass Sie mit dem Button "Select" in den Dialog für die Variablen kommen. Mit dem Update-Intervall können Sie bestimmen, wie oft die Daten angefragt werden sollen.

![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-05.png)

Grundsätzlich gibt es zwei Möglichkeiten, wie nun mit den reinkommenden Daten umgegangen werden könnte. Die OPC-UA-Datenquelle ist wie jede andere Datenquelle auch, einfach nur eine Tabelle, in die die eingehenden Nachrichten der Items angehängt werden; zumindest bis zur Queue-Size. Danach werden die Daten nach dem FiFo-Prinzip aus der Tabelle entfernt und gegen neue ersetzt. Um eine Konfiguration zu testen, kann die Tabelle einfach per Drag and Drop auf den aktuellen Screen gezogen werden. Wenn alles korrekt konfiguriert ist, sollte sich die Tabelle mit Daten füllen.

Die zweite und üblichere Möglichkeit, ist auf eingehende Daten in einem Script zu reagieren. Für jede Subscription kann ein Script hinterlegt werden. Das Gleiche gilt für den Datensatz an Variablen, der durch den zyklischen Lesevorgang zustande kommt. Der folgende Screenshot zeigt einen üblichen Anwendungsfall. Je nachdem, wie der Wert des Items gesetzt ist, wird die Nachricht zur Weiterverarbeitung in die eine oder die andere Tabelle abgelegt. Ein Quadrat (namens „status“) wird je nach Wert auf grün oder rot gesetzt. Dabei ist im Fall der Subscription zu beachten, dass dieses Script immer im Kontext der Variable ausgeführt wird, die gerade einen neuen Wert erhät. Die Informationen, die diesen Kontext betreffen befinden sich im Objekt "Message". Eine Übersicht über alle Datenpunkte des Objekts ist im Scripteditor auf Subscriptionebene im Baum auf der linken Seite zu finden. Dabei ist mit message.itemvalue der neue Wert abzurufen und message.itemid der Name mit dem Pfad auf dem Server verfügbar.

```Lua
	data.itemnumber = 1 + data.itemnumber

	if message.itemvalue then
		screens['screen0'].status.Fill = brushes.green
		data.valid.add({['itemnumber'] = data.itemnumber, ['commentary'] = 'passed'})
	else
		screens['screen0'].status.Fill = brushes.red
		data.invalid.add({['itemnumber'] = data.itemnumber, ['commentary'] = 'failed'})
	end

	if data.itemnumber == 10000 then
		data.itemnumber = 0
	end
```

Neben vielen anderen Möglichkeiten bietet OPC UA auch die Verwendung von Methoden an. Peakboard deckt auch diesen Aspekt des Protokolls ab. Im unteren Bereich des Dialogs der Datenquelle kann mithilfe des Browse-Dialogs nach Methoden gesucht werden, die der OPC UA Server anbietet. Ist die gewünschte Methode ausgewählt, also in der Datenquelle angebunden, kann man mit einem Klick auf "Show" alle relevanten Informationen einsehen. Dazu zählen auch die Datentypen der Werte die, die Methode gegebenenfalls zur Ausführung benötigt oder zurückgibt.

![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-06.png)

In obigen Screenshot ist die Ausführung einer solchen Methode im Skript zu sehen. Alle angebundenen Methoden sind im Skripteditor als Unterpunkt des Datenquellenknotens anwählbar. Ein Doppelklick auf die gewünschte Methode erstellt den Code, der die Methode ausführt. Natürlich fehlt diesem Code der korrekte Kontext. Sie müssen anschließend also noch Variablennamen und/oder Werte festlegen bzw. modifizieren.