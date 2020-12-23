import { isEmail } from 'validator';
import * as emailjs from 'emailjs-com';
import { service_id, template_id, template_id_me, userId } from './config';

class SendSubscriptionEmail {
  constructor() {
    this.button = document.querySelector('.form__button');
    this.input = {
      name: document.querySelector('#name'),
      email: document.querySelector('#email'),
    };

    emailjs.init(userId);

    this.setEvent();
  }

  setEvent() {
    this.button.addEventListener('click', this.onButtonClick);
  }

  onButtonClick = e => {
    e.preventDefault();

    const mail = {
      to_name: this.input.name.value,
      to_email: this.input.email.value,
      message_html: `you have just submitted to our website.`,
    };

    if (isEmail(mail.to_email) && mail.to_name) {
      this.sendMailToUser(template_id, mail);
      this.sendMailToMe();

      this.clearInputs();
    }
  };

  clearInputs() {
    this.input.name.value = '';
    this.input.email.value = '';
  }

  async sendMailToUser(template, mail) {
    this.button.textContent = 'submitting...';

    try {
      await emailjs.send(service_id, template, mail);
      this.updateButtonText('check your mail!');
    } catch (err) {
      this.updateButtonText('error!');
    }
  }

  updateButtonText(newText) {
    this.button.textContent = newText;

    setTimeout(() => {
      this.button.textContent = 'submit';
    }, 5000);
  }

  sendMailToMe() {
    this.sendMailToUser(template_id_me);
  }
}

export default SendSubscriptionEmail;
