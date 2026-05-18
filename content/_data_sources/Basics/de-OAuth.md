---
layout: article
title: Verbinden von Anwendungen über OAuth mit Peakboard
menu_title: Verbindungen mit OAuth
description: Verbinden von Anwendungen über OAuth mit Peakboard
lang: de
weight: 40
ref: dat-40
redirect_from:
 - /misc/de-OAuth.html
---

Hier erfährst du, wie du die OAuth-Authentifizierung deiner Anwendungen mit Peakboard nutzen kannst. OAuth wird von vielen Web-APIs (z.B. Spotify, Slack, Google) verwendet, um den Zugriff auf geschützte Daten zu autorisieren, ohne Benutzername und Passwort direkt zu hinterlegen.

### 1. Auf Seite der anzubindenden Anwendung

1. API-Verwaltung des anzubindenden Dienstes öffnen
2. eventuell ein neues Projekt/eine neue Anwendung/eine ClientID anlegen
3. dem angelegten Projekt die Callback URL (Redirect URL) `https://www.peakboard.com/oauth2-callback/` zufügen (die hinterlegte Callback URL muss in jedem Zeichen mit der aus dem Peakboard Designer übereinstimmen)

### 2. Datenquelle im Peakboard Designer anlegen

Lege eine neue Datenquelle mit dem Datenformat an, in dem die anzusprechende Anwendung Daten zurückgibt – meistens JSON. Öffne dazu [Datenquelle hinzufügen] und wähle die passende Datenquelle (hier: [JSON]) aus.

![Datenquelle JSON hinzufügen](/assets/images/data-sources/oauth/oauth-01-add-data-source.png)

### 3. OAuth als Authentifizierung auswählen

Öffne im Konfigurationsdialog der Datenquelle das Auswahlfeld [Authentication Type] und wähle den Eintrag [OAuth].

![Authentifizierungstyp auswählen](/assets/images/data-sources/oauth/oauth-02-authentication-type.png)

Sobald [OAuth] ausgewählt ist (1), erscheint daneben der Button [Request new token] (2). Über diesen Button öffnest du das Fenster zur OAuth-Konfiguration.

![OAuth ausgewählt](/assets/images/data-sources/oauth/oauth-03-oauth-selected.png)

### 4. OAuth ohne Preset konfigurieren

Wenn du kein Preset verwendest, konfigurierst du die Verbindung manuell im Fenster [OAuth configuration].

![OAuth-Konfiguration ohne Preset](/assets/images/data-sources/oauth/oauth-04-oauth-configuration.png)

1. Bei [Presets] (1) den Eintrag [Custom] auswählen.
2. Bei [Grant type] (2) den vom anzubindenden Dienst verwendeten Grant Type wählen:

    - **OAuth2 - Authorization Code Flow**: der am häufigsten genutzte Grant Type bei OAuth2
    - **OAuth2 - Password Grant**: sollte aus Sicherheitsgründen nur verwendet werden, falls die anzubindende Anwendung keine Alternative bietet
    - **OAuth1**: wird für Anwendungen genutzt, die nur OAuth1 und noch kein OAuth2 unterstützen

3. Die [Callback URL] (3) ist bereits vorausgefüllt und muss exakt der in Schritt 1 hinterlegten Redirect URL entsprechen.
4. Je nach gewähltem Grant Type die [Access token URL] (4) und [Authorisation URL] (5) beim Anbieter der Anwendung nachschauen und eintragen:

    - **Access token URL** (OAuth1+OAuth2, URL zum Anfragen/Erneuern des Access Tokens)
    - **Authorisation URL** (OAuth1+OAuth2, URL des Autorisierungsservers)

5. Die in Schritt 1 erhaltene [Client ID] (6) und das [Client secret] (7) eintragen.
6. Falls die geplante Anfrage bestimmte Scopes benötigt, alle benötigten Scopes im Feld [Scope] eintragen. Mehrere Scopes werden durch ein Leerzeichen getrennt.
7. Falls benötigt, den [Access type] angeben. Dieser wird meistens nicht benötigt (Ausnahme: Google Cloud Platform).

### 5. OAuth mit Preset konfigurieren

Für viele bekannte Dienste steht ein Preset zur Verfügung. Öffne dazu das Auswahlfeld [Presets] und wähle den passenden Dienst.

![Preset auswählen](/assets/images/data-sources/oauth/oauth-05-presets.png)

Nach der Auswahl eines Presets (1) werden Grant Type, [Access token URL] (2) und [Authorisation URL] (3) automatisch ausgefüllt. Du musst nur noch die [Client ID] und das [Client secret] des Dienstes ergänzen.

![Preset ausgefüllt](/assets/images/data-sources/oauth/oauth-06-preset-filled.png)

### 6. Peakboard gegenüber der Anwendung autorisieren

1. Den Button [Request token] (8) drücken. Anschließend öffnet sich automatisch ein Browserfenster.
2. Im neu geöffneten Browserfenster den Anmeldevorgang der Anwendung durchführen.
3. War die Anmeldung erfolgreich, schließt sich das Browserfenster und der Button [Request new token] ist nun mit [Authorized - Update Token] beschriftet.
4. Damit ist die Autorisierung abgeschlossen.

### 7. Allgemeine Infos zu weiteren Vorgehensmöglichkeiten

1. Die URL der neuen Datenquelle wird nun mit der Autorisierung ausgeführt. Hier können Anfragen an die API gestellt werden. Die genaue URL muss bei der entsprechenden Anwendung ermittelt werden. Aktuell sind nur HTTP-GET-Anfragen möglich.
2. Über den Button [Authorized - Update Token] kann die vorhandene Autorisierung angepasst werden.
3. Über die API-Verwaltung der Anwendung kann die Autorisierung für Peakboard bei Bedarf wieder entfernt werden (falls nicht von der Anwendung anders vorgegeben).
