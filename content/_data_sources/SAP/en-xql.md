---
layout: article
title: SAP with XQL
menu_title: XQL
description: XQL is the query language Peakboard uses to access SAP tables, ABAP reports, function modules, queries and BW cubes.
lang: en
weight: 2420
ref: dat-sap-2420
redirect_from:
  - /data_sources/SAP/20-en-xql.html
---

Every access from the SAP data source to an SAP system is expressed in **XQL** (XtractQL).
XQL is a compact, SQL-like description language. A single statement is enough to read a table, run an ABAP report, call an RFC function module, execute a SAP Query or query a BW cube via MDX.

This page explains the language by example. The complete formal grammar is at the end of the page.

## Where you enter XQL

The statement is stored in the SAP data source dialog in the [XQL statement] section. How to create the data source itself is described in the [SAP](/data_sources/SAP/en-sap.html) article.

Use the [Template] button to insert a ready-made sample statement (1) — that is the fastest way to get started. You write the statement itself in the editor with syntax highlighting (2). [Load data] generates a preview of the data (3), and [OK] creates the data source (4).

![XQL statement in the SAP dialog](/assets/images/data-sources/sap/xql/xql-01-editor.png)

The [Template] button offers 19 templates covering all common access types. Select an entry and confirm with [OK] — this replaces the entire content of the editor.

![Templates for XQL statements](/assets/images/data-sources/sap/xql/xql-02-templates.png)

For longer statements, open the editor in a separate window using the enlarge icon.

![Enlarged XQL editor](/assets/images/data-sources/sap/xql/xql-03-enlarged.png)

## Basic rules

Before we get to the individual access types, a few rules that apply to all statements:

* **Keywords are not case-sensitive.** `SELECT`, `select` and `Select` are equivalent. This documentation uses uppercase for readability.
* **Multiple statements** are separated by `;`. The semicolon may be omitted on the last statement.
* **Strings** are enclosed in single or double quotes (`'MAKT'` or `"MAKT"`) and must end on the same line. To include a quote in the text, double it (`'Peter''s'`).
* **Pass-through strings** are enclosed in `[...]` or `|...|` and may span several lines. They are handed to SAP unchanged and are used for MDX.
* **Comments** are written as `// to end of line` or as `/* block */`.
* **Synonyms:** `WITH` = `WITH-OPTIONS`, `EXPORTS` = `EXPORTING`, `IMPORTS` = `IMPORTING`, `LIKE` = `MP`, `BETWEEN` = `BT`, `I` = `INCLUDE`, `E` = `EXCLUDE`. Instead of `EQ`, `NE`, `LT`, `GT`, `LE`, `GE` you can also write `=`, `!=` or `<>`, `<`, `>`, `<=`, `>=`.

## Table access

The simplest case: you read an SAP table like a database table.

```sql
SELECT TOP 10 * FROM MAKT;
```

`TOP` limits the number of rows, `SKIP` skips rows at the beginning. Both values must be at least 1.

Instead of `*` you can provide a column list — optionally with `AS` and an alias:

```sql
SELECT TOP 10 MATNR, MAKTX FROM MAKT
```

```sql
SELECT TOP 10 MATNR AS MaterialNumber, MAKTX AS Description FROM MAKT
```

### WHERE clause for table access

For table access you get a full boolean expression: conditions can be combined with `AND` and `OR` and grouped with parentheses.

```sql
SELECT TOP 10 * FROM MAKT WHERE MATNR = '100-100'
```

```sql
SELECT * FROM MARA WHERE (MTART EQ 'FERT' OR MTART EQ 'HALB') AND MEINS EQ 'ST'
```

The following operators are allowed:

| Operator | Meaning | Example |
| --- | --- | --- |
| `EQ` `NE` `LT` `GT` `LE` `GE` | Comparison | `WHERE MTART EQ 'FERT'` |
| `LIKE` (= `MP`) | Pattern match | `WHERE MATNR LIKE '100-4%'` |
| `BETWEEN` (= `BT`) | Value range | `WHERE ERSDA BETWEEN '20240101' AND '20241231'` |
| `IN` | Value list (strings only) | `WHERE MTART IN ('FERT', 'HALB')` |
| `IS NULL` | Null check | `WHERE MAKTX IS NOT NULL` |

`LIKE`, `BETWEEN` and `IN` can be negated with `NOT`, for example `WHERE MTART NOT IN ('FERT', 'HALB')`.

Strings, numbers and variables (`@variable`) are allowed as comparison values. The only permitted identifier is the SAP system field `SY-DATUM`; any other bare identifier causes an error.

### Tables with many columns

