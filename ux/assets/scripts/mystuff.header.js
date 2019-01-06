// HEADROOM
var myElement = document.querySelector("header");
var headroom  = new Headroom(myElement);
headroom.init(); 

// MAIN PADDING
var headerHeight = header.offsetHeight;
$("main").css("padding-top", headerHeight);