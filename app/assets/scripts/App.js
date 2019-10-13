import $ from 'jquery';
import SlideXOnScroll from './modules/SlideXOnScroll';
import FadeInOnScroll from './modules/FadeInOnScroll';
import ShakeOnScroll from './modules/ShakeOnScroll';
import SendEmail from './modules/SendEmail';
import UpdateVh from './modules/UpdateVh';
import SlideOnClick from './modules/SlideOnClick';
import ProgressOnScroll from './modules/ProgressOnScroll';
import 'particles.js';
import Typed from 'typed.js';

new ProgressOnScroll();
particlesJS.load('particles-js', '/particles/particles.json', () => 0);
new UpdateVh();
new SlideOnClick();
new Typed('.professional-skill', {
  strings: ['web developer', 'front-end engineer', 'web expert'],
  loop: true,
  typeSpeed: 70,
  backSpeed: 20,
  smartBackspace: true
});
new SendEmail();
new ShakeOnScroll();
new FadeInOnScroll();
new SlideXOnScroll($('.top-row'), '80%', 'slideToLeftOnScroll');
new SlideXOnScroll($('.bottom-row'), '80%', 'slideToRightOnScroll');
new SlideXOnScroll($('.form__group--name'), '80%', 'slideToRightOnScroll');
new SlideXOnScroll($('.form__group--email'), '80%', 'slideToLeftOnScroll');
new SlideXOnScroll($('.form__button'), '80%', 'slideToRightOnScroll');