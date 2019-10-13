import $ from 'jquery';

class FadeInOnScroll {
  constructor() {
    this.elements = $('.news__box');
    this.setInitialClass();
    this.setWaypoints();
  }
  setInitialClass() {
    this.elements.addClass('fadeInOnScroll');
  }
  setWaypoints() {
    this.elements.each((index,el) => {
     new Waypoint({
      element: el,
      handler: () => {
        $(el).addClass('fadeInOnScroll--is-active');
        setTimeout(Waypoint.refreshAll, 1);
      },
      offset: '90%'
     });
    });
  }
}

export default FadeInOnScroll;