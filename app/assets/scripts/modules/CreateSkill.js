class CreateSkill {
  constructor(title, percentage) {
    this.container = document.getElementById('skills');
    this.title = title;
    this.percentage = percentage;

    // prettier-ignore
    this.template = '<div class="skill"><div class="flexbox flexbox--align-base"><h3 class="skill__title">%TITLE%</h3><p class="skill__percentage flexbox__margin-l-auto">%PERCENTAGE%</p></div><div class="skill__percentage-bar-container"><div class="skill__percentage-bar" style="width: %PERCENTAGE%"></div></div></div>';

    this.addSkill();
  }

  addSkill() {
    this.container.insertAdjacentHTML('beforeend', this.getHTMLSkill());
  }

  getHTMLSkill() {
    const html = this.template.replace('%TITLE%', this.title);

    return html.replace(/%PERCENTAGE%/g, this.percentage);
  }
}

export default CreateSkill;
