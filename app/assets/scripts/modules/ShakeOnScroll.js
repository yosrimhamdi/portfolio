import '../../../../node_modules/waypoints/lib/noframework.waypoints';
import $ from 'jquery';

class ShakeOnScroll {
  constructor() {
    this.elements = $('.flipping-card');
    this.triggerPoint = $('#trigger-point');
    this.setUpWaypoint();
  }
  setUpWaypoint() {
    const that = this;
    new Waypoint({
      element: that.triggerPoint[0],
      handler: () => {
        this.elements.addClass('shakeOnScroll');
      },
      offset: '80%',
    });
  }
}

export default ShakeOnScroll;
