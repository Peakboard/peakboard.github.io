---
layout: article
title: Excel über ODBC einbinden
menu_title: Excel über ODBC einbinden
description: Excel über ODBC einbinden
lang: de
weight: 1510
ref: dat-1510
redirect_from:
  - /data_sources/31-de-ODBC-Excel.html
---

Der folgende Screenshot zeigt den ODBC-Datenquellen Dialog.

> ## Hinweis
> Die ODBC Verbindung zu Excel ist nur mit installierten 64-Bit ODBC Treiber bzw. 64-Bit Microsoft Office Paket möglich!

![ODBC Anmeldemaske](/assets/images/data-sources/odbc-excel/odbc_form.png)

Soll es möglich sein Daten innerhalb der Excel zu verändern, so ist der Zusatz [ReadOnly = 0] im Connection-String notwendigt.

```
Driver={Microsoft Excel Driver (*.xls, *.xlsx, *.xlsm, *.xlsb)};DBQ=C:\MyExcel.xlsx;ReadOnly = 0;
```


Bevor die Daten geladen werden können muss noch ein passender Ladebefehl formuliert werden. Bei Excel erfolgt die Referenz auf das entsprechende Tabellenblatt über [MyTable$] und hat folgende an SQL angelehnte Form:

```
SELECT [Table Column 1], [Table Column 2] FROM [MyTable$]
```

Anschließend kann noch ein Ladeintervall vergeben werden und die Daten über Daten laden geladen werden. Zum Abschluss wird alles mit OK bestätigt.

Das Excel-File ist nun über die ODBC-Schnittstelle verbunden und kann wie jede andere Datenquelle weiterverwendet werden.

Wie mit dieser Verbindung Daten nach Excel geschrieben werden können, findet sich [hier](https://templates.peakboard.com/Script-Example-Writing-To-Excel/index).
