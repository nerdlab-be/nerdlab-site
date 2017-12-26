// // ---
// // Add smooth page transitions for an app like feel
// // -
// // Source: https://github.com/weblinc/jquery.smoothState.js
// // ---
//
// Smoothstate only works if history is supported so we use a Modernizr wrapper
if (Modernizr.history) {

    $(function() {
        'use strict';
        var options = {
            debug: false,
            prefetch: true,
            cacheLength: 2,
            onStart: {
                duration: 400, // Duration of our animation
                render: function ($container) {
                    // Add your CSS animation reversing class
                    $container.removeClass('is-finished');
                    $container.addClass('is-exiting');
                    // $("html, body").animate({ scrollTop: 0 });

                    // Restart your animation
                    smoothState.restartCSSAnimations();
                }
            },
            onReady: {
                duration: 500, // Duration of our animation
                render: function ($container, $newContent) {
                    // Remove your CSS animation reversing class
                    $container.removeClass('is-exiting');
                    $container.addClass('is-finished');
                    // Inject the new content
                    $container.html($newContent);
                    pluginLoader();
                }
            }
        },

        smoothState = $('#js-smoothstate').smoothState(options).data('smoothState');
    });
}

var chopstick =
{
    // init, something like a constructor
    init: function()
    {
        headerScroll();
        mobileNav();

        $('.js-gallery').slick({
            focusOnSelect: true,
            edgeFriction: 2,
            mobileFirst: true,
            variableWidth: true,
            arrows: false,
            lazyLoad: 'progressive',

            responsive: [{

                breakpoint: 767,
                settings: {
                    centerMode: true
                }

            }]
        });
    }
};

var headerScroll = function()
{
    var header = $('.js-header');
    var headerOffset = $('.js-header').outerHeight();

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= headerOffset/4) {
            header.addClass("is-shrinken");
        } else {
            header.removeClass("is-shrinken");
        }
    });
};

var mobileNav = function()
{
    var header = $('.js-header');
    var nav = $('.js-nav');
    var trigger = $('.js-nav-trigger');
    var triggerUp = $('.js-nav-trigger-up');

    trigger.on('click', function() {
        $(this).toggleClass('is-active');
        nav.slideToggle('fast');
        // header.toggleClass('has-visible-nav');
    });

    triggerUp.on('click', function() {
        trigger.removeClass('is-active');
        nav.slideUp('fast');
        // header.toggleClass('has-visible-nav');
    });
};

// Load all your plugins in the pluginLoader function.
var pluginLoader = function() {
    $(chopstick.init);
};
pluginLoader();
