---
layout: article
title: Azure Event Hub
menu_title: Azure Event Hub
description: Anbindung eines Azure Event Hub im Peakboard Designer – Events in Echtzeit über eine Queue-Tabelle oder ein Script pro Nachricht verarbeiten.
lang: de
weight: 100
ref: dat-100
redirect_from:
  - /data_sources/19-de-azure-event-hub.html
---

Mit der Datenquelle [Azure Event Hub] bindest du einen Azure Event Hub an Peakboard an und reagierst direkt in Echtzeit auf eingehende Events. Dieses Verfahren wird vor allem genutzt, um Peakboard in eine bestehende Landschaft einzubinden, die Ereignisse bereits über Event Hubs austauscht: Peakboard abonniert einen bestimmten Hub, und die eingehenden Nachrichten lassen sich ganz einfach in einer Visualisierung darstellen.

Wie du in Azure einen Event Hub anlegst, erfährst du in der Microsoft-Dokumentation:

[https://learn.microsoft.com/azure/event-hubs/event-hubs-create](https://learn.microsoft.com/azure/event-hubs/event-hubs-create)

Eine allgemeine Anleitung, wie externe Datenquellen konfiguriert und an Peakboard-Elemente gekoppelt werden, findest du hier:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)

## Datenquelle hinzufügen

Mache einen Rechtsklick auf [Daten] oder klicke auf den [...]-Button und wähle [Datenquelle hinzufügen]. Den Azure Event Hub findest du in der Kategorie [Generic] – oder du tippst einfach „Event" in die Suche. Mache anschließend einen Doppelklick auf die Kachel [Azure Event Hub] (1).

![Azure Event Hub als Datenquelle hinzufügen](/assets/images/data-sources/azure-event-hub/azure-event-hub-01-add.png)

## Verbindung konfigurieren

Im folgenden Dialog gibst du die Verbindungsdaten ein, die du aus dem Azure-Portal kennst:

* **Data source name** (1) – der Name, unter dem die Datenquelle im Explorer erscheint.
* **Connection string** (2) – der Connection-String deines Event-Hub-Namespaces bzw. der zugehörigen Shared Access Policy.
* **Entity path** (3) – der Name des konkreten Event Hubs innerhalb des Namespaces (im Beispiel `peakboardhub`).
* **Storage connection string** (4) – der Connection-String des Azure Storage Accounts, der für das Checkpointing verwendet wird.
* **Storage container name** (5) – der Blob-Container, in dem die Lesepositionen (Checkpoints) abgelegt werden (im Beispiel `peakboard-checkpoints`).
* **Script** (6) – ein optionales Script, das für jede eingehende Nachricht aufgerufen wird (siehe unten).
* **Queue size** (7) – die maximale Anzahl der letzten Nachrichten, die in der Queue-Tabelle vorgehalten werden.

![Verbindungsdaten für den Azure Event Hub](/assets/images/data-sources/azure-event-hub/azure-event-hub-02-connection.png)

> Connection-Strings enthalten geheime Schlüssel. Im Screenshot oben sind die Werte von `SharedAccessKey` und `AccountKey` unkenntlich gemacht – trage hier deine echten Werte aus dem Azure-Portal ein.

## Nachrichten verarbeiten

Die eingehenden Nachrichten kannst du auf zwei Arten verarbeiten.

**1. Über die Queue-Tabelle:** Alle eingehenden Nachrichten werden in eine Tabelle geschrieben, die genauso funktioniert wie jede andere Peakboard-Datenquelle. Du kannst sie also direkt an ein Grid oder ein anderes Control hängen. Die Tabelle hat zwei Spalten: `Timestamp` für den Zeitstempel und `Message` für die Rohdaten der Nachricht. Über [Queue size] legst du fest, wie viele der letzten Nachrichten vorgehalten werden.

**2. Über ein Script:** Das hinterlegte Script wird für jede eingehende Nachricht genau einmal aufgerufen. Im Building-Blocks-Editor stehen dir dafür in der Gruppe [This Event] (1) die Blöcke [Get message timestamp] und [Get message text] (2) zur Verfügung. Mit ihnen greifst du auf den Zeitstempel und den Text der aktuellen Nachricht zu – so kannst du zum Beispiel nur die jeweils letzte Nachricht in ein Textfeld schreiben oder eingehende Werte gezielt weiterverarbeiten.

![Zugriff auf die Nachricht im Script über die This-Event-Blöcke](/assets/images/data-sources/azure-event-hub/azure-event-hub-03-script.png)
