class CreateSkills {
  constructor(skills) {
    this.container = document.getElementById('skills');
    this.skills = new Map(Object.entries(skills));

    // prettier-ignore
    this.template = '<div class="skill"><div class="flexbox flexbox--align-base flexbox--space-between"><h3 class="skill__title">%TITLE%</h3><p class="skill__percentage">%PERCENTAGE%</p></div><div class="skill__percentage-bar-container"><div class="skill__percentage-bar" style="width: %PERCENTAGE%"></div></div></div>';

    this.addSkills();
  }

  addSkills() {
    this.skills.forEach((percentage, skill) => {
      // prettier-ignore
      this.container.insertAdjacentHTML( 'beforeend', this.getHTMLSkill(skill, percentage));
    });
  }

  getHTMLSkill(title, percentage) {
    const html = this.template.replace('%TITLE%', title);

    return html.replace(/%PERCENTAGE%/g, percentage);
  }
}

export default CreateSkills;
