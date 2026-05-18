---
layout: article
title: OPC UA
menu_title: OPC UA
description: Peakboard mit einem OPC UA Server verbinden, Client-Zertifikate verwalten und Knoten abonnieren
lang: de
weight: 1900
ref: dat-1900
redirect_from: 
 - /data_sources/de-opc-ua.html
 - /data_sources/22-de-opc-ua.html
 - /data_sources/OPCUA/de-opc-ua.html
 - /data_sources/OPC_UA/de-Array-OPCUA.html
 - /misc/de-Array-OPCUA.html
 - /data_sources/OPCUA/de-Array-OPCUA.html
---

OPC UA (Open Platform Communications Unified Architecture) ist das Standardprotokoll für die Maschine-zu-Maschine-Kommunikation in der industriellen Automatisierung und wird von der [OPC Foundation](https://opcfoundation.org) gepflegt. Mit der OPC UA Datenquelle verbindest du Peakboard mit einem OPC UA Server, sicherst die Verbindung über Zertifikate und abonnierst die Knoten, die du visualisieren möchtest.

## Datenquelle hinzufügen

Wähle im Explorer den Knoten [Data] aus und klicke auf [Add data source]. Wähle im Dialog **OPC UA** (1).

![Dialog Datenquelle hinzufügen mit ausgewähltem OPC UA](/assets/images/data-sources/opc-ua/opc-ua-01-add-data-source.png)

## Verbindung konfigurieren

Im Dialog [Add OPC UA data] gibst du alles ein, was für den Zugriff auf den Server nötig ist.

![OPC UA Konfigurationsdialog](/assets/images/data-sources/opc-ua/opc-ua-02-configuration.png)

* **Data source name** (1): Wie jede andere Datenquelle benötigt auch die OPC UA Datenquelle einen Namen. Über diesen Namen wird in der Peakboard-Anwendung auf die Daten zugegriffen.
* **Load client certificate** (2): Ein Client-Zertifikat ist erforderlich (einzige Ausnahme: der *none / none* Endpunkt). Das Zertifikat wird als Ganzes (öffentlicher + privater Schlüssel) auf der Client-Seite gespeichert. Der öffentliche Teil muss anschließend auf den Server übertragen und dort als vertrauenswürdiges Zertifikat hinterlegt werden.
* **Server URL** (3): Die Adresse des OPC UA Servers in der Form `opc.tcp://<host>.<domain>:<port>[/<path>]`. Über das Papierkorb-Symbol leerst du das Feld, über das `{ }`-Symbol kann die URL per Skript gesetzt werden. Eine per Skript gesetzte URL wird nur einmal ausgewertet, nämlich beim Verbindungsaufbau zum Server beim Start.
* **Endpoint** (4): Über das Aktualisieren-Symbol lädst du die vom Server angebotenen Endpunkte. Wird ein Zertifikats-Popup angezeigt, akzeptiere das Server-Zertifikat. Die Endpunkte unterscheiden sich durch ihre Verschlüsselungs- und Signierstufen und Algorithmen. Aktiviere vorab die Checkbox [Trust All], um die Server-Zertifikatsabfragen zu überspringen.
* **Authentication** (5): Optional authentifizierst du den OPC UA Benutzer gegenüber dem Server (Anonymous, UserName oder Certificate). Diese Benutzerauthentifizierung ist unabhängig von den Client-/Server-Zertifikaten, die Client und Server gegeneinander authentifizieren.
* **Connect** (6): Teste die Verbindung. Funktioniert sie, sind alle eingegebenen Informationen gültig. Ist bereits eine Verbindung an anderer Stelle hinterlegt (Personal / Peakboard Hub / Anwendung), kann sie über [Reuse existing connection] wiederverwendet werden — Zertifikate müssen trotzdem erstellt und akzeptiert werden.
* **Communication type** (7): siehe [Kommunikationsart wählen](#kommunikationsart-wählen) weiter unten.

## Client-Zertifikat verwalten

Ein Klick auf [Load client certificate] öffnet den Dialog [Manage Certificates].

![Dialog Zertifikate verwalten](/assets/images/data-sources/opc-ua/opc-ua-03-manage-certificates.png)

* **Certificate usage** (1): Wähle den Verwendungsbereich. Für ein OPC UA Client-Zertifikat wählst du **OPC UA**.
* **Zertifikatspeicher** (2): Wechsle zwischen [My certificates], [Root], [Trusted people] und [Untrusted]. Ein Client-Zertifikat muss im Speicher [My certificates] liegen.
* **Import / Create** (3): Mit [Import] importierst du ein vorhandenes Zertifikat (`.pfx`-, `.p12`- oder `.p7b`-Datei), mit [Create] erstellst du ein neues (siehe unten). Zum Exportieren oder Ansehen verwendest du die Aktionen am Zertifikatseintrag — [export] schreibt eine `.crt`-Datei, [open] öffnet es im Windows-Zertifikatsbetrachter.
* **Select / Cancel** (4): Mit [Select] übernimmst du das markierte Zertifikat, mit [Cancel] verwirfst du die Auswahl. Hinzugefügte Zertifikate werden durch [Cancel] nicht gelöscht. Mit [Esc] hebst du die aktuelle Auswahl auf.

## Neues Zertifikat erstellen

[Create] öffnet den Dialog [New OPC UA client certificate].

![Dialog Neues OPC UA Client-Zertifikat](/assets/images/data-sources/opc-ua/opc-ua-04-new-certificate.png)

* Fülle die Zertifikatsangaben aus (1). Der obere Block (Common name, Organization, …) beschreibt den Zertifikatsinhaber; Gültigkeit, RSA-Schlüsselstärke und Signaturalgorithmus sind mit sinnvollen Standardwerten vorbelegt und müssen meist nicht geändert werden. Optional ergänzt du IP-Adressen und Domainnamen, für die das Zertifikat gültig sein soll.
* Klicke auf [Create] (2), um das Zertifikat zu erzeugen. Es steht danach im Speicher [My certificates] zur Auswahl bereit.

## Mit dem Server verbinden

Trage die [Server URL] ein (3 im Konfigurationsdialog), aktiviere die Checkbox [Trust All], falls du die Server-Zertifikatsabfragen nicht manuell behandeln möchtest, und lade über das Aktualisieren-Symbol (4) die Endpunkte. Wähle den gewünschten Endpunkt, lege bei Bedarf eine [Authentication]-Methode (5) fest und klicke auf [Connect] (6). Eine Bestätigungsmeldung zeigt eine erfolgreiche Verbindung an.

## Kommunikationsart wählen und Abonnements verwalten

Sobald die Verbindung steht, ersetzt der Button **Disconnect** (1) den Button [Connect]. Die Optionen zur Datenverarbeitung findest du in den Bereichen **Specify details** und **Subscriptions**.

![OPC UA Datenverarbeitung nach dem Verbinden](/assets/images/data-sources/opc-ua/opc-ua-05-data-handling.png)

* **Communication type** (2):
  * **Subscription**: Der von OPC UA definierte Abonnementmechanismus. Das ist die empfohlene Option, sofern der Server sie unterstützt. Über [Edit settings] passt du abonnementspezifische Optionen an — ändere diese nur, wenn du weißt, was du tust.
  * **Variables**: Knotenwerte werden nach einem festen [Reload Interval] abgerufen. Es können nur variable Knoten verwendet werden; Objekte und ihre Ereignisse stehen nicht zur Verfügung.
* **Message type** (3): Bestimmt, wie Wertaktualisierungen gespeichert werden. *Simple* behält die letzte Nachricht pro Abonnement, *Advanced* die letzten Wertaktualisierungen bis zur konfigurierten Warteschlangengröße.
* **Subscriptions** (4): Die Liste der abonnierten Knoten. Der **Title** eines abonnierten Knotens wird verwendet, um in der Peakboard-Anwendung auf ihn zuzugreifen.
* **Manage subscriptions** (5): Ein Klick darauf (oder [Browse] aus dem zugehörigen Menü) öffnet den Knoten-Browser, der den Baum der auf dem verbundenen Server gespeicherten Knoten zeigt — eine Verbindung ist erforderlich. Durch Auswählen eines Knotens wird ein Abonnement hinzugefügt, durch Abwählen wird das entsprechende Abonnement entfernt. Mit [Add manually] kann ein Knoten anhand seiner Knoten-ID und seines Namensraums ohne Verbindung (offline) hinzugefügt werden.
* **Enable listener** (6): siehe [Daten überprüfen](#daten-überprüfen) weiter unten.

Für jeden abonnierten Knoten kannst du **Title**, **Namespace** und **Identifier** bearbeiten. Namespace und Identifier können per Skript gesetzt werden; dieses Skript wird nur einmal ausgeführt, wenn das Abonnement beim Start eingerichtet wird. Bei bestehender Verbindung liest [Fetch Node Info] zusätzliche Informationen (Knotenklasse, Datentyp, …) vom Server:

* **Variable**: Hat einen Wert, der vom Server gelesen wird.
* **Object**: Hat Ereignisse, die im Dialog [Edit OPC UA Subscription Item] über den [Add]-Button unter der Tabelle [Event Filter] abonniert werden können (eine Serververbindung ist erforderlich).

## Knoten durchsuchen und auswählen

[Browse] aus dem Menü von [Manage subscriptions] öffnet den Knoten-Browser.

![OPC UA Knoten-Browser-Dialog](/assets/images/data-sources/opc-ua/opc-ua-06-browse-nodes.png)

* **Knotenbaum** (1): Der Adressraum des verbundenen Servers. Klappe einen Zweig auf, um bis zu seinen variablen Knoten vorzudringen.
* **Knoten abonnieren** (2): Aktiviere die Checkbox neben einem Knoten, um ein Abonnement hinzuzufügen; deaktiviere sie, um das Abonnement wieder zu entfernen.
* **Attributes** (3): Die OPC UA Attribute des ausgewählten Knotens (NodeId, NodeClass, DataType, aktueller Value, AccessLevel, …) — hilfreich, um zu bestätigen, dass du den richtigen Knoten gewählt hast.
* **Aktualisieren** (4): Liest den Adressraum des Servers neu ein.
* **Select / Cancel** (5): [Select] übernimmt die markierten Knoten und kehrt zum Konfigurationsdialog zurück; [Cancel] verwirft die Änderungen.

## Daten überprüfen

Klicke im Bereich **Preview** auf [Enable listener] (6), um zu prüfen, ob alle Abonnements korrekt definiert sind. Der Listener verhält sich genauso wie die Datenquelle in der laufenden Peakboard-Anwendung. Wenn alles passt, bestätigst du den Dialog mit [OK].

## Mit Building Blocks auf den Server schreiben

Neben dem Lesen von Daten kann die OPC UA Datenquelle aus einem Skript heraus auch auf den Server zurückschreiben. Im Building-Blocks-Editor liegen die OPC UA Blöcke unter **FUNCTIONS → Publish to external systems → OPC UA** (1).

![OPC UA Building Blocks](/assets/images/data-sources/opc-ua/opc-ua-07-building-blocks.png)

* **Set variable** (2): Schreibt einen Wert in einen beschreibbaren variablen OPC UA Knoten. Das ist der aktualisierte Block, mit dem du einen Wert aus der Peakboard-Anwendung zurück an den Server schreibst.
* **Call method** (3): Ruft eine vom Server über einen Objektknoten bereitgestellte OPC UA Methode auf — ohne Rückgabewert.
* **Call method with return value** (4): Ruft eine OPC UA Methode auf und speichert deren Ergebnis, sodass der Rückgabewert im weiteren Skript verwendet werden kann.

Jeder Block läuft im Kontext der OPC UA Verbindung; wähle innerhalb des Blocks die Verbindung und die Zielvariable bzw. die Methode (Objekt) aus.
