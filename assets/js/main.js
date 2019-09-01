$(function () {

  // Carousel for timeline
  $(".timeline").slick({
    autoplay: false,
    autoplaySpeed: 5000,
    infinite: true,
    arrows: false,
    dots: true,
    appendDots: '.story-dots',
    pauseOnDotsHover: true,
    draggable: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    fade: true,
    speed: 500,
    waitForAnimate: false,
    mobileFirst: true
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