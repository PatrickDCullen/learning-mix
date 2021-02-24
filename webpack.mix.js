const mix = require("laravel-mix");

mix.extend("foobar", new MyExtension());
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/assets/js/app.js", "js")
    .sass("resources/assets/sass/app.scss", "css")
    .vue()
    .version();
