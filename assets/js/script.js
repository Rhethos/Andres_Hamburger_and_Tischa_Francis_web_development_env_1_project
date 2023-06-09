$(window).scroll(function(){
	var scroll = $(window).scrollTop();

	if (scroll >= 100) {
		$(".header").addClass("header-background");
	} else {
		$(".header").removeClass("header-background");
	}
});