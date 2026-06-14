---
layout: article
title: Azure IoT Hub
menu_title: Azure IoT Hub
description: Azure IoT Hub als Datenquelle in Peakboard – Peakboard als Device anbinden, Messages und Direct Methods empfangen und Nachrichten an die Cloud senden.
lang: de
weight: 200
ref: dat-200
redirect_from:
  - /data_sources/20-de-azure-iot-hub.html
---

Dieser Artikel beschreibt die Nutzung der Datenquelle [Azure IoT Hub] in Peakboard und grenzt sie von der [Azure Event Hub](/data_sources/de-azure-event-hub.html) Datenquelle ab.

Während die Event-Hub-Datenquelle ausschließlich zum **Empfangen** von Events genutzt wird – ideal für ein rein asynchrones Reagieren auf Ereignisse –, übernimmt Peakboard bei der IoT-Hub-Datenquelle eine aktive Rolle: **Peakboard agiert als eigenes Device innerhalb des Azure IoT Hubs.** Die Kommunikation ist damit bidirektional. Peakboard kann Messages empfangen, Direct Methods beantworten und selbst Nachrichten an Azure senden.

Damit das funktioniert, muss Peakboard im Azure IoT Hub als Device angelegt sein. Wie du ein Device anlegst, erfährst du in der Microsoft-Dokumentation:

[https://learn.microsoft.com/azure/iot-hub/iot-hub-create-through-portal](https://learn.microsoft.com/azure/iot-hub/iot-hub-create-through-portal)

Für die Verbindung wird der **Device-Connection-String** benötigt, der direkt im Azure-Portal beim jeweiligen Device hinterlegt ist:

![Device-Connection-String im Azure-Portal](/assets/images/data-sources/azure-iot-hub/azure-iot-hub-02-device-connection.png)

## Datenquelle hinzufügen

Mache einen Rechtsklick auf [Daten] oder klicke auf den [...]-Button und wähle [Datenquelle hinzufügen]. Den Azure IoT Hub findest du in der Kategorie [Generic] – oder du tippst einfach „IoT" in die Suche. Mache anschließend einen Doppelklick auf die Kachel [Azure IoT Hub] (1).

![Azure IoT Hub als Datenquelle hinzufügen](/assets/images/data-sources/azure-iot-hub/azure-iot-hub-01-add.png)

## Verbindung konfigurieren

Im folgenden Dialog richtest du die Verbindung und die Verarbeitung ein:

* **Data source name** (1) – der Name, unter dem die Datenquelle im Explorer erscheint.
* **Connection string** (2) – der Device-Connection-String aus dem Azure-Portal (siehe oben).
* **Queue size** (3) – die maximale Anzahl der letzten Messages, die in der Queue-Tabelle vorgehalten werden.
* **Script** (4) – ein optionales Script, das für jede eingehende Message aufgerufen wird (siehe unten).
* **Direct methods** (5) – die Liste der Methoden, die das Device beantwortet. Über [New] legst du eine neue Methode an.

![Verbindungsdaten für den Azure IoT Hub](/assets/images/data-sources/azure-iot-hub/azure-iot-hub-03-config.png)

> Der Connection-String enthält einen geheimen Schlüssel. Im Screenshot ist der Wert von `SharedAccessKey` unkenntlich gemacht – trage hier deinen echten Wert aus dem Azure-Portal ein.

## Messages empfangen

Eingehende Messages werden automatisch in einer tabellenartigen Struktur gespeichert – genau wie bei jeder anderen Peakboard-Datenquelle. Die Tabelle hat drei Spalten: `Timestamp` (Empfangszeitpunkt), `Topic` (Quelle der Message) und `Text` (Inhalt). Über [Queue size] legst du fest, wie viele der letzten Messages vorgehalten werden.

Alternativ oder zusätzlich kannst du auf jede eingehende Message direkt per Script reagieren, ohne die Queue auszuwerten. Das Script wird bei jeder Message automatisch ausgelöst. Im Building-Blocks-Editor stehen dir dafür in der Gruppe [This Event] (1) die Blöcke [Get message timestamp], [Get message topic] und [Get message text] (2) zur Verfügung, mit denen du auf die aktuelle Message zugreifst.

![Auf die eingehende Message im Script zugreifen](/assets/images/data-sources/azure-iot-hub/azure-iot-hub-04-receive-script.png)

Zum Testen eingehender Messages eignet sich der **Message-Testmodus im Azure-Portal**:

![Test-Message im Azure-Portal senden](/assets/images/data-sources/azure-iot-hub/azure-iot-hub-05-message-test.png)

## Direct Methods empfangen und beantworten

Neben Messages unterstützt der Azure IoT Hub sogenannte **Direct Methods**. Sie unterscheiden sich von Messages dadurch, dass sie synchron aufgerufen werden und einen Rückgabewert erwarten. Peakboard kann damit nicht nur reagieren, sondern dem aufrufenden System direkt eine Antwort (z. B. eine Quittung) zurückgeben.

Für jede Methode legst du im Verbindungsdialog über [New] einen Eintrag in der Tabelle [Direct methods] an (im Beispiel die Methode `PostAlert`). Im Method-Script greifst du über den Block [Get payload data as JSON] (2) der Gruppe [This Event] (1) auf die übergebene JSON-Payload zu, wertest sie aus und gibst am Ende einen Wert als Antwort zurück.

![Auf die Payload einer Direct Method im Script zugreifen](/assets/images/data-sources/azure-iot-hub/azure-iot-hub-06-method-script.png)

Der zugehörige Methoden-Aufruf kann – ähnlich wie der Message-Test – direkt im Azure-Portal über den Method-Testdialog ausgelöst werden. Die Antwort von Peakboard wird anschließend unter [Result] angezeigt:

![Direct Method im Azure-Portal aufrufen](/assets/images/data-sources/azure-iot-hub/azure-iot-hub-07-method-test.png)

## Nachrichten von Peakboard an den IoT Hub senden

Der dritte Kommunikationsweg ist das aktive Senden von Nachrichten aus Peakboard in die Cloud. Das geschieht über ein Script, das zum Beispiel an das [Tapped]-Event eines Buttons gebunden ist – der Endnutzer kann so per Knopfdruck eine Nachricht senden. Im Script baust du dazu typischerweise ein JSON-Objekt auf und übergibst es an die Sende-Funktion der IoT-Hub-Datenquelle. So lässt sich Peakboard nahtlos als sendendes Device in deine IoT-Architektur einbinden.
