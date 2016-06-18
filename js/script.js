$(function() {

	$(".lever_container button").mouseup(function(event){
		$(this).removeClass('activate');
	});

	$('.lever_container button').mousedown(function() {
		$(this).addClass('activate');
		$('#slot1').carousel({
			interval: 222,
			wrap: false,
		}).carousel(0);
		$('#slot2').carousel({
			interval: 189,
			wrap: false,
		}).carousel(0);
		$('#slot3').carousel({
			interval: 135,
			wrap: false,
		}).carousel(0);

		setTimeout("$('.lever_container button').mouseup();", 1500);
		
	});

	setTimeout("$('.lever_container button').mousedown();", 4000);

});
