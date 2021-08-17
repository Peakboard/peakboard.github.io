---
layout: article
title: Push-Nachrichten an eine Peakboard Box senden
menu_title: Push-Nachrichten an eine Peakboard Box senden
description: Push-Nachrichten an eine Peakboard Box senden
lang: de
weight: 200
ref: misc-200
redirect_from:
  - /misc/02-de-push-nachrichten.html
---

Peakboard kann in Szenarien eingesetzt werden, bei denen Daten nicht von der Peakboard Box aus einer Datenquelle geholt, sondern von der Datenquelle pro-aktiv auf die Box „gepusht“ werden. Diese Seite zeigt, wie man ein solches Szenario gestalten kann.

In unserem Beispiel erzeugen wir eine tabellarische Datenquelle namens Messages mit zwei Spalten: Code und Message. Es kann dafür jedoch auch eine einzelne Variable erzeugt werden. Wie man solche Datenquellen anlegt, ist in [diesem Artikel](/scripting/de-variables.html) beschrieben. Füllen Sie die Tabelle am Besten mit einer einzelnen Demozeile. Danach legen Sie ein Tablegrid-Control an und verknüpfen es mit der statischen Datenquelle. Der folgende Screenshot zeigt die Entwurfsansicht im Designer.

![image_1](/assets/images/misc/push/MiscPushMessage01.png)

Sie können jetzt das Design auf eine Box übertragen und das Board dort abspielen zu lassen. Wenig überraschend wird dort die Tabelle mit den statischen Daten wie im Designer angezeigt.

Die statischen Daten lassen sich nun von außen ändern, in dem von einem externen System eine http-Post-Nachricht auf die Box gesendet wird. Die Nachricht muss an die Url `http://<BoxAdresse>:40404/api/datapush?id=<MeineID>&datakey=<MeinDataKey> ` gesendet werden. Die Box-Adresse ist entweder der Netzwerk-Name oder die IP-Adresse. Die ID ist die ID des Boards. Sie finden Sie, indem Sie auf Edit Manifest klicken. Der folgende Screenshot zeigt den Manifest-Dialog mit der ID. Der letzte Schlüssel Data Key ist der Name der statischen Datenquelle. In unserem Beispiel Messages.

Die Anfrage muss über eine Basic-Authentifizierung verschlüsselt werden. Dafür verwenden Sie die selben Zugangsdaten wie im Windows IoT Portal eingerichtet. Standardmäßig sind diese Login-Daten „Administrator“ „p@ssw0rd“.



![image_1](/assets/images/misc/push/MiscPushMessage02.png)

Die eigentlichen Daten werden dann im Body der http-Mail-Nachricht als CSV übertragen. In unserem Beispiel sollte der Body so aussehn:

```
Code,Message
Error,Machine is broken
```

Die obere Zeile gibt dabei die Spaltennamen und die folgenden Zeilen den Inhalt an. Wenn es keine Tabelle sondern eine einzelner Wert ist, besteht der Content nur aus dem Inhalt. Also z.B. für eine String Variable nur `Hello World`

Falls Sie keine Maschine zur Hand haben, die auf die Schnelle solch eine Nachricht zum Testen generieren kann, tut es auch ein kleines .NET-Programm, um diesen Mechanismus zu demonstrieren. Sie können das Demoprogramm hier herunterladen. Im Folgenden sehen Sie einen Screenshot der Maske und den zugehörigen .NET-Code, der zeigt, wie die http-Nachricht erzeugt und versendet wird:

![image_1](/assets/images/misc/push/MiscPushMessage03.png)

 ```Lua
Uri uri = new Uri($”http://{this.IPTextBox.Text}:40404/api/datapush?id={this.IdTextBox.Text}&datakey=messages”);
HttpClient httpClient = new HttpClient(new HttpClientHandler() { Credentials = new NetworkCredential(this.UserTextBox.Text, this.PasswordTextBox.Password) });

var request = new HttpRequestMessage(HttpMethod.Get, uri);

string csvcontent = “Code,Message\r\n” + this.CodeTextBox.Text + “,” + this.MessageTextBox.Text;

var content = new StringContent(csvcontent, Encoding.UTF8, “application/csv”);

HttpResponseMessage response = await httpClient.PostAsync(uri, content);

if (response.IsSuccessStatusCode)
{
  MessageBox.Show(“Message posted successfully”);
}
else
{
  MessageBox.Show($”Message posting failed {response.StatusCode}”);
}

```
Die beiden folgenden Screenshots zeigen das Original-Board einmal mit den statischen, hinterlegten Daten und einmal nach dem Absenden der Push-Nachricht:
![image_1](/assets/images/misc/push/MiscPushMessage04.jpg)

![image_1](/assets/images/misc/push/MiscPushMessage05.jpg)

