let mix = require("laravel-mix");
let tailwindcss = require("tailwindcss");
require("laravel-mix-purgecss");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath('public');


mix
  .js("resources/js/app.js", "assets/")
  .sass("resources/sass/app.scss", "assets/")

  .options({
    postCss: [tailwindcss("tailwind.js")]
  })
  .purgeCss({
    globs: [
      path.join(__dirname, "_layouts/*"),
      path.join(__dirname, "_includes/*.html")
    ],
    extensions: ["html", "js", "md", "vue"],
    whiteList: [
      ".article-content blockquote.success h5",
      "h-8",
      "html.stuck .page-header"
    ],
    whitelistPatterns: [
      /^\.article-content.*/,
      /blockquote$/,
      /success$/,
      /danger$/,
      /warning$/,
      /primary$/,
      /h5$/,
      /img$/,
      /pre$/,
      /code$/,
      /language-.*/,
      /^\.token/,
      /.*token.*/,
      /.*string.*/,
      /.*function.*/,
      /.*symbol.*/,
      /.*punctuation.*/,
      /.*operator.*/,
      /.*constant.*/,
      /.*number.*/,
      /.*keyword.*/,
      /pk-lightbox/,
      /lightbox/,
      /circlepath$/,
      /topline$/,
      /bottomline$/
    ],
    fontFace: false
  });
