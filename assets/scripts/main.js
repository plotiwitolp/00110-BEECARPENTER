(function ($) {
  $(document).ready(function () {
    // START

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
        $('.mob-burger').removeClass('mob-burger_close');
      } else {
        $('.header__ul').css('display', 'flex');
        $('.mob-burger').addClass('mob-burger_close');
      }
    });
    // END
  });
})(jQuery);
