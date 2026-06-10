---
layout: article
product: hub
title: Flows – Anwendungsfälle
menu_title: Anwendungsfälle
description: Typische Einsatzszenarien für Peakboard Hub Flows – von Benachrichtigungen über Daten-Staging bis zum Live-Broker.
lang: de
weight: 1115
ref: hub-1115
redirect_from:
 - /hub/de-hub_flow-use-cases.html
---

Flows verlagern Datenlogik in den Peakboard Hub. Weil sie zentral laufen und keine Oberfläche brauchen, eignen sie sich für eine ganze Reihe von Szenarien. Dieser Artikel stellt die wichtigsten vor. Wie du einen Flow baust, zeigt [Flow erstellen](/hub/Flows/de-hub_flow-create.html).

### Workflows und Benachrichtigungen

Der einfachste Anwendungsfall ist Automatisierung: Ein Flow überwacht eine Datenquelle und löst eine Aktion aus, sobald eine Bedingung eintritt – zum Beispiel eine E-Mail, wenn eine Maschine ausfällt. In der Funktion stehen dir dafür im Bereich [Publish to external systems] viele Bausteine zur Verfügung, etwa [Email], [MQTT], [Siemens S7] oder [SQL Server].

![Bausteine zum Verteilen von Daten](/assets/images/hub/flows/flows-04-function-buildingblocks.png)

### Daten stagen und Verbindungen sparen

Wenn viele Peakboard Boxen dieselben Daten aus einem ERP- oder Datenbanksystem ziehen, summieren sich die Verbindungen schnell zu Boxen × Datenquellen. Das belastet die Datenquelle unnötig.

Mit einem Flow drehst du das um: Der Flow stellt **eine** Verbindung zur Datenquelle her, ruft die Daten zeitgesteuert ab und schreibt das Ergebnis in eine Peakboard Hub Liste. Alle Peakboard Boxen lesen anschließend nur noch aus dem Hub. Aus „Boxen × Datenquellen" wird so „eine Verbindung zur Datenquelle und dann hinaus zu den Boxen" – die Datenquelle wird geschont, und die Daten bleiben durch das periodische Aktualisieren stets aktuell.

### Live-Broker für SPS-Werte

SPSen vertragen nur eine begrenzte Anzahl gleichzeitiger Verbindungen. Sollen viele Anwendungen dieselben Werte einer Siemens S7 sehen, wird das schnell zum Problem.

Ein Flow löst das als Live-Broker: Er verbindet sich als Einziger mit der SPS, liest die Werte in kurzen Intervallen und schreibt sie in Peakboard Hub Variablen. Die Peakboard Boxen abonnieren diese Variablen über eine Peakboard Hub-Verbindung – ändert der Flow einen Wert, benachrichtigt der Hub alle abonnierten Anwendungen live. So greifen alle nur noch auf den Hub zu, und die SPS muss nur eine einzige Verbindung bedienen.

### Asynchrone Verarbeitung als Warteschlange

Schreibt eine Peakboard Box direkt und synchron in ein ERP-System, blockiert sie, bis das System antwortet. Ein Flow entkoppelt das: Die Box schreibt ihre Meldung schnell in eine Peakboard Hub Liste, die als Warteschlange dient. Ein zeitgesteuerter Flow arbeitet die offenen Einträge anschließend nacheinander ab, überträgt sie ins Zielsystem und markiert jede Zeile als erledigt oder fehlerhaft. Fehlgeschlagene Einträge werden im nächsten Durchlauf automatisch erneut versucht – die Box bleibt jederzeit reaktionsfähig.

### Aggregieren und Archivieren

Bei großen Datenmengen lohnt es sich, sie vorzuverdichten, bevor viele Anwendungen darauf zugreifen. Ein Flow kann zum Beispiel nachts die Rohdaten des Vortags auslesen, daraus Tageswerte wie Minimum, Maximum und Durchschnitt berechnen und in eine separate Peakboard Hub Liste schreiben. Genauso lassen sich alte Daten zeitgesteuert in eine Archivliste auslagern und aus der aktiven Liste entfernen. Das hält die aktiv genutzten Listen klein und schnell, ohne historische Daten zu verlieren.

### Weiterführende Beispiele

Ausführliche, praxisnahe Beispiele zu diesen Szenarien – von der Historisierung von MQTT-Nachrichten bis zur Verteilung von S7-Werten – findest du in der Blog-Reihe [Hub Flows](https://how-to-dismantle-a-peakboard-box.com/Hub-FLows-I-Getting-started-and-learn-how-to-historize-MQTT-messages.html).
