---
layout: article
title: 带XQL的SAP系统
menu_title: XQL
description: 关于XQL使用的信息
lang: cn
ref: dat-sap-20
---
如果不是通过网关，而是通过“直接RFC”建立SAP访问，则SAP访问将通过XQL进行定义。XQL是一种简单的描述语言。下文将解释如何在SAP中使用XQL来访问RFC功能模块、报告、表格、多维数据集和查询。为尽量使解释通俗易懂，本页将使用尽可能多的示例，而尽量少用关于XQL的正式描述。

##表格访问

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
 := "LIKE" (String | Variable)

SelectTableWhereFactorBetween
 := "BETWEEN" SelectTableWhereFactorValue "AND" SelectTableWhereFactorValue

SelectTableWhereFactorIn
 := "IN" "(" String {"," String} ")"

SelectTableWhereFactorValue
 := String | Integer | Number | Variable | Identifier
```

###示例

检索MAKT表格的所有列，但不超过10行：

```
SELECT TOP 10 * FROM MAKT;
```

仅检索MAKT表格的某些列（最多10行） ：

```
SELECT TOP 10 MATNR, MAKTX FROM MAKT
```

`var example = true`
