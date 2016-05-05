"use strict";

describe('Login Page', function() {
  var page;

  beforeEach(function (){
    page = require('./login.po');
    browser.executeScript('window.localStorage.clear()');
    browser.get('#/login');
  });

  describe('correct login credentials', function() {
    it("should redirect to /admin", function() {
      page.emailField.sendKeys('test@test.com');
      page.passwordField.sendKeys('12345678');
      page.submitButton.click();

      expect(page.body.getText()).toContain('Admin Dashboard');
    });
  });


  describe('incorrect login', function () {
    it('should display "incorrect email/password" alert', function() {
      page.emailField.sendKeys('false@test.com');
      page.passwordField.sendKeys('false');
      page.submitButton.click();

      expect(page.body.getText()).toContain('Email/Password incorrect! Please try again.');
    })
  });

  describe('access admin without login', function () {
    it('should return to login page', function() {
      browser.get('#/admin');

      expect(page.body.getText()).toContain('Sign in');
    })
  })

  describe('logout', function (){
    it('should return to login page after logout', function(){
      page.emailField.sendKeys('test@test.com');
      page.passwordField.sendKeys('12345678');
      page.submitButton.click();

      expect(page.body.getText()).toContain('Logout!');

      page.logoutButton.click();

      expect(page.body.getText()).toContain('Sign in');
    })
  })


});
