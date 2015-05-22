(function () {
    'use strict';

    var landing = {};

	landing.init = function () {
		landing.menu.init();
	};

	/***
        Create animated scroll for menu links
    ***/
    landing.menu = {
        itemsSelector: '.nav-link[href^="#"]',
        animationSpeed: 400
    };
    landing.menu.init = function () {
        landing.menu.menuItems = $(landing.menu.itemsSelector);
        landing.menu.document = $('html, body');

        landing.menu.menuItems.on('click.animateScroll', function (e) {
            e.preventDefault();

            landing.menu.animateTo(e.target);
        });
    };
    landing.menu.animateTo = function (link) {

        var $link = $(link),
            href = $link.attr('href'),
            offSetTop = $(href).offset().top;
        
        landing.menu.document.finish().animate({scrollTop : offSetTop}, landing.menu.animationSpeed, function () {
            location.hash = href;
        });
    };

	landing.init();
}());