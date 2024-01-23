---
layout: article
title: MS Teams Kommunikation per MS Graph API Extension
menu_title: MS Teams Kommunikation per MS Graph API Extension
description: Informationen über die Nutzung der MS Graph API Extension für die Kommunikation mit MS Teams
lang: de
weight: 755
ref: dat-755
redirect_from:
---

Peakboard ermöglicht dir die beidseitige Kommunikation per Teams in deiner Anwendung.
Um Teams in deine Anwendung einzubinden, nutzt du die Microsoft Graph API Extension.
Lies zuerst [den Artikel zur Microsoft Graph API Extension Datenquelle](/data_sources/Extension/de-MsGraphAPI.html), um die Grundlagen zu verstehen.

Dort wird dir erklärt, wie du in Microsoft Azure eine App für die Kommunikation zwischen Peakboard und Microsoft Graph registrierst und wie du im Peakboard Designer die Microsoft Graph API Extension installierst.
Hast du diese Schritte erledigt, kannst du mit dem Aufbau deiner Anwendung zur Kommunikation in Teams in Peakboard beginnen.

## Vorbereitungen in Microsoft Azure

### App-Berechtigungen

Für die Anwendung benötigst du eine in Microsoft Azure registrierte App mit den folgenden Berechtigungen:
`user.read`, `offline_access` und `ChannelMessage.Read.All`

![Azure App Berechtigungen](/assets/images/data-sources/extension/msgraph/de_teams-01.png)

Kopiere dir zusätzlich die Tenant ID (1) und die Client ID (2) der App. Diese benötigst du später im Peakboard Designer.

### Microsoft Teams Group ID und Channel ID herausfinden

Um Nachrichten an Teams zu senden und Nachrichten zu empfangen, nutzt du einen API Call.
Für diese API Calls benötigst du die Microsoft Teams Group und Channel ID. Du kannst diese mit dem [Microsoft Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer) herausfinden. Logge dich dazu im Graph Explorer mit deinem Microsoft Account ein (1).

Rufe dann den folgenden Endpunkt auf, um eine Liste und Metadaten aller verfügbaren Teams und Gruppen zu erhalten.

`https://graph.microsoft.com/v1.0/groups`

Suche in der Antwort das Team, in dem du kommunizieren möchtest und kopiere dessen ID (2).

![Teams Group ID](/assets/images/data-sources/extension/msgraph/de_teams-02.png)

Rufe dann den folgenden Endpunkt auf und ersetze dabei [GroupID] durch deine soeben kopierte Group ID (1).

`https://graph.microsoft.com/v1.0/teams/[GroupID]/allChannels`

Suche in der Antwort den Channel, den du für die Kommunikation nutzen möchtest und kopiere dessen ID (2).

![Teams Channel ID](/assets/images/data-sources/extension/msgraph/de_teams-03.png)

## Vorbereitungen im Peakboard Designer

Das Ziel ist die Erstellung eines Messageboards, über das die gesamte Kommunikation aus der Anwendung heraus stattfinden kann.
Im linken Bereich (1) sind die im Channel vorhandenen Nachrichten aufgelistet. Im rechten Bereich (2) findest du die Antworten zu der Nachricht, die du im linken Bereich ausgewählt hast.
Im oberen Bereich gibt es ein Eingabefeld (3) und zwei Sendeoptionen. Mit [New Topic] (4) erstellst du eine neue Teams-Nachricht im Channel. Mit [Reply to selected Topic] (5) schickst du die Eingabe als Antwort auf die aktuell im linken Bereich ausgewählte Nachricht ab.

![Finale Anwendung](/assets/images/data-sources/extension/msgraph/de_teams-04.png)

### Anlegen der Variablen

Sowohl für die API Calls selbst, als auch für Skripte benötigst du später Variablen.
Lege die folgenden vier Variablen an, mache dazu einen Rechtsklick auf [Variablen] und wähle [Variable hinzufügen]

#### messageID

