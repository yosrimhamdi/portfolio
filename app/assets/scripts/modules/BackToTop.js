import $ from 'jquery';

class BackToTop {
  constructor() {
    this.button = document.querySelector('.back-to-top');

    this.setEvents();
  }

  setEvents() {
    this.button.addEventListener('click', this.backToTop);

    window.addEventListener('scroll', this.toggleButtonVisibility.bind(this));
  }

  toggleButtonVisibility() {
    const isVisible = this.button.classList.contains('back-to-top--visible');

    if (window.scrollY >= 800 && !isVisible) {
      this.button.classList.add('back-to-top--visible');
    } else if (window.scrollY < 800 && isVisible) {
      this.button.classList.remove('back-to-top--visible');
    }
  }

  backToTop() {
    const options = {
      scrollTop: $('.content-wrapper__main-content').offset().top,
    };

    $('html, body').animate(options, 800);
  }
}

export default BackToTop;
