---
layout: article
title: Gruppen
menu_title: Gruppen
description: Mehrere Controls als Gruppe zusammenfassen und gemeinsam ausrichten, bewegen oder per bedingter Formatierung steuern.
lang: de
weight: 50
ref: con-50
redirect_from:
  - /controls/de-gruppen.html
---

Eine **Gruppe** fasst mehrere Controls auf einer Screen zu einer gemeinsamen Einheit zusammen. Anders als bei einer [Komponente](/controls/de-komponenten.html) gibt es keinen Master und keine Wiederverwendbarkeit über mehrere Screens hinweg – die Gruppe ist eine reine Organisationshilfe für die aktuelle Screen. Sobald mehrere Controls gruppiert sind, lassen sie sich gemeinsam verschieben, ausrichten, ein- und ausblenden sowie über eine einzige bedingte Formatierung steuern.

## Gruppe erstellen

Wähle alle Controls aus, die du gruppieren möchtest (z. B. per Lasso, mit `Strg + A` oder durch Klicks bei gedrückter `Strg`-Taste). Öffne mit einem Rechtsklick auf der Zeichenfläche das Kontextmenü und wähle [Group]. Alternativ funktioniert das Tastaturkürzel `Strg + G`.

![Kontextmenü mit Group, Ungroup, Create component](/assets/images/Controls/Basics/groups/groups-01-contextmenu.png)

Im selben Menü findest du auch [Ungroup] (`Strg + Shift + G`), um eine bestehende Gruppe wieder aufzulösen, und [Create component] (`Strg + Q`), wenn aus der Auswahl statt einer einfachen Gruppe eine wiederverwendbare [Komponente](/controls/de-komponenten.html) entstehen soll.

## Was passiert nach dem Gruppieren

Die ausgewählten Controls werden im Explorer unter dem Screen-Knoten in einem neuen Ordner [Group1] zusammengefasst. Auf der Zeichenfläche teilen sich alle Mitglieder einen gemeinsamen Auswahlrahmen mit Anfasspunkten.

![Gruppe im Explorer mit gemeinsamem Auswahlrahmen](/assets/images/Controls/Basics/groups/groups-02-overview.png)

Wenn du die Gruppe als Ganzes auswählst, zeigt der Eigenschaftenbereich rechts oben den Reiter [Multiple selection] mit dem Abschnitt [Control layout]. Über diese Symbole richtest du die Mitglieder bündig aus (links, mittig, rechts, oben, Mitte, unten), verteilst sie mit gleichem Abstand oder entfernst alle Zwischenräume. Im Abschnitt [Logic] taucht zusätzlich der Eintrag [Conditional formatting (Group1)] auf – eine einzige Regel kann damit alle Mitglieder gleichzeitig betreffen (z. B. die komplette Gruppe ausblenden, wenn eine Variable einen bestimmten Wert annimmt).

Einzelne Controls innerhalb der Gruppe bleiben weiterhin frei editierbar. Du klickst sie einfach im Explorer oder durch erneutes Klicken auf der Zeichenfläche an und änderst Text, Farbe oder Größe wie gewohnt.

## Gruppen verschachteln und auflösen

Gruppen können verschachtelt werden: Markierst du eine bestehende Gruppe zusammen mit weiteren Controls und drückst `Strg + G`, entsteht eine übergeordnete Gruppe mit der bisherigen Gruppe als Mitglied. Über [Ungroup] (`Strg + Shift + G`) wird immer nur die jeweils oberste Ebene aufgelöst.

Beim Auflösen einer Gruppe gehen die einzelnen Controls nicht verloren – sie wandern lediglich wieder direkt unter den Screen-Knoten im Explorer. Eine eventuell am Gruppen-Ordner hinterlegte bedingte Formatierung wird mit der Gruppe entfernt.

## Gruppe oder Komponente?

| Kriterium | Gruppe (`Strg + G`) | [Komponente](/controls/de-komponenten.html) (`Strg + Q`) |
|---|---|---|
| Mehrfach verwendbar | Nein – existiert nur auf einer Screen | Ja – Master in [Components] mit beliebig vielen Instanzen |
| Synchronisiert sich | – | Ja – Änderungen am Master schlagen in allen Instanzen durch |
| Geeignet für | Lokales Ausrichten, gemeinsame bedingte Formatierung, gemeinsames Ein-/Ausblenden | Header-Leisten, Navigationsleisten, Footer, wiederkehrende KPI-Blöcke |
| Auflösen | [Ungroup] (`Strg + Shift + G`) | [Detach from component] auf der Instanz |

Faustregel: **Wenn du das Gebilde nur auf einer Screen brauchst, ist eine Gruppe völlig ausreichend. Sobald dasselbe Layout auf einer zweiten Screen erscheinen soll, lohnt sich der Wechsel auf eine Komponente.**

## Typische Anwendungsfälle

* **Layout-Block ausrichten:** Mehrere Texte, Icons und Hintergrundformen, die zusammen einen Kachel-Block bilden, gemeinsam an die richtige Position schieben oder skalieren.
* **Gemeinsame Sichtbarkeit:** Über eine Gruppen-bezogene bedingte Formatierung wird ein ganzer Bereich auf einer Screen ein- oder ausgeblendet, sobald sich eine Variable ändert (z. B. ein Wartungs-Hinweis-Block).
* **Übersicht im Explorer:** Bei vielen Controls auf einer Screen helfen Gruppen, den Explorer-Baum aufgeräumt zu halten – ähnlich wie Ordner in einem Dateisystem.
