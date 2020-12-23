import config from './config';
import './particles';

class InitParticles {
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

    particlesJS('particles__container', config);
  }

  onWindowResize = () => {
    if (window.innerWidth >= 1024) {
      this.init();
      window.removeEventListener('resize', this.onWindowResize);
    }
  };
}

export default InitParticles;
