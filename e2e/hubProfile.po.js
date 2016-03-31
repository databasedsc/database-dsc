'use strict';

var HubProfilePage = function() {
  this.body = element(by.css('body'));

  // sections
  this.overview = element(by.id('overview'));
  this.details = element(by.id('details'));
  this.alumni = element(by.css('.alumni'));
};

module.exports = new HubProfilePage();
