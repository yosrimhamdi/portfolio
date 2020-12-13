import $ from 'jquery';

class SlideOnClick {
  constructor() {
    this.button = $('.button-main');
    this.contentWrapper = $('.content-wrapper');
    this.html = $('html');

    this.initialClasses();
    this.events();
  }

  events() {
    this.button.click(this.animate.bind(this));
  }

  initialClasses() {
    this.contentWrapper.addClass('slide-on-click');
  }

  animate() {
    this.contentWrapper.toggleClass('slide-on-click--clicked');
  }
}

export default SlideOnClick;
