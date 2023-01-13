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
  strings: ['Full Stack JS Developer', 'Web Developer^2000', 'Web Expert'],
  loop: true,
  typeSpeed: 70,
  backSpeed: 20,
});

new CreateSkills({
  'react, redux': '99%',
  'node.js, express.js': '99%',
  'git, github, gitlab': '99%',
  'mongodb, mysql': '95%',
  'webpack, gulp': '99%',
  'sass, postcss': '99%',
  'php, symfony': '95%',
  'html, css, js': '99%',
});

const { innerWidth, innerHeight } = window;

new AnimateOnWaypoint(
  '.news, .project',
  'fade-in-on-waypoint',
  innerHeight - (innerWidth < 1024 ? 10 : 15)
);
new AnimateOnWaypoint(
  '.flipping-card',
  'animate-f-cards-on-waypoint',
  'bottom-in-view'
);
new AnimateOnWaypoint(
  '.skill__percentage-bar',
  'slide-on-waypoint',
  'bottom-in-view'
);
new AnimateOnWaypoint('.footer__link', 'shake-on-waypoint', 'bottom-in-view');

new FlipCardsOnHover();

new SendSubscriptionEmail();

new BackToTopOnClick();
