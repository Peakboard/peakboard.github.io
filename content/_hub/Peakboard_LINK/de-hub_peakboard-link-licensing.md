---
layout: article
product: hub
title: Peakboard LINK Lizenzierung
menu_title: Lizenzierung
description: Gerätelizenzen und Nutzerlizenzen für Peakboard LINK - woher sie kommen, wie du sie zuweist und was passiert, wenn alle vergeben sind.
lang: de
weight: 565
ref: hub-565
---

Jeder Bildschirm, der einen [Peakboard LINK](/hub/Peakboard_LINK/de-hub_peakboard-link.html) anzeigt, braucht eine Lizenz. Es gibt zwei Arten von Lizenzen, und ein Bildschirm braucht nur eine davon:

- **Gerätelizenz:** gehört zu einem Bildschirm. Jeder, der auf diesem Bildschirm ein Board öffnet, sieht es, ganz ohne Anmeldung. Sie eignet sich für Bildschirme, die immer am selben Ort hängen, etwa einen Fernseher in der Fertigung.
- **Nutzerlizenz:** gehört zu einem Hub-Nutzer. Der Nutzer meldet sich auf der Lizenzseite eines beliebigen Bildschirms an und öffnet dort die Peakboard LINKs seiner Nutzergruppe. Sie eignet sich für Personen, die zwischen Bildschirmen wechseln, zum Beispiel mit einem Tablet.

<div class="box-warning" markdown="1"> **Beachte:**
Peakboard LINK ist derzeit eine Beta-Funktion und steht nur im Peakboard Hub on premise zur Verfügung. Die Zahl der Gerätelizenzen und Nutzerlizenzen ist Teil deiner Hub-Lizenz. Brauchst du mehr, wende dich an [sales@peakboard.com](mailto:sales@peakboard.com).
</div>

### Gerätelizenzen

Ein Bildschirm ist ein Browser auf einem Gerät. Der Peakboard Hub erkennt ihn an einer Kennung, die er in diesem Browser speichert. Ein zweiter Browser oder ein privates Fenster auf demselben PC zählt deshalb als weiterer Bildschirm. Eine Gerätelizenz gilt für alles, was der Bildschirm öffnet: alle Peakboard LINKs und alle ihre Instanzen.

Um die Gerätelizenzen zu verwalten, klicke auf der Seite **Peakboard LINK** auf die Kachel **Available device licenses**. Der Dialog **Peakboard LINK devices** öffnet sich:

![Peakboard LINK devices mit einer Gerätelizenz, einer Nutzerlizenz und einem wartenden Bildschirm](/assets/images/hub/peakboard-link/peakboard-link-licensing-01-devices.png)

