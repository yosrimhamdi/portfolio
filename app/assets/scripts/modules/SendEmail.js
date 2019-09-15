import $ from 'jquery';
import {validate} from 'email-validator';
import * as emailjs from 'emailjs-com';

class SendEmail {
  constructor() {
    this.button = $('.form__button');
    this.input = $('.form__input');
    this.emailjs = {
      service_id: 'default_service',
      template_id: 'template_fqxB2jK3',
      template_id_me: 'tome',
      userId: 'user_LRXENJDLJYtP2cKZ0qAZT'
    }
    this.userInfo = {
      to_email: '',
      to_name: '',
      message_html: `you have just submitted to our website.`
    }
    this.event();
  }
  event() {
    const that = this;
    this.button.click(function(e) {
      that.getUserData();
      if(validate(that.userInfo.to_email) && that.userInfo.to_name) {
        that.button.text('submitting...');
        that.sendMailToUser();
        that.sendMailToMe();
        that.clearInput();
        return false;
      }
    });
  }
  getUserData() {
    this.userInfo.to_name = $('#name ').val();
    this.userInfo.to_email = $('#email').val();
  }
  clearInput() {
    this.input.val('');
  }
  updateBtnText(newText, resetText = 'submit') {
    this.button.text(newText);
    setTimeout(() => {
      this.button.text(resetText);
    }, 5000);
  }
  sendMailToUser() {
    emailjs.init(this.emailjs.userId);
    emailjs.send(this.emailjs.service_id, this.emailjs.template_id, this.userInfo)
  	.then(() =>{ 
      this.updateBtnText('check your mail!');
     }, () => {
      this.updateBtnText('check your mail!', 'error');
     });
  }
  sendMailToMe() {
    emailjs.send(this.emailjs.service_id,this.emailjs.template_id_me, this.userInfo)
  }
}

export default SendEmail;