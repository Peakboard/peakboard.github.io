---
layout: article
title: Das Fenster der Peakboard Runtime per Skript steuern
menu_title: Runtime-Fenster
description: Die Peakboard Runtime per Building Block oder Lua auf Vollbild oder Fenstermodus umschalten, minimieren oder in den Vordergrund holen.
lang: de
weight: 909
ref: scr-909
---

Eine Anwendung gehört nicht immer der ganze Bildschirm. Am Arbeitsplatz läuft die Peakboard Runtime oft neben einem ERP-Client oder einem Browser, und der Bediener muss von einem zum anderen kommen. Vier Funktionen erlauben es deiner Anwendung, das selbst zu tun: Sie kann ins Vollbild gehen, in den Fenstermodus zurückkehren, zur Seite treten oder sich zurückmelden.

### Die Funktionen

| Building Block | Lua | Wirkung |
|---|---|---|
| [Vollbild] | `runtime.switchtofullscreen()` | Wechselt vom Fenstermodus in den Vollbildmodus |
| [Fenstermodus] | `runtime.switchtowindow()` | Wechselt vom Vollbildmodus zum Fenstermodus |
| [Minimieren] | `runtime.minimize()` | Minimiert das Peakboard Runtime Fenster |
| [In den Vordergrund] | `runtime.bringtofront()` | Holt das Peakboard Runtime Fenster in den Vordergrund |

In den Building Blocks findest du sie unter **Visualization** in der Gruppe **Runtime**, neben den übrigen Funktionen der Peakboard Runtime.

### Beispiel: ein Button, der zur Seite tritt

Lege einen Button auf deinen Screen und öffne sein Skript zum Ereignis [Tapped]. Nimm den Building Block [Minimieren] - der Bediener legt die Anwendung damit mit einem Tipp zur Seite und arbeitet in einem anderen Programm weiter.

Damit sie zurückkommt, kombinierst du das mit einem Timer-Skript, das [In den Vordergrund] aufruft, zum Beispiel wenn ein neuer Auftrag eintrifft. So meldet sich die Anwendung genau dann, wenn sie etwas zu sagen hat.

```lua
-- Button, Ereignis Tapped: zur Seite treten
runtime.minimize()
```

```lua
-- Timer-Skript: zurückkommen, wenn es darauf ankommt
runtime.bringtofront()
```

<div class="box-tip" markdown="1">
**Hinweis:**

`runtime.minimize()` bleibt auf einer Peakboard Box bewusst wirkungslos. Eine Peakboard Box zeigt genau eine Anwendung auf einem Wandbildschirm; ein minimiertes Fenster ließe dort einen leeren Desktop zurück, den vor Ort niemand wiederherstellen kann. Der Aufruf wird in diesem Fall als Warnung protokolliert, die Anwendung läuft weiter. Vollbild, Fenstermodus und In den Vordergrund funktionieren überall.
</div>
