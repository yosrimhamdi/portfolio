class ScrollBar {
  constructor() {
    this.scrollBar = document.querySelector('.scroll-bar');
    this.mainContent = document.querySelector('.content-wrapper__main-content');

    this.setEvent();
  }

  setEvent() {
    window.addEventListener('scroll', this.changeScrollBarWidth.bind(this));
  }

  changeScrollBarWidth() {
    const fullHeight = this.mainContent.offsetHeight - window.innerHeight;

    this.scrollBar.style.width = `${(window.scrollY * 100) / fullHeight}%`;
  }
}

export default ScrollBar;
