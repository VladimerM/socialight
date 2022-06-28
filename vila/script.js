$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
});
