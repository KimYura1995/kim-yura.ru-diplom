$(window).on('load', function () {
  $('.backgrounds-icons__item').removeClass('backgrounds-icons__item_start-position');
});

$(function() {
  $('.header').on('click', '#nav-btn', function() {
    $('#nav-list-mob').slideToggle(300);
  });

  $(window).resize(function () {
    if ($(window).width() >= 1024) {
      $('#nav-list-mob').hide();
    };
  });

  $('.header__btn, .ability__btn, .examples__btn, .footer-right-column__btn, .header__btn-mob').on('click', function() {
    scrollLock.disablePageScroll();
    $('#modal-form').css(
      {
        "display": "flex"
      }
    );
    $('#modal-form').animate(
      {
        "opacity": 1,
      }, 300
    );
  });

  $('.main').on('click', '#modal-btn-close', function() {
    scrollLock.enablePageScroll();
    $('#modal-form').animate({
        "opacity": 0
      }, 300, function() {
        $('#modal-form').css({
          "display": "none"
        });
      }
    );
  });

  $(document).mouseup(function (e){
    var div = $("#modal-window");
    if (!div.is(e.target) && div.has(e.target).length === 0 && div.is(":visible")) {
      scrollLock.enablePageScroll();
      $('#modal-form').animate({
        "opacity": 0
      }, 300, function() {
        $('#modal-form').css({
          "display": "none"
        });
      }
      );
    }
  });

  $('.examples__slider').slick({
    autoplay: false,
    infinite: true,
    variableWidth: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slider-btn slider-btn-prev" type="button" aria-label="Слайдер влево"></button>',
    nextArrow: '<button class="slider-btn slider-btn-next" type="button" aria-label="Слайдер вправо"></button>',
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  });
});
