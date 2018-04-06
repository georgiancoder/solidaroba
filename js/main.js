$().ready(function(){
  var partnerslider = $("#partnerSlider").owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
});
var productslider = $("#productSlider").owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots: false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});

var productInnerSlider = $("#productInnerSlider").owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots: false,
  items: 1
});

$(".footer button.prev").click(function(){
  partnerslider.trigger('prev.owl.carousel');
});
$(".footer button.next").click(function(){
  partnerslider.trigger('next.owl.carousel');
});

$(".products button.prev").click(function(){
  productslider.trigger('prev.owl.carousel');
});
$(".products button.next").click(function(){
  productslider.trigger('next.owl.carousel');
});

$(".upscroll").click(function(){
  $("html,body").animate({scrollTop: 0});
});

$("#faq li").click(function(){
  var dropdownHeight = $(this).find(".cont").innerHeight();
  $(this).toggleClass('open');
  if($(this).hasClass('open')){
    $(this).find('.dropdown').height(dropdownHeight + 30);
  }else{
    $(this).find('.dropdown').height(0);
  }
});
var popupcarousel = $("#popupcarousel")
$(".historyinner .photo").click(function(){
  $(".historyinner").addClass('popup');
  $(popupcarousel).owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots: false,
      items: 1
  });
});
$(".historyinner .controls .close").click(function(){
  $(".historyinner").removeClass('popup');
});
$(".historyinner .controls .next").click(function(){
  $(popupcarousel).trigger('next.owl.carousel');
});
$(".historyinner .controls .prev").click(function(){
  $(popupcarousel).trigger('prev.owl.carousel');
});
});
