import $ from 'jquery';

class SlideProgressBarOnWaypoint {
  constructor() {
    this.progressBars = $('.skill__percentage-bar');
    this.createWaypoints();
    this.setInitialClass();
  }

  setInitialClass() {
    this.progressBars.addClass('slide-on-waypoint');
  }

  createWaypoints() {
    this.progressBars.each(function (index, el) {
      //eslint-disable-next-line
      new Waypoint({
        element: el,
        handler() {
          $(el).addClass('slide-on-waypoint--reached');
        },
        offset: '96%',
      });
    });
  }
}
export default SlideProgressBarOnWaypoint;
