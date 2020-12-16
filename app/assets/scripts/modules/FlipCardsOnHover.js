class FlipCardsOnHover {
  constructor() {
    this.cards = document.querySelectorAll('.flipping-card');

    console.log(this.cards);

    this.setHoverEvent = this.setHoverEvent.bind(this);
    this.onCardHover = this.onCardHover.bind(this);

    this.performAction(this.setHoverEvent.bind(this));
  }

  performAction(action) {
    this.cards.forEach(action);
  }

  setHoverEvent(card) {
    card.addEventListener('mouseenter', this.onCardHover);
  }

  onCardHover({ target: card }) {
    card.classList.add('flipping-card-revealed');

    card.removeEventListener('mouseenter', this.onCardHover);
  }
}

export default FlipCardsOnHover;