Gib der Variable ihren Namen (1), wähle den Datentyp String (2) und gib als Wert deine Teams ChannelID (3) ein.
Aktiviere die Checkbox [Variablen-Wert auf der Peakboard Box speichern] (4) und bestätige die Erstellung mit [OK] (5).

![Variable messageID](/assets/images/data-sources/extension/msgraph/de_teams-05.png)

Diese Variable wird in den Datenquellen genutzt, um den korrekten Teams Channel anzusprechen.

#### messageText

Gib der Variable ihren Namen (1), wähle den Datentyp String (2) und bestätige die Erstellung mit [OK] (3).

![Variable messageText](/assets/images/data-sources/extension/msgraph/de_teams-06.png)

Diese Variable wird für die Nachricht verwendet, die in das Textfeld der Anwendung eingegeben wird.

#### replyID

Für diese Variable benötigst du die ID einer Nachricht aus dem Teams Channel in dem die Kommunikation stattfinden soll.
Voraussetzung ist also, dass dort bereits eine Nachricht erstellt wurde.

Über den folgenden Endpunkt kannst du dann im Graph Explorer diese Nachricht suchen und ihre ID kopieren.
Ersetze dabei [GroupID] und [ChannelID] durch deine jeweilige Teams ID.

`https://graph.microsoft.com/v1.0/teams/[GroupID]/channels/[ChannelID]/messages/`

![Teams Nachrichten ID](/assets/images/data-sources/extension/msgraph/de_teams-07.png)

Lege jetzt im Peakboard Designer eine Variable an. Gib der Variable ihren Namen (1), wähle den Datentyp String (2) und gib als Wert die gerade herausgefundene Nachrichten ID ein (3). Aktiviere die Checkbox [Variablen-Wert auf der Peakboard Box speichern] (4) und bestätige die Erstellung mit [OK] (5).

![Variable replyID](/assets/images/data-sources/extension/msgraph/de_teams-08.png)

Diese Variable wird in den Datenquellen verwendet, um später Nachrichten auszulesen und Antworten an die korrekte Nachricht zu senden.

#### topicID

Gib der Variable ihren Namen (1), wähle den Datentyp String (2) und aktiviere die Checkbox [Variablen-Wert auf der Peakboard Box speichern] (3). Bestätige die Erstellung mit [OK] (4).

![Variable topicID](/assets/images/data-sources/extension/msgraph/de_teams-09.png)

Diese Variable wird verwendet, um die Nachrichten in der Anwendung darzustellen.

### Anlegen der Datenquellen

Um die bestehenden Nachrichten im Channel abzurufen, neue Nachrichten zu senden und Antworten auf Nachrichten abzurufen, benötigst du drei verschiedene API Calls. Im Peakboard Designer legst du dir dafür drei Microsoft Graph API Extension Datenquellen an.

#### Nachrichten abrufen - ReadMessage

Um Nachrichten abzurufen, legst du eine Datenquelle mit der Zugriffsart [Microsoft Graph User-Delegated Access] (1) an.

![MS Graph User-Delegated Access](/assets/images/data-sources/extension/msgraph/de_teams-10.png)

Gib der Datenquelle einen Namen (1) und ändere das Nachladeintervall auf 15 Sekunden (2). Gib im Bereich [Details angeben] die Client ID (3) und die Tenant ID (4) deiner registrierten App ein. Füge die Berechtigungen hinzu (5) und klicke auf den [Authenticate] Button, um dich mit deinem Microsoft Konto zu authentifizieren.

Aktiviere dann die Checkbox [CustomCall] (6) und füge den folgenden Call ein:

`https://graph.microsoft.com/v1.0/teams/[GroupID]/channels/#[messageID]#/messages/`

Ersetze dabei [GroupID] durch deine Teams Group ID. Prüfe dann den Call mit dem [Check]-Button (7) und klicke auf [Daten laden] (8) um zu prüfen, ob die Nachrichten geladen werden. Bestätige dann die Erstellung der Datenquelle mit [OK] (9).

![Datenquelle einrichten](/assets/images/data-sources/extension/msgraph/de_teams-11.png)

