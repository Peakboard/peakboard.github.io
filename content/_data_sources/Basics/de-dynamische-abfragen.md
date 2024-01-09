---
layout: article
title: Dynamische Abfragen
menu_title: Dynamische Abfragen
description: Dynamische Abfragen
lang: de
weight: 30
ref: dat-30
redirect_from:
 - /scripting/07-de-dynamische-abfragen.html
 - /misc/de-dynamische-abfragen.html
---

In einer sich ständig verändernden Datenlandschaft ist es unerlässlich, Abfragen dynamisch zu gestalten, um sie an verschiedene Benutzerkontexte anzupassen. Dies ist besonders relevant, wenn Endanwender durch interaktive Elemente wie Textfelder oder Schieberegler in die Datenabfrage eingreifen sollen. Dieser Artikel zeigt dir eine beispielhafte Vorgehensweise wie du eine solche dynamische Abfrage gestalten kannst. Für das Beispiel benötigst du eine SQL-Datenquelle.

## Beispiel: Per Schieberegler dynamisch die angezeigte Zeilenzahl festlegen

Im folgenden Beispiel kann der Werker mit einem Schieberegler festlegen, wie viele Zeilen der abgefragten Datenquelle in der Anwendung angezeigt werden sollen. Alternativ zu einem Schieberegler könnte aber je nach Anwendungsfall auch ein Eingabefeld für ein Datum oder eine andere Variable Grundlage für die dynamische Abfrage sein.

### Variable und Schieberegler anlegen

Füge mit einem Rechtsklick auf [Variablen] und [Variable hinzufügen] (1) eine Variable vom Typ Number hinzu. Gib der Variable einen Namen. Die Variable wird im XQL-Statement in der Datenquelle genutzt, um die dynamische Abfrage zu ermöglichen.

![Variable hinzufügen](/assets/images/data-sources/dynamic/de_dynamic-01.png)

Ziehe dann per Drag-and-drop ein Schieberegler-Control (1) auf die Arbeitsfläche und gestalte die Attribute nach deinen Vorstellungen.
Damit die Variable mit dem Wert des Schiebereglers befüllt wird, aktivierst du im Bereich [Logik] die Checkbox [In Skripten verwendet] (2) und gibst dem Schieberegler einen Namen (3).

![Schieberegler hinzufügen](/assets/images/data-sources/dynamic/de_dynamic-02.png)

### Datenquelle mit SQL-Statement anlegen

Als Datenquelle legst du per Rechtsklick auf [Daten], [Datenquelle hinzufügen] und [SQL Server] (1) eine SQL Datenquelle an.

![Datenquelle hinzufügen](/assets/images/data-sources/dynamic/de_dynamic-03.png)

Gib der Datenquelle einen Namen (1), gib die Daten der Verbindung ein (2) und füge dann das folgende XQL-Statement im Bereich [Befehl] (3) ein:

`SELECT TOP #[RowCount]# * FROM Orders;`

Klicke auf [Daten laden] (4) und bestätige die Erstellung der Datenquelle mit [OK] (5).

![Datenquelle konfigurieren](/assets/images/data-sources/dynamic/de_dynamic-04.png)

Das Statement wählt die angegebenen Zeilen der Tabelle [Orders] aus. Du musst [Orders] also durch den Namen deiner Tabelle ersetzen.
Das Statement enthält außerdem einen Platzhalter, der sich den Wert aus der Variable zieht, die du im letzten Schritt angelegt hast. Der Platzhalter funktioniert nach dem Prinzip `#[MeineVariable]#`.
Du kannst an dieser Stelle natürlich auch ein anderes Statement nutzen, das die Variable enthält und besser zu deinem Anwendungsfall passt.

Ziehe die Datenquelle per Drag-and-drop auf den Arbeitsbereich und wähle [Tabelle], um die Daten auf der Arbeitsfläche anzuzeigen.

### Wertänderung Event Skript des Schiebereglers anlegen

Öffne den Skript-Editor für das [Wertänderung Event] (1), um das Skript einzugeben.

![Wertänderung Event](/assets/images/data-sources/dynamic/de_dynamic-05.png)

Das Skript setzt die Variable auf den Wert des Schiebereglers (1) und lädt dann die Datenquelle neu (2).

```lua
data.RowCount = screens['Screen1'].Slider.value
data.Peakboard_Test.reload()
```

[RowCount] ist dabei der Name der Variable, die du angelegt hast, [Slider] der Name des Schiebereglers und [Peakboard_Test] der Name der Datenquelle.

![Schieberegler Skript](/assets/images/data-sources/dynamic/de_dynamic-06.png)

### Die Anwendung in der Vorschau testen

Mit einem Klick auf [Vorschau] startest du diese. Bewege jetzt den Schieberegler, um die Änderung der angezeigten Zeilen live zu verfolgen.

![Vorschau](/assets/images/data-sources/dynamic/de_dynamic-07.gif)
