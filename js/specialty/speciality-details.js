$(function(){
	$(".mid-nav").on("click",function(){
		var scroH = $(this).scrollTop();
//		console.log(scroH);
		
		$(this).addClass("on text-bold").siblings().removeClass("on text-bold");
		$(".content-page2 .content-detail").attr("style","top:0px;");
		if ($(this).is(".shop")) {
			$('body,html').scrollTop(0);
//			$("#evaluate").hide().prevAll("#shop").show();
		} else if ($(this).is(".detail")) {
//			$("#evaluate").hide().prevAll("#shop").show();
//			var topNum = $(".m-shop-mes-detailadd").position().top,
			
			var topNum = $(".show-detail").offset().top;
			
			htmlFontSiezNum = parseFloat($("html").css("font-size"));
			topNum = topNum - htmlFontSiezNum * 88 / 75;

			$('body,html').animate({
				"scrollTop": topNum.toFixed()
			}, 200);
		} else {
			var evaluates=$(".show-evaluate").offset().top;
			$(".func-bar .list.evaluate").addClass("on").siblings().removeClass("on");
			$('html,body').animate({scrollTop:evaluates},500);
			
		}
	})
	
	
	//详情页导航跟随
	$(window).scroll(function() {
		var scrollTop = $(document).scrollTop();
			detailH = $("#J_productdetail").offset().top;
		if(scrollTop > detailH) {
			$("#detailTab").addClass('fix-tab');
		} else {
			$("#detailTab").removeClass('fix-tab');
		}
//		console.log($("#detailTab .mid-nav"));
		var productH = $("#product-presen").offset().top; //产品介绍距离顶部的距离
		var evaluateH = $("#evaluate-presen").offset().top; //游客点评距离顶部的距离 
		var purchaseH = $("#purchase-presen").offset().top; //预定须知距离顶部的距离 
		var scroH = $(this).scrollTop();
		if(scroH >= (evaluateH - 55)) {
//			console.log("scroH="+scroH,"   游客点评evaluateH="+(evaluateH-55))
			$("#detailTab .mid-nav").eq(2).addClass("on").siblings().removeClass("on");
		} else if(scroH >= (purchaseH - 55)) {
			//console.log("scroH="+scroH,"   购买须知purchaseH="+purchaseH)
			$("#detailTab .mid-nav").eq(1).addClass("on").siblings().removeClass("on");
		} else if(scroH >= (productH - 55)) {
			//console.log("scroH="+scroH,"   产品介绍1productH="+(productH-55))
			$("#detailTab .mid-nav").eq(0).addClass("on").siblings().removeClass("on");
		} else if(scroH < productH) {
			//console.log("scroH="+scroH,"   产品介绍2productH="+productH)
			$("#detailTab .mid-nav").eq(0).addClass("on").siblings().removeClass("on");
		}
		
	});
	
	
})
