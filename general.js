$(document).ready(function(){
	$("a.mobile").click(function(){
		$(".sidebar").slideToggle('fast');
	});
	
	window.onesize = function(event) {
		if ($(window).width() >320 ){
			$(".sidebar").show();
		}
	};
	
});