$(function(){
  $('.works-slider').slick({
    infinite: false,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    spped: 500,
    slidesToShow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $('#btn').click(function(){
    $(this).toggleClass('active');
    $('.modal').fadeToggle('slow');
  });

});
