---
layout: article
title: Tableau Token Generator Extension
menu_title: Tableau Token Generator Extension
description: Informationen über die Nutzung der Tableau Token Generator Extension
lang: de
weight: 760
ref: dat-760
redirect_from:
---

In diesem Artikel lernst du, wie du deine Tableau Dashboards in eine Peakboard Anwendung integrieren kannst.
Er deckt die Erstellung eines Client-Geheimnisses in Tableau, die Installation der Extension, die Konfiguration in Peakboard, das Einrichten von Variablen und die Einbindung eines HTML-Code Controls ab. Zudem werden die Schritte zur Erstellung eines Refreshed-Skripts und zum Testen in der Vorschau erläutert.

Für die Verbindung mit Tableau wird ein Token benötigt mit dem der Peakboard Designer dann auf die verschiedenen Dashboards zugreifen kann. Dieser Token wird im Peakboard Designer mit Hilfe einer [Peakboard Extension](/data_sources/Extension/de-Extension.html) generiert. Per [Skript](/scripting/de-script-engine.html) wird das gewünschte Tableau Dashboard dann mit Hilfe eines [HTML-Code Controls](/controls/Extended/de-html-code.html) in deine Anwendung eingebunden.

## Vorbereitungen in Tableau

Um deine Tableau Dashboards in deiner Peakboard Anwendung anzeigen zu können, musst du zuerst einige Vorbereitungen in Tableau treffen. Öffne den Menüpunkt [Einstellungen] und gehe zum Tab [Verbundene Apps] (1). Klicke auf [Neue verbundene App] (2) um eine App hinzuzufügen.

![Verbundene Apps](/assets/images/data-sources/extension/tableau/de_tableau-01.png)

Gib der App einen Namen (1), die restlichen Einstellungen können beibehalten werden. Mit dem Button [Erstellen] (2) fügst du die App hinzu.

![Neue verbundene App](/assets/images/data-sources/extension/tableau/de_tableau-02.png)

Du landest automatisch in der Übersicht der neu erstellten App. Für die Verbindung zum Peakboard Designer benötigst du ein Client-Geheimnis. Klicke dafür auf den Button [Neues Geheimnis generieren] (1).

![Neues Client-Geheimnis generieren](/assets/images/data-sources/extension/tableau/de_tableau-03.png)

Es erscheint ein Feld mit der erzeugten ID (1) und dem Wert (2) des Client-Geheimnisses. Diese Werte, sowie die Client-ID (3) darunter benötigst du später. Klicke auf [Zurück zu den verbunden Apps] (4) um wieder in die Übersicht der verbundenen Apps zu gelangen.

![Client-Geheimnis](/assets/images/data-sources/extension/tableau/de_tableau-04.png)

In der Spalte [Aktionen] klickst du in der Zeile der gerade erstellten App auf die drei Punkte (1) und wählst [Aktivieren] (2). Jetzt kannst du die verbundene App in Peakboard Designer nutzen.

![App aktivieren](/assets/images/data-sources/extension/tableau/de_tableau-05.png)

## Verbindung mit dem Peakboard Designer

### Die Tableau Token Generator Extension installieren

Öffne den Extension Manager durch einen Rechtsklick auf [Daten], [Datenquelle hinzufügen] und wähle [Extensions verwalten] (1).

![Extension Manager öffnen](/assets/images/data-sources/extension/tableau/de_tableau-06.png)

Klicke bei der Tableau Token Generator Extension auf [Installieren] (1) und starte danach den Peakboard Designer neu, um die Extensions zu aktivieren.

![Extension installieren](/assets/images/data-sources/extension/tableau/de_tableau-07.png)

### Die Extension einrichten

Füge die Tableau Token Generator Extension durch einen Rechtsklick auf [Daten], [Datenquelle hinzufügen] und [Tableau Token Generator] (1) hinzu.

![Datenquelle hinzufügen](/assets/images/data-sources/extension/tableau/de_tableau-08.png)

