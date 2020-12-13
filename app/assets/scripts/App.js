import Typed from 'typed.js';
import './modules/particles.js';

import LoadingBar from './modules/LoadingBar';
import UpdateYear from './modules/UpdateYear';
import FadeInOnScroll from './modules/FadeInOnScroll';
import ShakeOnScroll from './modules/ShakeOnScroll';
import SendEmail from './modules/SendEmail';
import UpdateVh from './modules/UpdateVh';
import SlideOnClick from './modules/SlideOnClick';
import TriggerProgressBarAnimationOnWaypoint from './modules/TriggerProgressBarAnimationOnWaypoint';
import CreateSkill from './modules/CreateSkill';

if (window.innerWidth >= 1024) {
  new SlideOnClick();
}

//eslint-disable-next-line
particlesJS.load('particles__container', '/assets/particles.json', () => 0);

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

new CreateSkill('html', '80%');
new CreateSkill('css', '90%');
new CreateSkill('git', '60%');
new CreateSkill('javascript', '75%');
new CreateSkill('gulp', '98%');

new TriggerProgressBarAnimationOnWaypoint();

new UpdateVh();
new SendEmail();
new ShakeOnScroll();
new FadeInOnScroll();
new UpdateYear();
new LoadingBar();
