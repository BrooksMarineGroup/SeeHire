$(function() {
	$('a').click(function() {
		$('html body').animate({
			scrollTop: $( this.hash ).offset().top - 50
		}, 500);
	});
});