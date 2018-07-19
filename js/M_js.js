//初始化宽高
    !function(){
        for(var i=1;i<=14;i++){
            $(".M_part"+i).css("height",window.innerHeight+"px")
        }
        $("#M_main").css("height",window.innerHeight+"px");
        for(var j=1;j<=14;j++){
            $(".M_part"+j).css({
                width:"100%",
                position:"relative"
                //top:"100%"
            })
        }
        $(".M_part"+4).css("height",window.innerHeight+1000+"px");
        $("body").css("height",window.innerHeight*9+1000+"px")
    }();
//导航
    $(".M_nav_left>li:not(:eq(0))").hover(
        function(){
            $(this).toggleClass("M_nav_left_li_hover");
            $(this).find("div").slideToggle("fast",function(){
                $(this).find("ul").slideToggle("slow")
            });
        }
    );
    $(".M_nav_right>li:first-child").hover(function(){
        $(this).toggleClass("M_nav_left_li_hover");
        $(this).find("div").slideToggle("fast")
    });
    $(".M_nav_right>li:last-child").mouseenter(function(){
        $(".M_share").slideDown();
    });
    $(".M_share").mouseleave(function(){
        $(this).slideUp();
    });

    var flag_nav=0;
    $(window).scroll(function(){
        if(flag_nav==0){
            flag_nav=1;
            $(".M_nav").addClass("M_nav_disappear");
            setTimeout(function(){
                $(".M_nav").removeClass("M_nav_disappear");
                flag_nav=0;
            },1200)
        }
    });
//tips点击效果
    var flag_music=0;
    $(".M_music").click(function(){
        if(flag_music==0){
            $(this).find("img").css({
                transform:"translateY(-60px)",
                transition:"all 0.5s"
            });
            flag_music=1;
        }else{
            $(this).find("img").css({
                transform:"translateY(0)",
                transition:"all 0.5s"
            });
            flag_music=0
        }
    });
//鼠标键盘效果
    setInterval(function(){
        $(".M_mouse2").fadeToggle();
        $(".M_key2").fadeToggle();
    },1000);
//第一部分完成
//第二部分开始
    $(".M_P2content").hover(function(){
       $(".M_P2_cross_inner").toggleClass("M_P2_cross_inner2")
    });

    $(".M_P2B_one").click(function(e){
        e.preventDefault();
        $(".M_flyR1").css("right","0");
    });
    $(".M_P2B_two").click(function(e){
        e.preventDefault();
        $(".M_flyR2").css("right","0");
    });
//第二部分完成
//第三部分开始
    $(".M_P3content").hover(function(){
        $(".M_P3_cross_inner").toggleClass("M_P3_cross_inner2")
    });
    $("[class*=son]").hover(function(){
        $(this).find(".M_pic").fadeToggle();
        $(this).find("[class*=M_bm]").css("transform","scale(0)");
        $(this).find("[class*=M_oz]").css("transform","scale(0)");
        $(this).find("[class*=M_yz]").css("transform","scale(0)");
        $(this).find("[class*=M_fz]").css("transform","scale(0)");
        $(this).find("[class*=M_nm]").css("transform","scale(0)");
        $(this).find(".M_tips_bm_txt").css("background","rgb(51,204,255)");
        $(this).find(".M_tips_oz_txt").css("background","rgb(240,72,72)");
        $(this).find(".M_tips_yz_txt").css("background","rgb(124,227,21)");
        $(this).find(".M_tips_fz_txt").css("background","rgb(255,153,51)");
        $(this).find(".M_tips_nm_txt").css("background","rgb(255,204,0)")
    });
    $("[class*=son]").mouseleave(function(){
        $(this).find(".M_tips_bm_txt").css("background","rgba(51,204,255,0.65)");
        $(this).find(".M_tips_oz_txt").css("background","rgba(240,72,72,0.65)");
        $(this).find(".M_tips_yz_txt").css("background","rgba(124,227,21,0.65)");
        $(this).find(".M_tips_fz_txt").css("background","rgba(255,153,51,0.65)");
        $(this).find(".M_tips_nm_txt").css("background","rgba(255,204,0,0.65)");
        $(this).find("[class*=M_bm]").css("transform","scale(1)");
        $(this).find("[class*=M_oz]").css("transform","scale(1)");
        $(this).find("[class*=M_yz]").css("transform","scale(1)");
        $(this).find("[class*=M_fz]").css("transform","scale(1)");
        $(this).find("[class*=M_nm]").css("transform","scale(1)");
    });
