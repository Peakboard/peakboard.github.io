---
layout: article
title: Http Request
menu_title: Http Request
description: Describes sending HTTP requests.
lang: en
weight: 166
ref: scr-166
redirect_from:
---

HTTP requests can be used to establish a connection to a server and send or receive data. To do this, a script is created that defines the HTTP request and sends it to the server. The server's response can then be processed further.

This is particularly useful for integrating external systems, such as web APIs, that provide data to be processed within the Peakboard Box.

## Sending an HTTP Request with Building Blocks
To send an HTTP request using Building Blocks, use the `Get / Post / Put / Delete / Patch` block found under `Publish to external systems` -> `Http`. This block can be used to send an HTTP request to a server.

If a response needs to be processed, use the `Get / Post / Put / Delete / Patch (with return)` block. This block sends an HTTP request to the server and returns the response, which can then be read and used further.

In the following example, an HTTP request is sent to the server `http://templates.peakboard.rocks:8888/api/RestView`, and the response, which is returned as a JSON object, is processed.

![Sending an Http Request](/assets/images/scripting/Scripting_Beispiele/http-requests/en-script-send-http-request.png)

## Sending an HTTP Request with a Script
To send an HTTP request, a script is created that defines the request and sends it to the server. The `http.get` function is used to send the request to the server and return the response.

In the following example, the URL `http://templates.peakboard.rocks:8888/api/RestView` is called with a GET request, and the response is processed.

The `result` object allows access to the server's response. The object contains the properties `status` and `content`. The `status` property contains the response status code, while the `content` property contains the response content.

If the response content is in JSON format, it can be converted into a Lua object using the `json.parse` function. After that, it is possible to access the object's properties.

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

In addition to the `http.get` function, there are also `http.post`, `http.put`, `http.delete`, and `http.patch` functions that can be used to send POST, PUT, DELETE, and PATCH requests.

When sending POST or PUT requests, the content of the request can be defined in the body of the request. A Lua object is created that contains the data to be sent to the server. Additionally, header information such as `Content-Type` or `Authorization` can be defined.

{% raw %}
```lua
-- Executes an HTTP Post request
local header = {{name='Content-Type', value='application/json'}, {name='header2', value='value2'}} -- Sending a header is optional. You can also pass nil.
local body = 'username=user&password=password' -- A body parameter is optional. You can also pass nil.
local result = http.post('https://mysite.com/endpoint', header, body)
local status = result.status -- receives the status code of the HTTP request
local content = result.content -- receives the content of the HTTP request

-- Example of how to use the status and content of the HTTP request
if status == 200 then
  peakboard.log('Status: Good')
  peakboard.log(content)
else
  peakboard.log('Status: Bad')
end
```
{% endraw %}
