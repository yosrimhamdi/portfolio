import Typed from 'typed.js';

import FlipCardsOnHover from './modules/animations/FlipCardsOnHover';
import AnimateOnWaypoint from './modules/animations/AnimateOnWaypoint';
import SendSubscriptionEmail from './modules/email/SendSubscriptionEmail';
import InitParticles from './modules/particles/InitParticles';
import BackToTopOnClick from './modules/BackToTopOnClick';
import CreateSkills from './modules/CreateSkills';
import RevealContentOnClick from './modules/RevealContentOnClick';

new RevealContentOnClick();

new InitParticles();

new Typed('.avatar__job-title', {
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
new AnimateOnWaypoint(
  '.skill__percentage-bar',
  'slide-on-waypoint',
  'bottom-in-view',
);
new AnimateOnWaypoint(
  '.footer__github-link',
  'shake-on-waypoint',
  'bottom-in-view',
);

new FlipCardsOnHover();

new SendSubscriptionEmail();

new BackToTopOnClick();

document.documentElement.style.setProperty(
  '--height',
  `${window.innerHeight}px`,
);
