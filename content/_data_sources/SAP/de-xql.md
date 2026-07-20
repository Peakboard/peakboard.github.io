---
layout: article
title: SAP mit XQL
menu_title: XQL
description: XQL ist die Abfragesprache, mit der Peakboard auf SAP-Tabellen, ABAP-Reports, Funktionsbausteine, Queries und BW-Cubes zugreift.
lang: de
weight: 2420
ref: dat-sap-2420
redirect_from:
  - /data_sources/SAP/20-de-xql.html
---

Jeder Zugriff der SAP-Datenquelle auf ein SAP-System wird über **XQL** (XtractQL) formuliert.
XQL ist eine kompakte, SQL-ähnliche Beschreibungssprache. Ein einziges Statement genügt, um eine Tabelle zu lesen, einen ABAP-Report auszuführen, einen RFC-Funktionsbaustein aufzurufen, eine SAP Query abzusetzen oder einen BW-Cube per MDX abzufragen.

Diese Seite erklärt die Sprache anhand von Beispielen. Die vollständige formale Grammatik findest du am Ende der Seite.

## Wo du XQL eingibst

Das Statement wird im Dialog der SAP-Datenquelle im Bereich [XQL statement] hinterlegt. Wie du die Datenquelle grundsätzlich anlegst, ist im Artikel [SAP](/data_sources/SAP/de-sap.html) beschrieben.

Über den Button [Template] fügst du eine fertige Beispiel-Anweisung ein (1) — das ist der schnellste Einstieg. Das Statement selbst schreibst du im Editor mit Syntaxhervorhebung (2). Mit [Load data] erzeugst du eine Vorschau der Daten (3), und mit [OK] legst du die Datenquelle an (4).

![XQL-Statement im SAP-Dialog](/assets/images/data-sources/sap/xql/xql-01-editor.png)

Hinter dem Button [Template] verbergen sich 19 Vorlagen, die alle gängigen Zugriffsarten abdecken. Du wählst einen Eintrag aus und bestätigst mit [OK] — der Inhalt des Editors wird dabei komplett ersetzt.

![Vorlagen für XQL-Statements](/assets/images/data-sources/sap/xql/xql-02-templates.png)

Für längere Statements klappst du den Editor über das Vergrößern-Symbol in einem eigenen Fenster auf.

![Vergrößerter XQL-Editor](/assets/images/data-sources/sap/xql/xql-03-enlarged.png)

## Grundregeln

Bevor es zu den einzelnen Zugriffsarten geht, ein paar Regeln, die für alle Statements gelten:

* **Schlüsselwörter sind nicht case-sensitiv.** `SELECT`, `select` und `Select` sind gleichwertig. In der Dokumentation werden sie zur besseren Lesbarkeit groß geschrieben.
* **Mehrere Anweisungen** werden mit `;` getrennt. Beim letzten Statement darf das Semikolon entfallen.
* **Zeichenketten** stehen in einfachen oder doppelten Anführungszeichen (`'MAKT'` oder `"MAKT"`) und müssen in derselben Zeile enden. Ein Anführungszeichen im Text wird durch Verdopplung geschrieben (`'Peter''s'`).
* **Pass-Through-Strings** stehen in `[...]` oder `|...|` und dürfen über mehrere Zeilen gehen. Sie werden unverändert an SAP durchgereicht und werden für MDX benutzt.
* **Kommentare** schreibst du als `// bis Zeilenende` oder als `/* Block */`.
* **Synonyme:** `WITH` = `WITH-OPTIONS`, `EXPORTS` = `EXPORTING`, `IMPORTS` = `IMPORTING`, `LIKE` = `MP`, `BETWEEN` = `BT`, `I` = `INCLUDE`, `E` = `EXCLUDE`. Statt `EQ`, `NE`, `LT`, `GT`, `LE`, `GE` kannst du auch `=`, `!=` bzw. `<>`, `<`, `>`, `<=`, `>=` schreiben.

## Tabellenzugriff

