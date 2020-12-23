class FlipCardsOnHover {
  constructor() {
    this.cards = document.querySelectorAll('.flipping-card');

    this.performAction(this.setHoverEvent);
  }

  performAction(action) {
    this.cards.forEach(action);
  }

  setHoverEvent = card => {
    card.addEventListener('mouseenter', this.onCardHover);
  };

  onCardHover = ({ target: card }) => {
    card.classList.add('flipping-card-revealed');

    card.removeEventListener('mouseenter', this.onCardHover);
  };
}

export default FlipCardsOnHover;
