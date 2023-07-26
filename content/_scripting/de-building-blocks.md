---
layout: article
title: Peakboard Building Blocks
menu_title: Peakboard Building Blocks
description: Information über die Peakboard Building Blocks
lang: de
weight: 104
ref: scr-104
redirect_from:
---

Peakboard bietet dir mit der [bedingten Formatierung](/controls/de-cf.html) ein Tool für datenabhängige Darstellungslogik und mit den [Dataflows](/dataflows/de-erste-schritte.html) die Möglichkeit eingehende Daten für dein Projekt aufzubereiten. Damit du auch weitergehende Anforderungen und komplexere Ideen ohne große Programmierkenntnisse erfüllen kannst, klickst du dir mit den Peakboard Building Blocks deinen Code mit grafisch aufbereiteten Blöcken zusammen.

### Peakboard Building Blocks im Skript-Editor

Im [Skript-Editor](/scripting/de-script-editor.html) hast du die Möglichkeit über den Regler oben Rechts auszuwählen, ob du den benötigten Code selbst schreiben oder mithilfe der Peakboard Building Blocks zusammenklicken möchtest.

<div class="box-warning" markdown="1">
**Vorsicht**

Es ist möglich, durch Betätigen des Reglers von der grafischen Ansicht der Building Blocks zum geschriebenen Code zu wechseln, andersherum funktioniert dies jedoch nicht.
</div>

Je nach ausgewähltem Modus, ändert sich der Skript-Baum auf der rechten Seite. Wähle [Block Mode] (1) um mit den Peakboard Building Blocks zu arbeiten.
Jeder Building Block entspricht einem Befehl und lässt sich an den vorherigen per Drag & Drop anfügen und so gestalten, wie es die Ablauflogik erfordert.
Die zusammengesetzten Building Blocks (2) bilden einen logischen Programmablauf, der später von oben nach unten ausgeführt wird.
Nicht mehr benötigte Building Blocks können per Drag & Drop in den Mülleimer (3) oder drücken der Entf-Taste gelöscht werden.
Im unteren Bereich des Skript-Editors siehst du das erstellte Skript (4) das hinter den Building Blocks steckt.

![Building Block Mode](/assets/images/scripting/buildingblocks/de_building-blocks-01.png)

### Der Skript-Baum

Im oberen Bereich des Skript-Baums findest du alle Elemente aufgeführt, die in deinem aktuellen Projekt verwendet wurden.
Hast du in deiner Visualisierung zum Beispiel einen [Text](/controls/Common/de-text-block.html) platziert und dem Control einen Namen gegeben, so kannst du eine Hierarchieebene unter [Text] auf [Set Value] klicken und so seine Eigenschaften anpassen.

### Lokale Variablen anlegen

Weiter unten im Skript-Baum findest du die sogenannten lokalen Variablen.
Lokale Variablen sind Container, in die du Werte wie Texte, Zahlen oder Listen ablegen kannst.
Um eine neue lokale Variable anzulegen, klicke einfach auf das [+]-Symbol (1), gib der Variable einen Namen (2), wähle den gewünschten Datentyp aus (3) und bestätige mit [OK].

![Lokale Variablen](/assets/images/scripting/buildingblocks/de_building-blocks-02.png)

### Beispiel für einen Programm-Ablauf

Der folgende Screenshot zeigt einen Programm-Ablauf, mit dem du über Textfelder eine E-Mail aus deiner Visualisierung heraus versenden kannst. Voraussetzung für das Ausfüllen der Felder sind passende Peripheriegeräte, wie zum Beispiel Tastatur und Maus oder ein Touchscreen.

![E-Mail Programm-Ablauf](/assets/images/scripting/buildingblocks/de_example-01.png)

Um den Programm-Ablauf vorzubereiten, lege eine E-Mail Datenquelle an, gib dieser einen Namen (1) und befülle diese mit den Login-Informationen des E-Mail-Accounts, den du für den Versand der E-Mails benutzen möchtest (2). Klicke dann auf [Daten laden] um zu sehen ob die Verbindung funktioniert. Alternativ kannst du diesen Schritt komplett überspringen und direkt zum nächsten Schritt gehen. Du verwendest dann später den Peakboard-Server, um deine E-Mail zu versenden. Als Absender wird dann [mail@peakboard.com] angezeigt.

![E-Mail Datenquelle](/assets/images/scripting/buildingblocks/de_example-02.png)

Lege drei Textfeld Controls [Empfänger] (1), [Betreff] (2) und [Inhalt] (3) an. Aktiviere jeweils die Verwendung in Skripten (4) und vergebe passende Namen (5). Als Text gibst du jeweils einen Platzhalter ein und gibst den Controls die passenden Titel.

![Textfelder](/assets/images/scripting/buildingblocks/de_example-03.png)

