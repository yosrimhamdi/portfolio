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

    particlesJS.load('particles__container', '/assets/particles.json');
  }

  onWindowResize = () => {
    if (window.innerWidth >= 1024) {
      this.init();
      window.removeEventListener('resize', this.onWindowResize);
    }
  };
}

export default InitParticles;
