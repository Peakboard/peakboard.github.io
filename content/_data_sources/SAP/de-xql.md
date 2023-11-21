---
layout: article
title: SAP mit XQL
menu_title: XQL
description: Information über die Nutzung von XQL
lang: de
weight: 2420
ref: dat-sap-2420
redirect_from:
  - /data_sources/SAP/20-de-xql.html
---

Die Definition des SAP-Zugriffs erfolgt über XQL.
XQL ist eine einfache Beschreibungssprache.
Im folgenden wird erklärt, wie du über XQL in SAP auf RFC-Funktionbsbausteine, Reports, Tabellen, Cubes und Queries zugreifen kannst.
Um die Sache nicht zu kompliziert zu machen, enthält diese Seite möglichst viele Beispiele und weniger eine formale Beschreibung von XQL.

## Tabellen-Zugriff

```SQL
XtractQL
   := (SelectCommand | ExecuteCommand | DescribeCommand) 
  
SelectCommand
   := "SELECT" [SelectResult] SelectFieldList "FROM" (SelectQuery | SelectQueryBW 
        | SelectTable)
  
SelectResult      
   := "TOP" Integer ["SKIP" Integer]
  
SelectFieldList
   := "*" | (SelectField {"," SelectField})
  
SelectField
   := (Identifier | String | StringPassThrough) ["AS" (Identifier | String |
        StringPassThrough)]
  
SelectQuery
   := "QUERY" String [Into] ["WHERE" SelectQueryCriteria {"," 
        SelectQueryCriteria}] ["USING" String]
  
SelectQueryBW
   := "BWQUERY" String [Into] ["WHERE" SelectQueryCriteria {"," SelectQueryCriteria}]
  
SelectQueryCriteria
   := Identifier (("EQ" | "NE" | GT" | "LT" | "GE" | "LE" | "MP") (String | Variable) | ("IN" "(" SelectQueryCriteriaRange {[","] SelectQueryCriteriaRange} ")") | ("BT" (String | Variable) "AND" (String | Variable)))
  
SelectQueryCriteriaRange
   := "(" (("I" | "INCLUDE") | ("E" | "EXCLUDE")) "," (("EQ" | "NE" | GT" | "LT" | "GE" | "LE") | "LIKE") "," (String | Variable) ["," (String | Variable)] ")"
  
SelectTable
   := ["TABLE"] (String | Identifier) [Into] ["WHERE" SelectTableWhereExpression]) [WithOptions{CUSTOMFUNCTIONNAME}]
  
SelectTableWhereExpression
   := SelectTableWhereTerm {("AND" | "OR") SelectTableWhereTerm}
     
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
  
ExecuteCommand
   := "EXECUTE" (ExecuteMDX | ExecuteFunction)
  
ExecuteMDX
   := "MDX" StringPassThrough [Into]
  
ExecuteFunction
   := "FUNCTION" String [(Imports | Exports | Tables) {(Imports | Exports | Tables)}]
  
Imports
   := ("IMPORTS" | "IMPORTING") ImportsParameter {"," ImportsParameter}
     
ImportsParameter
   := Variable "=" Identifier
  
Exports
   := ("EXPORTS" | "EXPORTING") ExportsParameter {"," ExportsParameter}
     
ExportsParameter
   := Identifier "=" (String | Integer | Number | Variable)
  
Tables
   := "TABLES" TablesParameter {"," TablesParameter}
  
TablesParameter
   := Identifier ["=" (Variable | Table)] [Into]
  
Table
   := "(" TableMaps [","] TableValues {[","] TableValues} ")"
  
TableMaps
   := "(" Identifier {"," Identifier} ")"
     
TableValues
   := "(" String {"," String} ")"
  
DescribeCommand
   := "DESCRIBE" (DescribeTable | DescribeQuery | DescribeQueryBW | DescribeFunction | DescribeStructure) [Into]
  
DescribeTable
   := "TABLE" ((String ["GET" "FIELDS"]) | DescribeTableCatalog)
  
DescribeTableCatalog
   := "CATALOG" "WHERE" "TABLENAME" ("EQ" | "LIKE") String
  
DescribeQuery
   := "QUERY" (DescribeQueryGet | DescribeQueryCatalog | DescribeQueryUserGroup) 
  
DescribeQueryGet
   := String "GET" ("FIELDS" | "VARIANTS" | "SELECTION-PARAMETERS")
     
DescribeQueryCatalog
   := "CATALOG" "WHERE" DescribeQueryCatalogParameter {","  DescribeQueryCatalogParameter}
  
DescribeQueryCatalogParameter
   := DescribeQueryWorkspace | ("USERGROUP" ("EQ" | "LIKE") String) | ("QUERYNAME" ("EQ" | "LIKE") String)
  
DescribeQueryUserGroup
   := "USERGROUP" "WHERE" DescribeQueryWorkspace
  
DescribeQueryWorkspace
   := "WORKSPACE" "EQ" String{G,S,GLOBAL,STANDARD}
  
DescribeQueryBW
   := "BWQUERY" (DescribeQueryBWGet | DescribeQueryBWCatalog) 
  
DescribeQueryBWCatalog
   := "CATALOG" "WHERE" "CUBENAME" ("EQ" | "LIKE") String
     
DescribeQueryBWGet
   := String "GET" ("MEASURES" | "VARIABLES" | "DIMENSIONS" | ("DIMENSIONS-PROPERTIES" ["OF"] String))
  
DescribeFunction
   := "FUNCTION" (DescribeFunctionCatalog | (String "GET" ("EXPORTS" | "IMPORTS" | DescribeFunctionTables)))
  
DescribeFunctionCatalog
   := "CATALOG" "WHERE" "FUNCTIONNAME" ("EQ" | "LIKE") String
  
DescribeFunctionTables
   := "TABLES" | (("TABLES-STRUCTURE" | "TABLES-DATATABLE") ["OF"] String)
  
DescribeStructure
   := "STRUCTURE" String
  
Into
   := "INTO" Variable
  
WithOptions
   := ("WITH" | "WITH-OPTIONS") "(" Settings ")"
        
Settings
   :=  Identifier "=" String {"," Identifier "=" String}
  
Tokens
------
  
Variable
   := "@" , Identifier
  
Identifier
    := (Letter | "_") , {Letter | Digit | "_" | "-" | "$"}
      
String
    := ("'" , {ANY-CHARACTER-EXCEPT-QUOTE | "''"} , "'") | (""" , {ANY-CHARACTER-EXCEPT-QUOTE | """"} , """)
     
StringPassThrough
    := ("[" , {ANY-CHARACTER-EXCEPT-QUOTE | "]]"} , "]") | ("|" , {ANY-CHARACTER-EXCEPT-QUOTE | "||"} , "|")
Number
   := ["-" | "+"] , DigitSequence , ["." , DigitSequence]
Integer
   := DigitSequence
DigitSequence
    := Digit , {Digit}
Digit               
    := "0-9"
Letter
    := "A-Za-z"
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
