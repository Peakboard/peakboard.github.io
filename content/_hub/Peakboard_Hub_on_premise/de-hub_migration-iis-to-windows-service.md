---
layout: article
product: hub
title: Migration von IIS zu einem Windows-Dienst
menu_title: Migration von IIS
description: Peakboard Hub on premise - eine im IIS gehostete Installation so aktualisieren, dass der Hub als Windows-Dienst läuft
lang: de
weight: 101
ref: hub-101
redirect_from:
---


Frühere Versionen des Peakboard Hub on premise liefen als Seite im IIS (Internet Information Services). Das aktuelle Setup installiert den Peakboard Hub stattdessen als eigenen **Windows-Dienst**. Wenn du eine Installation aktualisierst, die noch im IIS läuft, migriert das Setup sie: Die IIS-Seite wird durch den Windows-Dienst ersetzt, Datenbank, Einstellungen und Daten bleiben erhalten.

Dieser Artikel erklärt, was sich ändert, wie du dich vorbereitest und wie du die Migration mit dem Setup-Assistenten oder über die Kommandozeile durchführst.

### Was sich ändert

{% include styled_table.html %}
{: .w-full }
| | Vorher (IIS) | Nachher (Windows-Dienst) |
|---|---|---|
| Hosting | IIS-Seite und Anwendungspool `PeakboardHub` | Windows-Dienst `PeakboardHub` (Anzeigename **Peakboard Hub**), läuft als Lokales System, startet automatisch (verzögert), startet nach einem Fehler neu |
| Programmordner | `C:\inetpub\PeakboardHub` | `C:\Program Files\Peakboard\PeakboardHub` (empfohlen — du kannst auch im alten Ordner bleiben) |
| Datenordner | Im Programmordner | `C:\ProgramData\Peakboard\PeakboardHub` |
| Ports und HTTPS-Zertifikat | Bindungen der IIS-Seite | Endpunkte in der `appsettings.json` im Programmordner |
| Ports oder Zertifikat ändern | IIS-Manager | Peakboard Hub Configurator (Windows-Startmenü) |
| Public API | IIS-Seite `PeakboardHubApi` | Windows-Dienst `PeakboardHubApi` |

IIS selbst wird nicht mehr benötigt. Das Setup deinstalliert das Windows-Feature IIS nicht — wenn keine andere Anwendung auf dem Server es nutzt, kannst du es anschließend entfernen.

### Bevor du beginnst

