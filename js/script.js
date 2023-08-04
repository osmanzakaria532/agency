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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});