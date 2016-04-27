jQuery(document).ready(function($) {
	$('.banner').height($(window).height());
	$('.ck-banner').height($(window).height());

    //跳转    
    $(".nav1 ul li a").click(function(event) { 
        var index=this.title
        var id='#'+'index_'+index
        $("html,body").animate({scrollTop: $(id).offset().top-70}, 1000);
    });
    //下拉搜索框
	$(function() {  
	    $(window).scroll(function(){
	    t = $(document).scrollTop();
	    if(t>500){
	      $('.hd').show();
	    }else{
	      $('.hd').hide();
	    }     
	    })
    });
    //3D轮播
})