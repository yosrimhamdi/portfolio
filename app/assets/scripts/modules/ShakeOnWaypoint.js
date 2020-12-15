class ShakeOnWaypoint {
  constructor() {
    this.filipingCards = document.querySelectorAll('.flipping-card');
    this.triggerPoint = document.getElementById('trigger-point');

    this.setWaypoint();
  }

  performAction(action) {
    this.filipingCards.forEach(action);
  }

  shake(card) {
    card.classList.add('shake-on-waypoint');
  }

  setWaypoint() {
    const { Waypoint } = window;

    new Waypoint({
      offset: '80%',
      element: this.triggerPoint,
      handler: () => {
        this.performAction(this.shake);
      },
    });
  }
}

export default ShakeOnWaypoint;
