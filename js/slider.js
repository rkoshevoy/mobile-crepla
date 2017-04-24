$(document).ready(function() {
	var firstDot = ('.first_dot');
	var secondDot = ('.second_dot');
	var firstSlide = ('.dignity_left');
	var secondSlide = ('.dignity_right');

	$(firstDot).click(function() {
		$(firstDot).addClass('active_dot'),
		$(secondDot).removeClass('active_dot'),
		$(secondSlide).css('display', 'none'),
		$(firstSlide).css('display', 'block');
	})

	$(secondDot).click(function() {
		$(secondDot).addClass('active_dot'),
		$(firstDot).removeClass('active_dot'),
		$(firstSlide).css('display', 'none'),
		$(secondSlide).css('display', 'block');
	})

	/*$(firstSlide).on("swiperight", function() {
		$(firstDot).addClass('active_dot'),
		$(secondDot).removeClass('active_dot'),
		$(secondSlide).css('display', 'none'),
		$(firstSlide).css('display', 'block');
	})

	$(secondSlide).on("swipeleft" function() {
		$(secondDot).addClass('active_dot'),
		$(firstDot).removeClass('active_dot'),
		$(firstSlide).css('display', 'none'),
		$(secondSlide).css('display', 'block');
	})*/
});