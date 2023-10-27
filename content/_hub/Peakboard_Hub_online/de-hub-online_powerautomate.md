---
layout: article
product: hub
title: Microsoft Power Automate Peakboard Connector
menu_title: Power Automate Peakboard Connector
description: Microsoft Power Automate Peakboard Connector
lang: de
weight: 230
ref: hub-230
redirect_from:
---

Der Microsoft Power Automate Peakboard Connector ermöglicht es dir, die Alerts, die von deinen Peakboard Boxen an den Peakboard Hub gesendet werden, automatisiert weiterzuleiten oder anderweitig weiterzuverwenden.

### Voraussetzungen

Voraussetzung für die Nutzung des Peakboard Connectors, ist der Peakboard Hub online.
Du benötigst außerdem eine Premium Lizenz für Microsoft Power Automate, um den Connector nutzen zu können.

## Beispielanwendung: Weiterleiten von Peakboard Alerts als Nachricht an einen Slack Kanal

Du kannst den Peakboard Connector in Microsoft Power Automate nutzen, um deine Alerts an verschiedene externe Anwendungen wie beispielsweise Slack, Teams oder ähnliches weiterzuleiten.
Den Inhalt der Weiterleitung bestimmst du dabei selbst. Die Anwendungsvielfalt ist lediglich durch das Angebot von Microsoft Power Automate begrenzt.

### Vorbereitung: Eine neue Verbindung zum Peakboard Hub online anlegen

Um eine Verbindung zum Peakboard Hub online herzustellen, klickst du in Microsoft Power Automate im Bereich [Verbindungen] (1) auf [+ Neue Verbindung] (2).

![Neue Verbindung anlegen](/assets/images/hub/de_hub_powerautomate-01.png)

Wähle dort [Peakboard] aus und gib im sich öffnenden Fenster den Gruppenschlüssel deiner Nutzergruppe aus dem Peakboard Hub online ein.
Du findest diesen [durch einen Klick auf das Profil-Symbol im Peakboard Hub online unter [Show Group Key]](/hub/Peakboard_Hub_online/de-get-started-online.html).

![Group Key](/assets/images/hub/de_hub_powerautomate-02.png)

Die Verbindung ist nun erfolgreich angelegt.

### Einen neuen Flow anlegen

Um einen neuen Flow anzulegen, klickst du in Microsoft Power Automate im Menü auf den Punkt [Erstellen] (1). Wähle dann [Automatisierter Cloud-Flow] (2). Für Peakboard Alerts ist diese Art von Flow die einzig sinnvolle, da diese im Normalfall weder manuell ausgelöst werden, noch geplant auftreten.

![Automatisierten Flow hinzufügen](/assets/images/hub/de_hub_powerautomate-03.png)

Gib dem Flow in der Maske unter [Flownamen] (1) einen Namen. Wähle dann unter [Flowtrigger auswählen] (2) den Peakboard Trigger [When alert is sent] (3) aus.

![Flowtrigger auswählen](/assets/images/hub/de_hub_powerautomate-04.png)

Füge als Nächstes über [+ Neuer Schritt] (1) eine neue Aktion hinzu.

![Neuer Schritt](/assets/images/hub/de_hub_powerautomate-05.png)

Für unser Beispiel nutzen wir die Aktion [Nachricht veröffentlichen (V2)] (1) von Slack.
Um diese nutzen zu können, musst du dich mit deinen Slack-Zugangsdaten authentifizieren.

![Slack Aktion auswählen](/assets/images/hub/de_hub_powerautomate-06.png)

Wähle den [Kanalnamen] (1) aus, in dem die Nachricht veröffentlicht werden soll. Private Kanäle werden hier nicht automatisch angezeigt, du kannst deren Namen aber als benutzerdefinierten Wert eingeben.
Unter [Nachrichtentext] (2) definierst du jetzt, wie die Nachricht aussehen soll, die im gewählten Kanal veröffentlicht wird.
Die Nachricht kann sowohl aus statischen Eingaben bestehen, als auch aus dynamischen Blöcken.
Klicke auf das [+]-Symbol um das Pop-Up zu öffnen und wähle im Bereich [Dynamischer Inhalt] (3) Blöcke aus, um sie der Nachricht hinzufügen.
Über den Tab [Ausdruck] (4) kannst du vorgefertigte Funktionen hinzufügen oder deine eigene individuelle Funktion selbst schreiben. Durch diese Optionen lassen sich auch komplexe Anforderungen umsetzen.
Unter [Erweiterte Optionen anzeigen] (5) kannst du weitere Slack-spezifische Einstellungen für die Nachricht vornehmen.

![Nachricht erstellen](/assets/images/hub/de_hub_powerautomate-07.png)

Nimm deine gewünschten Einstellungen im neu geöffneten Bereich [Erweiterte Optionen] vor und klicke dann auf [Speichern] (1), um deinen Flow zu sichern.

![Flow speichern](/assets/images/hub/de_hub_powerautomate-08.png)

### Den Flow testen, nutzen und überwachen

Der Flow ist jetzt bereit und kann getestet und genutzt werden.
Wenn ein Alert von einer Peakboard Box aus der Nutzergruppe im Peakboard Hub, der für die Verbindung genutzt wurde, gesendet wird, wird automatisch der Flow ausgelöst und eine Nachricht mit den gemachten Vorgaben in den ausgewählten Kanal in Slack gesendet.

![Nachricht im Slack Kanal](/assets/images/hub/de_hub_powerautomate-09.png)

Im Bereich [Meine Flows] (1) in Microsoft Power Automate findest du eine Übersicht deiner bisher angelegten Flows. Durch einen Klick auf den gewünschten Flow gelangst du auf dessen Detailseite. Neben den allgemeinen Details zu deinem Flow (2) findest du hier auch einen Ausführungsverlauf (3) anhand dessen du nachvollziehen kannst, ob der Flow immer ordnungsgemäß durch gesendete Alerts ausgelöst wurde.
Im Bereich [Verbindungen] (4) siehst du welche Verbindungen der Flow nutzt und ob diese funktionieren.

![Flow Detailansicht](/assets/images/hub/de_hub_powerautomate-10.png)
