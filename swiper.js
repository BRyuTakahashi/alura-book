const swiper = new Swiper(".swiper", {
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});
