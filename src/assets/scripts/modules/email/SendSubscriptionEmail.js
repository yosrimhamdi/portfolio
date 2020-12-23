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

    this.button.addEventListener('click', this.onButtonClick);
  }

  onButtonClick = e => {
    e.preventDefault();

    const user = {
      to_name: this.input.name.value,
      to_email: this.input.email.value,
    };

    if (isEmail(user.to_email) && user.to_name) {
      this.sendMail(template_id, {
        ...user,
        message_html: 'you have just submitted to our website.',
      });
      this.sendMail(template_id_me, user);

      this.clearInputs();
    }
  };

  async sendMail(template, mail) {
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

  clearInputs() {
    this.input.name.value = '';
    this.input.email.value = '';
  }
}

export default SendSubscriptionEmail;
