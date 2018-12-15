---
layout: article
title: ListView
menu_title: ListView
description: Information about Peakboard Designer ListView Control.
lang: en
ref: con-10
permalink: /en/:collection/list-view
---

The ListView Control can take any shape as long as it contains recurring elements. It is therefore necessarily linked to a tabular data source in order to function properly. Whether it is a simple list or complex elements is defined by an XAML fragment. If you are not familiar with XAML you can learn more about it [here](https://msdn.microsoft.com/en-us/library/cc295302.aspx). It is a description language that can be used to define an interface consisting of images, text and other elements. Similar to HTML, but much better.
In the following example, we want to visualize the [Instagram](/data_sources/16-en-instagram.html) source that we have already written in another article and present the Instagram feed. Such data sources are particularly suitable because they consist of images and text.
Drag the ListView Control to the panel and click on the property editor of the Source property. A dialog opens in which you can select a data source, e. g. Instagram.

![image_1](/assets/images/Controls/ListView/ControlsListview01.png)

The ListView control has now noticed that the source is an Insta feed and already suggests a suitable visualization. That’s why this is a good example, because we can look at the XAML code in this way, without having to formulate XAML itself right at the start. You can access the code editor from the ItemTemplate property dialog. At the top of the code editor, you can use the Combo-Box to select other templates that match the respective data source. Click on Preview in the right pane to see how the XAML that you have formulated on the left represents itself visually. You can also check whether a syntax error has crept in.

![image_1](/assets/images/Controls/ListView/ControlsListview02.png)

To use values from the data source in XAML, simply use a binding statement. Simple text fields can be bound in the same way as images containing the URL in the data source. Instagram is another good example to demonstrate this.

![image_1](/assets/images/Controls/ListView/ControlsListview03.png)

If you prefer to arrange the elements from left to right, simply change the Orientation property from Vertical to Horizontal. It makes sense to adjust the XAML template as well, otherwise it doesn’t make any sense. The two screenshots show the vertical list view with horizontal template and the horizontal list view with vertical template.

![image_1](/assets/images/Controls/ListView/ControlsListview04.png)

![image_1](/assets/images/Controls/ListView/ControlsListview05.png)

Finally, for the sake of completeness, the ListView Control in Preview mode.

![image_1](/assets/images/Controls/ListView/ControlsListview06.png)