Der einfachste Fall: Du liest eine SAP-Tabelle wie eine Datenbanktabelle.

```sql
SELECT TOP 10 * FROM MAKT;
```

Mit `TOP` begrenzt du die Zeilenanzahl, mit `SKIP` überspringst du Zeilen am Anfang. Beide Werte müssen mindestens 1 sein.

Statt `*` gibst du eine Spaltenliste an — optional mit `AS` und einem Alias:

```sql
SELECT TOP 10 MATNR, MAKTX FROM MAKT
```

```sql
SELECT TOP 10 MATNR AS Materialnummer, MAKTX AS Bezeichnung FROM MAKT
```

### WHERE-Klausel beim Tabellenzugriff

Beim Tabellenzugriff steht dir ein vollwertiger boolescher Ausdruck zur Verfügung: Bedingungen lassen sich mit `AND` und `OR` verknüpfen und mit Klammern gruppieren.

```sql
SELECT TOP 10 * FROM MAKT WHERE MATNR = '100-100'
```

```sql
SELECT * FROM MARA WHERE (MTART EQ 'FERT' OR MTART EQ 'HALB') AND MEINS EQ 'ST'
```

Folgende Operatoren sind erlaubt:

| Operator | Bedeutung | Beispiel |
| --- | --- | --- |
| `EQ` `NE` `LT` `GT` `LE` `GE` | Vergleich | `WHERE MTART EQ 'FERT'` |
| `LIKE` (= `MP`) | Mustervergleich | `WHERE MATNR LIKE '100-4%'` |
| `BETWEEN` (= `BT`) | Wertebereich | `WHERE ERSDA BETWEEN '20240101' AND '20241231'` |
| `IN` | Werteliste (nur Zeichenketten) | `WHERE MTART IN ('FERT', 'HALB')` |
| `IS NULL` | Nullwert-Prüfung | `WHERE MAKTX IS NOT NULL` |

`LIKE`, `BETWEEN` und `IN` lassen sich mit `NOT` negieren, zum Beispiel `WHERE MTART NOT IN ('FERT', 'HALB')`.

Als Vergleichswert sind Zeichenketten, Zahlen und Variablen (`@variable`) erlaubt. Der einzige zulässige Bezeichner ist das SAP-Systemfeld `SY-DATUM`; jeder andere freie Bezeichner führt zu einem Fehler.

### Tabellen mit vielen Spalten

Der Standard-Lesebaustein von SAP hat eine Breitenbegrenzung. Bei sehr breiten Tabellen weichst du mit `WITH-OPTIONS` auf einen eigenen Funktionsbaustein aus:

```sql
SELECT * FROM MARA WITH-OPTIONS(CUSTOMFUNCTIONNAME = 'Z_XTRACT_IS_TABLE')
```

Details zur Einrichtung dieses Bausteins findest du im Artikel [SAP-Extraktionsgrenzen](/data_sources/SAP/de-sap-extraction-limit.html).

## ABAP-Reports ausführen

Mit `EXECUTE REPORT` startest du ein ABAP-Programm und liest dessen Listenausgabe als Tabelle ein.

Die Reihenfolge der Klauseln ist fest vorgegeben: erst `INTO`, dann `WHERE`, dann `USING`, zuletzt `WITH-OPTIONS`.

Am einfachsten ist der Aufruf mit einer im SAP hinterlegten Variante:

```sql
EXECUTE REPORT 'RLT10010' USING 'VAR01'
```

Selektionsparameter kannst du auch direkt im Statement setzen:

```sql
EXECUTE REPORT 'RLT10010' WHERE T1_LGNUM EQ '001'
```

Für Selektionen mit Vorzeichen und Option benutzt du die komplexe Form. Jeder Bereich hat den Aufbau `(Vorzeichen, Option, Von [, Bis])`:

```sql
EXECUTE REPORT 'RLT10010' WHERE T1_LGNUM IN ((I,EQ,'001'))
```

