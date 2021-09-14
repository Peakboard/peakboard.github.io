---
layout: article
title: Variablen und Listen
menu_title: Variablen und Listen
description: Variablen und Listen
lang: de
weight: 200
ref: scr-200
redirect_from:
  - /data_sources/01-de-variablen.html
---
In anspruchsvollen Visualisierungen (mit oder ohne Scripting), wird es immer wieder nötig sein, Daten in einer Art globalen Variable abzulegen. 
Aus diesem Grund gibt es in jeder Visualisierung im Projektbaum links die Möglichkeit, solche Variablen anzulegen.
Man kann auf sie von Skripten und von Dataflows aus zugreifen.
Selbst ein Zugriff von außen (also per API call) zum Beispiel mit der [Peakboard Datenquelle](https://help.peakboard.com/data_sources/de-peakboard-data-soure.html) ist möglich. 
Nähere Infos zu den API Calls lassen sich [hier](https://help.peakboard.com/misc/de-push-nachrichten.html) finden.
Generell unterscheidet man zwischen einzelnen-skalaren Variablen und tabellarischen Variablen, auch genannt Listen.

![Variable oder Liste anlegen](/assets/images/scripting/variables/lists-variables-01.png)


### (skalare) Variablen

Jeder Variable benötigt einen eindeutigen Namen und einen Datentyp. Die in Peakboard verfügbaren Datentypen sind String, Number oder Boolean. Eine weitere Differenzierung des Datentyps (z.B. integer, decimal, float, etc...) ist nicht vorgesehen. Das gilt auch im Scripting.
Die Option **Save Changes to Box** sorgt dafür, dass der aktuelle Wert einer Variablen über den Neustart hinaus erhalten bleibt (z.B für einen Zähler, der über einen sehr langen Zeitraum hinweg zählt). 

![Variable](/assets/images/scripting/variables/lists-variables-02.png)

Unter [Erweitert/Advanced] können Einstellungen für einen Abruf der Variablen über die [Peakboard API](/misc/de-API.html) vorgenommen werden.
Außerdem kann die Variable mit dem [Peakboard Hub](/hub/de-hub_variableslist.html) verknüpft werden.

![Variable API](/assets/images/scripting/variables/lists-variables-03.png)

### Listen

Listen bestehen aus Spalten, die jeweils einen eindeutigen Namen und einen Datentyp haben. Mit dem Plus-Knopf können neue Spalten hinzugefügt werden. Soll die Liste mit Daten befüllt werden, lassen sich die Daten direkt in der Tabellen editieren, hinzufügen oder mit der Löschtaste löschen. Das Editieren der Struktur als auch der Nutzdaten sollte selbsterklärend sein.

Die beiden Zusatzoption unten entsprechen der Funktion wie bei der skalaren Variablen.

![Liste](/assets/images/scripting/variables/lists-variables-04.png)