The standard SAP read module has a width limit. For very wide tables, switch to a custom function module using `WITH-OPTIONS`:

```sql
SELECT * FROM MARA WITH-OPTIONS(CUSTOMFUNCTIONNAME = 'Z_XTRACT_IS_TABLE')
```

Details on setting up this module are described in the [SAP extraction limits](/data_sources/SAP/en-sap-extraction-limit.html) article.

## Running ABAP reports

`EXECUTE REPORT` starts an ABAP program and reads its list output as a table.

The order of the clauses is fixed: first `INTO`, then `WHERE`, then `USING`, and finally `WITH-OPTIONS`.

The simplest call uses a variant stored in SAP:

```sql
EXECUTE REPORT 'RLT10010' USING 'VAR01'
```

You can also set selection parameters directly in the statement:

```sql
EXECUTE REPORT 'RLT10010' WHERE T1_LGNUM EQ '001'
```

For selections with a sign and an option, use the complex form. Each range has the structure `(sign, option, from [, to])`:

```sql
EXECUTE REPORT 'RLT10010' WHERE T1_LGNUM IN ((I,EQ,'001'))
```

```sql
EXECUTE REPORT 'RLT10010' WHERE T1_LGNUM IN ((I,EQ,'001'), (E,LIKE,'9*'), (I,BT,'A','C'))
```

Allowed signs are `I`/`INCLUDE` and `E`/`EXCLUDE`; allowed options are `EQ`, `NE`, `GT`, `LT`, `GE`, `LE`, `BT` and `MP`/`LIKE`.

<div class="box-tip" markdown="1">**Note**

If the from-value of an `EQ` option contains an asterisk (`*`), Peakboard automatically converts the option to `CP` (contains pattern). So `WHERE MATNR EQ '100-4*'` acts as a pattern match.
</div>

### Options for reports

```sql
EXECUTE REPORT 'RQMELL10' USING 'OFFEN'
WITH-OPTIONS (CustomFunction = 'Z_XTRACT_IS_REMOTE_REPORT_NEU');
```

```sql
EXECUTE REPORT 'RQMELL10' USING 'OFFEN'
WITH-OPTIONS (SkipTopRows = '20', UseBatch = 'true');
```

| Option | Meaning | Default |
| --- | --- | --- |
| `CustomFunction` (= `CustomFunctionName`) | Name of the RFC module that runs the report | `Z_XTRACT_IS_REMOTE_REPORT` |
| `SkipTopRows` | Number of lines skipped at the top of the list output | `0` |
| `UseBatch` | `'true'` runs the report as a background job and then reads the spool list | `'false'` |

The background job runs under the name `Xtract` on destination `LOCL` and times out after 300 seconds.

## Calling function modules (RFC)

`EXECUTE FUNCTION` calls an RFC-enabled function module. Parameters are passed in up to four sections, each of which may appear at most once:

| Section | Direction |
| --- | --- |
| `EXPORTS` (= `EXPORTING`) | Values Peakboard passes **to** SAP |
| `IMPORTS` (= `IMPORTING`) | Values Peakboard reads back **from** SAP |
| `TABLES` | Table parameters, in both directions |
| `CHANGING` | Changeable parameters |

Within a section, parameters are separated by commas.

```sql
EXECUTE FUNCTION 'SD_RFC_CUSTOMER_GET'
   EXPORTS
      NAME1 = 'Th*'
   TABLES
      CUSTOMER_T INTO @RETVAL
```

### Scalar return values

Use `IMPORTS` to read back individual fields. Each field gets its own target name following the pattern `@RETVAL$columnname` — the values end up together in a single-row table in which each `$` suffix becomes a column:

```sql
EXECUTE FUNCTION 'GET_SYSTEM_TIME_REMOTE'
   IMPORTS L_TIME INTO @RETVAL$local,
   K_TIME INTO @RETVAL$kernel,
   L_DATE INTO @RETVAL$date
```

The result is a table with one row and the three columns `local`, `kernel` and `date`.

### Structure fields

Address a single field of a structure with `structure-field`:

```sql
EXECUTE FUNCTION 'Z_SD_RFC_CUSTOMER_GET'
   EXPORTS
      KUN_STR-NAME1 = 'Th*',
      KUN_STR-KUNNR = '*80'
   TABLES
      CUSTOMER_T INTO @RETVAL
```

<div class="box-tip" markdown="1">**Note**

Exactly **one** level is possible. `STRUCTURE-FIELD` works, `STRUCTURE-SUBSTRUCTURE-FIELD` is rejected. Structure fields are not allowed at all in the `TABLES` section.
</div>

### Tables as a parameter value

