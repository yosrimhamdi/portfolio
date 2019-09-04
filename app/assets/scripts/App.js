import Swiper from 'swiper';

const config = {
/*   autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  }, */
  speed: 800,
  loop: true,
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
};

new Swiper('.swiper-container', config);