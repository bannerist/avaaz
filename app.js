! function($) {
	var PERIOD = 3000;

	var currentPartId = 0;

	init();

	function init() {
		$('.slogan-root').show();
		$('.slogan-root').children().hide();
		setInterval(switchPart, PERIOD);
		switchPart();
	}

	function switchPart() {
		if (currentPartId >= 4) {
			currentPartId = 0;
		}
		$('.slogan-root').children().hide();
		var part = $($('.slogan-root').children()[currentPartId]);
		part.slideDown();
		currentPartId++;
	}


}(window.jQuery);