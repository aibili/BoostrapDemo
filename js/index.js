
$(function(){


	$(window).on("resize",function(){

		var screen_width = $(this).width();


	});


	$(window).on("scroll",function(){
		var gao = $(this).scrollTop();
		
		if(gao > 100){
			$(".celan-jiantou").fadeIn();
			$(".ceshi100").fadeIn();
		}else{
			$(".celan-jiantou").fadeOut();
			$(".ceshi100").fadeOut();
		}
	});


	$(".celan-jiantou,.ft-back").on("click",function(){

		$("html,body").animate({
			"scrollTop": 0
		},1000);
	});



	
});