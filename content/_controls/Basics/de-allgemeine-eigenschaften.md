---
layout: article
title: Allgemeine Eigenschaften
menu_title: Allgemeine Eigenschaften
description: Allgemeine Eigenschaften
lang: de
weight: 0
ref: con-0
redirect_from:
 - /controls/01-de-allgemeine-eigenschaften.html
 - /controls/de-allgemeine-eigenschaften.html
---

Alle Controls haben Eigenschaften. Dazu gehören zum einen spezielle Eigenschaften, die nur für das jeweilige Control gelten, aber auch allgemeine Eigenschaften, die fast bei jedem oder zumindest bei vielen Controls vorkommen. Damit nicht auf jeder Hilfe-Seite immer alle Eigenschaften wieder und wieder erklärt werden müssen, sind die Eigenschaften, die bei mehr als einem Control auftauchen, im folgenden Artikel zusammengefasst. Der Eigenschaften-Bereich ist in die folgenden Abschnitte unterteilt.

<a name="anfang"></a>

* **[Control-Positionierung](#positionierung)**
* **[Control-Ausrichtung](#ausrichtung)**
* **[Allgemeines](#allgemeines)**
* **[Daten](#daten)**
* **[Aussehen](#aussehen)**
* **[Logik](#logik)**

### Control-Positionierung {#positionierung}

Mit den Positionierungswerkzeugen kannst du die Controls automatisch skalieren und einen bestimmten Bereich füllen lassen.

{% include styled_table.html %}
| **Eigenschaft** | **Beschreibung** |
|-----------------|------------------|
| Oben links füllen | Füllt den oberen linken Bereich der Arbeitsfläche mit dem Control aus. |
| Oben füllen | Füllt die obere Hälfte der Arbeitsfläche mit dem Control aus. |
| Oben rechts füllen | Füllt den oberen rechten Bereich der Arbeitsfläche mit dem Control aus. |
| Unten links füllen | Füllt den unteren linken Bereich der Arbeitsfläche mit dem Control aus. |
| Unten füllen | Füllt die untere Hälfte der Arbeitsfläche mit dem Control aus. |
| Unten rechts füllen | Füllt den unteren rechten Bereich der Arbeitsfläche mit dem Control aus. |
| Links füllen | Füllt die linke Hälfte der Arbeitsfläche mit dem Control aus. |
| Rechts füllen | Füllt die rechte Hälfte der Arbeitsfläche mit dem Control aus. |
| Bildschirm füllen | Füllt die gesamte Arbeitsfläche mit dem Control aus. |
| Control zentrieren | Zentriert das gewählte Control in der Arbeitsfläche. |

<div class="box-tip" markdown="1">
**Tipp:**

Wird die Shift-Taste gehalten, wird automatisch ein Abstand rundherum hinzugefügt.
</div>

[zum Seitenanfang](#anfang)

### Control umwandeln {#umwandeln}

Verwandte Controls lassen sich ineinander umwandeln, ohne sie neu aufzubauen. Klicke das Control mit der rechten Maustaste an und wähle den entsprechenden Eintrag im Kontextmenü. Die Datenbindung und die Eigenschaften, die beide Controls gemeinsam haben, werden übernommen.

{% include styled_table.html %}
| **Control** | **Umwandelbar in** | **Hinweise** |
|-----------------|------------------|------------------|
| Gauge-Diagramm Linear | Gauge-Diagramm Rund | Bedingte Formatierung bleibt erhalten, die Größe nicht |
| Gauge-Diagramm Rund | Gauge-Diagramm Linear | Bedingte Formatierung bleibt erhalten, die Größe nicht |
| Styled List | Styled Tile Kollektion | Größe bleibt erhalten, nur auf einem Bildschirm verfügbar |
| Styled Tile Kollektion | Styled List | Größe bleibt erhalten, nur auf einem Bildschirm verfügbar |
| Checkbox | Schalter | Größe bleibt erhalten, bedingte Formatierung wird nicht übernommen |
| Schalter | Checkbox | Größe bleibt erhalten, bedingte Formatierung wird nicht übernommen |

Die Umwandlung zwischen Styled List und Styled Tile Kollektion wird innerhalb eines Styled-List- oder Kachel-Templates nicht angeboten – nur für ein Control, das direkt auf einem Bildschirm liegt.

[zum Seitenanfang](#anfang)

### Stapelreihenfolge (Z-Index) {#z-index}

Überlappen sich Controls, entscheidet der Z-Index, welches oben gezeichnet wird. Neben den Hotkeys, mit denen sich ein Control schrittweise nach vorn oder hinten schieben lässt, gibt es dafür einen Slider.

Wähle ein einzelnes Control oder eine einzelne Gruppe aus und **halte die Alt-Taste gedrückt**. Über dem ausgewählten Element erscheint mittig ein senkrechter Slider. Ziehe den Griff, um das Element durch die Stapelreihenfolge zu bewegen, und lass die Maustaste los, um die neue Position zu übernehmen. Lässt du die Alt-Taste los, verschwindet der Slider wieder.

![Z-Index-Slider auf der Arbeitsfläche](/assets/images/Controls/Basics/zorder-slider.png)

Zwei Dinge sind dabei wichtig:

* Der Slider sortiert ausschließlich innerhalb der **übergeordneten Gruppe** um. Ein Control innerhalb einer Gruppe kann also nie vor oder hinter ein Element außerhalb dieser Gruppe geschoben werden.
* Der gesamte Ziehvorgang zählt als **ein einziger Schritt** für die Rückgängig-Funktion – unabhängig davon, über wie viele Positionen du das Element bewegst.

Der Slider erscheint nur, wenn es überhaupt etwas umzusortieren gibt, die übergeordnete Gruppe also mehr als ein Element enthält.

[zum Seitenanfang](#anfang)

### Control-Ausrichtung {#ausrichtung}

Werden mehrere Controls gleichzeitig markiert, erscheinen die Ausrichtungsoptionen für die gewählten Controls. Die anderen Eigenschaften können nicht Control-übergreifend festgelegt werden und sind daher ausgeblendet.

{% include styled_table.html %}
| **Eigenschaft** | **Beschreibung** |
|-----------------|------------------|
| Links ausrichten | Richtet die gewählten Controls an der linken Kante des Controls aus, das sich am weitesten links auf der Arbeitsfläche befindet. |
| Zentriert ausrichten | Richtet die gewählten Controls an ihrer gemeinsamen senkrechten Achse aus. |
| Rechts ausrichten | Richtet die gewählten Controls an der rechten Kante des Controls aus, das sich am weitesten rechts auf der Arbeitsfläche befindet. |
| Oben ausrichten | Richtet die gewählten Controls an der oberen Kante des Controls aus, das sich am weitesten oben auf der Arbeitsfläche befindet. |
| Mittig ausrichten | Richtet die gewählten Controls an ihrer gemeinsamen waagrechten Achse aus. |
| Unten ausrichten | Richtet die gewählten Controls an der unteren Kante des Controls aus, das sich am weitesten unten auf der Arbeitsfläche befindet. |
| Horizontale Abstände angleichen | Wenn mehr als zwei Controls ausgewählt sind, kannst du mit dieser Eigenschaft die horizontalen Abstände zwischen den Controls gleich groß machen. |
| Vertikale Abstände angleichen | Wenn mehr als zwei Controls ausgewählt sind, kannst du mit dieser Eigenschaft die vertikalen Abstände zwischen den Controls gleich groß machen. |
| Horizontale Abstände entfernen | Wenn mehr als zwei Controls ausgewählt sind, kannst du mit dieser Eigenschaft die horizontalen Abstände zwischen den Controls entfernen. |
| Vertikale Abstände entfernen | Wenn mehr als zwei Controls ausgewählt sind, kannst du mit dieser Eigenschaft die vertikalen Abstände zwischen den Controls entfernen. |

[zum Seitenanfang](#anfang)

### Allgemeines {#allgemeines}

In diesem Bereich findest du Eigenschaften, die sich die meisten Controls teilen.

{% include styled_table.html %}
| **Eigenschaft** | **Beschreibung** |
|-----------------|------------------|
| Breite | Die Breite des Controls in Pixeln. |
| Höhe | Die Höhe des Controls in Pixeln. |
| Links | Der Abstand des Controls zum linken Rand der Arbeitsfläche in Pixeln. |
| Oben | Der Abstand des Controls zum oberen Rand der Arbeitsfläche in Pixeln. |
| Control anzeigen/verbergen | Blendet das Control auf der Arbeitsfläche ein oder aus. |
| Control fixieren/lösen | Fixiert das Control auf der Arbeitsfläche und deaktiviert somit die Möglichkeit das Control zu verschieben oder löst diese Fixierung. |
| Abstand | Definiert einen Innenabstand für den Rahmen des Controls in Pixeln. |
| Titel und Untertitel | Fügt einen Titel und/oder Untertitel zum Control hinzu, ohne dass du dafür ein separates Textfeld nutzen musst. |

#### Rechnen in den Größen- und Positionsfeldern

**Breite**, **Höhe**, **Links** und **Oben** – und ebenso die vier Felder unter **Abstand** – nehmen statt einer reinen Zahl auch eine Rechnung entgegen. Tippe `160*2` in **Breite** und drücke Enter, dann steht dort `320`. Das erspart dir den Taschenrechner, wenn ein Control doppelt so breit, halb so hoch oder 40 Pixel weiter rechts sein soll.

![Eine Rechnung im Feld Breite im Eigenschaftenbereich](/assets/images/Controls/Basics/property-arithmetic.png)

{% include styled_table.html %}
| **Eingabe** | **Ergebnis** | **Rechenart** |
|-----------------|------------------|------------------|
| `300+50` | 350 | Addition |
| `350-100` | 250 | Subtraktion |
| `160*2` | 320 | Multiplikation – mit dem Sternchen |
| `500/4` | 125 | Division |
| `(100+50)*2` | 300 | Klammern, mit der üblichen Punkt-vor-Strich-Regel |

Gerechnet wird, sobald du Enter drückst oder das Feld verlässt, nie schon während des Tippens. Die Pfeiltasten erhöhen und verringern den Wert weiterhin um jeweils ein Pixel.

<div class="box-tip" markdown="1">
**Hinweis:**

* Das Ergebnis wird immer auf ganze Pixel gerundet. Aus `125/2` wird also 62 und nicht 62,5.
* Der Buchstabe **x** ist kein Malzeichen. Er wird aus der Eingabe entfernt, `250x2` ergibt daher nicht 500, sondern 2502 – nimm immer `*`.
* Ein Ergebnis unter null wird zu 0. `100-300` im Feld **Links** ergibt 0 und nicht -200.
* Lässt sich die Rechnung nicht auflösen – ein Rechenzeichen ohne zweite Zahl, etwa `320+` –, wird das Feld auf **0** gesetzt und der vorherige Wert ist weg. Rückgängig holt ihn nicht zurück; prüfe den Wert also nach einer Eingabe.
</div>

[zum Seitenanfang](#anfang)

### Daten {#daten}

Dieser Bereich ist nicht bei allen Controls verfügbar und unterscheidet sich stark zwischen den unterschiedlichen Controls. Meist können hier Werte händisch eingegeben oder Datenquellen mit dem Control verknüpft werden.

Im Bindungs-Popup gibt es Buttons, um eine Datenbindung zu kopieren und auf einer anderen Eigenschaft einzufügen. Das erspart dir, Datenquelle, Spalte und Zeile erneut durchzuklicken, wenn mehrere Eigenschaften eines Boards aus derselben Quelle lesen sollen. Kopieren ist erst verfügbar, sobald tatsächlich eine Datenquelle ausgewählt ist.

Die Schriftauswahl ist ein durchsuchbares Dropdown: Tippe los, und die Liste filtert sich – deutlich schneller als Scrollen, sobald ein Projekt viele Schriftarten definiert hat.

[zum Seitenanfang](#anfang)

### Aussehen {#aussehen}

In diesem Bereich kannst du mit verschiedenen Eigenschaften das Aussehen des Controls beeinflussen. Die zur Verfügung stehenden Eigenschaften unterscheiden sich je nach gewähltem Control. Häufig lassen sich Hintergrundfarben, Konturen, Schatten, Schriftarten und viele weitere Eigenschaften anpassen.

**Farbverläufe:** Überall dort, wo sich eine Hintergrundfarbe einstellen lässt, kannst du statt einer einfarbigen Fläche auch einen Farbverlauf wählen – auch beim Button-Control. Jeder Farbpunkt eines Verlaufs hat eine eigene Deckkraft, sodass ein Control zu einer Kante hin ausblenden kann, statt hart abzubrechen.

Die Zeichenfläche ist die Ausnahme: Ihr Hintergrund ist immer eine einfarbige Fläche.

[zum Seitenanfang](#anfang)

### Logik {#logik}

In diesem Bereich findest du Eigenschaften, die mit Logik zu tun haben. Neben dem reinen [Scripting](/scripting/de-script-engine.html) findest du auch Eigenschaften für Low-Code und No-Code Bereiche wie beispielsweise die [bedingte Formatierung](/controls/Basics/de-cf.html).

{% include styled_table.html %}
| **Eigenschaft** | **Beschreibung** |
|-----------------|------------------|
| Ist aktiviert | Aktiviert oder deaktiviert das Control in der Anwendung. Du kannst diese Eigenschaft per Skript ansteuern und ändern. |
| In Skripten verwendet | Aktivierst du diese Eigenschaft, stehen weitere Eigenschaften wie der Controlname zur Verfügung. Dieser wird benötigt damit das Control in Skripten angesprochen werden kann. |
| Controlname | Ein eindeutiger Name für das Control (ohne Sonderzeichen), um es von Skripten aus anzusteuern. Nur wenn das Control tatsächlich von Skripten aus genutzt wird, musst du einen Namen vergeben. |
| Bedingte Formatierung | Die [bedingte Formatierung](/controls/Basics/de-cf.html) erlaubt es dir, unterschiedliche Eigenschaften eines Controls aufgrund eines definierten Ereignisses zu verändern, ohne dabei auf komplexe Skripte zurückgreifen zu müssen. |
| Events | Diese Eigenschaften können verwendet werden, um den Skript-Editor aufzurufen, der ein oder mehrere Skripte enthält, die aufgerufen werden, wenn Ereignisse des gewählten Controls auftreten. |

[zum Seitenanfang](#anfang)
