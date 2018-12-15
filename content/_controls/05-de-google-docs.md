---
layout: article
title: Google Docs  
menu_title: Google Docs
description: Information über Peakboard Designer Google Docs Control.
lang: de
ref: con-05
permalink: /de/:collection/google-docs
---

Dieser Artikel beschreibt die Einbindung von Google Docs Dokumenten in ein Peakboard-Panel. Es werden alle drei Arten von Dokumenten unterstützt: Docs (normale Dokumente wie man sie aus MS Word kennt), Slides (so wie aus MS PowerPoint) und Spreadsheet (so wie aus MS Excel). In Google Drive können natürlich noch viele andere Dokumente abgelegt werden, aber das Google Docs Control unterstützt nur diese drei Haupttypen, die unter dem Begriff „Google Docs“ zusammengefasst werden.

Wir wollen das folgende Beispieldokument einbinden. Es ist nicht nötig, es in irgendeiner Form freizugeben. Sie erlauben Peakboard einfach, lesend auf Google Drive zuzugreifen. Damit ist die Authentifizierung sichergestellt.

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs01.png)

Ziehen Sie das Google Docs Control von der Toolbox auf ein Peakboard-Panel, justieren Sie die Größe entsprechend und doppelklicken Sie auf das Control, um den Editor zu öffnen.

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs02.png)

Sie müssen nun Peakboard erlauben, auf Ihr Google Drive zuzugreifen. Klicken Sie dazu auf den Button mit den drei Punkten, um den Autorisierungsdialog zu öffnen, auf dem Sie ihre Google-Zugangsdaten eingeben müssen. Achtung! Es handelt sich hierbei um eine Google-Website. Sie geben also nicht ihren User-Namen und ihr Passwort an Peakboard, sondern Sie authentifizieren sich lediglich bei Google und erlauben den Zugriff. Google gibt dann an Peakboard nur einen Autorisierungstoken zurück (eine kryptische Zeichenfolge). Sie können diese Autorisierung jederzeit in Ihrem Google-Konto widerrufen. Es funktioniert genau nach demselben Prinzip, wie wenn Sie anderen Drittanbieter-Apps den Zugriff erlauben.

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs03.png)

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs04.png)

Mit Hilfe des Knopfs „Select Document…“ öffnet sich ein Auswahl-Dialog, der die Ordnerstruktur des Google Drive Kontos wiedergibt. So lässt sich das gewünschte Dokument selektieren und in den Hauptdialog übernehmen.

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs05.png)

Mehr ist nicht zu tun. Der Preview-Button ruft das Dokument von Google ab und zeigt es im unteren Bereich des Dialogs an.

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs06.png)

Und genauso sollte es aussehen, wenn es zur Laufzeit im Preview oder direkt auf der Peakboard-Box läuft.

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs07.png)

## Hinweise

Wenn Sie Slides von Google nutzen, werden diese Folien an die Größe des Peakboard-Controls angepasst. Bei Docs und Spreadsheets ist das nicht der Fall. Hier wird die pixelgenaue Größe in das Peakboard-Control eingepasst. Wenn das Control nicht groß genug ist, sind Teile des Inhalts nicht sichtbar.
