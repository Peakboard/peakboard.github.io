---
layout: article
title: OPC UA
menu_title: OPC UA
description: Information über OPC UA Daten in Peakboard
lang: de
weight: 2400
ref: dat-2400
redirect_from: 
 - /data_sources/de-opc-ua.html
 - /data_sources/22-de-opc-ua.html
  
---

![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-01.png)

Wie jede andere Peakboard-Datenquelle benötigt auch die OPC UA-Datenquelle einen Namen (1).

Ein [Client-Zertifikat] (2) ist erforderlich. Dieses Zertifikat wird als Ganzes (öffentlicher + privater Schlüssel) auf der Client-Seite gespeichert. Anschließend muss der Teil mit dem öffentlichen Schlüssel an den Server übertragen und als vertrauenswürdiges Zertifikat gespeichert werden (einzige Ausnahme: der Endpunkt "none:none:?" wird verwendet).

![image_2](/assets/images/data-sources/opc-ua/data-source-opc-ua-02.png)

* (1 blau): Wählen Sie einen Zertifikatspeicher. Für ein Client-Zertifikat muss der Speicher [Mein] verwendet werden. Dieser sollte beim Öffnen des Client-Zertifikatsdialogs als Standard eingestellt sein.
* (2 blau): [Importieren] Sie ein Zertifikat (sollte eine .pfx, .p12, .p7b Datei sein) oder erstellen Sie ein neues Zertifikat (siehe 2. b.)
* (3 blau): Exportieren Sie das Zertifikat mit der Aktion [exportieren] als .crt-Datei (öffnen Sie das Menü mit dem kleinen Dreieck). Zur Ansicht des Zertifikats oder für spezielle Aktionen öffnen Sie das Zertifikat im Windows-Zertifikatsbetrachter mit der Aktion [öffnen].
* (4 blau): [Wählen] Sie das Zertifikat aus oder [Abbrechen], wenn Sie Ihre Auswahl verwerfen möchten (hinzugefügte Zertifikate werden durch Klicken auf [Abbrechen] nicht gelöscht)

![image_3](/assets/images/data-sources/opc-ua/data-source-opc-ua-03.png)


*Neues Zertifikat erstellen*

* Fügen Sie alle erforderlichen Informationen in den oberen Eingabeblock ein. Ändern Sie notwendige Informationen im unteren Eingabeblock. Meistens müssen hier keine Änderungen vorgenommen werden.

Fügen Sie die URL zum OPC UA Server ein (3). Sollte wie folgt aussehen ( *opc.tcp://<host>.<domain>:<port>[/<path>]* )
Die Server-URL kann über die Schaltfläche [{ }] in einem Skript eingegeben werden. 

<div class="box-tip" markdown="1">
Note:

Dieses Skript wird nur einmal ausgeführt, nämlich beim Verbindungsaufbau zum Server beim Start!
</div>

Laden Sie die Endpunkte des Servers über die Schaltfläche [Aktualisieren] rechts neben der Endpunktauswahl (4). 
Wenn ein Zertifikats-Popup angezeigt wird, akzeptieren Sie das Server-Zertifikat. 
Wählen Sie anschließend den Endpunkt Ihrer Wahl. 
Die Endpunkte unterscheiden sich durch ihre Verschlüsselungs- und Signierstufen und Algorithmen.

Falls gewünscht, verwenden Sie eine Authentifizierungsmethode (Benutzername, Zertifikat) (5). 
Die OPC-UA-Authentifizierung wird verwendet, um den OPC-UA-Benutzer gegenüber dem Server zu authentifizieren. 

<div class="box-tip" markdown="1">
Note: 

Client- und Server-Zertifikat werden verwendet, um den Client und den Server gegeneinander zu authentifizieren und unterscheiden sich somit von der Benutzerauthentifizierung.
</div>

[Verbinden] mit dem Server (6). Wenn die Verbindung funktioniert, sind alle eingegebenen Informationen gültig.

Ist bereits eine OPC UA Verbindung hinterlegt (Personal/Hub/Visualisierung), kann diese mit dieser Schaltfläche verwendet werden.

<div class="box-tip" markdown="1">
Note:

Zertifikate müssen noch erstellt und akzeptiert werden (um das Serverzertifikat zu akzeptieren, laden Sie es neu und wechseln Sie den Endpunkt).
</div>

### OPC UA Data Handling

![image_4](/assets/images/data-sources/opc-ua/data-source-opc-ua-04.png)

*Wählen die Kommunikationsart der Datenquelle*

* **Subscriptions**: Die von OPC UA definierten Abonnements. Dies sollte der richtige Weg sein, sofern auf dem Server verfügbar.
* **Variables**: Ziehen Sie Knotenwerte nach einer vordefinierten Zeitspanne (Reload Interval). Es können nur variable Knoten verwendet werden, Objekte und ihre Ereignisse sind nicht verfügbar.

[Abonnementspezifische Einstellungen bearbeiten] (2). Sollte nur durchgeführt werden, wenn Sie wissen, was Sie tun. 

Wähle einen Nachrichtentyp (3):
* Simple: Speichern Sie die letzte Nachricht für jedes Abonnement.
* Advanced: Speichern Sie die letzten Wertaktualisierungen (Betrag = Warteschlangengröße).

Verwalten Sie Ihre Abonnements (4).
* Durch direktes Anklicken oder Öffnen des Menüs und Auswahl von [Durchsuchen] wird der Knoten-Browser geöffnet, der alle Knoten auf dem Server sucht (eine Verbindung ist erforderlich) (siehe 4. a.).
* Mit [Manuell hinzufügen] können Knoten anhand ihrer Knoten-ID und ihres Namensraums hinzugefügt werden, ohne den Browser zu verwenden (kann offline durchgeführt werden) (siehe 4. b.).

<div class="box-tip" markdown="1">
Note:

Der "Titel" eines abonnierten Knotens wird verwendet, um auf diesen Knoten innerhalb der Peakboard-Visualisierung zuzugreifen.
</div>

![image_5](/assets/images/data-sources/opc-ua/data-source-opc-ua-05.png)

Der Durchsuchen-Dialog zeigt den Baum der Knoten, die auf dem angeschlossenen OPC UA Server gespeichert sind. Durch Auswählen eines Knotens wird ein neues Abonnement hinzugefügt, durch Abwählen wird das entsprechende Abonnement entfernt.

![image_6](/assets/images/data-sources/opc-ua/data-source-opc-ua-06.png)

Der Titel, der Namensraum und der Bezeichner eines Knotens können bearbeitet werden.
Namespace und Identifier können mit einem Skript versehen werden. Dieses Skript wird nur einmal ausgeführt, wenn der OPC UA Server beim Start abonniert wird.

Wenn eine Verbindung zum Server möglich ist, kann die Schaltfläche [Knoteninfo holen] verwendet werden, um zusätzliche Knoteninformationen (Knotenklasse, Datentyp, ...) vom Server zu lesen. 

Node Klassen:
* **Variable**: Hat einen Wert, der vom Server gelesen wird.
* **Object**: Verfügt über Ereignisse, die im Dialogfeld [OPC UA Abonnementelement bearbeiten] abonniert werden können. Das Abonnieren von Ereignissen kann über die Schaltfläche [Hinzufügen] unter der Tabelle [Ereignisfilter] erfolgen (eine Serververbindung ist erforderlich).

Aktivieren Sie den Listener, um zu prüfen, ob alle Abonnements richtig definiert sind. Der Listener funktioniert genauso wie die Datenquelle in der späteren Visualisierung.