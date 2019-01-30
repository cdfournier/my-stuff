// ANIMATION END
var animationEnd = (function(el) {
  var animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    WebkitAnimation: 'webkitAnimationEnd',
  };

  for (var t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
})(document.createElement('div'));


// NAV PAGE EXITS
$('.exit-home').click(function() {
  $('body').addClass('exit').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
  function() {
    window.location.href = '../home/index.html';
  });
});

$('.exit-stuff').click(function() {
  $('body').addClass('exit').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
  function() {
    window.location.href = '../stuff/index.html';
  });
});

$('.exit-profile').click(function() {
  $('body').addClass('exit').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
  function() {
    window.location.href = '../profile/index.html';
  });
});

$('.exit-settings').click(function() {
  $('body').addClass('exit').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
  function() {
    window.location.href = '../settings/index.html';
  });
});



// CAROUSELS
var $carousel = $('.carousel').flickity({
  prevNextButtons: false,
  pageDots: false,
  draggable: false,
  wrapAround: false,
  selectedAttraction: 0.15,
  friction: 0.8,
  adaptiveHeight: false
});
// Flickity instance
var flkty = $carousel.data('flickity');
// elements
var $cellButtonGroup = $('.button-group--cells');
var $cellButtons = $cellButtonGroup.find('.button');

// update selected cellButtons
$carousel.on( 'select.flickity', function() {
  $cellButtons.filter('.is-selected')
    .removeClass('is-selected');
  $cellButtons.eq( flkty.selectedIndex )
    .addClass('is-selected');
});

// select cell on button click
$cellButtonGroup.on( 'click', '.button', function() {
  var index = $(this).index();
  $carousel.flickity( 'select', index );
});
// previous
$('.button--previous').on( 'click', function() {
  $carousel.flickity('previous');
});
// next
$('.button--next').on( 'click', function() {
  $carousel.flickity('next');
});



// SHOW/HIDE PASSWORDS
$(".show-hide-password").click(function() {
  $(this).toggleClass("la-eye-slash la-eye");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});


// SMOOTH SCROLL
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#!"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - $("header").outerHeight(true)
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });