---
layout: article
title: PDF/Bild wechseln
menu_title: PDF/Bild wechseln
description: Beschreibt das Ändern eines Bildes oder PDFs mit einem Building Block oder Skript.
lang: de
weight: 120
ref: scr-120
redirect_from:
---

In Peakboard-Anwendungen können Bilder und PDFs angezeigt werden. Bei Bedarf ist es möglich diese dynamisch über ein Skript anzupassen.

### PDF/Bild ändern

Zum Anzeigen eines PDFs oder Bildes wird das entsprechende Control (PDF/Bild) benötigt. Bei diesem muss das Verwenden in Skripten aktiviert, sowie ein Name zugewiesen werden.

Zusätzlich sind verschiedene Bild- oder PDF-[Ressourcen](https://help.peakboard.com/resources/de-resources-intro.html) notwendig. Bei Bedarf kann dem Control initial eine Ressource zugewiesen werden. Anschließend kann zwischen den verschiedenen Ressourcen gewechselt werden.

Diese Funktion ist sowohl über die Peakboard Building Blocks als auch über das normale Lua-Skripting verfügbar.

### Building Blocks

![Building Blocks PDF wechseln](/assets/images/scripting/Scripting_Beispiele/pdf-image-change/de-pdf-change-script.png)

Im Screenshot sind die Building Blocks zum Ändern der PDF-Ressource zu sehen. Speziell ist der Befehl zum Setzen der neuen Ressource im lila eingefärbten Block: ```setze Quelle von PDF_Control in Screen1 auf 'Demo_PDF.pdf'```. Dabei entspricht ```Demo_PDF.pdf``` dem Namen der neu zu verwendenden Ressource.

Im gezeigten Beispiel wird abwechselnd zwischen zwei PDFs gewechselt. Dazu wird eine Variable mit der aktuell angezeigten PDF (1 oder 2) mitgeführt. In einer umschließenden IF-Abfrage wird diese Variable geprüft und entsprechend die jeweils andere PDF-Ressource verwendet sowie der Wert der Variablen geändert.

### Lua-Code

Im unteren Teil des Screenshots kann der entsprechende Lua-Code betrachtet werden. Zeilen 2 und 5 zeigen das Setzen der neuen Ressource über den Ressourcennamen.

Die restlichen Zeilen beschreiben das Wechseln sowie Prüfen der Variablen zur aktuell verwendeten Ressource.

### PDF/Bild-Control

Das oben beschriebene Beispiel für PDFs funktioniert analog für Bilder. Dabei wird statt des PDF-Controls ein Bild-Control verwendet. Ebenso sind anstelle der PDF-Ressourcen Bild-Ressourcen notwendig.