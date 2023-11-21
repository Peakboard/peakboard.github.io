---
layout: article
title: Netzwerk-Ressourcen
menu_title: Netzwerk-Ressourcen
description: Netzwerk-Ressourcen
lang: de
weight: 300
ref: resources-300
redirect_from:
 - /misc/de-multipleconnectionerror.html
---

Bei Netzwerk-Ressourcen handelt es sich ähnlich wie bei den [lokalen Ressourcen](/resources/de-resources-local.html) um Dateien in einem Dateisystem. Im Gegensatz zu den lokalen Ressourcen werden diese allerdings nicht direkt in das Projekt importiert, sondern über ihren UNC-Pfad angebunden.

Ein UNC-Pfad (Universal Naming Convention) ist eine Standardmethode, um Dateien und Ressourcen auf einem Netzwerk anzusprechen. Ein UNC-Pfad hat in der Regel das Format: `\\Servername\Freigabename\Pfad\Dateiname`
Dabei ist der Servername der Name des Computers oder Servers, auf dem die Ressource gespeichert ist. Der Freigabename ist der Name der Freigabe auf dem Server. Als Pfad wird der Pfad zu dem spezifischen Ordner oder der Datei innerhalb der Freigabe bezeichnet und der Dateiname ist der Name der spezifischen Datei.

Die Netzwerk-Ressource selbst wird nicht im Projekt mit gespeichert. Voraussetzung für die Nutzung der Ressource ist also die Verbindung zu dem Netzwerk, in dem die Datei abgelegt ist.
Der Vorteil dieser Anbindungsmethode ist, dass die Dateien nicht so statisch sind wie eine lokale Ressource und sich ändern können, wenn sie überschrieben werden.

Voraussetzung für den Zugriff ist ein Domänen-Nutzer mit entsprechenden Zugriffsrechten auf die freigegebenen Netzwerk-Dateien.

### Netzwerk-Ressource hinzufügen

Durch einen Rechtsklick auf [Ressourcen] und einen Klick auf [Netzwerk-Ressource hinzufügen] (1) öffnest du den Verbindungsdialog.

![Netzwerk-Ressource hinzufügen](/assets/images/resources/de_resources-network-01.png)

Im Verbindungsdialog gibst du der Ressource zuerst einen Namen (1). Du kannst außerdem ein Nachladeintervall (2) definieren, in dem die Datei aktualisiert wird.
Dann benötigst du die Verbindungsdaten zu deiner Datei. Dazu gehören der UNC-Pfad (3), der Benutzername (4) inklusive Domainname des Domänen-Nutzers, der für die Verbindung genutzt werden soll und der über die nötigen Rechte verfügt, sowie das zugehörige Passwort (5). Mit dem Button [Verbindungstest] (6) kannst du die Verbindung prüfen.
Alternativ kannst du auch eine bereits vorhandene Verbindung nutzen (7).

![Verbindung einrichten](/assets/images/resources/de_resources-network-02.png)

Die Ressource wird jetzt im Explorer angezeigt.
Du kannst die Netzwerk-Ressource mit einem Rechtsklick bearbeiten (1), kopieren (2), löschen (3) oder anzeigen lassen, an welchen Stellen du die Ressource in deinem Projekt aktuell verwendest (4).

![Netzwerk-Ressource verwalten](/assets/images/resources/de_resources-network-03.png)

### Fehler bei Netzwerkressourcen

Es kann vorkommen, dass der Peakboard Designer beim Zugriff auf eine Netzwerkressource wie z.B. eine Excel oder ein Bild folgenden Fehler anzeigt:

```
System.ComponentModel.Win32Exception (0x80004005): Mehrfache Verbindungen zu einem Server oder einer freigegebenen Ressource von demselben Benutzer unter Verwendung mehrerer Benutzernamen sind nicht zulässig. Trenne alle früheren Verbindungen zu dem Server bzw. der freigegebenen Ressource, und versuche es erneut.
```

Der Fehler deutet darauf hin, dass das Ziel-Laufwerk, zu welchem du eine Verbindung herstellen willst, bereits auf deinem Computer eingerichtet ist. Um dieses Problem zu beheben, empfiehlt es sich, die Verbindung zum betroffenen Laufwerk vorübergehend zu trennen und die Ressource neu anzulegen. Anschließend fügst du das Laufwerk erneut hinzu. Dieses spezifische Problem tritt nur auf deinem eigenen Notebook auf, da die Peakboard Box standardmäßig keine weiteren Netzlaufwerke eingebunden hat.

Ein weiterer möglicher Grund für diesen Fehler könnte in den Einstellungen der eingehenden Regeln der Windows Defender Firewall deines Computers oder deiner Domäne liegen. In diesem Fall ist es notwendig, dass du oder ein zuständiger Administrator die erforderlichen Verbindungen für die Peakboard Runtime für alle Profile freigibst.

### Nützliches

Um Datenquellen und Ressourcen dynamisch zum Peakboard Designer hinzuzufügen, empfiehlt sich die [Network Files Extension](https://templates.peakboard.com/extensions/Network-Files/).
Diese Extension ermöglicht es, die Dateinamen aller Dateien auszulesen, die in einem bestimmten UNC Netzwerkpfad liegen. Dadurch kannst du Datenquellen und Ressourcen dynamisch, basierend auf deren Dateinamen, zum Peakboard Designer hinzufügen.

Um dann zwischen den Ressourcen zu wechseln, ist [dieses Skript-Beispiel](https://templates.peakboard.com/Script-Example-Image-Change/) interessant. Es zeigt, wie du interaktiv Bilder austauschen kannst.
