---
layout: article
title: Terminübersicht
menu_title: Terminübersicht
description: Plug&Play Lösung für eine Terminübersicht der aktuellen Termine
lang: de
weight: 500
ref: tut-500
homepage: true
image: /assets/images/Tutorial/Overview/Appointments_Overview_Small.png
redirect_from:
  - /tutorials/05-de-appointments-overview.html
---

Um einen möglichst einfachen Einstieg in die Erstellungen eines Willkommensbildschirms zu geben, bieten wir vorgefertigte Templates an. Dies ist eine Schritt für Schritt Anleitung, wie Sie Ihren persönlichen Willkommensbildschirm mit diesen Templates erstellen können. Eine generelle Einführung in Peakboard finden Sie in den [ersten Schritten](https://peakboard.rocks/erste-schritte). Wenn Sie wissen möchten, wie Sie eine Peakboard Box mit Ihrem Designer verbinden und eine Visualisierung übertragen, lesen Sie am besten folgenden [Artikel](https://peakboard.rocks/anschliessen). Zum Erstellen einer Visualisierung benötigen Sie den Peakboard Designer. Dieser kann kostenfrei [heruntergeladen](https://peakboard.rocks/designer-from-welcome) werden.

## Terminübersicht mit Office 365 Kalender Anbindung

![image_live](/assets/images/instant_boards/welcome/Appointments_Overview.png)

Diese Visualisierung bietet Platz für bis zu sechs Termine. Verwaltet werden die Termine über eine einfache Microsoft Office 365 Kalender Anbindung. Unterstützt werden Microsoft Office 365 Konten und moderne (On-Premise) Exchange-Server die Microsoft Graph unterstützen.  [Download Link](https://github.com/Peakboard/CoolStuff/raw/master/Demonstrator/Designer%20Templates/Administration/Appointments%20Overview/Appointments_Overview.pbmx)

## Weitere Templates für einen Willkommensbildschirm

Folgende Templates bieten eine Alternative zu der hier beschriebenen Terminübersicht. Eine detaillierte Beschreibung zu den Templates finden sie [hier](https://peakboard.rocks/willkommen).

### Einfaches Board mit einem Termin

![image_live](/assets/images/instant_boards/welcome/Welcome_Screen_Online_Single.jpg)

Diese Visualisierung können Sie auf die Peakboard Box laden, die Box benötigt dabei nicht zwingend eine Internetverbindung. Ohne Internetverbindung können keine externen Quellen, wie zum Beispiel das Wetter Widget, hinzugefügt werden. Dieses Board bietet die Möglichkeit maximal einen Termin aus einer Tabellendatenquelle anzuzeigen. [Download Link](https://github.com/Peakboard/CoolStuff/raw/master/Demonstrator/Designer%20Templates/Administration/Welcome%20Screen%20Online%20Single/Welcome_Screen_Online_Single.pbmx)

### Mehrere Termine aus einer Tabelle

![image_live](/assets/images/instant_boards/welcome/Welcome_Screen_Online.jpg)

Diese Visualisierung können Sie auf die Peakboard Box laden, die Box benötigt dabei nicht zwingend eine Internetverbindung. Ohne Internetverbindung können keine externen Quellen, wie zum Beispiel das Wetter Widget, verwendet werden. Das Board kann bis zu drei Termine anzeigen. Die Termine werden in einer Tabelle direkt auf der Peakboard Box gespeichert und verwaltet. [Download Link](https://github.com/Peakboard/CoolStuff/raw/master/Demonstrator/Designer%20Templates/Administration/Welcome%20Screen%20Online/Welcome_Screen_Online.pbmx)

### Mehrere Termine mit MS Office 365 Kalender als Datenquelle

![image_live](/assets/images/instant_boards/welcome/Welcome_Screen_Online.jpg)

Optisch identisch zum vorherigen Board. Die Datenhaltung passiert allerdings nicht auf der Box, sondern funktioniert mit einem Microsoft Office Kalender. Unterstützt werden Microsoft Office 365 Konten und moderne (On-Premise) Exchange-Server die Microsoft Graph unterstützen. Zugriff auf den Kalender muss über Microsoft hergestellt werden, anschließend werden automatisch immer bis zu drei aktuelle Termine angezeigt. [Download Link](https://github.com/Peakboard/CoolStuff/raw/master/Demonstrator/Designer%20Templates/Administration/Welcome%20Screen%20Calendar/Welcome_Screen_Calendar.pbmx)

## Initiale Konfiguration

Die initiale Konfiguration ist ein einmaliger Vorgang und ist nötig, um die generelle Gestaltung wie Logo, Hintergrund und Wetter Widget auf Ihre Bedürfnisse anzupassen. Wenn die Visualisierung Ihren Vorstellungen entspricht, laden Sie diese einfach auf Ihre Peakboard Box und Sie können sich auf die Terminverwaltung konzentrieren.

### Zeitserver einstellen

Diese Einstellung definiert, aus welcher Datenquelle die Peakboard Box die aktuelle Uhrzeit bezieht. Sie können die default Einstellung belassen, diese ruft den folgenden Service für die Uhrzeit auf: 'time.windows.com'. Wenn Sie Ihren lokalen Zeitserver Ihres Netzwerks verwenden möchten, können Sie diesen ändern, indem Sie in der oberen Menuleiste auf den Tab 'Einstellungen/Settings' -> 'Zeitserver/Time Server' navigieren. Besonders wenn die Box keine Internetverbindung hat, ist es wichtig den lokalen Zeitserver zu hinterlegen. Fragen Sie am besten einfach Ihren Administrator nach der Adresse.

### Wetter Widget aktualisieren

Wenn Sie dieses Wetter Widget nicht verwenden möchten, können Sie einfach im Peakboard Designer das Element aus der Visualisierung löschen. Wählen Sie es dafür mit einem Rechtsklick aus und wählen Sie 'Löschen'.

Wenn Sie das Wetter Widget verwenden möchten, können Sie sich Ihr eigenes Widget mit Ihrer Stadt unter folgender Adresse erstellen: [https://weatherwidget.io/](https://weatherwidget.io/).

Sie können Parameter wie Stadt, Sprache, die anzuzeigenden Texte und die Einheit definieren.
Auf den weiteren Tabs gibt es noch viele weitere Möglichkeiten, das Wetter Widget auf Ihre Bedürfnisse anzupassen.

Für unsere Visualisierung haben wir im Tab 'Options' den Font 'Arial' verwendet, das Icon Set 'Climacons Animated', Forecast Days '3'.
Als Theme haben wir das Theme 'Pure' unter 'Flat' verwendet.

Wenn Sie mit Ihren Optionen zufrieden sind, können Sie auf den Button 'Get Code' klicken. Im geöffneten Fenster finden Sie nun den fertigen Code für Ihr persönliches Widget. Kopieren Sie diesen Code indem Sie ihn markieren und mit Rechtsklick den Code kopieren oder klicken Sie einfach auf den Button 'Copy to Clipboard'.

Gehen Sie nun zurück in den Peakboard Designer und wählen sie das Control 'Web widget (Weather)' in der Sidebar aus oder klicken Sie direkt auf das Wetter Widget. 

![image_live](/assets/images/instant_boards/welcome/select_weather_widget.gif)

In der weiteren Sidebar auf der rechten Seite finden Sie nun einige Parameter zu diesem Element. Klicken Sie auf den '...' Button im Punkt 'HTML-Code' (2). In dem geöffneten Fenster können sie nun den bestehenden Code durch Ihren erstellten Code ersetzen (3). Fügen Sie dort Ihr erstelltes Widget ein und klicken Sie auf den OK-Button.

![image_live](/assets/images/instant_boards/welcome/web_widget_code_appointments.png)

### Logo aktualisieren

Um das Peakboard Logo durch Ihr gewünschtes Firmenlogo zu ersetzen, benötigen Sie eine Bilddatei. Es werden unterschiedliche Formate unterstützt (PNG, JPG). Ziehen Sie einfach die gewünschte Bilddatei per Drag&Drop auf die linke Sidebar des Peakboard Designers. Anschließend finden Sie die Bilddatei in der Sidebar unter dem Punkt 'Ressourcen'. Ziehen Sie nun diese Bilddatei auf das aktuelle Logo, so können Sie es überschreiben. Anschließend können Sie noch Anpassungen machen, um Größe und Position zu optimieren.

![image_live](/assets/images/instant_boards/welcome/update_logo.gif)

### Ausgangstexte definieren

Die Visualierung kommt mit vorgefertigten Texten für den Fall, dass kein Termine vorhanden sind.
Diese Texte können Sie über die Variablenliste 'text_labels' anpassen. Diese Änderungen können Sie direkt im Peakboard Designer vornehmen, indem Sie mit Doppelklick die Liste öffnen und im anschließenden Dialog auf 'Bearbeiten' klicken. 

Alternativ können Sie dafür das Webinterface verwenden, wenn Sie bereits eine Box besitzen. Dieses Webinterface ist eine Webseite, welche Sie aufrufen können, indem Sie im Peakboard Designer im 'Startseite' Tab auf 'Verwalten / Hochladen' klicken. Im Dialog wählen Sie die gewünschte Box aus (Sie müssen die Visualisierung bereits auf eine Box geladen haben). Klicken Sie nun auf den Button 'Webinterface' (1). Mehr über das Webinterface können Sie [hier](https://peakboard.rocks/webinterface) erfahren.

![image_live](/assets/images/instant_boards/welcome/Manage_Dialog_Webinterface_Button.png)

Sie können das Webinterface auch direkt in Ihrem Browser mit der URL: http://NameIhrerBox:40404 aufrufen. Sie müssen den Namen Ihrer Box eingeben, gefolgt vom Port :40404. Für den Login werden die mit der Box ausgelieferten Anmeldedaten benötigt. Anschließend sehen sie einen Screenshot Ihrer aktuell laufenden Visualisierung (1) und auf der rechten Seite (2) verschiedene Variablenlisten. Hier können Sie nun in der Variablenliste 'text_labels' die Texte bearbeiten. Mit dem Refresh-Button können Sie einen neuen Screenshot Ihrer Visualisierung laden (3).

![image_live](/assets/images/instant_boards/welcome/Webinterface_Overview.png)

In der folgenden Tabelle können Sie nun Ihren gewünschten Text angeben und mit einem Klick auf 'Update' speichern. Durch einen Klick auf den 'Refresh'-Button (3) wird ein neuer Screenshot Ihrer Visualisierung geladen.

![image_live](/assets/images/instant_boards/welcome/Webinterface_Appointment_TextLabels.png)

Das wars, Sie haben Ihre Visualisierung auf Ihre Bedürfnisse angepasst. Nun müssen Sie die Visualisierung noch auf Ihre Peakboard Box hochladen. Dazu gehen Sie im Menü oben unter dem Tab 'Startseite' auf den Punkt 'Verwalten / Hochladen'. Im anschließenden Dialog wählen Sie Ihre Box und klicken  auf 'Hochladen'. Nun wird die Visualisierung auf Ihre Box geladen, nach kurzer Zeit sollte die Visualisierung, auf dem an der Peakboard Box angeschlossenen Bildschirm, sichtbar werden. Wenn Sie mit dem Ergebnis zufrieden sind, können Sie sich anschließend auf die Terminverwaltung konzentrieren.  Falls Sie Ihre Peakboard Box noch nicht verbunden haben, lesen Sie am besten folgenden [Artikel](https://peakboard.rocks/anschliessen). 

## Termine verwalten

Um die [Visualisierung mit Kalenderanbindung](https://github.com/Peakboard/CoolStuff/raw/master/Demonstrator/Designer%20Templates/Administration/Welcome%20Screen%20Calendar/Welcome_Screen_Calendar.pbmx) nutzen zu können, müssen Sie sich mit Ihrem privaten – oder noch besser einem geteilten – Kalender Account in Ihr Microsoft Konto anmelden und eine Freigabe für die nötigen Information für Peakboard freischalten.

Öffnen Sie dazu die Visualisierungsdatei mit dem Peakboard Designer. Nun können Sie in der linken Sidebar die Kalenderdatenquelle öffnen (Visualisierung -> Daten -> Calendar). Unter dem zweiten Punkt 'Autorisierungsstatus' müssen Sie nun über den Button 'Autorisieren' eine Freigabe für Ihren Kalender einrichten. Führen Sie dazu die Schritte der Windowsanmeldung aus und erlauben Sie Peakboard Zugriff auf den Kalender. Ist die Autorisierung erteilt können Sie den Dialog mit OK schließen, die Visualisierung speichern. Nun laden Sie die aktuelle Visualisierung auf Ihre Peakboard Box hoch.

![image_live](/assets/images/instant_boards/welcome/activate_office365-calendar.gif)

Anschließend werden immer automatisch alle aktuellen Termine aus dem angegebenen Microsoft Kalender geholt und bis zu drei angezeigt. Das bedeutet, Sie können einfach wie gewohnt die Termine in Ihrem Kalender verwalten und Peakboard holt sich automatisch die relevanten Termine und stellt sie dar. Wenn kein weiterer Termin für den heutigen Tag vorhanden ist, wird der allgemeine Begrüßungstext aus der Liste 'text_labels' verwendet.

Aktuell unterstützt Peakboard Microsoft Office 365 Konten und moderne On-Premise-Exchange-Server die Microsoft Graph unterstützen. Fragen Sie am besten Ihren Admin.

# Jetzt kostenlos starten!

Legen Sie am besten direkt los und laden Sie sich den [Peakboard Designer](https://peakboard.rocks/designer-from-welcome) kostenlos herunter.

Wenn Sie weitere Fragen oder Anregungen haben, zögern Sie nicht mit uns in Kontakt zu treten. Am besten an unsere E-Mail Adresse: [info@peakboard.com](mailto:info@peakboard.com)