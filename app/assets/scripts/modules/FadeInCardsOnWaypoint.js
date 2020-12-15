class FadeCardsInOnWaypoint {
  constructor() {
    this.cards = document.querySelectorAll('.card');

    this.performAction(this.setInitialClass);
    this.performAction(this.setWaypoints);
  }

  performAction(action) {
    this.cards.forEach(action);
  }

  setInitialClass(card) {
    card.classList.add('fade-in-on-waypoint');
  }

  setWaypoints(card) {
    const { Waypoint } = window;

    new Waypoint({
      offset: '70%',
      element: card,
      handler() {
        card.classList.add('fade-in-on-waypoint--reached');
      },
    });
  }
}

export default FadeCardsInOnWaypoint;
