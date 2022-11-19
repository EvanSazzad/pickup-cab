$(document).ready(function () {
  $(".menu-toggler").click(function () {
    $("nav").toggleClass("active");
    $(".menu-toggler").toggleClass("active");
  });
});

//slick slider
$(document).ready(function () {
  $(".hero").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  });
});

$(document).ready(function () {
  // vehicle menu
  $(".vehicle-link").click(function () {
    $(this).parent().siblings().children().removeClass("active"),
      $(this).addClass("active");
  });
});

$(document).ready(function () {
  $(".link1").click(function () {
    $(".cab").addClass("active").siblings().removeClass("active");
  });
  $(".link2").click(function () {
    $(".taxi").addClass("active").siblings().removeClass("active");
  });
  $(".link3").click(function () {
    $(".suv").addClass("active").siblings().removeClass("active");
  });
});


$(document).ready(function () {
  $(".box").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

//vehicle area owl carousel
$(document).ready(function () {
  $(".vehicle-content .owl-carousel").owlCarousel({
    margin: 10,
    dots: false,
    autoplay: true,
    autoplayTimeout: 100000,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0,
      },
      768: {
        items: 2,
        margin: 30,
        nav: true,
        navText: [
          "<i class='fa fa-long-arrow-left vehicle-arrow'></i>",
          "<i class='fa fa-long-arrow-right vehicle-arrow'></i>",
        ],
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  // package area owl-carousel
  $(".package .owl-carousel").owlCarousel({
    margin: 10,
    items: 3,
    autoplay: true,
    autoplayTimeout: 10000,
    nav: true,
    navText: [
      "<i class='fa fa-long-arrow-left'></i>",
      "<i class='fa fa-long-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
        margin: 30,
      },
      1200: {
        items: 3,
      },
    },
  });

  // package area owl-carousel
  $(".passenger .owl-carousel").owlCarousel({
    items: 1,
    dots: false,
  });
});

// back to top
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $(".top-icon").fadeIn(200);
  } else $(".top-icon").fadeOut(200);
});

$(document).ready(function () {
  $(".top-icon").click(function () {
    $("html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});

// preloader
$(window).on("load", function () {
  $(".preloader").delay(500).fadeOut("slow");
});
