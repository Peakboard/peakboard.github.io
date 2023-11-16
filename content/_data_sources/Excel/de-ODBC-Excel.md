---
layout: article
title: Excel über ODBC einbinden
menu_title: Excel über ODBC einbinden
description: Excel über ODBC einbinden
lang: de
weight: 610
ref: dat-610
redirect_from:
  - /data_sources/31-de-ODBC-Excel.html
---

Der folgende Screenshot zeigt den ODBC-Datenquellen Dialog.

<div class="box-tip" markdown="1">
**Hinweis**
Die ODBC Verbindung zu Excel ist nur mit installierten 64-Bit ODBC Treiber bzw. 64-Bit Microsoft Office Paket möglich!
</div>

![ODBC Dialog](/assets/images/data-sources/odbc-excel/de_odbc-excel-01.png)

Gib der Datenquelle zuerst einen Namen (1).
Um dich per ODBC mit einer Exel-Datei zu verbinden musst du einen Connection-String (2) eingeben. Eine Übersicht findest du auf [connectionstrings.com](https://www.connectionstrings.com/excel/).

Möchtest du Daten innerhalb der Excel verändern können, so ist der Zusatz [ReadOnly = 0] im Connection-String notwendig.

```
Driver={Microsoft Excel Driver (*.xls, *.xlsx, *.xlsm, *.xlsb)};DBQ=C:\MyExcel.xlsx;ReadOnly = 0;
```

Bevor du die Daten laden kannst muss du noch einen passenden Ladebefehl (3)formulieren. Bei Excel erfolgt die Referenz auf das entsprechende Tabellenblatt über [MyTable$] und hat folgende an SQL angelehnte Form:

```sql
SELECT [Table Column 1], [Table Column 2] FROM [MyTable$]
```

Anschließend kannst du noch ein Nachladeintervall (4) vergeben und die Daten über [Daten laden] (5) als Vorschau anzeigen.

Das Excel-File ist nun über die ODBC-Schnittstelle verbunden und kann wie jede andere Datenquelle weiterverwendet werden.
