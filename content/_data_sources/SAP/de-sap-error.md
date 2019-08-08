---
layout: article
title: SAP Fehlermeldungen
menu_title: SAP Fehlermeldungen
description: SAP Fehlermeldungen
lang: de
weight: 20000
ref: dat-20000
---

## ERROR Dienst '?' unbekannt oder Dienst sapms unbekannt

Es kann sein, dass Sie bei der Verbindung zu SAP den folgenden Fehler erhalten:

```
FEHLER-Dienst '?' unbekannt
```


Das Problem ist, dass sapdp* (z.B. sapdp00 3200/tcp) Einträge in den Dateidiensten im Ordner C:\Windows\System32\drivers\etc\services fehlen.

Bitte fügen Sie die Einträge in der Datei services, die Sie am Ende dieses Artikels finden, Ihrer Servicedatei hinzu.

Wenn Sie die

```
ERROR Service sapms<SID> unbekannt
```

 
müssen Sie die folgende Zeile an die Datei services anhängen. nn ist die Instanznummer des SAP-Systems (z.B. 00 oder 99).

```
sapms<SID> 36<nn>/tcp
```

  
Wenn Ihre SID beispielsweise ECC ist, sieht die Zeile beispielsweise wie die folgende aus:

```
sapmsECC 3600/tcpp  
```


Für System ID (SID) ECC und Instanznummer 12 bitte einstellen:

```
sapmsECC 3612/tcpp
```

> ## WICHTIG!
>
> Beim Einfügen in diese Datei ist darauf zu achten, dass der letzte Eintrag immer mit einem Return abgeschlossen wird. Bei einigen Plattformen kann dies zu Problemen führen, da der letzte Eintrag möglicherweise nicht erkannt wird.

> ## WARNUNG!
>
>Die Servicedatei sollte keine Erweiterung erhalten. Der Name sollte services bleiben und nicht z.B. services.txt werden.

Nach der Bearbeitung der Datei müssen Sie möglicherweise den Peakboard Designer neu starten.

[SAP-Hinweis 52959](https://launchpad.support.sap.com/#/notes/52959)