#### Antworten abrufen - ReadReply

Die Datenquelle zum Abrufen der Antworten auf Nachrichten wird identisch angelegt wie die erste Datenquelle, es handelt sich ebenfalls um die Zugriffsart [Microsoft Graph User-Delegated Access].

Der Custom Call sieht für diese Datenquelle wie folgt aus:

`https://graph.microsoft.com/v1.0/teams/[GroupID]/channels/#[messageID]#/messages/#[replayid]#/replies`

Ersetze auch hier [GroupID] durch deine Teams Group ID.

#### Nachrichten senden - SendMessageGraph

Der dritte API Call benötigt eine Datenquelle mit der Zugriffsart [Microsoft Graph User Functions] (1), um Nachrichten senden zu können.

![MS Graph User Functions](/assets/images/data-sources/extension/msgraph/de_teams-12.png)

Gib der Datenquelle einen Namen (1) und ändere den Nachlade-Status auf [Beim Start] (2).
Im Bereich [Details angeben] gibst du wie bei den anderen beiden Datenquellen die Client ID (3), die Tenant ID (4) und die Berechtigungen (5) ein und führst mit dem [Authenticate]-Button (6) die Authentifizierung mit deinem Microsoft Konto durch.

Jetzt musst du zwei Funktionen anlegen, mit denen du Nachrichten sendest. Eine für die Erstellung von neuen Nachrichten und eine zum Antworten auf Nachrichten. Wechsle dazu auf den Tab [Add Function] (7) und befülle die drei Felder (8) folgendermaßen.

##### Funktion 1 - Nachrichten erstellen

Name:
`sendmessage`
URL:
`https://graph.microsoft.com/v1.0/teams/[GroupID]/channels/[ChannelID]/messages`
Request Body:

```JSON
{
    "body": {
        "content": "$s_message$"
    }
}
```

Ersetze dabei in der URL die beiden Platzhalter [GroupID] und [ChannelID] durch deine jeweilige Teams ID.
Bestätige das Hinzufügen der Funktion mit einem Klick auf den [Add]-Button (9).

##### Funktion 2 - Auf Nachrichten antworten

Name:
`senddynamicreply`
URL:
`https://graph.microsoft.com/v1.0/teams/[GroupID]/channels/#[messageID]#/messages/#[replyID]#/replies`
Request Body:

```JSON
{
    "body": {
        "content": "$s_message$"
    }
}
```

Ersetze hierbei in der URL nur den [GroupID] Platzhalter durch deine Teams Group ID.
Bestätige das Hinzufügen der Funktion mit einem Klick auf den [Add]-Button (9).

Klicke dann auf [Daten laden] (10) und bestätige die Erstellung der Datenquelle mit [OK] (11).

![Datenquelle einrichten](/assets/images/data-sources/extension/msgraph/de_teams-13.png)

### Dataflows für die Datenquellen anlegen

Damit die Nachrichten optisch einwandfrei dargestellt werden können, musst du für die zwei lesenden Datenquellen einen Dataflow anlegen. Mache dazu einen Rechtsklick auf die Datenquelle und wähle [Daten mit einem Dataflow verarbeiten] (1).

![Dataflows anlegen](/assets/images/data-sources/extension/msgraph/de_teams-14.png)

#### Datenquelle ReadMessage - Dataflow DF_cleanMessage

In der Datenquelle [ReadMessage] nimmst du folgende Anpassungen vor:

* Ändere den Nachlade-Status auf [Periodisch] und wähle ein Nachladeintervall von 2 Sekunden.
* Füge eine Spalte [Index] vom Typ Number mit dem Skript `return index` hinzu, um später darauf referenzieren zu können.
* Entferne die Paragraphen Tags `<p>` in der Spalte [root_body_content] durch den Schritt [Spaltentext ersetzen], damit diese später nicht als Klartext in der Nachricht angezeigt werden.
* Füge eine Spalte [selectedMessage] vom Typ Boolean hinzu, mit der du feststellen kannst, welche Nachricht aktuell ausgewählt ist. Nutze als Skript:

```lua
if item.root_body_content == data.topic then
    return true
else 
    return false
end
```

![Dataflow cleanMessage konfigurieren](/assets/images/data-sources/extension/msgraph/de_teams-15.png)

#### Datenquelle ReadReply - Dataflow DF_cleanReply

In der Datenquelle [ReadReply] nimmst du folgende Anpassungen vor:

* Füge eine Spalte [Index] vom Typ Number mit dem Skript `return index` hinzu, um später darauf referenzieren zu können.
* Sortiere die Daten mit dem Schritt [Sortieren] nach der neu erstellten Spalte [Index] absteigend.
* Entferne die Paragraphen Tags `<p>` in der Spalte [root_body_content] durch den Schritt [Spaltentext ersetzen], damit diese später nicht als Klartext in der Nachricht angezeigt werden.

![Dataflow cleanReply konfigurieren](/assets/images/data-sources/extension/msgraph/de_teams-16.png)

## Die Anwendung im Peakboard Designer aufbauen

Nachdem alle Vorbereitungen getroffen wurden, kannst du damit beginnen, die optische Oberfläche der Anwendung aufzubauen.
Im Folgenden werden nur die benötigten Controls und Skripte erklärt. Die optische Gestaltung kannst du nach deinen Wünschen vornehmen.

### Bereich Bestehende Nachrichten anzeigen

Um die Nachrichten aus dem Teams Channel anzuzeigen, legst du ein Styled List Control (1) an und verbindest es mit dem Dataflow [DF_cleanMessage] (2). Aktiviere die Checkbox [Scrollbar] (3) und im Bereich [Logik] die Checkbox [In Skripten verwendet] (4). Gib dem Control dort einen Namen (5). Dann kannst du ein Template definieren (6), wie die Nachrichten angezeigt werden.

![Styled List hinzufügen](/assets/images/data-sources/extension/msgraph/de_teams-17.png)

Das Template im nächsten Screenshot besteht aus den folgenden Elementen:

* Rechteck Controls und ein Linien Control als Hintergrund der Nachricht, die eine bedingte Formatierung enthalten. Die bedingte Formatierung fügt den Rechtecken eine Kontur hinzu oder blendet die Linie ein und aus, wenn die Spalte [selectedMessage] true ist und die Nachricht somit in der Anwendung ausgewählt wurde.
* Ein Icon Control mit bedingter Formatierung, um anzuzeigen, ob die Nachricht aus der Anwendung oder aus Teams heraus gesendet wurde. Dafür wird geprüft, ob der Benutzer in der Spalte [root_from_user_displayName] der Benutzer der Anwendung ist oder nicht und ein passendes Icon angezeigt.
* Ein Text Control mit Datum und Uhrzeit aus der Spalte [root_createdDateTime].
* Ein Text Control mit dem Namen des Benutzers aus der Spalte [root_from_user_displayName].
* Ein Text Control mit der Nachricht aus der Spalte [root_body_content].
* Ein durchsichtiges Button Control, das über dem gesamten Nachrichtenfeld liegt. Die Checkbox [In Skripten verwendet] ist aktiviert und das Control hat einen Namen. Das Tapped Event des Buttons setzt die Variable [replyID] auf den Wert der Spalte [root_etag] der aktuellen Zeile, die Variable [topic] auf den Wert der Spalte [root_body_content] der aktuellen Zeile und lädt die Datenquellen [ReadMessage] und [ReadReply] nach. Es wird benötigt, um die passenden Antworten zur aktuell ausgewählten Nachricht anzuzeigen.

![Template bestehende Nachrichten](/assets/images/data-sources/extension/msgraph/de_teams-18.png)

### Bereich Antworten auf bestehende Nachrichten anzeigen