```sql
EXECUTE REPORT 'RLT10010' WHERE T1_LGNUM IN ((I,EQ,'001'), (E,LIKE,'9*'), (I,BT,'A','C'))
```

Als Vorzeichen sind `I`/`INCLUDE` und `E`/`EXCLUDE` erlaubt, als Option `EQ`, `NE`, `GT`, `LT`, `GE`, `LE`, `BT` und `MP`/`LIKE`.

<div class="box-tip" markdown="1">**Hinweis**

Enthält der Von-Wert bei der Option `EQ` einen Stern (`*`), wandelt Peakboard die Option automatisch in `CP` (contains pattern) um. `WHERE MATNR EQ '100-4*'` wirkt also wie ein Mustervergleich.
</div>

### Optionen für Reports

```sql
EXECUTE REPORT 'RQMELL10' USING 'OFFEN'
WITH-OPTIONS (CustomFunction = 'Z_XTRACT_IS_REMOTE_REPORT_NEU');
```

```sql
EXECUTE REPORT 'RQMELL10' USING 'OFFEN'
WITH-OPTIONS (SkipTopRows = '20', UseBatch = 'true');
```

| Option | Bedeutung | Standard |
| --- | --- | --- |
| `CustomFunction` (= `CustomFunctionName`) | Name des RFC-Bausteins, der den Report ausführt | `Z_XTRACT_IS_REMOTE_REPORT` |
| `SkipTopRows` | Anzahl der Zeilen, die am Anfang der Listenausgabe übersprungen werden | `0` |
| `UseBatch` | `'true'` führt den Report als Hintergrundjob aus und liest anschließend die Spool-Liste | `'false'` |

Der Hintergrundjob läuft unter dem Namen `Xtract` auf dem Ziel `LOCL` und bricht nach 300 Sekunden mit einer Zeitüberschreitung ab.

## Funktionsbausteine aufrufen (RFC)

`EXECUTE FUNCTION` ruft einen RFC-fähigen Funktionsbaustein auf. Die Parameter werden in bis zu vier Abschnitten übergeben, die jeder höchstens einmal vorkommen dürfen:

| Abschnitt | Richtung |
| --- | --- |
| `EXPORTS` (= `EXPORTING`) | Werte, die Peakboard **an** SAP übergibt |
| `IMPORTS` (= `IMPORTING`) | Werte, die Peakboard **von** SAP zurückliest |
| `TABLES` | Tabellenparameter, in beide Richtungen |
| `CHANGING` | Änderbare Parameter |

Innerhalb eines Abschnitts werden die Parameter mit Komma getrennt.

```sql
EXECUTE FUNCTION 'SD_RFC_CUSTOMER_GET'
   EXPORTS
      NAME1 = 'Th*'
   TABLES
      CUSTOMER_T INTO @RETVAL
```

### Skalare Rückgabewerte

Mit `IMPORTS` liest du einzelne Felder zurück. Jedes Feld bekommt einen eigenen Zielnamen nach dem Muster `@RETVAL$spaltenname` — die Werte landen gemeinsam in einer einzeiligen Tabelle, in der jedes `$`-Suffix zu einer Spalte wird:

```sql
EXECUTE FUNCTION 'GET_SYSTEM_TIME_REMOTE'
   IMPORTS L_TIME INTO @RETVAL$local,
   K_TIME INTO @RETVAL$kernel,
   L_DATE INTO @RETVAL$date
```

Das Ergebnis ist eine Tabelle mit einer Zeile und den drei Spalten `local`, `kernel` und `date`.

### Strukturfelder

Ein einzelnes Feld einer Struktur sprichst du mit `Struktur-Feld` an:

```sql
EXECUTE FUNCTION 'Z_SD_RFC_CUSTOMER_GET'
   EXPORTS
      KUN_STR-NAME1 = 'Th*',
      KUN_STR-KUNNR = '*80'
   TABLES
      CUSTOMER_T INTO @RETVAL
```

<div class="box-tip" markdown="1">**Hinweis**

