let tabs = () => {
	$(document).on('click', '.tabs-navigation__item', function () {
		let tabName = $(this).attr('data-tab'),
			tabsBody = $(this).closest('.tabs').find('.tabs__body')[0],
			tab = $(tabsBody).find('.' + tabName);

		$(this)
			.addClass('tabs-navigation__item--active')
			.siblings()
			.removeClass('tabs-navigation__item--active');

		$(tab)
			.addClass('tab--active')
			.siblings()
			.removeClass('tab--active');

		if ($(tabsBody).find('.js-products-line-slider').length) {
			$('.js-products-line-slider').each(function () {
				$(this).slick('refresh');
			});
			$('.js-product-prev__slider').each(function () {
				$(this).slick('refresh');
			});
		}
	});
}

tabs();