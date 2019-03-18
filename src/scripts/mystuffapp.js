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


// LAST TAB BLOCK
$('.block-tab').on('keydown', function(e) {if (e.keyCode == 9) e.preventDefault();});


// NAV
$('nav .nav--home').click(function() {
  $('.stuff-page').removeClass('show');
  $('.add-stuff-page').removeClass('show');
  $('.profile-page').removeClass('show');
  $('.home-page').addClass('show');
  $('.home-page .text.add-more-stuff').addClass('animated fadeInDown delay-1s');
  setTimeout(function() {$('.home-page .text.add-more-stuff').removeClass('animated fadeInDown delay-1s')}, 2000);
});
$('nav .nav--stuff').click(function() {
  $('.home-page').removeClass('show');
  $('.add-stuff-page').removeClass('show');
  $('.profile-page').removeClass('show');
  $('.stuff-page .slider.int').removeClass('slide-two');
  $('.stuff-page .slider.int').removeClass('slide-three');
  $('.stuff-page .slider.int').removeClass('slide-four');
  $('.stuff-page .slider.int').removeClass('slide-five');
  $('.stuff-page .slider.int').addClass('slide-one');
  $('.stuff-page').addClass('show');
  $('.stuff-page .text.add-more-stuff').addClass('animated fadeInDown delay-1s');
  setTimeout(function() {$('.stuff-page .text.add-more-stuff').removeClass('animated fadeInDown delay-1s')}, 2000);
});
$('nav .nav--profile').click(function() {
  $('.home-page').removeClass('show');
  $('.stuff-page').removeClass('show');
  $('.add-stuff-page').removeClass('show');
  $('.profile-page').addClass('show');
});


// LOADING & WELCOME
$(document).ready(function() {
  setTimeout(function() {$('.indicator-gauge span').addClass('loaded')}, 1000);
  setTimeout(function() {$('.loading').addClass('loaded')}, 6000);
  setTimeout(function() {$('.welcome-page').addClass('show')}, 6000);
});


// WELCOME NAVIGATION
$('.welcome-page .sign--in').click(function() {
  $('.welcome-page').removeClass('show');
  $('.sign-in-page').addClass('show');
});
$('.welcome-page .sign--up').click(function() {
  $('.welcome-page').removeClass('show');
  $('.sign-up-page').addClass('show');
});


// SIGN IN NAVIGATION
$('.sign-in-page .sign--in').click(function() {
  $('.sign-in-page').removeClass('show');
  $('.home-page').addClass('show');
  $('nav').removeClass('start');
  $('.home-page .text.add-more-stuff').addClass('animated fadeInDown delay-1s');
  setTimeout(function() {$('.home-page .text.add-more-stuff').removeClass('animated fadeInDown delay-1s')}, 2000);
});
$('.sign-in-page .sign--up').click(function() {
  $('.sign-in-page').removeClass('show');
  $('.sign-up-page').addClass('show');
});


// SIGN IN SLIDES
$('.sign-in-page .slide--one').click(function() {
  $('.sign-in-page .slider.int').removeClass('slide-two');
  $('.sign-in-page .slider.int').addClass('slide-one');
});
$('.sign-in-page .slide--two').click(function() {
  $('.sign-in-page .slider.int').removeClass('slide-one');
  $('.sign-in-page .slider.int').addClass('slide-two');
});
$('.sign-in-page .slide--three').click(function() {
  $('.sign-in-page .slider.int').removeClass('slide-two');
  $('.sign-in-page .slider.int').addClass('slide-three');
});


// SIGN UP NAVIGATION
$('.sign-up-page .create--account').click(function() {
  $('.sign-up-page').removeClass('show');
  $('.introduction-page').addClass('show');
  $('.introduction-page .slide.one figure.graphic').addClass('animated fadeInLeft delay-1s');
  setTimeout(function() {$('.introduction-page .slide.one figure.graphic').removeClass('animated fadeInLeft delay-1s')}, 2000);
  $('.introduction-page .slide.one .text.next').addClass('animated fadeInLeft delay-1s');
  setTimeout(function() {$('.introduction-page .slide.one .text.next').removeClass('animated fadeInLeft delay-1s')}, 3000);
  $('.introduction-page .text.skip').addClass('animated fadeInLeft delay-1s');
  setTimeout(function() {$('.introduction-page .text.skip').removeClass('animated fadeInLeft delay-1s')}, 3000);
});
$('.sign-up-page .sign--in').click(function() {
  $('.sign-up-page').removeClass('show');
  $('.sign-in-page').addClass('show');
});


// SIGN UP SLIDES
$('.sign-up-page .slide--two').click(function() {
  $('.sign-up-page .slider.int').removeClass('slide-one');
  $('.sign-up-page .slider.int').addClass('slide-two');
});


// SIGN UP BACK BUTTONS
$('.sign-up-page .back--two').click(function() {
  $('.sign-up-page .slider.int').removeClass('slide-two');
});


