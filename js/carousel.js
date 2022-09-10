const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  breakpoints: {
    320: {
      slidesPerView: 3,
    },
    520: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
    1600: {
      slidesPerView: 3,
    },
  },
  loop: true,
  spaceBetween: 50,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
