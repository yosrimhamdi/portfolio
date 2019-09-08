import Swiper from 'swiper';
import UpdateVh from './modules/UpdateVh';
import SlideOnClick from './modules/SlideOnClick';
import 'particles.js';
import Typed from 'typed.js';

particlesJS.load('particles-js', '/particles/particles.json', () => 0);
new Swiper('.swiper-container', {
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
});
new UpdateVh();
new SlideOnClick();
new Typed('.professional-skill', {
  strings: ['web developer', 'front-end engineer', 'web expert'],
  loop: true,
  typeSpeed: 80,
  shuffle: true,
  backSpeed: 40,
  smartBackspace: false
});