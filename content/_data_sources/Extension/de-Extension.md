---
layout: article
title: Extension Basics
menu_title: Extension Basics
description: Grundlagen für das Extension Kit
lang: de
weight: 2600
ref: dat-2600
redirect_from:
---

## Die Idee hinter dem Extensions Kit
Peakboard bietet umfangreiche Möglichkeiten mit allen möglichen Datenquelle zu verbinden. Es könnte aber trotzdem sein, dass im einen oder anderen Fall die Anbindung an die gewünschte Quelle nicht möglich oder nur mit unangenehm großem Scripting-Aufwand möglich ist. Aus diesem Grund bietet Peakboard das so genannte Extension-Kit. Dabei handelt es sich um eine Möglichkeit, eigene Datenquellen zu entwickeln. Das kann entweder vom Endkunden direkt genutzt werden, oder von Herstellern von proprietären Software-Lösungen, die wiederum ihren Kunden eine einfache Möglichkeit geben wollen, auf ihre Systeme zuzugreifen, obwohl der native Peakboard-Designer diese Datenquelle nicht unterstützt.

## Architektur
Basis für eine Extension ist immer ein C#-.NET-Projekt, das eine klassische .NET-Dll erzeugt. Alle zu implementierenden Schnittstellen befinden sich in der Dll Peakboard.ExtensionKit.Dll. Die einfachste Möglichkeit für das Referenzieren ist durch das Herunterladen des entsprechenden NuGet-Packages in Visual Studio, oder [hier](https://www.nuget.org/packages/Peakboard.ExtensionKit/)
Der Projekttyp in Visual Studio sollte "Classic Library" sein mit .NET Framework 4.6.2 oder höher.

> ## Hinweis!
>
> Es sei an dieser Stelle empfohlen, lieber eines der Beispiele als Vorlage zu nehmen und nach eigenem Wünschen zu modifizieren, als ein Projekt from Scratch aufzubauen.

Um die Extension dann tatsächlich zu nutzen muss ein zip-File erstellt werden. Diese zip-File wird an den User der Extension weitergegeben und muss folgende Dateien enthalten:
- kompilierte Dll, die den Extension-Code enthält
- Alle referenzierten Abhängigkeiten. Das gilt auch für Win32-Dlls, falls sie im Projekt verwendet werden
- Die Peakboard.ExtensionKit.dll darf NICHT in der zip-File sein
- Alle zusätzlichen Ressourcen wie Bilder u.Ä.
- Die Extension.xml-Datei, die die Extension beschreibt

## Klassenarchitektur
Um eine eine Extension zu bauen, sind mindestens zwei Klassen zu implementieren. Eine die von ExtensionBase erbt und eine, die von CustomListBase erbt. Die ExtensionBase-Klasse muss dann auch in der Extension.xml als Einstiegspunkt wiederauftauchen. 

## Die Extension.xml-Datei
Sie beschreibt die Metadaten der Extension. Dabei ist die eindeutige ID der Extension wichtig (einfach aussagekräftiger Name ohne Sonderzeichen), der Pfad (Path) ist der Name der Extension-Dll, und die Extension-Class im Projekt mit vorangestelltem Namespace. Kopieren Sie sich bitte einfach ein Extension.xml-Datei aus den Beispielen und modifizieren SIe sie entsprechend. Es macht keinen Sinn, das Xml von Hand zu schreiben. 

## Extensions im Peakboard-Designer verwalten
Um eine Extension in den Designer einzuspielen, gehen Sie in die Verwaltung für die Extensions und fügen Sie das zip-File hinzu. Danach muss der Designer neu gestartet werden, dann ist die Extension verfügbar und sollte unter den Datenquellen auftauchen. Achtung! Es ist nicht nötig, die Peakboard-Box in irgendeiner Form zu modifizieren. Die Extension wird durch den Deploy-Vorgang eines Boards automatisch mit auf die Box verteilt.

## Beispiele
Wir haben in unseren [Github-Repository](https://github.com/Peakboard/PeakboardExtensions) einige Extensions veröffentlicht. Es sind sowohl Beispiele darunter, als auch produktiv nutzbare Extensions. Speziell die Beispiele sind einfach gehalten und zeigen schön die anzuwendende Architektur. Jede Extension in diesem Repo liegt im Quellcode vor (Verzeichnis SourceCode) und als fertig vorbereitetes zip zum Einspielen (Binaries).
Das Github-Repository findet sich [hier](https://github.com/Peakboard/PeakboardExtensions).


