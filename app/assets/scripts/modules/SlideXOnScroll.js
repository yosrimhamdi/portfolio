import $ from 'jquery';

class SlideXOnScroll {
  constructor(elements, offset, animationClass) {
    this.elements = elements;
    this.offset = offset;
    this.animationClass = animationClass;
    this.setInitialClass();
    this.setWaypoint();
  }
  setInitialClass() {
    this.elements.addClass(this.animationClass);
  }
  setWaypoint() {
    const that = this;
    this.elements.each((index, el) => {
      new Waypoint({
        element: el,
        handler: () => {
          $(el).addClass(`${that.animationClass}--is-active`);
          setTimeout(Waypoint.refreshAll, 1);
        },
        offset: that.offset,
      });
    });
  }
}

export default SlideXOnScroll;
