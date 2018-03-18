---
layout: article
title: Writing Content
menu_title: Writing Content
description: test
lang: en
ref: help-1
---

 - ### Table of Contents

    + [Creating and editing content](#creating-and-editing-content)
    + [Images](#images)
    + [Videos](#videos)
    + [Alerts and Callouts](#alerts-and-callouts)
    + [Code and syntax highlighting](#code-and-syntax-highlighting)
    + [Lists](#lists)
    + [Footnotes](#footnotes)




# Creating and editing content

You can use either markdown or html to write and edit the article contents. Remember that you can always use raw html directly in the markdown.

### Images

By convention, images should be placed in the `assets/images/` folder. Feel free to use subfolders for better organisation if neccessary. Just remember the path to the image so you can use in in your content.

An image can be included in markdown content as follows: `![Title for image](/path/to/image/image_name.png)`.

For example, if the image named `pb_screenshot.jpg` has been placed directly in the `assets/images/` folder, it could be added in markdown as follows:

`![Screenshot of Peakboard service](/assets/images/pb_screenshot.jpg)`

**Image sizes**: Try as much as possible to images with large dimensions but as small as possible filesizes. For screenshots of small images, it may be worthwhile to zoom/enlarge the screen first to get a bigger image. There are many resources one can use to reduce filesizes, a good, free online tool can be found at: [Kraken.io](https://kraken.io/web-interface)

### Videos

Should you have the need to use video outside of a "Video Tutorial", you can paste in the embed code from YouTube directly as html.

### Alerts and Callouts

For any content that you would like to draw attention to, you may use blockquotes, which will for styled as a general warning/alert. To do this in mardown, it would look like this:

```markdown
> ## Optional heading
>
> The content of the warning, or whatever info is important to note.
> May be more than one line.
```

Additionally you may paste in html with a specific class to get more appropriate coloring if needed:

`class="success"` will be a green colored alert box.

`class="primary"` will be a blue colored alert box.

`class="warning"` will be an orange colored alert box.

`class="danger"` will be a red colored alert box.

```html
<blockquote class="success">
	<h5>The Optional Heading</h5>
	<p>Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
</blockquote>
```

> ## Optional heading
>
> The content of the warning, or whatever info is important to note.
> May be more than one line.

### Code and syntax highlighting

Adding code sections in markdown is done with backticks. One `` `backtick` `` for inline code, and three backticks for code blocks blocks.

````markdown
    ```
       {
          Block.of(code)
       }
    ```
````

For code blocks you may add the name of the language after the opening backticks. This will allow for syntax highlighting. Currently on lua is supported on the site for syntax highlighting.

````markdown
    ```lua
       some lua code, which will be all colorful and pretty
    ```
````

### Lists

1. This is a list item
2. this is another list item
3. this is another list item

``` markdown
  1. This is a list item
  2. this is another list item
  3. this is another list item
```

### Footnotes

```markdown

This is a text with a
footnote[^1].

[^1]: And here is the definition.

```


This is a text with a
footnote[^1].

[^1]: And here is the definition.
