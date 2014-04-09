$(function() {
	$('a').click(function() {
		// console.log("Yay");
		$('html body').animate({
			scrollTop: $( this.hash ).offset().top
		}, 500);

		return false;
	});
});