Gib der Datenquelle einen Namen (1). Befülle dann im Bereich [Details angeben] die Felder folgendermaßen mit den Daten aus dem Client-Geheimnis der verbundenen App aus Tableau.

{% include styled_table.html %}
| **Name**      | **Wert**                                                                      |
|---------------|-------------------------------------------------------------------------------|
| Username      | Benutzername aus den Kontoeinstellungen von Tableau (2)                       |
| ClientId      | Client-ID aus der Übersichtsseite der verbundenen Apps in Tableau (3)         |
| Secret        | Geheimnis-ID aus der Übersichtsseite der verbundenen Apps in Tableau (4)      |
| SecretValue   | Geheimnis-Wert aus der Übersichtsseite der verbundenen Apps in Tableau (5)    |

![Datenquelle konfigurieren](/assets/images/data-sources/extension/tableau/de_tableau-09.png)

![Tableau Übersicht](/assets/images/data-sources/extension/tableau/de_tableau-10.png)

Über [Daten laden] generierst du den Token und kannst die Erstellung der Datenquelle mit [OK] bestätigen.

### Benötigte Variablen hinzufügen

Für das Skript werden zwei globale Variablen benötigt, der Servername und die URL des gewünschten Tableau Dashboards. Die Variablen könnten auch als fixe Elemente in das Skript integriert werden, diese nachträglich zu ändern wäre dann aber deutlich aufwendiger. Über einen Rechtsklick auf [Variablen] und [Variable hinzufügen] (1) fügst du die erste Variable hinzu.

![Variable hinzufügen](/assets/images/data-sources/extension/tableau/de_tableau-11.png)

Gib ihr beispielsweise den Namen [Servername] (1), wähle den Datentyp String (2) und gib als Wert den markierten Teil der URL des Tableau Dashboards ein (3).

![Variable Servername](/assets/images/data-sources/extension/tableau/de_tableau-12.png)

![Servername](/assets/images/data-sources/extension/tableau/de_tableau-13.png)

Lege eine weitere Variable vom Datentyp String (1) an. Nenne die Variable [URL] (2) oder gib ihr einen ähnlichen Namen und gib ihr als Wert die vollständige URL des Tableau Dashboards (3).

![Variable URL](/assets/images/data-sources/extension/tableau/de_tableau-14.png)

![URL](/assets/images/data-sources/extension/tableau/de_tableau-15.png)

### HTML-Code Control einrichten

Ziehe das HTML-Code Control (1) aus dem Bereich [Andere] auf die Arbeitsfläche.
In dieses fügst du später einen dynamischen HTML-Code ein. Das Control verarbeitet diesen Code und zeigt das HTML-basierte Tableau Dashboard an.

![HTML-Code Control hinzufügen](/assets/images/data-sources/extension/tableau/de_tableau-16.png)

Aktiviere die Checkbox [In Skripten verwendet] (1) im Bereich [Logik] und gib dem Control einen eindeutigen Namen (2), zum Beispiel [WebWidget].
Aktiviere außerdem die Checkboxen [Alle Zertifikate erlauben] (3) und [Plattformübergreifende Nutzung erlauben] (4)

![HTML-Code Control konfigurieren](/assets/images/data-sources/extension/tableau/de_tableau-17.png)

### Refreshed Skript konfigurieren

Mache einen Rechtsklick auf die Tableau Token Generator Extension Datenquelle und klicke auf [Refreshed Skript bearbeiten] (1).

![Refreshed Skript](/assets/images/data-sources/extension/tableau/de_tableau-18.png)

Füge das folgende Skript ein:

```lua
local token = data.Peakboard_Tableau.first.Token
local html = "<script type=\"module\" src=\"https://" .. data.Servername .. "/javascripts/api/tableau.embedding.3.latest.min.js\"></script>"
html = html .. "<tableau-viz id=\"tableauViz\" src=\"" .. data.URL .. "\" width=\"1920\" height=\"883\" toolbar=\"bottom\" iframe-auth token=\"" .. token .."\"></tableau-viz>"
screens['Screen1'].WebWidget.htmlcode = html
```

