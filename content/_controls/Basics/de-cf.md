---
layout: article
title: Bedingte Formatierung
menu_title: Bedingte Formatierung
description: Bedingte Formatierung
lang: de
weight: 10
ref: con-10
redirect_from:
 - /controls/de-cf.html
---

![Bedingte Formatierung](/assets/images/Controls/ConditionalFormatting/de_cf-00.png)

Die bedingte Formatierung erlaubt es dir, unterschiedliche Eigenschaften eines Controls aufgrund eines definierten Ereignisses zu verändern, ohne dabei auf komplexe Skripte zurückgreifen zu müssen.

Um für ein Control eine bedingte Formatierung festzulegen, ziehst du zunächst das gewünschte Control auf die Arbeitsfläche und wählst es aus (1). Im gezeigten Beispiel soll der Balken im oberen Bereich des [Templates](https://templates.peakboard.com/Detailed-Board-Single-Production-Line/) den Status der Produktionslinie anzeigen.
Der Standardzustand ist grün. Bei einem Fehler der Produktionslinie soll der Balken rot werden. Ist die Produktionslinie im Leerlauf, soll die Linie hellblau gefärbt sein.

In den Attributen im Bereich [Logik] findest du den Punkt [Bedingte Formatierung].
Dieser besteht im Wesentlichen aus drei Elementen. Das Textfeld (2) zeigt an, ob und wie viele Regeln du für dieses Control angelegt hast. Der Mülleimer (3) erlaubt es dir, alle Regeln zu löschen. Mit dem letzten Symbol (4) öffnest du den Regeleditor für die bedingte Formatierung.

![Bedingte Formatierung](/assets/images/Controls/ConditionalFormatting/de_cf-01.png)

Über das [+]-Symbol (1) legst du eine neue Regel an. Hier kannst du zunächst einen Namen (2) für die Regel zur einfacheren Identifikation vergeben.

Der Regeleditor selbst beruht auf einem simplen Wenn-Dann-Konzept.
Im WENN-Statement definierst du, wann die Regel ausgeführt werden soll (2), während du im DANN-Statement die entsprechende Aktion festlegst (3). Je nach Control-Typ kannst du Control-spezifische Eigenschaften verändern.

Hast du eine Regel angelegt, kannst du mit dem [+]-Symbol weitere Regeln für das Control festlegen.

![Neue Regel](/assets/images/Controls/ConditionalFormatting/de_cf-02.png)

Damit du im WENN-Statement eine Bedingung definieren kannst, benötigst du eine Datenquelle oder Variable, die später das DANN-Ereignis auslöst. Für die Zustände der Produktionslinie wird die Spalte [Status] der OPC UA Datenquelle [ProductionData_DF] herangezogen. Die Spalte hat die drei möglichen Zustände [Running], [Error] und [Idle].

Das Rechteck-Control soll in Rot angezeigt werden, wenn die Spalte [Status] den Zustand [Error] anzeigt. Benenne deine angelegte Regel also beispielsweise [Error] (1). Wähle dann im WENN-Bereich mit einem Klick auf das Klammer-Symbol (2) die Datenquelle, die Spalte und die Zeile aus. Wähle dann über das Drop-down-Menü den gewünschten Operator aus, in diesem Fall [==] (3). Im dritten Feld (4) trägst du jetzt den Wert ein, mit dem verglichen werden soll. Hier kann ein fest definierter Wert eingetragen werden oder ebenfalls eine Variable oder Datenquelle verknüpft werden. In diesem Fall trägst du den String [Error] ein. Je nach Anwendungsfall kannst du an dieser Stelle weitere UND-Bedingungen (5) beziehungsweise ODER-Blöcke (6) hinzufügen.

Im DANN-Bereich legst du jetzt die Aktion fest, die bei der Erfüllung des WENN-Bereichs ausgeführt werden soll. Wähle dazu die Eigenschaft aus, die du ändern möchtest (7) und definiere den neuen Wert (8). In diesem Fall soll die Hintergrundfarbe auf Rot geändert werden. Über den Button [Formatierung hinzufügen] (9) kannst du bei Bedarf weitere Aktionen festlegen, die ebenfalls bei der Erfüllung des WENN-Bereichs ausgeführt werden.

![Regel konfigurieren](/assets/images/Controls/ConditionalFormatting/de_cf-03.png)

Nach dem gleichen Schema legst du nun eine weitere Regel für den Zustand [Idle] an.

![Weitere Regel konfigurieren](/assets/images/Controls/ConditionalFormatting/de_cf-04.png)

In der Vorschau kannst du jetzt das Ergebnis der bedingten Formatierung betrachten.
Die bedingte Formatierung wird erst in der Vorschau oder auf der Peakboard Box ausgeführt!
Auf der Arbeitsfläche erfolgt keine Veränderung!

![Vorschau](/assets/images/Controls/ConditionalFormatting/de_cf-05.gif)
