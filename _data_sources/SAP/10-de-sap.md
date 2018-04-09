---
layout: article
title: SAP
menu_title: SAP
description: Information über SAP Daten in Peakboard
lang: de
ref: dat-10
---
Diese Seite erklärt die einzelnen Features beim Zugriff auf eine SAP-Datenquelle von Peakboard aus. Unter dem folgenden Link finden Sie ein Tutorial, wie generell externe Datenquellen konfiguriert und an Peakboard-Elemente gekoppelt werden:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle]()

Die Anbindung an SAP kann über verschiedene Wege erfolgen. Welche davon für Ihren Fall am besten ist, hängt von mehreren Faktoren ab, die im Folgenden erläutert sind:

**Direct RFC**

:	Im Fall von Direct RFC kommuniziert die Box direkt mit einem SAP-Applikationsserver. Ohne Middleware und ohne die Notwendigkeit auf SAP größeres Dinge konfigurieren zu müssen. In der Regel ist das für nahezu alle Kunden die beste Zugriffsoption.

**SAP Gateway**

:	Das SAP Gateway ist ein Modul innerhalb von SAP, das über den Transaktionscode SEGW erreichbar ist. Dort werden üblicherweise RFC-Funktionsbausteine als OData-Service bereitgestellt. Eine Einführung in SAP Gateway finden Sie entweder über Google oder [hier.](https://blogs.sap.com/2013/01/24/a-simple-overview-on-sap-netweaver-gateway/) Um sich mit Peakboard an einen Gateway Service zu verbinden, brauchen Sie mindestens die URL des Services und den Namen des Entity Sets. Bitte beachten Sie, dass ein großer Nachteil diese Zugriffsmethode der Entwicklungsaufwand ist, der möglicherweise auf Gateway-Seite nötig ist.

**Peakboard-Bridge**

:	In der ersten Generation von Peakboard war die Bridge nötig, um mit SAP zu kommunizieren. Seit der zweiten Generation (ca. Mai 2017) ist diese Feature obsolet und sollte nicht mehr verwendet werden.

## Zugriff über „Direct RFC“

Um die Datenquelle an SAP anzubinden, müssen die Felder Client (Mandant), User Name, Password und Sprache (mit dem SAP-üblichen Sprachkürzel) ausgefüllt werden. Darüberhinaus muss der Tabreiter ‚Direct RFC‘ aktiviert werden. Auf diesem Reiter ist der SAP-Applikationsserver und die Systemnummer anzugeben.

![image_1](/assets/images/Data_Sources/SAP/SAP01.png)

Der eigentliche Zugriff auf SAP wird über XQL-Anweisung formuliert. Damit Sie die XQL-Anweisung nicht komplett von Hand eingeben müssen, können Sie sich über den Template-Knopf ein Muster einfügen lassen. Der folgende Screenshot zeigt eine Anweisung auf eine simple SAP-Tabelle. Weitere Infos und Beispiele zu XQL finden Sie auf einer weiteren Seite.

![image_1](/assets/images/Data_Sources/SAP/SAP02.png)

Die nächsten Schritte sind der Load-Button, um die Spalten bzw. die Metadaten zu laden und der Preview-Button, um die Daten auf Plausibilität zu prüfen.

![image_1](/assets/images/Data_Sources/SAP/SAP03.png)

![image_1](/assets/images/Data_Sources/SAP/SAP04.png)

## Zugriff über SAP Gateway

Basis für den Zugriff ist ein Gateway Service, der eine Liste aller im Moment eingeloggter User zurückgibt. Der folgende Screenshot zeigt den Service in der Entwurfsansicht der Transaktion SEGW:

![image_1](/assets/images/Data_Sources/SAP/SAP05.png)

Die neu angelegte Datenquelle benötigt einen eindeutigen Namen sowie User-Name und Passwort des SAP-Systems. Im Reiter SAP Gateway tragen Sie bitte die URL des Gateway Service ein. Danach klicken Sie auf den kleinen Knopf mit den drei Punkten, um alle Entity Sets in den Auswahl-Dialog zu laden, die unter dieser Service-URL verfügbar sind.

![image_1](/assets/images/Data_Sources/SAP/SAP06.png)

Sobald Sie sich für eine Entity entschieden haben, bestätigen Sie mit OK. Jetzt werden die Spalten und ihre Datentypen geladen und angezeigt. Damit ist die Konfiguration beendet. Prüfen Sie die Daten auf Plausibilität, in dem Sie sie im Preview-Fenster betrachten.

![image_1](/assets/images/Data_Sources/SAP/SAP08.png)

![image_1](/assets/images/Data_Sources/SAP/SAP09.png)
