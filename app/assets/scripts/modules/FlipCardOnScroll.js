import $ from 'jquery';

class FlipCardOnScroll {
  constructor() {
    this.frontSide = $('.flipping-card__front');
    this.backSide = $('.flipping-card__back');
    this.createWaypoints();
  }
  createWaypoints() {
    const that = this;
    this.frontSide.each(function(index, el) {
      new Waypoint({
        element: el,
        handler: function() {
          that.frontSide.css('transform', 'rotateY(180deg)');
          that.backSide.css('transform', 'rotateY(0)');
        },
        offset: '50%'
      });
    });
  }
}

export default FlipCardOnScroll;