---
layout: article
title: ListView
menu_title: ListView
description: Information über Peakboard Designer ListView Control.
lang: de
ref: con-10
---

Das ListView-Control kann jede beliebige Form und Gestalt annehmen, so lange es wiederkehrende Elemente enthält. Es ist deshalb auch zwingend an eine tabellarische Datenquelle gekoppelt, um einwandfrei zu funktionieren. Ob es sich um eine einfache Liste handelt, oder um komplexe Elemente wird durch ein XAML-Fragment definiert. Wenn Sie nicht mit XAML vertraut sind, können Sie [hier](https://docs.microsoft.com/de-de/dotnet/framework/wpf/advanced/xaml-overview-wpf) mehr darüber erfahren. Es handelt sich um eine Beschreibungssprache, mit der man eine Oberfläche bestehend aus Bildern, Text und anderen Elementen definieren kann. So ähnlich wie HTML, nur viel besser.
Im folgenden Beispiel wollen wir die Instagram-Quelle visualisieren, die wir [in einem anderen Artikel](/data_sources/16-de-instagram.html) bereits aufgesetzt haben, und den Instagram-Feed darstellen. Solche Datenquellen eignen sich ganz besonders gut, da sie aus Bildern und Text bestehend.
Ziehen Sie das ListView-Control auf das Panel und klicken Sie auf den Eigenschaftseditor der Eigenschaft Source. Es öffnet sich ein Dialog, auf dem Sie sich eine Datenquelle aussuchen können, z.B. die von Instagram.

![image_1](/assets/images/Controls/ListView/controlslistview01.png)

Das ListView-Control hat jetzt bemerkt, dass es sich bei der Quelle um einen Insta-Feed handelt und schlägt bereits eine passende Visualisierung vor. Deshalb ist das ein gutes Beispiel, weil wir uns so den XAML-Code anschauen können, ohne gleich zum Start selbst XAML formulieren zu müssen. Sie erreichen den Code-Editor über den Dialog zur Eigenschaft ItemTemplate. Oben im Code-Editor können Sie über die Combo-Box andere Templates auswählen, die zur jeweiligen Datenquelle passen. Ein Klick auf Preview zeigt Ihnen im rechten Bereich, wie sich das XAML visuell darstellt, das Sie links formuliert haben. Außerdem können Sie so gleich überprüfen, ob sich vielleicht ein Syntax-Fehler eingeschlichen hat.

![image_1](/assets/images/Controls/ListView/controlslistview02.png)

Um Werte aus der Datenquelle im XAML zu verwenden, nutzen Sie einfach eine Binding-Anweisung. So lassen sich einfache Textfelder genauso binden, wie Bilder bei der die URL in der Datenquelle enthalten ist. Hier
ist Instagram auch wieder eine gutes Beispiel, um das zu demonstrieren.

![image_1](/assets/images/Controls/ListView/controlslistview03.png)

Standardmäßig ordnet das ListView-Control die Elemente untereinander an. Wenn Sie die Elemente lieber von links nach rechts angeordnet haben wollen, stellen Sie einfach die Eigenschaft Orientation von Vertical auf Horizontal um. Sinnigerweise muss dann natürlich auch das XAML-Template angepasst werden, sonst macht es keinen Sinn. Die beiden Screenshots zeigen einmal das vertikale Listview mit horizontalem Template und das horizontale Listview mit vertikalem Template.
![image_1](/assets/images/Controls/ListView/controlslistview04.png)

![image_1](/assets/images/Controls/ListView/controlslistview05.png)

Zum Schluss noch der Vollständigkeit halber das ListView Control im Preview Modus.

![image_1](/assets/images/Controls/ListView/controlslistview06.png)
