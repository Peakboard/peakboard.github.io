---
layout: article
title: Peakboard Data Source
menu_title: Peakboard Data Source
description: Verwenden eines Peakboards als Datenquelle
lang: de
weight: 2720
ref: dat-2720
---

Die Peakboard-Datenquelle bietet eine einfache Möglichkeit, Daten zwischen mehreren Peakboard-Boxen auszutauschen. Sie ermöglicht es dem Benutzer, die nativen Variablen und Listen einer Box von anderen Peakboards innerhalb des Netzwerks zu lesen und zu schreiben. Die Möglichkeit, Variablen und Listen von Peakboard-Visualisierungen mit den Einstellungen des Hakens in den Bearbeitungsdialogen anzuzeigen. Mit der Peakboard-Datenquelle gibt es jetzt eine einfache und unkomplizierte Möglichkeit, diese Daten zu konsumieren und zu manipulieren.

### Lesen aus anderen Boxen

In diesem Szenario greift die Visualisierung, die auf dem Feld "Verbraucher" läuft, zum Lesen auf die Daten auf dem Feld "Anbieter" zu. Es ist wichtig, die Rolle der beiden Kästchen zu verstehen.

##### Anbieter-Seite

Da die Architektur der Peakboard-Datenquelle für die direkte Kommunikation zwischen zwei Peakboard-Boxen gedacht ist, kann die Peakboard-Datenquelle nur auf native Peakboard-Variablen und -Listen zugreifen. Die Daten werden durch Aktivieren des Kontrollkästchens "Can push data via API" in den jeweiligen Bearbeitungsdialogen angezeigt.

![Variable aktivieren](/assets/images/data-sources/pb-datasource/pb-datasource-provider1.png)

![Liste aktivieren](/assets/images/data-sources/pb-datasource/pb-datasource-provider2.png)(/assets/images/data-sources/pb-datasource-provider2.png)

##### Verbraucherseite

Die Peakboard-Datenquelle ist ein Wrapper um diese API auf der Verbraucherseite und macht den Prozess des Lesens und potentiellen Schreibens der Daten so einfach wie möglich, ohne dabei irgendwelche Funktionen einzuschränken.
Um eine Peakboard-Datenquelle zu erstellen, klicken Sie auf die Schaltfläche "..." - im Abschnitt "Daten" und wählen Sie "Datenquelle hinzufügen".
Wählen Sie dann "Peakboard", um das Dialogfeld "Peakboard-Daten" zu öffnen. 
Die Datenquelle wird die Daten immer in Form einer Tabelle liefern. 
Es spielt keine Rolle, ob es Hunderte von Zeilen in einer Liste gibt, die verbraucht wird, oder ob die Datenquelle nur eine Variable aus dem entfernten Peakboard-Feld abfragt.

##### Konfiguration der Datenquelle

Geben Sie zunächst den obligatorischen Namen für die Datenquelle an.
Markieren Sie in der nächsten Zeile das Feld Peakboard, das abgefragt werden soll. 
Die Liste der Peakboards wird aus dem Verwaltungsdialog übernommen. 
Falls Ihr Kästchen nicht im Dropdown-Menü erscheint, vergewissern Sie sich bitte, dass das Gerät im Verwaltungsdialog hinzugefügt wurde.
Nach Auswahl des Peakboards werden die verfügbaren Datenquellen automatisch abgefragt. 
Der Benutzer kann dann wählen, ob eine Liste vom Gerät oder eine beliebige Anzahl von skalaren Variablen, mindestens aber eine, abgefragt werden soll.
Eine Peakboard-Datenquellenkonfiguration kann entweder eine Peakboard-Liste oder eine beliebige Anzahl von skalaren Variablen zurückgeben, die dann in einer Tabelle mit einer Zeile dargestellt werden.

Im nächsten Dropdown-Menü können Sie die Liste oder die Variablen auswählen, die Sie mit der Datenquelle anfordern möchten.

Klicken Sie auf "Daten laden", um eine Anforderung für die aktuelle Konfiguration zu senden, um den aktuellen Zustand der Daten der Datenquellen zu sehen.

Nach dem Speichern durch Drücken der Schaltfläche "Ok" können die Datenquelle und ihre Daten normal verwendet werden.

![Liste aktivieren](/assets/images/data-sources/pb-datasource/pb-datasource-consumer.png)


### Schreiben in andere Boxen

Zum Schreiben von Daten auf ein Peakboard wird die [lua-Scripting-Engine](https://help.peakboard.com/scripting/de-script-engine.html) verwendet. 
Die Peakboard-Datenquelle bietet eine Möglichkeit, Anweisungen auf den Listen und Variablen, die in der Datenquelle definiert sind, auszuführen. 
Diese Anweisungen bieten auch ein bestimmtes Maß an Sicherheit für die Daten über das Netzwerk.

Stellen Sie sich das folgende Szenario vor:

In einer Produktionshalle gibt es drei Produktionslinien. Jede davon ist mit einem Peakboard verbunden, auf dem die aktuelle Anzahl der in dieser Schicht/Tag produzierten Stücke angezeigt wird.
Ein viertes Master-Peakboard sollte diese Informationen erfassen und die Möglichkeit haben, die Zählung zurückzusetzen. Dies in Peakboard zu implementieren war zuvor recht mühsam, da es eine Menge Skripting erforderte, um die Anfragen zur Einstellung der Daten auf den Peakboards zu erstellen.

Angenommen, die Peakboard-Variablen, die die Stückzahl auf den Zeilen anzeigen, heißen line1qnty, line2qnty und line3qnty. Das Master-Peakboard verfügt über eine Datenquelle für jedes der Peakboards. Sie werden wie oben beschrieben aufgebaut.

Das Master-Peakboard wird nun die Werte automatisch abfragen und sie in der Visualisierung als normale Datenquelle zur Verfügung stellen.

Die Datenquellen stellen verschiedene Funktionen über die Skripting-API zur Verfügung. 
So kann das Zurücksetzen der Werte durch den Aufruf
```
data.datasource.value.set(0)
```
auf den Wert in der jeweiligen Datenquelle.

Eine listenbasierte Peakboard-Datenquelle stellt die folgenden Funktionen zur Verfügung:

* anhängen(item)
* entfernen(index)
* einfügen (Index, Element)
* Satz (Index, Element)
* clear()

Eine skalarbasierte Peakboard-Datenquelle stellt die folgenden Funktionen zur Verfügung:
set(Wert)

Je nach Typ werden diese Funktionen unterstützt:

Für Zahlen:

* addieren (Wert)
* subtrahieren(Wert)
* multiplizieren (Wert)
* dividieren(Wert)
* Leistung (Wert)

Für Streicher:

* anhängen(Zeichenkette)

Beachten Sie, dass Mischvorgänge unvorhersehbare Auswirkungen haben können, wenn sie von mehreren Peakboards aus ausgeführt werden. Wenn zum Beispiel die Operation addieren(2) und multiplizieren(2) zur gleichen Zeit eintreffen, kann die Visualisierung nicht wissen, welche zuerst ausgeführt werden soll. Im Gegensatz dazu können z.B. Subtraktionen und Additionen in beliebiger Reihenfolge ausgeführt werden.
