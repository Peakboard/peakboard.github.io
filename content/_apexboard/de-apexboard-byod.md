---
layout: article
title: Apexboard - BYOD
menu_title: BYOD
description: Informationen zu den nötigen Schritten um Apexboard mit Peakboard BYOD zu nutzen
lang: de
weight: 995
ref: apex-995
---

Apexboard ist sofort einsatzbereit. Es besteht aus einer benutzerfreundlichen Industrieanwendung und einer IPC-Hardware von Peakboard sowie einem optionalen Mobile Shopfloor Board von Orgatex. Es gibt aber Situationen in denen du deine eigene Hardware nutzen möchtest. So kannst du das Apexboard auch direkt auf deinem lokalen PC nutzen.

Diese Anleitung beschreibt die lokale Installation auf einem handelsüblichen Windows-PC. Um auf den selben Datenbestand wie das pyhsische Apexboard zugreifen zu können, muss der PC auf den genutzten Peakboard Hub zugreifen können, da dort die Daten gespeichert werden. Nutzt du den Peakboard Hub Online benötigt der PC einen Internetzugang. Für den Peakboard Hub On Premise wird Netzwerkzugang benötigt.

### Peakboard Designer installieren

Für spätere Administrative Tätigkeiten benötigst du den Peakboard-Designer. Die [Installation für Windows kannst du hier herunterladen](https://peakboard.com/download/Peakboard/master/PeakboardSetup.exe).

Die Installation [führt dich durch den Prozess](/get_started/de-peakboard-designer.html).

### Peakboard BYOD installieren

Um Apexboard direkt auf deinem lokalen PC zu nutzen musst du [eine Instanz von Peakboard BYOD lokal installieren](/get_started/de-peakboard-byod.html).

Wie in der Installationsanleitung beschrieben, musst du die neue BYOD-Instanz dem Designer hinzufügen. Den dafür nötigen Lizenzschlüssel kannst du unter [sales@peakboard.com](mailto:sales@peakboard.com) anfragen.

<div class="box-tip" markdown="1">
**Hinweis:**

Diese BYOD-Lizenz musst du nicht separat erwerben, sie ist in der Apexboard-Lizenz enthalten.
</div>

### Apexboard Anwendung herunterladen und nutzen

Die pbmx-Datei der Apexboard Anwendung, die du für die Verwendung von Apexboard zusammen mit deiner BYOD-Instanz benötigst fragst du ebenfalls unter [sales@peakboard.com](mailto:sales@peakboard.com) an. Im Anschluss musst du [die pbmx-Datei mit Hilfe des Peakboard Designers auf deine BYOD-Instanz überspielen](/get_started/de-peakboard-box.html).

Nachdem du die pbmx-Datei und damit die Apexboard Anwendung auf die BYOD-Instanz überspielt hast, läuft sie dort auch nach einem Neustart. Wenn du [deinen Peakboard Hub bereits eingerichtet hast](/apexboard/de-apexboard-peakboard-hub.html), kannst du wie gewohnt [mit den Einstellungen des Apexboard starten](/apexboard/de-apexboard-settings.html) und dein Apexboard auf deinem lokalen PC nutzen.