//第三部分结束
//第四部分开始
    var start;
    var flagCheck=0;
    $(window).scroll(function(){
        var ViewH=document.documentElement.clientHeight;
        if($(window).scrollTop()>=ViewH*3-205 && $(window).scrollTop()<ViewH*3+$(".M_P4_map").height()){
            $(".M_P4_mask").css("height",$(window).scrollTop()-document.documentElement.clientHeight*3+405+"px");
            if(flagCheck==0){
                start=setInterval(check,50);
                flagCheck=1;
            }
        }
    });
    function check(){
        $(".M_P4_points a").each(function(){
            if(parseInt($(this).css("top"))<=$(".M_P4_mask").height()-20){
                $(this).fadeIn();
            }else{
                $(this).fadeOut();
            }
        });
        if($(window).scrollTop()<=$(".M_part3").offset().top || $(window).scrollTop()>=$(".M_part5").offset().top){
            flagCheck=0;
            clearInterval(start);
        }
    }
//第四部分结束
//第五部分开始
    $(".M_P5content").hover(function(){
        $(".M_P5_cross_inner").toggleClass("M_P5_cross_inner2")
    });
//第五部分结束
//第六部分开始
    $(".M_P6content").hover(function(){
        $(".M_P6_cross_inner").toggleClass("M_P6_cross_inner2")
    });
//第六部分结束
//第七部分开始

//第七部分结束
//第八部分开始
    $(".M_P8content").hover(function(){
        $(".M_P8_cross_inner").toggleClass("M_P8_cross_inner2")
    });
//第八部分结束
//滚动条效果

        /*$("[class*=M_part]").on("mousewheel",function(e){
            M_index=$(this).index()-1;
            M_top=parseInt($(this).css("margin-top"));
            console.log(M_top);
            if (e.originalEvent.wheelDelta > 0) { //当滑轮向上滚动时

                $("[class*=M_part]").eq(M_index).css({
                    transition:"all 0.5s linear",
                    marginTop:Math.abs($(window).scrollTop()-$(this).offset().top)/2+"px"
                });
                $("[class*=M_part]").eq(M_index+1).css(
                    {
                        transition:"all 0.5s linear",
                        marginTop:Math.abs($(window).scrollTop()-$(this).offset().top)+"px"
                    });
            }else{
                $("[class*=M_part]").eq(M_index).css({
                    transition:"all 0.5s linear",
                    marginTop:-Math.abs($(window).scrollTop()-$(this).offset().top)/2+"px"
                });
                $("[class*=M_part]").eq(M_index+1).css(
                    {
                        transition:"all 0.5s linear",
                        marginTop:-Math.abs($(window).scrollTop()-$(this).offset().top)+"px"
                    });
            }
        });*/

        var index;
        $(window).scroll(function(){
            if($(window).scrollTop()<window.innerHeight*3){
                index=parseInt($(window).scrollTop()/window.innerHeight);
            }else if($(window).scrollTop()>window.innerHeight*4+1000){
                index=parseInt(($(window).scrollTop()-window.innerHeight*4-1000)/window.innerHeight)+4;
            }else{
                index=3;
            }
            console.log(index);
        });

        var n=0;
        $("[class*=M_part]").on("mousewheel",function(e){
            e.preventDefault();
            var M_flag_scroll=0;
            function go(){
                if(M_flag_scroll==0 && e.originalEvent.wheelDelta<0){
                    n++;
                    document.documentElement.scrollTop++;
                    //console.log(document.documentElement.scrollTop);
                    if(n==50){
                        clearInterval(start);
                        M_flag_scroll=1;
                        n=0;
                    }
                }else if(M_flag_scroll==0 && e.originalEvent.wheelDelta>0){
                    n--;
                    document.documentElement.scrollTop--;
                    //console.log($(window).scrollTop());
                    if(n==-50){
                        clearInterval(start);
                        M_flag_scroll=1;
                        n=0;
                    }
                }
            }
            if(n%50==0){
                start=setInterval(go,10);
            }

            if (e.originalEvent.wheelDelta<0) { //当滑轮向下滚动时
                $("[class*=M_part]").eq(index).css({
                    transition:"all 0.5s linear",
                    marginTop:-Math.abs(parseInt($(this).css("marginTop"))-25)+"px"
                });
                $("[class*=M_part]").eq(index+1).css({
                    transition:"all 0.5s linear",
                    marginTop:-Math.abs(parseInt($(this).css("marginTop"))-50)+"px"
                });
            }else{
                $("[class*=M_part]").eq(index).css({
                    transition:"all 0.5s linear",
                    marginTop:Math.abs(parseInt($(this).css("marginTop"))+25)+"px"
                });
                $("[class*=M_part]").eq(index+1).css({
                    transition:"all 0.5s linear",
                    marginTop:Math.abs(parseInt($(this).css("marginTop"))+50)+"px"
                });
                if(parseInt($(".M_part1").css("marginTop"))>=0){
                    $(".M_part1").css("marginTop","0");
                }
            }
            /*console.log($(this).css("marginTop"));
            console.log($(this).next().css("marginTop"));*/
        });



