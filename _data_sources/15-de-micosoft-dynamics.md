---
layout: datenquellen-article
title: Microsoft Dynamics NAV
menu_title: Microsoft Dynamics NAV
description: Information über Microsoft Dynamics NAV Daten in Peakboard
lang: de
ref: dat-15
---

Diese Seite erklärt die einzelnen Features beim Zugriff auf die Dynamics NAV-Datenquelle von Peakboard aus. Unter dem folgenden Link finden Sie ein Tutorial, wie generell externe Datenquellen konfiguriert und an Peakboard-Elemente gekoppelt werden:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)

Technisch betrachtet ist OData das beste Protokoll, um auf Daten von Microsoft Dynamics NAV – im folgenden kurz NAV genannt – zuzugreifen. Dazu sind zunächst einige Vorbereitungen auf NAV-Seite zu erledigen. Basis für die Datenabfrage ist eine Query, die in der NAV-Entwicklungsumgebung angelegt werden muss. Wie man das genau macht, würde den Inhalt diese Seite sprengen. Sie finden Details dazu in der [NAV-Hilfe.](https://docs.microsoft.com/en-us/previous-versions/dynamicsNAV-2016/hh165526(v=NAV.90))

Im folgenden gehen wir davon aus, dass die Query vorhanden ist wie im Screenshot gezeigt. Es ist strategisch sinnvoll die Query so zu designen, dass die Daten schon möglichst so aussehen, wie sie später angezeigt werden sollen. Insbesondere was die Auswahl der Spalten, das Aggregationslevel und den Filter betrifft. Je besser die Query diesbezüglich gestaltet ist, desto einfacher ist das Einbinden in die Visualisierung.

![Object Designer](/assets/images/data-sources/micosoft-dynamics-nav/datenquellen-nav-01.png)

Um die Query „herum“ wird jetzt noch ein Webservice benötigt, um sie von außen abfragen zu können. Das lässt sich entweder im normalen NAV Client oder wie in den Screenshots gezeigt im Web Client erledigen. Klicken Sie auf das Suchenfeld, suchen Sie nach Webservice, um den Dialog aufzurufen.

![Microsoft Dynamics NAV Search](/assets/images/data-sources/micosoft-dynamics-nav/datenquellen-nav-02.png)

Legen Sie einen neuen Eintrag mit Objekttyp Query an und wählen Sie bei Objekt ID die Query aus, die Sie zuvor angelegt haben. Geben Sie zum Schluss noch dem Service einen sinnvollen Namen und speichern Sie die ganze Sache.

![New Web Services](/assets/images/data-sources/micosoft-dynamics-nav/datenquellen-nav-03.png)

Zurück im Peakboard-Designer wird mit Add Dynamics NAV Datasource eine neue Datenquelle angelegt. Neben dem Namen ist die wichtigste Angabe die URL zum OData-Endpunkt. Die hängt davon ab, wie die NAV-Landschaft aufgebaut ist und wie viele Unternehmen darauf arbeiten. Sie müsste in der Regel so aussehen, wie im Beispielscreenshot gezeigt: `http://xxx.myNAVserver:7048/NAV/ODATA/`

Den Dialog zur Eingabe von User-Name und Passwort erreichen Sie über den kleinen Knopf mit den drei Punkten.

![Edit Credentials Dialog](/assets/images/data-sources/micosoft-dynamics-nav/datenquellen-nav-04.png)

Ein Klick auf den Load-Button füllt die Combobox mit allen Webservices. Sobald ein Webservice ausgewählt ist, werden die Metadaten (Spalten) in der darunterliegenden Tabelle angezeigt.

![Load Data](/assets/images/data-sources/micosoft-dynamics-nav/datenquellen-nav-05.png)

Wer mag, kann noch einen OData-konformen Filter mitgeben oder die Refresh-Zeit und die maximal Zeilenzahl eingeben. Wie gesagt ist es aber ratsam, schon die Query auf NAV-Seite möglichst optimal zu gestalten. Wie üblich öffnet der Preview-Button ein entsprechendes Fenster, um die Rohdaten anzuzeigen.
