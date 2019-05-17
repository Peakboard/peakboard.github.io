---
layout: article
title: SAP mit XQL
menu_title: XQL
description: Information über die Nutzung von XQL
lang: de
weight: 2000
ref: dat-sap-2000
---
Wenn der SAP-Zugriff nicht über Gateway, sondern über "Direct RFC" gebaut wird, erfolgt die Definition des SAP-Zugriffs über XQL. XQL ist eine einfache Beschreibungssprache. Im folgenden wird erklärt, wie Sie über XQL in SAP auf RFC-Funktionbsbausteine, Reports, Tabellen, Cubes und Queries zugreifen können. Um die Sache nicht zu kompliziert zu machen, enthält diese Seite möglichst viele Beispiele und weniger eine formale Beschreibung von XQL.

## Tabellen-Zugriff

```
SelectCommand
   := "SELECT" ["TOP" Integer] SelectFieldList "FROM" (SelectTable)

SelectFieldList
   := "*" | (SelectField {"," SelectField})

SelectField
   := (Identifier | String | StringPassThrough) ["AS" (Identifier | String | StringPassThrough)]

SelectTable
   := ["TABLE"] (String | Identifier) [SelectTableWhereExpression])

SelectTableWhereExpression
   := "WHERE" SelectTableWhereTerm {("AND" | "OR") SelectTableWhereTerm}

SelectTableWhereTerm
   := SelectTableWhereFactor | ("(" SelectTableWhereExpression ")")

SelectTableWhereFactor
   := Identifier (SelectTableWhereFactorOperator | SelectTableWhereFactorNull | (["NOT"] (SelectTableWhereFactorLike | SelectTableWhereFactorBetween | SelectTableWhereFactorIn)))

SelectTableWhereFactorOperator
   := ("EQ" | "NE" | "LT" | "GT" | "LE" | "GE") SelectTableWhereFactorValue

SelectTableWhereFactorNull  
   := "IS" ["NOT"] "NULL"

SelectTableWhereFactorLike
   := "LIKE" (String  | Variable)

SelectTableWhereFactorBetween
   := "BETWEEN" SelectTableWhereFactorValue "AND" SelectTableWhereFactorValue

SelectTableWhereFactorIn
   := "IN" "(" String {"," String} ")"

SelectTableWhereFactorValue
   := String | Integer | Number | Variable | Identifier
```

### Beispiele

Alle Spalten der Tabelle MAKT abrufen, aber maximal 10 Zeilen:

```
SELECT TOP 10 * FROM MAKT;
```

nur bestimmte Spalten der Tabelle MAKT abrufen (maximal 10 Zeilen):

```
SELECT TOP 10 MATNR, MAKTX FROM MAKT
```

`var example = true`