Um an das Linien-Control aus dem Template der bestehenden Nachrichten anzuschließen, legst du im Hintergrund ein optisch passendes Rechteck Control (1) an. Im vorliegenden Beispiel ist dessen Hintergrund transparent und das Control besitzt eine zur Linie passende Kontur.
Um jetzt die Antworten auf die Nachrichten aus dem linken Bereich anzuzeigen, fügst du auf der rechten Seite ein weiteres Styled List Control (2) hinzu. Verbinde es mit dem Dataflow [DF_cleanReply] (3) und aktiviere die Checkbox [Scrollbar] (4).
Dann kannst du das Template für die Anzeige der Antworten definieren (5).

![Styled List hinzufügen](/assets/images/data-sources/extension/msgraph/de_teams-19.png)

Das Template im nächsten Screenshot besteht aus den folgenden Elementen:

* Rechteck Controls als Hintergrund der Nachricht, die eine bedingte Formatierung enthalten. Die bedingte Formatierung fügt den Rechtecken eine Kontur hinzu, wenn die Spalte [selectedMessage] true ist und die ursprüngliche Nachricht, auf die geantwortet wurde, somit in der Anwendung ausgewählt wurde.
* Ein Icon Control mit bedingter Formatierung, um anzuzeigen, ob die Nachricht aus der Anwendung oder aus Teams heraus gesendet wurde. Dafür wird geprüft, ob der Benutzer in der Spalte [root_from_user_displayName] der Benutzer der Anwendung ist oder nicht und ein passendes Icon angezeigt.
* Ein Text Control mit Datum und Uhrzeit aus der Spalte [root_createdDateTime].
* Ein Text Control mit dem Namen des Benutzers aus der Spalte [root_from_user_displayName].
* Ein Text Control mit der Nachricht aus der Spalte [root_body_content].

![Template Antworten](/assets/images/data-sources/extension/msgraph/de_teams-20.png)

### Bereich Nachrichten senden

Als Letztes benötigst du noch ein Textfeld Control und zwei Button Controls, um die Nachrichten einzugeben und sie als neue Nachricht oder als Antwort auf eine ausgewählte Nachricht abzuschicken.

#### Textfeld Control

Lege das Textfeld Control (1) an und verbinde es mit der Variablen [messageText] (2).

![Textfeld Control](/assets/images/data-sources/extension/msgraph/de_teams-21.png)

#### Button Control neue Nachricht senden

Lege ein Button Control (1) an und gib einen passenden Button Text ein (2).

![Neue Nachricht Button](/assets/images/data-sources/extension/msgraph/de_teams-22.png)

Öffne den Skript-Editor für das Tapped Event durch einen Doppelklick auf das Control.
Das Skript sendet die Nachricht aus der Variable [messageText] mit der Funktion [sendmessage] aus der Datenquelle [SendMessageGraph].
Danach leert es die Variable und lädt die Datenquelle [ReadMessage] neu.

![Neue Nachricht Button Tapped Event](/assets/images/data-sources/extension/msgraph/de_teams-23.png)

#### Button Control auf ausgewählte Nachricht antworten

Lege ein Button Control (1) an und gib einen passenden Button Text ein (2).

![Antwort Button](/assets/images/data-sources/extension/msgraph/de_teams-24.png)

Öffne den Skript-Editor für das Tapped Event durch einen Doppelklick auf das Control.
Das Skript sendet die Nachricht aus der Variable [messageText] mit der Funktion [senddynamicreply] aus der Datenquelle [SendMessageGraph].
Danach leert es die Variable und lädt den Dataflow [DF_cleanReply] neu.

![Antwort Button Tapped Event](/assets/images/data-sources/extension/msgraph/de_teams-25.png)

## Die Anwendung testen und nutzen

Mit einem Klick auf [Vorschau] kannst du die Anwendung jetzt testen. Wenn du jetzt eine Nachricht verschickst, sollte diese im entsprechenden Teams Channel inklusive der zugehörigen Antworten angezeigt werden.

![Finale Anwendung](/assets/images/data-sources/extension/msgraph/de_teams-04.png)

![Ergebnis](/assets/images/data-sources/extension/msgraph/de_teams-26.png)
