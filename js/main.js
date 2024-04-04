$(function() {
      var swiper = new Swiper(".main_slide", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

    var swiper = new Swiper(".product_slide", {
      slidesPerView: 4,
      spaceBetween: 10,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 1.1,
          spaceBetween: 10,
          navigation: {
            nextEl: false,
            prevEl: false,
          },
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
          navigation: {
            nextEl: false,
            prevEl: false,
          },
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    });

    

});
$(document).ready(function() {
//헤더
  $("header .h_wrap nav, header .pc_hover_menu").on("mouseenter", function(){
    $("header .h_wrap").css({background:"#fff", borderBottom:"1px solid #000"});
    $("header .h_wrap .h_logo a img").css({filter:"invert(0)"});
    $("header .h_wrap nav ul li a").css({color:"#000"});
    $("header .pc_hover_menu").css({display:"block"});
  });

  $("header .h_wrap nav, header .pc_hover_menu").on("mouseleave", function(){
    $("header .h_wrap").css({background:"none", borderBottom:"none"});
    $("header .h_wrap .h_logo a img").css({filter:"invert(1)"});
    $("header .h_wrap nav ul li a").css({color:"#fff"});
    $("header .pc_hover_menu").css({display:"none"});
  });

  var $header = $('header'); // 헤더를 변수에 넣기
    var $window = $(window);
    var pageOffsetTop = $('header').offset().top; // 헤더의 top값 구하기
    var scrollThreshold = 300; // 스크롤이 변할 위치

    $window.resize(function() { // 리사이즈시 top값을 다시 계산
      pageOffsetTop = $('header').offset().top;
    });

    $window.on('scroll', function() { 
      var scrolled = $window.scrollTop() >= pageOffsetTop + scrollThreshold; 
      $header.toggleClass('down', scrolled); 
  });

  //모바일에서만 실행
  if ($(window).width() <= 1024) {
  $(".m_menu_wrap > li > h3").on("click", function(){
  var subMenu = $(this).siblings(".sub_menu");
  if (subMenu.css("display") === "none") {
      // 다른 서브 메뉴를 모두 접음
      $(".sub_menu").slideUp();
      // 클릭된 서브 메뉴를 펼침
      subMenu.slideDown();
      // 클릭된 링크의 색상 변경
      $(this).css({color: "rgb(63, 188, 210)"});
      // 다른 링크의 색상 초기화
      $(".m_menu_wrap > li > h3").not(this).css({color: "#fff"});
  } else {
      // 클릭된 서브 메뉴를 접음
      subMenu.slideUp();
      // 클릭된 링크의 색상 초기화
      $(this).css({color: "#fff"})
  }
  });
    

  $("header .h_wrap .m_menu_btn").on("click",function(){
    $("header  .m_click_menu").css({display:"block"})
  });
  $("header .h_wrap .m_click_menu .m_close_btn").on("click",function(){
    
    $("header .h_wrap .m_click_menu").css({display:"none"})
  });

}

});