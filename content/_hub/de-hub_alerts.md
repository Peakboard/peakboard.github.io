---
layout: article
product: hub
title: Alerts
menu_title: Alerts
description: Peakboard Hub - Alerts
lang: de
weight: 900
ref: hub-900
redirect_from:
---

Peakboard Hub Alerts sind ein Instrument für die Echtzeitüberwachung und -reaktion in deiner Betriebsumgebung.
Sie helfen dir dabei die Effizienz und Reaktionszeiten in deinem Unternehmen weiter zu verbessern.

## Peakboard Alerts im Peakboard Hub

Du findest den Bereich für die Peakboard Hub Alerts im Menüpunkt [Alerts] (1). Das Fenster ist in drei Bereiche aufgeteilt.

![Peakboard Alerts](/assets/images/hub/de_hub_alerts-01.png)

### New Alerts (2)

Hier werden Alerts angezeigt, die neu eingegangen sind, die aber noch nicht bearbeitet wurden.
Ein Alert besteht dabei immer aus der Anzeige um welche Art von Alert es sich handelt, Datum und Uhrzeit des Alerts, Gerätenamen sowie der im Alert enthaltenen Nachricht.
Du kannst die Liste der eingegangenen Alerts neu laden (a), alle Alerts als gelöst markieren (b) oder alle Alerts löschen (c).
Du kannst auch einzelne Alerts als gelöst markieren (d) oder löschen (e)

### Solved Alerts (3)

Sobald du einen Alert bearbeitet und als gelöst markiert hast, wird er hier aufgeführt.
Du kannst alle Alerts mit einem Klick auf das Mülleimer-Symbol (f) löschen oder einzelne Alerts löschen.

### Alert Settings (4)

Hier kannst du E-Mail-Adressen hinzufügen, die benachrichtigt werden, wenn ein Alert ausgelöst wird.
Klicke auf den [+ Add] Button (g) um eine neue Empfänger E-Mail-Adresse hinzuzufügen.
Bereits angelegte Adressen kannst du mit der Checkbox (h) vor der jeweiligen Adresse deaktivieren oder aktivieren.
Mit einem Klick auf das Mülleimer-Symbol (i) kannst du die Einträge löschen.

## Einen Alert senden

Du kannst aus deiner Anwendung heraus die verschiedenen Alerts senden. Nutze dafür einfach den vorgefertigten Building Block [Alarm senden] (1) aus dem Bereich [Peakboard Hub] unter [In externen Systemen veröffentlichen] im Hauptbereich [FUNKTIONEN].

Wähle dazu den Alert-Typ (2) aus den du versenden möchtest und hänge dahinter die zu sendende Nachricht an (3). Diese kann beliebig komplex werden und auch Variablen o.ä. enthalten. Im Beispiel-Screenshot wird die Eingabe eines Textfelds Namens [Info_Text] als Nachricht genutzt.

![Alert senden](/assets/images/hub/de_hub_alerts-02.png)

Auf diese Weise kannst du Alerts beispielsweise manuell per Textfeld und Button Control versenden oder automatisierte Alerts beim Eintreten bestimmter Konditionen automatisiert senden.

## Die verschiedenen Alert-Typen

Es gibt drei verschiedene Alert-Typen, die für unterschiedliche Einsatzzwecke gedacht sind.

### Info Alerts

`peakboardhub.sendinfo('Dies ist eine Informationsnachricht')`
Informationsnachrichten werden verwendet, um beispielsweise allgemeine Statusaktualisierungen oder unkritische Informationen zu übermitteln.

### Warning Alerts

`peakboardhub.sendwarning('Warnung: Temperatur überschreitet empfohlenes Level')`
Warnmeldungen werden verwendet, um auf potentielle Probleme oder Bedingungen hinzuweisen, die möglicherweise deine Aufmerksamkeit benötigen oder weiterer Nachforschung bedürfen.

### Problem Alerts

`peakboardhub.sendproblem('Kritischer Fehler: Anwendung abgestürzt')`
Problemmeldungen werden verwendet, um kritische Probleme oder Fehler anzuzeigen, die deine sofortige Aufmerksamkeit oder Lösung erfordern.
