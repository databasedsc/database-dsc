'use strict';

var MultinationalProfilePage = function() {
  this.body = element(by.css('body'));

  // sections
  this.overview = element(by.id('overview'));
  this.details = element(by.id('details'));
  this.startupPackages = element(by.css('.startup-packages'));
  this.tags = element(by.id('tags'));
};

module.exports = new MultinationalProfilePage();
