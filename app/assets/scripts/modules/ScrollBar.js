class ScrollBar {
  constructor() {
    this.scrollBar = document.querySelector('.scroll-bar');
    this.getMainContentVisibleHeight = document.querySelector('.content-wrapper__main-content').offsetHeight - window.innerHeight;
    this.setEvent();
  }
  setEvent() {
    window.addEventListener('scroll', this.changeScrollBarWidth.bind(this));
  }
  changeScrollBarWidth() {
    this.scrollBar.style.height = `${(window.scrollY*100)/this.getMainContentVisibleHeight}%`
  }
}

export default ScrollBar;