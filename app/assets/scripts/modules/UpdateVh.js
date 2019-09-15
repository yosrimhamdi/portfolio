class UpdateVh {
  constructor() {
    this.root = document.documentElement;
    this.updateVh();
/*     this.events(); */
  }
  events() {
    window.addEventListener('resize', this.updateVh.bind(this));
  }
  updateVh() {
    this.root.style.setProperty('--vh', `${this.vhValue()}px`);
  }
  vhValue() {
    return window.innerHeight;
  }
};

export default UpdateVh;