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
      to_email: '',
      to_name: '',
      message_html: `We will send you daily web developement trends.`
    }
    this.event();
  }
  event() {
    const that = this;
    this.button.click(function() {
      that.getUserData();
      if(validate(that.userInfo.to_email) && that.userInfo.to_name) {
        that.button.text('sending...');
        that.sendMail();
        that.clearInput();
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