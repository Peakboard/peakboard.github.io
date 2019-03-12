---
layout: article
title: Excel über ODBC einbinden
menu_title: Excel über ODBC einbinden
description: Excel über ODBC einbinden
lang: de
ref: dat-31
---

Details zur Installation der Bridge finden Sie [hier](/administration/01-de-install.html) sowie weitere Informationen zur Bridge-Datenquelle [hier](/data_sources/14-de-peakboard-bridge.html).

Der folgende Screenshot zeigt die Bridge-Datenquelle. Bei der Adresse muss die URI des Bridge-Server eingegeben werden. Üblicherweise ist das in der Form `tcp://<MeinBridgeServer>:2501`. Der Port muss nur angegeben werden, wenn er vom Default Wert 2501 abweicht.

![ODBC Anmeldemaske](/assets/images/data-sources/odbc-excel/odbc_form.png)

In der Auswahlbox Data Source Type wird die Verbindung über einen ODBC Request ausgewählt.
Damit der ODBC Request durchgeführt werden kann muss zunächst das Excel-File als ODBC-Datenquelle angelegt werden. Dazu wird der ODBC-Datenquellen-Administrator in der 32-Bit Version geöffnet und unter System-DSN eine neue Systemdatenquelle, wie im nachfolgenden Screenshot dargestellt, angelegt. Als Arbeitsmappe wird das gewünschte .xls-Excel-File ausgewählt und falls anschließend in das File zurückgeschrieben werden soll, der Haken bei Schreibgeschützt entfernt.

![ODBC-Datenquelle](/assets/images/data-sources/odbc-excel/odbc.png)

Zurück im Designer wird als Connection-String der System-DSN Name wie folgt verwendet:

```
DSN=myDsn;Uid=myUsername;Pwd=;
```

Im Beispiel lautet der Connection-String, da kein Passwort oder User vergeben wurden, folgendermaßen:

```
DSN=Peakboard Excel Test 32;
```

Bevor die Daten geladen werden können muss noch ein passender Ladebefehl formuliert werden. Bei Excel erfolgt die Referenz auf das entsprechende Tabellenblatt über [MyTable$] und hat folgende Form:

```
SELECT * FROM [MyTable$]
```

Anschließend kann noch ein Ladeintervall vergeben werden und die Daten über Daten laden geladen werden. Zum Abschluss wird alles mit OK bestätigt.

Das Excel-File ist nun über die ODBC-Schnittstelle verbunden und kann wie jede andere Datenquelle weiterverwendet werden.

Wie mit dieser Verbindung Daten nach Excel geschrieben werden können, findet sich [hier](/scripting/Samples/12-de-excel.html).
