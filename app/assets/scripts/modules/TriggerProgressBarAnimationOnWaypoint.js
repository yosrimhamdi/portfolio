import '../../../../node_modules/waypoints/lib/noframework.waypoints';
import $ from 'jquery';

class TriggerProgressBarAnimationOnWaypoint {
  constructor() {
    this.progressBars = $('.skill__percentage-bar');
    this.createWaypoints();
  }

  createWaypoints() {
    this.progressBars.each(function (index, el) {
      //eslint-disable-next-line
      new Waypoint({
        element: el,
        handler() {
          $(el).addClass('skill__percentage-bar--animated');
        },
        offset: '96%',
      });
    });
  }
}
export default TriggerProgressBarAnimationOnWaypoint;
