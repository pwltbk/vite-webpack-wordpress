const mix = require('laravel-mix');
const path = require('path')

mix.alias({
    '@': path.resolve(__dirname)
})

mix.js( 'assets/src/js/main.js', 'assets/dist/js/main.min.js')
.sass( 'assets/src/css/main.scss', 'assets/dist/css/main.css')