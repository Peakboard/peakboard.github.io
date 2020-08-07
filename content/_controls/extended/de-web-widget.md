---
layout: article
title: Web Widget
menu_title: Web Widget
description: Information über Peakboard Designer Web Widget Control.
lang: de
weight: 820
ref: con-820
redirect_from:
  - /controls/de-web-widget.html
---

Im Gegensatz zum Webpage-Control ist die Aufgabe des WebWidget-Controls, nur ein HTML-Fragment und keine komplette Seite anzuzeigen. Typisches Aufgabengebiet ist das Rendern von HTML-Code um externe Inhalte in die eigene Homepage einzubinden, z.B. Wetter, Aktienkurse etc. Im folgenden Beispiel wollen wir das Wetter-Widget von [wetter24.de](http://www.wetter24.de) einbinden. Sie können sich eigenen HTML-Code für Ihre Postleitzahl generieren lassen, wenn Sie das Formular auf [dieser](http://www.wetter24.de/mehr/widget/) Seite ausfüllen.

Öffnen Sie den Eigenschaftseditor des WebWidget-Controls, in dem Sie auf den kleinen Knopf mit den drei Punkten der HTMLCode-Eigenschaft klicken. Sie können dann den HTML Code per Copy und Paste in das Textfeld einfügen und mit OK bestätigen.

Im Designer wird das Widget nicht angezeigt. Um es zu sehen, muss der Preview aktiviert werden oder das Panel muss auf einer Peakboard-Box laufen. Im nachfolgenden Screenshot sieht man übrigens auch sehr schön, dass die Größe der HTML-Ausgabe durch den HTML-Code und eben nicht durch die Größe des Controls bestimmt wird. Das Control muss aber natürlich groß genug sein, um alles anzuzeigen.



## Examples:

Im Folgenden finden Sie zum Experimentieren eine kleine Liste von Websites, die das Generieren von HTML-Widgets erlauben

**Wetter**

[http://www.wetter24.de/mehr/widget/?city=18228265](http://www.wetter24.de/mehr/widget/?city=18228265)

[http://www.daswetter.com/widget/](http://www.daswetter.com/widget/)

**Facebook**

[https://developers.facebook.com/docs/plugins/page-plugin](https://developers.facebook.com/docs/plugins/page-plugin)

**Google Maps**

[http://maps-generator.com/](http://maps-generator.com/)

**Open Street Map**

[http://wiki.openstreetmap.org/wiki/DE:Karte_in_Webseite_einbinden](http://wiki.openstreetmap.org/wiki/DE:Karte_in_Webseite_einbinden)

![image_1](/assets/images/Controls/Web-Widget/webwidget01.gif)