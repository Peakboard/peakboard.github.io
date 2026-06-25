---
layout: article
title: Peakboard Runtime installieren
menu_title: Peakboard Runtime installieren
description: Die Peakboard Runtime mit dem grafischen Setup-Assistenten auf einem BYOD Gerät installieren
lang: de
weight: 140
ref: admin-140
redirect_from:

---

Mit dem *Peakboard Runtime Setup* installierst du die Peakboard Runtime auf einem beliebigen Windows-Gerät und machst es so zu einem Peakboard BYOD. Der grafische Assistent führt dich Schritt für Schritt durch die Auswahl der Komponenten, des Installationspfads und die eigentliche Installation. Anschließend kann das Gerät im Peakboard Designer [hinzugefügt](/administration/en-adding.html) werden.

Soll die Installation unbeaufsichtigt über die Kommandozeile erfolgen (z.B. für die automatisierte Verteilung), nutze stattdessen die [Silent Installation](/administration/de-install-silent.html).

Lade dir die *PeakboardRuntimeSetupUI.exe* herunter und starte sie. Da das Setup Windows-Dienste, Registry-Einträge und Zertifikate einrichtet, **muss es als Administrator ausgeführt werden** – bestätige die erscheinende Windows-Benutzerkontensteuerung mit [Ja].

### Setup starten

Nach dem Start begrüßt dich der Assistent. Klicke auf [Start] (1), um die Installation zu beginnen. Ist auf dem Gerät bereits eine Peakboard Runtime installiert, zeigt der Assistent stattdessen die installierte Version an und bietet die Aktualisierung auf die neue Version an.

![Willkommensbildschirm des Peakboard Runtime Setups](/assets/images/admin/install-runtime/byod-01-welcome.png)

### Komponenten auswählen

Lege fest, welche Komponenten installiert werden sollen:

* [Create Start menu shortcuts] (1) – legt eine Verknüpfung im Startmenü an (standardmäßig aktiviert).
* [Run Peakboard on startup] (2) – trägt die Peakboard Runtime in den Windows-Autostart ein, sodass sie nach der Anmeldung automatisch startet.
* [Block unencrypted connection] (3) – blockiert den unverschlüsselten Verbindungskanal (Port 40404), sodass nur noch verschlüsselte Verbindungen möglich sind.

Bestätige deine Auswahl mit [Next].

![Komponentenauswahl im Peakboard Runtime Setup](/assets/images/admin/install-runtime/byod-02-components.png)

### Installationspfad wählen

Gib im Feld [Installation path] (1) das Zielverzeichnis an, in das die Peakboard Runtime installiert werden soll. Standardmäßig ist [C:\Program Files\Peakboard] vorgegeben. Über den Button mit dem Ordnersymbol (2) kannst du ein anderes Verzeichnis auswählen. Klicke anschließend auf [Next].

![Auswahl des Installationspfads im Peakboard Runtime Setup](/assets/images/admin/install-runtime/byod-03-install-path.png)

### Installation durchführen

Läuft auf dem Gerät bereits eine Peakboard Runtime, weist dich der Assistent darauf hin und schließt sie vor der Aktualisierung. Anschließend wird die Installation ausgeführt – ein Fortschrittsbalken zeigt den aktuellen Stand an. Dabei werden unter anderem die Programmdateien entpackt sowie die Windows-Dienste der Peakboard Runtime eingerichtet.

![Fortschritt der Installation](/assets/images/admin/install-runtime/byod-04-installing.png)

Nach erfolgreichem Abschluss meldet der Assistent die fertige Installation. Aktiviere die Option [Launch Peakboard Runtime], wenn die Peakboard Runtime direkt nach dem Beenden des Assistenten starten soll, und schließe den Assistenten mit [Finish].

![Abgeschlossene Installation](/assets/images/admin/install-runtime/byod-05-finished.png)

<div class="box-warning" markdown="1"> Die Installation setzt **Windows 10 (Version 20H1, Build 19041) oder neuer** voraus.
</div>
