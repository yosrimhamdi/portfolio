import LoadingBar from './modules/LoadingBar';
import UpdateYear from './modules/UpdateYear';
import FadeInOnScroll from './modules/FadeInOnScroll';
import ShakeOnScroll from './modules/ShakeOnScroll';
import SendEmail from './modules/SendEmail';
import UpdateVh from './modules/UpdateVh';
import SlideOnClick from './modules/SlideOnClick';
import ProgressOnScroll from './modules/ProgressOnScroll';
import './modules/particles.js';
import Typed from 'typed.js';

new ProgressOnScroll();

//eslint-disable-next-line
particlesJS.load('particles__container', '/assets/particles.json', () => 0);
new UpdateVh();

if (window.innerWidth >= 1024) {
  new SlideOnClick();
}

new Typed('.professional-skill', {
  strings: [
    'web developer',
    'web expert^3000',
    'front-end engineer',
    'front-end developer^3000',
  ],
  loop: true,
  typeSpeed: 70,
  backSpeed: 20,
});
new SendEmail();
new ShakeOnScroll();
new FadeInOnScroll();
new UpdateYear();
new LoadingBar();
