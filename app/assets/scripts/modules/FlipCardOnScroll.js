import $ from 'jquery';

class FlipCardOnScroll {
  constructor() {
    this.frontSide = $('.flipping-card__front');
    this.backSide = $('.flipping-card__back');
    this.triggerPoint = $('#trigger-point');
    this.createWaypoints();
  }
  createWaypoints() {
    const that = this;
    new Waypoint({
      element: that.triggerPoint[0],
      handler: function() {
        that.frontSide.css('transform', 'rotateY(180deg)');
        that.backSide.css('transform', 'rotateY(0)');
      },
      offset: '40%'
    });
  }
}

export default FlipCardOnScroll;