* **Plane ein Wartungsfenster ein.** Während das Setup läuft, ist der Peakboard Hub nicht erreichbar.
* **Notiere dir die Bindungen der IIS-Seite.** Öffne den IIS-Manager, wähle die Seite des Peakboard Hub aus und notiere dir ihre Ports und HTTPS-Zertifikate (**Bindungen**). Während der Migration entscheidest du, ob der Windows-Dienst sie übernimmt.
* **Prüfe dein HTTPS-Zertifikat.** Der Windows-Dienst kann nur Zertifikate aus dem Zertifikatspeicher **Eigene Zertifikate** des lokalen Computers nutzen. Eine Bindung, deren Zertifikat im **zentralen Zertifikatspeicher** des IIS liegt oder nicht mehr im Zertifikatspeicher vorhanden ist, kann nicht übernommen werden — der Peakboard Hub ist dann nur über HTTP erreichbar, bis du mit dem Peakboard Hub Configurator ein Zertifikat hinzufügst.
* **Prüfe auf gemeinsam genutzte Ports.** Teilt sich die Seite des Peakboard Hub einen Port mit einer anderen IIS-Seite (zum Beispiel Port 80 oder 443 neben der **Default Web Site**), bleibt dieser Port beim IIS. Der Windows-Dienst kann ihn nicht nutzen.
* **Sichere deine Datenbank.** Das Setup bietet vor dem Update eine Sicherung der Datenbank an (standardmäßig aktiviert). Eine eigene Sicherung schadet trotzdem nicht.
* **Sichere deine Dateien.** Das Setup sichert nur die Datenbank — die Dateien des Peakboard Hub gehören nicht dazu. Kopiere den Ordner deiner Installation, standardmäßig `C:\inetpub\PeakboardHub`, an einen sicheren Ort, zusammen mit allen Datenordnern, die du an einen anderen Ort umgeleitet hast. Er enthält unter anderem:
  * die nach [Files](/hub/de-hub_files.html) hochgeladenen Dateien (Ordner `HubFileStorage`)
  * die **Hub Flows** (Ordner `PeakboardHubFlows`)
  * die Update-Pakete für Boxen (Ordner `Update`) und die gehosteten Web Runtimes (Ordner `PeakboardHubWebRuntimes`)
  * die `appsettings.json` mit der Datenbankverbindung und allen weiteren Einstellungen

  Ohne diese Kopie kannst du nicht vollständig zur vorherigen Version zurückkehren, falls die Migration fehlschlägt, siehe [Zur vorherigen Version zurückkehren](#zur-vorherigen-version-zurückkehren).
* **Prüfe, ob Windows Single Sign-on genutzt wird.** Wähle im IIS-Manager die Seite des Peakboard Hub aus und öffne **Authentifizierung**. Ist **Windows-Authentifizierung** aktiviert, werden deine Benutzer mit ihrem Windows-Konto am Peakboard Hub angemeldet. Diese IIS-Einstellung wird **nicht** übernommen — du schaltest Single Sign-on nach der Migration wieder ein, siehe [Windows Single Sign-on](#windows-single-sign-on).
* Starte das Setup **mit Administratorrechten**.

### Migration mit dem Setup-Assistenten

Lade die aktuelle [Installationsdatei des Peakboard Hub on premise](https://downloads.peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe) herunter und starte sie auf dem Server deiner bestehenden Installation. Wähle auf der ersten Seite **Peakboard Hub** (und **Peakboard Hub Public API**, falls sie auf diesem Server installiert ist) und klicke auf [Next].

#### Schritt 1 — Bestehende Installation auswählen

Wähle auf der Seite **Installation Folders** den Ordner deiner bestehenden Installation, standardmäßig `C:\inetpub\PeakboardHub`. Ist es der alte Standardordner, weist dich ein Hinweis darauf hin, dass dies der IIS-Speicherort der Installation ist und dass dir nach einem Klick auf [Next] das Verschieben angeboten wird.

![Der Installationsordner aus der IIS-Zeit](/assets/images/hub/installer/hub-migration-01-folder-notice.png)

<div class="box-warning" markdown="1"> **Wichtig**: Gib hier keinen neuen, leeren Ordner ein, um die Installation zu „verschieben“. Ein anderer Ordner legt einen zweiten, unabhängigen Peakboard Hub neben dem bestehenden an, und die bestehende Installation bleibt unverändert. Wähle den bestehenden Ordner und lass das Setup die Installation verschieben, wie unten beschrieben.
</div>

#### Schritt 2 — An den empfohlenen Speicherort verschieben

Wenn du auf [Next] klickst, fragt das Setup **Move to the recommended location?**:

* [Yes] — Die Programme werden nach `C:\Program Files\Peakboard\PeakboardHub` verschoben und die Daten (hochgeladene Dateien, Hub Flows, Update-Pakete für Boxen, gehostete Web Runtimes) in einen Datenordner unter `C:\ProgramData\Peakboard`. Die Ordner werden auf der Seite hinter dem Dialog eingetragen und können noch geändert werden.
* [No] — Der Peakboard Hub bleibt in `C:\inetpub\PeakboardHub`. Er wird trotzdem in einen Windows-Dienst umgewandelt.

In beiden Fällen behält die Installation ihren Dienstnamen, ihre Ports, ihre Zertifikate und ihre Datenbank.

![Angebot, die Installation zu verschieben](/assets/images/hub/installer/hub-migration-02-move-dialog.png)

Der Datenordner ist normalerweise `C:\ProgramData\Peakboard\PeakboardHub`. Wird dieser Ordner bereits von einer anderen Installation genutzt, hängt das Setup eine Nummer an, zum Beispiel `PeakboardHub_2` (der Screenshot stammt von einem Testserver mit mehreren Installationen).

<div class="box-tip" markdown="1"> **Hinweis**: Das Verschieben wird nur für den alten Standardordner `C:\inetpub\PeakboardHub` angeboten. Eine Installation in einem eigenen Ordner wird in diesem Ordner aktualisiert. Über die Kommandozeile kannst du jede Installation aus der IIS-Zeit verschieben, siehe [Migration über die Kommandozeile](#migration-über-die-kommandozeile), oder von Hand verschieben, siehe [Installation manuell verschieben](#installation-manuell-verschieben). Der neue Ordner muss auf demselben Laufwerk liegen wie `C:\ProgramData`.
</div>

Hast du [Yes] gewählt, fragt das Setup anschließend **Remove the old folder?**:

* [Yes] — Nach dem Verschieben wird der alte Ordner gelöscht, einschließlich aller Dateien, die du selbst dort abgelegt hast.
* [No] — Der alte Ordner bleibt erhalten. Du kannst ihn später jederzeit löschen. Das Setup sorgt dafür, dass der behaltene Ordner nicht mehr für eine Installation gehalten werden kann.

![Frage, ob der alte Ordner entfernt werden soll](/assets/images/hub/installer/hub-migration-03-remove-old-folder.png)

Die Seite **Installation Folders** zeigt jetzt, wohin der Peakboard Hub verschoben wird (1), den neuen Programmordner (2) und den neuen Datenordner (3). Datenordner, die du früher an einen anderen Ort umgeleitet hast, werden nicht verschoben. Klicke auf [Next].

![Installationsordner nach der Entscheidung zum Verschieben](/assets/images/hub/installer/hub-migration-04-folders.png)

#### Schritt 3 — Komponenten

Die Seite **Update Peakboard Hub** nennt den alten und den neuen Ordner:

* **Update Hub program files** (1) — Gehört bei einer Migration immer dazu.
* **Create backup** (2) — Sichert die Datenbank, bevor die neuen Programmdateien kopiert werden. Lass die Option aktiviert.
* **Set up database** (3) — Lass die Option abgewählt. Der Peakboard Hub behält seine aktuelle Datenbankverbindung.
* **Configure Hub Windows service (ports & firewall)** (4) — Bei einer Installation, die noch im IIS läuft, immer aktiviert, weil die IIS-Seite durch den Windows-Dienst ersetzt wird.

Klicke auf [Next].

![Komponenten des Updates](/assets/images/hub/installer/hub-migration-05-components.png)

#### Schritt 4 — Sicherungsordner

Auf der Seite **Backup Peakboard Hub** wählst du, wohin die Sicherung der Datenbank geschrieben wird. Die Sicherungsdatei schreibt der SQL Server, deshalb muss der Ordner auf dem Datenbankserver liegen und für das Dienstkonto des SQL Servers beschreibbar sein. Lässt du das Feld leer, wird der Standard-Sicherungsordner der SQL-Server-Instanz genutzt. Klicke auf [Next].

![Sicherungsordner für die Datenbank](/assets/images/hub/installer/hub-migration-06-backup.png)

#### Schritt 5 — Endpunkte des Windows-Dienstes

Auf der Seite **Service Configuration** zeigt das Setup, welche IIS-Seite den Ordner aktuell bereitstellt, und fragt, woher die Endpunkte des Windows-Dienstes kommen:

* **Add new endpoints (configure below)** (1) — Vorausgewählt. Aus dem IIS wird nichts automatisch übernommen; der Windows-Dienst bekommt nur den **HTTP port** und die optionalen HTTPS-Einstellungen, die du darunter einträgst.

![Neue Endpunkte für den Windows-Dienst](/assets/images/hub/installer/hub-migration-07-endpoints-new.png)

* **Take endpoints from the current IIS site** (2) — Listet alle Bindungen der IIS-Seite auf (3). Wähle die aus, die der Windows-Dienst übernehmen soll. Jede Bindung hat einen Link (4), der sie im Browser öffnet, damit du prüfen kannst, was dort erreichbar ist. Bindungen, die nicht übernommen werden können, werden deaktiviert mit dem Grund angezeigt — zum Beispiel ein Port, den eine andere IIS-Seite nutzt, oder ein Zertifikat, das im Zertifikatspeicher nicht gefunden wird.

![Übernahme der Bindungen der IIS-Seite](/assets/images/hub/installer/hub-migration-08-endpoints-iis.png)

Die erste ausgewählte HTTP-Bindung wird zum Hauptport des Windows-Dienstes, jede weitere Auswahl zu einem zusätzlichen Endpunkt. Es können höchstens 5 HTTP- und 4 HTTPS-Endpunkte übernommen werden. Eine HTTPS-Bindung behält ihr Zertifikat.

<div class="box-warning" markdown="1"> **Bitte beachten**: Die IIS-Seite und ihr Anwendungspool werden in beiden Fällen gelöscht. Wählst du **Add new endpoints** mit einem anderen Port als dem der IIS-Seite, ist der Peakboard Hub danach nur noch auf dem neuen Port erreichbar — passe alle Clients an, die sich mit ihm verbinden, zum Beispiel Peakboard Boxen.
</div>

#### Schritt 6 — Update ausführen

Der Button der letzten Seite heißt [Update]. Klicke darauf, um die Migration zu starten. Das Setup stoppt die IIS-Seite, kopiert die neuen Programmdateien, verschiebt die Ordner (falls gewählt), legt den Windows-Dienst an und startet ihn, übernimmt die ausgewählten Endpunkte, öffnet die Ports in der Windows-Firewall und löscht zum Schluss die IIS-Seite und ihren Anwendungspool.

Nach Abschluss der Migration zeigt die Seite **Installation finished**, was installiert wurde und — nach einem Verschieben — was wohin verschoben wurde, zusammen mit einer Erinnerung, was du selbst anpassen musst.

### Was das Setup übernimmt

* Die Datenbankverbindung, die Art der Authentifizierung und alle weiteren Einstellungen in der `appsettings.json`.
* Die Identität des Dienstes, die Ports und die ausgewählten HTTPS-Zertifikate.
* Alle Datenordner. Das Setup passt auch die zugehörigen Einstellungen in der Datenbank an.
* Einen Eintrag unter Windows **Apps & Features**.

Nicht übernommen wird **Windows Single Sign-on**. Im IIS war es eine Einstellung der IIS-Seite, die bei der Migration gelöscht wird. Nach der Migration ist es ausgeschaltet, siehe [Windows Single Sign-on](#windows-single-sign-on).

### Nach der Migration

Was außerhalb der Installation liegt, kann das Setup nicht erreichen. Passe nach einem Verschieben alles an, was auf den alten Ordner `C:\inetpub\PeakboardHub` verweist:

* Sicherungsjobs und ihre Ziel- und Ausschlusspfade
* Ausnahmen in Virenschutz oder EDR
* Netzwerkfreigaben und eigene Ordnerberechtigungen
* Eigene Skripte, geplante Aufgaben und Überwachungen

Um die Ports oder das HTTPS-Zertifikat später zu ändern, nutzt du den **Peakboard Hub Configurator** aus dem Windows-Startmenü, siehe [Installation](/hub/Peakboard_Hub_on_premise/de-hub_installation.html#konfiguration-später-ändern).

<div class="box-tip" markdown="1"> **Hinweis**: Funktioniert der Peakboard Hub nach einem Update im Browser nicht richtig — bleiben zum Beispiel Seiten leer, reagieren Buttons nicht oder wird noch die alte Version angezeigt —, verwendet der Browser vermutlich noch Dateien der vorherigen Version aus seinem Cache. Lade die Seite ohne Cache neu: Drücke [Strg + F5] (macOS: [Cmd + Shift + R]). Hilft das nicht, lösche im Browser die gespeicherten Daten der Adresse des Peakboard Hub: Öffne über das Symbol links neben der Adressleiste die Website-Einstellungen, lösche die Websitedaten (Cookies und gespeicherte Daten) und lade die Seite neu. Dabei wirst du abgemeldet und musst dich anschließend neu anmelden.
</div>

#### Windows Single Sign-on

Wurden deine Benutzer vor der Migration automatisch mit ihrem Windows-Konto angemeldet (**Windows-Authentifizierung** der IIS-Seite), schalte Single Sign-on im Peakboard Hub Configurator wieder ein:

1. Öffne den **Peakboard Hub Configurator** aus dem Windows-Startmenü.
2. Wechsle zu **Authentication**.
3. Aktiviere unter **Windows single sign-on** die Option **Enable Windows SSO (Negotiate)**.
4. Klicke auf [Apply changes]. Der Peakboard Hub Configurator startet den Peakboard Hub neu.

Single Sign-on funktioniert nicht über HTTP/2 und nicht hinter einem Reverse Proxy. Für den HTTPS-Endpunkt musst du nichts tun — das Setup legt ihn auf HTTP/1.1 fest. Die Anmeldequelle (**Local Users** oder **AD Users**) wird aus der `appsettings.json` übernommen und bleibt, wie sie war.

<div class="box-tip" markdown="1"> **Hinweis**: Ein Browser, der den Peakboard Hub auf einem Port geöffnet hat, den der Windows-Dienst nicht mehr nutzt, kann die Anmeldeseite weiterhin aus seinem Cache anzeigen, obwohl auf diesem Port nichts mehr antwortet (zum Beispiel mit der Meldung „Gateway Timeout“ nach der Anmeldung). Lösche im Browser die Websitedaten dieser Adresse.
</div>

### Migration über die Kommandozeile

Die Migration lässt sich auch unbeaufsichtigt ausführen. Alle Argumente beschreibt der Artikel [Silent-Installation](/hub/Peakboard_Hub_on_premise/de-hub_silent-installation.html).

Update am bisherigen Ort — der Peakboard Hub bleibt in seinem Ordner und wird zum Windows-Dienst:

```bat
PeakboardHubSetup.exe -Silent True -InstallPath "C:\inetpub\PeakboardHub"
```

Die Installation in die empfohlenen Ordner verschieben und die alten Ordner anschließend löschen:

```bat
PeakboardHubSetup.exe -Silent True ^
  -InstallPath "C:\Program Files\Peakboard\PeakboardHub" ^
  -ApiInstallPath "C:\Program Files\Peakboard\PeakboardHubApi" ^
  -HubMigrateFrom "C:\inetpub\PeakboardHub" ^
  -ApiMigrateFrom "C:\inetpub\PeakboardHubApi" ^
  -RemoveOldFolders True
```

<div class="box-warning" markdown="1"> **Wichtig**: Kommandozeile und Assistent gehen unterschiedlich mit den IIS-Bindungen um. Über die Kommandozeile werden standardmäßig **alle** wiederverwendbaren Bindungen der IIS-Seite übernommen. Mit `-HubEndpointsFromIis False` (Public API: `-ApiEndpointsFromIis False`) wird nichts aus dem IIS übernommen, und es gelten nur die Ports aus der Kommandozeile.
</div>

### Installation manuell verschieben

Sollte das Setup das Verschieben nicht anbieten — zum Beispiel, wenn es die Installation nicht als Installation aus der IIS-Zeit erkennt, oder wenn der Peakboard Hub bereits in seinem alten Ordner zum Windows-Dienst aktualisiert wurde und erst jetzt in die empfohlenen Ordner verschoben werden soll —, kannst du die Installation dann von Hand verschieben.

Die Schritte verwenden `C:\inetpub\PeakboardHub` als alten Ordner und die empfohlenen Ordner als neue: `C:\Program Files\Peakboard\PeakboardHub` für die Programme und `C:\ProgramData\Peakboard\PeakboardHub` für die Daten. Ersetze sie durch deine eigenen Ordner, wo sie abweichen. Lege zuerst die unter [Bevor du beginnst](#bevor-du-beginnst) beschriebenen Sicherungen an und führe alle Schritte mit Administratorrechten aus.

1. **Datenordner nachschlagen.** Öffne den Peakboard Hub im Browser und wechsle zu **Settings**. Notiere dir den Wert von **Folder for storing files** (Bereich **Files**) und von **Folder for storing active Hub Flow Applications** (Bereich **Hub Flows**). Ein relativer Pfad verweist auf einen Ordner im Programmordner.
2. **Neue Version installieren.** Starte das aktuelle Setup und wähle auf der Seite **Installation Folders** den bestehenden Ordner. Läuft der Peakboard Hub noch im IIS, wird er in seinem aktuellen Ordner in einen Windows-Dienst umgewandelt. Läuft er bereits in der neuen Version als Windows-Dienst, überspringe diesen Schritt.
3. **Prüfen, ob die Installation funktioniert hat.** Die Seite **Installation finished** zeigt keine Fehler, der Dienst **Peakboard Hub** läuft in den Windows-**Diensten** (`services.msc`), und du kannst dich im Browser am Peakboard Hub anmelden und siehst deine Boxen, Dateien und Hub Flows. Fahre erst fort, wenn alles funktioniert.
4. **Datenordner in den Hub-Einstellungen verschieben.** Setze auf der Seite **Settings** des Peakboard Hub:
   * **Folder for storing files** auf `C:\ProgramData\Peakboard\PeakboardHub\HubFileStorage\`
   * **Folder for storing active Hub Flow Applications** auf `C:\ProgramData\Peakboard\PeakboardHub\PeakboardHubFlows`

   Wenn du einen neuen Ordner speicherst, verschiebt der Peakboard Hub den vorhandenen Inhalt selbst dorthin. Laufende Hub Flows werden für das Verschieben angehalten und danach wieder gestartet. Warte, bis das Verschieben abgeschlossen ist — die alten Ordner sind leer oder gelöscht —, bevor du fortfährst.
5. **Dienst stoppen.** Stoppe den Dienst **Peakboard Hub** in den Windows-**Diensten** oder in einer Eingabeaufforderung:

   ```bat
   sc.exe stop PeakboardHub
   ```

   Hast du dem Dienst bei der Installation einen anderen Namen gegeben, verwende diesen hier und in den folgenden Schritten. Du findest ihn in den Eigenschaften des Dienstes unter **Dienstname**.
6. **Programmordner verschieben.** Verschiebe den kompletten Ordner `C:\inetpub\PeakboardHub` mit seinem gesamten Inhalt, einschließlich der `appsettings.json`, nach `C:\Program Files\Peakboard\PeakboardHub`.
7. **Dienst entfernen.** Der Dienst verweist noch auf den alten Ordner. Lösche ihn:

   ```bat
   sc.exe delete PeakboardHub
   ```

8. **Setup im neuen Ordner erneut ausführen, um den Dienst anzulegen.** Starte das Setup und wähle **Peakboard Hub**. Gib auf der Seite **Installation Folders** den neuen Ordner `C:\Program Files\Peakboard\PeakboardHub` ein. Auf der Seite **Update Peakboard Hub**:
   * wähle **Update Hub program files** ab — die Dateien sind bereits aktuell
   * lass **Set up database** abgewählt
   * **Configure Hub Windows service (ports & firewall)** ist ausgewählt und lässt sich nicht ändern, weil für diesen Ordner noch kein Dienst existiert

   Auf der Seite **Service Configuration** zeigt das Setup die Standardports und HTTP-Einstellungen an. Passe diese, sowie den bisherigen Dienstnamen der Installation, passend deinen Wünschen an. Klicke auf [Update]. Das Setup legt den Windows-Dienst an und startet ihn, öffnet die Ports in der Windows-Firewall und trägt die Installation unter Windows **Apps & Features** ein.
9. **Alte Registry-Einträge entfernen.** Das Setup legt für jede Installation Einträge in der Registry an. Die Einträge des alten Ordners bleiben erhalten und erscheinen als zweiter Peakboard Hub unter **Apps & Features** und im Peakboard Hub Configurator — und ihr Uninstaller würde auf den alten Ordner zugreifen. Öffne den Registrierungs-Editor (`regedit`) und exportiere die Schlüssel, bevor du sie löschst:
   * Suche unter `HKEY_LOCAL_MACHINE\SOFTWARE\Peakboard\Hub` den Unterschlüssel, dessen Wert `InstallPath` der alte Ordner `C:\inetpub\PeakboardHub` ist. Notiere dir seinen Namen (die Installations-ID) und lösche den Unterschlüssel. Lösche **nicht** den Unterschlüssel, dessen `InstallPath` der neue Ordner ist.
   * Lösche `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\<Installations-ID>` mit dem notierten Namen.
   * Existieren die Schlüssel älterer Setup-Versionen `HKEY_LOCAL_MACHINE\SOFTWARE\Peakboard Hub` und `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\Peakboard Hub` noch und verweisen auf den alten Ordner, lösche sie ebenfalls.
10. **Ergebnis prüfen.** Melde dich erneut am Peakboard Hub an und prüfe deine Boxen, Dateien und Hub Flows. Passe anschließend alles an, was auf den alten Ordner verweist, siehe [Nach der Migration](#nach-der-migration). Den alten Ordner kannst du löschen, sobald er leer ist.

Die **Public API** verschiebst du genauso mit den Schritten 5 bis 9: Der Dienst heißt `PeakboardHubApi`, die Ordner sind `C:\inetpub\PeakboardHubApi` und `C:\Program Files\Peakboard\PeakboardHubApi`, die Komponenten heißen **Update API program files** und **Configure API Windows service (ports & firewall)**, und ihre Registry-Einträge liegen unter `HKEY_LOCAL_MACHINE\SOFTWARE\Peakboard\Api` (ältere Setup-Versionen: `Peakboard Hub API`). Die Public API hat keine eigenen Datenordner.

### Zur vorherigen Version zurückkehren

Führe **kein** älteres Setup aus, um eine Migration rückgängig zu machen. Es erkennt die migrierte Installation nicht und würde eine zweite IIS-Seite auf denselben Ports anlegen. So kehrst du zurück:

1. Deinstalliere den migrierten Peakboard Hub mit seinem [Uninstaller](/hub/Peakboard_Hub_on_premise/de-hub_uninstallation.html) (Daten behalten).
2. Installiere die vorherige Version.
3. Stelle die Datenbanksicherung von vor dem Update wieder her.
4. Stelle die Dateisicherung von vor dem Update (hochgeladene Dateien, Hub Flows, `appsettings.json` und die übrigen Datenordner) im Ordner der vorherigen Installation wieder her.

### Fehlerbehebung

{% include styled_table.html %}
{: .w-full }
| Problem | Ursache und Lösung |
|---|---|
| Der Peakboard Hub ist nach der Migration nur über HTTP erreichbar | Das Zertifikat der HTTPS-Bindung lag im zentralen Zertifikatspeicher des IIS oder war nicht mehr im Zertifikatspeicher vorhanden. Das Setup-Protokoll nennt die Bindung. Lege das Zertifikat im Speicher **Eigene Zertifikate** des lokalen Computers ab und wähle es im Peakboard Hub Configurator aus. |
| Benutzer werden nicht mehr automatisch mit ihrem Windows-Konto angemeldet | Windows Single Sign-on war eine Einstellung der IIS-Seite und wird nicht übernommen. Aktiviere es im Peakboard Hub Configurator, siehe [Windows Single Sign-on](#windows-single-sign-on). |
| Ein Port der IIS-Seite wurde nicht übernommen | Eine andere IIS-Seite nutzt denselben Port. Das Setup-Protokoll nennt diese Seite. Nutze für den Peakboard Hub einen anderen Port. |
| Das Setup meldet unvollständige Programmdateien und einen deaktivierten Dienst | Das Update ist beim Kopieren der Dateien fehlgeschlagen. Starte dasselbe Setup noch einmal, um es abzuschließen. |

Die Protokolldateien des Setups liegen unter `C:\ProgramData\Peakboard\LocalState\Logs\Setup\`.
