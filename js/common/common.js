$(function() {
	
	/*
	 * 返回顶部
	 * 
	 * */
	$(window).scroll(function () {
	    if ($(this).scrollTop() > 500) {
	        $(".toolbar").fadeIn(500);
	    } else {
	        $(".toolbar").fadeOut(500);
	    }
	});
	$(".toolbar").on("click", function() {
		$("html,body").animate({
			scrollTop: 0
		}, 300);
	})
	
	
	var mySwiper = new Swiper('.banner .swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            disableOnInteraction: false, //手动滑动之后不打断播放
            delay: 2000
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },


    })
    var options = {
        alignment: "center",//居中显示
        // currentPage: pageIndex,//当前页数
        // totalPages: total,//总页数 注意不是总条数
        // pageUrl: function(type, page, current){
        //         if (page==current) {
        //             return "javascript:void(0)";
        //         } else {
        //             return "/Articles?pageSize=15&pageIndex="+page;
        //         }
        //     }
    }
	
	
	
})