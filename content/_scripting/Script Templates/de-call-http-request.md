---
layout: article
title: Http Request
menu_title: Http Request
description: Beschreibt das Senden von HTTP Requests.
lang: de
weight: 166
ref: scr-166
redirect_from:
---

HTTP-Anfragen können verwendet werden, um eine Verbindung zu einem Server herzustellen und Daten zu senden oder zu empfangen. Dazu wird ein Skript erstellt, das die HTTP-Anfrage definiert und an den Server sendet. Die Antwort des Servers kann dann weiterverarbeitet werden.

Besonders interessant ist die Anbindung von externen Systemen, wie Web-Schnittstellen, die Daten bereitstellen, die dann im Peakboard Box weiterverarbeitet werden können.

## HTTP-Anfrage senden mit Building Blocks
Um eine HTTP-Anfrage mit Building Blocks zu senden, wird der Block `Get / Post / Put / Delete / Patch` verwendet, der unter `Publish to external systems` -> `Http` zu finden ist. Dieser Block kann verwendet werden, um eine HTTP-Anfrage an einen Server zu senden.

Soll eine Antwort verarbeitet werden, kann stattdessen der Block `Get / Post / Put / Delete / Patch (with return)` verwendet werden. Dieser Block sendet eine HTTP-Anfrage an den Server und gibt die Antwort zurück, die dann ausgelesen und weiterverwendet werden kann.

In dem nachfolgenden Beispiel wird eine HTTP-Anfrage an den Server `http://templates.peakboard.rocks:8888/api/RestView` gesendet und die Antwort, die als JSON-Objekt zurückgegeben wird, verarbeitet.

![Senden einer Http-Anfrage](/assets/images/scripting/Scripting_Beispiele/http-requests/en-script-send-http-request.png)

## HTTP-Anfrage senden mit Skript
Um eine HTTP-Anfrage zu senden, wird ein Skript erstellt, das die Anfrage definiert und an den Server sendet. Dazu wird die Funktion `http.get` verwendet, die die Anfrage an den Server sendet und die Antwort zurückgibt.

Im folgenden Beispiel wird die URL `http://templates.peakboard.rocks:8888/api/RestView` mit einer GET-Anfrage aufgerufen und die Antwort verarbeitet.

Über das Objekt `result` kann auf die Antwort des Servers zugegriffen werden. Dabei enthält das Objekt die Eigenschaften `status` und `content`. Die Eigenschaft `status` enthält den Statuscode der Antwort, während die Eigenschaft `content` den Inhalt der Antwort enthält.

Ist der Inhalt der Antwort im JSON-Format, kann dieser mit der Funktion `json.parse` in ein Lua-Objekt umgewandelt werden. Danach ist der Zugriff auf die Eigenschaften des Objekts möglich.

```lua
local result = http.get('http://templates.peakboard.rocks:8888/api/RestView')

if result.status ~= 200 then
	peakboard.log('HTTP request failed with status code ' .. result.status)
else
	data.JSONData.clear()
	local jsonContent = json.parse(result.content)
	for i, item in pairs(jsonContent) do
		data.JSONData.add({ Number = item['number'], Name = item['name'] })
	end
end
```

Neben der Funktion `http.get` gibt es auch die Funktionen `http.post`, `http.put`, `http.delete` und `http.patch`, die verwendet werden können, um POST-, PUT-, DELETE- und PATCH-Anfragen zu senden.

Werden POST- oder PUT-Anfragen gesendet, kann der Inhalt der Anfrage im Body der Anfrage definiert werden. Dazu wird ein Lua-Objekt erstellt, das die Daten enthält, die an den Server gesendet werden sollen. Zusätzlich können Header-Informationen, wie `Content-Type` oder `Authorization`, definiert werden.

```lua
-- Ausführen einer Http-Post-Anfrage
local header = {{name='Content-Type', value='application/json'}, {name='header2', value='value2'}} -- Das Senden eines Headers ist optional. Du kannst auch nil übergeben.
local body = 'username=user&password=password' -- Ein Body-Parameter ist optional. Du kannst auch nil übergeben.
local result = http.post('https://mysite.com/endpoint', header, body)
local status = result.status -- Empfängt den Statuscode der Http-Anfrage
local content = result.content -- Empfängt den Inhalt der Http-Anfrage

-- Beispiel, wie der Status und Inhalt der Http-Anfrage verwendet werden kann
if status == 200 then
  peakboard.log('Status: Good')
  peakboard.log(content)
else
  peakboard.log('Status: Bad')
end
```