let mainSubnavHover = () => {
	let $mainSubnavItem = $('.main-subnav__item');
	$mainSubnavItem.hover(
		function () {
			let $self = $(this);
			let parentList = $self.closest('.main-subnav__list');
			if ($self.children('.main-subnav__list').length) {
				let catNavHeight = $self.children('.main-subnav__list').outerHeight();
				if (parentList.outerHeight() < catNavHeight) {
					parentList.css('height', catNavHeight)
				}
				parentList.css('width', 720)
			}
		},
		function () {
			let $self = $(this);
			let parentList = $self.closest('.main-subnav__list');
			parentList.css('height', 'auto');
			parentList.css('width', 'auto');
		}
	);
}
mainSubnavHover();