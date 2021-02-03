import Typed from 'typed.js';

import FlipCardsOnHover from './modules/animations/FlipCardsOnHover';
import AnimateOnWaypoint from './modules/animations/AnimateOnWaypoint';
import SendSubscriptionEmail from './modules/email/SendSubscriptionEmail';
import InitParticles from './modules/particles/InitParticles';
import BackToTopOnClick from './modules/BackToTopOnClick';
import CreateSkills from './modules/CreateSkills';
import RevealContentOnClick from './modules/RevealContentOnClick';

fetch('https://devtie.herokuapp.com/');

new RevealContentOnClick();

new InitParticles();

new Typed('.avatar__job-title', {
  strings: [
    'full stack developer',
    'javascript engineer^2000',
    'web developer',
    'database administrator^4000',
  ],
  loop: true,
  typeSpeed: 70,
  backSpeed: 20,
});

new CreateSkills({
  'html, css, js': '100%',
  'sass, postcss': '100%',
  'react, redux': '90%',
  'gulp, webpack': '100%',
  'node, express': '85%',
  mongodb: '100%',
  'mysql, oracle': '100%',
  'git, github': '95%',
  'npm, yarn': '100%',
});

const { innerWidth, innerHeight } = window;

new AnimateOnWaypoint(
  '.news, .project',
  'fade-in-on-waypoint',
  innerHeight - (innerWidth < 1024 ? 10 : 15),
);
new AnimateOnWaypoint(
  '.flipping-card',
  'animate-f-cards-on-waypoint',
  'bottom-in-view',
);
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
