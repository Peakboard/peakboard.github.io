---
layout: article
title: SAP
menu_title: SAP
description: Information über SAP Daten in Peakboard
lang: de
weight: 1100
ref: dat-1100
redirect_from:
  - /data_sources/SAP/10-de-sap.html
---
Die Anbindung an SAP erfolgt über Direct RFC. 
Hier kommuniziert die Peakboard Box direkt mit einem SAP-Applikationsserver. 
Ohne Middleware und ohne die Notwendigkeit händischer Vorkonfiguration.

<div class="box-tip" markdown="1">**Hinweis**

Die Anbindung per SAP Gateway ist nicht mehr empfohlen und wird standardmäßig vom Peakboard Designer nicht mehr unterstützt.
Alle für Peakboard relevanten Daten können am einfachsten per Direct RFC angebunden werden.
</div>

Um die SAP Datenquelle anzubinden, wählst du unter [Daten hinzufügen] die Datenquelle [SAP] aus. (1)

![SAP Daten hinzufuegen](/assets/images/data-sources/sap/de_SAP-add.png)

Im folgenden Dialog kann zwischen einem einzelnen Anwendungsserver und dem Lastausgleich gewählt werden.
Es ist technisch nicht möglich auf SAP Transaktionen zuzugreifen.
Die entsprechenden Felder im Bereich [Verbindung] müssen mit den gewohnten SAP Logon-Daten ausgefüllt werden. (2)

Der eigentliche Zugriff auf SAP wird über eine XQL-Anweisung formuliert.
Damit du die XQL-Anweisung nicht komplett von Hand eingeben musst, kannst du über den Button [Vorlagen] ein Muster einfügen. (3)
Der Screenshot zeigt eine Anweisung auf eine simple SAP-Tabelle. Weitere Infos und Beispiele zu XQL findest du im Bereich [SAP mit XQL](/data_sources/SAP/de-xql.html).

Zur Plausibilitätsprüfung der Daten klickst du auf den Button [Daten Laden], um eine Vorschau zu generieren. (4)

![SAP Saten konfigurieren](/assets/images/data-sources/sap/de_SAP-config-01.png)

Danach bestätigst du die Erstellung der Datenquelle mit einem Klick auf den Button [OK]. (5)

![SAP Daten konfigurieren](/assets/images/data-sources/sap/de_SAP-config-02.png)