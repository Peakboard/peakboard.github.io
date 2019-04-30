---
layout: article
title: Google Analytics Reports
menu_title: Google Analytics Reports
description: Information über Peakboard Designer Google Analytics Reports Control.
lang: de
ref: con-13
---

Für das Erstellen von Google Analytics Reports ist zwingend ein Peakboard.io-Account nötig. Der GA-Report wird im [Peakboard.io-Portal](/data_sources/PeakboardIO/33-de-intro-peakboard-io-table.html) definiert und dann mit Hilfe des entsprechenden Steuerelements im Designer eingebettet.

Im Peakboard.io-Portal gehen Sie im Menü auf „GA Charts“. Falls Sie Ihren Account noch nicht mit dem Google-Account verknüpft haben, klicken Sie bitte auf den entsprechenden Button (siehe nächster Screenshot). Es öffnet sich dann die Goolge-Anmeldemaske, in die sie Ihre Credentials eingeben müssen. Es ist eine klassische OAuth2-Authentifizierung, mit der Sie Peakboard erlauben, auf Ihre Google-Analytics-Daten zuzugreifen. Sie können diese Erlaubnis jederzeit in Ihrem Google-Profil widerrufen. Nach erfolgreicher Verknüpfung lassen sich beliebig viele Reports erstellen. Die Verknüpfung muss nur einmal gemacht werden und bleibt dann bestehen.

![image_1](/assets/images/Controls/google-analytics/Controls_GA_01.png)

Nach erfolgreicher Verknüpfung stehen nun auf der linken Seite etliche Eingabefelder zur Verfügung, um sowohl die Datengrundlage als auch das Design des GA-Reports zu bauen. Je nach GA-Account muss die Eigenschaft und die View ausgewählt werden. Was genau das bedeutet, hängt vom GA-Account ab. Bitte vergessen Sie auch nicht, das Objekt korrekt zu benennen und mit einem kurzen Beschreibungstext zu versehen.

![image_1](/assets/images/Controls/google-analytics/Controls_GA_02.png)

Im weiteren Verlauf müssen Start- und Enddatum und weitere Attribute ausgewählt werden. Die gewünschte Metrik und Dimension sind jeweils Pflichtfelder. Sortierung, Filter und Segment sind freiwillig. Bitte beachten Sie, dass Google Analytics unzählig viele Möglichkeiten bietet. Daher ist das korrekte Setzen dieser Attribute nicht trivial und setzt tiefergehenden Sachverstand voraus. Bitte beachten Sie auch die Doku von Google für weitere Details zu den Dimensionen, Kennzahlen und anderen Attributen.

![image_1](/assets/images/Controls/google-analytics/Controls_GA_03.png)

Im letzten Teil müssen nun nur noch Details zur Visualisierung angegeben werden. Den Titel des Charts, dessen Typ und Größe. Klicken Sie auf Run Query, um die Abfrage mit den gewählten Attributen auszuführen. Sie sehen dann eine Voransicht des Charts. Speichern Sie ihren Report dann schlussendlich noch ab, wie jedes andere Peakboard.io-Objekt auch.

![image_1](/assets/images/Controls/google-analytics/Controls_GA_04.png)

Im Peakboard-Designer steht ein eigenes Steuerelement für diese GA-Reports zur Verfügung. Nachdem Sie wie üblich API-Key und Username eingegeben haben, selektieren Sie das entsprechende Chart-Objekt aus der Auswahlliste. Mehr ist nicht zu tun.

![image_1](/assets/images/Controls/google-analytics/Controls_GA_05.png)
