class RevealContentOnClick {
  constructor() {
    this.button = document.getElementById('toggle-view-button');

    this.setEvent();
  }

  setEvent() {
    document.addEventListener('DOMContentLoaded', () => {
      this.button.addEventListener('click', this.animate);
    });
  }

  animate = () => {
    document.body.classList.toggle('content-shown');
  };
}

export default RevealContentOnClick;
