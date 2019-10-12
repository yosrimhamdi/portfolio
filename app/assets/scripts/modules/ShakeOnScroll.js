import '../../../../node_modules/waypoints/lib/noframework.waypoints';
import $ from 'jquery';
class ShakeOnScroll {
  constructor() {
    this.elements = $('.flipping-card');
    this.setUpWaypoints();
  }
  setUpWaypoints() {
    this.elements.each(function(index, el) {
      new Waypoint({
        element: el,
        handler: () => {
          $(el).addClass("shakeOnScroll");
        },
        offset: '80%'
      });
    });
  }
}

export default ShakeOnScroll;