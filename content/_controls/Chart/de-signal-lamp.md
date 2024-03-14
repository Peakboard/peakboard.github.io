---
layout: article
title: Signalleuchte
menu_title: Signalleuchte
description: Information über das Peakboard Designer Signalleuchte Control.
lang: de
weight: 690
ref: con-690
redirect_from:
 - /controls/de-signal-block.html
 - /controls/Chart/de-signal-block.html
---

Mit dem Signalleuchte Control kannst du mithilfe von Signalregeln mit wenig Aufwand eine automatisch schaltende Signalleuchte erstellen, um beispielsweise einen aktuellen Status abzubilden.

## Signalleuchte hinzufügen

Ziehe das Signalleuchte Control (1) per Drag-and-Drop auf die Arbeitsfläche, um es deiner Anwendung hinzuzufügen. Der Konfigurationsdialog wird automatisch geöffnet.

![Signalleuchte hinzufügen](/assets/images/Controls/signal/de-signal-01.png)

## Signalleuchte mit Datenquelle verknüpfen

Als Grundlage für die Signalleuchte eignen sich viele verschiedene Datenquellen. Durch die Signalregeln können viele verschiedene Inputs verwendet werden. Wähle die gewünschte Datenquelle im Drop-down-Menü aus (1). Wenn es sich um eine tabellarische Datenquelle handelt, kannst du dann noch Spalte (2) und Zeile (3) auswählen, die für das Signal genutzt werden sollen.

Wenn gewünscht, kannst du noch einen Titel (4) und Untertitel (5) vergeben. Bestätige dann den Dialog.

![Signalleuchte einrichten](/assets/images/Controls/signal/de-signal-02.png)

## Signalregeln bearbeiten

Im nächsten Schritt legst du fest, wie viele Signale du anzeigen möchtest und welche Regeln für deren Schaltung gelten sollen.
Klicke dazu in den Attributen des Controls auf [...] (1) hinter [Signalregeln] im Bereich [Daten], um den Dialog zur Bearbeitung zu öffnen.

![Signalregeln öffnen](/assets/images/Controls/signal/de-signal-03.png)

### Signale hinzufügen und anpassen

Der Dialog zeigt eine Übersicht über die aktuell hinzugefügten Signale. Mit dem [+] Button (1) fügst du weitere Signale hinzu.

In der ersten Spalte siehst du die Farben der Signale (2). Die zweite Spalte zeigt den Grundzustand des jeweiligen Signals (3). Du kannst zwischen [On], [Off] und [Blink] wählen. In der dritten Spalte siehst du, wie viele Regeln für das Signal definiert wurden (4). Durch einen Klick auf das Zahnrad-Symbol (5) gelangst du in den Dialog zum Bearbeiten der Regeln.

Mit einem Klick auf das Papierkorb-Symbol (6) können Signale gelöscht werden. Mit den Pfeilen (7) änderst du die Reihenfolge der Signale.

![Signale hinzufügen](/assets/images/Controls/signal/de-signal-04.png)

### Signalregeln pro Signal definieren

Hast du auf das Zahnrad-Symbol geklickt, öffnet sich der Dialog zum Bearbeiten der Regeln. Über das [+] Symbol (1) fügst du eine neue Regel hinzu.

Im ersten Auswahlfeld legst du fest, welcher Datentyp für die Regel genutzt wird (2). Das zweite Auswahlfeld definiert den Operator (3) und das dritte Feld den Wert (4), der genutzt wird. Im vierten Feld definierst du, welchen Zustand das Signal bekommen soll (5), wenn die Bedingung aus den drei anderen Feldern erfüllt wird.

Mit dem Papierkorb-Symbol (6) kannst du angelegte Regeln löschen. Mit den Pfeilen (7) änderst du die Reihenfolge der Regeln.

![Signalregeln definieren](/assets/images/Controls/signal/de-signal-05.png)

## Aussehen der Signalleuchte anpassen

Zuletzt kannst du jetzt in den Attributen im Bereich [Aussehen] anpassen, wie dein Signal aussehen soll.
Ändere dazu den allgemeinen Hintergrund (1), die Kontur der Signalleuchte (2), sowie die Attribute der einzelnen Signale (3).
So kannst du die Signalleuchte passend zu deiner Anwendung gestalten.

![Signalleuchte gestalten](/assets/images/Controls/signal/de-signal-06.png)
