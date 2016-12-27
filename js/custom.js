$(document).ready(function(){
	$(window).load(function(){
		var banHgt = $(".deskBanner").height();
		var formHgt = $(".bannerForm form").outerHeight();
		var banrH = banHgt - formHgt
		var actBanHgt = banrH/2
		$(".bannerForm form").css("margin-top", actBanHgt);
		$(".bannerForm form").css("opacity", "1");
	});
	$(window).resize(function(){
		var banHgt = $(".deskBanner").height();
		var formHgt = $(".bannerForm form").outerHeight();
		var banrH = banHgt - formHgt
		var actBanHgt = banrH/2
		$(".bannerForm form").css("margin-top", actBanHgt);
		$(".bannerForm form").css("opacity", "1");
	});
	$('.pop1').click(function(){
        $('#pop1').simplePopup();
    });
    $('.pop2').click(function(){
        $('#pop2').simplePopup();
    });
    $('.log-forgPass').click(function(){
    	$('#pop2').fadeOut();
    });
});
