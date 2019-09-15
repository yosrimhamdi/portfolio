import $ from 'jquery';

class SlideOnClick {
  constructor() {
    this.button = $('.button-main');
    this.contentWrapper = $('.content-wrapper');
    this.animatedHero = $('.animated-hero');
    this.html = $('html');
    this.disableJump();
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
    if (window.innerWidth >= 1024) {
      this.html.toggleClass('overflow-x-visible');
    }
  }
  disableJump() {
    if (window.innerWidth >= 1024) {
      this.button.attr('href','#1');
    } else {
      this.html.addClass('overflow-x-visible');
    }
  }
};

export default SlideOnClick;