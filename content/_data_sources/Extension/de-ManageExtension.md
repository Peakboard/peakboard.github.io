---
layout: article
title: Extensions verwalten
menu_title: Extensions verwalten
description: Grundlagen für das Extension Kit
lang: de
weight: 2605
ref: dat-2605
redirect_from:
---


### Extensions hinzufügen
Um eine Extension in den Peakboard Designer hinzuzufügen benötigst du die Extension als zip-Datei.
Über den Button [Allgemeines] in der Menüleiste und einen Klick auf [Erweiterungen] (1) gelangst du in die Verwaltung der Extensions.

![Extension hinzufügen](/assets/images/data-sources/extension/Peakboard-Extension_add-01_de.png)

Dort klickst du auf den Button [Hinzufügen/Aktualisieren] (2) und wählst deine zip-Datei aus.

![Extension hinzufügen](/assets/images/data-sources/extension/Peakboard-Extension_add-02_de.png)

Nach einem Neustart des Peakboard Designers, erscheint die Extension unter [Datenquellen] (3) sowie in der Verwaltung der Extensions.

![Extension hinzufügen](/assets/images/data-sources/extension/Peakboard-Extension_add-03_de.png)

<div class="box-warning" markdown="1">
**Achtung!**

Es ist nicht nötig, die Peakboard Box in irgendeiner Form zu modifizieren. 
Die Extension wird durch den Deploy-Vorgang eines Dashboards automatisch auf die Peakboard Box geladen.
</div>

### Extensions löschen
Um hinzugefügte Extensions zu löschen öffnest du die Verwaltung der Extensions ([Allgemeines], [Erweiterungen]) und klickst in der Spalte [Aktion] auf den Pfeil für das Drop-down-Menü und wählst den Punkt [Löschen] (4) aus.

![Extension löschen](/assets/images/data-sources/extension/Peakboard-Extension_delete_de.png)

Nach einem Neustart des Peakboard Designers erscheint die Extension nicht mehr in den Datenquellen oder der Verwaltung der Extensions.

### Beispiel-Extensions herunterladen
In unserer [Template Gallery](https://templates.peakboard.com/) findest du einige Extensions die du direkt nutzen kannst.
Lade dir die Extension herunter und füge sie wie oben beschrieben im Peakboard Designer ein.

![Extension herunterladen](/assets/images/data-sources/extension/Peakboard-Extension_download_de.png)

### Extensions selbst schreiben
Möchtest du die Extensions anpassen oder eine eigene Extension schreiben, dann findest du in unserem [Github-Repository](https://github.com/Peakboard/PeakboardExtensions) ebenfalls die bestehenden Extensions und hilfreiche Artikel z.B. [hier](https://help.peakboard.com/data_sources/Extension/de-DatasourceNoUI.html) in der Peakboard help. 
Die Beispiele sind einfach gehalten und zeigen die anzuwendende Architektur anschaulich. 
Jede Extension liegt im Quellcode vor (Verzeichnis SourceCode) und als Datei zum Einspielen (Binaries).