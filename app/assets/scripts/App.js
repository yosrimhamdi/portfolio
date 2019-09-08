import Swiper from 'swiper';
import UpdateVh from './modules/UpdateVh';
import SlideOnClick from './modules/SlideOnClick';
import 'particles.js';

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
new SlideOnClick();

particlesJS.load('particles-js', '/particles/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
