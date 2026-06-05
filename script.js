if(/iPhone|iPod|Android|iPad/.test(window.navigator.platform)){
	$(document)
	.on('focus', 'textarea,input,select', function(e) {
		$('#header').css('position', 'absolute');
	})
	.on('blur', 'textarea,input,select', function(e) {
		$('#header').css('position', '');
	});
}

jQuery(document).ready(function(){

	// 타이틀 변환
	 var homeTile = jQuery('title').text();
	 var replaceTitle = jQuery('.sub-title h2').text();
	 arrTitle = jQuery('.sub-title h2').text();
	 if(replaceTitle==''){
	 }else{
	  document.title=arrTitle + " | " + homeTile;
	 };

	// 마우스오버시 이미지 변환
	jQuery("img.rollover").mouseover(function(){
		jQuery(this).attr("src",jQuery(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
	}).mouseout(function(){
		jQuery(this).attr("src",jQuery(this).attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1$2"));
	});
	
	
	//텝
	jQuery(".tab-content").hide();
	jQuery("ul.tabs>li:first").addClass("active").show(); 	
	jQuery(".tab-content:first").show();

	jQuery("ul.tabs>li").click(function(e) {
		e.preventDefault();

		jQuery("ul.tabs>li").removeClass("active");
		jQuery(this).addClass("active");
		jQuery(".tab-content").hide();		
		
		var activeTab = jQuery(this).find("a").attr("href");
		jQuery(activeTab).fadeIn();
		return false;
	});
		
	
	$('.mainSlider').slick({ //메인 슬라이드
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		dots: true,
		speed: 500,
		pauseOnHover: false,
        pauseOnFocus: false,
		slidesToShow:1
	});
	

	$(".item-slider").each(function(){
		$(".info",this).find(".col").eq(0).addClass("active");
		$(".info",this).find(".col").hover(function(){
			$(this).addClass("active").siblings(".col").removeClass("active");
			$(this).parents(".item-slider").find(".photo img").attr("src",$(this).find("a").attr("data-img"));
		});
	});



	//카피아이트 텝
	jQuery(".copy-tab-cont").hide();
	jQuery("ul.copy-tabs>li:first").addClass("active"); 	
	jQuery(".copy-tab-cont:first").show();

	jQuery("ul.copy-tabs>li").click(function(e) {
		e.preventDefault();

		jQuery("ul.copy-tabs>li").removeClass("active");
		jQuery(this).addClass("active");
		jQuery(".copy-tab-cont").hide();		
		
		var copyTab = jQuery(this).find("a").attr("href");
		jQuery(copyTab).fadeIn();
		return false;
	});


	// sub visual
	jQuery(".sub-visual").addClass("load");

	//scroll-top
	if (jQuery('.scroll-top').length){
		var $topBtn = $('.scroll-top');
		$topBtn.hide();
		jQuery(window).scroll(function(e){
			e.preventDefault();
			var $topBtnSp = $(this).scrollTop();
			if($topBtnSp >= 50){
				$topBtn.fadeIn();
			}
			else {
				$topBtn.fadeOut();
			}
		});
		jQuery('.scroll-top').on('click', function(){
			$('body,html').animate({scrollTop:0},500);
		});
	}


	// fancybox
	jQuery(".pop_privacy").fancybox({
		padding     : 0,
		margin      : 50,
		fitToView	: false,
		maxWidth	: "100%",
		maxHeight	: "90%",
		width		: 700,
		height		: 600,
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		type		: 'iframe',
		helpers:  {
			overlay: {
				locked: false
			}
		}
	});
		

	
	
});	//End



