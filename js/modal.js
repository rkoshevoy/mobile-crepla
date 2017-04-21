$(document).ready(function() {
	var modal_button =$('.button_modal');
	var modal = $('.modal');
	var modal_close = $('.close');

	$(modal_button).click(function() {
		$(modal).removeClass('modal_hide');
		$(modal).addClass('animated fadeIn');
	})

	$(modal_close).click(function() {
		$(modal).addClass('modal_hide');
	})
});