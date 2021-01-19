"use strict";

$(window).on('load', function () {
  console.log('Start');
  setupScrollTo('.scrollto-item-nav');
  setupScrollTo('.scrollto-item');
  setupMenu();
  setupLanding();
  console.log('End');
});

function setupLanding() {
  $('.video-popup').on('click', function () {
    $('.video-popup').fadeOut();
    $('body').removeClass('prevent-scroll');
  });
}

function setupMenu() {
  var controller = new ScrollMagic.Controller();
  $('.scrollto-item-nav').each(function () {
    var el = '#' + $(this).data('section-id');
    var $el = $('#' + $(this).data('section-id'));
    new ScrollMagic.Scene({
      triggerElement: $el[0],
      duration: $el.outerHeight()
    }).setClassToggle(this, "active") // add class toggle
    .triggerHook(0.1) // .addIndicators({name: 'indicator_'+el}) // add indicators (requires plugin)
    .addTo(controller).on("enter", callback);
  });
}

function callback(event) {
  $('#header-section-title').html($('.scrollto-item-nav.active').text());
}

function setupScrollTo(el) {
  $(el).on('click', function () {
    var s_to = $(this).attr('data-section-id');
    $('html, body').animate({
      scrollTop: $('#' + s_to).offset().top - $('header').outerHeight()
    }, 300);
  });
}

$(window).on('scroll', function () {
  if ($(window).scrollTop() > $(window).outerHeight() * 0.9) {
    $('nav').addClass('active');
  } else {
    $('nav').removeClass('active');
  }
});
"use strict";

var _this = void 0;

$('a').click(function (event) {
  var scrollOffset = 0;

  if ($(_this).is('a[href^="#"]') && $(_this).attr('href').length >= 2) {
    $('html, body').animate({
      scrollTop: $($.attr(_this, 'href')).offset().top + scrollOffset
    }, 1500);
    return false;
  }
});
