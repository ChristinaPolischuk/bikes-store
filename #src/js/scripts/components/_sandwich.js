let sandwich = function () {
	$(document.body).on('click', '.mobile-nav__header', function () {
		let $self = $(this);
		$self.toggleClass('sandwich--active');
	});
}

sandwich();