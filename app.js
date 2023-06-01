const swiperEl = document.querySelector('swiper-container')
Object.assign(swiperEl, {
  slidesPerView: 2,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});
swiperEl.initialize();


// ------------------------------------------------------------Navbar

$(document).ready(function() {
  $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
  });
});

// Scrolling Effect

$(window).on("scroll", function() {
  if($(window).scrollTop()) {
        $('nav').addClass('black');
  }

  else {
        $('nav').removeClass('black');
  }
})