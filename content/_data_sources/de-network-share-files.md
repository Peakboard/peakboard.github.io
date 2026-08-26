---
layout: article
title: Network share files
menu_title: Network share files
description: Den Inhalt eines Netzwerkordners als Dateitabelle in Peakboard einlesen.
lang: de
weight: 1650
ref: dat-1650
---

Die Datenquelle Network share files liest nicht den *Inhalt* einer Datei, sondern den *Ordner selbst*. Du bekommst eine Zeile je Datei – mit Pfad, Namen und dem Zeitpunkt der letzten Änderung. Damit lassen sich Dinge bauen, die ein Dashboard sonst nicht zeigen kann: die neueste Zeichnung für einen Arbeitsplatz, wie viele Prüfberichte heute eingegangen sind, oder ob das Schichtprotokoll von gestern Nacht überhaupt existiert.

<div class="box-tip" markdown="1">
**Hinweis:**

Der Dialog dieser Datenquelle liegt derzeit nur auf Englisch vor, auch wenn der Peakboard Designer auf Deutsch eingestellt ist.
</div>

### Datenquelle einrichten

Lege im Explorer eine neue Datenquelle an und wähle [Network share files]. Der Dialog fragt nach:

* **Data source name:** der Name, unter dem die Liste in deinem Projekt erscheint.
* **Folder path:** der UNC-Pfad des Ordners auf dem Netzlaufwerk, zum Beispiel `\\Server\Ordner`.
* **Username** und **Password:** ein Benutzer mit Zugriffsrechten auf diesen Ordner, angegeben als `Domäne\Benutzer`. Lass beides leer, wenn der Ordner ohne eigene Anmeldedaten erreichbar ist.
* **Max rows:** die Obergrenze der einzulesenden Zeilen. Voreingestellt sind 1000 – sinnvoll, denn ein Ordner kann weit mehr Dateien enthalten, als ein Dashboard je laden sollte.
* **Check subfolders:** durchläuft auch die Ordner unterhalb des angegebenen Pfads statt nur dessen oberste Ebene.
* **Include folders:** listet die Ordner selbst als Zeilen auf, nicht nur die Dateien.

Klicke auf das Neuladen-Symbol über der Vorschau, um die Daten zu laden und zu prüfen, ob Pfad und Anmeldedaten stimmen, bevor du mit [OK] bestätigst.

### Die Spalten

| Spalte | Inhalt |
|---|---|
| `Path` | der vollständige Pfad der Datei |
| `Name` | der Dateiname, ohne Pfad |
| `LastModified` | wann die Datei zuletzt geändert wurde |
| `IsFolder` | nur vorhanden, wenn [Include folders] aktiviert ist: ob die Zeile ein Ordner ist |

`LastModified` kommt als Text an. Willst du danach sortieren oder filtern oder ein Alter daraus berechnen, wandle den Wert zuerst in einem [Dataflow](/dataflows/de-erste-schritte.html) um.

### Typische Anwendungen

* Binde die Liste an eine Tabelle, um die Dokumente eines Arbeitsplatzes anzuzeigen, sortiert nach [LastModified], damit das Neueste oben steht.
* Begrenze die Zeilen per Dataflow auf einen einzelnen Tag und zeige die Anzahl als KPI – wie viele Berichte heute geliefert wurden.
* Kombiniere [Path] mit einem [Bild](/controls/Media/de-image.html)- oder [PDF](/controls/Document/de-pdf.html)-Control, um die neueste Zeichnung aus dem Ordner direkt auf dem Dashboard darzustellen.

<div class="box-tip" markdown="1">
**Tipp:**

Auch die Peakboard Box braucht Zugriff auf die Netzwerkfreigabe, nicht nur dein Rechner. Anmeldedaten, die im Peakboard Designer funktionieren, weil du gerade an der Domäne angemeldet bist, funktionieren auf dem Gerät nicht zwangsläufig – genau dafür sind die Felder für Benutzername und Passwort da.
</div>
