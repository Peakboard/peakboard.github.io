---
layout: article
title: Peakboard Designer - Die Basics
menu_title: Peakboard Designer - Die Basics
description: Peakboard Designer - Die Basics
lang: de
weight: 100
ref: tut-100
redirect_from:
  - /tutorials/01-de-peakboard-designer-basics.html
---

Es freut uns sehr, dass Sie sich für Peakboard interessieren. Wir wollen Ihnen hier die Peakboard Basics erklären und zeigen, wie Sie Ihre erste Visualisierung erstellen.

Fall Sie den Peakboard Designer noch nicht heruntergeladen haben, finden Sie hier den passenden [Link](https://peakboard.rocks/download) zum kostenlosen Download. Der Peakboard Designer ist eine Desktopanwendung für Windows Computer, ggf. benötigen Sie Installationsberechtigungen von Ihrem System-Administrator.

# Willkommen im Designer

Nach dem ersten öffnen von Peakboard befinden Sie sich im Start-Dialog. Hier finden Sie nützliche Links zu den Peakboard Hilfeseiten (1) oder den Videotutorials und Sie finden eine Reihe von Templates (2), die den Einstieg so einfach wie möglich machen sollen. Die Templates dienen als Beispiel und können als Basis für Ihre persönliche Visualisierung verwendet werden. 

![Peakboard Get Started Dialog](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_DE_01.png)

Es gibt Templates für unterschiedliche Anwendungsfälle. Über die Button 'Mehr anzeigen...' (3) erhalten Sie Zugriff auf weitere Templates und Beispieldateien, welche das Arbeiten mit Skripten erklären. Für den Einstieg möchten wir allerdings ohne ein Template beginnen und eine Visualisierung von Null beginnen. Wählen Sie hierzu 'Start from scratch' (4) um mit einem leeren Template zu beginnen.

# Struktur des Peakboard Designers

Nun sind Sie richtig im Peakboard Designer angekommen. Der Peakboard Designer ist in 5 Hauptbereiche aufgeteilt. Es gibt das Menüband oben mit Grundfunktionen (1), den Package Explorer auf der linken Seite (2), den Arbeitsbereich – auch Canvas genannt – in der Mitte (3), die Elementübersicht auf der rechten Seite (4) und darunter die Attributleiste (5).

![Peakboard Designer Overview](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_DE_02.png)

## Ribbon Bar / Menüband oben

Im oberen Menü sind Grundfunktionen des Designers hinterlegt. Hier können Sie eine Vorschau Ihrer Visualisierung öffnen (1) und die erstellte Visualisierung auf eine Peakboard Box laden (2). Über den weiteren Tab "Einstellungen" (3) können Sie grundlegende Einstellungen zu Ihrer Visualisierung vornehmen (Titel, Beschreibung, Zeitserver) oder ein Update der Software durchführen.

![Peakboard Designer Ribbon Bar](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_DE_03.png)

## Peakboard Explorer

Auf der linken Seite sind alle Elemente der Visualisierung aufgelistet. Dies ist die generelle Übersicht, welche Elemente in Ihrer Visualisierung vorhanden sind. Der Explorer funktioniert wie eine Ordnerstruktur. Es gibt Ordner für unterschiedliche Bereiche. Hier werden alle Datenquellen, Dataflows, Variablen, Skripte und Ressourcen in den jeweiligen Ordnern angezeigt. Unter dem letzten Punkt 'Bildschirme' finden Sie eine Auflistung aller vorhanden optischen Elemente auf Ihrem Arbeitsbereich. Da wir noch keine Elemente hinzugefügt haben sind die Ordner im Moment noch leer.

![Peakboard Designer Explorer](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_DE_04.png)

Ähnlich wie im Windows File Explorer können Sie mit einem Rechtsklick verschiedene Aktionen auf die Ordner durchführen – alternativ funktioniert dies mit klick auf den '...'-Button. Öffnen Sie zum Beispiel den Menüpunkt 'Bildschirmgröße bearbeiten' mit einem Rechtsklick auf den 'Bildschirme' Ordner. Hier können Sie die Größe der Visualisierung definieren. Für dieses Beispiel können Sie diese auf den Werten 1920x1080 (Full HD) belassen. Die Visualisierung wird automatisch auf die Auflösung des angeschlossenen Bildschirms skaliert, das Seitenverhältnis sollte allerdings passen.

## Oberflächenelemente

Auf der rechten Seite finden Sie eine Übersicht über vorhandene Oberflächenelemente – auch Controls genannt.
Mit diesen Elementen können Sie Ihre Daten visualsieren. Es gibt für unterschiedliche Anwendungsfälle vorgefertigte Elemente die Sie verwenden und anpassen können. Dies beginnt mit einfachen Textfeldern, Tabellen, über einfache Diagramme (Kreis, Linien, Balken, etc.) bis hin zu anspruchsvollen, kombinierbaren Diagrammen (Erweitertes Diagramm) und wiederholbaren Oberflächenpatterns wie die Listen- oder Tileansicht. Alle Elemente können entweder per Drag and Drop auf den Arbeitsgebereich gezogen oder mit einem Doppelklick hinzugefügt werden.

(Screenshot Controls)

## Attribute

Unterhalb der Oberflächenelemente finden Sie die Attributübersicht. Hier werden für das aktuell aktive Element die jeweiligen einstellbaren Parameter und Attribute aufgelistet. Diese Paremeter sind für jedes Element unterschiedlich. Probieren Sie zum Beispiel mal aus, mit einem Rechtsklick auf Bildschirme (im Paketexplorer links) einen weiteren Bildschirm hinzuzufügen. Anschließend klicken Sie auf einen der Bildschirme (1). Nun können Sie für die Bildschirme in den Attributen die Bildschirmdauer festlegen (2). Diese Bildschirmdauer definiert wie lange der jeweilige Bildschirm sichtbar bleibt, bevor der darauffolgende Bildschirm angezeigt wird.

(Screenshot Bildschirm Duration)

# Visualisierung erstellen

Nun haben Sie eine übersicht über die wichtigsten Bereiche des Designers. Zeit, Ihre erste Visualisierung zu erstellen. Fügen Sie dazu per Drag and Drop ein Textfeld aus den Oberflächenelementen rechts hinzu.

(Textfeld reinziehen GIF)

Nun können Sie in den Attributen verschiedene Einstellungen für das Element definieren. Passen Sie das Element Ihren optischen Vorstellungen an. Definieren Sie die gewünschte Schriftart, die Ausrichtung oder den Hintergrund. Definieren Sie einen 'Text', welcher angezeigt werden soll. Dieser wird später durch einen Datensatz ersetzt.

Fügen Sie als zweites Element ein 'Gauge-Diagramm' in der Gruppe 'Diagramm', Linear oder Rund spielt keine Rolle. Auch hier können Sie verschiedene Eigenschaften wie Größen, Farben, etc. einstellen.

## Ressourcen/Bilder verwenden?

Sie können für Ihre Visualisierung unterschiedliche Dateitypen verwenden. Es können zum Beispiel Bilddateien (JPG oder PNG), PDFs oder eine Datenquelle als Excel-Datei eingebunden werden. Um eine Bilddatei als Logo zu verwenden, ziehen Sie einfach eine Bilddatei, z.B. Ihr Firmenlogo, auf den Peakboard Explorer oder rufen Sie das Ordnermenü des Ressourcen Ordners auf und fügen Sie eine lokale Ressource hinzu. Nun ist die Datei dem Paket hinzugefügt. Anschließend können Sie die Datei per Drag and Drop aus dem Peakboard Explorer auf den Arbeitsbereich ziehen – achten Sie darauf, auf eine freie Fläche zu ziehen. Nun können Sie Größe und Position bestimmen. Für andere Datenformate funktioniert der Vorgang sehr ähnlich.

(Screenshot Drag & Drop Logo)

## Datenquelle verbinden

Mit Peakboard können Sie ganz unterschiedliche Datenquellen verwenden. Von Datenformaten wie CSV, JSON und XML, Datenbanken und SAP über Social Media bis hin zu Maschinen-, Förderanlagen- und Sensoreninformationen wie Siemens S7 und OPC UA. Weitere Informationen zu den Datenanbindungen finden Sie [hier](https://peakboard.com/datenanbindungen/).

(Excel Datei: 4 Artikel, Titel, Produktnummer, Lagermenge, Mindestbestand, Lagerkapazität)

In diesem Beispiel verwenden wir eine der einfacheren Datenquellen und zwar Microsoft Excel. Hier finden Sie den [Download Link](#) für die Datei in diesem Beispiel. Die Excel Datei enthält vier Produkte mit fünf Eigenschaften: Titel, Produktnummer, Lagermenge, Mindestbestand und Lagerkapazität. Laden Sie einfach die Datei herunter und fügen Sie sie, genau wie das Bild vorher, Ihrer Visualisierung per Drag and Drop hinzu. Nun liegt Ihre Datei als Ressource im Paket.

(Bild Excel hinzugefügt oder Drag&Drop)

Anschließend müssen sie noch die Ressource als Datenquelle hinzufügen. Klicken Sie hierzu auf der linken Seite den Ordner 'Daten' mit Rechtsklick oder klicken Sie auf den '...' Button und wählen Sie im Menü 'Datenquelle hinzufügen' aus. Wählen Sie nun die hochgeladenen Excel Datei aus. 

(Bild wie man die Datenquelle auswählt)

Voilà, Sie haben Ihre erste Datenquelle verbunden.

## Daten und Element verbinden

Nun fehlt nur noch der letzten Schritt, Sie müssen die Datenquelle mit einem Element verbinden. Wählen Sie dafür das Element im Arbeitsbereich aus, in diesem Fall das Textelement. Auf der rechten Seite unter den Attributen finden Sie das Attribut 'Text'. Klicken Sie in dieser Zeile auf den '...' Button. 

(Screenshot mit hinweis auf den Button)

Im geöffneten Fenster können Sie nun die Datenquelle auswählen und die gewünschte Spalte (Title) und Zeile (1) auswählen, welche Sie verwenden möchten. Verwenden Sie für dieses Beispiel die Zeile 1. Beachten Sie, dass in der Informationstechnik bei 0 angefangen wird zu zählen, daher ist Zeile 0 die erste Zeile, die Zeile mit den Überschriften. Bestätigen sie mit OK.

(Screenshot Datenquelle -> Spalte auswählen Dialog)

Nun wird Ihnen der Inhalt der einen Zelle Ihrer Datenquelle innerhalb der Textbox angezeigt.

Nun können Sie noch die Datenquelle mit dem Gauge-Diagramm verbinden. Definieren Sie für das Feld 'Daten / Wert' (1) die Spalte 'Stock_Quantity', für das Feld 'Minimum' (2) die Spalte 'Min_Quantity' und für 'Maximum' (3) die Spalte 'Storage_Capacity'.

(Screenshot des Ergebnises mit den Attributen)

# Preview
Sie haben es geschafft, Ihre erste Peakboard Visualisierung ist fertig und Sie können das Ergebnis mit dem 'Preview'-Button ansehen. Diesen finden Sie im oberen Menüband unter dem Punkt 'Startseite'.

(Screenshot Button)

Es öffnet sich ein neuer Dialog, welcher das Ergebnis zeigt und genau die Darstellung, welche später auf der Box laufen würde abbildet.

# Nächster Schritt

Wenn Sie bereits eine Peakboard-Box besitzen können Sie auf der folgenden Seite eine Erklärung finden, wie Sie die Box anschließen, verbinden und diese Visualisierung auf die Box laden können.

Lesen Sie dazu den Artikel: [Anschließen und die erste Visualisierung übertragen](https://help.peakboard.com/get_started/de-anschliessen-und-die-erste-visualisierung.html)

Wir wünschen Ihnen viel Spaß und Erfolg mit Peakboard. Sollten Sie irgendwelche Probleme bei der Erstellung haben, zögern Sie nicht mit uns in Kontakt zu treten. Alle wichtigen Information dazu finden Sie auf folgender [Seite](https://peakboard.com/support/).

----
----
----
----

--------------

# Alter Content --- Reste?


* Link auf -> Box verbinden & Hochladen


* Datenmanipulation
  * Dataflows
  * Scripts
  * Timers


----

Gliederung
* Das ist Peakboard
  * Designer
  * Box
  * Designer Overview
    * Template Dialog
      * Videos
    * Ribbon Bar
* (Designer Overview)
* Beispiel erstellen (Excel Quelle)
  * 4 Produkte mit Gauge, Gauge reagiert mit Farbe auf Grenzwert
* Visualisierung Hochladen
  * Bessere Bilder
  * Anschließen

Bezeichnungen?
* Package Explorer? -> Paketübersicht / Paketbaum
* Ribbon Menu? -> Navigationsleiste / Menüleiste
* Visualisierung? 
* Control / Element? -> Control
* Attribut? Property? -> Eigenschaften
* Canvas, Zeichenoberfläche -> Arbeitsbereich

----
----
----
----
----
----
----
----

























Dieses Tutorial benötigt keinerlei Vorkenntnisse. Es zeigt die allerersten Schritte mit Peakboard und erklärt einige theoretische Basics, die man verstanden haben muss, um dann später komplexere Visualisierungen zu bauen. Die grundsätzliche Vorgehensweise ist aber immer dieselbe: Die Visualisierung wird mit Hilfe des Peakboard-Designers gestaltet. Ein Design – oder auch Board genannt – wird dann auf eine oder mehrere Peakboard-Boxen übertragen, auf dem es autark läuft. Alle Artefakte wie Bilder, Videos usw. werden zur Übertragung in ein Package gepackt. Diesen Vorgang nennt man Deployment. Den kompletten Ablauf zeigt dieses Tutorial und zusätzlich unser Einstieger-Video, welches Sie [hier](/video_tutorials/01-de-erste-schritte.html) finden. Für den Fall, dass Sie noch keine Peakboard-Box besitzen, reicht vorerst die Designer-Software, welche Sie auf unserer Homepage herunterladen können. Das Übertragen des Designs auf die Box fällt dann natürlich weg – macht aber nichts, weil man es auch einfach als Preview auf dem eigenen Rechner betrachten kann.

Das Installationsprogramm funktioniert wie jedes andere Installationsprogramm auch und legt das Designer-Programm im Installationsordner ab. Um den Designer zu starten, können Sie auf das Programm-Icon klicken oder auf die Windows-Taste und dann „peak“ eintippen. Windows 10 findet den Verweis dann. Achtung! Starten Sie bitte nicht Peakboard.Runtime-App. Dazu kommen wir später.

![image_1](/assets/images/Tutorial/Basics/TutorialBasics01.png)

Im gestarteten Designer sehen Sie nun auf der linken Seite den Package-Explorer, also alle Elemente, die später auf die Peakboard-Box übertragen werden. In der Mitte ist das leere Panel, das wir nun mit Leben füllen wollen. Der rechte obere Bereich sind Controls oder visuelle Elemente, die aus der Toolbox per Drag and Drop auf das Panel gezogen werden können. Rechts unten können Sie Eigenschaften des Panel-Elements verändern, das gerade markiert ist.

![image_1](/assets/images/Tutorial/Basics/TutorialBasics02.png)

Wir wollen mit einem einfachen Textblock starten. Ziehen Sie mit der Maus ein Text-Control aus der Toolbox auf das Panel.

![image_1](/assets/images/Tutorial/Basics/TutorialBasics03.png)

Unten rechts können Sie im Eigenschaftsfeld nun den Textblock anpassen, z.B. den Font auswählen (wie man einen neuen Font hinzufügt erfahren Sie später) und noch viel wichtiger: Den Inhalt mit einer sinnvollen Nachricht füllen.

![image_1](/assets/images/Tutorial/Basics/TutorialBasics04.png)

Um das Panel um beispielsweise ein Bild zu ergänzen, müssen wir das Bild zunächst als Ressource hinzufügen. Dies kann auf zweierlei Arten erfolgen.
Einerseits kann das Bild per Drag and Drop aus dem Windows-Ordner auf die Oberfläche der Visualisierung gezogen werden. Dadurch wird das Bild automatisch unter Ressourcen eingebunden. 

Andererseits kann dies auch manuell erfolgen. Dafür wird im Package-Explorer auf der linken Seite mit der rechten Maustaste auf Resources geklickt und anschließend auf Add Local Resource. Sie können nun ein Bild von ihrem lokalen PC aussuchen, z.B. ein Produktfoto oder ein Firmenlogo. Das Bild erscheint dann als Eintrag unter dem Ressourcen-Zweig.

![image_1](/assets/images/Tutorial/Basics/TutorialBasics05.png)

Die eingebundene Ressource können Sie nun auf das Panel ziehen.
Sie können nun die beiden Elemente – das Textfeld und das Bild – noch etwas hübscher anordnen. Die Hilfslinien, die automatisch eingeblendet werden, helfen Ihnen dabei die Elemente so zu platzieren, dass es gut aussieht.

![image_1](/assets/images/Tutorial/Basics/TutorialBasics06.png)

Um nun zu erfahren, wie ihr fertiges Design später auf dem Monitor aussieht, klicken Sie in der Toolbar auf Preview. Es öffnet sich das Preview-Fenster. In unserem Fall ist das noch nicht ganz so spannend, weil wir ja nur unveränderliche Inhalte benutzt haben. Aber in späteren Beispielen werden wir Boards bauen, die Interaktion oder dynamische Daten enthalten. Um die Dynamik zu sehen und auszuprobieren, braucht man entweder die Preview-Ansicht oder muss das Board auf eine Box übertragen.

![image_1](/assets/images/Tutorial/Basics/TutorialBasics07.png)

Unter dem folgenden Link erfahren Sie mehr darüber, wie das neu erstellte Design auf die Peakboard-Box übertragen und aktiviert wird:

[Erste Schritte mit der Peakboard-Box](/tutorials/02-de-anschliessen-und-die-erste-visualisierung.html)
