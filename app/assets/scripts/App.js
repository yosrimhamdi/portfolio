import Swiper from 'swiper';
import UpdateVh from './modules/UpdateVh';

const config = {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 800,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
};

new Swiper('.swiper-container', config);
new UpdateVh();