---
layout: article
title: Datum und Urzeit
menu_title: Datum und Urzeit
description: Informationen über Zeit- und Datumsangaben in Peakboard
lang: de
ref: dat-02
---

Die Peakboard-Box verfügt derzeit über keine Möglichkeit, sich über den nächsten Neustart hinaus die Uhrzeit zu merken. Aus diesem Grund gibt es innerhalb des Designers die Möglichkeit, Datum und Uhrzeit als ganz normale Datenquelle einzubinden. Die Datenquelle ist nicht tabellarisch, sondern nur ein skalarer Einzelwert.

Über die Format-Angabe wird definiert, wie die Zeit bzw. das Datum oder eine Kombination daraus dargestellt werden soll. Die einzelnen Formatkomponenten können Sie der Tabelle unten entnehmen. Für den Fall, dass eine andere Zeitzone als CET zur Zeitberechnung genutzt werden soll, steht die entsprechende Combo-Box zur Verfügung.

Standardmäßig greift die Time-Datenquelle auf den Windows-Timeserver im Internet zu (konkret auf time.windows.com). Sollte das nicht gewünscht sein oder Peakboard in einem Netz ohne Internetzugang betrieben werden, kann sich Peakboard die Zeit auch von einem netzinternen Timeserver holen. Diese Funktion muss über die Checkbox aktiviert werden und die IP-Adresse oder Host-Name des Timeservers muss in das entsprechende Textfeld geschrieben werden.

Um einen lokalen Windows-Rechner als Timeserver zu verwenden, muss ein Registry-Eintrag angepasst werden.
Dafür muss zunächst in der Registry im Ordner `HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\W32Time\TimeProviders\NtpServer\`  der Wert **[Enabled]** auf 1 (true) gesetzt werden

Anschließend muss das Command Fenster als Administrator ausgeführt und folgender Befehl eingegeben werden:
`w32tm /config /update`

 ![Add Time Dialog](/assets/images/data-sources/date-and-time/add-time-dialog.png)

Der folgende Screenshot zeigt, wie die Zeit auf dem Screen verwendet werden kann. Alternativ lässt sich die Datenquelle, wie jede andere Datenquelle auch, an Steuerelemente binden oder per Script nutzen.

 ![Place Time](/assets/images/data-sources/date-and-time/place-time.png)

Im Preview werden jetzt das aktuelle Datum und die Uhrzeit angezeigt.

![Preview Time](/assets/images/data-sources/date-and-time/preview-time.png)

Platzhalter für den Format-String:

```
HH: Stunde (00 – 24)
hh: Stunde (00 – 12)
mm: Minute
ss: Sekunde
dd: Tag
MM: Monat
yy: zweistelliges Jahr z.B. 89
yyyy: vierstelliges Jahr z.B. 1989
```
