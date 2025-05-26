import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper2 = new Swiper('.reviews-swiper', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 100,
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1620: {
      slidesPerView: 3,
      spaceBetween: 100,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 40,
              navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    375: {
        slidesPerView: 1,
              navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    1: {
        slidesPerView: 1
    }
  }
  
});
