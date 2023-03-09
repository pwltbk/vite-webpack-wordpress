<?php

function blankslate_schema_type()
{
    $schema = 'https://schema.org/';
    if (is_single()) {
        $type = "Article";
    } elseif (is_author()) {
        $type = 'ProfilePage';
    } elseif (is_search()) {
        $type = 'SearchResultsPage';
    } else {
        $type = 'WebPage';
    }
    echo 'itemscope itemtype="' . esc_url($schema) . esc_attr($type) . '"';
}

add_action('wp_enqueue_scripts', function() {
    wp_enqueue_script('my-script', get_stylesheet_directory_uri() . "/assets/dist/js/main.min.js");
    // wp_enqueue_script('my-script', get_stylesheet_directory_uri() . "/assets/src/js/main.js");
    wp_enqueue_style('my-style', get_stylesheet_directory_uri() . "/assets/dist/css/main.css");
});