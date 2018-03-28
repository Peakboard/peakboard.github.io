---
layout: article
title: Eigenschaften (Properties) nutzen
menu_title: Eigenschaften (Properties) nutzen
description: Eigenschaften (Properties) nutzen
lang: de
ref: scr-06
---
Dieser Artikel beschreibt den Gebrauch so genannter Properties (oder zu deutsch Eigenschaften). Im weitesten Sinne sind das konstante Werte, die hauptsächlich in Scripten verwendet werden. Solche Konstanten können entweder für eine einzelne Visualisierung angelegt werden, oder für die komplette Box, auf der die Visualisierung läuft.

Ein gutes Beispiel für eine Visualisierungsproperty wäre eine Tageshöchstwert, z.B. die Produktionsmenge von 25 Stück. Dann könnte an den unterschiedlichsten Stellen im Script auf diesen Wert zugegriffen werden. Sollte er sich einmal ändern, muss es nur an einer einzigen Stelle geändert werden, und nicht an 100 Stellen in den Scripten.

Ein gutes Beispiel für eine Box-Property wäre der Name der Abteilung. So könnte man im Script einfach eine Funktion hinterlegen die dafür sorgt, dass wenn eine Visualisierung in einer bestimmten Abteilung läuft, sie sich etwas anders verhält, als in einer anderen Abteilung. Es ist und bleibt aber dieselbe Visualisierung und kann dann universell erstellt werden: „Wenn Abteilung = ‚Sued‘ dann zeige nur Süd-Zahlen, ansonsten zeige alle Zahlen“.

Um Properties einer einzelnen Visualisierung zu setzen, klicken Sie auf den entsprechenden Button in der Menüleiste. In der Tabelle können die Werte dann gepflegt werden:

![image_1](/assets/images/scripting/properties/Properties_01.png)

Um eine Property für eine bestimmte Box zu setzen, erreichen Sie die Pflegemaske über den entsprechenden Menüeintrag im Manage-Dialog. Bitte beachten Sie, dass die Properties BoxID und License Systemeigenschaften sind, die nicht geändert oder gar gelöscht werden sollten.

![image_1](/assets/images/scripting/properties/Properties_02.png)

Innerhalb des Scripts werden die Package-Properties mit

`runtime.packageproperties.<MeinePackageProperty>`

und die Box-Properties mit

`runtime.properties.<MeineBoxProperty>`
abgefragt:

![image_1](/assets/images/scripting/properties/Properties_03.png)
