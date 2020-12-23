import '../../../../../node_modules/waypoints/lib/noframework.waypoints';

class AnimateOnWaypoint {
  constructor(selector, animationClass, offset) {
    this.elements = document.querySelectorAll(selector);
    this.animationClass = animationClass;
    this.offset = offset;

    this.performAction(this.setInitialClass);
    this.performAction(this.setWaypoints);
  }

  performAction(action) {
    this.elements.forEach(action.bind(this));
  }

  setInitialClass(element) {
    element.classList.add(this.animationClass);
  }

  setWaypoints(element) {
    const { Waypoint } = window;

    new Waypoint({
      offset: this.offset,
      element,
      handler: () => {
        element.classList.add(`${this.animationClass}--animated`);
      },
    });
  }
}

export default AnimateOnWaypoint;
