class RevealContentOnClick {
  constructor() {
    this.button = document.querySelector('.button-main');
    this.body = document.body;

    this.events();
  }

  events() {
    this.button.addEventListener('click', this.animate.bind(this));
  }

  animate() {
    this.body.classList.toggle('content-shown');
  }
}

export default RevealContentOnClick;