Table-valued parameters are written directly into the statement. The first pair of parentheses is the **column list**, every following one is a **data row**:

```sql
EXECUTE FUNCTION 'BAPI_USER_GETLIST'
   TABLES
      SELECTION_RANGE = ((PARAMETER, FIELD, SIGN, OPTION, LOW, HIGH),
         ('LOGONDATA', 'USTYP', 'I', 'EQ', 'A', ''),
         ('USERNAME','', 'I', 'BT', 'A', 'C')),
      USERLIST INTO @RETVAL
```

All values must be written as strings — including numbers, so `'1'` instead of `1`. The commas between rows are optional.

The same notation also works in the `EXPORTS` section:

```sql
EXECUTE FUNCTION 'Z_PB_NESTED01'
   EXPORTS
      MAT01 = '4711',
      QUANTAB = ((MATNR, LFIMG),
         ('HELLO', '1'),
         ('WORLD', '2'))
   IMPORTS
      QUANTAB_OUT INTO @RETVAL
```

A table may also sit inside a structure:

```sql
EXECUTE FUNCTION 'Z_PB_NESTED01'
   EXPORTS
      MAT01 = '4711',
      DEEPSTR-TAB1 = ((MATNR, LFIMG),
         ('HELLO', '1'),
         ('WORLD', '2')),
      DEEPSTR-TAB2 = ((MATNR, LFIMG),
         ('NONO', '0')),
      DEEPSTR-VBELN = '0123456'
   IMPORTS
      DEEPSTR_OUT-TAB1 INTO @RETVAL
```

## SAP Queries

You address a SAP Query via `SELECT ... FROM QUERY`. The query name consists of workspace, user group and query name, separated by `|`: `'G|/SAPQUERY/ME/|MEBESTWERTAN'` (`G` = global, `S` = standard).

```sql
SELECT * FROM QUERY 'G|/SAPQUERY/ME/|MEBESTWERTAN' USING 'PLANT1000'
```

Instead of a variant you can specify the select options directly. Criteria are separated by comma or `AND` — there is no `OR` and no grouping with parentheses here, and each field may appear only once:

```sql
SELECT TOP 20 * FROM QUERY 'G|/SAPQUERY/ME/|MEBESTWERTAN'
   WHERE
S_WAERS EQ 'EUR', S_MATNR MP '100-4*'
```

Allowed are `EQ`, `NE`, `GT`, `LT`, `GE`, `LE` and `MP`, plus `BT 'from' AND 'to'` and the complex `IN ((...))` form from the report section.

`SKIP` is not supported for query access.

## BW cubes and MDX

There are two ways to access BW cubes.

`EXECUTE MDX` passes an MDX statement through unchanged. So that the square brackets of MDX do not collide with the pass-through brackets, enclose the statement in `|`:

```sql
EXECUTE MDX |SELECT {[Measures].[0D_COST]} ON COLUMNS , NON EMPTY [0D_CO_CODE].[LEVEL01].MEMBERS ON ROWS FROM [$0D_DECU] |;
```

Alternatively, access a BW query with `SELECT ... FROM BWQUERY` and pass the variables as criteria:

```sql
SELECT * FROM BWQUERY '0D_DECU/VARDEMO01' WHERE SALESORG IN ((I,BT,'1000','4000'))
```

`TOP` and `SKIP` are not supported for BWQUERY access.

## Discovering metadata with DESCRIBE

`DESCRIBE` returns no payload data, but structural information. This is handy for finding out in the preview how a table or a function module is built in the first place.

```sql
DESCRIBE TABLE 'MAKT' GET FIELDS
```

```sql
DESCRIBE TABLE CATALOG WHERE TABLENAME LIKE 'MAK%'
```

```sql
DESCRIBE FUNCTION 'BAPI_USER_GETLIST' GET TABLES
```

```sql
DESCRIBE REPORT 'RLT10010' GET SELECTION-PARAMETERS
```

Available variants:

| Statement | Result |
| --- | --- |
| `DESCRIBE TABLE '<t>' [GET FIELDS]` | Field list of a table |
| `DESCRIBE TABLE CATALOG WHERE TABLENAME (EQ\|LIKE) '<x>'` | List of tables |
| `DESCRIBE FUNCTION '<f>' GET (IMPORTS\|EXPORTS\|TABLES)` | Parameters of a function module |
| `DESCRIBE FUNCTION CATALOG WHERE FUNCTIONNAME (EQ\|LIKE) '<x>'` | List of function modules |
| `DESCRIBE STRUCTURE '<s>'` | Layout of a structure |
| `DESCRIBE QUERY '<q>' GET (FIELDS\|VARIANTS\|SELECTION-PARAMETERS)` | Details of a query |
| `DESCRIBE QUERY CATALOG WHERE ...` | List of queries |
| `DESCRIBE BWQUERY '<c>' GET (MEASURES\|VARIABLES\|DIMENSIONS)` | Details of a BW cube |
| `DESCRIBE REPORT '<r>' GET (VARIANTS\|SELECTION-PARAMETERS)` | Variants and selection parameters of a report |

