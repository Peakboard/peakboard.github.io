---
layout: datenquellen-article
title: Azure Event Hub
menu_title: Azure Event Hub
description: Informatinon about Azure Event Hub Data in Peakboard
lang: de
ref: dat-19
---

Der folgende Artikel zeigt die Anbindung von Peakboard an einen Azure Event Hub. Dabei geht es insbesondere darum, von Peakboard aus auf bestimmte Events in Echtzeit zu reagieren. Diese Verfahren wird vor allem dazu benutzt, um Peakboard als Teil einer Landschaft einzubinden, die bereits Ereignisse über Event Hubs austauscht. Peakboard abonniert einen bestimmten Hub und die Ereignisse können ganz einfach in eine Visualisierung eingebunden werden.

Wie man in Azure einen Hub anlegt, erfahren Sie hier:

[https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create)

Falls Sie ein Beispielprogramm benötigen, das ein Event in einem Event Hub triggert, schauen Sie sich bitte folgende Seite an:

[https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-dotnet-standard-getstarted-send](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-dotnet-standard-getstarted-send)

Um einen Hub einzubinden, legen Sie im Peakboard-Designer eine neue Datenquelle an. Der folgende Screenshot zeigt beispielhaft die Einstellungen. Es wird ein Connection-String und der Name eines Hubs benötigt (anstatt des Namens kann auch der Pfad eingetragen werden). Darüber hinaus ist der Connection String und der Container-Name des Azure Storages anzugeben (so wie im Hub konfiguriert). Die Queue-Size definiert die maximale Anzahl an Nachrichten in der Datenquelle, das Script ist ebenfalls für die Verarbeitung (Näheres dazu weitere unten).

![Edit Azure Event Hub Data Dialog](/assets/images/data-sources/azure-event-hub/edit-azure-event-hub-data-dialog.png)

Generell können die Nachrichten über zwei Methoden verarbeitet werden. Die erste Möglichkeit ist über eine Queue. Alle eingehenden Nachrichten werden einfach in eine Tabelle eingefügt, die genauso funktioniert wie jede andere Peakboard-Datenquelle auch. Man kann sie also direkt an ein Grid oder ähnliches hängen, um die Nachrichten anzuzeigen. Die Tabelle hat zwei Spalten: Timestamp für den Zeitstempel und Message für die Rohdaten der Nachricht.

Die zweite Methode ist ein Script, das für jede eingehende Nachricht genau einmal aufgerufen wird. Der folgende Screenshot zeigt ein Beispiel. Das Objekt message hat zwei Attribute: timestamp und text. Das Beispiel zeigt, wie einfach nur die letzte Nachricht in ein Textfeld geschrieben wird.

![Azure Edit Script Dialog](/assets/images/data-sources/azure-event-hub/azure-edit-script-dialog.png)