Es ist genau **eine** Ebene möglich. `STRUKTUR-FELD` funktioniert, `STRUKTUR-UNTERSTRUKTUR-FELD` wird abgewiesen. Im Abschnitt `TABLES` sind Strukturfelder generell nicht erlaubt.
</div>

### Tabellen als Parameterwert

Tabellenwertige Parameter schreibst du direkt ins Statement. Das erste Klammerpaar ist die **Spaltenliste**, jedes weitere eine **Datenzeile**:

```sql
EXECUTE FUNCTION 'BAPI_USER_GETLIST'
   TABLES
      SELECTION_RANGE = ((PARAMETER, FIELD, SIGN, OPTION, LOW, HIGH),
         ('LOGONDATA', 'USTYP', 'I', 'EQ', 'A', ''),
         ('USERNAME','', 'I', 'BT', 'A', 'C')),
      USERLIST INTO @RETVAL
```

Alle Werte müssen als Zeichenkette geschrieben werden — auch Zahlen, also `'1'` statt `1`. Die Kommas zwischen den Zeilen sind optional.

Dieselbe Schreibweise funktioniert auch im Abschnitt `EXPORTS`:

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

Eine Tabelle darf auch innerhalb einer Struktur liegen:

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

Eine SAP Query sprichst du über `SELECT ... FROM QUERY` an. Der Query-Name setzt sich aus Arbeitsbereich, Benutzergruppe und Query-Name zusammen und wird mit `|` getrennt: `'G|/SAPQUERY/ME/|MEBESTWERTAN'` (`G` = global, `S` = Standard).

```sql
SELECT * FROM QUERY 'G|/SAPQUERY/ME/|MEBESTWERTAN' USING 'PLANT1000'
```

Statt einer Variante kannst du die Select-Options direkt angeben. Die Kriterien werden mit Komma oder `AND` getrennt — `OR` und Klammern gibt es hier nicht, und jedes Feld darf nur einmal vorkommen:

```sql
SELECT TOP 20 * FROM QUERY 'G|/SAPQUERY/ME/|MEBESTWERTAN'
   WHERE
S_WAERS EQ 'EUR', S_MATNR MP '100-4*'
```

Erlaubt sind `EQ`, `NE`, `GT`, `LT`, `GE`, `LE` und `MP`, außerdem `BT 'von' AND 'bis'` sowie die komplexe `IN ((...))`-Form aus dem Report-Abschnitt.

`SKIP` wird beim Query-Zugriff nicht unterstützt.

## BW-Cubes und MDX

Für BW-Cubes gibt es zwei Wege.

`EXECUTE MDX` reicht ein MDX-Statement unverändert durch. Damit die eckigen Klammern von MDX nicht mit den Pass-Through-Klammern kollidieren, umschließt du das Statement mit `|`:

```sql
EXECUTE MDX |SELECT {[Measures].[0D_COST]} ON COLUMNS , NON EMPTY [0D_CO_CODE].[LEVEL01].MEMBERS ON ROWS FROM [$0D_DECU] |;
```

Alternativ greifst du mit `SELECT ... FROM BWQUERY` auf eine BW-Query zu und übergibst die Variablen als Kriterien:

```sql
SELECT * FROM BWQUERY '0D_DECU/VARDEMO01' WHERE SALESORG IN ((I,BT,'1000','4000'))
```

Beim BWQUERY-Zugriff werden `TOP` und `SKIP` nicht unterstützt.

## Metadaten ermitteln mit DESCRIBE

`DESCRIBE` liefert keine Nutzdaten, sondern Strukturinformationen. Das ist praktisch, um in der Vorschau herauszufinden, wie eine Tabelle oder ein Funktionsbaustein überhaupt aufgebaut ist.

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

Verfügbare Varianten:

