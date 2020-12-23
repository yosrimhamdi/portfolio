import '../../../node_modules/waypoints/lib/noframework.waypoints';
import './modules/particles.js';
import Typed from 'typed.js';

import AnimateOnWaypoint from './modules/AnimateOnWaypoint';
import SendSubscriptionEmail from './modules/SendSubscriptionEmail';
import CreateSkills from './modules/CreateSkills';
import FlipCardsOnHover from './modules/FlipCardsOnHover';
import BackToTopButton from './modules/BackToTopButton';
import InitParticles from './modules/InitParticles';
import RevealContentOnClick from './modules/RevealContentOnClick';

new RevealContentOnClick();

new InitParticles();

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

new AnimateOnWaypoint('.flipping-card', 'animate-f-cards-on-waypoint', '70%');
new AnimateOnWaypoint('.news, .project', 'fade-in-on-waypoint', '70%');
new AnimateOnWaypoint('.skill__percentage-bar', 'slide-on-waypoint', '96%');
new AnimateOnWaypoint(
  '.footer__github-link',
  'shake-on-waypoint',
  'bottom-in-view',
);

new FlipCardsOnHover();

new SendSubscriptionEmail();

new BackToTopButton();

document.documentElement.style.setProperty(
  '--height',
  `${window.innerHeight}px`,
);
