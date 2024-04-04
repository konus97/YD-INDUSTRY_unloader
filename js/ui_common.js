
jQuery(document).ready(function() {
	/*gnb*/
	$('#header .gnb>li>a').on('click', function(e) {
		$(this).parent().addClass('on').siblings().removeClass('on');
	});
	$('#header .gnb>li .depth02>li>a').on('click', function(e) {
		
		if(!$(this).next().is(':visible')) {
			$(this).parent().addClass('on');
			$(this).next().slideDown(300);
		} else {
			$(this).parent().removeClass('on');
			$(this).next().slideUp(300);
		}
		
	});
	
	
	
	
	/*메인 슬라이드*/
	var mainSlide = new Swiper('#mf_main_slide', {
		  loop: false,
		  slidesPerView: 'auto',
		  allowTouchMove: true,
		  spaceBetween : 30, 
		  speed : 500,
		  autoplay: {
			  delay: 2800,
		  },
		  pagination: {
			    el: ".swiper-pagination",
			    type: "fraction",
		  },

		});
	
	/*메인 슬라이드 play 버튼*/
	$('#mf_btnPause').on('click', function() {
		if($(this).hasClass('on')=== true) {
			$(this).removeClass('on');
			mainSlide.autoplay.stop();
		} else {
			$(this).addClass('on');
			mainSlide.autoplay.start();
		}
	});
	
	
	/*가이드 슬라이드*/
	var guideSlide = new Swiper('#mf_guide_slide', {
		  loop: false,
		  slidesPerView: 'auto',
		  allowTouchMove: true,
		  spaceBetween : 15, 
		  speed : 500,

		});
	
	/*기타 슬라이드*/
	var gaugeSlide = new Swiper('#mf_gauge_slide', {
		  loop: true,
		  pagination: {
			    el: '.swiper-pagination',
			  },
		  slidesPerView: 'auto',
		  allowTouchMove: true,
		  spaceBetween : 15, 
		  speed : 500,
		  autoplay: {
			  delay: 2800,
		  },

		});

	

	

})

	
	





