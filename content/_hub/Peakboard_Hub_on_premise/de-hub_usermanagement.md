---
layout: article
product: hub
title: Nutzer
menu_title: Nutzer
description: Peakboard Hub on premise - Nutzer
lang: de
weight: 140
ref: hub-140
redirect_from:
 - /hub/de-hub_usermanagement.html
---

Oft ist es nötig, dass nicht alle Nutzer über die gleichen Rechte verfügen. Egal ob aus organisatorischen, aus Datenschutzgründen oder anderen Gründen, im Peakboard Hub on premise kannst du festlegen, wer welche Rechte bekommt.
Die Berechtigungen legst du in Peakboard Hub on premise über Nutzergruppen fest.

Das Vorgehen unterscheidet sich in einigen Punkten, je nachdem ob du einen [Peakboard Hub on premise](/hub/Peakboard_Hub_on_premise/de-hub_usermanagement.html) oder einen [Peakboard Hub online](/hub/Peakboard_Hub_online/de-hub-online_usermanagement.html) verwendest.
Achte darauf, den korrekten Artikel zu nutzen.

<div class="box-warning" markdown="1">
**Hinweis**

Die Nutzerverwaltung ist nur für dich sichtbar, wenn du Adminrechte besitzt.
</div>

### Eine Nutzergruppe hinzufügen und einrichten

Klicke auf den [Add user group] Button (1) und lege einen Namen fest (2), um eine neue Nutzergruppe hinzuzufügen. Der Gruppenschlüssel (3) wird automatisch generiert.

![Add user group](/assets/images/hub/de_hub_usermanagement-01.png)

Du kannst Peakboard Boxen (1), Listen (2) und Verbindungen (3) zu einer Nutzergruppe hinzufügen.
Mithilfe des Gruppenschlüssels (4) können die Mitglieder der Nutzergruppe dann den Peakboard Hub on premise nutzen und auf die zugewiesenen Daten zugreifen.

![Nutzergruppen](/assets/images/hub/de_hub_usermanagement-02.png)

Wird eine Peakboard Box einer Nutzergruppe hinzugefügt, bleiben die Nutzer der jeweiligen Peakboard Box bestehen.
Definiere also unter welchem Peakboard Box Nutzer die Peakboard Hub on premise Nutzergruppe auf deine Peakboard Box zugreift.
So ist es möglich, dass verschiedene Nutzergruppen in Peakboard Hub on premise dieselbe Peakboard Box unter unterschiedlichen Peakboard Box Nutzern und damit mit unterschiedlichen Berechtigungen verwenden.

Für Listen kannst du die Berechtigungen pro Liste noch genauer konfigurieren.
Klicke dazu auf den Stift Button (1) hinter der Liste, die du bearbeiten möchtest.
Du kannst festlegen ob, Zeilen hinzugefügt oder gelöscht werden dürfen, ob die Struktur der Listen geändert oder die Listen sogar komplett geleert werden dürfen. Zudem kannst du für einzelne Spalten lediglich Leserechte vergeben. Nutzer können dann diese Spalte nicht mehr bearbeiten.

![Listen](/assets/images/hub/de_hub_usermanagement-03.png)

### Einzelne Nutzer verwalten

Die Zuweisung der Nutzergruppen (1) und die Änderung des Nutzerstatus (2) kannst du für die einzelnen Nutzer im rechten Bereich des Arbeitsbereiches vornehmen. Dort siehst du auch Nutzer, die noch keiner Nutzergruppe zugewiesen wurden (3) und kannst diesen eine Nutzergruppe zuweisen.

![Einzelne User](/assets/images/hub/de_hub_usermanagement-04.png)

### Neue Nutzer hinzufügen

Standardmäßig greift der Peakboard Hub on premise auf Active Directory (Domänen) Nutzer zu. Neue Nutzer müssen sich mit ihren Active Directory Nutzerdaten beim Peakboard Hub on premise anmelden. Ein Administrator kann diesen Nutzer dann freischalten.

### Mit lokalen Windows-Nutzern anmelden

Um dich mit deinem lokalen Windows-Nutzer anzumelden anstatt mit dem Active Directory (Domänen) Nutzer, musst du die Konfigurationsdatei `appsettings.json` manuell anpassen. Du findest die Datei standardmäßig unter `C:/inetpub/PeakboardHub`

Öffne die Datei mit einem Editor und setze den Wert `SiteSettings.IsPrincipalContextTypeMachine` auf `true` und speichere die Datei.

Falls der Wert nicht existiert, ergänze den folgenden Bereich:

```json
"SiteSettings": {
    "IsPrincipalContextTypeMachine": "true"
  },
```

![Wert anpassen](/assets/images/hub/hub_appsettings-json.png)

Jetzt wird nicht mehr auf die Active Directory (Domänen) Nutzer zugegriffen, sondern auf die lokalen Windows Nutzer des Peakboard Hub on premise Servers. Nach der Anmeldung am Peakboard Hub on premise mit den lokalen Windows Nutzerdaten kann ein Administrator den neuen Nutzer freischalten.
