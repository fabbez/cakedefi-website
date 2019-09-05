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
    initialSlide: 2,
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
    addHeight: false,
    centerVertical: false,
    once: false,
  }, document.body, window);

  trigger.callScope = scope;

  scope.heroOut = function () {
    $('body > header').hide().addClass('sticky').fadeIn();
    // pause hero animation
  };

  scope.heroIn = function () {
    $('body > header').fadeOut(function() {
      $(this).removeClass('sticky').show();
    });
    // play hero animation
  };
});