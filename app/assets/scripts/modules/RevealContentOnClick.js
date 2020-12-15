import $ from 'jquery';

class RevealContentOnClick {
  constructor() {
    this.button = $('.button-main');
    this.body = $('body');

    this.events();
  }

  events() {
    this.button.click(this.animate.bind(this));
  }

  animate() {
    this.body.toggleClass('content-shown');
  }
}

export default RevealContentOnClick;
