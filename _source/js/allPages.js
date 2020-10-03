// init base functions
$(window).on('load', function () {
    scrollDirection();
    initGettersAndSetters();
    changeTouchClickText();
});
$(window).on('hashchange', function () {
    initGettersAndSetters();
});
$(window).on('resize', function () {
    initGettersAndSetters();
});

// init AOS
if (is.not.ie()) {
    AOS.init();
} else {
    $('*').removeAattr("data-aos");
}

// m
if ($('.m_whatsApp').length) {
    var wpp__parts = {
        link_mobile: 'http://api.whatsapp.com/',
        link_web: 'https://web.whatsapp.com/',
        phone: 'send?phone=',
        msg: 'text='
    };
    $('.js-openWhatsModule').on('click', function() {
        var wppNumber = $(this).parent('.m_whatsApp').attr("data-whatsNumber");
        openWhatsApp(wppNumber);
    });
    function openWhatsApp(number) {
        if (is.iphone() || is.androidPhone() || is.windowsPhone() || is.blackberry() || is.mobile()) {
            window.open(wpp__parts.link_mobile + wpp__parts.phone + number, '_blank');
        } else {
            window.open(wpp__parts.link_web + wpp__parts.phone + number, '_blank');
        }
    }
}

// l
if ($('.l-nav').length) {
    var propsNav = {
        active: 'is-active',
        scrollInit: 0,
        scrollClassScrolled: 30,
        scrollClassMiddle: 600,
        body: $('body'),
        nav: $('.l-nav'),
        hamburguer: $('.l-nav .c-hamburguer'),
        contentHero: $('.l-nav__heroMenu'),
        mask: $('.l-nav__maskMenu'),
        maskAll: $('.l-nav__maskMenu.maskAll'),
    };

    function checkResponsiveMode() {
        var resultCheck;
        var displayCheck = propsNav.hamburguer.css('display');
        if (displayCheck !== 'none') {
            resultCheck = 'is-responsive';
            propsNav.nav.removeClass('is-desktop');
            propsNav.nav.addClass('is-responsive');
        } else {
            resultCheck = 'is-desktop';
            propsNav.nav.removeClass('is-responsive');
            propsNav.nav.addClass('is-desktop');
        }
        return resultCheck;
    }
    function closeAllSubMenus() {
        $('.c-subMenu').removeClass('is-active');
    }
    function closeResponsiveMenu() {
        propsNav.hamburguer.removeClass(propsNav.active);
        propsNav.contentHero.removeClass(propsNav.active);
    }
    function hideMaskMenu() {
        propsNav.mask.removeClass(propsNav.active);
    }
    function disableOverflow() {
        propsNav.body.addClass('u-overflowBlocked');
    }
    function enableOverflow() {
        propsNav.body.removeClass('u-overflowBlocked');
    }


    // RESPONSIVE MENU
    // - open / close
    propsNav.hamburguer.on('click', function() {
        if ($(this).hasClass(propsNav.active)) {
            // close menu
            enableOverflow();
            $(this).removeClass(propsNav.active);
            propsNav.maskAll.removeClass(propsNav.active);
            propsNav.contentHero.removeClass(propsNav.active);
        } else {
            // open menu
            disableOverflow();
            $(this).addClass(propsNav.active);
            propsNav.maskAll.addClass(propsNav.active);
            propsNav.contentHero.addClass(propsNav.active);
        }
    });
    // - close
    propsNav.maskAll.on('click', function(){
        closeResponsiveMenu();
        hideMaskMenu();
        closeAllSubMenus();
        enableOverflow();
    });


    // SCROLL CHANGES
    $(window).on('load', function(event) {
        checkResponsiveMode();
        var scrollBody = $(this).scrollTop();
        if (scrollBody > 1) {
            propsNav.nav.addClass('scrolled');
        } else {
            propsNav.nav.removeClass('scrolled');
        }
    });
    $(window).on('scroll', function() {
        var scrollBody = $(this).scrollTop();
        // scroll up to 99
        if (scrollBody > propsNav.scrollClassScrolled) {
            propsNav.nav.addClass('scrolled');
        } else {
            propsNav.nav.removeClass('scrolled');
        }
        // middle class
        if (scrollBody > propsNav.scrollClassMiddle) {
            //propsNav.nav.addClass('hidden');
            propsNav.nav.addClass('scrolledMiddle');
        } else {
            propsNav.nav.removeClass('hidden');
            propsNav.nav.removeClass('scrolledMiddle');
        }
        // scroll up or down
        if (scrollBody < propsNav.scrollInit) {
            propsNav.nav.removeClass('hidden');
            propsNav.nav.addClass('scrolledUp');
            propsNav.nav.removeClass('scrolledDown');
        } else {
            propsNav.nav.removeClass('scrolledUp');
            propsNav.nav.addClass('scrolledDown');
        }
        // close menus on hidden nav
        if(propsNav.nav.hasClass('hidden')) {
            closeAllSubMenus();
            hideMaskMenu();
        }
        // reference var
        propsNav.scrollInit = scrollBody;
    });
}

// #
if ($('#jogabilidade').length) {
    var el = $('#jogabilidade');
    var splideJogabilidade;

    // get widthElement
    var widthSplideHero = 0;
    $(window).on('load resize', function() {
        $('.splide__control').addClass('u-dnone');
        setTimeout(function(){
            widthSplideHero = $('.article__splideHero').width();
            console.log(widthSplideHero);
            $('.splide__control')
                .removeClass('u-dnone')
                .width(widthSplideHero);
        }, 100);
    });

    // make splide
    setTimeout(function(){
        splideJogabilidade = new Splide( '.splide__jogabilidade', {
            width: widthSplideHero,
            fixedWidth: widthSplideHero,
            autoHeight: true,
            pagination: true,
        } ).mount();
    }, 300);

}

// .
$('.js-scrollLink').on('click', function(e) {
    enableOverflow();
    hideMaskMenu();
    closeAllSubMenus();
    closeResponsiveMenu();
    e.preventDefault();
    var finalDestiny = $(this).attr('href');
    switch (finalDestiny) {
        case '#volta' :
            goToSection__scroll(finalDestiny, 80, 80, 700, 10);
            break;
        default:
            goToSection__scroll(finalDestiny, 0, 0, 700, 10);
            break;
    }
});