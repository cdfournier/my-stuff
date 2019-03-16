// FLIP PAGE
$('.current-page .action--type').click(function() {
  $('.current-page').removeClass('show');
  $('.next-page').addClass('show');
});


// FLIP PAGE WITH ANIMATED ELEMENTS
$('.current-page .action--type').click(function() {
  $('.current-page').removeClass('show');
  $('.next-page').addClass('show');
  $('.next-page .action--type').addClass('animated fadeInDown delay-1s');
  setTimeout(function() {$('.next-page .action--type').removeClass('animated fadeInDown delay-1s')}, 2000);
});


// FLIP PAGE WITH NAV SHOW
$('.current-page .action--type').click(function() {
  $('.current-page').removeClass('show');
  $('.next-page').addClass('show');
  $('nav').removeClass('start');
});


// FLIP PAGE WITH NAV HIDE
$('.current-page .action--type').click(function() {
  $('.current-page').removeClass('show');
  $('.next-page').addClass('show');
  $('nav').addClass('start');
});


// FLIP PAGE WITH ANIMATED ELEMENTS & NAV SHOW
$('.current-page .action--type').click(function() {
  $('.current-page').removeClass('show');
  $('.next-page').addClass('show');
  $('nav').removeClass('start');
  $('.next-page .action--type').addClass('animated fadeInDown delay-1s');
  setTimeout(function() {$('.next-page .action--type').removeClass('animated fadeInDown delay-1s')}, 2000);
});


// SLIDES
$('.slide--two').click(function() {
  $('.slider.int').addClass('slide-two');
});
$('.slide--three').click(function() {
  $('.slider.int').addClass('slide-three');
  $('.slider.int').removeClass('slide-two');
});
$('.slide--four').click(function() {
  $('.slider.int').addClass('slide-four');
  $('.slider.int').removeClass('slide-three');
});
$('.slide--five').click(function() {
  $('.slider.int').addClass('slide-five');
  $('.slider.int').removeClass('slide-four');
});
$('.slide--six').click(function() {
  $('.slider.int').addClass('slide-six');
  $('.slider.int').removeClass('slide-five');
});


// SLIDERS WITH ANIMATION
$('.slide--two').click(function() {
  $('.slider.int').addClass('slide-two');
  $('.slide.two figure').addClass('animated fadeInRight');
  setTimeout(function() {$('.slide.two figure').removeClass('animated fadeInRight')}, 2000);
});
$('.slide--three').click(function() {
  $('.slider.int').addClass('slide-three');
  $('.slider.int').removeClass('slide-two');
  $('.slide.three figure').addClass('animated fadeInRight');
  setTimeout(function() {$('.slide.three figure').removeClass('animated fadeInRight')}, 2000);
});
$('.slide--four').click(function() {
  $('.slider.int').addClass('slide-four');
  $('.slider.int').removeClass('slide-three');
  $('.slide.four figure').addClass('animated fadeInRight');
  setTimeout(function() {$('.slide.four figure').removeClass('animated fadeInRight')}, 2000);
});
$('.slide--five').click(function() {
  $('.slider.int').addClass('slide-five');
  $('.slider.int').removeClass('slide-four');
  $('.slide.five figure').addClass('animated fadeInRight');
  setTimeout(function() {$('.slide.five figure').removeClass('animated fadeInRight')}, 2000);
});
$('.slide--six').click(function() {
  $('.slider.int').addClass('slide-six');
  $('.slider.int').removeClass('slide-five');
  $('.slide.six figure').addClass('animated fadeInRight');
  setTimeout(function() {$('.slide.six figure').removeClass('animated fadeInRight')}, 2000);
});


// BACK
$('.back--two').click(function() {
  $('.slider.int').removeClass('slide-two');
});
$('.back--three').click(function() {
  $('.slider.int').removeClass('slide-three');
  $('.slider.int').addClass('slide-two');
});
$('.back--four').click(function() {
  $('.slider.int').removeClass('slide-four');
  $('.slider.int').addClass('slide-two');
});
$('.back--five').click(function() {
  $('.slider.int').removeClass('slide-five');
  $('.slider.int').addClass('slide-four');
});


// DATE PICKER
$('.pick.month ul li a').click(function() {$('.picks').addClass('picks-two');});
$('.pick.day ul li a').click(function() {
  $('.picks').removeClass('picks-two');
  $('.picks').addClass('picks-three');
});
$('.pick.year ul li a').click(function() {
  $('.slider.int').removeClass('slide-two');
  $('.picks').removeClass('picks-three');
  $('.slider.int').removeClass('slide-three');
  $('.slider.int').addClass('slide-two');
});
