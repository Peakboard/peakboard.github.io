---
layout: article
title: STEP-Viewer
menu_title: STEP-Viewer
description: Information über das Peakboard Designer STEP-Viewer Control für 3D-CAD-Modelle.
lang: de
weight: 850
ref: con-850
---

Das STEP-Viewer Control zeigt ein 3D-CAD-Modell direkt in deiner Peakboard-Anwendung an. Es liest das Modell ein, zerlegt es in seine einzelnen Bauteile und kann diese Bauteile in eine Liste schreiben – so lassen sich einzelne Bauteile über ganz normale Datenbindungen ein- und ausblenden oder hervorheben, ohne eine Zeile Skript.
Du findest das STEP-Viewer Control im Peakboard Designer in der Gruppe "Andere" (1). Ziehe das Icon per Drag-and-drop in deinen Designer oder platziere es mit einem Doppelklick auf deine Arbeitsfläche.

![image_1](/assets/images/Controls/Step-Viewer/stepviewer_01.png)

# Konfiguration und Eigenschaften

## 1 Modell laden
Klicke das Control doppelt an, um die Ressourcenauswahl zu öffnen und die Modelldatei auszuwählen. Die Datei wird als Ressource in die `.pbmx`-Datei gepackt – genau wie ein Bild – damit das Projekt in sich geschlossen bleibt.

Zwei Formate werden unterstützt:
* **STEP** (`.step`, `.stp`) – das Austauschformat nach ISO 10303, das praktisch jedes CAD-System exportieren kann.
* **glTF** (`.glb`, `.gltf`) – bereits tesselliert, öffnet dadurch sofort und benötigt deutlich weniger Speicher als eine STEP-Datei.

> Wenn du die Wahl hast, nimm glTF. Eine STEP-Datei muss beim Laden erst tesselliert werden, was Zeit und Speicher kostet – besonders auf einer Peakboard Box.

Die gewählte Datei steht unter Modelldatei (1). Mit Interaktiv (2) legst du fest, wie sich das Modell verhält: Ist die Option aktiviert, kann das Modell gedreht und gezoomt werden. Ist sie deaktiviert, wird nur ein statisches Abbild angezeigt, was Performance schont.

![image_2](/assets/images/Controls/Step-Viewer/stepviewer_02.png)

## 2 Die Bauteilliste
Das ist der Punkt, der aus dem Control mehr als einen Betrachter macht. Der STEP-Viewer kann eine Liste mit einer Zeile je Bauteil des Modells füllen – und er liest Änderungen an dieser Liste zurück. Wer in die Liste schreibt, verändert also das Modell.

1. Wähle unter Datenquelle (3) die Liste aus, die die Bauteile aufnehmen soll. Jede Liste des Projekts ist möglich.
2. Der Button "Bauteilliste erstellen" (4) nimmt dir die Arbeit ab: Er legt eine passende Liste mit dem Namen `StepViewerParts` an, bindet sie und trägt die Spaltenzuordnung ein. Das ist der schnellste Einstieg.
3. Darunter ordnest du die vier Spalten zu (5):
   * **Spalte Name** – erhält den Namen des Bauteils.
   * **Spalte Baugruppe** – erhält die Baugruppe, zu der das Bauteil gehört.
   * **Spalte Sichtbar** – eine boolesche Spalte. Wird sie geleert, wird das Bauteil im Modell ausgeblendet.
   * **Spalte Aktiv** – eine boolesche Spalte. Wird sie gesetzt, wird das Bauteil in der Aktiv-Farbe hervorgehoben. Es kann immer nur ein Bauteil aktiv sein.

Da die Spalten für Sichtbarkeit und Aktiv auf das Modell zurück angewendet werden, kannst du sie an eine Tabelle, eine Checkbox oder eine Datenquelle binden und das Modell vollständig über Daten steuern.

## 3 Aussehen
Unter Aussehen legst du den Hintergrund des Controls und die Aktiv-Farbe (6) fest – die Farbe, in der ein Bauteil hervorgehoben wird, solange es als aktiv markiert ist. Bleibt die Aktiv-Farbe leer, ist die Hervorhebung vollständig deaktiviert. Die Voreinstellung ist DarkOrange.

## Scripting
Gib dem Control unter "In Skripten verwenden" einen Namen, um es im Skript anzusprechen. Die Skript-Oberfläche ist bewusst klein gehalten, weil das Ein- und Ausblenden sowie das Hervorheben von Bauteilen über die gebundene Liste läuft und nicht über Methoden:

* `ModelSource` – der Dateiname des anzuzeigenden Modells, z. B. `"chassis.glb"`. Es können nur Dateien gewählt werden, die im Projekt enthalten sind – genau wie beim Bild-Control.
* `ActiveColor` – die Hervorhebungsfarbe des aktiven Bauteils.

```lua
-- Modell zur Laufzeit wechseln
StepViewer.ModelSource = "chassis.glb"
```

## Das Ergebnis
In der Vorschau und auf der Peakboard Box wird das Modell neben seiner Bauteilliste dargestellt. Beachte, dass das Modell nicht sofort erscheint: Die 3D-Bibliotheken und das Modell selbst werden asynchron geladen, und gerade eine große STEP-Datei braucht einen Moment, bis das erste Bild gezeichnet ist.

![image_3](/assets/images/Controls/Step-Viewer/stepviewer_03.png)

## Beispielprojekt
Du kannst das fertige Beispiel herunterladen und im Peakboard Designer öffnen, um die Modell-Ressource, die automatisch erzeugte Bauteilliste und die Tabellenbindung nachzuvollziehen: [Getriebe-Baugruppe (.pbmx)](/assets/files/examples/step-viewer-gearbox.pbmx).
