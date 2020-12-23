import $ from 'jquery';

class RevealContentOnClick {
  constructor() {
    this.button = document.getElementById('show-content-button');

    this.isMobile = window.innerWidth < 1024;

    this.setEvents();
  }

  setEvents() {
    this.button.addEventListener('click', this.getOnButtonClick());

    window.addEventListener('resize', this.onWindowResize);
  }

  getOnButtonClick = () => {
    if (this.isMobile) {
      return this.scrollToContent;
    }

    return this.toggleContentView;
  };

  onWindowResize = () => {
    const { innerWidth } = window;

    const { isMobile, button, getOnButtonClick } = this;

    if ((innerWidth >= 1024 && isMobile) || (innerWidth < 1024 && !isMobile)) {
      button.removeEventListener('click', getOnButtonClick());

      this.isMobile = innerWidth < 1024;

      button.addEventListener('click', getOnButtonClick());
    }
  };

  toggleContentView() {
    document.body.classList.toggle('content-shown');
  }

  scrollToContent() {
    const avatar = document.querySelector('.avatar');

    const options = {
      scrollTop: avatar.clientHeight,
    };

    $('html, body').animate(options, 500);
  }
}

export default RevealContentOnClick;
