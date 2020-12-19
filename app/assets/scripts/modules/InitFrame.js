import LoadingBar from './LoadingBar';

class InitFrame {
  constructor() {
    if (window.innerWidth >= 1024) {
      this.init();
    } else {
      this.setEvent();
    }
  }

  setEvent() {
    window.addEventListener('resize', this.onWindowResize);
  }

  init() {
    const { particlesJS } = window;

    particlesJS.load('particles__container', '/assets/particles.json');

    new LoadingBar();
  }

  onWindowResize = () => {
    if (window.innerWidth >= 1024) {
      this.init();

      window.removeEventListener('resize', this.onWindowResize);
    }
  };
}

export default InitFrame;
