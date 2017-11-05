
$(function(){


	$(window).on("scroll",function(){

		var gao = $(this).scrollTop();

		if(gao > 99){
			$(".cezuo-slider").addClass("celan-fixed");
		}else{
			$(".cezuo-slider").removeClass("celan-fixed");
		}
	});


	if($(".MessShow-tt h4").html() == "签证类型概述"){

		$(".ul-1>li[data-mess='签证类型概述']").find(".ul-2").css("display","block");
		$(".ul-2>li[data-mess='签证类型概述']").find(".ul-3").css("display","block");

	}


	
});