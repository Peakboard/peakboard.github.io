---
layout: article
title: Excel
menu_title: Excel
description: Anbindung einer Excel-Datenquelle im Peakboard Designer
lang: de
weight: 600
ref: dat-600
redirect_from:
  - /excel/
  - /data_sources/13-de-excel.html
  - /data_sources/de-excel.html
---

Dieser Artikel erklärt, wie du eine Excel-Datei als Datenquelle in Peakboard einbindest. Excel eignet sich überall dort, wo Daten bereits in einer Tabelle gepflegt werden – von der lokalen `.xlsx`-Datei über ein Netzlaufwerk bis hin zu OneDrive oder SharePoint. Weitere Infos zum Dateiformat findest du direkt bei [microsoft.com](https://www.microsoft.com/microsoft-365/excel).

Als durchgängiges Beispiel dient in diesem Artikel die Datei `production-lines.xlsx`. Sie enthält das Arbeitsblatt `Lines` mit den Spalten Line, Product, Status, Output, Target und OEE und listet fünf Fertigungslinien einer Produktion.

## Datenquelle hinzufügen

Wähle im Explorer den Eintrag [Data] aus und klicke auf den Plus-Button, um eine neue Datenquelle anzulegen. Wähle im folgenden Dialog die Datenquelle [Excel] (1) aus – über das Suchfeld oben rechts findest du sie am schnellsten.

![Excel Datenquelle hinzufügen](/assets/images/data-sources/excel/excel-01-add.png)

## Excel-Datenquelle konfigurieren

Im Dialog [Add Excel data] vergibst du im Bereich [General] zunächst einen Namen für die Datenquelle (1).

Im Bereich [Reload] (2) legst du fest, ob und in welchem Intervall (in Sekunden) die Daten automatisch nachgeladen werden. Über [Reload state] wählst du zwischen [Startup] (einmalig beim Start), [Periodic] (zyklisch im angegebenen Intervall) und [Manual] (nur, wenn du das Neuladen per Script auslöst).

Im Bereich [Connection] bestimmst du über [Source type] (3), woher die Datei stammt:

* **URL** – Abruf über eine Web-Adresse.
* **NetworkShareFileDirect** – direkter Zugriff auf eine Datei in einem Netzlaufwerk unter Angabe des gewünschten Domänen-Users und Passworts. Achte darauf, dass UNC-Laufwerkspfade verwendet werden müssen.
* **File** – eine lokale Datei, die als Ressource ins Projekt übernommen und Teil der `.pbmx`-Datei wird. Das ist praktisch, wenn du zu Beginn eines Projektes offline mit den Daten arbeiten möchtest.
* **Office365** / **Hub** – eine Datei aus SharePoint bzw. OneDrive (sowohl kostenfrei als auch als Teil von Microsoft 365) oder aus dem Peakboard Hub.

Im Beispiel wählen wir [File] und die Datei `production-lines.xlsx`.

<div class="box-tip" markdown="1">
**Wichtig**
Eine Excel-Datei, die du als [File] einbindest, enthält nur den Datenstand, der beim Hinzufügen zu den Ressourcen aktuell war. Um Echtzeitdaten anzuzeigen, solltest du eine der anderen Quellen wählen.
</div>

Im Bereich [Specify details] legst du fest, wie die Datei ausgewertet wird:

* [Worksheet] (4) – das Arbeitsblatt, aus dem die Daten gelesen werden. Über den Aktualisieren-Button daneben lädst du die Liste der verfügbaren Arbeitsblätter neu.
* [Select all] / [Range] (5) – standardmäßig ist [Select all] aktiv und es wird das gesamte Arbeitsblatt ab der ersten belegten Zelle verwendet. Deaktivierst du [Select all], kannst du unter [Range] einen Bereich eingeben, in dem Peakboard nach den Daten suchen soll (zum Beispiel `B2:H23`).
* [Options] (6) – ist [Column names in first row] aktiv, wird die erste Zeile als Spaltenüberschrift interpretiert; andernfalls erhalten die Spalten generische Namen (Column0, Column1, …). Mit [Switch rows and columns] transponierst du die Daten mit nur einem Klick, tauschst also Zeilen und Spalten.

![Excel-Datenquelle konfigurieren](/assets/images/data-sources/excel/excel-02-config.png)

## Daten laden und Vorschau prüfen

Klicke auf [Load data] (1), um die Datei einzulesen. Im rechten Bereich erscheint daraufhin eine Vorschau mit den erkannten Spalten und den ersten Zeilen (2). So kannst du direkt prüfen, ob das richtige Arbeitsblatt gewählt wurde und die Überschriften korrekt erkannt wurden.

Standardmäßig werden alle Spalten zunächst als Zeichenfolge eingelesen. Das erkennst du am Zusatz „(String)" in den Spaltenköpfen. Falls du eine Spalte zum Beispiel in einen numerischen Typ umwandeln möchtest, legst du dafür einen [Dataflow](/dataflows/de-spalten-bearbeiten.html) an und nutzt dort den Schritt [Spaltentyp ändern].

![Excel Vorschaudaten laden](/assets/images/data-sources/excel/excel-03-preview.png)

## Datenquelle verwenden

Mit einem Klick auf [OK] legst du die Datenquelle an. Sie erscheint anschließend im Explorer unter [Data] (1). Die Datei wurde dabei als Ressource ins Projekt übernommen und ist unter [Resources] (2) zu finden.

Ab jetzt kannst du die Datenquelle wie jede andere mit Controls (zum Beispiel einer Table, einem Chart oder einer Styled List) verknüpfen und die Excel-Daten auf einem Dashboard darstellen.

![Excel-Datenquelle im Explorer](/assets/images/data-sources/excel/excel-04-explorer.png)

## Daten auf einem Dashboard anzeigen

Eine Excel-Datenquelle wird erst nützlich, wenn du ihre Daten anzeigst. Verknüpfe sie mit einem Control – hier eine [Table] – und die Zeilen aus dem Arbeitsblatt erscheinen auf deinem Dashboard.

Im folgenden Beispiel ist die Datenquelle [ProductionLines] (1) an ein Table-Control (2) gebunden. Sobald die Bindung gesetzt ist, zeigt die Table die importierten Zeilen direkt auf der Arbeitsfläche an (3).

![Excel-Datenquelle an eine Table im Peakboard Designer gebunden](/assets/images/data-sources/excel/excel-05-dashboard-designer.png)

Klicke auf [Preview], um das Projekt in der Peakboard Runtime abzuspielen. Table, Chart und die Kennzahlen oben zeigen die Excel-Daten nun genau so an, wie sie später auf einer Peakboard Box oder einem BYOD Gerät erscheinen.

![Das Beispiel-Dashboard in der Peakboard Runtime](/assets/images/data-sources/excel/excel-06-dashboard-runtime.png)

Du kannst das fertige Beispiel herunterladen und im Peakboard Designer öffnen, um die Excel-Datenquelle, die Table-Bindung und das Dashboard-Layout zu erkunden: [Produktionslinien-Dashboard (.pbmx)](/assets/files/examples/excel-production-lines-dashboard.pbmx).