| Anweisung | Ergebnis |
| --- | --- |
| `DESCRIBE TABLE '<t>' [GET FIELDS]` | Feldliste einer Tabelle |
| `DESCRIBE TABLE CATALOG WHERE TABLENAME (EQ\|LIKE) '<x>'` | Liste der Tabellen |
| `DESCRIBE FUNCTION '<f>' GET (IMPORTS\|EXPORTS\|TABLES)` | Parameter eines Funktionsbausteins |
| `DESCRIBE FUNCTION CATALOG WHERE FUNCTIONNAME (EQ\|LIKE) '<x>'` | Liste der Funktionsbausteine |
| `DESCRIBE STRUCTURE '<s>'` | Aufbau einer Struktur |
| `DESCRIBE QUERY '<q>' GET (FIELDS\|VARIANTS\|SELECTION-PARAMETERS)` | Details einer Query |
| `DESCRIBE QUERY CATALOG WHERE ...` | Liste der Queries |
| `DESCRIBE BWQUERY '<c>' GET (MEASURES\|VARIABLES\|DIMENSIONS)` | Details eines BW-Cubes |
| `DESCRIBE REPORT '<r>' GET (VARIANTS\|SELECTION-PARAMETERS)` | Varianten und Selektionsparameter eines Reports |

## Welche Tabelle Peakboard anzeigt

Ein Statement kann mehrere Ergebnisse liefern. Welches davon zur Peakboard-Datenquelle wird, entscheidet die Variable `@RETVAL`.

* Ohne `INTO`-Klausel wird das Ergebnis automatisch nach `@RETVAL` geschrieben. `SELECT TOP 10 * FROM MAKT` braucht deshalb kein `INTO`.
* `INTO RESULTSET` und `INTO RESULTS` sind Synonyme für `INTO @RETVAL`.
* Ausgewertet werden nur `@RETVAL` und Variablen, die mit `@RETVAL$` beginnen.

Gibt es mehrere passende Werte, gilt diese Reihenfolge:

1. die erste echte Tabelle,
2. die erste RFC-Tabelle,
3. die erste Struktur — sie wird zu einer Tabelle mit einer Zeile,
4. andernfalls werden alle einzelnen `@RETVAL$...`-Werte zu einer einzeiligen Tabelle zusammengefasst, wobei der Teil hinter dem `$` zum Spaltennamen wird.

Passt nichts davon, meldet der Peakboard Designer `Unable to convert result value (@RETVAL) into Peakboard data source.`

<div class="box-tip" markdown="1">**Hinweis**

Zielvariablen, die **nicht** `@RETVAL` heißen, gehen nicht verloren: Die Peakboard Runtime schreibt sie in das Datenelement mit demselben Namen. Eine Tabelle füllt eine gleichnamige Liste, ein einzelner Wert eine gleichnamige Variable. In der Vorschau des Peakboard Designers ist dieses Verhalten nicht aktiv.
</div>

## Peakboard-Variablen im Statement verwenden

Ein XQL-Statement muss nicht statisch sein. Über den Platzhalter `#[Name]#` fügst du den Wert eines Datenelements aus deinem Projekt ein:

```sql
SELECT TOP 10 * FROM MAKT WHERE MATNR = '#[GesuchteMaterialnummer]#'
```

Den Platzhalter musst du nicht abtippen — im Editor gibt es dafür einen eigenen Button, der alle String-, Number- und Boolean-Datenelemente des Projekts auflistet und den Platzhalter an der Cursorposition einfügt. Über den Auflösen-Button siehst du das Statement mit allen ersetzten Platzhaltern.

Verweist der Platzhalter auf eine **Liste**, wird sie automatisch als XQL-Tabellenliteral serialisiert — also genau in der Form `(('COL1','COL2'), ('a','b'), ...)`. Damit kannst du eine komplette Peakboard-Liste direkt an einen Tabellenparameter übergeben:

```sql
EXECUTE FUNCTION 'Z_PB_IMPORT'
   TABLES
      IMPORT_TAB = #[MeineListe]#,
      RESULT_TAB INTO @RETVAL
```

Zusätzlich kannst du mit `#{ ... }#` echten Lua-Code einbetten, dessen Rückgabewert an dieser Stelle im Statement landet.

## Formale Grammatik

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
