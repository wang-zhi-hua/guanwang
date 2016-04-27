jQuery(document).ready(function($) {
	$('.banner').height($(window).height());
	$('.ck-banner').height($(window).height());
    $('.wx').height($(window).height());
    /*微信*/
    $('.wx').css('display','none');
    $('.wx').click(function(){
    	$('.wx').css('display','none');
    })
    $('.nv-2').click(function(){
    	$('.wx').css('display','block');
    })
    //跳转    
    $(".nav1 ul label").click(function(event) { 
        var index=this.id;
        var id='#'+'index_'+index;
        $("html,body").animate({scrollTop: $(id).offset().top-70}, 1000);
    });
    //下拉搜索框
	$(function() {  
	    $(window).scroll(function(){
	    t = $(document).scrollTop();
	    if(t>70){
	      $('.hd').css('display','block');
	    }else{
	      $('.hd').css('display','none');
	    }     
	    })
    });
    
    //导航
   
})