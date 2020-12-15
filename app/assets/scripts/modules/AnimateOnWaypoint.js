class AnimateOnWaypoint {
  constructor() {
    this.filipingCards = document.querySelectorAll('.flipping-card');

    this.performAction(this.setInitialClass);
    this.performAction(this.setWaypoints);
  }

  performAction(action) {
    this.filipingCards.forEach(action);
  }

  setInitialClass(card) {
    card.classList.add('animate-f-cards-on-waypoint');
  }

  setWaypoints(card) {
    const { Waypoint } = window;

    new Waypoint({
      offset: '70%',
      element: card,
      handler() {
        card.classList.add('animate-f-cards-on-waypoint--animated');
      },
    });
  }
}

export default AnimateOnWaypoint;
