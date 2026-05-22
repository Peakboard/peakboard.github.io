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

Eine **Komponente** fasst mehrere Controls zu einer wiederverwendbaren Einheit zusammen. Sobald du eine Komponente erstellt hast, taucht sie wie ein neues Control im Control-Bereich auf und lässt sich beliebig oft auf einer oder mehreren Screens ablegen. Eine Änderung an der Komponente selbst (dem **Master**) gilt automatisch für jede einzelne **Instanz**. Komponenten eignen sich daher überall dort, wo dasselbe Layout mehrfach erscheint – typische Beispiele sind Header-Leisten, Navigationsleisten, Footer, KPI-Kacheln oder Status-Panele.

## Komponente erstellen

Lege zunächst die Controls auf der Zeichenfläche an, die deine Komponente bilden sollen, und richte sie wie gewünscht aus. Markiere anschließend alle Controls (z. B. per Lasso, mit `Strg + A` oder durch Klicks mit gehaltener `Shift`-Taste) und öffne mit einem Rechtsklick auf der Zeichenfläche das Kontextmenü. Dort findest du den Eintrag [Create component] – alternativ funktioniert das Tastaturkürzel `Strg + Q`.

![Kontextmenü mit Create component](/assets/images/Controls/Basics/components/components-01-contextmenu.png)

Im folgenden Dialog vergibst du der Komponente einen sprechenden Namen (z. B. `HeaderBar`) und wählst optional eine Farbe. Die Farbe wird ausschließlich für das Symbol im Control-Bereich und im Explorer verwendet und hilft dir, mehrere Komponenten auf den ersten Blick voneinander zu unterscheiden. Bestätige mit [OK].

![Create Component Dialog](/assets/images/Controls/Basics/components/components-02-create-dialog.png)

## Master und Instanz

Nach dem Bestätigen passieren mehrere Dinge gleichzeitig:

* Die markierten Controls bleiben als **Master** auf der Screen liegen – sie sind ab jetzt die Vorlage für jede weitere Verwendung.
* Im Explorer erscheint ein neuer Bereich [Components] mit dem Eintrag deiner Komponente (im Beispiel `HeaderBar`).
* Im Control-Bereich erscheint die Kategorie [Components], aus der du die Komponente per Drag-and-Drop wie jedes andere Control auf eine beliebige Screen ziehen kannst. Jedes so erzeugte Exemplar ist eine **Slave-Instanz**, die mit dem Master verbunden bleibt.

![Komponente im Explorer und im Control-Bereich](/assets/images/Controls/Basics/components/components-03-overview.png)

Es gibt also genau **einen Master** pro Komponente und beliebig viele **Slave-Instanzen**. Der Master ist ein normales Exemplar auf einer Screen – nur eben das, was als Vorlage gilt. Änderungen am Master werden automatisch in jede Slave-Instanz übernommen. Änderst du dagegen eine Slave-Instanz lokal, weicht nur diese eine Instanz vom Master ab; Master und übrige Slaves bleiben unberührt.

## Komponente bearbeiten

### Master umbenennen oder Farbe ändern

Mit einem Rechtsklick auf den Eintrag im Explorer-Bereich [Components] öffnest du das Kontextmenü der Komponente.

![Master-Kontextmenü](/assets/images/Controls/Basics/components/components-04-master-contextmenu.png)

* [Edit component] öffnet den Dialog mit Name und Farbe.
* [Delete component] entfernt die Komponente. Bestehende Slave-Instanzen verlieren dadurch ihre Verknüpfung.
* [Show instances] hebt im Explorer und auf den Screens alle Stellen hervor, an denen die Komponente verwendet wird – sehr nützlich, wenn du in großen Projekten den Überblick behalten willst.

### Inhalt des Masters ändern

Den Inhalt der Komponente änderst du direkt am Master auf der Zeichenfläche: Klappst du den Master im Explorer auf, kannst du die enthaltenen Controls wie gewohnt bearbeiten – Text ändern, Farbe anpassen, Controls hinzufügen oder löschen. Alle Slave-Instanzen übernehmen die Änderungen automatisch, sobald sie gespeichert sind. Es ist kein zusätzlicher Schritt nötig.

### Lokale Änderungen an einer Slave-Instanz

Du kannst auch eine einzelne Slave-Instanz lokal abweichen lassen, ohne dadurch den Master oder andere Instanzen zu beeinflussen – z. B. den Titeltext der Header-Leiste auf einer bestimmten Screen anders setzen. Dafür änderst du einfach die Controls innerhalb der Slave-Instanz direkt auf der Screen. Die übrigen Slaves und der Master bleiben dabei unverändert.

### Mit dem Master synchronisieren

Im Kontextmenü einer Slave-Instanz findest du drei Aktionen, die das Verhältnis zum Master steuern.

![Slave-Kontextmenü](/assets/images/Controls/Basics/components/components-05-instance-contextmenu.png)

* [Reset to master] verwirft alle lokalen Anpassungen der Slave-Instanz – die Instanz entspricht wieder exakt dem Master.
* [Detach from component] löst die Verbindung zum Master ganz auf. Die Instanz wird in eine normale [Gruppe](/controls/de-gruppen.html) umgewandelt und lebt ab diesem Moment unabhängig weiter.
* [Set as master] befördert eine Slave-Instanz zum neuen Master. Der bisherige Master wird damit selbst zu einer Slave-Instanz. Praktisch, wenn du an einer einzelnen Stelle bessere Vorgaben gebaut hast und diese ab jetzt für alle anderen Instanzen gelten sollen.

## Typische Anwendungsfälle

* **Header- und Footer-Leisten**, die auf jeder Screen identisch sein sollen. Eine Änderung am Master reicht aus, um alle Screens auf einen Schlag zu aktualisieren.
* **Navigationsleisten** mit mehreren Buttons, die über [Screen change] auf andere Screens verweisen.
* **Wiederkehrende KPI-Kacheln** oder **Status-Panele**, deren Aussehen einheitlich bleiben soll.
* **Branding-Elemente** wie Logos in Kombination mit der Uhrzeit, die du in jeder Anwendung wiederverwenden willst.

Wenn du nur einmalig mehrere Controls gemeinsam verschieben oder ausrichten möchtest, ohne die Wiederverwendbarkeit eines Masters zu brauchen, ist die Funktion [Group](/controls/de-gruppen.html) (`Strg + G`) aus demselben Kontextmenü die einfachere Wahl.