1. **Available device licenses:** freie Gerätelizenzen, von allen Gerätelizenzen deiner Hub-Lizenz. Das Info-Feld daneben zeigt, wie viele Gerätelizenzen deine Hub-Lizenz enthält. Die Zahl wird orange, sobald alle Gerätelizenzen vergeben sind.
2. **License:** aktiviere die Checkbox, um dem Bildschirm mit diesem **Code** eine Gerätelizenz zuzuweisen. Der Bildschirm zeigt das Board nach wenigen Sekunden an, ohne dass jemand ihn bedienen muss. Deaktivierst du die Checkbox, nimmst du die Lizenz zurück. Der Bildschirm kehrt dann zur Lizenzseite zurück.
3. **Nutzerlizenz:** ein Bildschirm, den ein angemeldeter Hub-Nutzer verwendet, zeigt den Namen des Nutzers neben der Checkbox. Er braucht keine Gerätelizenz (siehe [Nutzerlizenzen](#nutzerlizenzen)).
4. **Checkbox nicht verfügbar:** sind alle Gerätelizenzen vergeben, kannst du die Checkbox eines weiteren Bildschirms nicht aktivieren. Gib zuerst eine Lizenz auf einem anderen Bildschirm frei.
5. **Last seen:** *active*, solange der Bildschirm ein Board anzeigt, *waiting for license*, solange ein Bildschirm ohne Lizenz ein Board öffnen will, sonst der Zeitpunkt, zu dem der Bildschirm zuletzt verbunden war.

Die Liste enthält alle Bildschirme mit Gerätelizenz und alle Bildschirme ohne Lizenz, die in den letzten 24 Stunden ein Board öffnen wollten. **Open instances** zeigt, wie viele Instanzen der Bildschirm gerade geöffnet hat, und **IP address** die Adresse, von der er sich zuletzt verbunden hat. Mit dem Stift neben dem Gerätenamen gibst du einem Bildschirm einen sprechenden Namen, zum Beispiel *Halle 2 - Linie 1*. Ein Bildschirm ohne eigenen Namen heißt *Device 1*, *Device 2* und so weiter.

Eine Gerätelizenz bleibt beim Bildschirm, bis du die Checkbox deaktivierst. Sie wird nie automatisch entfernt. Nicht mehr genutzte Bildschirme ohne Lizenz werden nach 7 Tagen gelöscht. Öffnet ein solcher Bildschirm später wieder ein Board, bekommt er einen neuen Screen code.

### Nutzerlizenzen

Ein Nutzer mit Nutzerlizenz kann sich auf der Lizenzseite jedes Bildschirms anmelden. Der Bildschirm selbst braucht dann keine Gerätelizenz.

![Peakboard LINK Nutzerlizenzen](/assets/images/hub/peakboard-link/peakboard-link-09-users.png)

Um eine Nutzerlizenz zuzuweisen, öffne [Users] in der Seitenleiste:

1. **Licensing:** der Tab mit den Nutzerlizenzen, neben **User Groups**.
2. **Available user licenses:** freie Nutzerlizenzen, von allen Nutzerlizenzen deiner Hub-Lizenz.
3. **LINK license:** aktiviere die Checkbox, um dem Nutzer eine Nutzerlizenz zu geben. Deaktivierst du sie, nimmst du ihm die Lizenz wieder weg.
4. **Group:** die Nutzergruppe des Nutzers. Ein Klick öffnet die Nutzergruppe.

Die Liste zeigt alle Nutzer des Peakboard Hub. Über das Suchfeld findest du einen Nutzer, und ein Klick auf eine Spaltenüberschrift sortiert die Liste. **Last seen** zeigt die letzte Peakboard LINK Verbindung eines Nutzers mit Nutzerlizenz.

**Auf einem Bildschirm anmelden:** Öffne die Board-URL auf dem Bildschirm. Die Lizenzseite erscheint, und der Nutzer gibt rechts seinen Hub-Nutzernamen und sein Passwort ein und klickt auf [Sign in]. Der Nutzer kann nur die Peakboard LINKs öffnen, die seiner Nutzergruppe zugewiesen sind. Du weist sie unter [Users] > Nutzergruppe > Tab **Peakboard LINK** mit [Add] zu. Ist ein Peakboard LINK nicht zugewiesen, zeigt der Bildschirm das an, statt das Board anzuzeigen.

Die Anmeldung bleibt auf dem Bildschirm bestehen, bis einer dieser Fälle eintritt:

- der Nutzer meldet sich auf der Lizenzseite ab,
- der Nutzer meldet sich auf einem anderen Bildschirm an,
- du nimmst dem Nutzer die Nutzerlizenz weg,
- der Nutzer wird aus dem Peakboard Hub entfernt.

**Ein Bildschirm gleichzeitig:** eine Nutzerlizenz gilt immer nur für einen Bildschirm gleichzeitig. Meldet sich der Nutzer auf einem zweiten Bildschirm an, wird der erste Bildschirm abgemeldet und kehrt zur Lizenzseite zurück. Dort zeigt er an, welcher Nutzer sich auf einem anderen Bildschirm angemeldet hat:

![Der erste Bildschirm, nachdem sich der Nutzer auf einem anderen Bildschirm angemeldet hat](/assets/images/hub/peakboard-link/peakboard-link-licensing-02-signed-out.png)

1. Die Meldung *&lt;user&gt; signed in on another screen, so this screen was signed out. A Peakboard LINK user license can be used on one screen at a time.*
2. Die Felder zur Anmeldung. Hier kann sich ein Nutzer erneut anmelden, der andere Bildschirm wird dann seinerseits abgemeldet.

Darf sich ein Nutzer nicht anmelden, zeigt die Lizenzseite den Grund an. *This account is not licensed for Peakboard LINK. Ask your Hub administrator to switch on its LINK user license.* bedeutet zum Beispiel, dass der Nutzer noch keine Nutzerlizenz hat.

### Wenn die Lizenzen nicht reichen

- **Alle Lizenzen sind vergeben:** Bildschirme, die schon eine Lizenz haben, behalten sie. Ein neuer Bildschirm bleibt auf der Lizenzseite, bis du eine Gerätelizenz oder eine Nutzerlizenz freigibst.
- **Deine Hub-Lizenz enthält weniger Lizenzen als vorher:** bereits vergebene Lizenzen bleiben vergeben. Neue kannst du erst wieder zuweisen, wenn weniger Lizenzen vergeben sind, als deine Hub-Lizenz enthält.
- **Deine Hub-Lizenz enthält keine Peakboard LINK Lizenzen oder ist nicht mehr gültig:** die Kachel auf der Seite **Peakboard LINK** zeigt **No Peakboard LINK license**. Du kannst keine Instanzen mehr anlegen oder starten. Instanzen, die bereits laufen, laufen weiter.
