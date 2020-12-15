class SlideProgressBarOnWaypoint {
  constructor() {
    this.bars = document.querySelectorAll('.skill__percentage-bar');

    this.performAction(this.setInitialClass);
    this.performAction(this.setWaypoints);
  }

  performAction(action) {
    this.bars.forEach(action);
  }

  setInitialClass(bar) {
    bar.classList.add('slide-on-waypoint');
  }

  setWaypoints(bar) {
    const { Waypoint } = window;

    new Waypoint({
      offset: '96%',
      element: bar,
      handler() {
        bar.classList.add('slide-on-waypoint--reached');
      },
    });
  }
}
export default SlideProgressBarOnWaypoint;
