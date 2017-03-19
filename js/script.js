$(document).ready(function(event) {
	$(".tap").click(function(clickEvent) {
		if ($(".tap").hasClass("active")) {
			$(".water").stop()
			$(".tap").removeClass('active')
			$('.waterleak').removeClass('active')
		} else {
			$(".tap").addClass('active')
			$('.waterleak').addClass('active')
				$(".water").animate({height: 0 },19000)
		}
	});
});