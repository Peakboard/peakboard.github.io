---
layout: article
title: Azure IoT Hub
menu_title: Azure IoT Hub
description: Nutzung von Azure IoT Hub als Datenquelle in Peakboard
lang: de
weight: 200
ref: dat-200
redirect_from:
  - /data_sources/20-de-azure-iot-hub.html
---

Dieser Artikel beschreibt die Nutzung der **Azure IoT Hub Datenquelle** in Peakboard und grenzt sie klar von der **Azure Event Hub Datenquelle** ab.

Während die **Event-Hub-Datenquelle** ausschließlich zum **Empfangen von Events (Messages)** genutzt wird und damit ideal für ein reines, asynchrones Reagieren auf Ereignisse ist, übernimmt Peakboard bei der **IoT-Hub-Datenquelle** eine aktive Rolle:  
👉 **Peakboard agiert hier als eigenes Device innerhalb des Azure IoT Hubs.**

Das bedeutet:
- Peakboard muss im Azure IoT Hub **als Device angelegt** sein  
- die Kommunikation erfolgt **bidirektional**  
- Peakboard kann **Nachrichten empfangen**, **Methoden beantworten** und **selbst Daten an Azure senden**

Zur Verbindung wird der **Device-Connection-String** benötigt, der direkt im Azure Portal beim jeweiligen Device hinterlegt ist.

![image_1](/assets/images/data-sources/azure-iot-hub/datenquellen-iot-hub-01.png)
![image_1](/assets/images/data-sources/azure-iot-hub/datenquellen-iot-hub-02.png)

---

## Kommunikationsmöglichkeiten im Überblick

Wenn Peakboard als IoT-Device betrieben wird, stehen drei Kommunikationswege zur Verfügung:

1. **Asynchrones Empfangen von Messages**
2. **Empfangen und Beantworten von Direct Methods**
3. **Senden von Messages von Peakboard an den IoT Hub**

Die folgenden Abschnitte erklären diese Varianten im Detail.

---

## Messages empfangen

Eingehende Messages werden in der Datenquelle automatisch in einer tabellenartigen Struktur gespeichert.  
Diese enthält die Spalten:

- **Timestamp** – Zeitpunkt des Empfangs  
- **Topic** – Message-Quelle  
- **Text** – Inhalt der Message  

Die maximale Größe dieser internen Queue ist konfigurierbar.

Alternativ (oder zusätzlich) kann auf jede eingehende Message **direkt per Script reagiert werden**, ohne die Queue auszuwerten.  
Das Script wird dann **bei jeder Message automatisch ausgelöst**.

Das folgende Beispiel zeigt ein Script, das den Inhalt der empfangenen Message direkt in ein Textfeld schreibt:

![image_1](/assets/images/data-sources/azure-iot-hub/datenquellen-iot-hub-03.png)

Zum Testen von eingehenden Nachrichten kann der **Message-Testmodus im Azure Portal** verwendet werden:

![image_1](/assets/images/data-sources/azure-iot-hub/datenquellen-iot-hub-04.png)

---

## Methoden empfangen und beantworten (Direct Methods)

Neben einfachen Messages unterstützt der Azure IoT Hub sogenannte **Direct Methods**.  
Diese unterscheiden sich von Messages dadurch, dass:

- sie **synchron** aufgerufen werden  
- sie **einen Rückgabewert** erwarten  

Peakboard kann damit nicht nur reagieren, sondern dem aufrufenden System direkt eine **Quittung oder Antwort** zurückgeben.

Für jede Methode wird in Peakboard ein Eintrag in der **Methodentabelle** angelegt.  
Im folgenden Beispiel wird die Methode **`PostAlert`** definiert.

Die Methode:
- empfängt eine JSON-Payload  
- wertet den Alarmtyp aus  
- gibt als Antwort ein JSON-Objekt mit dem Namen des Peakboards zurück  

Der Scriptcode zeigt außerdem:
- wie der JSON-Payload über `json.DataAsJson` gelesen wird  
- wie mit `json.parse(...)` ein dynamisches Objekt erzeugt wird  
- wie direkt auf Properties wie `AlertType` zugegriffen werden kann  

![image_1](/assets/images/data-sources/azure-iot-hub/datenquellen-iot-hub-05.png)

Der zugehörige Methoden-Aufruf kann – ähnlich wie beim Message-Test – direkt im **Azure-Portal über den Method-Testdialog** ausgelöst werden:

![image_1](/assets/images/data-sources/azure-iot-hub/datenquellen-iot-hub-06.png)

---

## Nachrichten von Peakboard an den IoT Hub senden

Der dritte Kommunikationsweg ist das **aktive Senden von Nachrichten von Peakboard in die Cloud**.

Dies geschieht über ein Script, das z. B.:
- an ein Button-Event  
- an einen Workflow  
- oder an ein beliebiges Benutzer-Event gebunden ist  

Im folgenden Beispiel ist das Script an das **Tapped-Event eines Buttons** gebunden.  
Beim Klick wird ein JSON-Objekt erzeugt und an den Azure IoT Hub gesendet.

Das Beispiel zeigt außerdem, wie:
- ein dynamisches Objekt erzeugt wird  
- Properties durch einfaches Zuweisen automatisch entstehen  
- das Objekt als JSON serialisiert und gesendet wird  

![image_1](/assets/images/data-sources/azure-iot-hub/datenquellen-iot-hub-07.png)

---

## Zusammenfassung

Die Azure IoT Hub Datenquelle eignet sich besonders, wenn Peakboard:

- **aktiv als Device** in einer IoT-Architektur auftreten soll  
- **bidirektionale Kommunikation** erforderlich ist  
- sowohl **Events**, **Methoden** als auch **eigene Status- oder Steuerdaten** verarbeitet werden sollen  

Für reine Event-Verarbeitung ohne Device-Konzept empfiehlt sich dagegen die **Azure Event Hub Datenquelle**.
