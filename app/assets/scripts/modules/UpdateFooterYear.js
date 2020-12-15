class UpdateFooterYear {
  constructor() {
    this.footerYear = document.querySelector('.year');
    this.setCurrentYear();
  }
  setCurrentYear() {
    this.footerYear.textContent = new Date().getFullYear();
  }
}

export default UpdateFooterYear;
