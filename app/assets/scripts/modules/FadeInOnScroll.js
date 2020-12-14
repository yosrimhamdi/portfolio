import $ from 'jquery';

class FadeInOnScroll {
  constructor() {
    this.elements = $('.card');

    this.setInitialClass();
    this.setWaypoints();
  }

  setInitialClass() {
    this.elements.addClass('fade-in-on-scroll');
  }

  setWaypoints() {
    this.elements.each((index, el) => {
      new Waypoint({
        element: el,
        handler: () => {
          $(el).addClass('fade-in-on-scroll--is-active');
          setTimeout(Waypoint.refreshAll, 1);
        },
        offset: '70%',
      });
    });
  }
}

export default FadeInOnScroll;
