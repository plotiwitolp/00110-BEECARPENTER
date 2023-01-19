<?php
add_action('wp_enqueue_scripts', 'beecarpenter_scripts');
function beecarpenter_scripts()
{
    wp_enqueue_style('index', get_stylesheet_uri(), array(), '3.0');
    wp_enqueue_style('main', get_template_directory_uri() . '/assets/styles/main.css', array(), '1.0');
    wp_enqueue_style('responsive', get_template_directory_uri() . '/assets/styles/responsive.css', array(), '1.0');
    wp_enqueue_style('animate', get_template_directory_uri() . '/assets/libs/animatecss/animate.min.css', array(), '1.0');

    // отключение стандартного jquery
    wp_dequeue_script('jquery');
    wp_deregister_script('jquery');

    wp_register_script('jquery', get_template_directory_uri() . '/assets/scripts/jquery-3.6.0.min.js', '3.6.0', true);
    wp_enqueue_script('jquery');
    wp_enqueue_script('main', get_template_directory_uri() . '/assets/scripts/main.js', array('jquery'), '1.0', true);
    wp_enqueue_script('wow', get_template_directory_uri() . '/assets/libs/wow/wow.min.js', array('main'), '1.0', true);
}
