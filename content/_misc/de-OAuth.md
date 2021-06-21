---
layout: article
title: Verbinden von Anwendungen über OAuth mit Peakboard
menu_title: Verbinden von Anwendungen über OAuth mit Peakboard
description: Verbinden von Anwendungen über OAuth mit Peakboard
lang: de
weight: 725
ref: misc-725
redirect_from:
---

Hier erfährst du, wie du die OAuth Authentifizierung deiner Anwendungen mit Peakboard nutzen kannst.

#### 1. Auf Seite der zuzufügenden Anwendung:
a. API-Verwaltung des anzubindenden Dienstes öffnen.
b. eventuell neues Projekt/Anwendung/ClientID anlegen
c. dem angelegten Projekt die Callback URL (Redirect URL) "https://www.peakboard.com/oauth2-callback/" zufügen
(Die hinterlegte Callback URL musst in jedem Zeichen mit der aus dem Peakboard Designer übereinstimmen)

#### 2. Im Peakboard Designer die Anwendung hinzufügen:
a. neue Resource mit entsprechendem Datenformat anlegen (Das Format in welchem die anzusprechende Anwendung Daten zurückgibt, meistens json)
b. als Autorisierung "OAuth" wählen
c. Über den Button "Request New Token" das Autorisierungsfenster öffnen

<div class="box-notification" markdown="1">
Falls ein Preset verwendet wird, kann der Schritt 2.1 übersprungen und direkt mit dem Schritt 2.2 fortgefahren werden.
</div>

#### 2.1 Kein Preset verwenden
a. bei Preset "Custom" auswählen
b. als Grant Type den verwendeten Grant Type des anzubindenden Dienstes auswählen
- OAuth2 - Authorization Code Flow: Meist genutzter Grant Type bei OAuth2
- OAuth2 - Password Code Flow: Sollte aus Sicherheitsaspekten nur verwendet werden, falls die anzubindende Anwendung keine Alternative bietet
- OAuth1: Wird für Anwendungen genutzt, die nur OAuth1 und noch kein OAuth2 unterstützen
c. je nach gewähltem Grant Type die Request URL, Authorization URL und Access Token URL beim Anbieter der Anwendung nachschauen und eintragen.
- Request URL (nur OAuth1, URL zum Anfragen des initialen Request Token)
- Authorization URL (OAuth1+OAuth2, URL des Autorisierungsservers)
- Access Token URL (OAuth1+OAuth2, URL zum Anfragen/Erneuern des Access Tokens)

#### 2.2 Preset verwenden
a. Preset auswählen (dabei werden der Grant Type, sowie Request URL, Authorization URL und Access Token URL automatisch ausgefüllt)

#### 3. Nutzerspezifische Daten zur Anwendung eingeben
a. Die im Schritt 1 erhaltene ClientID eintragen
b. Das im Schritt 1 erhaltene ClientSecret eintragen
c. bestimmt Anfragen benötigen bestimmte Scopes. Alle benötigten Scopes für die geplante Anfrage eintragen. Mehrere Scopes werden durch ein Leerzeichen getrennt.
d. Fall benötigt den Access Type angeben. Dieser wird meistens nicht benötigt (außnahme Google Cloud Platform). Wird bei den Presets eventuell direkt mit ausgefüllt falls der entsprechende Dienst einen AccessType unterstütz, kann jedoch auch auf Wunsch entfernt werden.

#### 4. Peakboard der Anwendung gegenüber Autorisieren
a. Den "Request Token" Button drücken. Anschließend öffnet sich automatisch ein Browserfenster.
b. Im neu geöffneten Browserfenster den Anmeldevorgang der Anwendung durchführen.
c. Falls die Anmeldung erfolgreich war, schließt sich das Browserfenster und der "Request New Token" Button ist mit "Authorized - Update Token" beschriftet.
d. Damit ist die Autorisierung abgeschlossen.

#### 5. Allgemeine Infos zu weiteren Vorgehensmöglichkeiten
a. Die URL der neuen Webresource wird nun mit der Autorisierung ausgeführt. Hier können nun Anfragen an die API gestellt werden.
Die genaue Url muss dabei bei der entsprechenden Anwendung ermittelt werden. Aktuell sind nur Http-GET Anfragen möglich.
b. Über den "Authorized - Update Token" Button kann die vorhandene Autorisierung angepasst werden.
c. Über die API-Verwaltung der Anwendung kann die Autorisierung für Peakboard bei Wunsch wieder entfernt werden (Falls nicht von der Anwendung anders vorgegeben).
