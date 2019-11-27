---
layout: article
title: Willkommensbildschirm
menu_title: Willkommensbildschirm
description: Plug&Play Lösung für einen Willkommensbildschirm
lang: de
weight: 400
ref: tut-400
homepage: true
image: /assets/images/Tutorial/Overview/Welcome_Screen_Online_Single_Small.png
redirect_from:
  - /tutorials/06-de-welcome-screen.html
---

Um einen möglichst einfachen Einstieg in die Erstellungen eines Willkommensbildschirms zu geben, bieten wir vorgefertigte Templates an. Dies ist eine Schritt für Schritt Anleitung, wie Sie Ihren persönlichen Willkommensbildschirm mit diesen Templates erstellen können. Eine generelle Einführung in Peakboard finden Sie in den [ersten Schritten](https://peakboard.rocks/erste-schritte). Wenn Sie wissen möchten, wie Sie eine Peakboard Box mit Ihrem Designer verbinden und eine Visualisierung übertragen, lesen Sie am besten folgenden [Artikel](https://peakboard.rocks/anschliessen). Zum Erstellen einer Visualisierung benötigen Sie den Peakboard Designer. Dieser kann kostenfrei [heruntergeladen](https://peakboard.rocks/designer-from-welcome) werden.

## Unterschiedliche Varianten

Folgende Templates werden in diesem Artikel erklärt.

### Einfaches Board mit einem Termin

![image_live](/assets/images/instant_boards/welcome/Welcome_Screen_Online_Single.jpg)

Diese Visualisierung können Sie auf die Peakboard Box laden, die Box benötigt dabei nicht zwingend eine Internetverbindung. Ohne Internetverbindung können keine externen Quellen, wie zum Beispiel das Wetter Widget, hinzugefügt werden. Dieses Board bietet die Möglichkeit maximal einen Termin aus einer Tabellendatenquelle anzuzeigen. [Template Link](https://templates.peakboard.com/Reception-Screen-Online-Single-Appointment/)

### Mehrere Termine aus einer Tabelle

![image_live](/assets/images/instant_boards/welcome/Welcome_Screen_Online.jpg)

Diese Visualisierung können Sie auf die Peakboard Box laden, die Box benötigt dabei nicht zwingend eine Internetverbindung. Ohne Internetverbindung können keine externen Quellen, wie zum Beispiel das Wetter Widget, verwendet werden. Das Board kann bis zu drei Termine anzeigen. Die Termine werden in einer Tabelle direkt auf der Peakboard Box gespeichert und verwaltet. [Template Link](https://templates.peakboard.com/Reception-Screen-Online/)

### Mehrere Termine mit MS Office Kalender als Datenquelle

![image_live](/assets/images/instant_boards/welcome/Welcome_Screen_Online.jpg)

Optisch identisch zum vorherigen Board. Die Datenhaltung passiert allerdings nicht auf der Box, sondern funktioniert mit einem Microsoft Office Kalender. Unterstützt werden Microsoft Office 365 Konten und moderne (On-Premise) Exchange-Server die Microsoft Graph unterstützen. Zugriff auf den Kalender muss über Microsoft hergestellt werden, anschließend werden automatisch immer bis zu drei aktuelle Termine angezeigt. [Template Link](https://templates.peakboard.com/Reception-Screen-Calendar-Connection/)

## Weiteres Template

Neben den beschriebenen Templates gibt es noch ein alternatives Willkommensbildschirm-Template: die Terminübersicht.

### Terminübersicht mit Office 365 Kalender Anbindung

![image_live](/assets/images/instant_boards/welcome/Appointments_Overview.png)

Diese Visualisierung bietet Platz für bis zu sechs Termine. Verwaltet werden die Termine über eine einfache Microsoft Office 365 Kalender Anbindung. Unterstützt werden Microsoft Office 365 Konten und moderne (On-Premise) Exchange-Server die Microsoft Graph unterstützen. [Dokumentation](https://help.peakboard.com/tutorials/05-de-appointments-overview.html), [Template Link](https://templates.peakboard.com/Appointment-Overview-Reception-Desk/)

## Initiale Konfiguration

Die initiale Konfiguration ist ein einmaliger Vorgang und ist nötig, um die generelle Gestaltung wie Logo, Hintergrund und Wetter Widget auf Ihre Bedürfnisse anzupassen. Wenn die Visualisierung Ihren Vorstellungen entspricht, laden Sie diese einfach auf Ihre Peakboard Box und Sie können sich auf die Terminverwaltung konzentrieren.

Die folgenden Schritte beschreiben, wie Sie diese Templates mit den vordefinierten Quellen nutzen können.
Wenn Sie möchten, können Sie Ihre Peakboard Box auch ohne Verbindung zum Internet verwenden. Entfernen Sie einfach das Wetter Widget oder verwenden Sie das [Template ohne Internetverbindung](https://templates.peakboard.com/Reception-Screen-Offline/), welches bereits ohne diese Option kommt.

### Zeitserver einstellen

Diese Einstellung definiert, aus welcher Datenquelle die Peakboard Box die aktuelle Uhrzeit bezieht. Sie können die default Einstellung belassen, diese ruft den folgenden Service für die Uhrzeit auf: 'time.windows.com'. Wenn Sie Ihren lokalen Zeitserver Ihres Netzwerks verwenden möchten, können Sie diesen ändern, indem Sie in der oberen Menuleiste auf den Tab 'Einstellungen/Settings' -> 'Zeitserver/Time Server' navigieren. Besonders wenn die Box keine Internetverbindung hat, ist es wichtig den lokalen Zeitserver zu hinterlegen. Fragen Sie am besten einfach Ihren Administrator nach der Adresse.

### Wetter Widget aktualisieren

Wenn Sie dieses Wetter Widget nicht verwenden möchten, können Sie einfach im Peakboard Designer das Element aus der Visualisierung löschen. Wählen Sie es dafür mit einem Rechtsklick aus und wählen Sie 'Löschen'.

Wenn Sie das Wetter Widget verwenden möchten, können Sie sich Ihr eigenes Widget mit Ihrer Stadt unter folgender Adresse erstellen: [https://weatherwidget.io/](https://weatherwidget.io/).

Sie noch Parameter wie Stadt, Sprache, die anzuzeigenden Texte und die Einheit definieren.
Auf den weiteren Tabs gibt es noch viele weitere Möglichkeiten, das Wetter Widget auf Ihre Bedürfnisse anzupassen.

Für unsere Visualisierung haben wir im Tab 'Options' den Font 'Arial' verwendet, das Icon Set 'Climacons Animated', Forecast Days '3'.
Als Theme haben wir das Theme 'Pure' unter 'Flat' verwendet.

Wenn Sie mit Ihren Optionen zufrieden sind, können Sie auf den Button 'Get Code' klicken. Im geöffneten Fenster finden Sie nun den fertigen Code für Ihr persönliches Widget. Kopieren Sie diesen Code indem Sie ihn markieren und mit Rechtsklick den Code kopieren oder klicken Sie einfach auf den Button 'Copy to Clipboard'.

Gehen Sie nun zurück in den Peakboard Designer und wählen sie das Control 'Web widget (Weather)' in der Sidebar aus oder klicken Sie direkt auf das Wetter Widget. 

![image_live](/assets/images/instant_boards/welcome/select_weather_widget.gif)

In der weiteren Sidebar auf der rechten Seite finden Sie nun einige Parameter zu diesem Element. Klicken Sie auf den '...' Button im Punkt 'HTML-Code' (2). In dem geöffneten Fenster können sie nun den bestehenden Code durch Ihren erstellten Code ersetzen (3). Fügen Sie dort Ihr erstelltes Widget ein und klicken Sie auf den OK-Button.

![image_live](/assets/images/instant_boards/welcome/web_widget_code.png)

### Logo aktualisieren

Um das Peakboard Logo durch Ihr gewünschtes Firmenlogo zu ersetzen, benötigen Sie eine Bilddatei. Es werden unterschiedliche Formate unterstützt (PNG, JPG). Ziehen Sie einfach die gewünschte Bilddatei per Drag&Drop auf die linke Sidebar des Peakboard Designers. Anschließend finden Sie die Bilddatei in der Sidebar unter dem Punkt 'Ressourcen'. Ziehen Sie nun diese Bilddatei auf das aktuelle Logo, so können Sie es überschreiben. Anschließend können Sie noch Anpassungen machen, um Größe und Position zu optimieren.

![image_live](/assets/images/instant_boards/welcome/update_logo.gif)

### Hintergrund definieren

Als Hintergrund für diese Templates wird ein Control namens PhotoFrame verwendet. Zu Beginn sind 5 Bilder hinterlegt, die eines nach dem anderen angezeigt werden. Wenn Sie Ihre eigenen Bilder verwenden möchten, laden Sie diese einfach per Drag&Drop in den Designer. Anschließend wählen Sie in der Sidebar unter 'Bildschirme' -> 'Screen (Welcome)' das Element 'Photo Frame (PhotoFrame_Background)' aus. Hier können Sie nun unter der Eigenschaft Datenquelle die anzuzeigenden Bilder verwalten. Alternativ können Sie natürlich auch das PhotoFrame entfernen und ein einfaches Bild verwenden, einen einfarbigen Hintergrund oder gar eine Webseite. Da sind Ihnen keine Grenzen gesetzt.

### Ausgangstexte definieren

Die Visualierung kommt mit vorgefertigten Texten für den Fall, dass kein Termin vorhanden ist.
Diese Texte können Sie über die Variablenliste 'text_labels' anpassen. Diese Änderungen können Sie direkt im Peakboard Designer vornehmen, indem Sie mit Doppelklick die Liste öffnen und im anschließenden Dialog auf 'Bearbeiten' klicken. 

Alternativ können Sie dafür das Webinterface verwenden, wenn Sie bereits eine Box besitzen. Dieses Webinterface ist eine Webseite, welche Sie aufrufen können, indem Sie im Peakboard Designer im 'Startseite' Tab auf 'Verwalten / Hochladen' klicken. Im Dialog wählen Sie die gewünschte Box aus (Sie müssen die Visualisierung bereits auf eine Box geladen haben). Klicken Sie nun auf den Button 'Webinterface' (1). Mehr über das Webinterface können Sie [hier](https://peakboard.rocks/webinterface) erfahren.

![image_live](/assets/images/instant_boards/welcome/Manage_Dialog_Webinterface_Button.png)

Sie können das Webinterface auch direkt in Ihrem Browser mit der URL: http://NameIhrerBox:40404 aufrufen. Sie müssen den Namen Ihrer Box eingeben, gefolgt vom Port :40404. Für den Login werden die mit der Box ausgelieferten Anmeldedaten benötigt. Anschließend sehen sie einen Screenshot Ihrer aktuell laufenden Visualisierung (1) und auf der rechten Seite (2) verschiedene Variablenlisten. Hier können Sie nun in der Variablenliste 'text_labels' die Texte bearbeiten. Mit dem Refresh-Button können Sie einen neuen Screenshot Ihrer Visualisierung laden (3).

![image_live](/assets/images/instant_boards/welcome/Webinterface_Overview.png)

In der folgenden Tabelle können Sie nun Ihren gewünschten Text angeben und mit einem Klick auf 'Update' speichern. Durch einen Klick auf den 'Refresh'-Button (3) wird ein neuer Screenshot Ihrer Visualisierung geladen.

![image_live](/assets/images/instant_boards/welcome/Webinterface_Appointment_TextLabels.png)

Das wars, Sie haben Ihre Visualisierung auf Ihre Bedürfnisse angepasst. Nun müssen Sie die Visualisierung noch auf Ihre Peakboard Box hochladen. Dazu gehen Sie im Menü oben unter dem Tab 'Startseite' auf den Punkt 'Verwalten / Hochladen'. Im anschließenden Dialog wählen Sie Ihre Box und klicken  auf 'Hochladen'. Nun wird die Visualisierung auf Ihre Box geladen, nach kurzer Zeit sollte die Visualisierung, auf dem an der Peakboard Box angeschlossenen Bildschirm, sichtbar werden. Wenn Sie mit dem Ergebnis zufrieden sind, können Sie sich anschließend auf die Terminverwaltung konzentrieren.  Falls Sie Ihre Peakboard Box noch nicht verbunden haben, lesen Sie am besten folgenden [Artikel](https://peakboard.rocks/anschliessen). 

## Termine verwalten

Anders als die initiale Konfiguration ist die Terminverwaltung ein kontinuierlicher Prozess. Daher sollte dieser Vorgang Ihren Anforderungen entsprechen. Je nach Datenquelle können Termine unterschiedlich verwaltet werden. Dies geht, indem Sie einen Microsoft Kalender verknüpfen oder mit Tabellen, über das Peakboard Webinterface, direkt auf Ihrer Box. 
Mehr über das Webinterface erfahren Sie [hier](https://peakboard.rocks/webinterface). Alternativ zum Webinterface können Sie auch die [Peakboard App](https://peakboard.rocks/apps) verwenden.

Lesen Sie die Anleitung zu Ihrer verwendeten Template-Variante:
- [Einfacher Screen mit einem Eintrag](#Einfacher-Screen-mit-einem-Eintrag)
- [Mehrfache Termine mit Tabelle](#Mehrfache-Termine-mit-Tabelle)
- [Office Kalenderanbindung](#Office-Kalenderanbindung)

### Einfacher Screen mit einem Eintrag

Die Visualisierung mit nur [einem Eintrag](https://templates.peakboard.com/Reception-Screen-Online-Single-Appointment/) bietet Ihnen die Möglichkeit, einen allgemeinen Willkommenstext anzuzeigen oder einen speziellen für eine Person oder Firma. Die angezeigten Texte werden über das Peakboard Webinterface verwaltet. Dieses Webinterface ist eine Webseite, welche auf der Peakboard Box läuft und über folgende Adresse aufgerufen werden kann: http://NameIhrerBox:40404. Sie müssen den Namen Ihrer Box eingeben, gefolgt vom Port :40404. Für den Login werden die mit der Box ausgelieferten Anmeldedaten benötigt. Anschließend sehen sie einen Screenshot Ihrer aktuell laufenden Visualisierung (1) und auf der rechten Seite (2) verschiedene Variablenlisten, welche Sie nun verändern können. Über die Listen 'background', 'logo' und 'text_labels' können sie die Optik der Visualisierung beeinflussen, dies wird in der initialen Konfiguration bereits beschrieben.

![image_live](/assets/images/instant_boards/welcome/Webinterface_Overview_Single.png)

Unter der Liste 'visitor' können Sie unter 'Name' einen Namen eines Besuchers eintragen. Ist dieser Eintrag leer, wird automatisch der allgemeine Begrüßungstext aus der Liste 'text_labels' verwendet.
In der Liste 'visitor' können Sie noch weitere Angaben zum Besucher machen. Sie können einen Raum angeben, einen Ansprechpartner, eine Uhrzeit und den Firmennamen. Lassen Sie ein Textfeld leer, wird an dieser Stelle einfach nichts angezeigt.

![image_live](/assets/images/instant_boards/welcome/Webinterface_Appointment_Table_Single.png)

### Mehrfache Termine mit Tabelle

Die Visualisierung von [mehreren Terminen mit Tabellenverwaltung](https://templates.peakboard.com/Reception-Screen-Online/), bietet Ihnen die Möglichkeit einen allgemeinen Begrüßungstext anzuzeigen oder ein bis drei Termine. Die Termine die angezeigt werden, werden über das Peakboard Webinterface verwaltet. Dieses Webinterface ist eine Webseite, welche auf der Peakboard Box läuft und über folgende Adresse aufgerufen werden kann: http://NameIhrerBox:40404. Sie müssen den Namen Ihrer Box eingeben, gefolgt vom Port :40404. Für den Login werden die mit der Box ausgelieferten Anmeldedaten benötigt. Anschließend sehen sie einen Screenshot Ihrer aktuell laufenden Visualisierung (1) und auf der rechten Seite (2) verschiedene Variablenlisten, welche Sie nun verändern können. Über die Listen 'background', 'logo' und 'text_labels' können sie die Optik der Visualisierung beeinflussen, dies wird in der initialen Konfiguration bereits beschrieben.

![image_live](/assets/images/instant_boards/welcome/Webinterface_Overview.png)

Für das Verwalten der dargestellten Termine öffnen Sie die liste 'appointments'. In dieser Tabelle können Sie nun unterschiedliche Termine anlegen. Geben Sie dazu immer ein Datum, eine Start- und Endzeit an und jeweils einen Titel des Termins (Subject). Die Optionen Body und Location sind optional, damit können Sie noch weitere Informationen wie beispielsweise Ansprechpartner und Raum angeben. Es werden anschließend immer die drei nächsten Termine des heutigen Tages in der Visualisierung angezeigt. Um weitere Termine hinzuzufügen drücken Sie auf den '+' Button (3) am unteren Ende der Tabelle.

![image_live](/assets/images/instant_boards/welcome/Webinterface_Appointment_Table.png)

Ist kein weiterer Termin für den heutigen Tag vorhanden, wird der allgemeine Begrüßungstext aus der Liste 'text_labels' verwendet.

### Office Kalenderanbindung

Um die [Visualisierung mit Kalenderanbindung](https://templates.peakboard.com/Reception-Screen-Calendar-Connection/) nutzen zu können, müssen Sie sich mit Ihrem privaten – oder noch besser einem geteilten – Kalender Account in Ihrem Microsoft Konto anmelden und eine Freigabe für die nötigen Informationen für Peakboard freischalten.

Öffnen Sie dazu die Visualisierungsdatei mit dem Peakboard Designer. Nun können Sie in der linken Sidebar die Kalenderdatenquelle öffnen (Visualisierung -> Daten -> Calendar). Unter dem zweiten Punkt 'Autorisierungsstatus' müssen Sie nun über den Button 'Autorisieren' eine Freigabe für Ihren Kalender einrichten. Führen Sie dazu die Schritte der Windowsanmeldung aus und erlauben Sie Peakboard Zugriff auf den Kalender. Ist die Autorisierung erteilt können Sie den Dialog mit OK schließen, die Visualisierung speichern. Nun laden Sie die aktuelle Visualisierung auf Ihre Peakboard Box hoch.

![image_live](/assets/images/instant_boards/welcome/activate_office365-calendar.gif)

Anschließend werden immer automatisch alle aktuellen Termine aus dem angegebenen Microsoft Kalender geholt und bis zu drei angezeigt. Das bedeutet, Sie können einfach wie gewohnt die Termine in Ihrem Kalender verwalten und Peakboard holt sich automatisch die relevanten Termine und stellt sie dar. Wenn kein weiterer Termin für den heutigen Tag vorhanden ist, wird der allgemeine Begrüßungstext aus der Liste 'text_labels' verwendet.

Aktuell unterstützt Peakboard Microsoft Office 365 Konten und moderne On-Premise-Exchange-Server die Microsoft Graph unterstützen. Fragen Sie am besten Ihren Admin.

# Jetzt kostenlos starten!

Legen Sie am besten direkt los und laden Sie sich den [Peakboard Designer](https://peakboard.rocks/designer-from-welcome) kostenlos herunter.

Wenn Sie weitere Fragen oder Anregungen haben, zögern Sie nicht mit uns in Kontakt zu treten. Am besten an unsere E-Mail Adresse: [info@peakboard.com](mailto:info@peakboard.com)

## Bildnachweis

Dies sind die Links zu den Bildern welche für den Hintergrund der Visualisierung verwendet wurden. https://unsplash.com/ ist ein sehr interessantes Projekt, welches eine Vielzahl frei verwendbarer Bilder in hoher Qualität bietet. /photos/ib7jwp7m0iA, /photos/io7dX_1EFCg, /photos/wSTCaQpiLtc, /OKjSh2rucAQ, /photos/hsPFuudRg5I.
