---
layout: article
title: Terminübersicht
menu_title: Terminübersicht
description: Plug&Play Lösung für eine Terminübersicht der aktuellen Termine
lang: de
ref: tut-04
---

# Terminübersicht

Peakboard bietet die Möglichkeit sehr flexibel unterschiedliche Anwendungen abzubilden. Wir bieten vorgefertigte Templates an, um einen möglichst einfachen Einstieg in die Erstellung eines Willkommensbildschirms zu bieten. Dies ist eine Schritt für Schritt Anleitung wie Sie Ihren persönlichen Willkommensbildschirm mit diesen Templates erstellen können. Eine generelle Einführung in Peakboard finden Sie in den [ersten Schritten](https://peakboard.rocks/erste-schritte). Wenn Sie wissen möchten wie Sie eine Peakboard Box mit Ihrem Designer verbinden und eine Visualisierung übertragen, lesen Sie am besten folgenden [Artikel](https://peakboard.rocks/anschliessen). Zum Erstellen einer Visualisierung benötigen Sie den Peakboard Designer. Dieser kann kostenfrei [heruntergeladen](https://peakboard.rocks/download-instantBoards-welcome) werden.

## Terminübersicht mit Office 365 Kalender Anbindung

![image_live](/assets/images/instant_boards/welcome/Appointments_Overview.png)

Diese Visualisierung bietet Platz für bis zu 6 Termine. Verwaltet werden die Termine über eine einfache Microsoft Office 365 Kalender Anbindung. Unterstützt werden Microsoft Office 365 Konten und moderne On-Premise-Exchange-Server die Microsoft Graph unterstützen. Zugriff auf den Kalender muss über Microsoft hergestellt werden, anschließend werden automatisch immer bis zu 6 aktuelle Termine angezeigt. [Download Link über Github](https://github.com/Peakboard/CoolStuff/raw/master/Demonstrator/Designer%20Templates/Administration/Appointments%20Overview/Appointments_Overview.pbmx)

## Weitere Templates für einen Willkommensbildschirm

Folgende Templates bieten eine Alternative zu der hier beschriebenen Terminübersicht. Eine detailierte Beschreibung zu den Templates finden sie [hier](https://peakboard.rocks/welcome).

### Einfaches Board mit einem Termin

![image_live](/assets/images/instant_boards/welcome/Welcome_Screen_Online_Single.jpg)

Diese Visualisierung funktioniert mit oder ohne Internetverbindung der Peakboard Box. Ohne Internetverbindung können Sie keine externen Quellen hinzufügen wie zum Beispiel das Wetter Widget oder externe Logos (URL im Web) und externe Hintergrundbilder. Dieses Board bietet die Möglichkeit maximal einen Termin aus einer Tabelle anzuzeigen. [Download Link über Github](https://github.com/Peakboard/CoolStuff/raw/master/Demonstrator/Designer%20Templates/Administration/Welcome%20Screen%20Online%20Single/Welcome_Screen_Online_Single.pbmx)

### Mehrere Termine aus einer Tabelle

![image_live](/assets/images/instant_boards/welcome/Welcome_Screen_Online.jpg)

Diese Visualisierung funktioniert mit oder ohne Internetverbindung der Peakboard Box. Ohne Internetverbindung können Sie keine externen Quellen hinzufügen wie zum Beispiel das Wetter Widget oder externe Logos (URL im Web) und externe Hintergrundbilder. Das Board kann bis zu drei Termine anzeigen. Die Termine werden in einer Tabelle direkt auf der Peakboard Box gespeichert und verwaltet. [Download Link über Github](https://github.com/Peakboard/CoolStuff/raw/master/Demonstrator/Designer%20Templates/Administration/Welcome%20Screen%20Online/Welcome_Screen_Online.pbmx)

### Mehrere Termine mit MS Office 365 Kalender als Datenquelle

![image_live](/assets/images/instant_boards/welcome/Welcome_Screen_Online.jpg)

Optisch identisch zum vorherigen Board. Die Datenhaltung passiert allerdings nicht auf der Box, sondern funktioniert mit einem Microsoft Office Kalender. Unterstützt werden Microsoft Office 365 Konten und moderne On-Premise-Exchange-Server die Microsoft Graph unterstützen. Zugriff auf den Kalender muss über Microsoft hergestellt werden, anschließend werden automatisch immer bis zu 3 aktuelle Termine angezeigt. [Download Link über Github](https://github.com/Peakboard/CoolStuff/raw/master/Demonstrator/Designer%20Templates/Administration/Welcome%20Screen%20Calendar/Welcome_Screen_Calendar.pbmx)

## Initiale Konfiguration

Die initiale Konfiguration ist ein einmaliger Vorgang und ist nötig um das generelle Aussehen wie Logo, Hintergrund und Wetter Widget auf Ihre Bedürfnisse anzupassen. Wenn die Visualisierung Ihren Vorstellungen entspricht laden Sie die Visualisierung einfach auf Ihre Peakboard Box.

Die folgenden Schritte beschreiben wie Sie diese Templates mit den vordefinierten Quellen nutzen können.
Wenn Sie möchten können Sie Peakboard auch ohne Internetverbindung verwenden. Auch dieses Template kann ohne Internetverbindung verwendet werden. Entfernen Sie einfach das Wetter Widget oder verwenden Sie das [Template ohne Internetverbindung](https://github.com/Peakboard/CoolStuff/raw/master/Demonstrator/Designer%20Templates/Administration/Welcome%20Screen%20Offline/Welcome_Screen_Offline.pbmx) welches bereits ohne diese Option kommt.

### Zeitserver einstellen

Diese Einstellung definiert aus welcher Datenquelle die Peakboard Box die aktuelle Uhrzeit bezieht. Sie können die default Einstellung belassen, diese ruft den folgenden Service für die Uhrzeit auf: 'time.windows.com'. Wenn Sie Ihren lokalen Zeitserver Ihres Netzwerks verwenden möchten, können Sie diesen ändern indem Sie in der oberen Menuleiste auf den Tab 'Einstellungen/Settings' -> 'Zeitserver/Time Server' navigieren. Besonders wenn die Box keine Internetverbindung hat ist es wichtig den lokalen Zeitserver zu hinterlegen. Fragen Sie am besten einfach Ihren Admin nach der Adresse.

### Wetter Widget aktualisieren

Wenn Sie dieses Wetter Widget nicht verwenden möchten, können Sie einfach im Peakboard Designer das Element aus der Visualisierung löschen. Wählen Sie es dafür mit einem Rechtsklick aus und wählen Sie 'Löschen'.

Wenn Sie das Wetter Widget verwenden möchten können Sie sich Ihr eigenes Widget mit Ihrer Stadt unter folgender Adresse erstellen: https://weatherwidget.io/.

Wählen Sie zuerst die Stadt in der das Board später hängen soll aus. Anschließend können Sie noch weitere Parameter wie die Sprache, die anzuzeigenden Texte und die Einheit definieren.
Auf den weiteren Tabs gibt es noch viele weitere Möglichkeiten das Wetter Widget für Ihre Bedürfnisse anzupassen.

Für unsere Visualisierung haben wir im Tab 'Options' den Font 'Arial' verwendet, das Icon Set 'Climacons Animated', Forecast Days '3'.
Als Theme haben wir das Theme 'Pure' unter 'Flat' verwendet.

Wenn Sie mit Ihren Optionen zufrieden sind, können Sie auf den Button 'Get Code' klicken. Am geöffnet Fenster finden Sie nun den fertigen Code für Ihr persönliches Widget. Kopieren Sie diesen Code indem Sie ihn markieren oder einfach auf den Button 'Copy to Clipboard' klicken.

Gehen Sie nun zurück in den Peakboard Designer und wählen sie das Control 'Web widget (Weather)' in der Sidebar aus oder klicken Sie direkt auf das Wetter Widget. In der weiteren Sidebar auf der rechten Seite finden Sie nun einige Parameter zu diesem Element. Klicken Sie auf den '...' Button unter dem Punkt 'HTML-Code'. In dem geöffnet Fenster können sie nun den bestehenden Code durch Ihren erstellten Code ersetzen. Fügen Sie dort Ihr erstelltes Widget ein und klicken Sie auf den OK-Button.

(SCREENSHOT WEB WIDGET CODE)

### Logo aktualisieren

Um das Peakboard Logo durch das gewünschte Firmenlogo zu ersetzen benötigen Sie eine Bilddatei. Es werden unterschiedliche Formate unterstützt (PNG, JPG). Ziehen Sie einfach die gewünschte Bilddatei per Drag&Drop auf den Designer. Anschließend finden Sie die Bild Datei in der Sidebar unter dem Punkt 'Ressourcen'. Ziehen Sie nun diese Bilddatei auf das aktuelle Logo, so können Sie es überschreiben. Anschließend können Sie noch Anpassungen machen um Größe und Position zu verbessern.

(SCREENSHOT DRAG IMAGEFILE ON IMAGE)

### Ausgangstexte definieren

Die Visualierung kommt mit vorgefertigten Texten für die Situation, dass kein Termin vorhanden ist.
Diese Texte können Sie über die Variablenliste 'text_labels' anpassen. Die können Sie direkt im Peakboard Designer vornehmen oder über das Webinterface, wenn Sie bereits eine Box besitzen. Dieses Webinterface ist eine Webseite welche auf der Peakboard Box läuft und über folgende Adresse aufgerufen werden kann: http://NameIhrerBox:40404. Sie müssen den Namen Ihrer Box eingeben, gefolgt vom Port :40404. Für den Login werden die mit der Box ausgelieferten Anmeldedaten benötigt. Anschließend sehen sie einen Screenshot Ihrer aktuell laufenden Visualisierung (1) und auf der rechten Seite (2) verschiedene Variablenlisten welche Sie nun verändern können. In der Variablenliste 'text_labels' können Sie alle angezeigten Ausgangstexte verändern.

(SCREENSHOT OF WEB INTERFACE)

## Termine verwalten

Anders als die inititale Konfiguration ist die Terminverwaltung ein kontinuierlicher Prozess. Daher sollte dieser Vorgang Ihren Anforderungen entsprechen.

### Office Kalenderanbindung

Um die [Terminübersicht mit Kalenderanbindung](https://github.com/Peakboard/CoolStuff/raw/master/Demonstrator/Designer%20Templates/Administration/Appointments%20Overview/Appointments_Overview.pbmx) nutzen zu können müssen Sie sich mit Ihrem privaten – oder noch besser einem geteilten – Kalender Account in Ihr Microsoft Konto anmelden und eine Freigabe für die nötigen Information für Peakboard freischalten.

Öffnen Sie dazu die Visualisierungsdatei mit dem Peakboard Designer. Nun können Sie in der linken Sidebar die Kalenderdatenquelle öffnen (Visualisierung -> Daten -> Calendar). Unter dem zweiten Punkt 'Autorisierungsstatus' müssen Sie nun über den Button 'Autorisieren' eine Freigabe für Ihren Kalender einrichten. Führen Sie dazu die Schritte der Windowsanmeldung aus und erlauben Sie Peakboard Zugriff auf den Kalender. Ist die Autorisierung erteilt können Sie den Dialog mit OK schließen, die Visualisierung speichern und auf Ihre Peakboard Box laden.

(SCREENSHOT DESIGNER CALENDER DATA SOURCE)

Anschließend werden immer automatisch alle aktuellen Termine aus dem angegeben Microsoft Kalender geholt und bis zu sechs Termine angezeigt. Das bedeutet Sie können einfach wie gewohnt die Termine in Ihrem Kalender verwalten und Peakboard holt sich automatisch die relevanten Termine und stellt sie dar. Wenn kein weiterer Termin für den heutigen Tag vorhanden ist wird der allgemeine Begrüßungstext aus der Liste 'text_labels' verwendet.

Aktuell unterstützt Peakboard Microsoft Office 365 Konten und moderne On-Premise-Exchange-Server die Microsoft Graph unterstützen. Fragen Sie am besten Ihren Admin.
