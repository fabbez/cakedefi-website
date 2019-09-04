$(function () {

  $('.hbg').click(function() {
    $('.menu').toggle();
    $(this).toggleClass('active');
  });

  // Carousel for timeline
  $(".timeline-slider").slick({
    appendArrows: '.timeline-nav',
    arrows: true,
    autoplay: false,
    autoplaySpeed: 5000,
    centerMode: true,
    dots: false,
    draggable: false,
    infinite: false,
    initialSlide: 4,
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    variableWidth: true,
    waitForAnimate: false
  });

});

document.addEventListener('DOMContentLoaded', function () {
  var scope = {};
  var trigger = new ScrollTrigger({
    toggle: {
      visible: 'scroll-visible',
      hidden: 'scroll-hidden'
    },
    once: false,
  }, document.body, window);

  trigger.callScope = scope;

  scope.pauseHeroAnimation = function () {
    // pause hero animation
  };

  scope.playHeroAnimation = function () {
    // play hero animation
  };
});