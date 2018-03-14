---
layout: article
lang: de
ref: tut-3
---

Die OPC-UA-Datenquelle reiht sich nahtlos in die Reihe von Datenquellen zur Maschinen-Kommunikation ein, so wie auch der direkte Zugriff auf die Siemens S7, MQTT oder den Azure IoT Hub. Im hier beschriebenen Fall stellt Peakboard einen OPC-Client dar, der sich auf einen OPC-Server verbindet. Das Beispiel in diesem Artikel kann einfach mit dem generischen OPC-UA-Server nachvollzogen werden, den Sie auf opcfoundation.org nach der Registrierung herunterladen können:

[https://opcfoundation.org/developer-tools/developer-kits-unified-architecture/sample-applications/](https://opcfoundation.org/developer-tools/developer-kits-unified-architecture/sample-applications/)

Ist das Dashboard einmal gestartet, finden Sie den generischen Server als Eintrag „Generic Server“ auf der linken Seite. Er kann dort direkt gestartet werden. Das ist natürlich nur für einen Test „im Trockenen“ nötig. Falls Sie einen echten OPC-UA-Server in Ihrem Netzwerk haben, können Sie auch diesen für die ersten Schritte nehmen. Idealerweise sind Sie dafür aber sowohl mit OPC UA im Allgemeinen als auch mit Ihrem OPC-Server im Speziellen entsprechend vertraut.

Geben Sie zum Start die URL ein, unter der der Server erreichbar ist. Je nach genutztem Protokoll kann diese URL vom hier gezeigten Beispiel abweichen. Ein Klick auf „Get Endpoints“ füllt die darunterliegende Auswahlbox mit allen möglichen Zugangsarten, die der Server unterstützt. Dabei geht es insbesondere um die Frage, wie die spätere Übertragung authentifiziert und/oder verschlüsselt werden soll. Im Beispiel wird eine Kommunikationsart ausgewählt, die den Datenverkehr mit einem Zertifikat signiert und verschlüsselt. Außerdem wird der Dateninhalt binär übertragen, was im Gegensatz zu XML etwas performanter ist und das Netzwerk wegen des geringeren Durchsatzes schont.

![image_1](/assets/images/data_src.png)

Im nächsten Schritt kann noch ein Username und ein Passwort mitgegeben werden, falls der Server das erfordert. Das Textfeld Session-Name lässt das Kürzel für die Session definieren, so wie es auf dem Server geführt wird. Wenn beispielsweise mehrere, unterschiedliche Systeme oder mehrere Peakboard-Boxen auf einen OPC-Server zugreifen, können Sie anhand der Session-ID exakt nachvollziehen, aus welchem System oder von welcher Box die Session initiiert wurde. Falls Sie keine Veranlassung für einen bestimmten Session-Namen haben, belassen sie den voreingestellten Wert.

![image_1](/assets/images/data_src.png)

Im nächsten Schritt muss das Zertifikat angegeben werden, mit dem der Datenverkehr verschlüsselt und/oder signiert wird. Das nächste Bild zeigt den Absprung in den Zertifikate-Store, der für das ganze Board gilt. Sie können die gewünschten Zertifikate dort per Import von der lokalen Festplatte übernehmen oder – falls Sie über kein Zertifikat verfügen – können Sie sich selbst eines ausstellen (Button „Create“). Für den Fall, dass Sie selbst ein Zertifikat ausstellen, muss dieses auf dem Server bekannt gemacht werden. Wie das genau geht, hängt vom Server ab. Falls Sie die oben erwähnte Demo-Software als Test-Server nehmen, können Sie einfach auf „Try Connect“ klicken. Peakboard überträgt dann das Zertifikat einmal auf den Server und dieser lehnt es zunächst ab. Sie haben dann auf Server-Seite das Zertifikat als „bekannt“ zu kennzeichnen. Der Verbindungsaufbau funktioniert dann beim zweiten Versuch, da dann das Zertifikat auf dem Server ja bekannt und gültig ist.

![image_1](/assets/images/data_src.png)

Kommen wir zum letzten Konfigurationsschritt. Jede OPC-UA-Datasource kann beliebig viele Items abonnieren, z.B. den Zustand aller Ventile eines Boilers. Mehrere Items können zu einer Subscription zusammengefasst werden. Das macht dann Sinn, wenn die Items später in der Visualisierung ähnlich behandelt werden. Man könnte beispielsweise alle Ein- und Auslassventile zu jeweils einer Subscription zusammenfassen, da im Board im Fehlerfall immer die gleiche rote Lampe aufleuchten soll, egal welches der Ventile gerade auf einen Fehler läuft. Der folgende Screenshot zeigt genau eine Subscription mit einem Item. Ein Item wird durch die Item-ID und die Namespace URI genau definiert. Die ID kann frei erfunden werden und dient lediglich zum Benennen eines Items. Item-ID und Namespace URI müssen Sie für das jeweils gewünschte Item und den jeweiligen Server kennen oder Sie nutzen den Browse-Button, um ein Modell vom Server abzurufen, das alle Items des Modells hierarchisch darstellt.

![image_1](/assets/images/data_src.png)

Grundsätzlich gibt es zwei Möglichkeiten, wie nun mit den reinkommenden Daten umgegangen werden könnte. Die OPC-UA-Datenquelle ist wie jede andere Datenquelle auch, einfach nur eine Tabelle, in die die eingehenden Nachrichten der Items angehängt werden; zumindest bis zur Queue-Size. Danach werden die Daten nach dem FiFo-Prinzip aus der Tabelle entfernt und gegen neue ersetzt. Um eine Konfiguration zu testen, kann die Tabelle einfach per Drag and Drop auf den aktuellen Screen gezogen werden. Wenn alles korrekt konfiguriert ist, sollte sich die Tabelle mit Daten füllen.

Die zweite und üblichere Möglichkeit, ist auf eingehende Daten in einem Event zu reagieren. Es gibt pro Subscription ein Event. Der folgende Screenshot zeigt ein übliches Pattern. Je nach dem, wie der Wert des Items gesetzt ist, wird die Nachricht zur Weiterverarbeitung in die eine oder die andere Tabelle abgelegt. Ein Quadrat (namens „status“) wird je nach Wert auf grün oder rot gesetzt. Das Objekt Message hat im Script drei Attribute: message.timestamp ist ein Timestamp, Message.itemvalue ist der Wert und message.item ist der Name des items.

![image_1](/assets/images/data_src.png)

```
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

Sie finden das oben beschriebene Beispielboard für den Beispiel-Server von opcfoundation.org auch in unserem Github-Repository: [https://github.com/Peakboard/CoolStuff](https://github.com/Peakboard/CoolStuff)
