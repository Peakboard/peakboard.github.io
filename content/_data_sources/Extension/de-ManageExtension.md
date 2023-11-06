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

### Extensions hinzufügen und löschen

Über [Daten], [Datenquelle hinzufügen] und [Extensions verwalten] (1) gelangst du in den Verwaltungsdialog für die Peakboard Extensions. Oberhalb von diesem Punkt werden derzeit installierte Extensions bereits angezeigt.

![Extensions verwalten](/assets/images/data-sources/extension/de_extension_add-01.png)

Du findest dort eine Übersicht über die von Peakboard bereitgestellten Extensions. Bereits installierte Extension sind entsprechend markiert (1).
Um eine Extension zu installieren, klickst du auf den [Installieren] (2) Button unter der gewünschten Extension.
Um bereits installierte Extensions zu löschen, klickst du auf das Mülleimer-Symbol (3) unter der entsprechenden Extension.

![Extension hinzufügen](/assets/images/data-sources/extension/de_extension_add-02.png)

Damit die Änderungen übernommen werden, musst du den Peakboard Designer neu starten.
Die aktuell hinzugefügten Extensions sind jetzt unter [Daten], [Datenquelle hinzufügen] sichtbar (4).
Gelöschte Extensions sind dort nun nicht mehr sichtbar.

![Extension hinzufügen](/assets/images/data-sources/extension/de_extension_add-03.png)

<div class="box-warning" markdown="1">
**Achtung!**

Es ist nicht nötig, die Peakboard Box in irgendeiner Form zu modifizieren.
Die Extension wird durch den Deployment-Vorgang eines Dashboards automatisch auf die Peakboard Box geladen.
</div>

### Extensions selbst schreiben

Möchtest du die Extensions anpassen oder eine eigene Extension schreiben, dann findest du in unserem [GitHub-Repository](https://github.com/Peakboard/PeakboardExtensions) ebenfalls die bestehenden Extensions und hilfreiche Artikel z.B. [hier](https://help.peakboard.com/data_sources/Extension/de-DatasourceNoUI.html) in der Peakboard help.
Die Beispiele sind einfach gehalten und zeigen die anzuwendende Architektur anschaulich.
Jede Extension liegt im Quellcode vor (Verzeichnis SourceCode) und als Datei zum Einspielen (Binaries).

### Eigene Extension installieren

Um eine eigene Extension zum Peakboard Designer hinzuzufügen, benötigst du die Extension als zip-Datei.
Klicke in der Extension-Verwaltung unter [Daten], [Datenquelle hinzufügen], [Extensions] und [Extensions verwalten] auf [Eigene Extension hinzufügen] (1), wähle dann die zip-Datei aus, um die Extension zu installieren.

![Eigene Extension hinzufügen](/assets/images/data-sources/extension/de_extension_add-04.png)

Damit die Änderungen übernommen werden, musst du den Peakboard Designer neu starten.
Die neu hinzugefügte eigene Extension ist jetzt unter [Daten], [Datenquelle hinzufügen], [Extensions] sichtbar.
