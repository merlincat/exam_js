"use strict";

$(function () {
  $("#slider").lightSlider({
    item: 1,
    mode: 'fade',
    autoWidth: false,
    slideMove: 1,
    // slidemove will be 1 if loop is true
    slideMargin: 0,
    speed: 3000,
    //ms'
    auto: true,
    loop: true,
    pause: 3500,
    controls: false,
    vertical: true,
    verticalHeight: 720,
    verticalSwiping: true // responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ],

  });
  $("#cards_list").lightSlider({
    item: 3,
    mode: 'slide',
    autoWidth: false,
    slideMove: 1,
    // slidemove will be 1 if loop is true
    slideMargin: 30,
    speed: 2000,
    //ms'
    auto: true,
    loop: true,
    pause: 2500,
    controls: true // verticalHeight:720,
    // verticalSwiping: true,

  });
});
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 70) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
});