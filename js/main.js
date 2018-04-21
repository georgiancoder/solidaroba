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


//responsive goods
function responsivemenu(){
  var top = $("body > .header .top").html();
  var menu = $("body > .header .bot ul.menu");
  $("#responsivemenu .allinone").append(top).append(menu);
}

if($(window).innerWidth() <= 1024){
  responsivemenu();
}

$("#menuBurger").click(function(){
  $("#responsivemenu .allinone").toggleClass('open');
  if($("#responsivemenu .allinone").hasClass('open')){
    $(this).find('i').removeClass('fa-bars').addClass('fa-times');
  }else{
    $(this).find('i').removeClass('fa-times').addClass('fa-bars');
  }
});

var $animation_elements = $('.ikonka');
var $window = $(window);

$window.on('scroll', check_if_in_view);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

});