Als Letztes benötigst du noch einen [E-Mail senden] Button. Ziehe dazu das Button Control auf die Arbeitsfläche (1) und gib als Text beispielsweise [E-Mail senden] (2) ein. Um in den Skript-Editor zu gelangen, klickst du in den Attributen im Bereich [Tapped Event] auf das [</>]-Symbol (3).

![Button](/assets/images/scripting/buildingblocks/de_example-04.png)

Gehe im Skript-Baum zu [FUNKTIONEN], [In externem System veröffentlichen], [E-Mail] und erneut [E-Mail] wenn du deine eigene E-Mail Datenquelle im ersten Schritt angelegt hast oder auf [E-Mail über Peakboard Server] wenn du zum Testen nicht deinen eigenen Server nutzen möchtest. In beiden Fällen ziehst du den Building Block [E-Mail senden] auf die Arbeitsfläche des Skript-Editors oder machst einen Doppelklick darauf. Den Standard Building Block musst du dann entsprechend anpassen.

![Building Block](/assets/images/scripting/buildingblocks/de_example-05.gif)

Wenn du deine eigene E-Mail Datenquelle angelegt hast, musst du diese im hinzugefügten Building Block auswählen. Um die vorher angelegten Textfelder später als Eingabe nutzen zu können, löschst du die drei Block-Teile auf der rechten Seite durch Ziehen auf den Papierkorb. Gehe dann im Skript-Baum in den Bereich [CONTROLS] und auf den entsprechenden Bildschirm, auf dem du die Textfelder angelegt hast. Ziehe dann jeweils den Building Block [Wert abrufen] aus dem Bereich [Text] des jeweiligen Textfeldes an die passende Stelle des vorher angelegten [E-Mail senden] Building Blocks.

![Building Block anpassen](/assets/images/scripting/buildingblocks/de_example-06.gif)

Damit du weißt, dass deine E-Mail auch wirklich verschickt wurde, fügst du einen weiteren Building Block unten an den aktuellen Programm-Ablauf an. Gehe dazu in den Bereich [FUNKTIONEN] und wähle unter [Visualisierung] den Building Block [Benachrichtigung/Fehler anzeigen] aus und ziehe ihn unten an den bestehenden Block. Gib in den leeren Building Block Bereich deine gewünschte Meldung ein und wähle im Drop-down-Menü [Info] aus.

![Benachrichtigung einstellen](/assets/images/scripting/buildingblocks/de_example-07.gif)

Um sicherzustellen, dass der nächste Nutzer deines E-Mail Formulars die zuletzt verschickte Nachricht nicht lesen kann, fügst du drei weitere Building Blocks an den bestehenden Programm-Ablauf an, die den eingegebenen Inhalt der Textfelder wieder auf deinen gewünschten Platzhaltertext zurücksetzen. Wähle dazu wieder im Bereich [CONTROLS] den passenden Bildschirm mit den Textfeldern aus und ziehe von jedem der drei Textfeld-Controls den Building Block [Wert setzen] unter [Text] unter den bestehenden Programm-Ablauf. Fülle dann die leeren Bereiche der Building Blocks mit deinen Platzhaltern auf.

![Textfelder zurücksetzen](/assets/images/scripting/buildingblocks/de_example-08.gif)

Im unteren Bereich siehst du das fertige Skript auch ausgeschrieben.
Das folgende Skript-Beispiel zeigt die Version ohne eigene E-Mail Datenquelle.

```lua
mail.send(screens['Screen1'].Empfänger.text, screens['Screen1'].Betreff.text, screens['Screen1'].Inhalt.text)
runtime.shownotification('E-Mail versendet!')
screens['Screen1'].Empfänger.text = 'Empfänger E-Mail Adresse bitte hier eingeben'
screens['Screen1'].Betreff.text = 'Betreff bitte hier eingeben'
screens['Screen1'].Inhalt.text = 'Inhalt bitte hier eingeben'
```

Bestätige deinen Programm-Ablauf zuletzt mit [Speichern & Schließen].

Öffne die [Vorschau], um deinen Programm-Ablauf zu testen. Warte bis deine Visualisierung geladen hat und gib einen Empfänger, den Betreff und den Inhalt deiner E-Mail ein. Klicke dann auf den [E-Mail senden] Button. Wenn alles geklappt hat, sollte dir nun die Benachrichtigung angezeigt werden und die Textfelder sollten wieder den festgelegten Platzhaltertext enthalten. Beim Empfänger sollte die E-Mail ebenfalls angekommen sein. Wenn du in der Vorschau durch einen Klick auf das dreieckige Ausrufezeichen-Symbol das Log öffnest, sollte dort nur die Meldung [Mail successfully sent] erscheinen.

![Vorschau öffnen](/assets/images/scripting/buildingblocks/de_example-09.gif)
