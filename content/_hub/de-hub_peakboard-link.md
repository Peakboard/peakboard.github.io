---
layout: article
product: hub
title: Peakboard LINK
menu_title: Peakboard LINK
description: Die Peakboard Runtime im Peakboard Hub betreiben und Peakboard-Anwendungen auf jedem Bildschirm mit Browser anzeigen - ganz ohne Peakboard Box.
lang: de
weight: 560
ref: hub-560
redirect_from:
---

Mit Peakboard LINK betreibt der Peakboard Hub die Peakboard Runtime selbst. Du lädst eine Peakboard-Anwendung (`.pbmx`) in den Peakboard Hub, startest sie dort als Peakboard LINK, und jeder Bildschirm, der sie anzeigen soll, öffnet einfach einen Link im Browser. Auf dem Bildschirm musst du weder eine Peakboard Box noch ein BYOD Gerät einrichten: Ein Fernseher mit Browser, ein Tablet oder ein PC genügt. Datenquellen, Skripte und Building Blocks laufen im Peakboard Hub, der Bildschirm zeigt nur die Anwendung an und gibt die Eingaben des Anwenders weiter.

<div class="box-warning" markdown="1"> **Beachte:**
Peakboard LINK ist derzeit eine Beta-Funktion. Sie steht nur im Peakboard Hub on premise zur Verfügung (nicht im Peakboard Hub online), und deine Hub-Lizenz muss Peakboard LINK Lizenzen enthalten. Um Peakboard LINK zu nutzen, brauchst du das Recht **ManagePeakboardLinks** (*Can add and manage hosted Peakboard LINKs*) unter [Users] > Nutzergruppe > **Access**. Administratoren haben es immer.
</div>

Die wichtigsten Begriffe im Überblick:

- **Peakboard LINK:** eine Peakboard-Anwendung (`.pbmx`-Datei aus [Files](/hub/de-hub_files.html)), die im Peakboard Hub betrieben wird.
- **Instanz:** eine laufende Kopie eines Peakboard LINK. Jede Instanz hat ihre eigene Board-URL und eigene Werte für Upload-Defined-Variablen. Ein Peakboard LINK kann mehrere Instanzen haben, zum Beispiel eine pro Produktionslinie.
- **Bildschirm:** ein Browser, der die Board-URL einer Instanz öffnet. Jeder Bildschirm braucht eine Lizenz.

### Eine Peakboard-Anwendung als Peakboard LINK starten

![Run as Peakboard LINK in Files](/assets/images/hub/peakboard-link/peakboard-link-01-run-as-link.png)

1. **Anwendung hochladen:** Öffne [Files] in der Seitenleiste und lade deine `.pbmx`-Datei mit [Add file] hoch (siehe [Files](/hub/de-hub_files.html)).
2. **Als Peakboard LINK starten:** Klicke mit der rechten Maustaste auf die Datei (1) und wähle unter **Upload application** den Eintrag [Run as Peakboard LINK] (2).

Der Peakboard Hub legt den Peakboard LINK an, erstellt seine erste Instanz und öffnet die Seite **Peakboard LINK**. Name und Vorschaubild stammen aus der Projektdatei. Eine Datei kann nur einmal betrieben werden. Läuft eine Datei bereits als Peakboard LINK, bietet das Kontextmenü stattdessen [Open Peakboard LINK] an.

### Die Seite Peakboard LINK

![Übersicht Peakboard LINK](/assets/images/hub/peakboard-link/peakboard-link-02-overview.png)

Öffne **Peakboard LINK** in der Seitenleiste (direkt unter **Peakboard Boxes**). Für jeden Peakboard LINK gibt es eine Kachel:

