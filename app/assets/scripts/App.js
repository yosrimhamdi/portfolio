import Swiper from 'swiper';
import UpdateVh from './modules/UpdateVh';
import SlideOnClick from './modules/SlideOnClick';
import 'particles.js';
import Typed from 'typed.js';

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

particlesJS.load('particles-js', '/particles/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

new Typed('.professional-skill', {
  strings: ['web developer', 'front-end engineer', 'web expert'],
  loop: true,
  typeSpeed: 100,
  shuffle: true,
  backSpeed: 60
})