# Adding articles to Categories

Articles are added by creating a new file in the respective directory. For example, to add a new artilce to the "Data Sources" category, just add the file to the `_data_sources` directory.

There are some important conventions to note.

* The filename should not contain spaces. Use either underscores or dashes in place of spaces.
* The filename will be used in the url (and possibly title), so it should be descriptive of the article (you can just use the title), but written in kebab case.
* Articles will appear in order of their weight (lowest being on top, ascending).
* The filename should ideally be in the language the article is written in.
* The extension should be .md if you are using markdown, or .html if you are writing in html. It is fine to use html in a markdown file (still use the .md extension)
* Each file must contain "front matter"

### Front Matter

Each file you create for an article should contain "front matter", which is just some yml formatted key/values written in the following way.

```markdown
---
layout: article // for video tutorials use video_article
title: The article title // if this is missing, the filename will be used to create a title
menu_title: The title to appear in the menu // alows for shorter titles in menu, main title is fallback
description: A brief description of the article (around 160 characters)
lang: en // the language code (e.g. german = de)
ref: [unique id for article] // translations will have the same id
weight: 100 // weight for page, defines the order in menu's. Lower means higher in the order.
redirect_from:
  - /some/url.html
  - /other/url.html
---
```

**Important:** The front matter must be the first thing in the file.
This front matter must contain the following fields:

* layout - Tells the site what page template to use. Use `article` for all artilces and `video_article` for video tutorials
* title - this is used as the article's title
* menu_title - this allows you to use a different title in the menu bar in case you need to save space. If not included, the main title will be used.
* description - a description of the article, important for search engines.
* lang - the language code for the articles language (either en or de for now)
* ref - a unique id for the article. It must be unique for the whole category, even if in a nested directory. Can be a string or number/int. This ref is used to identify translations, and translated articles should share the same ids.
* youtube_id - **[Video tutorials only]** the id of the video on youtube.

### Internationalisation / Translations

The site is only aware of translations for an article is there is another article in the same category with the same `ref` and a different `lang` code defined in the front matter. So to add a translation for an article, just create the article as normal, but give it the same ref as its counterpart and make sure they are in the same category.

### Nested categories and articles

To create a subcategory of articles inside an existing category, simply create a new folder in the required category, and then place the articles inside the folder. The name of the subcategory is taken from the folder name, with underscores replaced by spaces and the words capitalised. For example, to create a subcategory called Third Level in the Data Sources category, just create the folder `third_level` in the `_data_sources` folder, and put the relevant articles in the new folder. Note that articles in subcategories still need a `ref` that is unique to all other articles in the entire category (except for its tanslations, of course).
