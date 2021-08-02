---
layout: article
title: Oracle
menu_title: Oracle
description: Oracle Datenquelle in Peakboard
lang: de
weight: 1300
ref: dat-1300

---
Das folgende Tutorial beschreibt, wie Sie externe Datenquellen konfigurieren und an Peakboard-Elemente koppeln können:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)

Für den Zugang zur Oracle-Datenbank sind die klassischen Zugangsparameter nötig: 

*    **Hostname / IP** – Die Adresse des Oracle-Server (entweder als Name oder als IP-Adresse) 
*    **Port** ist der Netzwekport, unter dem der Oracle erreichbar ist
*    **SID** ist die Oracle-System-ID
*    **User Name** und **Passwort** sind die Credentials für den Zugriff


In manchen Fällen sind außer den oben beschriebenen Zugangsparametern weitere Angaben erforderlich. 
In diesem Fall klicken Sie bitte auf den **Custom**-Tab. 
In dem Textfeld lässt sich direkt ein individueller Connection-String erfassen. Den Aufbau des Connection-Strings entnehmen Sie bitte der Oracle-Hilfe.

In das Textfeld **Statement** tragen Sie das gewünschte Oracle-SQL-Statement ein. Damit die Datenquelle korrekt funktioniert, muss das SQL-Statement immer eine tabellarische Ergebnismenge zurückliefern.

![Oracle Data Surce Dialog](/assets/images/data-sources/oracle/add-oracle-data.png)

Klicken Sie final auf Load Data. Die Daten werden dann gemäß den Angaben aus der Oracle-Datenbank geladen und im Preview-Fenster angezeigt. Ab jetzt kann die Quelle verwendet werden. Bitte beachten Sie, dass die Oracle-Datentypen allesamt in die drei allgemeinen Peakboard-Datentypen String, Number und Boolean umgesetzt werden.

