---
layout: article
title: Slack
menu_title: Slack
description: Information über Slack Daten in Peakboard
lang: de
weight: 2500
ref: dat-2500
---
Slack ist das Tool der Wahl, wenn es darum geht, schnell und unkompliziert Aufgaben in Teams zu kommunizieren, zu diskutieren und zu koordinieren. Die Slack-Datenquelle von Peakboard ermöglicht es dem Nutzer zum Einen, wie für Peakboard üblich, die Nachrichten aus einem Channel in benutzerdefinierten Intervallen abzurufen. Zum Anderen können über Slack WebSocket- und WebHook-Schnittstellen Nachrichten in Echtzeit gelesen und geschrieben werden. Somit kann die Slack-Anbindung nicht nur genutzt werden, um Chat-Verläufe zu visualisieren, sondern auch um in Echtzeit mit Peakboards im Netzwerk zu kommunizieren oder auch Peakboards untereinander kommunizieren zu lassen.

## Voraussetzungen

Abhängig davon, wie mit Slack interagiert werden soll, bedarf es auf dessen Seite einiger Maßnahmen um die Kommunikation zu ermöglichen.
In jedem Fall wird ein Token benötigt. Dieses Token wird genutzt, um einen Slack-Account mit den Anfragen des Peakboards zu verknüpfen. Dieses Token kann [hier](https://api.slack.com/custom-integrations/legacy-tokens) erstellt werden. Der Nutzer muss dafür angemeldet sein.
Mit diesem Token werden sowohl die Nachrichten per intervalgesteuerter Anfrage abgerufen, als auch die Echtzeit-Kommunikation autorisiert.
Das Schreiben in den Channel wird aktuell ausschließlich mithilfe von WebHooks unterstützt. Diese können vom Administrator des Workspaces im Menü angelegt werden. Die Navigation zum entsprechenden Eintrag ist in folgenden Screenshots abgebildet.

![image_1](/assets/images/Data_Sources/Slack/Datenquelle_Slack_00_WebHook.png)
![image_1](/assets/images/Data_Sources/Slack/Datenquelle_Slack_01_WebHook2.png)

## Einrichten der Datenquelle

Neben dem obligatorischen Namen der Datenquelle ist der Dreh- und Angelpunkt das oben bereits erwähnte Token. Mit einem Klick auf den "Get Channel"-Button werden die, für den Account verfügbaren, Channel angefragt und in dem darunter gelegenen Drop-down-Menü angezeigt.

![image_1](/assets/images/Data_Sources/Slack/Datenquelle_Slack_02_GetChannel.png)

Die Tickbox "Show user names" ersetzt in den Resultaten die Nutzer-Kürzel durch deren Namen. Unter Umständen möchte man nur vom Channel lesen und die Nachrichten ungeachtet des Senders auswerten. In diesem Fall kann man einiges an Netzwerklast sparen und die Nutzer-Ids für die weitere Verarbeitung verwenden.

Der nächste Punkt im Dialog stellt die Möglichkeit bereit, Nachrichten bestimmter Nutzer zu ignorieren. Das gilt für alle Nachrichten, welche die Datenquelle empfängt.

![image_1](/assets/images/Data_Sources/Slack/Datenquelle_Slack_03_UserList.png)

## Echtzeitkommunikation

Nachrichten aus Slack-Channels in Echtzeit zu empfangen, ist, neben der standardmäßigen intervallgesteuerten Anzeige von Nachrichten, das zweite Kern-Feature der Slack-Datenquelle. Hier kann über WebSockets ohne nennenswerte Zeitverzögerung kommuniziert werden. Somit wird der Nutzer befähigt, mit maximaler Flexibilität einzelne oder beliebig große Gruppen von Peakboard-Boxen anzusprechen.

![image_1](/assets/images/Data_Sources/Slack/Datenquelle_Slack_04_RTM.png)

Über das Skript, welches über den zugehörigen "{}"-Button im Dialog hinterlegt wird, kann jede Nachricht einzeln nach beliebigen Aspekten ausgewertet werden. Damit können mit minimalster Verzögerung Informationen im Peakboard angeziegt oder manipuliert werden. Auch das Schreiben in den Channel ist aus diesem Skript möglich.

## Nachrichten über WebHooks an Slack senden

Eine weitere, von Slack angebotene, Kommunikationsmöglichkeit sind WebHooks. Diese bieten einen schnellen und unkomplizierten Weg, Nachrichten über einen Bot direkt in den konfigurierten Channel zu schicken.

![image_1](/assets/images/Data_Sources/Slack/Datenquelle_Slack_05_WebHookSection.png)

Der Skriptbefehl, um einen Text an einen Channel zu senden, ist einfach und sieht folgendermaßen aus.
```lua
data.[slack].writetochannel('message')
```
Durch einen Bug in Microsofts Software ist aktuell ein WebHook zwingend erforderlich, wenn in einen Channel geschrieben werden soll.

## Vorschau der Daten

Um das Einrichten der Datenquelle abzuschließen, muss nun noch die Struktur der Slack-Daten aufbereitet werden. Dies wird mit einem Klick auf den "Load Columns"-Button erledigt. So werden testweise die Daten geladen und somit deren Struktur ermittelt.
Mit einem Klick auf den "Preview"-Button kann man nun schlussendlich noch die Nachrichten aus dem Slack-Channel ansehen und somit sicherstellen, dass die Datenquelle korrekt konfiguriert ist.

![image_1](/assets/images/Data_Sources/Slack/Datenquelle_Slack_06_Preview.png)

Da die Echtzeitkommunikation der Datenquelle grundlegend verschieden zu dem sonst, für Peakboard üblichen, intervallgesteuerten Laden der Daten ist, gelten "Reload Interval" und "Preview" nur für intervallgesteuerte Funktionalität der Datenquelle. Eine Möglichkeit, die Echtzeitanbindung im Designer zu testen, gibt es nicht. Allerdings laufen Standard-Kommunikation, real time messaging und WebHooks über die gleiche Schnittstelle. Somit ist davon auszugehen, dass bei erfolgreicher Preview-Ansicht, auch der Rest der Datenquelle funktioniert.