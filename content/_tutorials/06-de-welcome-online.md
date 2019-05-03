---
layout: article
title: Willkommensbildschirm
menu_title: Willkommensbildschirm
description: Plug&Play Lösung für einen Willkommensbildschirm
lang: de
ref: tut-04
---

# Willkommensbildschirm

Um einen möglichst einfachen Einstieg in die Erstellungen eines Willkommensbildschirms zu geben, bieten wir vorgefertigte Templates an. Dies ist eine Schritt für Schritt Anleitung wie Sie Ihren persönlichen Willkommensbildschirm mit diesen Templates erstellen können. Eine generelle Einführung in Peakboard finden Sie in den [ersten Schritten](https://peakboard.rocks/erste-schritte). Wenn Sie wissen möchten wie Sie eine Peakboard Box mit Ihrem Designer verbinden und eine Visualisierung übertragen, lesen Sie am besten folgenden [Artikel](https://peakboard.rocks/anschliessen). Zum Erstellen einer Visualisierung benötigen Sie den Peakboard Designer. Dieser kann kostenfrei [heruntergeladen](https://peakboard.rocks/download-instantBoards-welcome) werden.

## Unterschiedliche Varianten

Folgende Templates werden in diesem Artikel erklärt.

### Einfaches Board mit einem Termin

![image_live](/assets/images/instant_boards/welcome/Welcome_Screen_Online_Single.jpg)

Diese Visualisierung können Sie auf die Peakboard Box laden, die Box benötigt dabei nicht zwingend eine Internetverbindung. Ohne Internetverbindung können keine externen Quellen, wie zum Beispiel das Wetter Widget, hinzugefügt werden. Dieses Board bietet die Möglichkeit maximal einen Termin aus einer Tabellendatenquelle anzuzeigen. [Download Link](https://github.com/Peakboard/CoolStuff/raw/master/Demonstrator/Designer%20Templates/Administration/Welcome%20Screen%20Online%20Single/Welcome_Screen_Online_Single.pbmx)

### Mehrere Termine aus einer Tabelle

![image_live](/assets/images/instant_boards/welcome/Welcome_Screen_Online.jpg)

Diese Visualisierung können Sie auf die Peakboard Box laden, die Box benötigt dabei nicht zwingend eine Internetverbindung. Ohne Internetverbindung können keine externen Quellen, wie zum Beispiel das Wetter Widget, verwendet werden. Das Board kann bis zu drei Termine anzeigen. Die Termine werden in einer Tabelle direkt auf der Peakboard Box gespeichert und verwaltet. [Download Link](https://github.com/Peakboard/CoolStuff/raw/master/Demonstrator/Designer%20Templates/Administration/Welcome%20Screen%20Online/Welcome_Screen_Online.pbmx)

### Mehrere Termine mit MS Office Kalender als Datenquelle

![image_live](/assets/images/instant_boards/welcome/Welcome_Screen_Online.jpg)

Optisch identisch zum vorherigen Board. Die Datenhaltung passiert allerdings nicht auf der Box, sondern funktioniert mit einem Microsoft Office Kalender. Unterstützt werden Microsoft Office 365 Konten und moderne (On-Premise) Exchange-Server die Microsoft Graph unterstützen. Zugriff auf den Kalender muss über Microsoft hergestellt werden, anschließend werden automatisch immer bis zu 3 aktuelle Termine angezeigt. [Download Link](https://github.com/Peakboard/CoolStuff/raw/master/Demonstrator/Designer%20Templates/Administration/Welcome%20Screen%20Calendar/Welcome_Screen_Calendar.pbmx)

## Weiteres Template

Neben den beschriebenen Templates gibt es noch ein alternatives Willkommensbildschirm-Template: die Terminübersicht.

### Terminübersicht mit Office 365 Kalender Anbindung

![image_live](/assets/images/instant_boards/welcome/Appointments_Overview.png)

Diese Visualisierung bietet Platz für bis zu 6 Termine. Verwaltet werden die Termine über eine einfache Microsoft Office 365 Kalender Anbindung. Unterstützt werden Microsoft Office 365 Konten und moderne (On-Premise) Exchange-Server die Microsoft Graph unterstützen. [Dokumentation](https://help.peakboard.com), [Download Link](https://github.com/Peakboard/CoolStuff/raw/master/Demonstrator/Designer%20Templates/Administration/Appointments%20Overview/Appointments_Overview.pbmx)

## Initiale Konfiguration

Die initiale Konfiguration ist ein einmaliger Vorgang und ist nötig um das generelle Aussehen wie Logo, Hintergrund und Wetter Widget auf Ihre Bedürfnisse anzupassen. Wenn die Visualisierung Ihren Vorstellungen entspricht, laden Sie die Visualisierung einfach auf Ihre Peakboard Box und Sie können sich auf die Terminverwaltung konzentrieren.

Die folgenden Schritte beschreiben, wie Sie diese Templates mit den vordefinierten Quellen nutzen können.
Wenn Sie möchten, können Sie Ihre Peakboard Box auch ohne eine Verbindung zum Internet verwenden. Auch dieses Template kann ohne eine Internetverbindung verwendet werden. Entfernen Sie einfach das Wetter Widget oder verwenden Sie das [Template ohne Internetverbindung](https://github.com/Peakboard/CoolStuff/raw/master/Demonstrator/Designer%20Templates/Administration/Welcome%20Screen%20Offline/Welcome_Screen_Offline.pbmx), welches bereits ohne diese Option kommt.

### Zeitserver einstellen

Diese Einstellung definiert aus welcher Datenquelle die Peakboard Box die aktuelle Uhrzeit bezieht. Sie können die default Einstellung belassen, diese ruft den folgenden Service für die Uhrzeit auf: 'time.windows.com'. Wenn Sie Ihren lokalen Zeitserver Ihres Netzwerks verwenden möchten, können Sie diesen ändern indem Sie in der oberen Menuleiste auf den Tab 'Einstellungen/Settings' -> 'Zeitserver/Time Server' navigieren. Besonders wenn die Box keine Internetverbindung hat ist es wichtig den lokalen Zeitserver zu hinterlegen. Fragen Sie am besten einfach Ihren Administrator nach der Adresse.

### Wetter Widget aktualisieren

Wenn Sie dieses Wetter Widget nicht verwenden möchten, können Sie einfach im Peakboard Designer das Element aus der Visualisierung löschen. Wählen Sie es dafür mit einem Rechtsklick aus und wählen Sie 'Löschen'.

Wenn Sie das Wetter Widget verwenden möchten können Sie sich Ihr eigenes Widget mit Ihrer Stadt unter folgender Adresse erstellen: https://weatherwidget.io/.

Wählen Sie zuerst die Stadt, in der das Board später hängen soll, aus. Anschließend können Sie noch weitere Parameter wie Sprache, die anzuzeigenden Texte und die Einheit definieren.
Auf den weiteren Tabs gibt es noch viele weitere Möglichkeiten das Wetter Widget auf Ihre Bedürfnisse anzupassen.

Für unsere Visualisierung haben wir im Tab 'Options' den Font 'Arial' verwendet, das Icon Set 'Climacons Animated', Forecast Days '3'.
Als Theme haben wir das Theme 'Pure' unter 'Flat' verwendet.

Wenn Sie mit Ihren Optionen zufrieden sind, können Sie auf den Button 'Get Code' klicken. Im geöffnet Fenster finden Sie nun den fertigen Code für Ihr persönliches Widget. Kopieren Sie diesen Code indem Sie ihn markieren und mit rechtsklick den Code kopieren oder klicken Sie einfach auf den Button 'Copy to Clipboard'.

Gehen Sie nun zurück in den Peakboard Designer und wählen sie das Control 'Web widget (Weather)' in der Sidebar aus oder klicken Sie direkt auf das Wetter Widget. In der weiteren Sidebar auf der rechten Seite finden Sie nun einige Parameter zu diesem Element. Klicken Sie auf den '...' Button unter dem Punkt 'HTML-Code'. In dem geöffnet Fenster können sie nun den bestehenden Code durch Ihren erstellten Code ersetzen. Fügen Sie dort Ihr erstelltes Widget ein und klicken Sie auf den OK-Button.

(SCREENSHOT WEB WIDGET CODE)

### Logo aktualisieren

Um das Peakboard Logo durch Ihr gewünschtes Firmenlogo zu ersetzen benötigen Sie eine Bilddatei. Es werden unterschiedliche Formate unterstützt (PNG, JPG). Ziehen Sie einfach die gewünschte Bilddatei per Drag&Drop auf den Designer. Anschließend finden Sie die Bilddatei in der Sidebar unter dem Punkt 'Ressourcen'. Ziehen Sie nun diese Bilddatei auf das aktuelle Logo, so können Sie es überschreiben. Anschließend können Sie noch Anpassungen machen um Größe und Position zu optimieren.

(SCREENSHOT DRAG IMAGEFILE ON IMAGE)

Alternativ können Sie auch ein Logo als externe Bildquelle einbinden. Dafür können Sie die Variable 'logo' öffnen und in der Tabelle unter dem Eintrag 'URL' einen Link zu einer Bilddatei im Internet angeben. Dies ist direkt im Peakboard Designer möglich oder, wenn Sie bereits eine Box besitzen, noch einfacher über das Peakboard Webinterface.

(SCREENSHOT OF MANAGE DIALOG)

Dieses Webinterface ist eine Webseite welche Sie aufrufen können, indem Sie im Peakboard Designer im 'Startseite' Tab auf 'Verwalten / Hochladen' klicken. Im Dialog wählen Sie die gewünschte Box aus (Sie müssen die Visualisierung bereits auf eine Box geladen haben). Klicken Sie nun auf den Button 'Webinterface'. Alternativ können Sie das Webinterface auch direkt in Ihrem Browser mit der URL: http://NameIhrerBox:40404 aufrufen. Sie müssen den Namen Ihrer Box eingeben, gefolgt vom Port :40404. Für den Login werden die mit der Box ausgelieferten Anmeldedaten benötigt. Anschließend sehen sie einen Screenshot Ihrer aktuell laufenden Visualisierung (1) und auf der rechten Seite (2) verschiedene Variablenlisten welche Sie nun verändern können. Hier können Sie nun in der Variablenliste 'logo' eine 'URL' zu einer Webressource hinzufügen und über weitere Paremeter die Position und Größe beeinflussen.

(SCREENSHOT OF WEB INTERFACE)

Mehr über das Webinterface können Sie [hier](https://help.peakboard.com/misc/11-de-web.html) erfahren.

### Hintergrund definieren

Als Hintergrund für diese Template wird ein Control namens PhotoFrame verwendet. Zu Beginn sind 5 Bilder hinterlegt die eins nach dem anderen angezeigt wird. Wenn Sie Ihre eigenen Bilder verwenden möchten, laden Sie diese einfach per Drag&Drop in den Designer. Anschließend wählen Sie in der Sidebar unter 'Bildschirme' -> 'Screen (Welcome)' das Element 'Photo Frame (PhotoFrame_Background)' aus. Hier können Sie nun unter der Eigenschaft Datenquelle die anzuzeigenden Bilder verwalten. Alternativ können Sie natürlich auch das PhotoFrame entfernen und ein einfaches Bild verwenden oder einen einfarbigen Hintergrund. Da sind Ihnen keine Grenzen gesetzt.

Alternativ können auch Webseiten bzw. Webressourcen als Hintergrund eingebunden werden – Internetverbindung vorausgesetzt. Das Vorgehen ist sehr ähnlich zu dem Vorgehen beim Logo. Sie können direkt im Designer die Variablenliste 'background' öffnen und eine 'URL' angeben, oder Sie nutzen dafür das Webinterface, wenn Sie bereits eine Box besitzen.

### Ausgangstexte definieren

Die Visualierung kommt mit vorgefertigten Texten für die Situation, dass kein Termin vorhanden ist.
Diese Texte können Sie über die Variablenliste 'text_labels' anpassen. Die können Sie direkt im Peakboard Designer vornehmen oder über das Webinterface, wenn Sie bereits eine Box besitzen. Dieses Webinterface ist eine Webseite welche auf der Peakboard Box läuft und über folgende Adresse aufgerufen werden kann: http://NameIhrerBox:40404. Sie müssen den Namen Ihrer Box eingeben, gefolgt vom Port :40404. Für den Login werden die mit der Box ausgelieferten Anmeldedaten benötigt. Anschließend sehen sie einen Screenshot Ihrer aktuell laufenden Visualisierung (1) und auf der rechten Seite (2) verschiedene Variablenlisten welche Sie nun verändern können. In der Variablenliste 'text_labels' können Sie alle angezeigten Ausgangstexte verändern.

(SCREENSHOT OF WEB INTERFACE)

## Termine verwalten

Anders als die inititale Konfiguration ist die Terminverwaltung ein kontinuierlicher Prozess. Daher sollte dieser Vorgang Ihren Anforderungen entsprechen. Je nach Datenquelle können Termine unterschiedlich verwaltet werden. Dies geht indem Sie einen Microsoft Kalender einbinden oder mit Tabellen, über das Peakboard Webinterface, direkt auf Ihrer Box. Überlegen Sie sich welche Art von Datenhaltung für Sie die geeignete ist.
Mehr über das Webinterface erfahren Sie [hier](https://help.peakboard.com/misc/11-de-web.html).

### Einfacher Screen mit einem Eintrag

Die Visualisierung mit nur [einem Eintrag](https://github.com/Peakboard/CoolStuff/raw/master/Demonstrator/Designer%20Templates/Administration/Welcome%20Screen%20Online%20Single/Welcome_Screen_Online_Single.pbmx) bietet Ihnen die Möglichkeit einen allgemeinen Willkommenstext anzuzeigen oder einen speziellen für eine Person oder Firma. Die Texte die angezeigt werden, werden über das Peakboard Webinterface verwaltet. Dieses Webinterface ist eine Webseite, welche auf der Peakboard Box läuft und über folgende Adresse aufgerufen werden kann: http://NameIhrerBox:40404. Sie müssen den Namen Ihrer Box eingeben, gefolgt vom Port :40404. Für den Login werden die mit der Box ausgelieferten Anmeldedaten benötigt. Anschließend sehen sie einen Screenshot Ihrer aktuell laufenden Visualisierung (1) und auf der rechten Seite (2) verschiedene Variablenlisten welche Sie nun verändern können. Über die Listen 'background', 'logo' und 'text_labels' können sie die Optik der Visualisierung beeinflussen, dies wird in der initialen Konfiguration bereits beschrieben.

(SCREENSHOT OF WEBINTERFACE)

Unter der Liste 'visitor' können Sie unter 'Name' einen Namen eines Besuchers eintragen. Ist dieser Eintrag leer, wird automatische der allgemeine Begrüßungstext aus der Liste 'text_labels' verwendet.
In der Liste 'visitor' können Sie noch weitere Angaben zum Besucher machen, Sie können einen Raum angeben, einen Ansprechpartner, eine Uhrzeit und den Firmennamen. Lassen Sie ein Textfeld leer, wird an dieser Stelle einfach nichts angezeigt.

(SCREENSHOT OF APPOINTMENTS TABLE)

### Mehrfache Termine mit Tabelle

Die Visualiserung mit [mehreren Terminen verwaltet in einer Taballe](https://github.com/Peakboard/CoolStuff/raw/master/Demonstrator/Designer%20Templates/Administration/Welcome%20Screen%20Online/Welcome_Screen_Online.pbmx) bietet Ihnen die Möglichkeit einen allgeminen Begrüßungstext anzuzeigen oder ein bis drei Termine. Die Termine die angezeigt werden, werden über das Peakboard Webinterface verwaltet. Dieses Webinterface ist eine Webseite welche auf der Peakboard Box läuft und über folgende Adresse aufgerufen werden kann: http://NameIhrerBox:40404. Sie müssen den Namen Ihrer Box eingeben, gefolgt vom Port :40404. Für den Login werden die mit der Box ausgelieferten Anmeldedaten benötigt. Anschließend sehen sie einen Screenshot Ihrer aktuell laufenden Visualisierung (1) und auf der rechten Seite (2) verschiedene Variablenlisten welche Sie nun verändern können. Über die Listen 'background', 'logo' und 'text_labels' können sie die Optik der Visualisierung beeinflussen, dies wird in der initialen Konfiguration bereits beschrieben.

(SCREENSHOT OF WEBINTERFACE)

Für das Verwalten der dargestellten Termine öffnen Sie die liste 'appointments'. In dieser Tabelle können Sie nun unterschiedliche Termine anlegen. Geben Sie dazu immer ein Datum, eine Start- und Endzeit an und jeweils einen Titel des Termins (Subject). Die Optionen Body und Location sind optional, damit können Sie noch weitere Information wie beispielsweise Ansprechpartner und Raum angeben. Es werden anschließend immer die drei nächsten Termine des heutigen Tages in der Visualisierung angezeigt. Um weitere Termine hinzuzufügen drücken Sie auf den '+' Button (3) am unteren Ende der Tabelle.

(SCREENSHOT OF APPOINTMENTS TABLE)

Ist kein weiterer Termin für den heutigen Tag vorhanden, wird der allgemeine Begrüßungstext aus der Liste 'text_labels' verwendet.

### Office Kalenderanbindung

Um die [Visualisierung mit Kalenderanbindung](https://github.com/Peakboard/CoolStuff/raw/master/Demonstrator/Designer%20Templates/Administration/Welcome%20Screen%20Calendar/Welcome_Screen_Calendar.pbmx) nutzen zu können müssen Sie sich mit Ihrem privaten – oder noch besser einem geteilten – Kalender Account in Ihr Microsoft Konto anmelden und eine Freigabe für die nötigen Information für Peakboard freischalten.

Öffnen Sie dazu die Visualisierungsdatei mit dem Peakboard Designer. Nun können Sie in der linken Sidebar die Kalenderdatenquelle öffnen (Visualisierung -> Daten -> Calendar). Unter dem zweiten Punkt 'Autorisierungsstatus' müssen Sie nun über den Button 'Autorisieren' eine Freigabe für Ihren Kalender einrichten. Führen Sie dazu die Schritte der Windowsanmeldung aus und erlauben Sie Peakboard Zugriff auf den Kalender. Ist die Autorisierung erteilt können Sie den Dialog mit OK schließen, die Visualisierung speichern und auf Ihre Peakboard Box laden.

(SCREENSHOT DESIGNER CALENDER DATA SOURCE)

Anschließend werden immer automatisch alle aktuellen Termine aus dem angegeben Microsoft Kalender geholt und bis zu drei angezeigt. Das bedeutet Sie können einfach wie gewohnt die Termine in Ihrem Kalender verwalten und Peakboard holt sich automatisch die relevanten Termine und stellt sie dar. Wenn kein weiterer Termin für den heutigen Tag vorhanden ist wird der allgemeine Begrüßungstext aus der Liste 'text_labels' verwendet.

Aktuell unterstützt Peakboard Microsoft Office 365 Konten und moderne On-Premise-Exchange-Server die Microsoft Graph unterstützen. Fragen Sie am besten Ihren Admin.

## Image Credits

Dies sind die Links zu den Bildern welche für den Hintergrund der Visualisierung verwendet wurden. https://unsplash.com/ ist ein sehr interessantes Projekt, welches eine vielzahl frei verwendbarer Bilder in hoher Qualität bietet. /photos/ib7jwp7m0iA, /photos/io7dX_1EFCg, /photos/wSTCaQpiLtc, /OKjSh2rucAQ, /photos/hsPFuudRg5I.

# Kontakt

Wenn Sie weitere Fragen oder Anregungen haben, zögern Sie nicht mit uns in Kontakt zu treten. Am besten an unsere E-Mail Adresse: hello@peakboard.com / info@peakboard.com
