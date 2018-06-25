---
layout: article
title: SAP with XQL
menu_title: XQL
description:  Information about the use of XQL
lang: en
ref: dat-sap-20
---
If SAP access is not built via gateway but via "Direct RFC", SAP access is defined via XQL. XQL is a simple description language. The following explains how you can use XQL in SAP to access RFC function modules, reports, tables, cubes, and queries. In order not to make things too complicated, this page contains as many examples as possible and less a formal description of XQL.

## Table Access

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

### Examples

Retrieve all columns of table MAKT, but no more than 10 rows:

```
SELECT TOP 10 * FROM MAKT;
```

Retrieve only certain columns of table MAKT (maximum 10 rows):

```
SELECT TOP 10 MATNR, MAKTX FROM MAKT
```

`var example = true`