// INTRODUCTION NAVIGATION
$('.introduction-page .text.skip').click(function() {
  $('.introduction-page').removeClass('show');
  $('.add-stuff-page').addClass('show');
  $('nav').removeClass('start');
});
$('.introduction-page .button.add--stuff').click(function() {
  $('.introduction-page').removeClass('show');
  $('.add-stuff-page').addClass('show');
  $('nav').removeClass('start');
});


// INTRODUCTION SLIDES
$('.introduction-page .slide--two').click(function() {
  $('.introduction-page .slider.int').addClass('slide-two');
  $('.introduction-page .slide.two figure').addClass('animated fadeInRight');
  setTimeout(function() {$('.introduction-page .slide.two figure').removeClass('animated fadeInRight')}, 2000);
});
$('.introduction-page .slide--three').click(function() {
  $('.introduction-page .slider.int').addClass('slide-three');
  $('.introduction-page .slider.int').removeClass('slide-two');
  $('.introduction-page .slide.three figure').addClass('animated fadeInRight');
  setTimeout(function() {$('.introduction-page .slide.three figure').removeClass('animated fadeInRight')}, 2000);
});
$('.introduction-page .slide--four').click(function() {
  $('.introduction-page .slider.int').addClass('slide-four');
  $('.introduction-page .slider.int').removeClass('slide-three');
  $('.introduction-page .slide.four figure').addClass('animated fadeInRight');
  setTimeout(function() {$('.introduction-page .slide.four figure').removeClass('animated fadeInRight')}, 2000);
});
$('.introduction-page .slide--five').click(function() {
  $('.introduction-page .slider.int').addClass('slide-five');
  $('.introduction-page .slider.int').removeClass('slide-four');
  $('.introduction-page .slide.five figure').addClass('animated fadeInRight');
  setTimeout(function() {$('.introduction-page .slide.five figure').removeClass('animated fadeInRight')}, 2000);
});
$('.introduction-page .slide--six').click(function() {
  $('.introduction-page .slider.int').addClass('slide-six');
  $('.introduction-page .slider.int').removeClass('slide-five');
  $('.introduction-page .text.skip').addClass('animated fadeOutLeft delay-0.5s');
  $('.introduction-page .slide.six figure').addClass('animated fadeInRight');
  setTimeout(function() {$('.introduction-page .slide.six figure').removeClass('animated fadeInRight')}, 2000);
});


// HOME NAVIGATION
$('.home-page .add--stuff').click(function() {
  $('.home-page').removeClass('show');
  $('.add-stuff-page').addClass('show');
});


// STUFF NAVIGATION
$('.stuff-page .add--stuff').click(function() {
  $('.stuff-page').removeClass('show');
  $('.add-stuff-page').addClass('show');
});


// STUFF SLIDES
$('.stuff-page .slide--two').click(function() {
  $('.stuff-page .slider.int').addClass('slide-two');
  $('.stuff-page .slider.int').removeClass('slide-one');
});
$('.stuff-page .slide--three').click(function() {
  $('.stuff-page .slider.int').addClass('slide-three');
  $('.stuff-page .slider.int').removeClass('slide-two');
});
$('.stuff-page .slide--four').click(function() {
  $('.stuff-page .slider.int').addClass('slide-four');
  $('.stuff-page .slider.int').removeClass('slide-three');
});
$('.stuff-page .slide--five').click(function() {
  $('.stuff-page .slider.int').addClass('slide-five');
  $('.stuff-page .slider.int').removeClass('slide-four');
});


// STUFF BACK
$('.stuff-page .back--three').click(function() {
  $('.stuff-page .slider.int').removeClass('slide-three');
  $('.stuff-page .slider.int').addClass('slide-two');
});
$('.stuff-page .back--four').click(function() {
  $('.stuff-page .slider.int').removeClass('slide-four');
  $('.stuff-page .slider.int').addClass('slide-two');
});
$('.stuff-page .back--five').click(function() {
  $('.stuff-page .slider.int').removeClass('slide-five');
  $('.stuff-page .slider.int').addClass('slide-four');
});


// STUFF DATE PICKER
$('.stuff-page .pick.month ul li a').click(function() {$('.picks').addClass('picks-two');});
$('.stuff-page .pick.day ul li a').click(function() {
  $('.picks').removeClass('picks-two');
  $('.picks').addClass('picks-three');
});
$('.stuff-page .pick.year ul li a').click(function() {
  $('.stuff-page .slider.int').removeClass('slide-two');
  $('.picks').removeClass('picks-three');
  $('.stuff-page .slider.int').removeClass('slide-three');
  $('.stuff-page .slider.int').addClass('slide-two');
});


