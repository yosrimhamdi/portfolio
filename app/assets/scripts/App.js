import '../../../node_modules/waypoints/lib/noframework.waypoints';
import Typed from 'typed.js';
import './modules/particles.js';

import LoadingBar from './modules/LoadingBar';
import UpdateFooterYear from './modules/UpdateFooterYear';
import FadeInCardsOnWaypoint from './modules/FadeInCardsOnWaypoint';
import AnimateOnWaypoint from './modules/AnimateOnWaypoint';
import SendSubscriptionEmail from './modules/SendSubscriptionEmail';
import UpdateVh from './modules/UpdateVh';
import RevealContentOnClick from './modules/RevealContentOnClick';
import SlideProgressBarOnWaypoint from './modules/SlideProgressBarOnWaypoint';
import CreateSkills from './modules/CreateSkills';

const { particlesJS, innerWidth } = window;

if (innerWidth >= 1024) {
  new RevealContentOnClick();
}

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

new CreateSkills({
  html: '80%',
  css: '90%',
  git: '60%',
  javascript: '75%',
  gulp: '98%',
});

new SlideProgressBarOnWaypoint();

new UpdateVh();
new SendSubscriptionEmail();
new AnimateOnWaypoint('.flipping-card', 'animate-f-cards-on-waypoint', '70%');
new FadeInCardsOnWaypoint();
new LoadingBar();
new UpdateFooterYear();
