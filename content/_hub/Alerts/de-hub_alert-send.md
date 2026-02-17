---
layout: article
product: hub
title: Alert senden
menu_title: Alert senden
description: Peakboard Hub - Alert senden
lang: de
weight: 930
ref: hub-930
redirect_from:
 - /hub/de-hub_alert-send.html
---

In diesem Artikel erfährst du, wie du Alerts von einer Peakboard Box an eine mit dem Peakboard Hub verbundene Gruppe sendest.
Du erstellst dazu einen Button in deiner Visualisierung, der beim Klick eine Alert-Nachricht sendet.

![Alert senden](/assets/images/hub/de_hub_alert-send.gif)

### Verbindung zum Peakboard Hub einrichten

1. **Peakboard Hub Verbindung öffnen:** Klicke auf das Peakboard Hub Symbol in der Werkzeugleiste, um die Verbindungseinstellungen zu öffnen.
2. **Verbindungsdaten eingeben und speichern:** Gib die Hub-Verbindungsdaten ein, überprüfe, ob die Visualisierung die korrekte Verbindung verwendet und klicke auf [OK].

### Alert-Button erstellen und konfigurieren

1. Ziehe einen [Button] aus dem Bereich [Interactive] auf die Visualisierung.
2. Doppelklicke auf den Button, um den Skript-Editor zu öffnen.
3. Suche im Skript-Editor nach dem Alert-Block.
4. Ziehe das Skript [Send alert] aus dem rechten Bereich in den Skript-Editor.
5. Wähle einen Alert-Typ aus dem Dropdown aus: **Info** (allgemeine Informationsnachrichten), **Warning** (Warnmeldungen) oder **Problem** (Fehler- oder kritische Zustandsmeldungen).
6. Gib den Alert-Text im Textfeld ein.
7. Klicke auf [Save & close], um das Skript zu speichern.

### Visualisierung testen

1. Lade die Visualisierung auf die Peakboard Box oder nutze die Vorschau-Funktion.
2. Klicke auf den Alert-Button, um den Alert an die verbundene Gruppe zu senden.
