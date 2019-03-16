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


// NOTIFICATIONS
$('.dismiss.error').click( function() {
  $('.notification.error').removeClass('show');
});
$('.dismiss--yes').click( function() {
  $('.notification.confirm').removeClass('show');
});
$('.dismiss--no').click( function() {
  $('.notification.confirm').removeClass('show');
});


// LOADING & WELCOME
$(document).ready(function() {
  setTimeout(function() {$('.indicator-gauge span').addClass('loaded')}, 0);
  setTimeout(function() {$('.loading').addClass('loaded')}, 0);
  setTimeout(function() {$('.welcome').addClass('show')}, 0);
});

$('.welcome .sign--in').click(function() {
  $('.welcome').removeClass('show');
  $('.sign-in-page').addClass('show');
});
$('.welcome .sign--up').click(function() {
  $('.welcome').removeClass('show');
  $('.sign-up-page').addClass('show');
});


// SIGN IN
$('.sign-in-page .sign--in').click(function() {
  $('.sign-in-page').removeClass('show');
  $('.home-page').addClass('show');
  $('.home-page .text.add-stuff').addClass('animated fadeInDown delay-1s');
  $('nav').removeClass('start');
});
$('.sign-in-page .sign--up').click(function() {
  $('.sign-in-page').removeClass('show');
  $('.sign-up-page').addClass('show');
});

$('.sign-in-page .slide--two').click(function() {
  $('.sign-in-page .slider.int').removeClass('slide-one');
  $('.sign-in-page .slider.int').addClass('slide-two');
});
$('.sign-in-page .slide--one').click(function() {
  $('.sign-in-page .slider.int').removeClass('slide-two');
  $('.sign-in-page .slider.int').addClass('slide-one');
});
$('.sign-in-page .slide--three').click(function() {
  $('.sign-in-page .slider.int').removeClass('slide-two');
  $('.sign-in-page .slider.int').addClass('slide-three');
});

$('.sign-in-page #password').on('change', function() {
  $('.sign-in-page .button.disabled.sign--in').removeClass('disabled');
  $('.sign-in-page .sign--in').click(function() {
    $('.sign-in-page').removeClass('show');
    $('.home-page').addClass('show');
    $('nav').removeClass('start');
  });
});
$('.sign-in-page #send-reset-email').on('change', function() {
  $('.button.disabled.sign-in-page .slide--three').removeClass('disabled');
});


// SIGN UP
$('.sign-up-page .slide--two').click(function() {
  $('.sign-up-page .slider.int').removeClass('slide-one');
  $('.sign-up-page .slider.int').addClass('slide-two');
});
$('.sign-up-page .slide--one').click(function() {
  $('.sign-up-page .slider.int').removeClass('slide-two');
  $('.sign-up-page .slider.int').addClass('slide-one');
});

$('.sign-up-page #password').on('change', function() {
  $('.sign-up-page .button.disabled.create--account').removeClass('disabled');
  $('.sign-up-page .create--account').click(function() {
    $('.sign-up-page').removeClass('show');
    $('.introduction-page').addClass('show');
    $('.introduction-page .slide.one figure.graphic').addClass('animated fadeInLeft delay-0.5s');
    $('.introduction-page .text.next').addClass('animated fadeInLeft delay-1s');
    $('.introduction-page .text.skip').addClass('animated fadeInLeft delay-1s');
  });
});
$('.sign-up-page .sign--in').click(function() {
  $('.sign-up-page').removeClass('show');
  $('.sign-in-page').addClass('show');
});

$('.sign-up-page .back--two').click(function() {$('.sign-up-page .slider.int').removeClass('slide-two');});


// INTRODUCTION
$('.introduction-page .slider--two').click(function() {
  $('.introduction-page .slider.int').addClass('slide-two');
  $('.introduction-page .slide.two figure').addClass('animated fadeInRight');
});
$('.introduction-page .slider--three').click(function() {
  $('.introduction-page .slider.int').addClass('slide-three');
  $('.introduction-page .slider.int').removeClass('slide-two');
  $('.introduction-page .slide.three figure').addClass('animated fadeInRight');
});
$('.introduction-page .slider--four').click(function() {
  $('.introduction-page .slider.int').addClass('slide-four');
  $('.introduction-page .slider.int').removeClass('slide-three');
  $('.introduction-page .slide.four figure').addClass('animated fadeInRight');
});
$('.introduction-page .slider--five').click(function() {
  $('.introduction-page .slider.int').addClass('slide-five');
  $('.introduction-page .slider.int').removeClass('slide-four');
  $('.introduction-page .slide.five figure').addClass('animated fadeInRight');
});
$('.introduction-page .slider--six').click(function() {
  $('.introduction-page .slider.int').addClass('slide-six');
  $('.introduction-page .slider.int').removeClass('slide-five');
  $('.introduction-page .slide.six figure').addClass('animated fadeInRight');
  $('.introduction-page .slide.six .button').addClass('animated fadeInRight');
  $('.introduction .text.skip a').addClass('hidden');
});

$('.introduction-page .text.skip').click(function() {
  $('.introduction-page').removeClass('show');
  $('.add-stuff-page').addClass('show');
});
$('.introduction-page .add--stuff').click(function() {
  $('.introduction-page').removeClass('show');
  $('.add-stuff-page').addClass('show');
  $('nav').removeClass('start');
});


// ADD STUFF
$('.add-stuff-page .slide--two').click(function() {$('.add-stuff-page .slider.int').addClass('slide-two');});
$('.add-stuff-page .slide--three').click(function() {$('.add-stuff-page .slider.int').addClass('slide-three');});

$('.add-stuff-page .back--two').click(function() {$('.add-stuff-page .slider.int').removeClass('slide-two');});
$('.add-stuff-page .back--three').click(function() {$('.add-stuff-page .slider.int').removeClass('slide-three');});
$('.add-stuff-page .back--done').click(function() {$('.add-stuff-page .slider.int').removeClass('slide-three');});

$('.add-stuff-page .pick.month ul li a').click(function() {$('.picks').addClass('picks-two');});
$('.add-stuff-page .pick.day ul li a').click(function() {
  $('.picks').removeClass('picks-two');
  $('.picks').addClass('picks-three');
});
$('.add-stuff-page .pick.year ul li a').click(function() {
  $('.add-stuff-page .slider.int').removeClass('slide-two');
  $('.picks').removeClass('picks-three');
});


// LAST TAB BLOCK
$('.block-tab').on('keydown', function(e) {if (e.keyCode == 9) e.preventDefault();});