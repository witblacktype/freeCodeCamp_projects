$(document).ready(function(){
  $(function() {
    $('.nav-tabs a').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
    });
  });
  $(window).load(function(){
    var h1 = $('.card-img').height();
    var h2 = $('.banner').innerHeight();
    var height = h1 + h2;
    $('.card').css('height', height + 'px' );
    $('.card-text').css('height', height + 'px');
  });
  $(window).resize(function(){
    var h1 = $('.card-img').innerHeight();
    var h2 = $('.banner').innerHeight();
    var height = h1 + h2;
    $('.card').css('height', height + 'px' );
    $('.card-text').css('height', height + 'px');
    $('.card-text').css('margin-top', '0px');
    $('.card-detils').animate({
      opacity: 1
      }, 500, function(){
        //animation callback
    });
  });
  // Card Controller
  $('.card-text').click(function(){
    /* Collapse other open cards */
    $('.card-details.open').css('margin-top', '0px');
    /* Animation to Move all text content into view */
    $('.card-text.open').css('margin-top', '0px');
    $('.card-text.open').find('.card-details').animate({
        opacity: 0
    }, 0, function(){
      //animation callback
    });
    var $control = $('.card-text.open').find('.icon-angle-double-up');
    $({deg: -180}).animate({deg: 0}, {
        duration: 500,
        step: function(now) {
            // in the step-callback (that is fired each step of the animation),
            // you can use the `now` paramter which contains the current
            // animation-position (`0` up to `angle`)
            $control.css({
                transform: 'rotate(' + now + 'deg)'
            });
        },
        delay: 450
    });
    $('.card-text.open').removeClass('open');


    if($(this).css('margin-top') != '0px'){
      $(this).css('margin-top', '0px');
      var $elem = $(this).find('.icon-angle-double-up');
      $({deg: -180}).animate({deg: 0}, {
          duration: 500,
          step: function(now) {
              // in the step-callback (that is fired each step of the animation),
              // you can use the `now` paramter which contains the current
              // animation-position (`0` up to `angle`)
              $elem.css({
                  transform: 'rotate(' + now + 'deg)'
              });
          },
          delay: 450
      });
      $(this).find('.card-details').animate({
          opacity: 0
      }, 0, function(){
        //animation callback
      });
      $(this).removeClass('open');
    }
    else{
      $(this).addClass('open');
      var height = $(this).siblings('.card-img').height();
      $(this).css('margin-top', '-' + height + 'px');
      var $elem = $(this).find('.icon-angle-double-up');
      $({deg: 0}).animate({deg: -180}, {
          duration: 500,
          step: function(now) {
              $elem.css({
                  transform: 'rotate(' + now + 'deg)'
              });
          },
          delay: 450
      });
      $(this).find('.card-details').animate({
          opacity: 1
      }, 500, function(){
        //animation callback
      });
    }
  });
});
