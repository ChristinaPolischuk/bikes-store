let catalogNavHover = () => {
	let $catalogNavItem = $('.catalog-nav__item');
	$catalogNavItem.hover(
		function () {
			let $self = $(this);
			let parentList = $self.closest('.catalog-nav__list');
			if ($self.children('.catalog-nav__list').length) {
				let catNavHeight = $self.children('.catalog-nav__list').outerHeight();
				if (parentList.outerHeight() < catNavHeight) {
					parentList.css('height', catNavHeight)
				}
				parentList.css('width', 720)
			}
		},
		function () {
			let $self = $(this);
			let parentList = $self.closest('.catalog-nav__list');
			parentList.css('height', 'auto');
			parentList.css('width', 'auto');
		}
	);
}

let mobileMenu = function () {
	$(document).on('click', '.mobile-menu__toggle', function () {
		let mobileCatalog = $(this).parent();
		mobileCatalog.addClass('mobile-menu--open');
	});
	$(document).on('click', '.mobile-menu__close', function () {
		let mobileCatalog = $(this).closest('.mobile-menu');
		mobileCatalog.removeClass('mobile-menu--open');
	});
}

catalogNavHover();
mobileMenu();