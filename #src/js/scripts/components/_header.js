let $header = $('.header');
let scrollPrev = 0;
let scrollToTop = 0;

$(window).scroll(function () {
	var scrolled = $(window).scrollTop();
	if (scrolled > 100 && scrolled > scrollPrev) {
		$header.addClass('header-out');
		scrollToTop = scrolled;
	} else if (scrolled < scrollToTop - 250 || scrolled < 250) {
		$header.removeClass('header-out');
	}
	scrollPrev = scrolled;
});