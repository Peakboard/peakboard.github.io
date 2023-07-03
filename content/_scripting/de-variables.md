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

Neben den Datenquellen, Controls und Ressourcen sind Variablen und Listen fester Bestandteil der meisten Projekte. Um die Daten verschiedener Datenquellen zwischenzuspeichern und weiterzuverarbeiten, kannst du sie in einer Variablen oder einer Liste ablegen. Per Skript oder Dataflows kannst du dann nach Bedarf auf die Variablen zugreifen oder sie mit anderen Peakboard Boxen oder externen Applikationen teilen.
Um eine Variable oder Liste anzulegen, klickst du im Explorer im entsprechenden Bereich auf [...] (1) oder machst einen Rechtsklick auf [Variablen] und wählst [Variable hinzufügen] (2) oder [Liste hinzufügen] (3).

![Variable oder Liste anlegen](/assets/images/scripting/variables/de_add-variable.png)

Im Dialog der Variable oder Liste kannst du aus den drei verfügbaren Datentypen String, Number oder Boolean wählen (4). Als nächstes gibst du der Variable oder Liste einen Namen (5) und kannst erste Werte eintragen (6). Optional kannst du aktivieren, dass Änderungen der Variable auf der Peakboard Box gespeichert werden (7). Damit sind die Werte auch nach einem Neustart der Peakboard Box noch verfügbar und werden nicht zurückgesetzt. Ebenfalls optional kannst du aktivieren, dass beim Upload ein Wert gesetzt wird (8).

[Dialog Variable oder Liste](/assets/images/scripting/variables/de_dialog.png)

Im linken Bereich des Dialogs findest du den Tab [Erweitert] (9). In diesem Bereich hast du die Option, den Zugriff auf die Variable oder Liste per API zu ermöglichen (10). So kannst du von außerhalb beispielsweise mit der Peakboard Datenquelle die Variable oder Liste entweder Lesen oder Lesen und Schreiben. Du hast außerden die Möglichkeit festzulegen, dass die Variable auf festgelegte Werte beschränkt wird (11). Ebenfalls ist es möglich, die Anbindung an den Peakboard Hub zu aktivieren (12), um die Variable oder Liste mit anderen Peakboard Boxen zu teilen.

[Erweitert](/assets/images/scripting/variables/de_advanced.png)

Im Unterschied zu den skalaren Variablen mit einem einzelnen Wert bestehen Listen aus Spalten, die jeweils einen eindeutigen Namen und einen eigenen Datentyp haben. Mit dem [+] Symbol (13) kannst du neue Spalten hinzufügen. Du kannst die Liste direkt in der Tabelle manuell mit Werten befüllen, editieren oder Werte löschen.

[Listen](/assets/images/scripting/variables/de_lists.png)
