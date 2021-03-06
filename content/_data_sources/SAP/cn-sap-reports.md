---
layout: article
title: 安装SAP报告功能模块
menu_title: 安装SAP报告功能模块
description: 安装SAP报告功能模块的教程
lang: cn
weight: 1110
ref: dat-1110
redirect_from:
  - /data_sources/SAP/11-cn-sap-reports.html
---

如需在Peakboard中使用SAP报告，则需要在SAP系统中安装客户专用功能模块。如果您自己无法完成，请寻求您的SAP基础部门同事的帮助。首先创建一个功能组（例如，名称为EXPREST）来创建模块。然后创建一个新的功能模块。名称应该为Z_XTRACT_IS_REMOTE_REPORT，但在必要情况下可以进行更改。将模块的属性定义为支持远程功能，并创建导入、导出和表参数，如下面截图所示。

![Function Builder Import](/assets/images/data-sources/sap/report-custom-function-01.png)

![Function Builder Export](/assets/images/data-sources/sap/report-custom-function-02.png)

![Function Builder Tables](/assets/images/data-sources/sap/report-custom-function-03.png)

请用Ctrl+C和Ctrl+V将源代码从此[文本](https://peakboard.com/download/dokumente/Z_XTRACT_IS_REMOTE_REPORT.txt) 中复制到代码编辑器（源代码选项卡）。保存模块并激活。现在就可以使用了。各个步骤（程序执行、假脱机检索、任务监控等）都记录在相应代码中。这使得感兴趣的读者很容易了解ABAP代码的工作方式。
