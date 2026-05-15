---
layout: article
title: XML
menu_title: XML
description: XML-Daten als Datenquelle im Peakboard Designer anbinden
lang: de
weight: 2800
ref: dat-2800
redirect_from:
  - /data_sources/08-de-xml.html
---

XML (Extensible Markup Language) ist ein weit verbreitetes, hierarchisches Textformat für den Austausch strukturierter Daten zwischen Systemen. Peakboard liest eine XML-Quelle – als lokale Datei, aus einer Netzwerkfreigabe oder über eine URL – ein, wandelt sie in eine Tabelle um und stellt sie auf dem Dashboard dar. Hintergründe zum Format selbst findest du z. B. im [Wikipedia-Artikel zu XML](https://de.wikipedia.org/wiki/Extensible_Markup_Language).

Wenn du keine eigene XML-Quelle zur Hand hast, kannst du dieses öffentliche Beispiel nutzen – einen kleinen CD-Katalog: [https://www.w3schools.com/xml/cd_catalog.xml](https://www.w3schools.com/xml/cd_catalog.xml)

## Datenquelle hinzufügen

Klicke im Explorer unter [Daten] auf den [...]-Button oder führe dort einen Rechtsklick aus und wähle [Datenquelle hinzufügen]. Tippe im Dialog „XML" in das Suchfeld (2) und öffne die Datenquelle [XML] (1) per Doppelklick.

![XML als Datenquelle hinzufügen](/assets/images/data-sources/xml/xml-01-add-datasource.png)

## Verbindung konfigurieren

In der Konfigurationsmaske legst du fest, woher die XML-Daten kommen:

* **Datenquellenname (1)** – ein eindeutiger Name für die Datenquelle (z. B. `CDCatalog`).
* **Reload (2)** – aktiviere die zyklische Aktualisierung und lege das Intervall in Sekunden fest, wenn die Daten regelmäßig neu geladen werden sollen.
* **Quelltyp (3)** – wo die XML-Quelle liegt: per **URL**, in einer **Netzwerkfreigabe**, als lokale **Datei**, in **Microsoft 365** (OneDrive/SharePoint) oder im **Peakboard Hub**.
* **Basis-URL (4)** – die Adresse der XML-Quelle. Für das Beispiel fügst du hier die CD-Katalog-URL ein.
* **Authentifizierungstyp (5)** – falls die Quelle geschützt ist, stehen **None**, **Basic**, **Bearer** und **OAuth** zur Verfügung. Für das öffentliche Beispiel bleibt es bei **None**.
* **Request (6)** – über [Request Header oder Body definieren] passt du bei Bedarf HTTP-Methode, Header und – bei POST/PUT-Requests – den Body an.

![XML-Datenquelle konfigurieren](/assets/images/data-sources/xml/xml-03-config-fields.png)

## XML-Element auswählen

Da eine Peakboard-Datenquelle immer tabellarisch ist, musst du festlegen, welcher Teil des XML-Baums als Tabelle dient. Klicke dazu im Bereich [Details angeben] auf den [...]-Button hinter dem Feld [Pfad]. Peakboard lädt die Quelle und analysiert ihre Struktur.

Wähle links im Baum (1) das Element, das sich wiederholt und damit die Tabellenzeilen bildet (im Beispiel der Knoten `CD`). Rechts (2) erscheinen die daraus abgeleiteten Spalten. Setze nur bei den Spalten einen Haken, die du wirklich brauchst – ungenutzte Elemente lässt du gerade bei großen XML-Dateien am besten von Anfang an weg. Bestätige mit [OK].

![XML-Element auswählen](/assets/images/data-sources/xml/xml-04-select-element.png)

## Vorschaudaten laden

Zurück in der Hauptmaske steht der ermittelte Pfad im Feld [Pfad] (1) (im Beispiel `./CATALOG/CD`). Mit [Daten laden] erzeugst du eine Vorschau (2) und kannst die Plausibilität der Daten sowie die erkannten Datentypen prüfen. Über [Max. Zeilen] begrenzt du die Zeilenzahl; mit [Alle] hebst du die Begrenzung auf.

![XML-Vorschau laden](/assets/images/data-sources/xml/xml-05-preview.png)

Mit einem Klick auf [OK] legst du die Datenquelle an. Sie erscheint anschließend im Explorer unter [Daten] und lässt sich wie jede andere Datenquelle mit Controls (Tabelle, Chart, Liste …) verknüpfen.
