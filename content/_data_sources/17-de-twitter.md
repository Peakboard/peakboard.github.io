---
layout: article
title: Twitter
menu_title: Twitter
description: Information über Twitter Daten in Peakboard
lang: de
weight: 1700
ref: dat-1700
redirect_from:
  - /data_sources/17-de-twitter.html
---
Diese Seite erklärt die einzelnen Features beim Zugriff auf Twitter-Datenquellen von Peakboard aus. Unter dem folgenden Link finden Sie ein Tutorial, wie generell externe Datenquellen konfiguriert und an Peakboard-Elemente gekoppelt werden:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)

Die Twitter-Datenquelle liefert alle Rohdaten, um später in der Visualisierung einen vollständigen Twitterfeed zu bauen. Wie jede anderen Datenquelle benötigt sie einen Namen. Es kann festgelegt werden, nach welchem Zeitrhythmus in Sekunden (Reload Interval) die Daten geladen werden. Max Items ist die maximale Anzahl der Datenzeilen, also Tweets, die abgerufen wird.

Grundsätzlich lassen sich die Tweets nach drei Methoden selektieren: Alle Tweets eines bestimmten Twitter Accounts (By User Name) oder eines Hash Tags. Die dritte Option ist eine freie Suche nach Suchkriterien (z.B. „BVB AND VFB“ für alle Tweets, die BVB und VFB enthalten). Ein gute Anleitung zu den Suchkriterien finden Sie hier.

![Twiter Add Data Dialog](/assets/images/data-sources/twitter/twitter-add-data-dialog.png)

Ein Klick auf Preview zeigt Ihnen ein Voransicht.

![Twitter Preview Dialog](/assets/images/data-sources/twitter/twitter-preview-dialog.png)

Die Twitterdatenquelle hatte immer dieselben Spalten. Sie haben folgende Bedeutung:

> *	**UserLongName:** ist der ausgeschriebene Name des Users
> *	**UserShortName:** ist der Twittername des Users
> *	**text:** ist der Inhalt des Tweets mit allen Formatierungen
> *	**time stamp:** ist ein Zeitstempel der Form YYYY.MM.DD hh:mm:ss
> *	**media URL:** ist eine URL zu einem Bild oder einem Video für den Fall, dass der Tweet einen Anhang hat
> *	**ProfileImageURL:** ist die URL zu dem Profilbild des Users
> *	**TimeAgo:** ist die fertig formatierte, aufbereitete Zeitangabe, z.B. „5 minutes ago“, falls der Tweet vor 5 Minuten abgesetzt wurde
