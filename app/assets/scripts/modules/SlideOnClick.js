import $ from 'jquery';

class SlideOnClick {
  constructor() {
    this.button = $('.button-main');
    this.contentWrapper = $('.content-wrapper');
    this.particles = $('.particles');
    this.html = $('html');

    this.initialClasses();
    this.events();
  }

  events() {
    this.button.click(this.animate.bind(this));
  }

  initialClasses() {
    this.contentWrapper.addClass('slide-on-click');
    this.particles.addClass('scale-on-click');
  }

  animate() {
    this.contentWrapper.toggleClass('slide-on-click--clicked');
    this.particles.toggleClass('scale-on-click--clicked');
  }
}

export default SlideOnClick;
