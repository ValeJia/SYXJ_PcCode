
    var ScenicGrade = '';
    var listStr = "";
    var hostListStr = "";
    var sortBy = 'score';
    var num = 1;
    var sortType = "1";
    var totalPage = 1;
    (function () {

        url = "http://www.shouyouxinjiang.com/frontshow/productlist/productList";
        // url = "http://192.168.90.170:8082/frontshow/productlist/productList";
        $.ajaxSettings.async = false;
        $("#cat").val("33306aaad7b445c79a6a0196cb2676d4")
        $("#nowPage").val(1)
        $("#sortType").val("score")
        $("#sortBy").val("1")
        $.ajax({
            type: 'get',//类型
            url: url,//地址
            dataType: 'json',
            // xhrFields: {
            //     withCredentials: true
            // },
            // crossDomain: true,
            async: false,
            data: {
                "cat": "33306aaad7b445c79a6a0196cb2676d4",
                "pageShow":"10"
                // ranNum: Math.random()
            },
            //请求成功
            success: function (data) {
                console.log(data)
                totalPage = data.wm.totalPage;
                var Scenic_List = data.wm.productList;
                var Scenic_List = data.wm.productList;
             
                // var Scenic_hot = data.hotProduct
                // console.log(Scenic_List)
                for (var i = 0; i < Scenic_List.length; i++) {
                    listStr += `<figure>
                            <img src="http://www.shouyouxinjiang.com/ueditor/getFileByFileKey/` + Scenic_List[i].pic + ` " alt=""  onerror="javascript:this.src='../../img/nopic.gif'">
                            <figcaption>
                                <p class="Scenic_title">`+ Scenic_List[i].productName + `</p>
                                <p class="star"><img src="../../img/lb_icon_xing.png" alt=""><img
                                        src="../../img/lb_icon_xing.png" alt=""><img src="../../img/lb_icon_xing.png"
                                        alt=""><img src="../../img/lb_icon_xing.png" alt=""><img
                                        src="../../img/lb_icon_xing.png" alt=""></p>
                                <p class="Scenic_star">
                                    <font>景区星级</font><span>AAAAA</span>
                                </p>
                                <p class="Scenic_buy">
                                    <font>`+ Scenic_List[i].sales + `</font>人购买
                                </p>
                                <p class="Scenic_content">`+ Scenic_List[i].desc + `</p>
                                <p class="Scenic_price">
                                    <font>¥<em>`+ Scenic_List[i].price + `</em>起 </font><button class="add"  name="` + Scenic_List[i].uuid + `">立即抢购</button>
                                </p>
                            </figcaption>
                        </figure>
                            `;
                    $(".content_details_left_banner_content").html(listStr)
                }
                var pages = 1;
                var listStrs = '';
                for (let x = 0; x < totalPage; x++) {
                    listStrs += `
                                <li><a href="javascript:void(0)">`+ (pages++) + `</a></li>
                `;
                }
                $(".LEFT_page").after(listStrs);
                $(".fenye>font").html(totalPage)
                // console.log(listStr)
            }
        })

        urlhot = "http://www.shouyouxinjiang.com/product/detail/getHotProductData";
        $.ajaxSettings.async = false;
        $.ajax({
            type: 'get',//类型
            url: urlhot,//地址
            dataType: 'json',
            async: false,
            data: {
                "cat": "33306aaad7b445c79a6a0196cb2676d4",
                // "pageShow":"10"

                // ranNum: Math.random()
            },
            //请求成功
            success: function (data) {
                console.log(data)
                var hotList = data.hotList;
                var index=1;
                // console.log(hotList)
                for (var i = 0; i < hotList.length; i++) {
                    hostListStr += `<figure>
                        <img src="http://www.shouyouxinjiang.com/ueditor/getFileByFileKey/`+ hotList[i].imageKey + `" alt=""  onerror="javascript:this.src='../../img/nopic.gif'">
                        <figcaption>
                            <p class="content_details_right_price">
                                <font>¥<em>`+ hotList[i].price + `</em>起 </font><button class="add"  name="` + hotList[i].skuNo + `" value="` + hotList[i] + `">立即抢购</button>
                            </p>
                        </figcaption>
                        <div class="hotzhezhao">`+ hotList[i].productName + `</div>
                        <div class="sort">No.<span>`+ (index++) + `</span></div>
                    </figure>
                            `;
                    $(".content_details_right_shop_list").html(hostListStr)

                }

            }
        })


    })()



    var mySwiper = new Swiper('.swiper-container', {
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





    $(".nav_list_go").find("li").hover(function () {
        $(this).siblings().find(".erji").css("display", "none")
        $(this).find(".erji").css("display", "block")

    }, function () {
        $(this).find(".erji").css("display", "none")
    })

    $(".content_details_left_Grade").find("span").click(function () {
        $(this).siblings().removeClass("public_background_active")
        ScenicGrade = $(this).prop("id")
        console.log(ScenicGrade)
        $(this).addClass("public_background_active")
        Scenic_Grade(ScenicGrade)
    })

    $(".content_details_left_sort").find("span").hover(function () {
        $(this).css("background", "#fff").css("color", "red")
    }, function () {
        $(this).css("background", "#fafafa").css("color", "#000")
    })
    //排序图片
    $(".content_details_left_sort").find("span").click(function () {
        sortBy = $(this).prop("id");
        $("#sortBy").val(sortBy)
        num++;
        if (num % 2) {
            sortType = 1;
            console.log(sortType)
            $(this).find("img:first").attr("src", "../../img/lb_icon_s_click.png")
            $(this).find("img:last").attr("src", "../../img/lb_icon_j_n.png")
            $(this).siblings().find("img:first").attr("src", "../../img/lb_icon_s_n.png")
            $(this).siblings().find("img:last").attr("src", "../../img/lb_icon_j_n.png")
            $("#sortType").val(sortType)
        } else {
            sortType = 2;
            console.log(sortType)
            $(this).find("img:first").attr("src", "../../img/lb_icon_s_n.png")
            $(this).find("img:last").attr("src", "../../img/lb_icon_j_click.png")
            $(this).siblings().find("img:first").attr("src", "../../img/lb_icon_s_n.png")
            $(this).siblings().find("img:last").attr("src", "../../img/lb_icon_j_n.png")
            $("#sortType").val(sortType)
        }
        sortB(sortType, sortBy)

    })

    $(".content_details_left_classification").find("span").click(function () {
        $(this).siblings().removeClass("public_background_active")
        $(this).addClass("public_background_active")
    })
    $(".Determine").hover(function () {
        $(this).css('background', '#007bc2')
    }, function () {
        $(this).css('background', '#008ada')
    })
    $(".cancel").hover(function () {
        $(this).css('background', '#008109')
    }, function () {
        $(this).css('background', '#00a60c')
    })
    $(".add").hover(function () {
        $(this).css('background', '#ee5555')
    }, function () {
        $(this).css('background', '#ff5555')
    })
    $(".content_details_right_shop_list").find("figure").hover(function () {
        $(this).addClass("biankuang")
    }, function () {
        $(this).removeClass("biankuang")
    })
    //关键字搜索
    $(".Determine").click(function () {
        var startPrice = $(".Small").val();
        var endPrice = $(".large").val();
        var keyword = $(".keyword").val();

        var sea = $(".content_details_left_Grade").find(".public_background_active").prop("id")
        listStr = "";
        Search = "http://www.shouyouxinjiang.com/frontshow/productlist/ajaxProductList";
        $.ajaxSettings.async = false;
        $.ajax({
            type: 'get',//类型
            url: Search,//地址
            dataType: 'json',
            async: false,
            data: {
                cat: sea,
                startPrice: startPrice,
                endPrice: endPrice,
                sortType: sortType,
                sortBy: sortBy,
                keyword: keyword,
                attrValue: "",
                nowPage: 1,
                pageShow: 20
                // ranNum: Math.random()
            },
            //请求成功
            success: function (data) {
                // console.log(data)
                var Scenic_List = data.wm.productList;
                // console.log(Scenic_List)
                if (Scenic_List == '') {

                    $(".content_details_left_banner_content").html("很抱歉、没有搜到您想要的商品……");
                    $(".paging").html("")
                } else {
                    for (var i = 0; i < Scenic_List.length; i++) {
                        listStr += `<figure>
                            <img src="http://www.shouyouxinjiang.com/ueditor/getFileByFileKey/` + Scenic_List[i].pic + ` " alt=""  onerror="javascript:this.src='../../img/nopic.gif'">
                            <figcaption>
                                <p class="Scenic_title">`+ Scenic_List[i].productName + `</p>
                                <p class="star"><img src="../../img/lb_icon_xing.png" alt=""><img
                                        src="../../img/lb_icon_xing.png" alt=""><img src="../../img/lb_icon_xing.png"
                                        alt=""><img src="../../img/lb_icon_xing.png" alt=""><img
                                        src="../../img/lb_icon_xing.png" alt=""></p>
                                <p class="Scenic_star">
                                    <font>景区星级</font><span>AAAAA</span>
                                </p>
                                <p class="Scenic_buy">
                                    <font>`+ Scenic_List[i].sales + `</font>人购买
                                </p>
                                <p class="Scenic_content">`+ Scenic_List[i].desc + `</p>
                                <p class="Scenic_price">
                                    <font>¥<em>`+ Scenic_List[i].price + `</em>起 </font><button class="add" name="` + Scenic_List[i].uuid + `">立即抢购</button>
                                </p>
                            </figcaption>
                        </figure>
                            `;
                        $(".content_details_left_banner_content").html(listStr)
                    }
                }
            }
        })

    })

    //景区星级
    function Scenic_Grade(cat) {

        var listStr = "";
        urlhot = "http://www.shouyouxinjiang.com/frontshow/productlist/productList";
        $.ajaxSettings.async = false;
        $.ajax({
            type: 'get',//类型
            url: urlhot,//地址
            dataType: 'json',
            async: false,
            data: {
                "cat": cat
                // ranNum: Math.random()
            },
            //请求成功
            success: function (data) {
                console.log(data)
                var Scenic_List = data.wm.productList;
                // console.log(Scenic_List)
                if (Scenic_List == '') {
                    $(".content_details_left_banner_content").html("很抱歉、没有搜到您想要的商品……");
                    $(".paging").hide()
                } else {
                    $(".paging").show()
                    for (var i = 0; i < Scenic_List.length; i++) {
                        listStr += `<figure>
                            <img src="http://www.shouyouxinjiang.com/ueditor/getFileByFileKey/` + Scenic_List[i].pic + ` " alt=""  onerror="javascript:this.src='../../img/nopic.gif'">
                            <figcaption>
                                <p class="Scenic_title">`+ Scenic_List[i].productName + `</p>
                                <p class="star"><img src="../../img/lb_icon_xing.png" alt=""><img
                                        src="../../img/lb_icon_xing.png" alt=""><img src="../../img/lb_icon_xing.png"
                                        alt=""><img src="../../img/lb_icon_xing.png" alt=""><img
                                        src="../../img/lb_icon_xing.png" alt=""></p>
                                <p class="Scenic_star">
                                    <font>景区星级</font><span>AAAAA</span>
                                </p>
                                <p class="Scenic_buy">
                                    <font>`+ Scenic_List[i].sales + `</font>人购买
                                </p>
                                <p class="Scenic_content">`+ Scenic_List[i].desc + `</p>
                                <p class="Scenic_price">
                                    <font>¥<em>`+ Scenic_List[i].price + `</em>起 </font><button class="add" name="` + Scenic_List[i].uuid + `">立即抢购</button>
                                </p>
                            </figcaption>
                        </figure>
                            `;
                        $(".content_details_left_banner_content").html(listStr)
                    }
                }
            }
        })
    }

    //排序
    function sortB(sortType, sortBy) {

        var sea = $(".content_details_left_Grade").find(".public_background_active").prop("id")
        var listStr = "";
        urlhot = "http://www.shouyouxinjiang.com/frontshow/productlist/productList";
        $.ajaxSettings.async = false;
        $.ajax({
            type: 'get',//类型
            url: urlhot,//地址
            dataType: 'json',
            async: false,
            data: {
                cat: sea,
                sortType: sortType,
                sortBy: sortBy,
                keyword: "",
                attrValue: "",
                nowPage: 1,
                pageShow: 3
                // ranNum: Math.random()
            },
            //请求成功
            success: function (data) {
                console.log(data)
                var Scenic_List = data.wm.productList;
                console.log(Scenic_List)
                if (Scenic_List == '') {
                    $(".content_details_left_banner_content").html("很抱歉、没有搜到您想要的商品……");
                    $(".paging").hide()
                } else {
                    $(".paging").show()
                    for (var i = 0; i < Scenic_List.length; i++) {
                        listStr += `<figure>
                            <img src="http://www.shouyouxinjiang.com/ueditor/getFileByFileKey/` + Scenic_List[i].pic + ` " alt=""  onerror="javascript:this.src='../../img/nopic.gif'">
                            <figcaption>
                                <p class="Scenic_title">`+ Scenic_List[i].productName + `</p>
                                <p class="star"><img src="../../img/lb_icon_xing.png" alt=""><img
                                        src="../../img/lb_icon_xing.png" alt=""><img src="../../img/lb_icon_xing.png"
                                        alt=""><img src="../../img/lb_icon_xing.png" alt=""><img
                                        src="../../img/lb_icon_xing.png" alt=""></p>
                                <p class="Scenic_star">
                                    <font>景区星级</font><span>AAAAA</span>
                                </p>
                                <p class="Scenic_buy">
                                    <font>`+ Scenic_List[i].sales + `</font>人购买
                                </p>
                                <p class="Scenic_content">`+ Scenic_List[i].desc + `</p>
                                <p class="Scenic_price">
                                    <font>¥<em>`+ Scenic_List[i].price + `</em>起 </font><button class="add" name="` + Scenic_List[i].uuid + `">立即抢购</button>
                                </p>
                            </figcaption>
                        </figure>
                            `;
                        $(".content_details_left_banner_content").html(listStr);
                    }
                }
            }
        })
    }
    //分页
    $(".paging").on("click", "a", function () {
        console.log(123)
        $(".content_details_left_banner_content").html();
        nowPage = $(this).text();
        $("#nowPage").val(nowPage)
        // sortType = $("#sortType").val("");
        // sortBy = $("#sortBy").val("");
        // console.log(sortType, sortBy)
        var listStr = "";
        // urlhot = "http://192.168.90.170:8082/frontshow/productlist/ajaxProductList";
        urlhot = "http://www.shouyouxinjiang.com/frontshow/productlist/ajaxProductList";
        $.ajaxSettings.async = false;
        $.ajax({
            type: 'get',//类型
            url: urlhot,//地址
            dataType: 'json',
            async: false,
            data: {
                storeUuid: $("#cat").val(),
                sortType: $("#sortType").val(),
                sortBy: $("#sortBy").val(),
                keyword: "",
                attrValue: "",
                nowPage: nowPage,
                pageShow: "10"
                // ranNum: Math.random()
            },
            //请求成功
            success: function (data) {
                console.log(data)
                var Scenic_List = data.wm.productList;
                console.log(Scenic_List)
       
                    for (var i = 0; i < Scenic_List.length; i++) {
                        listStr += `<figure>
                        <img src="http://www.shouyouxinjiang.com/ueditor/getFileByFileKey/` + Scenic_List[i].pic + ` " alt=""  onerror="javascript:this.src='../../img/nopic.gif'">
                        <figcaption>
                            <p class="Scenic_title">`+ Scenic_List[i].productName + `</p>
                            <p class="star"><img src="../../img/lb_icon_xing.png" alt=""><img
                                    src="../../img/lb_icon_xing.png" alt=""><img src="../../img/lb_icon_xing.png"
                                    alt=""><img src="../../img/lb_icon_xing.png" alt=""><img
                                    src="../../img/lb_icon_xing.png" alt=""></p>
                            <p class="Scenic_star">
                                <font>景区星级</font><span>AAAAA</span>
                            </p>
                            <p class="Scenic_buy">
                                <font>`+ Scenic_List[i].sales + `</font>人购买
                            </p>
                            <p class="Scenic_content">`+ Scenic_List[i].desc + `</p>
                            <p class="Scenic_price">
                                <font>¥<em>`+ Scenic_List[i].price + `</em>起 </font><button class="add" name="` + Scenic_List[i].uuid + `">立即抢购</button>
                            </p>
                        </figcaption>
                    </figure>
                    `;
                        $(".content_details_left_banner_content").html(listStr);
                    }
         
                
            }
        })
    })
    $("body").on('click', '.add', function () {
        // console.log(123)
        var skuNo = $(this).prop("name");
        console.log(skuNo);
        sessionStorage.setItem('skuNo', JSON.stringify(skuNo));
        location.href = "./Scenic-details.html?skuNo="+skuNo;
    });
