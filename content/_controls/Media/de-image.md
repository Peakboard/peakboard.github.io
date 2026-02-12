---
layout: article
title: Bild
menu_title: Bild
description: Information über Peakboard Designer Bild Control.
lang: de
weight: 310
ref: con-310
redirect_from:
  - /controls/de-image.html
---

Mit dem Bild-Control kannst du Grafiken, Logos oder Fotos in deine Visualisierung integrieren. Neben der einfachen Anzeige von statischen Bildern ermöglicht Peakboard auch das dynamische Laden von Bilddaten aus verschiedenen Quellen wie Web-URLs, lokalen Netzwerkpfaden oder direkt aus einer Datenbank.
Du findest das Bild-Control im Peakboard Designer in der Gruppe Medien & Dokumente (1). Ziehe das Icon per Drag-and-drop auf in deinen Designer oder versetze es mit einem Doppelklick auf deine Arbeitsfläche.

![image_1](/assets/images/Controls/Picture/picture01.png)

## Konfiguration und Eigenschaften
### 1 Datenquelle und Bildauswahl
Ein Bild-Control kann auf unterschiedliche Weise mit Inhalten gefüllt werden. Klicke das Control doppelt an, um den Konfigurationsdialog zu öffnen:
* Statische Ressource: Wähle ein Bild aus deinen lokalen Ressourcen aus, das fest in der Anwendung gespeichert ist (z. B. ein Firmenlogo) (1).
* Dynamische Verknüpfung (Datenbindung): Verknüpfe das Control mit einer Datenquelle oder einer Variablen, die einen Pfad oder eine URL enthält. Das Bild wird dann zur Laufzeit automatisch aktualisiert (2a), (2b).

![image_2](/assets/images/Controls/Picture/picture02.png)

### 2 Aussehen und Skalierung
In den Eigenschaften auf der rechten Seite definierst du, wie das Bild dargestellt wird:
1. Abstand (Allgemeines): Hier definierst du einen inneren Abstand für das Bild innerhalb seines Positionierungsrahmens. Über die Felder Links, Oben, Rechts und Unten kannst du das Bild präzise positionieren oder Einrückungen festlegen, um einen festen Abstand zum Rahmen des Controls zu wahren (1).
2. Titel & Untertitel (Allgemeines): Trage eine Überschrift oder eine Beschreibung für das eingefügte Bild in den Rahmen ein (2).
3. Deckkraft (Aussehen): Regle die Transparenz des Bildes (0 bis 100 %) (3).
4. Strecken (Aussehen) (4): 
4.1 inaktiv: Das Bild behält sein Seitenverhältnis bei und wird eingepasst
4.2 aktiv: Das Bild wird verzerrt, um die Fläche exakt auszufüllen.
5.	In Skripten verwenden (Logik): Gib dem Control einen eindeutigen Namen, um die Bildquelle in Skripten zu verwenden, z. B., um das Bild per Skript zur Laufzeit zu ändern (5).

![image_3](/assets/images/Controls/Picture/picture03.png)

## Scripting
### Beispiel: Bildquelle per Skript ändern, im Log überprüfen
In diesem Beispiel ändern wir das Bild, wenn ein Nutzer auf einen Button klickt und lassen uns die erfolgreiche Änderung im Log eintragen. Füge dazu ein weiteres Bild aus den mehreren Verknüpfungsmodi (Web-URL, Lokal, …) in den Designer ein. Achte darauf, dass der Positionierungsrahmen eine ausreichende Größe für jedes Bild behält.
Schritte im Script-Editor:
1.	Öffne den Script-Editor des auslösenden Elements unter Tapped.
2.	Wähle unter der Kategorie deines Bild-Controls den Block "Wert setzen" unter Quelle (1).
3.	Du kannst nun entweder eine URL oder den Namen einer Ressource eintragen (2).
4.	Wähle unter Funktionen den Block „Ins Log schreiben“ und passe den Inhalt des Textes an (3).
5.	Schließe den Editor unter „Speichern & Schließen“ (4).

Starte die Vorschau und überprüfe im Log (zweites Icon von links), ob der Rückgabewert nach dem Auslösen korrekt zurückgegeben wird.

![image_4](/assets/images/Controls/Picture/picture04.png)
