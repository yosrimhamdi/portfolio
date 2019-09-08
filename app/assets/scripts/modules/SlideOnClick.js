import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class SlideOnClick {
  constructor() {
    this.button = $('.button-main');
    this.contentWrapper = $('.content-wrapper');
    this.animatedHero = $('.animated-hero');
    this.enableSmoothScroll();
    this.initialClasses();
    this.events();
  }
  events() {
    this.button.click(this.animate.bind(this));
  }
  initialClasses() {
    this.contentWrapper.addClass('slide-on-click');
    this.animatedHero.addClass('scale-on-click');
  }
  animate() {
    this.contentWrapper.toggleClass('slide-on-click--clicked');
    this.animatedHero.toggleClass('scale-on-click--clicked');
  }
  enableSmoothScroll() {
    this.button.smoothScroll();
  }
};

export default SlideOnClick;