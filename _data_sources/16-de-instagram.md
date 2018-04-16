---
layout: article
title: Instagram
menu_title: Instagram
description: Information über Instagram Daten in Peakboard
lang: de
ref: dat-16
---
Diese Seite erklärt die einzelnen Features beim Zugriff auf Instagram-Datenquellen von Peakboard aus. Unter dem folgenden Link finden Sie ein Tutorial, wie generell externe Datenquellen konfiguriert und an Peakboard-Elemente gekoppelt werden:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)

Die Instagram-Datenquelle liefert alle Rohdaten, um später in der Visualisierung einen vollständigen Instagram-Feed zu bauen. Wie jede anderen Datenquelle benötigt sie einen Namen. Es kann festgelegt werden, nach welchem Zeitrhythmus in Sekunden (Reload Interval) die Daten geladen werden. Max Items ist die maximale Anzahl der Datenzeilen, also Instagram-Bilder oder Videos, die abgerufen wird.

Grundsätzlich lassen sich die Instagram-Elemente nach drei Methoden selektieren: Alle Postings eines bestimmten Accounts (By User Name), eines Hash Tags oder alle Bilder einer bestimmten geografischen Location (siehe weiter unten). Mit Hilfe des Access Tokens erlauben Sie dem Peakboard „unter Ihrem Namen“ auf Instagram zuzugreifen. Der Zugriff muss gemäß den Bestimmungen von Instagram nämlich immer personalisiert erfolgen. Um einen Access Token zu bekommen, klicken Sie auf Get Access Token. Sie müssen dann ihre Instagram-Zugangsdaten eingeben, um die Autorisierung zu erteilen. Bitte beachten Sie, dass Peakboard niemals Ihre Zugangsdaten irgendwo speichert. Jederzeit können Sie die Autorisierung in den Einstellungen Ihres Instagram-Kontos widerrufen.

![image_1](/assets/images/Data_Sources/Instagram/datenquelleninstagram01.png)

Ein Klick auf Preview zeigt Ihnen ein Voransicht der Rohdaten.

![image_1](/assets/images/Data_Sources/Instagram/datenquelleninstagram02.png)

Die Instagram-Datenquelle hat immer dieselben Spalten. Sie haben folgende Bedeutung:

> *	**UserName:** ist der Instagram-Name des Users
> *	**UserFullName:** ist der ausgeschriebene Name des Users
> *	**caption:** ist die Bildunterschrift einschließlich aller Hashtags
> *	**time stamp:** ist ein Zeitstempel der Form YYYY.MM.DD hh:mm:ss
> *	**media URL:** ist eine URL zu einem Bild oder einem Video
> *	**MediaType:** Image oder Video je nach Typ
> *	**ProfileImageURL:** ist die URL zu dem Profilbild des Users
> *	**LocationName:** ist der Name der geografischen Location, wenn sie vom User gesetzt wurde
> *	**NumberOfLikes:** ist die Anzahl der vergebenen Likes für dieses Bild/Video
> *	**TimeAgo:** ist die fertig formatierte, aufbereitete Zeitangabe, z.B. „5 minutes ago“, falls der post vor 5 Minuten abgesetzt wurde

## Location ID

Die Instagram-Maske gibt Ihnen die Möglichkeit, alle Postings zu einer bestimmten Geolocation zu selektieren. Dazu benötigen Sie die Location ID. Um die herauszufinden rufen Sie Instagram ganz normal in Ihrem Browser auf, suchen Sie ein Bild der gewünschten Location und klicken Sie auf den Location-Namen. Die dann erscheinende Seite enthält die Location ID als Teil der URL wie im nachfolgenden Screenshot gezeigt.


![image_1](/assets/images/Data_Sources/Instagram/datenquelleninstagram03.png)
