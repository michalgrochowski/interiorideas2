// Change the size of the navbar after scrolling 50px from top

$(window).on("scroll touchmove", function () {
    $('.nav').toggleClass("nav--small", $(document).scrollTop() > 110);
    $('.nav__logo').toggleClass("nav__logo--small", $(document).scrollTop() > 110);
    $(".nav__list--mobile").toggleClass("nav__list--mobile-scrolled", $(document).scrollTop() > 70);
});

// Open mobile menu after clicking hamburger icon

$(".nav__hamburger").on("click touch", function() {
    $(".nav__hamburger").hide();
    $(".nav__close-menu").show();
    $(".nav__list--mobile").slideToggle();
})

// Close mobile menu after clicking X icon

$(".nav__close-menu").on("click touch", function() {
    $(".nav__hamburger").show();
    $(".nav__close-menu").hide();
    $(".nav__list--mobile").slideToggle();
})

// Mobile - After clicking a menu option slide to corresponding section and change the icon from hamburger to X and other way around

$(document).on('click', '.nav__link--mobile', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    var pos = $id.offset().top -80;
    $('body, html').animate({scrollTop: pos});
    $(".nav__hamburger").show();
    $(".nav__close-menu").hide();
    $(".nav__list--mobile").slideToggle();
});

// After clicking a menu option slide to corresponding section

$(document).on('click', '.nav__link', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    var pos = $id.offset().top -40;
    $('body, html').animate({scrollTop: pos});
});

// Show an arrow icon that send you to the top after scrolling 800px down

$('.scroll-top').click(function(){
		$('html, body').animate({scrollTop : 0},1000);
		return false;
	});

// Click event that scrolls page to the top after clicking an arrow key with "scroll-top" class

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 300) {
    $('.scroll-top').fadeIn("slow");
  } else {
    $('.scroll-top').fadeOut("slow");
  }
});