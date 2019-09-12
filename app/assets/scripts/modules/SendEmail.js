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
      userId: 'user_LRXENJDLJYtP2cKZ0qAZT'
    }
    this.userInfo = {
      to_email: 'pmon12091@gmail.com',
      to_name: 'James',
      message_html: `We will send you daily web developement trends.`
    }
    this.event();
  }
  event() {
    const that = this;
    this.button.click(function() {
      that.updateBtnText('sending...');
      that.getUserData();
      if(validate(that.userInfo.to_email)) {
        that.sendMail();
        that.clearInput();
      }
    });
  }
  updateBtnText(text) {
    this.button.text(text);
  }
  getUserData() {
    this.userInfo.to_email = $('.form__input').val();
    this.userInfo.to_name = 'Ahmed';
  }
  clearInput() {
    this.input.val('');
  }
  sendMail() {
    const button = this.button;
    emailjs.init(this.emailjs.userId);
    emailjs.send(this.emailjs.service_id, this.emailjs.template_id, this.userInfo)
  	.then(function(){ 
      button.text("sent!");
     }, function(err) {
      button.text("send");
    });
  }
}

export default SendEmail;