let bannerSlider = () => {
	$('.js-banner').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '.banner__navigation--prev',
		nextArrow: '.banner__navigation--next',
		dots: true,
		customPaging: function (slider, i) {
			return '<a class="banner__dot" href="#"></a>';
		},
		appendDots: '.banner__dots',
		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows: false
				}
			}
		]
	});
}

bannerSlider();