## Which table Peakboard displays

A statement can return several results. The variable `@RETVAL` decides which of them becomes the Peakboard data source.

* Without an `INTO` clause the result is written to `@RETVAL` automatically. That is why `SELECT TOP 10 * FROM MAKT` needs no `INTO`.
* `INTO RESULTSET` and `INTO RESULTS` are synonyms for `INTO @RETVAL`.
* Only `@RETVAL` and variables starting with `@RETVAL$` are evaluated.

If several matching values exist, this order applies:

1. the first real table,
2. the first RFC table,
3. the first structure — it becomes a table with one row,
4. otherwise all individual `@RETVAL$...` values are combined into a single-row table, where the part after the `$` becomes the column name.

If none of this fits, the Peakboard Designer reports `Unable to convert result value (@RETVAL) into Peakboard data source.`

<div class="box-tip" markdown="1">**Note**

Target variables that are **not** called `@RETVAL` are not lost when the application runs: the Peakboard Runtime writes them into the data element of the same name. A table fills a list of the same name, a single value fills a variable of the same name. This behaviour is not active in the preview of the Peakboard Designer.
</div>

## Using Peakboard variables in the statement

An XQL statement does not have to be static. Use the placeholder `#[Name]#` to insert the value of a data element from your project:

```sql
SELECT TOP 10 * FROM MAKT WHERE MATNR = '#[SearchedMaterialNumber]#'
```

You do not have to type the placeholder — the editor has a dedicated button that lists all String, Number and Boolean data elements of the project and inserts the placeholder at the cursor position. The resolve button shows you the statement with all placeholders substituted.

If the placeholder refers to a **list**, it is automatically serialised as an XQL table literal — exactly in the form `(('COL1','COL2'), ('a','b'), ...)`. This lets you pass a complete Peakboard list straight into a table parameter:

```sql
EXECUTE FUNCTION 'Z_PB_IMPORT'
   TABLES
      IMPORT_TAB = #[MyList]#,
      RESULT_TAB INTO @RETVAL
```

In addition you can embed real Lua code with `#{ ... }#`; its return value ends up at that position in the statement.

## Formal grammar

```
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
   := "EXECUTE" (ExecuteMDX | ExecuteFunction | ExecuteReport)

ExecuteMDX
   := "MDX" StringPassThrough [Into]

ExecuteFunction
   := "FUNCTION" String [(Imports | Exports | Tables | Changing) {(Imports | Exports | Tables | Changing)}]

ExecuteReport
   := "REPORT" String [Into] ["WHERE" SelectQueryCriteria {("," | "AND") SelectQueryCriteria}] ["USING" String] [WithOptions{CUSTOMFUNCTION, USEBATCH, SKIPTOPROWS}]

Imports
   := ("IMPORTS" | "IMPORTING") ImportsParameter {"," ImportsParameter}

ImportsParameter
   := Variable "=" Identifier

Exports
   := ("EXPORTS" | "EXPORTING") ExportsParameter {"," ExportsParameter}

ExportsParameter
   := Identifier "=" (String | Integer | Number | Variable | Table)

Tables
   := "TABLES" TablesParameter {"," TablesParameter}

TablesParameter
   := Identifier ["=" (Variable | Table)] [Into]

Changing
   := ("CHANGING" | "CHANGINGS") ChangingParameter {"," ChangingParameter}

ChangingParameter
   := Identifier ["=" (String | Integer | Number | Variable | Table)] [Into]

Table
   := "(" TableMaps [","] TableValues {[","] TableValues} ")"

TableMaps
   := "(" Identifier {"," Identifier} ")"

TableValues
   := "(" String {"," String} ")"

DescribeCommand
   := "DESCRIBE" (DescribeTable | DescribeQuery | DescribeQueryBW | DescribeFunction | DescribeStructure | DescribeReport) [Into]

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

DescribeReport
   := "REPORT" ((String "GET" ("VARIANTS" | "SELECTION-PARAMETERS")) | ("CATALOG" "WHERE" "REPORTNAME" ("EQ" | "LIKE") String))

Into
   := "INTO" ("RESULTSET" | "RESULTS" | Variable)

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
