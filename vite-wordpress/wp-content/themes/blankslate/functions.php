<?php

require_once 'vite-for-wp.php';

use Kucrut\Vite;

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

add_action('wp_enqueue_scripts', function () {
    Vite\enqueue_asset(
        __DIR__ . "/assets/dist",
        'assets/src/js/main.js',
        [
            'handle' => 'my-script',
            'css-media' => 'all'
        ]
    );
});
