---
layout: article
title: Willkommensbildschirm 
menu_title: Willkommensbildschirm
description: Plug&Play Lösung für einen Willkommensbildschirm
lang: de
ref: tut-04
---

# Willkommensbildschirm mit Internetverbindung
Peakboard bietet die Möglichkeit sehr flexibel unterschiedliche Anwendungen abzubilden. Um einen möglichst einfachen Einstieg in die Erstellung eines Willkommensbildschirms zu geben, bieten wir unterschiedliche Templates an. Dies ist eine Schritt für Schritt Anleitung wie Sie Ihren eigenen Willkommensbildschirm mit diesen Templates erstellen können. Eine generelle Einführung in Peakboard finden Sie in den [ersten Schritten](https://peakboard.rocks/erste-schritte). Wenn Sie wissen möchten wie Sie eine Peakboard Box mit Ihrem Designer verbinden lesen Sie am besten folgenden [Artikel](https://help.peakboard.com/tutorials/02-de-anschliessen-und-die-erste-visualisierung.html).

## Unterschiedliche Varianten
Folgende Templates werden in diesem Artikel erklärt.

### Einfaches Board mit einem Termin
![image_live](/assets/images/instant_boards/welcome/Welcome_Screen_Online_Single.jpg)

Funktioniert mit oder ohne Internetverbindung. Ohne Internetverbindung können Sie keine externen Quellen hinzufügen. Wie zum Beispiel das Wetter Widget oder externe Logos und Hintergrundgrafiken. Mit maximal einem angezeigten Termin aus einer Tabelle. [Github Link](https://github.com/Peakboard/CoolStuff/tree/master/Demonstrator/Designer%20Templates/Administration/Welcome%20Screen%20Online%20Single)

### Mehrere Termine aus einer Tabelle
![image_live](/assets/images/instant_boards/welcome/Welcome_Screen_Online.jpg)

Funktioniert mit oder ohne Internetverbindung. Ohne Internetverbindung können Sie keine externen Quellen hinzufügen. Wie zum Beispiel das Wetter Widget oder externe Logos und Hintergrundgrafiken. Mit maximal drei angezeigten Terminen aus einer Tabelle. [Github Link](https://github.com/Peakboard/CoolStuff/tree/master/Demonstrator/Designer%20Templates/Administration/Welcome%20Screen%20Online)

### Mehrer Termine mit MS Office 365 Kalender als Datenquelle
![image_live](/assets/images/instant_boards/welcome/Welcome_Screen_Online.jpg)

Optisch identisch zum vorherigen Board. Die Datenhaltung passiert allerdings nicht auf der Box sondern funktioniert mit einem Microsoft Office 365 Kalender. Zugriff auf den Kalender muss hergestellt werden, anschließend werden automatisch immer bis zu 3 aktuelle Termine angezeigt. [Github Link](https://github.com/Peakboard/CoolStuff/tree/master/Demonstrator/Designer%20Templates/Administration/Welcome%20Screen%20Calendar)


## Weiteres Template
Neben den beschriebenen Templates gibt es noch ein alternatives Willkommensbildschirm-Template, die Terminübersicht.

### Terminübersicht mit Office 365 Kalender Anbindung
![image_live](/assets/images/instant_boards/welcome/Appointments_Overview.png)

Diese Visualisierung bietet Platz für bis zu 6 Termine. Verwaltet werden die Termine über eine einfache Microsoft Office 365 Kalender Anbindung. [Dokumentation](https://help.peakboard.com), [Github Link](https://github.com/Peakboard/CoolStuff/tree/master/Demonstrator/Designer%20Templates/Administration/Appointments%20Overview)

## Initiale Konfiguration
Die initiale Konfiguration ist ein einmaliger Vorgang und ist nötig um das generelle Aussehen wie Logo, Hintergrund und Wetter Widget auf Ihre Bedürfnisse anzupassen. Wenn Sie Ihre gewünschten Einstellungen vorgenommen haben müssen Sie nur noch Ihre aktualisierte Visualisierung auf Ihre Peakboard Box laden und dann müssen nur noch die Termine verwaltet werden, alles andere geschiet automatisch.

Da einige Kunden gerne Quellen aus dem Internet verwenden möchten und andere nicht, wird in den folgenden Schritte beschreiben wie sie Internetquellen nutzen können. Wenn Sie Ihrer Peakboard-Box keine Internetverbindung bereitstellen möchten können Sie entweder das Wetter Widget einfach aus dem Board entfernen oder sie verwenden das [Offline Board](https://github.com/Peakboard/CoolStuff/blob/master/Demonstrator/Designer%20Templates/Administration/Welcome%20Screen%20Offline/Welcome_Screen_Offline.pbmx) welches bereits ohne diese Option kommt.

### Zeitserver einstellen
Diese Einstellung definiert aus welcher Datenquelle die Peakboard Box die aktuelle Uhrzeit bezieht. Sie können die default Einstellung belassen, diese ruft den folgenden Service für die Uhrzeit auf: 'time.windows.com'. Wenn Sie Ihren lokalen Zeitserver Ihres Netzwerks verwenden möchten, können Sie diesen ändern indem Sie in der oberen Menuleiste auf den Tab 'Einstellungen/Settings' -> 'Zeitserver/Time Server' navigieren. Besonders wenn die Box keine Internetverbindung hat ist es wichtig den lokalen Zeitserver zu hinterlegen. Fragen Sie am besten einfach Ihren Admin nach der Adresse.

### Wetter Widget aktualisieren
Wenn Sie dieses Wetter Widget nicht verwenden möchten, können Sie einfach im Peakboard Designer das Element aus der Visualisierung löschen. Wählen Sie es dafür mit einem Rechtsklick aus und wählen Sie 'Löschen'.


Wenn Sie das Wetter Widget verwenden möchten können Sie sich Ihr eigenes Widget mit Ihrer Stadt unter folgender Adresse erstellen: https://weatherwidget.io/.

Wählen Sie zuerst die Stadt in der das Board später hängen soll aus. Anschließend können Sie noch weitere Parameter wie die Sprache, die anzuzeigenden Texte und die Einheit definieren.
Auf den weiteren Tabs gibt es noch viele weitere Möglichkeiten das Wetter Widget für eien Bedürfnisse anzupassen.

Für unsere Visualisierung haben wir im Tab 'Options' den Font 'Arial' verwendet, das Icon Set 'Climacons Animated', Forecast Days '3'.
Als Theme haben wir das Theme 'Pure' unter 'Flat' verwendet.

Wenn Sie mit Ihren Optionen zufrieden sind, können Sie auf den Button 'Get Code' klicken. Am geöffnet Fenster finden Sie nun den fertigen Code für Ihr persönliches Widget. Kopieren Sie diesen Code indem Sie ihn markieren oder einfach auf den Button 'Copy to Clipboard' klicken.

Gehen Sie nun zurück in den Peakboard Designer und wählen sie das Control 'Web widget (Weather)' in der Sidebar aus oder klicken Sie direkt auf das Wetter Widget. In der weiteren Sidebar auf der rechten Seite finden Sie nun einige Parameter zu diesem Element. Klicken Sie auf den '...' Button unter dem Punkt 'HTML-Code'. In dem geöffnet Fenster können sie nun den bestehenden Code durch Ihren erstellten Code ersetzen. Fügen Sie dort Ihr erstelltes Widget ein.


### Logo aktualisieren
Um das Peakboard Logo durch das gewünschte Firmenlogo zu ersetzen benötigen Sie eine Bilddatei. Es werden unterschiedliche Formate unterstützt (PNG, JPG). Ziehen Sie einfach die gewünschte Bilddatei per Drag&Drop auf den Designer. Anschließend finden Sie die Bild Datei in der Sidebar unter dem Punkt 'Ressourcen'. Ziehen Sie nun diese Bilddatei auf das aktuelle Logo, so können Sie es überschreiben. Anschließend können Sie noch Anpassungen machen um Größe und Position zu verbessern.

Alternativ können Sie auch das Logo als externe Bildquelle einbinden. Dafür können Sie die Variable 'logo' öffnen und in der Tabelle unter dem Eintrag 'URL' einen Link zu einer Bilddatei im Internet angeben. Dies ist direkt im Peakboard Designer möglich oder noch einfacher über das Peakboard Webinterface. 

Dieses können Sie aufrufen, indem Sie im Peakboard Designer im 'Startseite' Tab auf 'Verwalten / Hochladen' klicken. Im Dialog wählen Sie die gewünschte Box aus (Sie müssen die Visualisierung bereits auf eine Box geladen haben). Klicken Sie nun auf den Button 'Webinterface'. Alternativ können Sie auch das Webinterface auch direkt in Ihrem Browser mit der URL: http://NameIhrerBox:40404 aufrufen.

Auch hier können Sie in der Liste 'logo' eine URL zu einer Webressource hinzufügen und über die weiteren Paremeter in der Tabellenzeile die Position und Größe beeinflussen.

Mehr über das Webinterface können Sie [hier](https://help.peakboard.com/misc/11-de-web.html) erfahren.

### Hintergrund definieren
Als Hintergrund für diese Template wird ein Control namens PhotoFrame verwendet. Zu Beginn sind 5 Bilder hinterlegt die eins nach dem anderen angezeigt wird. Wenn Sie Ihre eigenen Bilder verwenden möchten, laden Sie diese einfach per Drag&Drop in den Designer. Anschließend wählen Sie in der Sidebar unter 'Bildschirme' -> 'Screen (Welcome)' das Element 'Photo Frame (PhotoFrame_Background)' aus. Hier können Sie nun unter der Eigenschaft Datenquelle die anzuzeigenden Bilder verwalten. Alternativ können Sie natürlich auch das PhotoFrame entfernen und ein einfaches Bild verwenden oder einfach, einen einfarbigen Hintergrund. Da sind Ihnen keien Grenzen gesetzt.

Alternativ können auch Webseiten als Hintergrund eingebunden werden – Internetverbindung vorausgesetzt. Das Vorgehen ist sehr ähnlich zu dem Vorgehen beim Logo. Sie können direkt im Designer die Variable 'background' öffnen und eine URL angeben, oder Sie nutzen dafür das Webinterface.

## Termine verwalten
Je nach Datenquelle können Termine unterschiedlich verwaltet werden. Dies geht zum einen indem Sie einen Microsoft Kalender einbinden oder mit Tabellen über das Peakboard Webinterface direkt auf Ihrer Box.
Mehr über das Webinterface können Sie [hier](https://help.peakboard.com/misc/11-de-web.html) erfahren.

### Einfacher Screen mit einem Eintrag
[ganz einfach mit nur einem Eintrag](https://github.com/Peakboard/CoolStuff/tree/master/Demonstrator/Designer%20Templates/Administration/Welcome%20Screen%20Online%20Single) 


### Mehrfache Termine in der Tabelle
[mit einer Tabelle wo man Tag und Start und Endzeit angegben kann](https://github.com/Peakboard/CoolStuff/tree/master/Demonstrator/Designer%20Templates/Administration/Welcome%20Screen%20Online) 


### Calendar anbindung
[mit Office 365 Calendar](https://github.com/Peakboard/CoolStuff/tree/master/Demonstrator/Designer%20Templates/Administration/Welcome%20Screen%20Calendar) 



## Image Credits
These are a link to the images we used in the background for our boards. https://unsplash.com/ is a pretty good


https://unsplash.com/photos/ib7jwp7m0iA
https://unsplash.com/photos/io7dX_1EFCg
https://unsplash.com/photos/wSTCaQpiLtc
https://unsplash.com/photos/OKjSh2rucAQ
https://unsplash.com/photos/hsPFuudRg5I