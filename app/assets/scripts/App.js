import '../../../node_modules/waypoints/lib/noframework.waypoints';
import Typed from 'typed.js';
import './modules/particles.js';

import LoadingBar from './modules/LoadingBar';
import UpdateFooterYear from './modules/UpdateFooterYear';
import FadeInOnWaypoint from './modules/FadeInOnWaypoint';
import ShakeOnWaypoint from './modules/ShakeOnWaypoint';
import SendSubscriptionEmail from './modules/SendSubscriptionEmail';
import UpdateVh from './modules/UpdateVh';
import RevealContentOnClick from './modules/RevealContentOnClick';
import TriggerProgressBarAnimationOnWaypoint from './modules/TriggerProgressBarAnimationOnWaypoint';
import CreateSkill from './modules/CreateSkill';

if (window.innerWidth >= 1024) {
  new RevealContentOnClick();
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
new SendSubscriptionEmail();
new ShakeOnWaypoint();
new FadeInOnWaypoint();
new LoadingBar();
new UpdateFooterYear();
