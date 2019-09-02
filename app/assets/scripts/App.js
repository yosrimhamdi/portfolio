import $ from 'jquery';
const body = $('body');
const contentWrapper = $('.content-wrapper');

$(document).on('load',function () {
  console.log('hello');
})
$('.button').click(function() {
  contentWrapper.toggleClass('translate-on-click');
});