(function ($) {
  $(document).ready(function () {
    // START

    // start header fixed
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      if (scroll > 90) {
        $('header').addClass('neo animate__animated animate__slideInDown');
      } else {
        $('header').removeClass('neo animate__animated animate__slideInDown');
      }
    });
    // end header fixed

    function toggleMobNav(currentWindowWidth, fixWindowWidth) {
      if (currentWindowWidth < fixWindowWidth) {
        $('.header__right').addClass('header__nav_mob');
        $('.header__right').removeClass('header__nav_desk');
      } else {
        $('.header__right').addClass('header__nav_desk');
        $('.header__right').removeClass('header__nav_mob');
      }
    }
    $(window).on('resize', function () {
      toggleMobNav($(window).width(), 1150);
    });
    toggleMobNav($(window).width(), 1150);
    $('.mob-burger').on('click', function () {
      if ($('.header__ul').css('display') == 'flex') {
        $('.header__ul').css('display', 'none');
        $('.header__ul').removeClass('animate__animated animate__fadeInRight');
        $('.mob-burger').removeClass('mob-burger_close');
      } else {
        $('.header__ul').css('display', 'flex');
        $('.header__ul').addClass('animate__animated animate__fadeInRight');
        $('.mob-burger').addClass('mob-burger_close');
      }
    });

    $('.simple-page .title h1').addClass('animate__animated animate__fadeInLeft');
    // start WOW
    var wow = new WOW({
      offset: 50,
    });
    wow.init();
    // end WOW
    console.log('test');
    // start easy scroll on Contact Us
    $('.order_btn').on('click', function (e) {
      $('html,body')
        .stop()
        .animate({ scrollTop: $('.feedback-form').offset().top - 120 }, 700);
      e.preventDefault();
    });
    // end easy scroll on Contact Us

    // END
  });
})(jQuery);
