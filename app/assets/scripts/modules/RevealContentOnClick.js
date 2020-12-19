import $ from 'jquery';

class RevealContentOnClick {
  constructor() {
    this.button = document.getElementById('show-content-button');

    this.isMobile = window.innerWidth < 1024;

    this.setEvent();
  }

  setEvent() {
    this.button.addEventListener('click', this.getHandler());

    window.addEventListener('resize', this.onWindowResize);
  }

  getHandler = () => {
    if (this.isMobile) {
      return this.scrollToContent;
    }

    return this.toggleContentView;
  };

  onWindowResize = () => {
    const { innerWidth } = window;

    const { isMobile, button, getHandler } = this;

    if ((innerWidth >= 1024 && isMobile) || (innerWidth < 1024 && !isMobile)) {
      button.removeEventListener('click', getHandler());

      this.isMobile = innerWidth < 1024;

      button.addEventListener('click', getHandler());
    }
  };

  toggleContentView() {
    document.body.classList.toggle('content-shown');
  }

  scrollToContent() {
    const option = {
      scrollTop: window.innerHeight,
    };

    $('html, body').animate(option, 500);
  }
}

export default RevealContentOnClick;
