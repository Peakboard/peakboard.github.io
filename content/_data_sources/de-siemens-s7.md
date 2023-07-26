---
layout: article
title: Siemens S7
menu_title: Siemens S7
description: Information über Siemens S7 Daten in Peakboard
lang: de
weight: 2500
ref: dat-2500
redirect_from:
  - /data_sources/21-de-siemens-s7.html
---

Peakboard bietet dir mehrere Möglichkeiten, Maschinendaten zu verarbeiten, z.B. über einen cloudbasierten IoT-Hub (wie von Azure oder Google) oder einen MQTT-Server. Die Siemens-S7-Datenquelle ermöglicht es dir, die Peakboard Box direkt an eine S7-Steuerung anzubinden.

## Voraussetzungen

Abgesehen von einer aktiven Netzwerkverbindung musst du auf Seite der S7-Steuerung noch ein paar wenige Einstellungen vornehmen bzw. sicherstellen. Zuerst muss du den Zugriff auf die Datenbausteine gewähren. Stelle sicher, dass sowohl der allgemeine Lese- und Schreibzugriff, als auch die PUT- und GET-Kommunikation zugelassen ist. Diese Einstellungen können, je nach Konfigurationsprogramm, wie folgt aussehen:

![Protection](/assets/images/data-sources/siemens-s7/datenquelle-s7-00-protection.png)

Der zweite Aspekt ist die Verwaltung der Variablen auf der Steuerung. Der interne Zugriff auf Datenblöcke, Merker, Eingänge und Ausgänge kann entweder optimiert oder absolut erfolgen. Um Variablen von der Steuerung mit Peakboard lesen zu können, muss du den absoluten Zugriff aktivieren.

![Block Access](/assets/images/data-sources/siemens-s7/datenquelle-s7-01-block-access.png)

Der folgende Screenshot zeigt die Rohansicht eines Datenblocks aus Sicht des S7-Programmierers. Relevant sind hier zum einen die Datentypen der Variablen und das Offset. Beide Werte benötigst du bei der Konfiguration der S7-Datenquelle. Für den Fall, dass die Variable in einem Datenbaustein liegt, benötigst du noch die Nummer des Bausteins.

![Data Block](/assets/images/data-sources/siemens-s7/datenquelle-s7-02-data-block.png)

## Anbindung im Peakboard-Designer

Um Peakboard mit der S7 zu verbinden, legst du eine entsprechende Datenquelle an unter [Daten], [Datenquelle hinzufügen], [Siemens S7] (1).

![Datenquelle hinzufügen](/assets/images/data-sources/siemens-s7/de_s7_add-datasource.png)

Trage einen Namen (2), die IP-Adresse (3), Baugruppe (Rack) (4) und Steckplatz (Slot) (5) ein. Das Nachladeintervall (6) gibt an, wie viel Zeit bis zur nächsten Aktualisierung der Daten vergeht.

![Datenquelle konfigurieren](/assets/images/data-sources/siemens-s7/de_s7_configure-datasource.png)

## Variablendefinition

Für jede abzurufende Variable musst du manuell einen Eintrag vornehmen. Um eine neue Variable hinzuzufügen, klicke auf das [+]-Symbol (7). Du musst einen eindeutigen Namen (8) wählen, der jedoch nicht mit dem der Variable auf der Steuerung übereinstimmen muss. Weiterhin musst du die Position der Variable definieren. Dazu gehört, ob die Variable in einem Datenbaustein, Merker, Aus- oder Eingang liegt (Typ) und das Offset, welches die Speicheradresse der Variable angibt.

![Variable hinzufügen](/assets/images/data-sources/siemens-s7/de_s7_add-variable.png)

Bei der Definition des Offsets sind Besonderheiten in der Formatierung zu beachten, welche abhängig vom Datentyp sind. Willst du eine Variable vom Datentyp Bit, also einen booleschen Wert, lesen, musst du das Offset in der Form [Byte.Bit] angeben. Valide Werte sind zum Beispiel [0.0] oder [2.7].

## Variablen schreiben

Das Setzen von Werten auf S7-Steuerungen ist ausschließlich mit Lua-Skript möglich. Dazu gibt es vier Methoden, jeweils eine pro Art von Speicher. Diese Methoden sind im Skript-Editor unter [FUNKTIONEN], [In externem System veröffentlichen], [Siemens S7], [In SPS schreiben] zu finden.
Beachte, dass die Variable, welche geschrieben werden soll, nicht in der Datenquelle hinterlegt sein muss.

![Variablen schreiben](/assets/images/data-sources/siemens-s7/de_s7_write-variable.png)

Die Syntax der Methoden ist weitestgehend identisch, wobei stets ausschließlich die essentiellen Informationen der zuschreibenden Variable erforderlich sind.

Ein solcher Befehl hat folgendes Muster:

```lua
data.[plc].setvar( ([Datenblocknummer], )[Offset], [Datentyp], [Wert] )
```

Die Datenblocknummer wird nur benötigt, wenn auf einen Datenbaustein geschrieben werden soll und wird als Ganzzahl angegeben. Die Angabe des Offsets erfolgt wie im Dialog zur Variablenkonfiguration. Gleiches gilt für den Datentyp. Der Wert wird, wie Offset und Datentyp, als Zeichenkette (‘Wert’) angegeben.
