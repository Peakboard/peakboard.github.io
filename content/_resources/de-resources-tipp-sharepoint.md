---
layout: article
title: Quick-Tipp - Dynamischer SharePoint Download
menu_title: Quick-Tipp - Dynamischer SharePoint Download
description: Wie man eine SharePoint Dokumentenbibliothek verwendet, um technische Zeichnungen zu speichern und sie dynamisch in Peakboard herunterzuladen
lang: de
weight: 600
ref: resources-600
redirect_from:
---

Zur Unterstützung von Werkern werden technische Zeichnungen und Betriebs- sowie Auftragsdaten auf Bildschirmen in manuellen oder halbautomatischen Produktionsumgebungen und im Qualitätsmanagement angezeigt. PDF ist häufig das bevorzugte Format für diese Dokumente.

Der Artikel vermittelt, wie eine SharePoint-Dokumentenbibliothek zur Speicherung von PDFs verwendet wird, einschließlich des Herunterladens dieser Dateien im Peakboard Designer und ihrer dynamischen Integration in Visualisierungen.

### Die SharePoint-Dokumentenbibliothek

Der folgende Screenshot zeigt eine Standard-Dokumentenbibliothek in einer typischen Office 365-Umgebung. Innerhalb der Bibliothek gibt es ein Unterverzeichnis namens **Current**, das alle aktuellen Dokumente enthält. Die alten Dokumente werden in **Archiv** gespeichert.

Nehmen wir an, das Unternehmen stellt drei verschiedene Produkte mit den Namen P01 bis P03 her. Für jedes Produkt gibt es eine technische Zeichnung, deren PDF-Datei entsprechend benannt ist. Die Datei x.pdf enthält nur ein rotes Kreuz und wird als Platzhalter verwendet, wenn keine nützlichen Daten angezeigt werden.

![SharePoint Dokumentenbibliothek](/assets/images/resources/de_resources-sharepoint-01.png)

### Verknüpfung des Peakboard-Projekts mit SharePoint

Mache einen Rechtsklick auf [Ressourcen], wähle [Cloud-Ressource hinzufügen] und dann [SharePoint] (1) aus.

![Ressource hinzufügen](/assets/images/resources/de_resources-sharepoint-02.png)

Authentifiziere dich mit deinem Office 365 Konto in dem Dialog, der sich geöffnet hat. Hierfür benötigt das Konto ausreichende Berechtigungen, um auf die gewünschten Dateien in der Dokumentenbibliothek zugreifen zu können.

![Office 365 Login](/assets/images/resources/de_resources-sharepoint-03.png)

Es öffnet sich der Dialog zur Dateiauswahl.
Wähle die Datei x.pdf (1) als Platzhalterdatei für das Projekt aus.

![Dateiauswahl](/assets/images/resources/de_resources-sharepoint-04.png)

Ziehe die PDF-Ressource per Drag-and-drop auf die Arbeitsfläche, um ein PDF Control zu erstellen.
Aktiviere dann die Check-Box [In Skripten verwendet] (1) in den Attributen und gib dem Control einen Namen (2).

![Ressource einfügen](/assets/images/resources/de_resources-sharepoint-05.png)

### Aufbau der Datenstruktur für das dynamische Laden

Die Dateien mit den verschiedenen technischen Zeichnungen sollen von einem Fabrikarbeiter dynamisch aus einer Liste von Dokumentennummern ausgewählt werden können. Erstelle dazu eine Liste mit diesen Nummern. Mache dazu einen Rechtsklick auf [Variablen] und wähle [Liste hinzufügen] (1).

![Liste anlegen](/assets/images/resources/de_resources-sharepoint-06.png)

Gib der Liste einen Namen (1) und erstelle eine Spalte mit dem Datentyp [String] (2). Lege dann für jedes Produkt eine entsprechende Zeile an (3).

![Liste konfigurieren](/assets/images/resources/de_resources-sharepoint-07.png)

Ziehe als Nächstes ein Drop-Down Control auf die Arbeitsfläche.
Du findest das Drop-Down Control im Bereich [Interaktiv] (1). Platziere dieses Drop-Down oberhalb des PDF Controls.
Damit der Benutzer die Produktnummer auswählen kann, bindest du in den Attributen die Listen-Variable an das Drop-Down Control (2).

![Mit Drop-Down verknüpfen](/assets/images/resources/de_resources-sharepoint-08.png)

Aktiviere dann in den Attributen die Check-Box [In Skripten verwendet] (1) und gib dem Drop-Down Control einen Namen (2), um es im nächsten Schritt verwenden zu können.

![Korrekte Benamung](/assets/images/resources/de_resources-sharepoint-09.png)

### Das Skript für dynamisches Laden

Um die dynamische Auswahl möglich zu machen, erstellst du ein Selection Changed Event Skript (1) für das Drop-Down Control durch einen Klick auf das entsprechende Symbol.

![Skript erstellen](/assets/images/resources/de_resources-sharepoint-10.png)

Mit den ersten drei Zeilen erstellst du den Dateipfad der gewünschten PDF-Datei relativ zum Stammverzeichnis deiner Dokumentenbibliothek mithilfe des Wertes, der in der Dropdown-Liste ausgewählt wird. Im vorliegenden Fall also beispielsweise `/Current/` + `P01` + `.pdf`.
Dazu erstellst du zuerst unter [BASICS] eine [Lokale Variable] vom Datentyp String.

Für die erste Zeile fügst du dem [Building Block](/scripting/de-building-blocks.html) [Setzen] dieser Variable dann einen Building Block mit dem Verzeichnis **/Current/** hinzu.

Die zweite Zeile besteht aus dem [Building Block](/scripting/de-building-blocks.html) [Anhängen] der Variable in Kombination mit dem [Building Block](/scripting/de-building-blocks.html) [Wert abrufen] des Drop-Down Controls unter [CONTROLS], [Bildschirmname], [Controlname] und [Selektierter Wert].

Für die dritte Zeile nutzt du erneut den [Building Block](/scripting/de-building-blocks.html) [Anhängen] der Variable und kombinierst ihn mit der Dateiendung **.pdf**

Mit der letzten Zeile setzt du die Quelle des PDF Controls auf den neu erstellten Dateipfad. Dies löst eine Aktualisierung aus und lässt das PDF Control das Dokument aus SharePoint herunterladen und anzeigen.

Ziehe dazu den [Building Block](/scripting/de-building-blocks.html) [Wert setzen] des PDF Controls aus dem Bereich [CONTROLS], [Bildschirmname], [Controlname] und [Quelle] unten an die bestehenden Building Blocks und kombiniere es mit dem [Building Block](/scripting/de-building-blocks.html) [Abrufen] der anfangs erstellten lokalen Variable.

![Skript für dynamisches Laden](/assets/images/resources/de_resources-sharepoint-11.png)

Nachdem du das Skript gespeichert hast, kannst du die Vorschau starten und deine Visualisierung testen.
Jedes Mal, wenn der Wert in der Dropdown-Liste geändert wird, wird der Reload-Prozess ausgelöst und die PDF-Datei ändert sich. Im vorliegenden Fall haben wir eine feste Liste von Produkten. Im realen Anwendungsfall könnte die Liste der Produkte dynamisch aus einem ERP-System wie SAP abgerufen werden.

![Ergebnis](/assets/images/resources/de_resources-sharepoint-12.gif)
