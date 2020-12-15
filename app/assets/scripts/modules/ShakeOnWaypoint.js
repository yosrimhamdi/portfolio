import $ from 'jquery';

class ShakeOnWaypoint {
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
        this.elements.addClass('shake-on-waypoint');
      },
      offset: '80%',
    });
  }
}

export default ShakeOnWaypoint;