// STUFF ACTIONS
$('.stuff-page .changes--save').click(function() {
  $('.stuff-page .slider.int').removeClass('slide-two');
});
$('.stuff-page .changes--cancel').click(function() {
  $('.stuff-page .slider.int').removeClass('slide-two');
});
$('.stuff-page .back--done').click(function() {
  $('.stuff-page .slide.four .form-container').removeClass('show');
  $('.add--attachment input[type="file"]').val("");
  $('.stuff-page .slider.int').removeClass('slide-four');
  $('.stuff-page .slider.int').addClass('slide-two');
});
$('.stuff-page .attachment--save').click(function() {
  $('.stuff-page .slider.int').removeClass('slide-five');
  $('.stuff-page .slider.int').addClass('slide-four');
});
$('.stuff-page .attachment--cancel').click(function() {
  $('.stuff-page .slider.int').removeClass('slide-five');
  $('.stuff-page .slider.int').addClass('slide-four');
});


// STUFF ATTACHMENTS
$('.stuff-page .add--attachment').on('change', function() {
  $('.stuff-page .slide.four .form-container').addClass('show');
});
$('.stuff-page .add--another').click(function() {
  $('.stuff-page .slide.four .form-container').removeClass('show');
  $('.add--attachment input[type="file"]').val("");
});


// ADD STUFF SLIDES
$('.add-stuff-page .slide--two').click(function() {
  $('.add-stuff-page .slider.int').addClass('slide-two');
});
$('.add-stuff-page .slide--three').click(function() {
  $('.add-stuff-page .slider.int').addClass('slide-three');
  $('.add-stuff-page .slider.int').removeClass('slide-two');
});


// ADD STUFF BACK
$('.add-stuff-page .back--two').click(function() {
  $('.add-stuff-page .slider.int').removeClass('slide-two');
});
$('.add-stuff-page .back--three').click(function() {
  $('.add-stuff-page .slider.int').removeClass('slide-three');
});


// ADD STUFF ACTIONS
$('.add-stuff-page .back--done').click(function() {
  $('.add-stuff-page .slide.three .form-container').removeClass('show');
  $('.add--attachment input[type="file"]').val("");
  $('.add-stuff-page .slider.int').removeClass('slide-three');
});


// ADD STUFF DATE PICKER
$('.add-stuff-page .pick.month ul li a').click(function() {$('.picks').addClass('picks-two');});
$('.add-stuff-page .pick.day ul li a').click(function() {
  $('.picks').removeClass('picks-two');
  $('.picks').addClass('picks-three');
});
$('.add-stuff-page .pick.year ul li a').click(function() {
  $('.add-stuff-page .slider.int').removeClass('slide-two');
  $('.picks').removeClass('picks-three');
  $('.stuff-page .slider.int').removeClass('slide-three');
  $('.stuff-page .slider.int').addClass('slide-two');
});


// ADD STUFF ATTACHMENTS
$('.add-stuff-page .add--attachment').on('change', function() {
  $('.add-stuff-page .slide.three .form-container').addClass('show');
});
$('.add-stuff-page .add--another').click(function() {
  $('.add-stuff-page .slide.three .form-container').removeClass('show');
  $('.add--attachment input[type="file"]').val("");
});


// PROFILE NAVIGATION
$('.profile-page .sign--out').click(function() {
  $('.profile-page').removeClass('show');
  $('.sign-out-page').addClass('show');
  $('nav').addClass('start');
});


// PROFILE SLIDES
$('.profile-page .edit--name').click(function() {
  $('.profile-page .slider.int').addClass('slide-two');
});
$('.profile-page .edit--email').click(function() {
  $('.profile-page .slider.int').addClass('slide-three');
});
$('.profile-page .edit--password').click(function() {
  $('.profile-page .slider.int').addClass('slide-four');
});


// PROFILE BACK
$('.profile-page .back--two').click(function() {
  $('.profile-page .slider.int').removeClass('slide-two');
});
$('.profile-page .back--three').click(function() {
  $('.profile-page .slider.int').removeClass('slide-three');
});
$('.profile-page .back--four').click(function() {
  $('.profile-page .slider.int').removeClass('slide-four');
});


// PROFILE ACTIONS
$('.profile-page .save--name').click(function() {
  $('.profile-page .slider.int').removeClass('slide-two');
});
$('.profile-page .save--email').click(function() {
  $('.profile-page .slider.int').removeClass('slide-three');
});
$('.profile-page .save--password').click(function() {
  $('.profile-page .slider.int').removeClass('slide-four');
});


// SIGN OUT NAVIGATION
$('.sign-out-page .sign--in').click(function() {
  $('.sign-out-page').removeClass('show');
  $('.home-page').addClass('show');
  $('nav').removeClass('start');
  $('.home-page .text.add-more-stuff').addClass('animated fadeInDown delay-1s');
  setTimeout(function() {$('.home-page .text.add-more-stuff').removeClass('animated fadeInDown delay-1s')}, 2000);
});


// SIGN OUT SLIDES
$('.sign-out-page .slide--two').click(function() {
  $('.sign-out-page .slider.int').addClass('slide-two');
});
$('.sign-out-page .slide--three').click(function() {
  $('.sign-out-page .slider.int').addClass('slide-three');
  $('.sign-out-page .slider.int').removeClass('slide-two');
});


// SIGN OUT ACTIONS
$('.sign-out-page .slide--one').click(function() {
  $('.sign-out-page .slider.int').removeClass('slide-two');
});