Das Skript bettet das Tableau-Dashboard in dem HTML-Code Control ein. Folgende Parameter und Variable werden im Code verwendet:

1. `local token = data.Peakboard_Tableau.first.Token`:
   - **Parameter:** `Token`
   - **Beschreibung:** Dies ist der Authentifizierungstoken, der für den Zugriff auf das Tableau Dashboard benötigt wird. Der Token wird aus der Datenquelle namens `data.Peakboard_Tableau` bezogen.

2. `local html = "<script type=\"module\" src=\"https://" .. data.Servername .. "/javascripts/api/tableau.embedding.3.latest.min.js\"></script>"`:
   - **Parameter:** `data.Servername`
   - **Beschreibung:** Dies ist der Name des Servers, auf dem die Tableau-Anwendung gehostet wird. Dieser Wert wird verwendet, um den Pfad zu Tableau herzustellen.

3. `html = html .. "<tableau-viz id=\"tableauViz\" src=\"" .. data.URL .. "\" width=\"1920\" height=\"883\" toolbar=\"bottom\" iframe-auth token=\"" .. token .."\"></tableau-viz>"`:
   - **Parameter:** `data.URL`, `width`, `height`, `toolbar`, `iframe-auth`, `token`
   - **Beschreibung:**
     - `data.URL`: Die URL des spezifischen Tableau-Dashboards, das eingebettet werden soll.
     - `width` und `height`: Die Breite und Höhe des eingebetteten Dashboards. Hier sind sie auf 1920x883 Pixel festgelegt.
     - `toolbar`: Position der Tableau-Toolbar (hier unten). Es kontrolliert, wo und ob die Toolbar angezeigt wird.
     - `iframe-auth token`: Dies ist der Authentifizierungstoken, der oben definiert wurde, und wird für den Zugriff auf das Dashboard verwendet.

4. `screens['Screen1'].WebWidget.htmlcode = html`:
   - **Parameter:** `screens['Screen1'].WebWidget.htmlcode`
   - **Beschreibung:** Dieser Teil des Codes weist das zuvor erstellte HTML-Skript (`html`) dem HTML-Code Control (`WebWidget`) auf dem Bildschirm `Screen1` zu. Dadurch wird das Tableau-Dashboard auf diesem Bildschirm angezeigt.

Durch weitere Parameter im dynamischen HTML kannst du das Tableau-Dashboard einschränken und die Symbolleisten oder Registerkarten loswerden, du kannst Filter einrichten oder bestimmte Interaktivitätsstufen zulassen oder verbieten. Welche Möglichkeiten es gibt, findest du [in der Tableau-Dokumentation](https://help.tableau.com/current/api/embedding_api/en-us/docs/embedding_api_configure.html).

Ersetze die Namen der referenzierten Datenquelle [Peakboard_Tableau], des HTML-Code Controls [WebWidget] sowie der Variablen [Servername] und [URL] jeweils durch die von dir verwendeten Namen und speichere das Skript.

![Refreshed Skript](/assets/images/data-sources/extension/tableau/de_tableau-19.png)

Passe in den Einstellungen der Tableau Token Generator Extension Datenquelle den Nachlade-Status auf [Beim Start] (1) an, damit der Token nur einmalig generiert wird.

![Nachlade-Status Datenquelle](/assets/images/data-sources/extension/tableau/de_tableau-20.png)

Setze das Aktualisierungsintervall des HTML-Code Controls in den Attributen auf 60 Sekunden (1), damit das Tableau Dashboard einmal pro Minute neu geladen wird.

![Aktualisierungsintervall Control](/assets/images/data-sources/extension/tableau/de_tableau-21.png)

## Die Anwendung in der Vorschau testen

Um zu testen, ob alles funktioniert, öffnest du die [Vorschau]. Die Anwendung zeigt jetzt das gewählte Tableau Dashboard an und aktualisiert es einmal pro Minute

![Vorschau](/assets/images/data-sources/extension/tableau/de_tableau-22.png)
