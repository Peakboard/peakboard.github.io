---
layout: article
title: Peakboard Data Source
menu_title: Peakboard Data Source
description: Daten zwischen mehreren Peakboard Boxen über die Peakboard-Datenquelle austauschen
lang: de
weight: 2100
ref: dat-2100
redirect_from:
  - /data_sources/de-peakboard-data-soure.html
---

Die Peakboard-Datenquelle bietet eine einfache Möglichkeit, Daten zwischen mehreren Peakboard Boxen auszutauschen. Damit kannst du die nativen Variablen und Listen einer Box von anderen Peakboard Boxen im selben Netzwerk lesen und schreiben – ganz ohne eigenes Scripting. Eine Box stellt ihre Daten über die integrierte API bereit (Anbieter), eine andere Box konsumiert sie über die Peakboard-Datenquelle (Verbraucher).

## Aus einer anderen Box lesen

In diesem Szenario greift die Visualisierung auf der Verbraucher-Box lesend auf die Daten der Anbieter-Box zu. Dabei ist es wichtig, die Rollen der beiden Boxen zu verstehen.

### Anbieter-Box: Daten über die API freigeben

Da die Peakboard-Datenquelle für die direkte Kommunikation zwischen zwei Peakboard Boxen gedacht ist, kann sie nur auf native Peakboard-Variablen und -Listen zugreifen. Eine Variable gibst du frei, indem du sie im Explorer öffnest, in den Bereich [Advanced] wechselst und unter [API] die Option [Accessible via API] (1) setzt:

* **Not Accessible** – die Variable ist nicht über die API erreichbar.
* **Read Only** – andere Boxen dürfen den Wert nur lesen.
* **Read and Write** – andere Boxen dürfen den Wert lesen und schreiben.

Für das reine Lesen genügt [Read Only]; für das weiter unten beschriebene Schreiben wählst du [Read and Write].

![Variable über die API freigeben](/assets/images/data-sources/peakboard-data-source/peakboard-data-source-01-provider-api.png)

Native Listen gibst du auf demselben Weg frei: Öffne die Liste, wechsle in ihren Bereich [Advanced] und setze dort die API-Zugriffsstufe.

### Verbraucher-Box: Peakboard-Datenquelle hinzufügen

Auf der Verbraucher-Seite ist die Peakboard-Datenquelle ein Wrapper um diese API und macht das Lesen – und bei Bedarf das Schreiben – der Daten so einfach wie möglich. Um eine Peakboard-Datenquelle anzulegen, klickst du im Explorer im Bereich [Data] auf [Datenquelle hinzufügen]. Wähle dort die Kategorie [Peakboard] (1) und anschließend die Datenquelle [Peakboard Box] (2).

![Peakboard Box als Datenquelle wählen](/assets/images/data-sources/peakboard-data-source/peakboard-data-source-02-add-datasource.png)

### Die Datenquelle konfigurieren

Im folgenden Dialog [Add Peakboard Data] richtest du die Verbindung ein:

* Vergib im Feld [Data source name] (1) einen eindeutigen Namen für die Datenquelle.
* Wähle unter [Peakboard Box] (2) die Box aus, die abgefragt werden soll. Die Liste der Boxen stammt aus dem Verwaltungsdialog ([Manage]). Falls deine Box nicht im Dropdown erscheint, stelle sicher, dass sie dort hinzugefügt wurde.
* Lege über [Data Source Type] (3) fest, ob du eine Liste oder skalare Variablen abfragst.
* Wähle unter [Data sources] (4) die konkrete Liste bzw. die Variablen aus, die du beziehen möchtest.
* Mit [Load data] (5) sendest du eine Anfrage für die aktuelle Konfiguration und erhältst eine Vorschau der Daten.

![Die Peakboard-Datenquelle konfigurieren](/assets/images/data-sources/peakboard-data-source/peakboard-data-source-03-configure.png)

Eine Peakboard-Datenquelle liefert ihre Daten immer als Tabelle – unabhängig davon, ob eine Liste mit hunderten Zeilen oder nur eine einzelne Variable abgefragt wird. Über [Data Source Type] (1) entscheidest du zwischen beiden Varianten:

* **Variables** – eine beliebige Anzahl skalarer Variablen (mindestens eine), die in einer Tabelle mit einer Zeile dargestellt werden.
* **List** – genau eine native Peakboard-Liste.

![Liste oder Variablen abfragen](/assets/images/data-sources/peakboard-data-source/peakboard-data-source-04-datasource-type.png)

Optional kannst du im Bereich [Reload] ein automatisches Aktualisierungsintervall festlegen und mit [Simulate Box] eine Box simulieren, falls noch keine reale Box verfügbar ist. Nach dem Speichern mit [OK] steht die Datenquelle wie jede andere zur Verfügung.

## In eine andere Box schreiben

Zum Schreiben von Daten auf eine andere Peakboard Box nutzt du die [Lua-Scripting-Engine](https://help.peakboard.com/scripting/de-script-engine.html). Die Peakboard-Datenquelle stellt dafür Funktionen bereit, mit denen du Anweisungen auf den in der Datenquelle definierten Listen und Variablen ausführst. Diese Anweisungen bieten zudem ein gewisses Maß an Sicherheit für die Daten im Netzwerk.

Stell dir folgendes Szenario vor: In einer Produktionshalle gibt es drei Produktionslinien. Jede ist mit einer Peakboard Box verbunden, die die aktuelle Stückzahl der laufenden Schicht anzeigt. Eine vierte Master-Box soll diese Informationen sammeln und die Zähler zurücksetzen können. Bisher war das recht aufwendig, weil viel Scripting nötig war, um die Anfragen an die einzelnen Boxen zu bauen.

Angenommen, die Variablen mit der Stückzahl heißen line1qnty, line2qnty und line3qnty. Die Master-Box erhält für jede dieser Boxen eine eigene Peakboard-Datenquelle, die wie oben beschrieben aufgebaut wird. Sie fragt die Werte automatisch ab und stellt sie in der Visualisierung wie eine normale Datenquelle bereit.

Über die Scripting-API stellen die Datenquellen verschiedene Funktionen bereit. Das Zurücksetzen eines Werts erfolgt zum Beispiel mit:

`data.datasource.value.set(0)`

Eine listenbasierte Peakboard-Datenquelle stellt folgende Funktionen bereit:

* `append(item)`
* `remove(index)`
* `insert(index, item)`
* `set(index, item)`
* `clear()`

Eine skalarbasierte Peakboard-Datenquelle stellt folgende Funktion bereit:

* `set(value)`

Je nach Datentyp werden zusätzlich diese Funktionen unterstützt:

Für Zahlen:

* `add(value)`
* `subtract(value)`
* `multiply(value)`
* `divide(value)`
* `power(value)`

Für Zeichenketten:

* `append(string)`

Beachte: Werden Operationen von mehreren Boxen gleichzeitig ausgeführt, kann das Ergebnis unvorhersehbar sein. Treffen zum Beispiel add(2) und multiply(2) gleichzeitig ein, kann die Visualisierung nicht wissen, welche Operation zuerst ausgeführt werden soll. Subtraktionen und Additionen hingegen lassen sich in beliebiger Reihenfolge ausführen.
