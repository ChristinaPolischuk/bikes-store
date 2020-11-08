let colors = ['#1089ff', '#f00', '#de5216', '#00FF00', '#30D5C8', '#ff69b4', '#ff69b4', '#f00', '#00BFFF', '#00FF00', '#f00', '#1089ff'];

// $('.js-product-prev__slider img').each(function (index, el) {
// 	el.setAttribute('data-color', colors[index]);
// });


let setAttr = function () {
	$('.js-product-prev__slider .slick-slide').each(function (index, el) {
		el.setAttribute('data-color', colors[index]);
	});
}

let productPrevSlider = function () {
	$('.js-product-prev__slider').each(function (idx) {
		let productPrevSliderClass = "product-prev-slider-" + idx;
		this.closest('.product-prev').classList.add(productPrevSliderClass);
		$(this).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			swipe: false,
			infinite: false,
			arrows: false,
			dots: true,
			appendDots: '.' + productPrevSliderClass + ' .product-prev__colors',
			customPaging: function (slider, i) {
				setAttr();
				let color = $(slider.$slides[i]).data('color');
				return '<span class="product-prev__color" style="background-color:' + color + '"></span>';
			}
		});
	});
}

let productLineSlider = function () {
	$('.js-products-line-slider').each(function (idx) {
		let productsLineSliderID = 'products-line-slider-' + idx;
		this.closest('.products-line-slider').id = productsLineSliderID;
		$(this).slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: false,
			prevArrow: '#' + productsLineSliderID + ' .products-line-slider__btn--prev',
			nextArrow: '#' + productsLineSliderID + ' .products-line-slider__btn--next',
			dots: true,
			appendDots: '#' + productsLineSliderID + ' .products-line-slider__dots',
			customPaging: function () {
				return '<span class="products-line-slider__dot"></span>';
			},
			responsive: [
				{
					breakpoint: 1139,
					settings: {
						slidesToShow: 3,

					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 550,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	});
}

productPrevSlider();
productLineSlider();