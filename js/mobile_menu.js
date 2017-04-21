$(document).ready(function() {
	var menu = $('.menu_button');
	var nav = $('.main_nav');

	$(menu).click(function() {
		$(nav).toggleClass('menu_hide');
	})
});