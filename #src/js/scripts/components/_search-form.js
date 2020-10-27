let openSearchForm = () => {
	$(document).on('click', '.search__icon', function () {
		let $searchWrapper = $(this).parent();
		if ($searchWrapper.hasClass('search--open')) {
			$searchWrapper.removeClass('search--open');
		} else {
			$searchWrapper.addClass('search--open');
		}
	});
}
let clearSearchForm = () => {
	$(document).on('click', '.search__clear', function () {
		let searchInpVal = $(this).prev();
		searchInpVal.val('');
	});
}
openSearchForm();
clearSearchForm();