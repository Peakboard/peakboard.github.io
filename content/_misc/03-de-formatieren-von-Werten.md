---
layout: article
title: Formatieren von Werten
menu_title: Formatieren von Werten
description: Formatieren von Werten
lang: de
weight: 300
ref: misc-300
redirect_from:
  - /misc/03-de-formatieren-von-Werten.html
---

Viele der Peakboard-Controls, z.B. Charts, Textblöcke, Table Grids etc., müssen Werte darstellen. In der Regel sind das entweder Zahlen oder Datumsangaben. Beide Arten von Werten zeichnen sich dadurch aus, dass sie in der Regel anders dargestellt werden sollen, als sie rein technisch vorhanden sind. Der Wert „2.96583“ soll beispielsweise als Betrag „2,96 €“ oder „20170620“ soll als schön formatiertes Datum „20.06.2017“ dem User präsentiert werden. Dazu gibt es an den verschiedensten Stellen der Controls Format-Eigenschaften, die alle nach demselben Prinzip funktionieren. Der folgende Screenshot zeigt die Format-Eigenschaft eines Textblocks:

![image_1](/assets/images/misc/Values/Format01.png)

Im einfachsten Fall können Sie sich das gewünschte Format über das Drop-Down aussuchen. Die häufigsten Fälle stehen dort zur Auswahl: Currency enthält ein Währungssymbol, Number ist eine Zahl ohne Einheit, Date ist ein Datum. Das Sprachkürzel (EN oder DE) sagt etwas über die Details der Formatierung aus und bezieht sich auf den jeweiligen Kulturkreis. DE hat ein € als Währungssymbol, einen Punkt als Tausendertrennzeichen und ein Komma als Dezimal-Separator. Im EN-Kulturkreis sind Dezimal-Separator und Tausendertrennzeichen genau umgekehrt. Das gleiche Prinzip gilt für das Datum.

Diese Standard-Formatierungen funktionieren natürlich nur dann, wenn die Eingangsdaten von Peakboard korrekt erkannt werden.

Falls die Standard-Formatierungen nicht ausreichen, oder die Eingangsdaten so ungewöhnlich gestaltet sind, dass sie nicht erkannt werden, muss mit einem Custom-Format gearbeitet werden. Das kommt allerdings sehr selten vor. Es ist davon auszugehen, dass 90% aller User mit den Standard-Formaten hinkommen.

Für ein Custom-Format muss im Drop-Down die entsprechende Funktion gewählt werden. Sie können dann den folgenden Dialog mit dem Knopf mit den drei Punkten öffnen.Output Format ist das Format für die Ausgabe, Output Locale ist der Kulturkreis, für den formatiert werden soll. Input Formate sind mit Komma getrennt nach absteigender Prio die Formate,mit denen die Interpretation der eingehenden Werte versucht werden soll.

Sie können auch bei den bestehenden Formaten einfach abschauen, was dort eingetragen ist. Unter dem folgenden Link finden Sie eine vollständige Liste aller Format-Werte, die verwendet werden können:

[https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings)

![image_1](/assets/images/misc/Values/Format02.png)
