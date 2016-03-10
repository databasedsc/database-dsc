'use strict';

var LoginPage = function() {
  this.body = element(by.css('body'));
  this.emailField = element(by.css('#inputEmail'));
  this.passwordField = element(by.css('#inputPassword'));
  this.submitButton = element(by.css('button.btn-primary'));
  this.logoutButton = element(by.css('#logout'));
};

module.exports = new LoginPage();