1. **Available licenses:** wie viele deiner Peakboard LINK Lizenzen noch frei sind, von allen Lizenzen. Ein Klick öffnet die Liste der Bildschirme (siehe unten). Die Zahl wird orange, sobald alle Lizenzen vergeben sind.
2. **[New Instance]:** fügt eine weitere Instanz derselben Anwendung hinzu. Sie bekommt ihre eigene Board-URL und startet sofort. Bestehende Instanzen und die Bildschirme, die sie anzeigen, bleiben unberührt.
3. **Zahnrad des Peakboard LINK:** [Rename], [Show all variables] / [Hide all variables] (nur wenn die Anwendung Upload-Defined-Variablen hat) und [Delete]. Beim Löschen eines Peakboard LINK werden alle seine Instanzen gestoppt und entfernt.
4. **Source file:** die `.pbmx`-Datei in Files. Lädst du eine neue Version dieser Datei hoch, ändern sich die laufenden Instanzen **nicht**. Stattdessen zeigt die Kachel **New version available.** mit dem Link [Update project]. Ein Klick darauf bringt den Peakboard LINK auf die aktuelle Dateiversion. Seine Instanzen werden dabei neu gestartet, die Bildschirme sind also kurz unterbrochen.
5. **QR-Code:** die Board-URL dieser Instanz. Scanne ihn mit einem Tablet oder Smartphone, um das Board zu öffnen.
6. **Board-URL:** die Adresse, die ein Bildschirm öffnen muss. Mit dem Kopieren-Icon legst du sie in die Zwischenablage. Das Info-Icon erklärt, woher die Adresse stammt (siehe [Externe Adresse](#externe-adresse)).
7. **Verbundene Clients:** die Zahl der Bildschirme, die diese Instanz gerade anzeigen. Ein Klick öffnet den Dialog **Information** mit den Tabs **Clients** (Bildschirme, die gerade oder in den letzten 7 Tagen verbunden waren, sowie [Find clients], das 20 Sekunden lang auf jedem verbundenen Bildschirm den Namen von Instanz und Bildschirm einblendet) und **Resources** (CPU und Arbeitsspeicher der Instanz live).
8. **Start / Stop:** startet oder stoppt die Instanz. Der Status neben dem Namen zeigt **Starting…**, **Running** oder **Stopped**.
9. **Zahnrad der Instanz:** [Information], [Show screenshot] (ein Bild dessen, was die Instanz gerade anzeigt, nur solange sie läuft), [Rename], [Access control] und [Delete].

Verwendet die Anwendung Upload-Defined-Variablen, zeigt jede Instanz eine aufklappbare Tabelle **Upload defined Variables**. Dort gibst du jeder Instanz ihre eigenen Werte. Einen geänderten Wert übernimmst du mit dem Häkchen sofort in das laufende Board.

### Das Board auf einem Bildschirm anzeigen

Öffne die Board-URL einer Instanz im Browser des Bildschirms oder scanne den QR-Code. Beim ersten Mal ist der Bildschirm noch nicht lizenziert:

![This screen is not licensed](/assets/images/hub/peakboard-link/peakboard-link-03-screen-not-licensed.png)

Die Seite zeigt einen **Screen code** (1), der diesen Bildschirm kennzeichnet. Sie bleibt offen und zeigt das Board von selbst an, sobald der Bildschirm eine Lizenz hat. Alternativ (2) kann sich auf dieser Seite ein Hub-Nutzer anmelden, der eine **Peakboard LINK user license** besitzt. Der Bildschirm braucht dann keine eigene Lizenz (siehe [Peakboard LINK Nutzerlizenzen](#peakboard-link-nutzerlizenzen)).

So weist du dem Bildschirm eine Lizenz zu:

![Einem Bildschirm eine Peakboard LINK Lizenz zuweisen](/assets/images/hub/peakboard-link/peakboard-link-04-assign-license.png)

1. Klicke auf der Seite **Peakboard LINK** auf die Kachel **Available licenses**. Der Dialog **Peakboard LINK devices** öffnet sich.
2. Suche unter **Active devices** den Bildschirm mit dem passenden **Code** (1). Die Liste enthält alle Bildschirme mit Lizenz und alle Bildschirme ohne Lizenz, die in den letzten 24 Stunden ein Board öffnen wollten. Mit dem Stift neben dem Gerätenamen gibst du dem Bildschirm einen sprechenden Namen, zum Beispiel *Halle 2 - Linie 1*.
3. Schalte **License** (2) ein. Die Zahl der verfügbaren Lizenzen (3) sinkt um eins.

Der Bildschirm zeigt jetzt die Anwendung an:

![Die Peakboard-Anwendung im Browser](/assets/images/hub/peakboard-link/peakboard-link-05-board-in-browser.png)

Die Anwendung läuft im Peakboard Hub und ist im Browser voll bedienbar. Buttons, Filter und Eingaben funktionieren wie auf einer Peakboard Box.

Eine Lizenz gehört zu ihrem Bildschirm, und ein Bildschirm ist ein Browser auf einem Gerät. Sie bleibt beim Bildschirm, bis du sie in derselben Liste wieder ausschaltest. Nicht mehr genutzte Bildschirme ohne Lizenz verschwinden nach 7 Tagen aus der Liste. Sind alle Lizenzen vergeben, gib zuerst eine Lizenz auf einem anderen Bildschirm frei.

### Ein Board mit einem Zugangscode schützen

Standardmäßig kann jeder, der die Board-URL kennt, das Board auf einem lizenzierten Bildschirm ansehen. Um das einzuschränken, schützt du die Instanz mit einem Zugangscode:

![Access control im Menü der Instanz](/assets/images/hub/peakboard-link/peakboard-link-06-instance-menu.png)

1. Klicke auf das Zahnrad der Instanz und wähle [Access control] (1).

![Dialog Access control](/assets/images/hub/peakboard-link/peakboard-link-07-access-control.png)

2. Schalte **Require an access code** (1) ein. Die Änderung gilt sofort.
3. Der **Current code** (2) ist ein 5-stelliger Code. Kopiere ihn mit dem Kopieren-Icon und gib ihn an die Personen weiter, die das Board sehen dürfen.
4. [Regenerate code] (3) erzeugt einen neuen Code. Bildschirme, die den alten Code verwenden, müssen den neuen eingeben.

Ein Bildschirm, der das Board zum ersten Mal öffnet, zeigt jetzt **Access code required**. Nach Eingabe des richtigen Codes und Klick auf [Open board] öffnet sich das Board, und der Bildschirm merkt sich den Code. Ein Schloss-Icon neben dem Status der Instanz zeigt, dass ein Zugangscode nötig ist. Ein Klick darauf öffnet denselben Dialog.

### Externe Adresse

Jede Board-URL und jeder QR-Code verwendet die Adresse, unter der die Bildschirme den Peakboard Hub erreichen. Das ist **nicht** die Adresse, die du gerade in deinem Browser verwendest. Sonst würde ein Link, der auf dem Hub-Server selbst geöffnet wird, *localhost* lauten und nirgendwo sonst funktionieren.

![External Address in den Einstellungen](/assets/images/hub/peakboard-link/peakboard-link-08-external-address.png)

Öffne [Settings] und gehe zur Kachel **Hub Endpoints**. Trage unter **External Address** (1) die Adresse ein, die die Bildschirme verwenden, zum Beispiel einen DNS-Namen wie `hub.contoso.com`, eine IP-Adresse wie `10.0.0.7`, `10.0.0.7:5000` oder `https://hub.contoso.com` (2). Solange das Feld leer ist, ermittelt der Peakboard Hub die Adresse selbst. Er nimmt den Host seines eigenen Listen-Endpunkts, dann den Hostnamen des Servers, dann die erste externe IP-Adresse des Servers und zuletzt 127.0.0.1. Der Port stammt immer von dem Endpunkt, auf dem der Peakboard Hub tatsächlich lauscht. Setze die Adresse immer dann, wenn die Bildschirme den Peakboard Hub unter einem anderen Namen erreichen, etwa über einen DNS-Alias oder einen Reverse Proxy.

### Peakboard LINK Nutzerlizenzen

Neben den Lizenzen für Bildschirme kann deine Hub-Lizenz **Peakboard LINK user licenses** enthalten. Ein Nutzer mit einer solchen Lizenz kann sich auf der Lizenzseite jedes Bildschirms anmelden und die Peakboard LINKs öffnen, die ihm zugeordnet sind. Der Bildschirm selbst braucht dann keine Lizenz.

![Peakboard LINK users](/assets/images/hub/peakboard-link/peakboard-link-09-users.png)

Öffne in der Seitenleiste **Peakboard LINK** > **Users**:

1. **Available user licenses:** freie Nutzerlizenzen, von allen Nutzerlizenzen deiner Hub-Lizenz.
2. **User license:** schalte sie ein, um dem Nutzer eine Peakboard LINK Nutzerlizenz zu geben.
3. **From user group:** solange diese Option aktiv ist, darf der Nutzer die Peakboard LINKs seiner Nutzergruppe öffnen. Schalte sie aus, um die Peakboard LINKs für diesen Nutzer stattdessen mit [Add] / [Edit] selbst auszuwählen.
4. **Peakboard LINKs:** die Peakboard LINKs, die dieser Nutzer auf einem Bildschirm öffnen darf.

Welche Peakboard LINKs eine Nutzergruppe verwalten darf, legst du unter [Users] > Nutzergruppe > Tab **Peakboard LINK** fest.
