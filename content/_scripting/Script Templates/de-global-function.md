---
layout: article
title: Globale Funktionen
menu_title: Globale Funktionen
description: Globale Funktionen
lang: de
weight: 165
ref: scr-165
redirect_from:
---

Mit globalen Funktionen bietet Peakboard die Möglichkeit, spezifische Prozeduren zu definieren, die während der Laufzeit aufgerufen werden können. Ein Hauptvorteil dieser Funktionen ist, dass sie durch verschiedene Ereignisse (Events) ausgelöst werden können. Zudem können globale Funktionen Parameter entgegennehmen, wenn dies erforderlich ist.

Um eine globale Funktion zu erstellen, navigiere zu Skripte > Funktionen > Hinzufügen.

![Global_Function](/assets/images/scripting/Scripting_Beispiele/global-functions/en-global-function.gif)


### Wer die Funktion aufgerufen hat

Wird eine globale Funktion aus dem Peakboard Hub heraus ausgelöst, kann das Skript ermitteln, welcher Hub-Benutzer sie aufgerufen hat. Nutze dafür den Building Block **[Get Hub user email]** – er liefert die E-Mail-Adresse des aufrufenden Peakboard Hub-Benutzers zurück.

Genau das macht eine globale Funktion nachvollziehbar: Du kannst den Aufrufer in einen Log-Eintrag oder eine Peakboard Hub Liste schreiben, sodass eine Buchung oder eine Freigabe einer Person zuzuordnen ist, statt anonym zu bleiben.

Zwei Einschränkungen solltest du kennen:

* Rufe den Block **direkt im Rumpf der Funktion** auf. Aus einem verzögerten Callback heraus ist der Aufrufer nicht mehr bekannt.
* Wurde die Funktion nicht aus dem Peakboard Hub aufgerufen – etwa durch einen Timer oder einen Button auf der Peakboard Box – ist das Ergebnis leer.
