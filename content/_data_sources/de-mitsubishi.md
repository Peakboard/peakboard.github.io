---
layout: article
title: Mitsubishi
menu_title: Mitsubishi
description: Anbindung einer Mitsubishi Datenquelle im Peakboard Designer
lang: de
weight: 1200
ref: dat-1200
redirect_from:
---

Speicherprogrammierbare Steuerungen von Mitsubishi werden für die industrielle Automatisierung und die Steuerung von Maschinen und Prozessen in verschiedenen Sektoren wie zum Beispiel der Fertigung eingesetzt. Es gibt sie in verschiedenen Ausführungen, die von kompakten Einheiten für einfache Aufgaben bis hin zu fortschrittlichen modularen Systemen für komplexe Anwendungen reichen.

Das Seamless Message Protocol (SLMP) wird zu Verbindung von Peakboard und deiner Mitsubishi SPS genutzt.
Es ist ein von Mitsubishi entwickeltes Kommunikationsprotokoll zur Vernetzung von Automatisierungsgeräten wie SPS, HMIs und Steuerungen. Es funktioniert über verschiedene Netzwerke, einschließlich Ethernet und CC-Link, und ermöglicht einen effizienten Datenaustausch zwischen Geräten. Die Flexibilität und einfache Integration von SLMP machen es ideal für verschiedene industrielle Anwendungen, bei denen eine nahtlose Gerätekommunikation entscheidend ist.

Um die Mitsubishi Datenquelle anzubinden, wählst du unter [Daten], [Datenquelle hinzufügen] die Datenquelle [Mitsubishi] aus. (1)

![Mitsubishi Datenquelle hinzufügen](/assets/images/data-sources/mitsubishi/de_mitsubishi-01.png)

Gib der Datenquelle einen Namen (1).
Im Bereich [Nachladen] kannst du ein [Nachladeintervall] (2) für die Datenquelle festlegen.

Um die Verbindung zur Datenquelle herzustellen gibst du im Bereich [Details angeben] die IP Adresse (3) und den Port (4) für die Verbindung an.

Jetzt kannst du im Bereich [Variablen] die Variablen definieren, die du auslesen möchtest.
Um eine Variable hinzuzufügen gibst du ihr zuerst einen Namen (5). Über das Drop-down [Memory location] (6) wählst du dann den benötigten Gerätecode aus. Jeder dieser Codes repräsentiert einen bestimmten Typ von Daten oder eine Funktionalität.
Zuletzt gibst du die Adresse (7) an und klickst auf den Hinzufügen-Button [Add Variable] (8).

Gib alle Variablen an die du auslesen möchtest. Dann kannst du mit einem Klick auf [Daten laden] (9) eine Vorschau der auszulesenden Daten anzeigen und die Datenquelle mit einem Klick auf [OK] erstellen.

![Mitsubishi Datenquelle konfigurieren](/assets/images/data-sources/mitsubishi/de_mitsubishi-02.png)
