$(document).ready(function(){
	$('.header_burger').click(function(event){
		$('.header_burger,.header_menu, .act_button_header').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
