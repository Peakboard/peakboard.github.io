---
layout: article
title: Komponenten
menu_title: Komponenten
description: Mehrere Controls als wiederverwendbare Komponente kombinieren – Master und Instanz im Peakboard Designer.
lang: de
weight: 40
ref: con-40
redirect_from:
  - /controls/de-komponenten.html
---

Eine **Komponente** fasst mehrere Controls zu einer wiederverwendbaren Einheit zusammen. Sobald du eine Komponente erstellt hast, taucht sie wie ein neues Control im Control-Bereich auf und lässt sich beliebig oft auf einer beliebigen Screen ablegen. Eine Änderung an der Komponente selbst (dem **Master**) gilt automatisch für jede einzelne **Instanz**. Komponenten eignen sich daher überall dort, wo dasselbe Layout mehrfach erscheint – typische Beispiele sind Header-Leisten, Navigationsleisten, Footer, KPI-Kacheln oder Status-Panele.

## Komponente erstellen

Lege zunächst die Controls auf der Zeichenfläche an, die deine Komponente bilden sollen, und richte sie wie gewünscht aus. Markiere anschließend alle Controls (z. B. per Lasso, mit `Strg + A` oder durch Klicks mit gehaltener `Strg`-Taste) und öffne mit einem Rechtsklick auf der Zeichenfläche das Kontextmenü. Dort findest du den Eintrag [Create component] – alternativ funktioniert das Tastaturkürzel `Strg + Q`.

![Kontextmenü mit Create component](/assets/images/Controls/Basics/components/components-01-contextmenu.png)

Im folgenden Dialog vergibst du der Komponente einen sprechenden Namen (z. B. `HeaderBar`) und wählst optional eine Farbe. Die Farbe wird ausschließlich für das Symbol im Control-Bereich und im Explorer verwendet und hilft dir, mehrere Komponenten auf den ersten Blick voneinander zu unterscheiden. Bestätige mit [OK].

![Create Component Dialog](/assets/images/Controls/Basics/components/components-02-create-dialog.png)

## Master und Instanz

Nach dem Bestätigen passieren mehrere Dinge gleichzeitig:

* Die markierten Controls werden in eine Gruppe verpackt – das ist die erste **Instanz** der Komponente auf dieser Screen.
* Im Explorer erscheint ein neuer Bereich [Components] mit dem **Master** deiner Komponente (im Beispiel `HeaderBar`).
* Im Control-Bereich gibt es zusätzlich eine neue Kategorie [Components], aus der du die Komponente per Drag-and-Drop wie jedes andere Control auf eine beliebige Screen ziehen kannst. Jede so erzeugte Gruppe ist eine weitere Instanz und bleibt mit dem Master verbunden.

![Komponente im Explorer und im Control-Bereich](/assets/images/Controls/Basics/components/components-03-overview.png)

Der **Master** ist die Vorlage; **Instanzen** sind die Kopien, die auf den Screens liegen. Änderst du den Master, schlagen die Änderungen sofort in allen Instanzen durch. Änderst du eine Instanz lokal, weicht nur diese eine Instanz vom Master ab – der Master und die übrigen Instanzen bleiben unberührt.

## Komponente bearbeiten

### Master umbenennen oder Farbe ändern

Mit einem Rechtsklick auf den Master im Explorer-Bereich [Components] öffnest du das Kontextmenü der Komponente.

![Master-Kontextmenü](/assets/images/Controls/Basics/components/components-04-master-contextmenu.png)

* [Edit component] öffnet den bekannten Dialog mit Name und Farbe.
* [Delete component] entfernt den Master. Bestehende Instanzen verlieren dadurch ihre Verknüpfung.
* [Show instances] hebt im Explorer und auf den Screens alle Stellen hervor, an denen die Komponente verwendet wird – sehr nützlich, wenn du in großen Projekten den Überblick behalten willst.

### Inhalt des Masters ändern

Den eigentlichen Inhalt (also welche Controls die Komponente enthält und wie sie aussehen) änderst du, indem du eine beliebige Instanz auf der Zeichenfläche aufklappst und die enthaltenen Controls bearbeitest. Damit die Änderung auch in den anderen Instanzen ankommt, klickst du anschließend mit der rechten Maustaste auf die geänderte Instanz im Explorer und wählst [Set as master]. Der aktuelle Stand der Instanz wird zur neuen Vorlage – alle anderen Instanzen übernehmen die Änderungen automatisch.

![Instanz-Kontextmenü](/assets/images/Controls/Basics/components/components-05-instance-contextmenu.png)

### Lokale Änderungen an einer Instanz

Solange du eine Änderung nicht über [Set as master] in den Master schreibst, gilt sie nur für die betroffene Instanz. So lässt sich z. B. auf einer einzelnen Screen der Titel der Header-Leiste anpassen, ohne das globale Layout zu verändern.

### Mit dem Master synchronisieren

Möchtest du eine lokal abgeänderte Instanz wieder an den Master angleichen, wählst du im Kontextmenü der Instanz [Reset to master]. Alle individuellen Anpassungen werden verworfen und die Instanz entspricht wieder exakt der Vorlage.

### Verbindung zum Master lösen

Soll eine Instanz dauerhaft ein eigenes Leben führen, klickst du auf [Detach from component]. Die Instanz wird in eine normale Gruppe umgewandelt und ist ab diesem Moment unabhängig vom Master.

## Typische Anwendungsfälle

* **Header- und Footer-Leisten**, die auf jeder Screen identisch sein sollen. Eine Änderung am Master reicht aus, um alle Screens auf einen Schlag zu aktualisieren.
* **Navigationsleisten** mit mehreren Buttons, die über [Screen change] auf andere Screens verweisen.
* **Wiederkehrende KPI-Kacheln** oder **Status-Panele**, deren Aussehen einheitlich bleiben soll.
* **Branding-Elemente** wie Logos in Kombination mit der Uhrzeit, die du in jeder Anwendung wiederverwenden willst.

Wenn du nur einmalig mehrere Controls gemeinsam verschieben oder ausrichten möchtest, ohne die Wiederverwendbarkeit eines Masters zu brauchen, ist die Funktion [Group] (`Strg + G`) aus demselben Kontextmenü die einfachere Wahl.
