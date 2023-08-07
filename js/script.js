$('.banner_slider_area').slick({
    arrows: false,
    dots: true,
    // autoplay: true
});


$('.review_slider_part').slick({
    slidesToShow: 3,
    arrows: true,
    prevArrow: '<a href="#" class="left_arrow"><i class="fa-solid fa-angle-left"></i></a>',
    nextArrow: '<a href="#" class="right_arrow"><i class="fa-solid fa-angle-right"></i></a>',
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});