import $ from 'jquery';

class BackToTop {
  constructor() {
    this.button = document.querySelector('.back-to-top-button');

    this.setEvents();
  }

  setEvents() {
    this.button.addEventListener('click', this.backToTop);

    window.addEventListener('scroll', this.toggleButtonVisibility);
  }

  toggleButtonVisibility = () => {
    const className = 'back-to-top-button--visible';
    const isVisible = this.button.classList.contains(className);

    if (window.scrollY >= 800 && !isVisible) {
      this.button.classList.add(className);
    } else if (window.scrollY < 800 && isVisible) {
      this.button.classList.remove(className);
    }
  };

  backToTop() {
    const options = {
      scrollTop: $('.content-wrapper__main-content').offset().top,
    };

    $('html, body').animate(options, 500);
  }
}

export default BackToTop;
