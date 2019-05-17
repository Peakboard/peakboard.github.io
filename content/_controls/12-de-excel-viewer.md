---
layout: article
title: Excel Viewer
menu_title: Excel Viewer
description: Information über Peakboard Designer Excel ViewerControl.
lang: de
weight: 1200
ref: con-1200
---

Grundsätzlich bietet Peakboard umfangreiche Möglichkeiten, Daten aus unterschiedlichsten Quellen einzubinden und dann diese Daten mit Steuerelementen zu visualisieren. Das ist der Standardweg. In manchen Fällen kann es sinnvoll sein, aber auch schon die Visualisierung von außen zu importieren und nicht nur die Daten. Dieses Kapitel beschreibt das Excel-Viewer-Control, mit dessen Hilfe ein Chart, das in einem Excel-File eingebettet ist, als Teil der Visualisierung direkt eingebunden werden kann.

Im folgenden Beispiel wird exemplarisch eine Excel-Datei genutzt, die eine Tabelle und ein Chart enthält. In Excel hat übrigens jedes Chart einen Namen. Der wird uns später noch einmal begegnen.

![image_1](/assets/images/Controls/Excel-Viewer/Controls_ExcelViewer_01.png)

Der Einfachheit halber fügen wir die Excel-Datei im Peakboard-Designer als statische Ressource hinzu. Es ist aber natürlich genauso möglich, die Datei aus einem Cloud-Speicher, von einem Netzlaufwerk oder aus einer Web-Adresse abzurufen. An der Vorgehensweise ändert das nichts.

Das Excel-Viewer-Control wird am einfachsten über die Eigenschaft Chart konfiguriert (auf die drei Punkte klicken). Es muss zunächst eine Ressource gewählt werden, dann das gewünschte Tabellenblatt und zu guter Letzt das gewünschte Diagramm (deshalb war der Diagramm-Name wichtig). Die Eigenschaft Refresh-Time definiert, wie oft das Chart aus der Ressource nachgeladen wird.

![image_1](/assets/images/Controls/Excel-Viewer/Controls_ExcelViewer_02.png)

Der folgende Screenshot zeigt das Excel-Chart im Peakboard-Preview.
![image_1](/assets/images/Controls/Excel-Viewer/Controls_ExcelViewer_03.png)

> ### Achtung! 
>
>Bitte beachten Sie, dass das Chart nicht zwingend exakt so aussehen muss, wie im Original-Excel. Aus technischen Gründen kann es zu optischen Abweichungen kommen.

> ### Achtung!
>
> Bitte prüfen Sie sehr genau, ob es in Ihrem Fall wirklich Sinn macht, Excel als Chart-Generator zu verwenden! Nur die Daten einzubinden, um sie dann mit Peakboard-eigenen Charts zu visualisieren, ist technisch immer die bessere Alternative.
